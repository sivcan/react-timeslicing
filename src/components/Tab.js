import React from 'react';


const Tab = ({isAsync, onClick}) => (
  <div className='tab'>
    <div
      className={`content ${!isAsync && 'active'}`}
      onClick={() => onClick(false)}
    >
      <span>Sync mode</span>
    </div>
    <div
      className={`content ${isAsync && 'active'}`}
      onClick={() => onClick(true)}
    >
      <span>Async mode</span>
    </div>
  </div>
);

export default Tab;
