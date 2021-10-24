import { combineReducers } from 'redux'
import courses from './CoursesReducers';
import users from './UsersReducers';




export default combineReducers({
    users,
    courses
});