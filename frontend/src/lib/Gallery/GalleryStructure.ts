
export interface GalleryType{

  title: string,
  description: string,
  images: Gallery[],
  cardImage: string
}

interface Gallery {

  url: string
}

export default function GalleryStructure(fetchData: any){
  

  const complete_gallery = fetchData.map((item: any) => {

    let single_point: GalleryType = {

      title: item.attributes['title'],
      description: item.attributes['description'],
      images: imageProcessor(item.attributes['images'].data),
      cardImage: item.attributes['images'].data[0].attributes['formats']['large']['url']
    }

    return single_point
  })  

  return complete_gallery
}

function imageProcessor(images: any): Gallery[]{

  let final_galleries: Gallery[] = images.map((item: any) => {

    let points = {

      url: item.attributes['formats']['large']['url']
    }
    
    return points
  })
  

  return final_galleries
}