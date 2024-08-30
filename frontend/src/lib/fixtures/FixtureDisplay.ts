import formatDateTime from "@/util/DateTimeConversion"
import formatDateTimeStrings from "@/util/DateTimeFormat/TimeandDate"


export interface FixtureType{

  home_team: string,
  away_team: string,
  match_date: [string, string],
  home_team_score: number,
  away_team_score: number,
  venue: string,
  league: string,
  cancelled: boolean,
  complete: boolean
}

export default function FixtureDisplay(fetchData: any): FixtureType[]{

  let fixtures: FixtureType[] = fetchData.map(item => {

    let single_fixture = {

      home_team: item.attributes['home_team'],
      away_team: item.attributes['away_team'],
      match_date: formatDateTimeStrings(item.attributes['match_date']),
      home_team_score: item.attributes['home_team_score'],
      away_team_score: item.attributes['away_team_score'],
      venue: item.attributes['venue'],
      league: item.attributes['league'],
      cancelled: item.attributes['cancelled'],
      complete: item.attributes['complete']
    }

    return single_fixture
  })

  return fixtures 
}

