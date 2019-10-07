import React from 'react';
import { createUseStyles as makeStyles } from 'react-jss';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',

    '& button': {
      marginRight: '1rem',
    }
  },

  button: {
    background: '#3f51b5',
    display: 'inline-block',
    textAlign: 'center',
    appearance: 'none',
    userSelect: 'none',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
    cursor: 'pointer',
    color: '#fafafa',
    '&:active': {
      outline: 'none'
    },
    '&:hover': {
      background: '#4760e6',
    }
  },

  hint: {
    cursor: 'help'
  }
})

export default function Pagination({ hasNext, hasPrev, onNext, onPrev }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {hasPrev && <button className={classes.button} onClick={onPrev}>Previous</button>}
      {hasNext && <button className={classes.button} onClick={onNext}>Next</button>}
      <div className={classes.hint} 
        title="На данный момент, в реализации запроса search() Github GraphQL, отсутствует параметр offset, он не позволяет свободно перемещаться по страницам, только до и после конкретной записи, более того, приходится делать разные запросы, поэтому они не кешируются.">?</div>
    </div>
  )
}
