import React, { useState } from 'react';
import NavBar from "./NavBar";
import { addCourse } from '../Actions/Actions';
import { useDispatch } from 'react-redux';

const CreateCourse = (props) => {
    const [courseData, setCourseData] = useState({
        courseName: "",
        thumbnail: "",
        description: ""
    })


    const dispatch = useDispatch();

    const createCourse = (e) => {
        e.preventDefault();
        //console.log('x', couseData);
        dispatch(addCourse(courseData.courseName, courseData.thumbnail, courseData.description));
        props.history.push("/Courselist");

    }

    const handleChange = (e) => {
        const value = e.target.value;
        setCourseData({
            ...courseData,
            [e.target.name]: value
        });
    }


    return (
        <div>
            <NavBar />
            <form onSubmit={createCourse} className=" col-4 m-auto border border-primary card p-5 my-5">
                <div className="mb-3 d-flex justify-content-between">
                    <label htmlFor="courseName" className="form-label w-50 align-self-center">Course Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="courseName"
                        name="courseName"
                        value={courseData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <label htmlFor="thumbnail" className="form-label w-50 align-self-center">thumbnail</label>
                    <input
                        type="url"
                        className="form-control"
                        id="thumbnail"
                        name="thumbnail"
                        value={courseData.thumbnail}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <label htmlFor="description" className="form-label w-50 align-self-center">description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        id="description"
                        value={courseData.description}
                        onChange={handleChange}
                    />
                </div>



                {/*  <Link
                to={{
                    pathname: "/Courselist"
                    // + props.Q.id, state: { questionProps: props.Q } 
                }}
            > */}
                <button type="submit" className="btn btn-primary">Create course</button>
                {/* </Link> */}
            </form>
        </div>
    );
};

export default CreateCourse;