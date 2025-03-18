import React from "react";
import newsData from "../data/news.json"

interface NewsItem {
  image: string;
  Description: string;
  Date: string;
}

const News: React.FC = () => {
  return (
    <section className="mt-15 py-10 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-6">Latest News</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {newsData.map((news, index) => (
            <div key={index} className="bg-white rounded-xl mt-10 shadow-lg overflow-hidden">
              <img
                src={news.image}
                alt="News"
                className="w-full h-120 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 font-extrabold text-lg">{news.Description}</p>
                <span className="text-sm text-gray-500 block mt-2">📅 {news.Date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
