const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log('Mongodb connected' + conn.connection.host)
    } catch(ex) {
        console.log('--1--')
        console.log(ex)
        process.exit(1)
    }
}

module.exports = connectDB