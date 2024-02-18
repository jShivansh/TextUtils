import React, { useState } from 'react'
import propTypes from 'prop-types'

function TextForm(props) {

    const [strng, setStrng] = useState('');

    const handleUppercase = (e)=>{
        e.preventDefault();
        let newStrng = strng.toUpperCase();
        setStrng(newStrng);
    }

    const handleLowercase = (e)=>{
        e.preventDefault();
        let newStrng = strng.toLowerCase();
        setStrng(newStrng);
    }
    
    const handleCopy = () => {
        let copyText = document.getElementById('textBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleExtraSpace = () => {
        let newText = strng.split(/[ ]+/);
        setStrng(newText.join(" "));
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
            <button className="btn btn-primary mx-1" onClick={handleUppercase}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLowercase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className='container my-4'>
            <h1>Your Text Summary</h1>
            <p>{strng.split(' ').length} words and {strng.length} charecters</p>
            <p>Time to read the text is {0.005 * strng.split(' ').length} minutes</p>
            <h2>Preview</h2>
            <p>{strng}</p>
        </div>
    </>
  )
}

export default TextForm


TextForm.propTypes = {
    textHeading: propTypes.string
};