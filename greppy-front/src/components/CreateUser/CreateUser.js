import React from 'react';

import './CreateUser.css';
import {Link, useNavigate} from 'react-router-dom'


const onSubmit = (navigate, e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = {}
    formData.forEach((v, p) => body[p] = v)
    fetch(`http://localhost:3000/user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)})
        .then(() => {
            navigate('/')
        })

}
const CreateUser = () => {
    const navigate = useNavigate();

    return <div className="CreateUser">
        <div className={'center'}>
        <Link className={'cancel'} to={`/`}>Cancel</Link>
        <form  className={'form-center'} onSubmit={(e) => onSubmit(navigate, e)}>
            <label>First Name</label>
            <input name="firstName" type="text" />

            <label>Last Name</label>
            <input name="lastName" type="text" />

            <label>Age</label>
            <input name="age" type="number" min={0} max={100}/>

            <button className={"create"} type={"submit"}>Create</button>
        </form>
        </div>
    </div>
}

export default CreateUser;
