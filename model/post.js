const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
    ,
    imageUrl:{// Serve Statically
        type:String,
        required:true,
    },
    creator:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    }
},
{timestamps:true}
)
module.exports=mongoose.model('Post',postSchema);