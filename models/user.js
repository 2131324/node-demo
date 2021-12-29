const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {   
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        },
        mobile:{
            type:Number,
            required:true,
            trim:true
        },
        fname:{
            type:String,
            required:true,
            trim:true
        },
        mname:{
            type:String,
            required:true,
            trim:true
        },
        
        fav_hobbies:{
            type:String,
            required:true,
            trim:true
        },
        vehicle:{
            type:String,
            required:true,
            trim:true
        }
    }
)

module.exports = mongoose.model('User',userSchema)