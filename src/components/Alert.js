import React from "react";

function Alert(props) {
    const cap=(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height:'20px'}}>
   { props.alert && <div   className={`alert py-1 alert-${props.alert.type} alert-dismissible fade show `} role="alert">
      <strong>{cap(props.alert.type)}: </strong>{props.alert.msg}
    </div>}
    </div>
  ); 
}

export default Alert;