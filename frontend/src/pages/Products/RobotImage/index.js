import React from 'react';
import { imageMappings } from 'utils/ImageMapping';

const RobotImage = ({ robot }) => {
  return (
    <>
      <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
        <div className="shadow-inner border rounded ">
          <figure className="block text-center">
            <img
              src={imageMappings(robot.image)}
              alt={robot.name}
              className="block object-cover object-top mx-auto"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default RobotImage;
