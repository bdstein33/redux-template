import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.post('/', endpointLoader('faqs/createFaq'));
// router.update('/', endpointLoader('faq/updateFaq'));
router.delete('/', endpointLoader('faqs/deleteFaq'));
router.get('/', endpointLoader('faqs/getFaq'));

router.post('/section', endpointLoader('faqs/createFaqSection'))


router.get('/user', endpointLoader('faqs/getUserFaqs'));

// router.post('/section', endpointLoader('faq/createFaqSection'));
// router.update('/section', endpointLoader('faq/updateFaqSection'));
// router.delete('/section', endpointLoader('faq/deleteFaqSection'));

// router.post('/section/question', endpointLoader('faq/createFaqQuestion'));
// router.update('/section/question', endpointLoader('faq/updateFaqQuestion'));
// router.delete('/section/question', endpointLoader('faq/deleteFaqQuestion'));

export default router;
