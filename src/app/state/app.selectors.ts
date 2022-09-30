import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from '../commons/models/Task';
import { User } from '../commons/models/User';

export const selectUser = createFeatureSelector<User>('user');

export const selectTasks = createFeatureSelector<Array<Task>>('tasks');

// export const selectBookCollection = createSelector(
//     selectUser,
//     selectCollectionState,
//     (books, collection) => {
//         return collection.map((id) => books.find((book) => book.id === id));
//     }
// );