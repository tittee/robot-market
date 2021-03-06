import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots } from 'apis';
import { setRobots } from 'redux/robot';
import { Link } from 'react-router-dom';

/* Component */
import Loading from 'components/Loading';
import Robots from './Robots';
import Pagination from './Pagination';

import './styles.scss';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';

const Products = () => {
  const dispatch = useDispatch();

  const robots = useSelector((state) => state.robot.robots);
  const carts = useSelector((state) => state.cart.carts);

  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [searchRobot, setSearchRobot] = useState('');
  const [perPage] = useState(searchRobot ? robots.length : 20);

  const initRobots = async () => {
    setLoading(true);
    const res = await getRobots();
    if (res && res.data) {
      const robotRes = res.data.data;

      if (searchRobot && searchRobot.length) {
        dispatch(
          setRobots(
            robotRes.filter((robot) => robot.material.toLowerCase() === searchRobot.toLowerCase()),
          ),
        );
        setPageCount(0);
      } else {
        const robotsSlice = robotRes.slice(offset, offset + perPage);
        dispatch(setRobots(robotsSlice));
        setPageCount(Math.ceil(res.data.data.length / perPage));
      }
    }
    setLoading(false);
  };

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const onSearchInputChange = (e) => {
    setSearchRobot(e.target.value);
  };

  const onClearSearch = (e) => {
    setSearchRobot('');
  };

  useEffect(() => {
    initRobots();
  }, [offset, searchRobot]);

  return (
    <div className="page">
      <header className="bg-blue-700">
        <div className="container mx-auto py-4">
          <div className="h-10 flex flex-wrap justify-between items-center">
            <Logo />
            <div className="flex-auto flex flex-wrap items-center">
              <div className="flex-auto">
                <SearchBar
                  searchRobot={searchRobot}
                  onClearSearch={onClearSearch}
                  onSearchInputChange={onSearchInputChange}
                />
              </div>
              <div className="flex-none relative">
                <Link to="/cart">
                  {carts && carts.length ? (
                    <div className="absolute w-4 h-4 leading-4 text-sm -right-1 rounded-full text-blue-800 text-center  bg-gray-200">
                      {carts.length}
                    </div>
                  ) : null}
                  <svg
                    className="h-6 w-6 ml-5 text-right text-base text-white "
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

      {!loading ? <Robots searchRobot={searchRobot} /> : <Loading />}

      {pageCount > 0 ? (
        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
      ) : null}
    </div>
  );
};

export default Products;
