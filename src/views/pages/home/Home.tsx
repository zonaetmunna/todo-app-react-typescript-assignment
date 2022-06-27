import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Texts from '../../components/common/Texts';

interface todosType{
  title: string,
  description:string
}

const Home = () => {
  const [todos, setTodos] = useState<todosType|{}>({})
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>):void=> {
    setTodos({ ...todos, [e.target.name]: e.target.value })
    console.log({ ...todos, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const todos = {
      ...todos
    }

  }

  return (
    <div className='p-1'>
      <Texts className='text-violet-800'>Please types</Texts>
      <Input type='text' name='title' placeholder='title' className='border-2 rounded-lg border-cyan-600 border-solid' onChange={() => onChange} />
      <form onSubmit={handleSubmit}>
        <Input type='text' name='description' placeholder='description' className='border-2 rounded-lg border-cyan-600 border-solid' onChange={()=>onChange} />
      <Button className='border-2 border-cyan-800 border-solid bg-sky-500/100 p-1 hover:bg-fuchsia-600	'>Add to dp</Button>
      </form>

      <div>
        {todos.title}
      </div>
      
      
    </div>
  );
};

export default Home;