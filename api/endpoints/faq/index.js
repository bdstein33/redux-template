import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.post('/', endpointLoader('faq/createFaq'));
// router.update('/', endpointLoader('faq/updateFaq'));
router.delete('/', endpointLoader('faq/deleteFaq'));
router.get('/', endpointLoader('faq/getFaq'));

// router.post('/section', endpointLoader('faq/createFaqSection'));
// router.update('/section', endpointLoader('faq/updateFaqSection'));
// router.delete('/section', endpointLoader('faq/deleteFaqSection'));

// router.post('/section/question', endpointLoader('faq/createFaqQuestion'));
// router.update('/section/question', endpointLoader('faq/updateFaqQuestion'));
// router.delete('/section/question', endpointLoader('faq/deleteFaqQuestion'));

export default router;
