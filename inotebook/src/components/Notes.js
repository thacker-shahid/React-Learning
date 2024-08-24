import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'

export default function Notes() {

  const {notes, setNotes} = useContext(noteContext)

  return (
    <div>
        <div className="row m-3">
            {
                notes.map((note)=>{
                    return <Noteitem note={note}/>
                })
            }
        </div>
    </div>
  )
}