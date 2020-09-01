const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');


  var userSchema = new mongooser.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true

    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true

    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true,
    },

    encry_password:{
        type: String,
        required: true,
    },
    salt: String,
    role:{
        type: Number,
        default: 0
    },
    purchases:{
        type: Array,
        default: []
    }
  });


  userSchema.virtual("password")
  .set(function(password){
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function(){
      return this._password;
  })

userSchema.method = {
    authenticate:
    function (plainpassword){
        return this.securePassword(plainpassword) === this.encry_password;
    },
    
    securePassword: 
    function (plainpassword){
        if(!password) return "";
        try {
            return crypto.createHmac('sha256', this.slat)
                   .update(plainpassword)
                   .digest('hex');

        } catch (err) {
            return "";
        }
    
    
    }
}



  modeule.exports = mongoose.model("User",userSchema)