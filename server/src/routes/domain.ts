import {Router} from 'express';
const router = Router();

import { fetchDomain } from '../controllers/domain.controller';

router.route('/domain')
    .post(fetchDomain)

export default router;