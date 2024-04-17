import {useState} from 'react'

const Todoform = ({ addTodo }) => {

    const[value, setValue] = useState("");
    const[category, setCategory] = useState("");

    const handleSubmit = (e) =>{    //função para envio do formulario a partir do evento
        e.preventDefault();
        if (!value || !category) return
        addTodo(value, category); //se tiver categoria e texto, adiciona na tarefa e ja renderiza no APP pela função 'addTodo' 
        setValue("");
        setCategory("");


        console.log(value, category);
    }

  return (
    <div className='todoform'>
        <h2>Adicionar tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} placeholder='O que você precisa fazer?' onChange={(e) => setValue(e.target.value)}/> 
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Faculdade">Faculdade</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>

    </div>
  )
}

export default Todoform