

interface VideoType {

  link: string,
  category: string
}


export default function VideoTypeDisplay(fetchData: any): VideoType[]{

  
  const video_type = fetchData.map((item:any) => {

    let video = {

      link: item.attributes['video_link'],
      page: item.attributes['page'],
    }

    return video
  })
  
  return video_type
}