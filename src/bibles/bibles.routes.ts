import { Request, Response, Router} from 'express';
import * as BiblesController from './bibles.controller';

const router = Router();

router
    .route('/bibles')
    .get(BiblesController.readAllBibles);

router
    .route('/bibles/:bible')
    .get(BiblesController.readOneBible);

router
    .route('/bibles/search/:search')
    .get(BiblesController.searchForBible);

router
    .route('/bibles')
    .post(BiblesController.createBible);

router
    .route('/bibles')
    .put(BiblesController.updateBible);

router
    .route('/bibles/:bibleId')
    .delete(BiblesController.deleteBible);

export default router;