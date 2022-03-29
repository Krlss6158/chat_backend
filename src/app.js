import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => { res.send('Hellow 🚀🌑') });

export default app;