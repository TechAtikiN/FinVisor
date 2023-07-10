'use client'
import { useEffect, useState } from "react"
import NewsComponent from "./NewsComponent"
import Link from "next/link"

type News = {
  title: string,
  url: string,
  urlToImage: string,
  author: string,
  publishedAt: Date
}

const News = () => {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`)
      const data = await res.json()
      setNews(data.articles)
      console.log(data.articles)
    }
    fetchNews()
  }, [])

  return (
    <div className='h-[440px] mt-5 bg-[#262631] rounded-lg p-4 ml-3'>
      <p className='text-xl text-left font-semibold pb-3 mt-2'>News</p>

      <div className='h-[340px] overflow-x-hidden overflow-y-scroll'>
        {news && news.map((article, index) => (
          <NewsComponent article={article} key={index} />
        ))}
      </div>
    </div>
  )
}

export default News
