import React from 'react';
import { createUseStyles as makeStyles } from 'react-jss';
import { useQuery } from '@apollo/react-hooks';
import { LICENSES_QUERY } from 'queries';


const useStyles = makeStyles({
  select: {
    background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyNjY2MnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz4=) no-repeat right .75rem center/8px 10px',
    display: 'inline-block',
    width: ({ width }) => width || '100%',
    height: 'calc(1.5em + .75rem + 2px)',
    padding: '.375rem 1.75rem .375rem .75rem',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#495057',
    verticalAlign: 'middle',
    backgroundColor: '#fff',
    border: '1px solid #f0f0f0',
    borderRadius: '4px',
    appearance: 'none',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 1px 1px rgba(63, 81, 181, .5)'
    }
  }
})

export default function Select({ width, onChange }) {
  const classes = useStyles({ width });
  const { data } = useQuery(LICENSES_QUERY)

  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <select onChange={handleChange} className={classes.select}>
      <option value="">Any licenses</option>
      {data ? (data.licenses || []).map(license => (
        <option value={license.key} key={license.id}>{license.name}</option>
      )) : ''}
      <option value="other">Other</option>
    </select>
  )
}
