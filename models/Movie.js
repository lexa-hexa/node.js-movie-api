const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title:{
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
        maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
		minlength: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.']
    },
    category: {
        type: String,
        maxlength: 30,
        minlength:1
    },
    country: {
        type: String,
        minlength:1,
        maxlength:30
    },
    year: {
        type: Number,
        max:2040,
        min:1850,
    },
    imdb_score: {
        type: Number,
        max: 10,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);