import { useState, useEffect } from 'react';
import { getRobots } from 'apis';
import { setRobots, setPageCount } from 'redux/robot';
import { useDispatch } from 'react-redux';

const useRobot = ({ search, offset }) => {
  const dispatch = useDispatch();
  const [perPage] = useState(20);
  

  const searchRobot = async () => {
    await initRobots(search);

    if ( search && search.length ) {
      // dispatch(setRobots( robotsRes.filter((robot) => robot.material.toLowerCase() === search.toLowerCase()) ));
    }
    // Array Filter only
  };
  
  const initRobots = async () => {
    const res = await getRobots();
    if (res && res.data) {
      const robotsRes = res.data.data;    
      const robotsSlice = robotsRes.slice(offset, offset + perPage);   

      dispatch(setRobots(robotsSlice));
      setPageCount(Math.ceil(robotsRes / 20));

      
    }
  };

  useEffect(() => {
    initRobots();
  }, []);

  return {
    searchRobot,
    initRobots,
  };
};

export default useRobot;
