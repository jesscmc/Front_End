
import React from 'react'

export default function Icone({ icone, style }) {
  console.log(icone)
    return (
      <li className={style.menu__item}>
        <img src={icone.path} alt={icone.alt} />
        <a href="/">{icone.link}</a>
      </li>
    )
  }