import React from 'react'

export default function Alerts(props) {
  return (
    props.alert && <div className= {`alert alert-${props.alert.type}`} role="alert">
        {props.alert.type}! {props.alert.msg}
    </div>
  )
}
