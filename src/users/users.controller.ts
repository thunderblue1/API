import { Request, RequestHandler, Response } from 'express';
import * as UsersDao from './users.dao';
import {OkPacket} from 'mysql';

export const readOneUser: RequestHandler = async (req:Request, res:Response) => {
    try {
        const userId = parseInt(req.params.userId as string);
        const user = await UsersDao.readOneUser(userId);
        res.status(200).json(
            user
        );
    } catch (error) {
        console.error('[user.controller][readOneUser][Error] ',error);
        res.status(500).json({
            message: 'There was an error when fetching users'
        });
    }
}

export const searchForUser: RequestHandler = async (req:Request, res:Response) => {
    try {
        const searchTerm = req.params.searchTerm;
        const user = await UsersDao.searchForUser(searchTerm);
        res.status(200).json(
            user
        );
    } catch (error) {
        console.error('[user.controller][searchForUser][Error] ',error);
        res.status(500).json({
            message: 'There was an error when fetching users'
        });
    }
}

export const createUser: RequestHandler = async (req:Request, res:Response) => {
    try {
        const okPacket: OkPacket = await UsersDao.createUser(req.body);
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[user.controller][createUser][Error] ',error);
        res.status(500).json({
            message: 'There was an error when creating users'
        });
    }
}

export const updateUser: RequestHandler = async (req:Request, res:Response) => {
    try {
        const okPacket: OkPacket = await UsersDao.updateUser(req.body);
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[user.controller][updateUser][Error] ',error);
        res.status(500).json({
            message: 'There was an error when updating a user'
        });
    }
}

export const deleteUser: RequestHandler = async (req:Request, res:Response) => {
    let userId = parseInt(req.params.userId as string);
    if(!Number.isNaN(userId)){
        const okPacket: OkPacket = await UsersDao.deleteUser(userId);
        res.status(200).json(
            okPacket
        );
    } else {
        throw new Error("Integer expected for userId");
    }
}