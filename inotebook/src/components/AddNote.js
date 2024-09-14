import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const {AddNote} = useContext(noteContext);
    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e)=>{
        e.preventDefault();
        AddNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form className='my-3'>
                <div className="form-group my-3">
                    <label htmlFor="title">Title</label>
                    <input onChange={onChange} type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="Enter title" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <input onChange={onChange} type="text" className="form-control" id="description" name='description' placeholder="Enter description" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="tag">Tag</label>
                    <input onChange={onChange} type="text" className="form-control" id="tag" name='tag' placeholder="Enter tag" />
                </div>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
            </form>

            <h2>Your Notes</h2>
        </div>
    )
}
