import React, { useEffect } from 'react';
// import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots } from 'apis';
import { setRobots } from 'redux/robot';

/* Component */
import RobotImage from './RobotImage';

const Products = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robot.robots);

  const initRobots = async () => {
    const res = await getRobots();
    if (res && res.data) {
      dispatch(setRobots(res.data.data));
    }
  };

  useEffect(() => {
    initRobots();
  }, []);

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
    </div>
  );
};

export default Products;
