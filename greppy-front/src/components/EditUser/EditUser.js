import React, {useEffect, useState} from 'react'
import './EditUser.css';
import {Link, useNavigate, useParams} from 'react-router-dom'

const onSubmit = (id, navigate, e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = {}
    formData.forEach((v, p) => body[p] = v)
    console.log(body)
    fetch(`http://localhost:3000/user/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(body)})
        .then(() => {
            navigate('/')
        })

}
const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
            .then(r => r.json())
            .then(r => {
                setUser(r)
            })
    }, [id])

    return <div className="EditUser">
        <div className={'center'}>
        <Link  className={'cancel'} to={`/`}>Cancel</Link>
        <form  className={'form-center'} onSubmit={(e) => onSubmit(id, navigate, e)}>
            <label>First Name</label>
            <input name="firstName" type="text" defaultValue={user.firstName} />

            <label>Last Name</label>
            <input name="lastName" type="text" defaultValue={user.lastName} />

            <label>Age</label>
            <input name="age" type="number" defaultValue={user.age} min={0} max={100}/>

            <button className={'update'} type={"submit"}>Update</button>
        </form>
        </div>
    </div>
};

export default EditUser;
