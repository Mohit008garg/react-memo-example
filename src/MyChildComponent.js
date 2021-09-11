import React, {memo} from 'react';

function MyChildComponent() {
    console.log('rendering child component');
    return (
      <>
       This is Child Component
      </>
    );
  }
  
  export default memo(MyChildComponent);