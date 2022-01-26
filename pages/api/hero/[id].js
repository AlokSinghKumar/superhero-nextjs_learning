import dbConnect from '../../../db/dbconnect';
import Hero from '../../../models/Hero';

dbConnect ();

export default async (req, res) => {
    const method = req.method;
    const id     = req.query.id;

    switch (method) {
        case 'GET':
            try {
                const result = await Hero.findById (id);

                if (!result)
                    res.status (400).json ({success : false});
                    
                res.status (200).json ({success : true, data : result});
            }
            catch (err) {
                res.status (400).json ({success : false});
            }
            
            break;

        case 'PUT':
            try {
                console.log (req.body, id)
                const result = await Hero.findByIdAndUpdate (id, req.body, {
                    new        : true,
                    validators : true,
                });

                if (!result)
                    res.status (400).json ({success : false});

                res.status (200).json ({success : true, data : result});
            }
            catch (err) {
                console.log (err);
                res.status (400).json ({success : false});
            }
            
            break;

        case 'DELETE':
            try {
                const result = await Hero.deleteOne ({_id : id});

                if (!result)
                    res.status (400).json ({success : false});

                res.status (200).json ({success : true, data : result});
            }
            catch (err) {
                res.status (400).json ({success : false});
            }
            
            break;
    
        default:
            res.status (400).json ({success : false});
            break;
    }

}