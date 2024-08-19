

interface Merchandise{

  name: string,
  price: number,
  stock: number,
  image: singleImage[],
  category: string,
  description?: string, 
  color?: string,
  product_details?: string,
  care?: string,
}

interface singleImage{

  name: string,
  url: string
}




export default function fromDataToMerchandiseType(fetchData: any): Merchandise[]{  


  const formatted_data = fetchData.map((item: any) => {

    let new_item: Merchandise  = {

      name:  item.attributes['name'],
      price:  item.attributes['price'],
      description:  item.attributes['description'],
      stock:  item.attributes['stock'],
      category: item.attributes['category'],
      image:  imageArray(item.attributes['image'].data),
      color:  item.attributes['color']?? null,
      care:  item.attributes['headline'] ?? null,
      product_details:  item.attributes['publishedAt']?? null,
    };

     
    return new_item
  })  

  return formatted_data
}

// item.attributes['jersey'].data[0].attributes['formats']['large']['url']


function imageArray(images: any): singleImage[]{

  const all_images: singleImage[] = images.map((item: any) => {

    let single_image: singleImage = {

      name: item.attributes.name,
      url: item.attributes['formats']['large']['url']
    }

    return single_image  
  }) 

  return all_images
}