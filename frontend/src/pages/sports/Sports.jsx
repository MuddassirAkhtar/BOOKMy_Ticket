import React from 'react'
import DisplayEvents from "../../components/displayEvents/DisplayEvents"
import { useSelector } from 'react-redux'
const Sports = () => {
  const sports = useSelector((state)=> state.sportsReducer.sports)

  return (
    <div>
      <DisplayEvents title="Sports" data={sports} />
    </div>
  )
}

export default Sports