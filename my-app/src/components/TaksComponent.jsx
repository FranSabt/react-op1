import React from "react";
import PropTypes from 'prop-types'
import { Task } from "../models/taskClass";

const TaksComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: { task.name }</h2>
      <h3>Descripción: { task.description }</h3>
      <h4>Nivel: { task.level }</h4>
      <h5>
        This task is: { task.completed ?  'Completed' : 'Pending'}
      </h5>
    </div>
  );
};

TaksComponent.PropTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaksComponent;
