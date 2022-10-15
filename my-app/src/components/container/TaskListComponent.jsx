import React from 'react'
import { LEVELS } from '../../models/levels'
import { Task } from '../../models/taskClass'
import TaksComponent from '../TaksComponent'


//* jerarquia App: -> taskList -> Task
const TaskListComponent = props => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL )

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