import React from 'react';
import { useSelector } from 'react-redux';

/* Child Components */
import Image from './Image';

const Robots = ({ searchRobot }) => {  
  const robots = useSelector((state) => state.robot.robots);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          {searchRobot ? (
            <>
              {robots.filter((robot) => robot.material.toLowerCase() === searchRobot.toLowerCase() ).map((newRobot) => (
                <Image key={newRobot.rid} robot={newRobot} />
              ))}
            </>
          ) : (
            <>
              {robots.map((robot) => (
                <Image key={robot.rid} robot={robot} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Robots;
