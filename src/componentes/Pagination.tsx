import React from 'react';

interface PaginationProps {
  currentPage: number;
  newsPerPage: number;
  totalNews: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, newsPerPage, totalNews, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-4 flex justify-center">
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`mx-2 px-4 py-2 bg-indigo-500 text-white rounded ${currentPage === number && 'bg-indigo-600'}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
