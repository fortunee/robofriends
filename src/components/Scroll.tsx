import React from 'react';

const Scroll: React.FC = ({ children }) => (
  <div style={{ overflowY: 'scroll', height: '80vh'}}>
    {children}
  </div>
)

export default Scroll;
