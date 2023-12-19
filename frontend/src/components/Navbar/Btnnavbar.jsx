import React from 'react';
import style from './btn.module.css';

function Btnnavbar(props) {
  const instyle = {
    color: props.color,
    backgroundColor: props.bgcolor,
    width: props.width,
    borderRadius: props.bradius,
    height: props.height

  };

  return (
    <button className={style.navbutton} style={instyle}>
      {props.text}
    </button>
  );
}

export default Btnnavbar;
