import connectToMongo from '../../database/db';
import List from '../../models/list';
connectToMongo();

export default async function deleteList(req,res){
    try {
        if(req.query.id!="undefined"){
            await List.findByIdAndDelete(req.query.id);
            res.json({success: true});
        }
        else{
            res.json({success: false});
        }
    } catch (error) {
        res.status(500).end("Internal Server Error")
    }
}