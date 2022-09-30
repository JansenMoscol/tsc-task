import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/commons/models/User';
import { loginUser } from '../actions/user.actions';
import { AppState } from '../app.state';

export const initialState: User = {
    user: '',
    password: ''
};

export const userReducer = createReducer(
    initialState,
    on(loginUser, (state, user) => (user))
);