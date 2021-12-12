import React from 'react'

export default function MainLayout({children}: any) {
  return (
    <div className='container'>
      <header style={{margin: 20}}>
        Main Layout
      </header>
      {children}
    </div>
  )
}
