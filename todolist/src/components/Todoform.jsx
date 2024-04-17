import React from 'react'

const Todoform = () => {
  return (
    <div className='todoform'>
        <h2>Adicionar tarefa</h2>
        <form>
            <input type='text' placeholder='O que você precisa fazer?' />
            <select>
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