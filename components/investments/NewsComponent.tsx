import Image from 'next/image';
import Link from 'next/link'

interface Props {
  article: any;
  key: number;
}

const NewsComponent = ({ article, key }: Props) => {
  return (
    <Link key={key} href={article.url} className='flex justify-between items-center hover:bg-gray-700 space-x-7 h-[90px] p-2 rounded-xl'>
      <Image alt='news-image' height={40} width={40} src={article.urlToImage} className='rounded-xl h-14 w-14' />
      <div className='flex flex-col'>
        <p className='text-lg font-semibold text-gray-300'>{article.title}</p>
        <p className='text-gray-400'>{article.author}</p>

      </div>
    </Link>
  )
}

export default NewsComponent
