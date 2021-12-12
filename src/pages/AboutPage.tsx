import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="container">
      <h2>About Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi quasi explicabo provident voluptate similique consectetur rerum ut aliquid nesciunt.</p>
      <Link to="/">Главная страница</Link>
    </div>
  )
}
