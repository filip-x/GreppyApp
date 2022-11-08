import React from 'react';
import './Home.css';
import {useEffect, useState} from 'react'
import UserRow from '../UserRow/UserRow'
import {useNavigate} from 'react-router-dom'

const keyDown = (e, setItems) =>
{
    if (e.key === 'Enter') {
        if (e.target.value.length > 0) {
            fetch(`http://localhost:3000/user/filter/${e.target.value}`).then(res => res.json())
                .then((result) => {
                    setItems(result);
                })
        } else {
            fetch('http://localhost:3000/user').then(res => res.json())
                .then((result) => {
                    setItems(result);
                })
        }
    }

}

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/user').then(res => res.json())
            .then((result) => {
                setItems(result);
            })
    }, [])
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className={'center'}>
            <input className={'search'} type={'text'} placeholder={'Search after first name or last name '} onKeyDown={(e) => keyDown(e, setItems)}/>
            <table className={'table-head'}>
                <tr className={'declarative-row'}>
                    <th className={'item1'}>Id</th>
                    <th className={'item2'}>First Name</th>
                    <th className={'item3'}>Last Name</th>
                    <th className={'item4'}>Age</th>
                </tr>
                {items && items.map(item => <UserRow {...item} />)}
            </table>
                <button className={'create'} onClick={() => navigate(`/create`)}> Create a new user</button>
            </div>
        </div>
    );
}


export default Home;
