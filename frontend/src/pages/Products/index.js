import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots } from 'apis';
import { setRobots } from 'redux/robot';
import { Link } from 'react-router-dom';

/* Component */
import Robots from './Robots';
import Pagination from './Pagination';

import './styles.scss';

const Products = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robot.robots);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);

  const [search, setSearch] = useState('');

  const initRobots = async () => {
    const res = await getRobots();
    const robotsSlice = res.data.data.slice(offset, offset + perPage);
    if (res && res.data) {
      dispatch(setRobots(robotsSlice));
      setPageCount(Math.ceil(res.data.data.length / perPage));
    }
  };

  useEffect(() => {
    initRobots();
  }, [offset]);

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className="page">
      <header className="bg-blue-700">
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex-1">
              <h1 className="text-xl tracking-wide font-bold text-white">
                <Link to="/">Robot Marketplace</Link>
              </h1>
            </div>
            <div className="flex-auto flex flex-wrap items-center">
              <div className="flex-auto">
                <input
                  type="text"
                  placeholder="Search robots..."
                  className="mt-0 block w-full px-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex-none">
                <Link to="/cart">
                  <svg
                    className="h-6 w-6 ml-5 text-right text-base text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Robots robots={robots} />

      <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Products;
