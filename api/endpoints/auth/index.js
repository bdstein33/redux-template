import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.post('/', endpointLoader('auth/signUp'));
router.get('/', endpointLoader('auth/test'))

export default router;
