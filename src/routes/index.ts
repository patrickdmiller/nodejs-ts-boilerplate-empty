// -- Third party imports -- //
import { Router } from 'express';
import { router as test } from './test';
export const router = Router();
router.use('/test', test);

