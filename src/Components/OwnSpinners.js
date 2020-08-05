import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function OwnSpinners (props) {
  return (
    <div>
      <Spinner animation='grow' style={{ backgroundColor: '#f0a500' }} />
      <Spinner animation='grow' style={{ backgroundColor: '#f0a500' }} />
      <Spinner animation='grow' style={{ backgroundColor: '#f0a500' }} />
    </div>
  )
}
