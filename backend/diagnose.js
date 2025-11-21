require("dotenv").config();
console.log("🔍 === DATABASE CONNECTION DIAGNOSIS ===\\n");
console.log("1. ENVIRONMENT VARIABLES:");
console.log("   DB_NAME:", process.env.DB_NAME);
console.log("   DB_USER:", process.env.DB_USER);
console.log("   DB_HOST:", process.env.DB_HOST);
console.log("   NODE_ENV:", process.env.NODE_ENV);
console.log("");

const { Client } = require("pg");
async function testConnections() {
  console.log("2. TESTING school_management_db CONNECTION:");
  const client1 = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  try {
    await client1.connect();
    console.log("   ✅ SUCCESS: Connected to school_management_db");
    await client1.end();
  } catch (err1) {
    console.log("   ❌ FAILED: Cannot connect to school_management_db");
    console.log("   Error:", err1.message);
    
    console.log("\\n3. TESTING DEFAULT POSTGRES DATABASE:");
    const client2 = new Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: "postgres",
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
    try {
      await client2.connect();
      console.log("   ✅ SUCCESS: Connected to default postgres database");
      
      const dbCheck = await client2.query(
        "SELECT datname FROM pg_database WHERE datname = $1",
        [process.env.DB_NAME]
      );
      console.log("   Database exists:", dbCheck.rows.length > 0 ? "YES" : "NO");
      await client2.end();
    } catch (err2) {
      console.log("   ❌ FAILED: Cannot connect to default postgres database");
      console.log("   Error:", err2.message);
    }
  }
}
testConnections();
