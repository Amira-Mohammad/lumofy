export const ADD_COURSE = 'ADD_COURSE';



export function addCourse(name, thumbnail, description) {
    return {
        type: ADD_COURSE,
        name,
        thumbnail,
        description
    }

}