import React from 'react'
import Navbar from './components/navbar/Navbar'
import Feed from './components/feed/Feed'
import Menu from './components/menu/Menu'
import classes from './app.module.css'
const App = () => {
  return (
    <div>
      <Navbar/>
    <main className={classes.main}>
      <Menu/>
      <Feed/>
    </main>
    </div>
  )
}

export default App
