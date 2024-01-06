import React, { ChangeEvent, useState } from 'react'
import Popup from './Popup'
import Input from './Input'

interface IAddReview {
  open: boolean
  handleClose: (b: boolean) => void
}

const AddReview = ({ open, handleClose }: IAddReview) => {
  const [data, setData] = useState({
    movieId: '',
    name: '',
    rating: '',
    comments: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleMovieChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleChangeComments = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setData({ ...data, ['comments']: value })
  }

  return (
    <Popup
      open={open}
      btnName="Add review"
      handleAction={() => {}}
      handleClose={handleClose}
    >
      <div className="flex flex-col ">
        <div className="pt-5 pb-8 text-[20px]">Add new review</div>
        <div className="flex flex-col gap-5">
          <select
            name="movie"
            className="border-[2px] border-borderGray p-1.5 rounded-sm w-[20rem]"
            value={data.movieId}
            onChange={handleMovieChange}
          >
            <option value="">Select movie</option>
          </select>
          <Input
            name="name"
            placeholder="Your name"
            handleChange={handleChange}
            value={data.name}
          />
          <Input
            name="rating"
            type="number"
            placeholder="Rating out of 10"
            handleChange={handleChange}
            value={data.rating}
          />
          <textarea
            name="comments"
            className="border-[2px] border-borderGray p-1.5 rounded-sm w-[20rem]"
            maxLength={5}
            placeholder="Review comments"
            onChange={handleChangeComments}
            value={data.comments}
          />
        </div>
      </div>
    </Popup>
  )
}

export default AddReview
