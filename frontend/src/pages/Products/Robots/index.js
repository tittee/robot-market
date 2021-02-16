import React from 'react';

/* Child Components */
import Image from './Image';

const Robots = ({ robots }) => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          {robots.map((robot) => (
            <Image key={robot.rid} robot={robot} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Robots;
