import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/commons/models/Task';
import { addTask, changeStatusTask, removeTask } from '../actions/tasks.actions';

export const initialState: ReadonlyArray<Task> = [];

export const tasksReducer = createReducer(
    initialState,

    on(addTask, (state, { name }) => ([
        ...state,
        {
            id: Date.now(),
            name,
            isChecked: false,
        }
    ])),

    on(removeTask, (state, { id }) => state.filter(i => i.id !== id)),

    on(changeStatusTask, (state, { id }) => {
        const index = state.findIndex(i => i.id === id)

        state[index].isChecked = !state[index].isChecked

        return state
    }),
);