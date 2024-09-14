import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from "./AddNote.js";

export default function Notes() {

  const {notes, getNotes} = useContext(noteContext)

  useEffect(() => {
    getNotes();
  }, [])
  
  return (
    <div>
        <AddNote />
        <div className="row m-3">
            {
                notes.map((note)=>{
                    return <Noteitem key={note._id} note={note}/>
                })
            }
        </div>
    </div>
  )
}