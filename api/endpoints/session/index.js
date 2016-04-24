import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.delete('/', endpointLoader('session/delete'));

export default router;
