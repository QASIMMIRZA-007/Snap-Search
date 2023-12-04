import React from 'react'


function Header() {
  return (
    <>
      

      <div className="dFlex">
        <input
          type="text"
          className="conInput"
          placeholder="Search high-resolution images"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </>
  )
}

export default Header
