import React from 'react'
import propTypes from 'prop-types'

function TextForm(props) {
  return (
    <>
      
        <div className="mb-3">
        <label htmlFor="textBox" className="form-label">{props.textHeading}</label>
        <textarea className="form-control" id="textBox" rows="3"></textarea>
        </div>
    </>
  )
}

export default TextForm


TextForm.propTypes = {
    textHeading: propTypes.string
};