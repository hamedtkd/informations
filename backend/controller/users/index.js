const { User } = require("../../model/User");

const handleSaveUser=(req, res) => {
    const user = req?.body
    if (!user.name) return res.status(401).json({massage:'whats your name?'})
    const newUser = new User({
        theme: user.theme,
        name: user.name,
        job: user.job,
        adress: user.adress,
        tell: user.tell,
        email: user.email,
        homepage: user.homepage,
        picture: user.picture,
    })
    
    newUser.save().then(() => { 
    res.status(201).json({
        massage: 'shod '
    })})
    
}
module.exports ={handleSaveUser}