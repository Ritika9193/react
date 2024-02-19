import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid is used to create unique id's
//state: state hand to hand situation batata hai jaise ki todo me kitne todo hai 
//action: action values provie krta hai jaise removetodo k lie id chahiye jo action dega
//playload object hai jisme kuch bhi aa sakta h jaise id

const initialState={
    todos:[{id:1,text:"helloworld"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addtodo,removetodo}=todoSlice.actions

export default todoSlice.reducer