import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { User } from './user.model';
import { userQueries } from './users.queries';

export const readOneUser = async (userId: number) => {
    return execute<User>(userQueries.readOneUser,[userId]);
};
export const searchForUser = async (search: string) => {
    return execute<User[]>(userQueries.searchForUser,[search]);
};
export const createUser = async (user: User) => {
    return execute<OkPacket>(userQueries.createUser,[user.username,user.firstName,user.lastName,user.password,
        user.street,user.country,user.city,user.state,user.zip,user.profilePhoto]);
};
export const updateUser = async (user: User) => {
    return execute<OkPacket>(userQueries.updateUser, [user.username,user.firstName,user.lastName,user.password,
        user.street,user.country,user.city,user.state,user.zip,user.profilePhoto,user.userId])
};
export const deleteUser = async (userId: number) => {
    return execute<OkPacket>(userQueries.deleteUser,[userId])
};