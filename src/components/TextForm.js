import React,{ useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpperCaseClick = ()=>{
    // console.log('clicked on upperCase button..'+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", 'success');    
  }
  const handleLowerCaseClick = ()=>{
    // console.log('clicked on lowerCase button..'+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", 'success');        
  }
  const clearText = ()=>{
    // console.log('clicked on lowerCase button..'+ text);
    let newText = '';
    setText(newText); 
    props.showAlert("Text cleared!", 'success');           
  }
  const handleOnChange = (event)=>{
    // console.log('on Change...', event);
    setText(event.target.value);    
  }
  // console.log('props.mode', props.mode);
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h3 className='my-3'>{props.heading}</h3>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'? 'white': 'black'}}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes required to read</p>
        <h4>Preview</h4>
        <p>{text.length>0 ? text: "Enter something in the Textbox above to Preview it here"}</p>
    </div>

    </>
  )
}
