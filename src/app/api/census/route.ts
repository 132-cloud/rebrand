import { NextRequest, NextResponse } from 'next/server';
import { fetchCensusData, fetchCensusMetadata } from '@/lib/census';

/**
 * GET /api/census
 * 
 * Query params:
 *   - get (required): fields to retrieve, e.g. "group(CB2300CBP)"
 *   - NAICS2017: NAICS code filter
 *   - EMPSZES: employment size class
 *   - ucgid: geographic identifiers
 *   - metadata: if "true", returns API metadata instead of data
 * 
 * Example:
 *   /api/census?get=group(CB2300CBP)&NAICS2017=pseudo(N0200.00)&EMPSZES=230&ucgid=0400000US27,0400000US47,0400000US48,0400000US55
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Return metadata if requested
  if (searchParams.get('metadata') === 'true') {
    try {
      const metadata = await fetchCensusMetadata();
      return NextResponse.json(metadata);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to fetch metadata' },
        { status: 500 }
      );
    }
  }

  // Validate required param
  const get = searchParams.get('get');
  if (!get) {
    return NextResponse.json(
      { error: 'Missing required "get" parameter' },
      { status: 400 }
    );
  }

  try {
    const data = await fetchCensusData({
      get,
      NAICS2017: searchParams.get('NAICS2017') || undefined,
      EMPSZES: searchParams.get('EMPSZES') || undefined,
      ucgid: searchParams.get('ucgid') || undefined,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch census data' },
      { status: 500 }
    );
  }
}
