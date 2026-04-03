
import { useState } from "react";
import Header from "./components/Header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data";

export default function App() {
  const [news, setNews] = useState(newsData);

  const getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = newsData.filter((item) => {
      return item.title.toLowerCase().includes(keywords.toLowerCase());
    });
    setNews(filtered);
  };

  return (
    <>
      <Header getKeywords={getKeywords} />
      <NewsList news={news} />
    </>
  );
}