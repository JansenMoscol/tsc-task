import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
    '[Task] addTask',
    props<{ task: Task }>()
);
