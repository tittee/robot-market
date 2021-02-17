import React, { useState } from 'react';
import { imageMappings } from 'utils/ImageMapping';

/* Assets */
import DefaultImg from 'assets/images/suhas.jpg';

const ImageRobot = ({ robot, loading }) => {
  const [defalutImage] = useState(DefaultImg);

  return (
    <>
      <figure className="block text-center bg-gray-100 mb-4">
        {loading && imageMappings(robot.image) ? (
          <div className="bg-gray-100" style={{ height: '120px' }}>
            Loading.....
          </div>
        ) : null}
        <img
          src={imageMappings(robot.image)}
          alt={robot.name}
          className="block object-cover object-top mx-auto"
          style={{ width: defalutImage ? '120px ' : '' }}
          onError={(e) => {
            e.target.src = defalutImage;
          }}
        />
      </figure>
    </>
  );
};

export default ImageRobot;
