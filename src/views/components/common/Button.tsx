import React from 'react';

const Button = ({className,children}:{className:string,children:string}) => {
  return (
    
    <button className={className}>{children}</button>
    
  );
};

export default Button;