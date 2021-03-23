import React from 'react';

import { Wrap } from './style';

function Container({ children }) {
  return (<Wrap>
    {children}
  </Wrap>);
}

export default Container;