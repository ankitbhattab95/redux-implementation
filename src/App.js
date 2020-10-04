import React from 'react';
import classes from './App.module.css';
import { Button, Container, Grid } from '@material-ui/core';
import { connect } from "react-redux";
import { actions } from './redux/actions'


function App(props) {
  // const [count, setCount] = useState(0);

  // const handleSub = () => {
  //   setCount((prevState) => (prevState - 1))
  // }

  // const handleAdd = () => {
  //   setCount((prevState) => (prevState + 1))
  // }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <div className={classes.count}>
        <h4 style={{ "textDecoration": "underline" }}>Redux Implementation</h4>
        Count : {props.count}
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="secondary" onClick={props.decrement}>Subtract</Button>
        <Button variant="contained" color="primary" onClick={props.increment} >Add</Button>
      </div>
    </Container>
  )

}
const mapStateToProps = (state) => {
  return {
    count: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: actions.INCREMENT }),
    decrement: () => dispatch({ type: actions.DECREMENT })
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
