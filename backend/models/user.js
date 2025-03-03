const userSchema = new mongoose.Schema({
    name:{
      type: String
     
    },
    email:{
      type: String,
      required: [true, "Please enter your email!"],
    },
    password:{
      type: String,
      required: [true, "Please enter your password"],
      minLength: [4, "Password should be greater than 4 characters"],
      select: false,
    },
    phoneNumber:{
      type: Number,
    }
});