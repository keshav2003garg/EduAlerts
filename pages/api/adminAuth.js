export default async function adminAuth(req, res){
    const {username, password} = req.body;
    if(username=='admin' && password=="admin"){
        res.json({auth: true});
        return;
    }
    res.json({auth: false})
}