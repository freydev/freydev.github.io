import React, { useState } from 'react'
import { createUseStyles as makeStyles } from 'react-jss';
import Icon from './Icon';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    width: ({ width }) => width || '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },

  input: {
    borderRadius: 4,
    border: '1px solid #f0f0f0',
    width: '100%',
    fontSize: '1rem',
    padding: '.5rem 1rem',
    paddingRight: '24px',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 1px 1px rgba(63, 81, 181, .5)'
    }
  },

  inputAppend: {
    position: 'absolute',
    pointerEvents: 'none',
    right: '4px',
    top: '.35rem',
    zIndex: 1
  }
})

export default function InputSearch({ className, width, onChange }) {
  const WAIT = 500

  const classes = useStyles({ width });
  const [timer, setTimer] = useState();

  const handleChange = event => {
    const value = event.target.value

    clearTimeout(timer);
    setTimer(setTimeout(() => onChange(value.trim()), WAIT));
  }

  return (
    <div className={clsx(classes.root, className)}>
      <input onChange={handleChange} placeholder="Search repositories..." className={classes.input} type="text" />
      <div className={classes.inputAppend}>
        <Icon search color="#ccc" />
      </div>
    </div>
  )
}
