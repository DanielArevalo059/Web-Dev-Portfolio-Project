import 'dotenv/config';
import express from 'express';
import * as discStats from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    discStats.createDiscStats(
        req.body.date, 
        req.body.course, 
        req.body.parScore,
        req.body.userScore
        )
        .then(discStat => {
            res.status(201).json(discStat);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Failed to create a new disc golf stat.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    discStats.retrieveDiscStats()
        .then(discStat => { 
            if (discStat !== null) {
                res.json(discStat);
            } else {
                res.status(404).json({ Error: 'That stat was not found in the database.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve that stat. Please review your input for accuracy and try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    discStats.retrieveDiscStatsByID(req.params._id)
    .then(discStat => { 
        if (discStat !== null) {
            res.json(discStat);
        } else {
            res.status(404).json({ Error: 'That stat was not found in the database.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve that stat. Please review your input for accuracy and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    discStats.updateDiscStats(
        req.params._id, 
        req.body.date, 
        req.body.course, 
        req.body.parScore,
        req.body.userScore
    )
    .then(discStat => {
        res.json(discStat);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Unable to update the stat.' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    discStats.deleteDiscStatsById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'This stat does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Successfully deleted that stat.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});