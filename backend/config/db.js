const mongoose = require('mongoose')

const connectDB = async () => {
    const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
    try{
        const conn = mongoose.connect('mongodb+srv://ata:tff123@nationalteamselector.hboi4g2.mongodb.net/cs308?retryWrites=true&w=majority', connectionParams)
        console.log("MongoDB Connected".cyan.underline);
    }
    catch (error){
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

module.exports = connectDB


//npm run client, npm run server