import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots } from 'apis';
import { setRobots } from 'redux/robot';

/* Component */
import RobotImage from './RobotImage';

/* Lib */
import ReactPaginate from 'react-paginate';

const Products = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robot.robots);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);

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
    <div className="container mx-auto mt-10">
      <div className="mx-4 px-4 py-4 mb-10  border rounded bg-blue-300  ">
        <h1 className="text-6xl font-bold">Robot Marketplace</h1>
      </div>
      <div className="flex flex-wrap shadow-md my-10">
        {robots.map((robot) => (
          <RobotImage key={robot.rid} robot={robot} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Products;
