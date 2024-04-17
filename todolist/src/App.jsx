import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import Todoform from "./components/Todoform"

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

  return <div className='app'> 
    <h1>Sua lista de tarefas</h1>
    <div className='todo-list'> 
      {todos.map((todo) => (  /*vamos organizar os to-dos em MAP que percorre os itens TO DO para acessar seus dados */
        <Todo todo={todo}/> /*adicionando o componente / os dados serão passados daqui para o componente por properties */
      ))}

    </div>

    <Todoform />


  </div>

}

export default App
