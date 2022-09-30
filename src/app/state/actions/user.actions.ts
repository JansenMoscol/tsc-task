import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/commons/models/User';

export const loginUser = createAction(
    '[User] LoginUser',
    props<User>()
);
