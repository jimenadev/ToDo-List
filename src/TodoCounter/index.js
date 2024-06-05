import './TodoCounter.css'
import todoList from '../assets/img/examen.png'


function TodoCounter({ total, completed}){
    return(
      <div className="wave" >
        <h1 className='todoCounter'>
          You have completed  <span>{completed}</span> of <span>{total}</span> <span className='todos'>TODOs</span>
          <div id="img"><img src={todoList} width={160} height={160} alt=''/></div>
        </h1>
      </div>
      
    )
  }

  export { TodoCounter };