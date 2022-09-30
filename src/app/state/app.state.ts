import { Task } from "../commons/models/Task";
import { User } from "../commons/models/User";

export interface AppState {
    user: User,
    tasks: ReadonlyArray<Task>
}