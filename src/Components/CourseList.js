import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
const CourseList = () => {
    const courses = useSelector(state => state.courses);
    console.log('x', courses);

    return (
        <div>
            <NavBar />
            CourseList
            <Link
                to={{
                    pathname: "/createcourse"
                    // + props.Q.id, state: { questionProps: props.Q } 
                }}

                className="bg-light rounded-circle fs-1 addBtn d-flex justify-content-center"
            >
                +</Link>


            {courses.map((course) => {
                return (
                    <div key={course.id}>

                        <div className="card m-auto mb-2"
                            style={{ width: 300 }}
                        >
                            <img src={course.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                {/* <p className="card-text">{course.description}</p> */}
                                <a href="#" className="btn btn-primary">enroll Now</a>
                                <Link className="btn px-5"
                                    to={{
                                        pathname: "/viewcourse/"
                                            + course.id,
                                        state: { courseDetails: course }
                                    }}

                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default CourseList;