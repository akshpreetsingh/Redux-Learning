import configureStore from './store/configureStore';
import * as actions from './store/books'

// store.subscribe(()=>{
//     console.log("state changed", store.getState());
// })

const store = configureStore();

    
document.getElementById("button").addEventListener("click", addToList);



console.log(store.getState());




function addToList() {

    const stateObject = {
        title : document.getElementById("title").value,
        author : document.getElementById("author").value
    }
        store.dispatch(actions.bookAdded(stateObject));
        console.log(store.getState());
        render();
}   

function handleChange(pos){
    console.log(pos)
    store.dispatch(actions.bookCompleted({id:pos}))
    console.log(store.getState())
    render();

}
    


function render (){
    const state = store.getState();
    const container =  document.getElementById("root");
    container.innerHTML = "";

    state.forEach((element, index) => {

        const div = document.createElement("div");
        const divId = document.createElement("div");
        
        const divAuthor = document.createElement("div");
        const divStatus = document.createElement("div");
        const buttonEdit = document.createElement("button");
        const inputCheckBox = document.createElement("input");
        inputCheckBox.setAttribute("type" , "checkbox");
        inputCheckBox.setAttribute("id", index+1 )
        inputCheckBox.addEventListener("change", () => {

            handleChange(inputCheckBox.id);

        })
        

        divId.innerHTML = element.id;
        divAuthor.innerHTML = element.author;
        divStatus.innerHTML = element.status;
        div.appendChild(divId);
        div.appendChild(divAuthor);
        div.appendChild(divStatus);    

        

        container.appendChild(div);
        container.appendChild(buttonEdit);
        container.appendChild(inputCheckBox);
            
    });

    
    
    
}




// store.dispatch(bookAdded({title:"Harry Potter", author:"Akshpreet"}))


// store.dispatch(bookAdded({title:"Dan Brown", author:"Demons"}))

// store.dispatch(bookAdded({title:"Sherlocks", author:"dayanand"}))

//store.dispatch(bookRemoved({id:2}))

// store.dispatch(bookCompleted({id : 1}))
// console.log(store.getState());




