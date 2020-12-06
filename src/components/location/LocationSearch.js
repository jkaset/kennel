import React from 'react'

export const LocationSearch = ({ btnText }) => {
  return (
    <>
      <input type="text" placeholder="search" />
      <button>{btnText}</button>
    </>
  )
}