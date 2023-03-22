const {
    User
} = require("../../model/User");

let Isdata = null
const handleSaveUser = async (req, res) => {



    const user = req ?.body
    const {
        _id,
        name,
        adress,
        tell,
        job,
        homepage,
        picture,
        email,
        theme


    } = req ?.body


    if (!user.name) return res.status(401).json({
        massage: 'whats your name?'
    })
    const isUser = await User.find({})
    
    if (isUser==false) {
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
        // (err) => {
        //     console.log(err);
        // }
        newUser.save()
    
        res.status(201).json({
            massage: 'user jadid sakhtim '
        })
     
    }
    else{   
        const updated = await User.findByIdAndUpdate({
        _id
    }, {
        name,
        adress,
        tell,
        job,
        homepage,
        picture,
        email,
        theme
    })

    return res.status(200).json({
        massage: 'updated'
    })
  
}

}
// }
const handleSendData = (req, res) => {
    const isUser = User.find({})
    isUser.exec(function (err, data) {
        if (err) throw err;
        res.status(201).json({
            massage: 'user ghblio gerefti',
            data
        })
    })


}

module.exports = {
    handleSaveUser,
    handleSendData
}