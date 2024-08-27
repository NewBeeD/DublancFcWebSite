
interface PlayerType{

  firstname: string,
  lastname: string,
  birth_date: string,
  position: string,
  gender: string,
  league: string,
  foot?: string,
  kit?: number,
  height?: number,
  weight?: number,
  image: string,
  player_bio?: string,
  stats?: object,
}


export default function PlayerStructure(fetchData: any): PlayerType[] {  


  const players_data: PlayerType[] = fetchData.map((item: any) =>{    

    let data_point: PlayerType = {

      firstname: item.attributes['firstname'],
      lastname: item.attributes['lastname'],
      birth_date: item.attributes['birth_date'],
      position: item.attributes['position'],
      gender: item.attributes['gender'],
      league: item.attributes['league'],
      foot: item.attributes['foot']?? null,
      kit: item.attributes['kit']?? null,
      height: item.attributes['height']?? null,
      weight: item.attributes['weight']?? null,
      image: item.attributes['image'].data.attributes['formats']['large']['url'],
      player_bio: item.attributes['player_bio']?? null,
      stats: item.attributes['stats']?? {},
    }

    return data_point
  })

  return players_data
}