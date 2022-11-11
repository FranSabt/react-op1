import React, { useState} from 'react'
import { LEVELS } from '../../models/levels'
import { Task } from '../../models/taskClass'
import TaksComponent from '../TaksComponent'


//* jerarquia App: -> taskList -> Task
const TaskListComponent = props => {
  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL )
  
  const [taks, setTaks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);
  
  
  // Cotrol del ciclo de vida
  useEffect(() => {
    console.log('Modificacion de tarea');
    setLoading(false);
    return () => {
      console.log(('Tasklist component desmontando...'));
    };
  }, [taks]);
  

  const changeCompleted = (id) => {
    console.log('cambio completado');
  }
  return (
    <div>
      <div>
        your task:
      </div>
      {/* TODO: aplicar un map para renderizar tareas */}
      <TaksComponent task={defaultTask}/>
    </div>
  )
}



export default TaskListComponent