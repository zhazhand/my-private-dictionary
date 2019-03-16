const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');
const authRoutes = require('./routes/auth');
const irregularRoutes = require('./routes/irregular');
const vocabularyRoutes = require('./routes/vocabulary');
const separableRoutes = require('./routes/separable');
const gerundRoutes = require('./routes/gerund');
const infinitiveRoutes = require('./routes/infinitive');
const phrasesRoutes = require('./routes/phrases');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./middelware/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());  //second way of module connection

app.use('/api/auth', authRoutes);
app.use('/api/irregular', irregularRoutes);
app.use('/api/list', vocabularyRoutes);
app.use('/api/separable', separableRoutes);
app.use('/api/gerund', gerundRoutes);
app.use('/api/infinitive', infinitiveRoutes);
app.use('/api/phrases', phrasesRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'))

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'client', 'dist', 'client', 'index.html'
            )
        )
    })
}

module.exports = app;