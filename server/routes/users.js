import express from 'express';

import {
	createAccount,
	signin,
	getAccounts,
	updateAccount,
	verifyEmail,
	resendVerificationEmail,
	tryReset,
	resetPassword,
} from '../controllers/users.js';

const router = express.Router();

router.post('/createAccount', createAccount);
router.post('/signin', signin);
router.get('/getAccounts', getAccounts);
router.patch('/updateAccount/:id', updateAccount);
router.post('/verify-email', verifyEmail);
router.post('/resend-verification-email', resendVerificationEmail);
router.post('/try-reset', tryReset);
router.post('/reset-password', resetPassword);

export default router;
