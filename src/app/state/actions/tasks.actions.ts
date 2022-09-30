import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/commons/models/Task';

export const addTask = createAction(
    '[Task] addTask',
    props<Task>()
);

export const removeTask = createAction(
    '[Task] removeTask',
    props<{ id: Number }>()
);

export const changeStatusTask = createAction(
    '[Task] changeStatusTask',
    props<{ id: Number }>()
);
