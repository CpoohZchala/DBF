import React from "react";
import newsData from "../data/news.json";

interface NewsItem {
  image: string;
  title:string;
  Description: string;
  Date: string;
}

const News: React.FC = () => {
  return (
    <section className="mt-10 py-10 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mt-15 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
          Latest News
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news: NewsItem, index) => (
            <div
              key={index}
              className="bg-white border-4 border-grey-300 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="w-full">
                <img
                  src={news.image}
                  alt="News"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
              <h1 className="text-blue-800 font-bold text-lg">{news.title}</h1>
                <p className="text-gray-800 font-normal text-sm">{news.Description}</p>
                <span className="text-sm text-gray-500 mt-2">Posted Date:📅 {news.Date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
