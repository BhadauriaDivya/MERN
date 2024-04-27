import React from 'react'
import TicTacToe from './TicTacToe.png'

const Project = () => {
  return (
    
    <div className="project">
    <h1>Project</h1>
    <div className="yellowline"/>
    <div className="cardd">
        <div className="card">
            <img src={TicTacToe} className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a>Go somewhere</a>
            </div>
        </div>

        <div className="card">
            <img src="" className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a>Go somewhere</a>
            </div>
        </div>

        <div className="card">
            <img src="" className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a>Go somewhere</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project