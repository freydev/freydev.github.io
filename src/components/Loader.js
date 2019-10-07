import React from 'react';
import grid from 'assets/grid.svg';
import { createUseStyles as makeStyles } from 'react-jss';

const useStyles = makeStyles({
  root: {
    height: '200px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
})

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={grid} alt="loader"/>
    </div>
  )
}
