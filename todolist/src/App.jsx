import { useState } from 'react'
import "./App.css"

function App() {
  // use state permite a renderização após mudança de dados 
  //armazenando os dados iniciais - set insere os dados, todos consulta os dados

  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: "Enviar email para Carolina",
      category: "Trabalho", 
      isCompleted: false
    },
    {
      id: 2, 
      text: "Finalizar projeto PI",
      category: "Faculdade", 
      isCompleted: false
    },
    {
      id: 3, 
      text: "Enviar certificado",
      category: "Trabalho", 
      isCompleted: false
    },
    {
      id: 4, 
      text: "Enviar email Paulo",
      category: "Faculdade", 
      isCompleted: false
    },



  ]) 

  return  <div className='app'>
    <h1>Sua lista de tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (  /*vamos organizar os to-dos em MAP que percorre os itens TO DO para acessar seus dados */
        <div className="todo">
          <div className="content"> 
            <p>{todo.text}</p>
          <p className="category">
            ({todo.category})
          </p>     
          </div>
          <div>
            <button>Feito!</button>
            <button>X</button>
          </div>
        </div>
      ))} 
      
    </div>
    
    
    
  </div>
  
}

export default App
