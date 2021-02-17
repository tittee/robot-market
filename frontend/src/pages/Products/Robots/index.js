import React from 'react';
import { useSelector } from 'react-redux';
/* Hook */
// import useCart from 'hooks/useCart';

/* Child Components */
import Detail from './Detail';

const Robots = ({ searchRobot }) => {
  const robots = useSelector((state) => state.robot.robots);
  // const robot = useSelector((state) => state.robot.robots);
  // const itemCart = useSelector((state) => state.cart.itemCart);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          {searchRobot ? (
            <>
              {robots
                .filter((robot) => robot.material.toLowerCase() === searchRobot.toLowerCase())
                .map((newRobot) => (
                  <Detail key={newRobot.rid} robot={newRobot} />
                ))}
            </>
          ) : (
            <>
              {robots.map((robot) => (
                <Detail key={robot.rid} robot={robot} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Robots;
