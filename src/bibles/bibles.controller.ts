import { Request, RequestHandler, Response } from 'express';
import { Bible } from './bible.model';
import * as BiblesDao from './bibles.dao';
import {OkPacket} from 'mysql';

export const readAllBibles: RequestHandler = async (req: Request, res: Response) => {
    try {
        let bibles;
        let bibleId = parseInt(req.query.Id as string);
        console.log('bibleId',bibleId);
        if(Number.isNaN(bibleId)) {
            bibles = await BiblesDao.readAllBibles();
        } else {
            bibles = await BiblesDao.readOneBible(bibleId);
        }
        res.status(200).json(
            bibles
        );
    } catch (error) {
        console.error('[bibles.controller][readAllBibles][Error] ',error);
        res.status(500).json({
            message: 'There was an error when fetching bibles'
        });
    }
}

export const readOneBible: RequestHandler = async (req:Request, res:Response) => {
    try {
        const bibleId = parseInt(req.params.bible as string);
        const bible = await BiblesDao.readOneBible(bibleId);
        res.status(200).json(
            bible
        );
    } catch (error) {
        console.error('[bibles.controller][readOneBible][Error] ',error);
        res.status(500).json({
            message: 'There was an error when fetching bibles'
        });
    }
}

export const searchForBible: RequestHandler = async (req:Request, res:Response) => {
    try {
        const searchTerm = '%'+req.params.search+'%';
        const bibles = await BiblesDao.searchForBible(searchTerm.toLowerCase());
        res.status(200).json(
            bibles
        );
    } catch (error) {
        console.error('[bibles.controller][searchForBible][Error] ',error);
        res.status(500).json({
            message: 'There was an error when fetching bibles'
        });
    }
}

export const createBible: RequestHandler = async (req:Request, res:Response) => {
    try {
        const okPacket: OkPacket = await BiblesDao.createBible(req.body);
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[bibles.controller][createBible][Error] ',error);
        res.status(500).json({
            message: 'There was an error when creating a bible'
        });
    }
}

export const updateBible: RequestHandler = async (req:Request, res:Response) => {
    try {
        const okPacket: OkPacket = await BiblesDao.updateBible(req.body);
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[bibles.controller][updateBible][Error] ',error);
        res.status(500).json({
            message: 'There was an error when updating a bible'
        });
    }
}

export const deleteBible: RequestHandler = async (req:Request, res:Response) => {
    let bibleId = parseInt(req.params.bibleId as string);
    if(!Number.isNaN(bibleId)){
        const okPacket: OkPacket = await BiblesDao.deleteBible(bibleId);
        res.status(200).json(
            okPacket
        );
    } else {
        throw new Error("Integer expected for bibleId");
    }
}
