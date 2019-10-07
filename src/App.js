import React, { useState } from 'react';
import { createUseStyles as makeStyles } from 'react-jss';

import InputSearch from 'components/InputSearch';
import Select from 'components/Select';
import Repository from 'components/Repository';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    '@media (max-width: 700px)': {
      width: '100%'
    }    
  },

  topControls: {
    display: 'flex',
    width: '600px',
    marginBottom: '1rem',
    alignItems: 'center',
    padding: '0 1rem',
    '@media (max-width: 700px)': {
      width: 'auto'
    }
  },

  filterString: {
    margin: '0 .5rem 0 1rem'
  }
})

function App() {
  const classes = useStyles();
  const last30days = moment().subtract(1, 'month').startOf('day');

  const [search, setSearch] = useState();
  const [license, setLicense] = useState();

  return (
    <div className={classes.root}>
      <h5>Repositories created before {last30days.format('DD/MM/YYYY')}</h5>
      <div className={classes.topControls}>
        <InputSearch onChange={setSearch} />
        <div className={classes.filterString}>Shows:</div>
        <Select onChange={setLicense} />
      </div>
      <Repository search={search} license={license} date={last30days.format()} />
    </div>
  );
}

export default App;
