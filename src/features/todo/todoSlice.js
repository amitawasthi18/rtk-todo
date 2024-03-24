import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1,text:'Learn RTK'}]
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        //property name: action(fn) name
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),text:action.payload});
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id!==action.payload);
        }
    }
});

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;