export interface StateData {
  name: string;
  slug: string;
  highCourt: string;
  policeAuthority: string;
  drtLocations: string;
}

export const statesData: StateData[] = [
  {
    name: 'Maharashtra',
    slug: 'maharashtra',
    highCourt: 'Bombay High Court',
    policeAuthority: 'Maharashtra Police Cyber Cell',
    drtLocations: 'Mumbai, Pune, and Nagpur'
  },
  {
    name: 'Delhi',
    slug: 'delhi',
    highCourt: 'Delhi High Court',
    policeAuthority: 'Delhi Police Economic Offences Wing',
    drtLocations: 'New Delhi'
  },
  {
    name: 'Karnataka',
    slug: 'karnataka',
    highCourt: 'Karnataka High Court',
    policeAuthority: 'Bengaluru City Police Cyber Crime Branch',
    drtLocations: 'Bengaluru'
  },
  {
    name: 'Tamil Nadu',
    slug: 'tamil-nadu',
    highCourt: 'Madras High Court',
    policeAuthority: 'Tamil Nadu Cyber Crime Wing',
    drtLocations: 'Chennai, Madurai, and Coimbatore'
  },
  {
    name: 'Telangana',
    slug: 'telangana',
    highCourt: 'Telangana High Court',
    policeAuthority: 'Hyderabad Cyber Crime Police Station',
    drtLocations: 'Hyderabad'
  },
  {
    name: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    highCourt: 'Allahabad High Court',
    policeAuthority: 'UP Police Cyber Crime Cell',
    drtLocations: 'Lucknow and Allahabad'
  },
  {
    name: 'Gujarat',
    slug: 'gujarat',
    highCourt: 'Gujarat High Court',
    policeAuthority: 'Gujarat Police CID Crime Branch',
    drtLocations: 'Ahmedabad'
  },
  {
    name: 'West Bengal',
    slug: 'west-bengal',
    highCourt: 'Calcutta High Court',
    policeAuthority: 'Kolkata Police Cyber Crime Cell',
    drtLocations: 'Kolkata'
  }
];
