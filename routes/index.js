const express = require('express');
const prefixService = require('../service/prefix');

const router = express.Router();
router.post('/match', async (req, res, next) => {
  const { str } = req.body;
  try {
    const id = await prefixService.match(str);
    res.status(201).json(id);
  } catch {
    res.status(500).json('something went wrong');
  }
});

module.exports = router;
