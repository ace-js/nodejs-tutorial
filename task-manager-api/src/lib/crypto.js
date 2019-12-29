 const bcrypt = require('bcryptjs')

 const hashingPassword = async (password) => {
     return await bcrypt.hash(password, 8)
 }

 const isPasswordMatch = async (password, hashedPassword) => {
     return await bcrypt.compare(password, hashedPassword)
 }

 module.exports = {
    hashingPassword,
    isPasswordMatch
 }