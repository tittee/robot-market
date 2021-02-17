import React, { useState } from 'react';
import { imageMappings } from 'utils/ImageMapping';

/* Assets */
import DefaultImg from 'assets/images/suhas.jpg';

const ImageRobot = ({ item, loading, heigthImg }) => {
  const [defalutImage] = useState(DefaultImg);

  return (
    <>
      <figure className="block text-center bg-gray-100 mb-4">
        {loading && imageMappings(item.image) ? (
          <div className="bg-gray-100" style={{ height: heigthImg }}>
            Loading.....
          </div>
        ) : null}
        <img
          src={imageMappings(item.image)}
          alt={item.name}
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
