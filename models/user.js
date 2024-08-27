const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ['admin', 'employee','client'],
    },
    projects:[{
            type: Schema.Types.ObjectId,
            ref: 'Project',},
        ]
});

const User = mongoose.model('User', userSchema);

module.exports={User};
  