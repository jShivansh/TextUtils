import React from 'react'

function Alerts(props) {
    const capitaliseFunt = (word) => {
        let lower = word.toLowerCase();
        if(lower==='danger'){lower='warning'};
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


  return (
    <>
      <div style={{height: '3em'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitaliseFunt(props.alert.type)} </strong>{props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
      </div>
    </>
  )
}

export default Alerts
