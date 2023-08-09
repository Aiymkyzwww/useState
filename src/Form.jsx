import React, { useState } from "react";
const Form = (props) => {
    console.log(props);
    const [email, setEmail] = useState("")

    const emailChangeHahdler = (e) => {
        setEmail(e.target.value)
    }
    const addValue = () => {
        const value = {
            email: email,
            id: Math.random().toString()
        }
        props.onSave(value)
        setEmail("")
    }

    return (
        <div style={{ width: '300px', border: "5px solid ", height: "150px", display: 'flex', alignItems: "center", }}>
            <input  value={email} onChange={emailChangeHahdler} type="text" placeholder='email' />
            <button onClick={addValue} >ADD</button>
            <button onClick={props.close}>close</button>
        </div>
    )
}
export default Form