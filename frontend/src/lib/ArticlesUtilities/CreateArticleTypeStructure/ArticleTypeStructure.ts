
export interface ArticleObject {

  id: number,
  title: string,
  content: string, 
  author: string,
  category: string,
  image: string,
  created: Date,
  video?: string,
  headline?: boolean
}

interface ItemAttributes {
  title: string;
  content: string;
  author: string;
  category: string;
  article_image: {
    data: {
      attributes: {
        formats: {
          large: {
            url: string;
          };
        };
      };
    }[];
  };
  video?: string;
  headline: string;
  publishedAt: string;
}



export default function fromDataToArticleType(fetchData: any): ArticleObject[]{



  const formatted_data = fetchData.map((item: any) => {

    let new_item: ArticleObject  = {

      id: item.id,
      title:  item.attributes['title'],
      content:  item.attributes['content'],
      author:  item.attributes['author'],
      category:  item.attributes['category'],
      image:  item.attributes['image'].data[0].attributes['formats']['large']['url'],
      video:  item.attributes['video']?? null,
      headline:  item.attributes['headline'],
      created:  item.attributes['publishedAt'],
    };

    return new_item
  })  
  

  return formatted_data  
}