//---Action types---

const BOOK_ADDED = "bookAdded";
const BOOK_REMOVED = "bookRemoved";
const BOOK_SELECTED = "bookSelected";
const BOOK_READ = "bookRead" 

//---Actions Creators---

export function bookAdded(description){
    return {
        type: BOOK_ADDED,
        payload:{
            description:{
                title: description.title,
                author: description.author,
            }
        }
    }
}

export function bookRemoved(description){
    return {
        type:BOOK_REMOVED,
        payload: {
        description:{
            id:description.id
            }   
        }
    }
}

export function selectBooks(description){
    return {
        type: BOOK_SELECTED,
        payload: {
            description: {
                id:description.id
            }
        }
    }
}

export function bookCompleted(description) {
    console.log(description)
    return {
        type : BOOK_READ,
        payload : {
            description : {
                id : description.id
            }
        }
    }
}

//---Reducers---

let bookId = 0;
export default function reducer(state=[], action){
    if(action.type === BOOK_ADDED)
        return [
            ...state,
            {
                id: ++bookId,
                title: action.payload.description.title,
                author: action.payload.description.author,
                status: "Not Started"
            }
        ]; 
    else if(action.type === BOOK_REMOVED)
        return state.filter(book => book.id !== action.payload.description.id)
    
    
    else if(action.type === BOOK_READ)
    
        return state.map(book => book.id === action.payload.description.id ? {...book, status: "Completed"} : book );


    return state;   


}

