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
  navigator.clipboard.writeText(text)
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
        <h2 className='my-3 mb-4'>{props.heading}</h2>        
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#151a20':'white', color:props.mode==='dark'?'white':'#353f48'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>handleExtraSpaces</button>
        <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#353f48'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}
