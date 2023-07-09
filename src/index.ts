
require('dotenv').config({ path: require('find-config')('.env') })
import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { router } from './routes';
let PORT =  3000
if(process.env.PORT){
  PORT = parseInt(process.env.PORT)
}
const app = express();

    // this.app.use(cors({ credentials: true, origin: corsOrigins }));
    app.use(express.json()); // Parse out our json
    app.use(cookieParser()); // Parse out our cookies
    app.use('/api/v1/', router);
    app.get('/', (req: Request, res: Response)=>{
      res.json({status:"success"})
    })
  app.listen(PORT, '0.0.0.0', () => {
      console.error(`Presence Service http://0.0.0.0:${PORT}`);
    });
