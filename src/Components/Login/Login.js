import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.scss'
const Login = (props) => {

    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value)

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('xxxx');
        props.history.push("/Courselist");
        localStorage.setItem('userName', userName);
        console.log(userName)

    }

    return (
        <form onSubmit={submitHandler} className=" col-4 m-auto border border-primary card p-5">
            <div className="mb-3 d-flex justify-content-between">
                <label htmlFor="userName" className="form-label w-25 align-self-center">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    aria-describedby="emailHelp"
                    value={userName}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3 d-flex justify-content-between">
                <label htmlFor="exampleInputPassword1" className="form-label w-25 align-self-center">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            {/*  <Link
                to={{
                    pathname: "/Courselist"
                    // + props.Q.id, state: { questionProps: props.Q } 
                }}
            > */}
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* </Link> */}
        </form>
    );
};

export default Login;