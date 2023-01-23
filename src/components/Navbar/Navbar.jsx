import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>Каталог</li>
        <li>Партнёры</li>
        <li>Поиск</li>
        <li>Личный кабинет</li>
      </ul>
    </div>
  )
}

export default Navbar