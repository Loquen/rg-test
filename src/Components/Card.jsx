import React from 'react';
import Task from './Task';

function Card({title, color, tasks, handleClick }) {

  const styles = {
    backgroundColor: color,
    height: '3rem',
    padding: '1rem',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
      <div className="card">
        <div style={styles}>
          {title}
        </div>
        <div className="taskList">
          {tasks.map((task, idx) => 
            <Task
              key={idx}
              task={task}
            />
          )}
        </div>
        <div className="button" onClick={handleClick}>
          button
        </div>
      </div>
  );
}

export default Card;