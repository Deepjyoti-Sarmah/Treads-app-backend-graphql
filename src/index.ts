import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import createApollowGraphServer from "./graphql"; 

async function init() {
    
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({message: 'Server is up and running'});
    })
    
    app.use(
      '/graphql',
      expressMiddleware(await createApollowGraphServer(), (context: () => {}))
    );

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));

}

init();
