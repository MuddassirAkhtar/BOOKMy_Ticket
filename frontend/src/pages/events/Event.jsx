import React from 'react'
import DisplayEvents from "../../components/displayEvents/DisplayEvents"
import { useSelector } from 'react-redux'

const Event = () => {
  const events = useSelector((state)=> state.eventReducer.event)

  return (
    <div>
      <DisplayEvents title="Events" data={events} />
    </div>
  )
}

export default Event