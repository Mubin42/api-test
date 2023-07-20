import express from 'express';

const router = express.Router();
router.get('/', async (req, res) => {
  return res.status(200).json({ message: 'Mubin is a great waiter' });
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(4000).json({ message: 'email is required' });
    }
    return res.status(201).json({ message: 'new user created' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

router.get('/error', async (req, res) => {
  return res.status(400).json({ message: 'Something went wrong' });
});

export default router;
