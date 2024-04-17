import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import Todoform from "./components/Todoform"
import Search from './components/Search'
import Filter from './components/Filter'

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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

    //adicionando as novas tarefas a partir dessa funcao
  const addTodo = (text, category) => {
    const newTodos = [...todos, { //todos os todos que já existem + os novos todos
      id: Math.floor(Math.random()*10000), //id aleatorio
      text,
      category,
      isCompleted: false 
    }
  ];

    setTodos(newTodos);

  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    //vamos usar um MAP, pois ele modifica o array original newTodos

    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    /*
    loop sobre o array newTodos usando o método map()
    ? todo.isCompleted = !todo.isCompleted : todo: Este é um operador ternário. Se a condição todo.id === id for verdadeira, o valor de todo.isCompleted será invertido (ou seja, se for true, torna-se false, e vice-versa), caso contrário, o objeto todo será retornado sem qualquer alteração.
    */

    setTodos(newTodos);
  }  

  return <div className='app'> 
    <h1>Sua lista de tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter}/>

    <div className='todo-list' > 
      {todos
      .filter((todo) => 
        filter === "all" 
        ? true 
        : filter === "completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
      )
      .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase()))
      .map((todo) => (  
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/> /*adicionando o componente / os dados serão passados daqui para o componente por properties */
      ))
      
      }


    </div>

    <Todoform addTodo={addTodo}/>


  </div>

}

export default App
