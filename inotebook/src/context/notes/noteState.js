import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    let host = "http://localhost:5000"
    const noteInitial = []
    const [notes, setNotes] = useState(noteInitial)

    // Get all Notes
    const getNotes = async () => {

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMmVmZjk4NmExZTk3MWU3Y2Q3YzZlIn0sImlhdCI6MTcyNDIwODM2NH0.GEN5pN5D6k2tRJLFL2DBxYk9vRKGWyCUyzYf4BhnZSg"
            },
        });
        const json = await response.json();
        setNotes(json);
    }



    // Add a Note
    const AddNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            body: JSON.stringify({ title, description, tag }),
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMmVmZjk4NmExZTk3MWU3Y2Q3YzZlIn0sImlhdCI6MTcyNDIwODM2NH0.GEN5pN5D6k2tRJLFL2DBxYk9vRKGWyCUyzYf4BhnZSg"
            },
        });

        const note = {
            "_id": "66c56825dkjhuihuc65834112bbc9444f",
            "user": "66c2eff986a1e971e7cd7c6e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-08-21T04:02:06.024Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }


    // Delete a Note
    const DeleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMmVmZjk4NmExZTk3MWU3Y2Q3YzZlIn0sImlhdCI6MTcyNDIwODM2NH0.GEN5pN5D6k2tRJLFL2DBxYk9vRKGWyCUyzYf4BhnZSg"
            },
        });
        const json = await response.json();


        // const newNotes = notes.filter((notes) => { return notes._id !== id })
        setNotes(json)
    }


    // Edit a Note
    const EditNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            body: JSON.stringify({ title: title, description: description, tag: tag }),
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMmVmZjk4NmExZTk3MWU3Y2Q3YzZlIn0sImlhdCI6MTcyNDIwODM2NH0.GEN5pN5D6k2tRJLFL2DBxYk9vRKGWyCUyzYf4BhnZSg"
            },
        });
        const json = response.json();

        for (let x of notes) {
            if (x._id === id) {
                x.title = title;
                x.description = description;
                x.tag = tag
            }
        }
        setNotes()
    }


    return (
        <NoteContext.Provider value={{ notes, AddNote, DeleteNote, EditNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;