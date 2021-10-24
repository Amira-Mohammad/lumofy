import React from 'react';

const ViewCourse = (props) => {
    console.log('xprops', props);

    const courseDetails = props.location.state.courseDetails
    console.log('courseDetails', courseDetails);
    return (
        <div >
            <div className="card m-auto mb-2"
                style={{ width: 300 }}
            >
                <img src={courseDetails.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{courseDetails.name}</h5>
                    <p className="card-text">{courseDetails.description}</p>
                    <button className="btn btn-primary">Enroll Now</button>

                </div>
            </div>
        </div>
    );
};

export default ViewCourse;