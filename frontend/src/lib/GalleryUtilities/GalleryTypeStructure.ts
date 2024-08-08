interface singleImage{

  name: string,
  url: string
}

interface GalleryType{

  title: string,
  images: singleImage[],
  description?: string
}



export default function fromDataToMerchandiseType(fetchData: any): GalleryType[]{  
 

  const formatted_data = fetchData.map((item: any) => {

    let new_item: GalleryType  = {

      title:  item.attributes['title'],
      images:  imageArray(item.attributes['images'].data),
      description:  item.attributes['description'],
    };

     
    return new_item
  })  
  
  return formatted_data
}


function imageArray(images: any): singleImage[]{ 
  

  const all_images: singleImage[] = images.map(item => {   

    let single_image: singleImage = {

      name: item.attributes.name,
      url: item.attributes['formats']['large']['url']
    }

    return single_image  
  }) 

  return all_images
}