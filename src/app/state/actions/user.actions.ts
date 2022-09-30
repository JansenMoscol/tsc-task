import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/commons/models/User';

export const addBook = createAction(
    '[User] LoginUser',
    props<{ user: User }>()
);
