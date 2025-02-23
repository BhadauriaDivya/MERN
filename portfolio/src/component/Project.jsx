import React from 'react'
import TicTacToe from './Images/TicTacToe.png'
import Amazon from './Images/Amazon.png'
import ToDoList from './Images/ToDoList.png'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className="project">
    <h1>Project</h1>
    <div className="yellowline"/>
    <div className="cardd">
      <div className="card">
            <img src={ToDoList} className='card-img'/>
            <div>
              <h2>ToDo List</h2>
              <Link to="/project/todo">Click</Link> 
            </div>
        </div>
        <div className="card">
            <img src={TicTacToe} className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p></p>
              <Link to="#">Click</Link> 
            </div>
        </div>
        <div className="card">
            <img src={Amazon} className='card-img'/>
            <div>
              <h2>Amazon Clone</h2>
              <p></p>
              <Link to="#">Click</Link> 
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Project