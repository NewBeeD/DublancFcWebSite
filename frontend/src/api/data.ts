import type { NextApiRequest, NextApiResponse } from 'next';



export interface ArticleObject {

    title: string,
    content: string, 
    author: string,
    category: string,
    image: string,
    video?: string,
    headline?: boolean
}

const articles: ArticleObject[] = [
  {
    title: 'First Win for the boys',
    content: 'A confident win forthe boys, winning 3:0 in their first match vs agro processor', 
    author: 'Danphil Daniel',
    category: 'Men',
    image: '/Players/IMG_5973.jpg',
    video: 'none',
    headline: false
  },
  {
    title: 'Second Win for the boys',
    content: 'A true hero rises', 
    author: 'Eber Gren',
    category: 'Men',
    image: '/Players/IMG_5979.jpg',
    video: 'none',
    headline: false
  },
  {
    title: 'True fun around',
    content: 'What a boom from the wekend', 
    author: 'Abe Defoe',
    category: 'Women',
    image: '/Players/IMG_5975.jpg',
    video: 'none',
    headline: false
  },
  {
    title: 'Elbalf is coming',
    content: 'Zoro opens his eye to release the true power of a swordsman', 
    author: 'Terrance Howard',
    category: 'Men',
    image: '/Players/IMG_5986.jpg',
    video: 'none',
    headline: false
  },
  {
    title: 'Hollywood is not good',
    content: 'Gnostism propaganda is spread throughout', 
    author: 'Danphil Daniel',
    category: 'Men',
    image: '/Players/IMG_5961.jpg',
    video: 'none',
    headline: false
  }  
]


export default function handler(req: NextApiRequest, res: NextApiResponse<ArticleObject[]>) {
  res.status(200).json(articles);
}