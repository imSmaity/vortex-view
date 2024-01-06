'use client'
import React, { useState } from 'react'
import Button from './Button'
import AddMovie from './AddMovie'
import AddReview from './AddReview'

const Header = () => {
  const [openAddMovie, setOpenAddMovie] = useState(false)
  const [openAddReview, setOpenAddReview] = useState(false)

  return (
    <div className="bg-headerBg p-4 flex justify-between items-center">
      <div>MOVIECRITIC</div>
      <div className="flex gap-4">
        <Button variant="outlined" handleClick={() => setOpenAddMovie(true)}>
          Add new movie
        </Button>
        <Button variant="contained" handleClick={() => setOpenAddReview(true)}>
          Add new review
        </Button>
      </div>
      <AddMovie open={openAddMovie} handleClose={setOpenAddMovie} />
      <AddReview open={openAddReview} handleClose={setOpenAddReview} />
    </div>
  )
}

export default Header
