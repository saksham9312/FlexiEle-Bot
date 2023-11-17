module.exports.home = async function(req,res){
    return res.status(200).json({message: "Server up Successfully!"})
}