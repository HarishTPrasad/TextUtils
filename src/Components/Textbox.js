import React,{useState} from 'react'

export default function Textbox(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!" , "success");
    }

    const handleLoClick = () => {
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!" , "success");
  }

    const handleOnChange = (Event) => {
        console.log(" Onchange");
        setText(Event.target.value)
    }

    const handleCopy = () => {
      console.log(" I am copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to your clipboard!" , "success");
  }

  const handleExtraSpaces = () => {
    console.log(" remove extra spaces");
    const newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed all extra spaces in the text!" , "success");    
}

    const [text, setText] = useState('');

  return (
    
    <>
     <div className='container' style={{ color : props.mode==='dark'?'white':'black'}} >
 <h1>{props.heading}</h1>
<div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="11"></textarea>
</div>
<button  className="btn btn-outline-primary mx-1"  onClick={handleUpClick}>Uppercase</button>
<button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Lowercase</button>
<button  className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy text</button>
<button  className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
<div className='conatainer my-3'  >
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters are there in your text.</p>
  <p>{0.008 * text.split(" ").length} minutes it will take to read all the text.</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>

</div>
    </div>
    </>
   
  )
}
