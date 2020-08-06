//principal arquivo da aplicação parte back-end

import exprees from 'express';
import cors from 'cors';
import routes from './routes';

const app = exprees();
app.use(cors());
app.use(exprees.json());
app.use(routes);

app.listen(3333);
 