import mongoose,{Schema,ObjectId} from "mongoose";
import isEmail from 'validator/lib/isEmail.js';

export default mongoose.model('User', 
    new mongoose.Schema({
        id: {type: ObjectId},
        name: {type: String, 
            required: true,
            validate:{
                validator: (value)=>value.length>2,
                message: "Name must be at least 3 characters long"
            }
        },
        email: {type: String, 
            required: true,
            validate:{
                validator: isEmail,
                message: "Email must contain @"
            }
        },
        password:{
            type: String,
            required: true,
        },
        phoneNumber:{
            type:String,
            required:true,
            validate:{
                validator:(value)=>value.length===10,
                message:"Phone number must be 10 digits"
            }
        },
        address:{
            type:String,
            required:false
        }
    }
        
))
