import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB DiscGolfStats collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const discStatsSchema = mongoose.Schema({
    date:        { type: Date, 
                    required: true,
                    default: Date.now },
    course:      { type: String, required: true },
    parScore:    { type: Number, required: true },
	userScore:   { type: Number, required: true }
});

// Compile the model from the schema.
const DiscStat = mongoose.model('DiscStats', discStatsSchema);


// CREATE model *****************************************
const createDiscStats = async (date, course, parScore, userScore) => {
    const discStat = new DiscStat({ 
        date: date, 
        course: course, 
        parScore: parScore,
        userScore: userScore 
    });
    return discStat.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveDiscStats = async () => {
    const query = DiscStat.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveDiscStatsByID = async (_id) => {
    const query = DiscStat.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteDiscStatsById = async (_id) => {
    const result = await DiscStat.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateDiscStats = async (_id, date, course, parScore, userScore) => {
    const result = await DiscStat.replaceOne({_id: _id }, {
        date: date,
        course: course,
        parScore: parScore,
        userScore: userScore
    });
    return { 
        _id: _id, 
        date: date,
        course: course,
        parScore: parScore,
        userScore: userScore 
    }
}



// Export our variables for use in the controller file.
export { createDiscStats, retrieveDiscStats, retrieveDiscStatsByID, updateDiscStats, deleteDiscStatsById }