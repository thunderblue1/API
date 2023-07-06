import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Bible } from './bible.model';
import { bibleQueries } from './bibles.queries';

export const readAllBibles = async () => {
    return execute<Bible[]>(bibleQueries.readAllBibles,[]);
};

export const readOneBible = async (bibleId: number) => {
    return execute<Bible>(bibleQueries.readOneBible,[bibleId]);
};
export const searchForBible = async (search: string) => {
    return execute<Bible[]>(bibleQueries.searchForBible,[search,search,search]);
};
export const createBible = async (bible: Bible) => {
    return execute<OkPacket>(bibleQueries.createBible,[bible.name,bible.version,bible.description,bible.price,bible.productPhoto]);
};
export const updateBible = async (bible: Bible) => {
    return execute<OkPacket>(bibleQueries.updateBible, [bible.name,bible.version,bible.description,bible.price,bible.productPhoto,bible.Id])
};
export const deleteBible = async (bibleId: number) => {
    return execute<OkPacket>(bibleQueries.deleteBible,[bibleId])
};