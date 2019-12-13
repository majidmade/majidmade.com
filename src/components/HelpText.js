import React from 'react';

export default ({ isGrabbing }) => (
  <div className='help-text'>
    {`Grab an item${isGrabbing ? '... and hold it for more.' : '.'}`}
  </div>
)