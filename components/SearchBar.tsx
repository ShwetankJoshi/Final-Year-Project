"use client"

import React from 'react'



function SearchBar() {

    const submitHandler = () => {

    }

  return (
    <form className=' flex flex-wrap gap-4 mt-12'
    onSubmit={submitHandler}>
      <input type='text' placeholder='Enter product link'
      className='searchbar-input'/>
      <button className='searchbar-btn' type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
