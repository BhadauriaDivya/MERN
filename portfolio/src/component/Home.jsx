import React from 'react'
import Aside from './Aside'
import Main from './Main'
import './Style.css'

const Home = () => {
  return (
    <main>
      <div className="l">
        <Aside/>
      </div>
      <div className="r">
        <Main/>
      </div>
    </main>
  )
}

export default Home