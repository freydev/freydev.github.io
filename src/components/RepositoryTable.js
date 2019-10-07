import React from 'react';
import { createUseStyles as makeStyles } from 'react-jss';
import Icon from 'components/Icon';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: { 
    borderCollapse: 'collapse',
    width: '100%',
    tableLayout: 'fixed',
    '@media (max-width: 700px)': {
      minWidth: 'auto'
    },
    minWidth: 700
  },

  head: {
    '@media (max-width: 400px)': {
      '& tr th.link': {
        width: '3rem'
      },
    },
    '@media (max-width: 640px)': {
      '& tr th:nth-child(n+3)': {
        display: 'none'
      }
    },
    color: '#b2b6b8',
    textTransform: 'uppercase',
    fontSize: '.75rem',
    fontWeight: 700,
    '& tr th': {
      borderBottom: '2px solid #f0f0f0',
      lineHeight: '1.5rem',
      padding: '.25rem .75rem',
      '& span': {
        display: 'inline-flex',
        alignItems: 'center',
      }
    }
  },

  row: {
    color: '#333',
    fontSize: '1rem',
    '&:hover': {
      '& td, th': {
        background: '#f1f6f9'
      }
    },
    '@media (max-width: 640px)': {
      '& td:nth-child(3), & td:nth-child(4)': {
        display: 'none'
      }
    },
    '& td, & th': {
      textAlign: 'left',
      fontWeight: 400,
      padding: '.5rem .75rem',
      borderBottom: '1px solid #f0f0f0',
    }
  },

  highlight: { background: '#f1f6f9'},
  githubLink: {
    '@media (max-width: 400px)': {
      '& a > span': {
        display: 'none'
      }
    },
    '& a': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'inline-block',
      width: '100%'
    },
    '&:hover': {
      color: '#3f51b5'
    }
  },

  externalIcon: {
    fontSize: '.875rem',
    position: 'relative',
    top: '-.2rem'
  },
  
  mobile: {
    display: 'none',
    '@media (max-width: 640px)': {
      display: 'block'
    }
  },

  mobileStargazers: {
    fontSize: '.75rem'
  },

  description: {
    fontSize: '.75rem',
    color: '#b2b6b8',
    maxWidth: '40rem'
  },

  license: {
    minWidth: '15rem'
  }
})

export default function RepositoryTable({ data }) {
  const classes = useStyles();
  const columns = [
    { name: 'Name' },
    { name: 'Link', class: 'link' },
    { name: 'Stars', sort: true, width: '50px' },
    { name: 'License', width: '200px' }
  ]

  
  return (
    <table className={classes.root}>
      <thead className={classes.head}>
        <tr>
          {columns.map((column, index) =>
            <th align="left" width={column.width || 'auto'} key={index} className={clsx(column.sort ? classes.highlight : null, column.class)} scope="col">
              <span>
                {column.name}
                {column.sort && <Icon arrowDown color="#3f51b5" />}
              </span>
            </th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(({ node }) => <tr className={classes.row} key={node.id}>
          <th scope="row">
            {node.name}
            <div className={classes.description}>{node.description}</div>
            <div className={classes.mobile}>
              <div className={classes.mobileStargazers}>
                stars: {node.stargazers.totalCount}
                {node.licenseInfo ? <>, license: {node.licenseInfo.key}</> : ''}
              </div>
            </div>
          </th>
          <td className={classes.githubLink}>
            <a rel="noopener noreferrer" target="_blank" href={node.url}>
              <span>{node.url}</span>
              <Icon className={classes.externalIcon} externalIcon />
            </a>
          </td>
          <td className={classes.highlight}>{node.stargazers.totalCount}</td>
          <td className={classes.license}>{node.licenseInfo ? node.licenseInfo.name : 'none'}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
