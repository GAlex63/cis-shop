const { verify } = require("../helpers/token")
const User = require("../models/User")

module.exports = async function (req, res, next) {
    try {
        const token = req.cookies.token
        
        const tokenData = verify(token)
    
        const user = await User.findOne({ where: { id: tokenData.id } });
        if (!user) {
            res.send('Authenticated user is not found')
            return;
        }
    
        req.user = user;
    
        next(); 
    } catch (error) {
        return res.status(401).send({ error: 'проверь токен' });
    }
    
}
