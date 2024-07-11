var bcrypt = require('bcryptjs');

const hashedPassword = async (password) =>{
    const res = await bcrypt.hash(password, 10)
    return res
}

const comparePassword = async (hashpasword, userpassword)=>{
    const res = await bcrypt.compare(hashpasword, userpassword)
    return res;
}

module.exports = {hashedPassword, comparePassword}