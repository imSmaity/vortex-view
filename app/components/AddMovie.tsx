import React, { ChangeEvent, useState } from 'react'
import Popup from './Popup'
import Input from './Input'

interface IAddMovie {
  open: boolean
  handleClose: (b: boolean) => void
}

const AddMovie = ({ handleClose, open }: IAddMovie) => {
  const [data, setData] = useState({
    name: '',
    releaseDate: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  return (
    <Popup
      open={open}
      handleClose={handleClose}
      btnName="Create movie"
      handleAction={() => {}}
    >
      <div className="flex flex-col ">
        <div className="pt-5 pb-8 text-[20px]">Add new movie</div>
        <div className="flex flex-col gap-5">
          <Input
            name="name"
            placeholder="Name"
            handleChange={handleChange}
            value={data.name}
          />
          <Input
            type="date"
            name="releaseDate"
            handleChange={handleChange}
            value={data.releaseDate}
          />
        </div>
      </div>
    </Popup>
  )
}

export default AddMovie
