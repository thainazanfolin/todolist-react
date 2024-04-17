import {useState} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filter'>
        <h2>Filtro</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todas as tarefas</option>
                    <option value="completed">Feitas</option>
                    <option value="incompleted">A fazer</option>
                </select>
            </div>
        </div>

    </div>
  )
}

export default Filter