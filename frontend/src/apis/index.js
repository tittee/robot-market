import axios from 'axios';
const NODE_ENV = process.env.REACT_APP_NODE_ENVIROMENT || 'production';
const BACKEND_URL = NODE_ENV === 'local' ? process.env.REACT_APP_BACKEND_URL || '/api' : '/api';

export const getRobots = async () => {
  return await axios.get(`${BACKEND_URL}/robots`).catch((err) => console.log(err));
};
