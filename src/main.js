import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { usersRoutes } from './http/routes/index.js';
import { errorMiddleware } from './http/middlewares/error-handler.middleware.js'

const app = express();
app.use(express.json());
app.use(usersRoutes);



// PRA TER CERTEZA QUE É O ULTIMO
app.use(errorMiddleware);
// NÃO COLOQUE MIDDLEWARES DEPOIS DAQUI

app.listen(process.env.APP_PORT, () => {
    console.log(`App started listening on port ${process.env.APP_PORT}`);
});

