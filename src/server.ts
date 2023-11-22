import config from "./app/config";
import app from "./app";

import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('database connect')
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`);
        });
    } catch (error) {
        console.log(error)
    }
}

main()
//uAEjJYOby4i3Rrip User01

