import express from 'express';
import newsRouter from './news.router.js'
const router = express.Router();

const routerAPI = (app) => {
    app.use('/api/v0', router);
    router.use('/news', newsRouter);
};  

export default routerAPI;