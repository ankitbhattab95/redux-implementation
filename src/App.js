import React, { useState } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import { Button, Container, Grid } from '@material-ui/core';

function App() {
  const [count, setCount] = useState(0);

  const handleSub = () => {
    setCount((prevState) => (prevState - 1))
  }

  const handleAdd = () => {
    setCount((prevState) => (prevState + 1))
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <div className={classes.count}>
      <h4 style={{"textDecoration":"underline"}}>Redux Implementation</h4> 
        Count : {count}
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="secondary" onClick={() => handleSub()}>Subtract</Button>
        <Button variant="contained" color="primary" onClick={() => handleAdd()}>Add</Button>
      </div>
    </Container>
  )
}
export default App;
