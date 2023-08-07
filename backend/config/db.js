const mongoose = require('mongoose')

const connectDB = async () => {
    const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
    try{
        const conn = mongoose.connect(HERE COMES THE CONNECTION STRING OF THE DATABASE, connectionParams)
        console.log("MongoDB Connected".cyan.underline);
    }
    catch (error){
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

module.exports = connectDB
