import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Noteitem(props) {
    const {DeleteNote} = useContext(noteContext);

const {note} = props

    return (
        <div className='col-md-4 my-3'>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa fa-solid fa-trash mx-2" onClick={()=>{
                            return DeleteNote(note._id)
                        }}></i>
                        <i className="fa fa-solid fa-pen mx-2">edit</i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
