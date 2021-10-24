import { Courses } from '../Utils/Data'
import { ADD_COURSE } from '../Actions/Actions'
export default function courses(state = Courses, action) {

    switch (action.type) {

        case ADD_COURSE:
            console.log('ADD_COURSE');

            return [
                ...state,
                {
                    id: Math.random(),
                    name: action.name,
                    thumbnail: action.thumbnail,
                    description: action.description,
                    data: "",
                    nonAdminUsersCanEnroll: true
                }

            ]
        default:
            return state
    }

}

// {text : action.text , date : action.date , id : Math.random()}