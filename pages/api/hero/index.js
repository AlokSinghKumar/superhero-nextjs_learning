import dbConnect from '../../../db/dbconnect';
import Hero from '../../../models/Hero';

dbConnect ();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const result = await Hero.find ({});
                res.status (200).json ({success : true, hero : result});
            } catch (error) {
                res.status(400).json ({success : false});
            }
            
            break;

        case 'POST':
            try {
                console.log (req.body);
                const result = await Hero.create (req.body);
                res.status (200).json ({success : true, hero : result});
            } catch (error) {
                console.log (error);
                res.status(400).json ({success : false});
            }
            
            break;
    
        default:  res.status(400).json ({success : false});
            break;
    }
} 