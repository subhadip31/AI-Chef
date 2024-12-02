import React from 'react'
import chef from './assets/ChefClaudeIcon.png'

export default function Header() {
  return (
    <header className='header'>
        <div>
            <img src={chef} alt="icon" />
        </div>
        <h1>
            Chef Claude
        </h1>
    </header>
  )
}
