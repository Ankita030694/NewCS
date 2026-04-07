'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowTrendUp, 
  faLink, 
  faBullhorn, 
  faShareNodes,
  faChartSimple
} from '@fortawesome/free-solid-svg-icons';

type AnalyticsData = {
  totalLeads: number;
  bySource: { name: string; count: number }[];
  byUrl: { name: string; count: number }[];
  byCampaign: { name: string; count: number }[];
  dailyLeads: { date: string; count: number }[];
};

const toTimestamp = (value: string, endOfDay = false): number | null => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  if (endOfDay) date.setHours(23, 59, 59, 999);
  else date.setHours(0, 0, 0, 0);
  return date.getTime();
};

const AnalyticsClient = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        const fromTimestamp = toTimestamp(fromDate);
        if (fromTimestamp) params.set('from', `${fromTimestamp}`);
        const toTimestampValue = toTimestamp(toDate, true);
        if (toTimestampValue) params.set('to', `${toTimestampValue}`);

        const response = await fetch(`/api/authority/analytics?${params.toString()}`, {
          method: 'GET',
          cache: 'no-store'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }

        const payload = await response.json();
        setData(payload);
      } catch (err) {
        console.error('Analytics error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error loading analytics');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [fromDate, toDate]);

  if (isLoading && !data) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <span className="text-sm font-medium text-slate-500">Loading analytics...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Date Filters & Insights */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <header className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-[#0C2756]">Performance Overview</h2>
          <p className="text-sm text-slate-500">Analyze lead attribution and conversion sources</p>
        </header>

        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/50 p-2 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Time Range</span>
          </div>
          <div className="h-6 w-px bg-slate-200" />
          <DateInput
            id="from-date"
            label="From"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <div className="h-4 w-4 border-t border-slate-300" />
          <DateInput
            id="to-date"
            label="To"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Leads"
          value={data?.totalLeads ?? 0}
          icon={faArrowTrendUp}
          color="blue"
        />
        <StatCard
          title="Top Source"
          value={data?.bySource[0]?.name || 'N/A'}
          subtitle={`${data?.bySource[0]?.count || 0} leads`}
          icon={faShareNodes}
          color="emerald"
        />
        <StatCard
          title="Active Campaigns"
          value={data?.byCampaign.filter(c => c.name !== 'none').length ?? 0}
          icon={faBullhorn}
          color="amber"
        />
        <StatCard
          title="Conversion URLs"
          value={data?.byUrl.length ?? 0}
          icon={faLink}
          color="indigo"
        />
      </div>

      {/* Detailed Tables */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* URL Breakdown */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Leads by URL</h3>
                <p className="text-xs text-slate-500">Distribution across landing pages</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <AnalyticsTable 
              headers={['Page Path', 'Leads', 'Share']}
              rows={(data?.byUrl || []).map(item => [
                <span key={item.name} className="font-medium text-slate-700" title={item.name}>
                  {item.name === 'no-url' ? 'Direct/Organic' : (item.name.replace(/^https?:\/\/[^/]+/, '') || '/')}
                </span>,
                <span key={`${item.name}-count`} className="font-semibold text-slate-900">{item.count}</span>,
                <ProgressBar key={`${item.name}-progress`} value={item.count} total={data?.totalLeads || 1} />
              ])}
            />
          </div>
        </div>

        {/* Source Breakdown */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FontAwesomeIcon icon={faShareNodes} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Traffic Sources</h3>
                <p className="text-xs text-slate-500">UTM Source performance</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <AnalyticsTable 
              headers={['Source', 'Leads', 'Share']}
              rows={(data?.bySource || []).map(item => [
                <span key={item.name} className="capitalize font-medium text-slate-700">{item.name}</span>,
                <span key={`${item.name}-count`} className="font-semibold text-slate-900">{item.count}</span>,
                <ProgressBar key={`${item.name}-progress`} value={item.count} total={data?.totalLeads || 1} color="emerald" />
              ])}
            />
          </div>
        </div>

        {/* Campaign Breakdown */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FontAwesomeIcon icon={faBullhorn} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Marketing Campaigns</h3>
                <p className="text-xs text-slate-500">UTM Campaign analysis</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <AnalyticsTable 
              headers={['Campaign ID / Name', 'Leads', 'Performance']}
              rows={(data?.byCampaign || []).filter(c => c.name !== 'none').map(item => [
                <span key={item.name} className="font-mono text-[11px] text-slate-600">{item.name}</span>,
                <span key={`${item.name}-count`} className="font-semibold text-slate-900">{item.count}</span>,
                <div key={`${item.name}-perf`} className="flex items-center gap-3">
                    <ProgressBar value={item.count} total={data?.totalLeads || 1} color="amber" />
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                        {Math.round((item.count / (data?.totalLeads || 1)) * 100)}%
                    </span>
                </div>
              ])}
              emptyMessage={data?.byCampaign.filter(c => c.name !== 'none').length === 0 ? "No campaign data available for this range" : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon, color }: { title: string; value: string | number; subtitle?: string; icon: any; color: 'blue' | 'emerald' | 'amber' | 'indigo' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${colors[color]}`}>
        <FontAwesomeIcon icon={icon} className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">{title}</p>
        <h4 className="mt-1 text-3xl font-black text-slate-900">{value}</h4>
        {subtitle && <p className="mt-1 text-xs font-medium text-slate-500">{subtitle}</p>}
      </div>
      {/* Subtle geometric pattern */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-slate-50/50 transition-transform group-hover:scale-125" />
    </div>
  );
};

const AnalyticsTable = ({ headers, rows, emptyMessage }: { headers: string[]; rows: ReactNode[][], emptyMessage?: string }) => {
  if (rows.length === 0 && emptyMessage) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm text-slate-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-50">
            {headers.map((h, i) => (
              <th key={h} className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 ${i === headers.length - 1 ? 'text-right' : ''}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rows.map((row, i) => (
            <tr key={i} className="transition hover:bg-slate-50/50">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-4 text-sm ${j === row.length - 1 ? 'text-right' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProgressBar = ({ value, total, color = 'blue' }: { value: number; total: number; color?: 'blue' | 'emerald' | 'amber' }) => {
  const percentage = Math.max(2, (value / total) * 100);
  const colors = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-400'
  };

  return (
    <div className="h-1.5 w-full max-w-[120px] ml-auto overflow-hidden rounded-full bg-slate-100">
      <div 
        className={`h-full rounded-full ${colors[color]} transition-all duration-1000`} 
        style={{ width: `${percentage}%` }} 
      />
    </div>
  );
};

const DateInput = ({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (e: any) => void }) => (
  <div className="flex items-center gap-2 px-3 py-1.5">
    <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
      {label}
    </label>
    <input
      id={id}
      type="date"
      className="bg-transparent text-sm font-semibold text-slate-700 outline-none focus:text-blue-600"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AnalyticsClient;
