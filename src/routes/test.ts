import { Router, Request, Response } from 'express';
export const router = Router();
router.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({ hello: "world" });
});

