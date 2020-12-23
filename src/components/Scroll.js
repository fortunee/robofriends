import React from 'react';

const Scroll = ({ children }) => (
  <div style={{ overflowY: 'scroll', height: '80vh'}}>
    {children}
  </div>
)

export default Scroll;
