import models from '../models/index.js';

const getNews = async (req, res) => {
    try {
        const results = await models.News.find();
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json(error.errors);
    };
};

const searchNews = async (req, res) => {
    const { q } = req.query;
    try {
        const results = await models.News.find({title: { $regex: new RegExp(q, "i")}});
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json(error.errors);
    }
}

const postNews = async (req, res) => {
    const {title} = req.body;
    try {
        const result = await models.News.create({title});
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json(error.errors)
    };
};


export default {
    getNews,
    searchNews,
    postNews,
};