import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import { pool } from "./db";
import db from "./db";
import { join } from 'path';

const migrationsFolder = join(process.cwd(), 'src', 'drizzle', 'migrations');

async function migration() {

    console.log("======== Migrations started ========")
    await migrate(db, { migrationsFolder })
    await pool.end()
    console.log("======== Migrations ended ========")
    process.exit(0)

}

migration().catch((err) => {
    console.error(err)
    process.exit(1)
})