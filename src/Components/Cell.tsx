import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ICellConfig } from '../Common/Interfaces';

interface IProps {
  config: ICellConfig,
  isPlayMode: boolean
};

export default function Cell(props: IProps) {
  const classes = makeStyles({
    playContainer: {
      width: props.config.defaultSize,
      height: props.config.defaultSize,
      backgroundColor: props.config.backgroundColor,
      display: 'grid'
    },
    setContainer: {
      width: props.config.defaultSize,
      height: props.config.defaultSize,
      backgroundColor: 'white',
      display: 'grid'
    },
    cell: {
      boxSizing: 'border-box',
      border: `${props.config.borderWidth} ${props.config.borderColor} solid`,
      width: props.config.size,
      height: props.config.size,
      borderRadius: props.config.borderRadius,
      alignSelf: 'center',
      justifySelf: 'center',
      zIndex: props.config.elevation + 1
    },
    play: {
      backgroundColor: props.config.color,
      boxShadow: `black 0 0 ${props.config.elevation}px`
    },
    alive: {
      width: props.config.defaultSize,
      height: props.config.defaultSize,
      border: 'none',
      borderRadius: '50%',
      backgroundColor: 'green',
      boxShadow: 'black 0 0 5px',
      '&:hover': {
        boxShadow: 'black 0 0 10px'
      }
    },
    dead: {
      width: props.config.defaultSize,
      height: props.config.defaultSize,
      border: 'none',
      borderRadius: '50%',
      backgroundColor: '#eeeeee',
      '&:hover': {
        boxShadow: '#333333 0 0 5px'
      }
    },
  })();

  return (
    <div className={props.isPlayMode ? classes.playContainer : classes.setContainer} onClick={() => {
      if (!props.isPlayMode) {
        props.config.setIsAlive(!props.config.isAlive)
      }
    }}
    >
      <div className={`${classes.cell} 
                ${props.isPlayMode
          ? classes.play
          : props.config.isAlive ? classes.alive : classes.dead}`}
      />
    </div>
  )
}