import { useEffect } from 'react';
import { getRobots } from 'apis';
import { setRobots } from 'redux/robot';
import { useDispatch } from 'react-redux';

const useRobot = ({ rid }) => {
  const dispatch = useDispatch();

  const createNewRobot = () => {};

  const deleteCurrentRobot = async () => {};

  const editRobot = async () => {};

  const initRobots = async () => {
    const res = await getRobots();
    if (res && res.data) {
      dispatch(setRobots(res.data.data));
    }
  };

  useEffect(() => {
    initRobots();
  }, []);

  return {
    createNewRobot,
    deleteCurrentRobot,
    editRobot,
    initRobots,
  };
};

export default useRobot;
