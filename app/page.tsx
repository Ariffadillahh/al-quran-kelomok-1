'use client'
import React from 'react'
import Hero from './components/Hero'
import { Sejarah } from './components/Sejarah'

const page = () => {
  return (
    <div className=''>
      <div>
        <Hero/>
        <Sejarah/>
      </div>
    </div>
  )
}

export default page