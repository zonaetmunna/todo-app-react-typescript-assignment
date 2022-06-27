import React from 'react';

const Input = ({ placeholder, type, name,className,onChange }: {
  placeholder: string, type: string, name:string,className:string,onChange:()=>void}) => {
  return (
    <div>
      <input type={type} name={name}  placeholder={placeholder} className={className} onChange={onChange} />
    </div>
  );
};

export default Input;