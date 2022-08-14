import React, { useEffect } from 'react';

import axios from './axios';

const Test = () => {
  useEffect(() => {
    axios.get('/api/test').then((res) => {
      console.debug(res);
    });
  }, []);
  return null;
};

export default Test;
