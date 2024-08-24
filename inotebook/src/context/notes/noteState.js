import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    
    const noteInitial = [
        {
          "_id": "66c56809dc658112bbc9444d",
          "user": "66c2eff986a1e971e7cd7c6e",
          "title": "My title 2",
          "description": "My descriptiopn 2",
          "tag": "general",
          "date": "2024-08-21T04:02:06.024Z",
          "__v": 0
        },
        {
          "_id": "66c56825dc658112bbc9444f",
          "user": "66c2eff986a1e971e7cd7c6e",
          "title": "My title 3",
          "description": "My descriptiopn 3",
          "tag": "physics",
          "date": "2024-08-21T04:02:06.024Z",
          "__v": 0
        },
        {
          "_id": "66c56809dc658112bbc9444d",
          "user": "66c2eff986a1e971e7cd7c6e",
          "title": "My title 2",
          "description": "My descriptiopn 2",
          "tag": "general",
          "date": "2024-08-21T04:02:06.024Z",
          "__v": 0
        },
        {
          "_id": "66c56825dc658112bbc9444f",
          "user": "66c2eff986a1e971e7cd7c6e",
          "title": "My title 3",
          "description": "My descriptiopn 3",
          "tag": "physics",
          "date": "2024-08-21T04:02:06.024Z",
          "__v": 0
        },
        {
          "_id": "66c56825dc658112bbc9444f",
          "user": "66c2eff986a1e971e7cd7c6e",
          "title": "My title 3",
          "description": "My descriptiopn 3",
          "tag": "physics",
          "date": "2024-08-21T04:02:06.024Z",
          "__v": 0
        }
      ]
    
      const [notes, setNotes] = useState(noteInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;