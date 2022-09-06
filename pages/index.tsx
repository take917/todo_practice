import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from '../styles/Home.module.css'

const App: NextPage = () => {
const[inputValue, setInputValue] = useState("")
  const [todos,setTodos] = useState<Todo[]>([])
type Todo ={
  inputValue:string;
  id:number;
  checked:boolean;
}

const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
  // console.log(e.target.value)
  setInputValue(e.target.value)

}

const handleSumbit =(e: FormEvent<HTMLFormElement>)=>{
e.preventDefault()


const newTodo:Todo ={
  inputValue:inputValue,
  id: setTodos.length,
  checked: false,
}
setTodos([newTodo,...todos])
setInputValue("")
}
const handleEdit= (id:number,inputValue:string) =>{
const newTodos = todos.map((todo,index)=>{
  if(index===id){
    todo.inputValue = inputValue
  }
  return todo;
})

setTodos(newTodos)
}

const handleChecked = (id:number,checked:boolean)=>{
  const newTodos = todos.map((todo,index)=>{
    if(index === id){
      todo.checked = !checked
    }
    return todo
  })
  setTodos(newTodos)
}

const handleDlete = (id:number) =>{
  const newTodos = todos.filter((todo,index)=>index!==id)
  setTodos(newTodos)
}



return (
  <div className='mt-10'>
    <h2>Todo リスト　</h2>
    <form onSubmit={(e)=>{handleSumbit(e)}} className="flex pt-4">
    <input type="text" onChange={(e)=>{handleChange(e)}} className="border-2 border-orange-300 m-6"/>
    <input type="submit" value="作成" className='"submitButton'/>
    </form>

    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {/* {todo.inputValue} */}
          <input type="text" 
          onChange={(e)=>handleEdit(index,e.target.value)} 
          value={todo.inputValue}
          disabled={todo.checked}
          className="border-2 border-orange-300 m-6"/>
         
          <input type="checkbox" 
          onChange={(e)=>handleChecked(index,todo.checked)}
          className="border-2 border-orange-300 m-6"/>

          <button onClick={()=>handleDlete(index)}> 消す</button>



        </li>




      ))}
    </ul>
  </div>

)





  
}
  
export default App
