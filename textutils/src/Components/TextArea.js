import React, {useState} from 'react'

export default function (props) {

    let [text, setText] = useState("")

    let toUpper = ()=>{
        setText(text.toUpperCase())
        props.changeAlert("Changed to upper case", "success")
    }
    let toLower = ()=>{
        setText(text.toLowerCase())
        props.changeAlert("Changed to lower case", "success")
    }
    
    let textAreaText = (e)=>{
        setText(e.target.value);
    }
    
    let copyText = ()=>{
        let textArea = document.getElementById('myTextArea');
        textArea.select();
        document.execCommand('copy');
        props.changeAlert("Text copied", "success")
    }

    let removeExtraSpace = ()=>{
        let newText = text.replace(/\s{2,}/g, ' ')
        setText(newText)
        props.changeAlert("Removed Extra spaces", "success")
    }

  return (
    <div className="form-group container mt-5">
        <h2 style={{color: props.mode=='Dark'?'black': 'white'}} for="myTextArea">Text Utils Area</h2>
        <textarea className="form-control" onChange={textAreaText} value={text} id="myTextArea" rows="10"></textarea>
        <button onClick={toUpper} type="button" className="btn btn-primary m-2">Convert Upper Case</button>
        <button onClick={toLower} type="button" className="btn btn-primary  m-2">Convert Lower Case</button>
        <button onClick={copyText} type="button" className="btn btn-primary  m-2">Click to Copy Text</button>
        <button onClick={removeExtraSpace} type="button" className="btn btn-primary  m-2">Click to remove extra space</button>
        <h3 style={{color: props.mode=='Dark'?'black': 'white'}}>Preview</h3>
        <p style={{color: props.mode=='Dark'?'black': 'white'}}>{text}</p>
  </div>
  )
}
