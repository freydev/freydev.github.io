import React from 'react';
import { createUseStyles as makeStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    fill: ({ color }) => color || 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    flexShrink: 0,
    userSelect: 'none'
  }
})

const externalIconPath = <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
const arrowDownPath = <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
const searchPath = <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>

export default function Icon({ externalIcon, arrowDown, search, className, color }) {
  const classes = useStyles({ color });

  return (
    <svg className={clsx(classes.root, className)} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" shapeRendering="geometryPrecision">
      {externalIcon && externalIconPath}
      {arrowDown && arrowDownPath}
      {search && searchPath}
    </svg>
  )
}
