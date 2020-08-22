import React from 'react';
import { Typography, Tooltip, makeStyles } from '@material-ui/core';
import { InfoSharp } from '@material-ui/icons';

interface IProps {
  info?: string,
  children: string
};

const useStyles = makeStyles({
  root: {
    textAlign: 'start',
    color: '#666666',
    fontSize: '15px',
    marginTop: 3,
  },
  info: {
    fontSize: '15px'
  }
});

export default function InputTitle(props: IProps) {
  const classes = useStyles();
  return <Typography className={classes.root}>
    {props.children} &nbsp;
    {
      props.info !== undefined &&
      <Tooltip title={<span style={{fontSize: 15}}>{props.info}</span>}>
        <InfoSharp fontSize="inherit"/>
      </Tooltip>
    }
  </Typography>
}