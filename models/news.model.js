import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const News = mongoose.model('news', NewsSchema);

export default News;