import React, { useState, useEffect } from 'react';
import SmallPicture from './SmallPicture';
import { getLatestNews } from '../services/newsService';
import Pagination from './Pagination';
import Alert from './Alert'; 
const Dashboard: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const latestNews = await getLatestNews();
        setNews(latestNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    return () => clearTimeout(alertTimeout);
  }, []);
  useEffect(() => {
    const hideAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 20000);
    return () => clearTimeout(hideAlertTimeout);
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {showAlert && (  <Alert type="info" message="See the new reports and news here!!" />  )}
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h2 className="text-3xl mb-4 font-medium">Notices in US</h2>
          <p className="text-lg">This is a page to view current news in English .</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {currentNews.map((article, index) => (
         <SmallPicture key={index}title={article.title}description={article.description}  icon={article.urlToImage && !article.urlToImage.includes('removed') && <img src={article.urlToImage} alt={article.title} />} /> ))}
        </div><Pagination currentPage={currentPage}  newsPerPage={newsPerPage}    totalNews={news.length}    onPageChange={handlePageChange}  />  </div>
    </section>
  );
};

export default Dashboard;
