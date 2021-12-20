import fs from 'fs';
import path from 'path';

export default async function download(req, res) {
    try {
        const {id} = req.query;
        console.log(id);
        const filePath = path.resolve('.', `public/docs/${id}.pdf`)
        const data = fs.createReadStream(filePath);
        data.pipe(res);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}