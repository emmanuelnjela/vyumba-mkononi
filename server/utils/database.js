import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const mongo_url = process.env.MONGO_URL;

// singleton class (single instance)
class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.log(err)
                console.error('Database connection error')
            })
    }
}

export default new Database()