import React from 'react';

const Texts = ({children,className}:{children:string,className:string}) => {
  return (
    <div>
      <h4 className={className}>{children}</h4>
    </div>
  );
};

export default Texts;