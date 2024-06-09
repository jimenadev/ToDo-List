import './TodoCounter.css'
import todoList from '../assets/img/notas.png'


function TodoCounter({ total, completed, loading}){
    return(
        <h1 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
          You have completed  <span>{completed}</span> of <span>{total}</span> <span className='todos'>TODOs</span>
          <div className="imgHeader"><img src={todoList} alt=''/></div>
        </h1>
    )
  }

  export { TodoCounter };