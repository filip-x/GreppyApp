import React from 'react';
import './UserRow.css';
import { useNavigate } from 'react-router-dom'
const deleteUser  = (navigate, id) => {
        fetch(`http://localhost:3000/user/${id}`,{method: 'DELETE'})
            .then(() => navigate(0));
}
const updateUser = (navigate, id) => {
        navigate(`/edit/${id}`)
}
const UserRow = (props) => {
        const navigate = useNavigate();
        // const navigate = true;
        return (<tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.age}</td>
                <td>
                        <button className={"edit"} onClick={() => updateUser(navigate, props.id)}>Edit</button>
                </td>
                <td>
                        <button className={"remove"} onClick={() => deleteUser(navigate, props.id)}>Remove</button>
                </td>
        </tr>)
};

UserRow.propTypes = {};

UserRow.defaultProps = {};

export default UserRow;
