import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoAPIType } from 'hooks/useFireStore'
import { fetchTodoList } from 'services/todos.services'

interface ThunkAPI {
	dispatch: Function
	getState: Function
	extra?: any
	requestId: string
	signal: AbortSignal
  }

export interface TodosState {
	todos: TodoAPIType[]
}

const initialState: TodosState = {
	todos: [],
}

// First, create the thunk
export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async () => {
	  const response = await fetchTodoList();
	  console.log({response})
	  return response
	},
  )


export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add:(state, action: PayloadAction<TodoAPIType>) => {
			console.log(action.payload)
			state.todos.push(action.payload)
		},
		initTodo:(state, action: PayloadAction<TodoAPIType[]>) => {
			console.log(action.payload)
			state.todos = action.payload
		},

		editTodo:(state, action: PayloadAction<TodoAPIType>) => {
			console.log(action.payload)
			state.todos.push(action.payload)
			const {id} = action.payload
			state.todos.splice(1, 1, action.payload);
		},
	
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			console.log("action.payload", action.payload)
		  // Add todos to the state array

		//   if(action.payload) {
		// 	state.todos = action.payload
		//   }
		 
		})
	  },
})

// Action creators are generated for each case reducer function
export const { add, editTodo, initTodo } = todosSlice.actions

export default todosSlice.reducer