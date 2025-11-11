'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { LeadRecord } from './types';
import { DEFAULT_PAGE_SIZE } from './types';

type LeadsApiResponse = {
  data: LeadRecord[];
  pageInfo: {
    count: number;
    totalCount: number;
    hasNext: boolean;
    nextCursor: string | null;
  };
};

const DEBOUNCE_DELAY = 300;
const THROTTLE_DELAY = 600;

const formatDateTime = (value: number, fallback?: string) => {
  if (Number.isFinite(value) && value > 0) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }).format(date);
    }
  }
  return fallback && fallback.trim() !== '' ? fallback : '—';
};

const toTimestamp = (value: string, endOfDay = false): number | null => {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  } else {
    date.setHours(0, 0, 0, 0);
  }
  return date.getTime();
};

const LeadsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [committedSearch, setCommittedSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    totalCount: 0,
    hasNext: false,
    nextCursor: null as string | null
  });
  const [cursorHistory, setCursorHistory] = useState<(string | null)[]>([null]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeNote, setActiveNote] = useState<{ title: string; note: string } | null>(null);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const throttleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSearchCommitRef = useRef<number>(0);

  const activeCursor = cursorHistory[pageIndex] ?? null;

  const resetPagination = () => {
    setCursorHistory([null]);
    setPageIndex(0);
  };

  useEffect(() => {
    const now = Date.now();

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      const timeSinceLastCommit = now - lastSearchCommitRef.current;

      const commitSearch = () => {
        lastSearchCommitRef.current = Date.now();
        setCommittedSearch(searchTerm.trim());
        resetPagination();
      };

      if (timeSinceLastCommit >= THROTTLE_DELAY) {
        commitSearch();
      } else {
        if (throttleTimerRef.current) {
          clearTimeout(throttleTimerRef.current);
        }
        throttleTimerRef.current = setTimeout(commitSearch, THROTTLE_DELAY - timeSinceLastCommit);
      }
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    let cancelled = false;

    const fetchLeads = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        params.set('limit', `${DEFAULT_PAGE_SIZE}`);
        if (activeCursor) {
          params.set('cursor', activeCursor);
        }
        const fromTimestamp = toTimestamp(fromDate);
        if (typeof fromTimestamp === 'number') {
          params.set('from', `${fromTimestamp}`);
        }
        const toTimestampValue = toTimestamp(toDate, true);
        if (typeof toTimestampValue === 'number') {
          params.set('to', `${toTimestampValue}`);
        }
        if (committedSearch !== '') {
          params.set('search', committedSearch);
        }

        const response = await fetch(`/api/authority/leads?${params.toString()}`, {
          method: 'GET',
          cache: 'no-store'
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => ({}));
          const message =
            typeof payload.error === 'string'
              ? payload.error
              : `Failed to fetch leads (status ${response.status})`;
          throw new Error(message);
        }

        const payload = (await response.json()) as LeadsApiResponse;
        if (!cancelled) {
          setLeads(payload.data ?? []);
          setPageInfo({
            count: payload.pageInfo?.count ?? payload.data?.length ?? 0,
            totalCount: payload.pageInfo?.totalCount ?? 0,
            hasNext: payload.pageInfo?.hasNext ?? false,
            nextCursor: payload.pageInfo?.nextCursor ?? null
          });
        }
      } catch (err) {
        console.error('Error fetching leads:', err);
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error loading leads');
          setLeads([]);
          setPageInfo({
            count: 0,
            totalCount: 0,
            hasNext: false,
            nextCursor: null
          });
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchLeads();

    return () => {
      cancelled = true;
    };
  }, [activeCursor, fromDate, toDate, committedSearch]);

  const hasPrev = pageIndex > 0;
  const hasNext = pageInfo.hasNext && Boolean(pageInfo.nextCursor);
  const pageNumber = pageIndex + 1;
  const totalPages =
    pageInfo.totalCount > 0
      ? Math.max(1, Math.ceil(pageInfo.totalCount / DEFAULT_PAGE_SIZE))
      : Math.max(1, pageNumber);
  const displayPage = Math.min(pageNumber, totalPages);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleDateChange =
    (setter: (value: string) => void) =>
    (value: string) => {
      setter(value);
      resetPagination();
    };

  const handleNext = () => {
    if (!hasNext || !pageInfo.nextCursor) {
      return;
    }
    setCursorHistory((prev) => {
      const nextHistory = [...prev];
      nextHistory[pageIndex + 1] = pageInfo.nextCursor ?? null;
      return nextHistory;
    });
    setPageIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!hasPrev) {
      return;
    }
    setPageIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <fieldset className="flex flex-1 flex-wrap items-center gap-3">
          <div className="flex min-w-[200px] max-w-sm flex-1 items-center gap-2">
            <label htmlFor="search" className="text-[11px] uppercase tracking-wide text-slate-500">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300"
              placeholder="Search name, email, number or city"
              value={searchTerm}
              onChange={(event) => handleSearchChange(event.target.value)}
            />
          </div>
          <DateFilter
            id="from-date"
            label="From"
            value={fromDate}
            onChange={handleDateChange(setFromDate)}
          />
          <DateFilter
            id="to-date"
            label="To"
            value={toDate}
            onChange={handleDateChange(setToDate)}
          />
        </fieldset>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Showing</span>
          <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
            {pageInfo.count}
          </span>
          <span>of</span>
          <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
            {pageInfo.totalCount}
          </span>
          <span>records</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-[11px]">
            <thead className="bg-slate-50">
              <tr className="text-left text-[11px] uppercase tracking-wide text-slate-500">
                <Th className="w-[9%]">Created</Th>

                <Th className="w-[9%]">Name</Th>
                <Th className="w-[8%]">Number</Th>
                <Th className="w-[11%]">Email</Th>
                <Th className="w-[6%]">City</Th>
                <Th className="w-[8%]">Role</Th>
                <Th className="w-[8%]">Income</Th>
                <Th className="w-[8%]">CC Dues</Th>
                <Th className="w-[8%]">PL Dues</Th>
                <Th className="w-[5%]">Pay?</Th>
                <Th className="w-[5%]">Harass.</Th>
                <Th className="w-[8%]">Notes</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={13} className="px-4 py-12 text-center text-sm text-slate-500">
                    Loading leads…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={13} className="px-4 py-12 text-center text-sm text-red-500">
                    {error}
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-4 py-12 text-center text-sm text-slate-500">
                    No leads match the current criteria.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="bg-white/70 text-xs text-slate-700 transition hover:bg-slate-50"
                  >
                    <Td>
                      <div>
                        <p className="font-medium text-slate-900">
                          {formatDateTime(lead.created).split(',')[0]}
                        </p>
                        <span className="text-slate-500">
                          {formatDateTime(lead.created).split(',')[1]?.trim()}
                        </span>
                      </div>

                    </Td>
                   
                    <Td>
                      <span className="block max-w-[120px] truncate font-medium text-slate-900" title={lead.name}>
                        {lead.name || '—'}
                      </span>
                    </Td>
                    <Td>
                      <a
                        href={`tel:${lead.number}`}
                        className="block max-w-[110px] truncate text-slate-700 hover:text-slate-900"
                        title={lead.number}
                      >
                        {lead.number || '—'}
                      </a>
                    </Td>
                    <Td>
                      {lead.email ? (
                        <a
                          href={`mailto:${lead.email}`}
                          className="block max-w-[150px] truncate text-slate-700 hover:text-slate-900"
                          title={lead.email}
                        >
                          {lead.email}
                        </a>
                      ) : (
                        '—'
                      )}
                    </Td>
                    <Td>{lead.city || '—'}</Td>
                    <Td>
                      <span className="block max-w-[140px] truncate" title={lead.employmentStatus}>
                        {lead.employmentStatus || '—'}
                      </span>
                    </Td>
                    <Td>{lead.monthlyIncome || '—'}</Td>
                    <Td>{lead.creditCardDues || '—'}</Td>
                    <Td>{lead.personalLoanDues || '—'}</Td>
                    <Td>{lead.canPay || '—'}</Td>
                    <Td>{lead.harassment || '—'}</Td>
                    <Td>
                      <button
                        type="button"
                        className="max-w-[180px] overflow-hidden text-left text-slate-700 underline-offset-2 hover:underline"
                        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                        title={lead.queries}
                        onClick={() =>
                          lead.queries?.trim() &&
                          setActiveNote({ title: lead.name || lead.email || lead.number || lead.id, note: lead.queries })
                        }
                      >
                        {lead.queries?.trim() ? lead.queries : '—'}
                      </button>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50 px-4 py-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            Page {displayPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300"
              onClick={handlePrev}
              disabled={!hasPrev || isLoading}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300"
              onClick={handleNext}
              disabled={!hasNext || isLoading}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {activeNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="w-full max-w-lg rounded-2xl border border-[#0F8A5F]/20 bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F8A5F]">Lead note</p>
                <h3 className="text-lg font-semibold text-[#0C2756]">{activeNote.title}</h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-[#0F8A5F]/20 bg-[#0F8A5F]/10 px-3 py-1 text-xs font-semibold text-[#0F8A5F] transition hover:border-[#0F8A5F]/40 hover:bg-[#0F8A5F]/15"
                onClick={() => setActiveNote(null)}
              >
                Close
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl bg-[#F7FBEF] px-4 py-3 text-sm text-[#0C2756]">
              {activeNote.note}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type DateFilterProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const DateFilter = ({ id, label, value, onChange }: DateFilterProps) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-500"
    >
      {label}
      <input
        id={id}
        type="date"
        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};

type CellProps = {
  children: ReactNode;
  className?: string;
};

const Th = ({ children, className = '' }: CellProps) => (
  <th className={`px-2 py-1.5 font-semibold text-slate-500 ${className}`}>{children}</th>
);

const Td = ({ children, className = '' }: CellProps) => (
  <td className={`px-2 py-1.5 align-top text-[11px] text-slate-700 ${className}`}>{children}</td>
);

export default LeadsTable;

