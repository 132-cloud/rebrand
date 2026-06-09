/**
 * Census Bureau API Client
 * 
 * Data endpoint: https://api.census.gov/data/2023/cbp
 * Metadata: https://api.census.gov/data/2023/cbp
 * 
 * County Business Patterns (CBP) 2023
 */

const CENSUS_BASE_URL = 'https://api.census.gov/data/2023/cbp';

export interface CensusQueryParams {
  /** Fields to retrieve, e.g. "group(CB2300CBP)" */
  get: string;
  /** NAICS code filter, e.g. "pseudo(N0200.00)" */
  NAICS2017?: string;
  /** Employment size class, e.g. "230" */
  EMPSZES?: string;
  /** Geographic identifiers, e.g. "0400000US27,0400000US47,0400000US48,0400000US55" */
  ucgid?: string;
  /** Optional Census API key for higher rate limits */
  key?: string;
}

/**
 * Fetch data from the Census Bureau CBP API.
 * Returns the raw JSON array response (header row + data rows).
 */
export async function fetchCensusData(params: CensusQueryParams): Promise<string[][]> {
  const url = new URL(CENSUS_BASE_URL);

  url.searchParams.set('get', params.get);

  if (params.NAICS2017) {
    url.searchParams.set('NAICS2017', params.NAICS2017);
  }
  if (params.EMPSZES) {
    url.searchParams.set('EMPSZES', params.EMPSZES);
  }
  if (params.ucgid) {
    url.searchParams.set('ucgid', params.ucgid);
  }
  if (params.key) {
    url.searchParams.set('key', params.key);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(
      `Census API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Fetch Census API metadata (available variables, geographies, etc.)
 */
export async function fetchCensusMetadata(): Promise<Record<string, unknown>> {
  const response = await fetch(CENSUS_BASE_URL);

  if (!response.ok) {
    throw new Error(
      `Census metadata error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Pre-configured query for CBP data across MN, TN, TX, WI
 * (NAICS pseudo N0200.00, employment size 230)
 */
export async function fetchCBPStateData() {
  return fetchCensusData({
    get: 'group(CB2300CBP)',
    NAICS2017: 'pseudo(N0200.00)',
    EMPSZES: '230',
    ucgid: '0400000US27,0400000US47,0400000US48,0400000US55',
  });
}
