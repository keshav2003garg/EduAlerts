import connectToMongo from '../../database/db';
import List from '../../models/list';
connectToMongo();

export default async function newsNevents(req,res){
    try {
       if(req.method==='GET'){
            const fetchList = await List.find({tag: "newsNevents"});
            res.json(fetchList); 
        }
        else if(req.method==='POST'){
            const {list, tag} = req.body;
            const addList = new List({list: list, tag: tag})
            const addedList = await addList.save();
            res.json(addedList);
        }
    } catch (error) {
        res.status(500).end("Internal Server Error")
        console.log(error);
    }
}