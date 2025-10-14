import express from "express"
import pkg from "pg"
const { Pool } = pkg

const app = express()

app.use(express.json())

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "secret",
    port: 5432
})

app.get("/api/test", async (rec,res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows)
})

app.listen(3001, () => console.log("Server running on port 3001"));
