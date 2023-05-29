import React, {useRef, useState} from 'react'
import  DraggableInput  from './DraggableInput'
import DropZone from './DropZone'

export const FormBuilderPage = () => {
  return (
    <div className='app'>
      <h2>Ismail</h2>
      <div style={{ display: 'flex' }}>
      <h2>Ismailuuu</h2>
        <DraggableInput type='text' label='Text Input' />
        {/* <DraggableInput type='number' label='Number Input' /> */}
        {/* Add more draggable input components as needed */}
      </div>
      {/* <DropZone /> */}
    </div>
  )
}
