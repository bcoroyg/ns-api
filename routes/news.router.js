import express from 'express';
import controllerNews from '../controllers/news.controller.js';
const router = express.Router();

router.get('/', controllerNews.getNews);
router.get('/search', controllerNews.searchNews);
router.post('/', controllerNews.postNews);

export default router;