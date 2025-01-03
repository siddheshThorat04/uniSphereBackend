const  mongoose =require ("mongoose");

const connectDb = async () => {
    try {
        mongoose.connect("mongodb+srv://siddheshthorat2004:LkgjYZukGYgQMLXd@cluster0.qdc0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
            .then(() => console.log('Connected to MongoDB successfully'))
            .catch(err => console.error('Failed to connect to MongoDB:', err));
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports=connectDb