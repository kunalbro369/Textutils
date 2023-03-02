import React,{useState} from 'react'

export default function TextForms(props) {

  const handleOnClick=()=>{
      // console.log("Uppercase was clicked" );
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Uppercase","success")
      
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" );
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
}
const handleReverse = (event) => {
  /* Convert string to array*/
  let strArr = text.split("");
  /* Reverse array*/
  strArr = strArr.reverse();
  /* Convert array to string*/
  let newText = strArr.join("");
  setText(newText);
  props.showAlert("Converted to Reverse","success")
};
const handleClearClick = () => {
  setText("");
  props.showAlert("Text Cleared!","success")
}
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
}
const handleCopy = ()=>{
  var text = document.getElementById("exampleFormControlTextarea1")
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert("Copied to Clipboard!","success")
}
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success")
}
  const [text,setText] = useState(" ");
  // text =  "new Text" wrong way to change state 
  // setText("new Text"); correct way to change state 
  return (
    <>
    <div className='container ' style={{color:props.mode==='dark'?'white':'#353f48'}}>
        <h2 className='my-3'>{props.heading}</h2>        
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#353f48'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>handleCopy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>handleExtraSpaces</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#353f48'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
