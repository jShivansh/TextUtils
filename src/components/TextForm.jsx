import React, { useState } from 'react'
import propTypes from 'prop-types'

function TextForm(props) {

    const [strng, setStrng] = useState('');

    const handleUppercase = (e)=>{
        e.preventDefault();
        let newStrng = strng.toUpperCase();
        setStrng(newStrng);
        if(newStrng.length>0){
            props.showAlert("Converted to Uppercase", "success");
        }
        else{props.showAlert("Please enter some text", "danger");}
    }

    const handleLowercase = (e)=>{
        e.preventDefault();
        let newStrng = strng.toLowerCase();
        setStrng(newStrng);
        if(newStrng.length>0){
            props.showAlert("Converted to Lowercase", "success");
        }
        else{props.showAlert("Please enter some text", "danger");}
    }
    
    const handleCopy = () => {
        let copyText = document.getElementById('textBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(strng.length>0){
            props.showAlert("Your Text is copied", "success");
        }
        else{props.showAlert("Please enter some text", "danger");}
    }

    const handleExtraSpace = () => {
        let newText = strng.split(/[ ]+/);
        setStrng(newText.join(" "));
        if(strng.length>0){
            props.showAlert("Extra spaces are removed", "success");
        }
        else{props.showAlert("Please enter some text", "danger");}
    }

    const handleClear = (e)=>{
        e.preventDefault();
        setStrng('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setStrng(e.target.value);
    }

  return (
    <>
        <div className="mb-3">
            <h1>{props.textHeading}</h1>
            <textarea className="form-control" id="textBox" rows="8" onChange={handleChange} value={strng}></textarea>
        </div>
        <div>
            <button className={`btn btn-${props.btnColor} mx-1 mb-1`} onClick={handleUppercase}>Convert to UPPERCASE</button>
            <button className={`btn btn-${props.btnColor} mx-1 mb-1`} onClick={handleLowercase}>Convert to lowercase</button>
            <button className={`btn btn-${props.btnColor} mx-1 mb-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.btnColor} mx-1 mb-1`} onClick={handleExtraSpace}>Remove extra spaces</button>
            <button className={`btn btn-${props.btnColor} mx-1 mb-1`} onClick={handleClear}>Clear Text</button>
        </div>
        <div className='container my-4'>
            <h1>Your Text Summary</h1>
            <p>{strng.split(' ').filter((data)=>{return data.length!==0}).length} words and {strng.length} charecters</p>
            <p>Time to read the text is {0.005 * strng.split(' ').filter((data)=>{return data.length!==0}).length} minutes</p>
            <h2>Preview</h2>
            <p>{strng.length>0?strng:'Enter something in the Textbox to preview here.'}</p>
        </div>
    </>
  )
}

export default TextForm


TextForm.propTypes = {
    textHeading: propTypes.string
};