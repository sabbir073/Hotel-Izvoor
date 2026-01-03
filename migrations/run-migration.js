const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

async function runMigration() {
  let connection;

  try {
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    });

    console.log('Connected to database successfully!');

    // Read migration file
    const migrationSQL = fs.readFileSync(
      path.join(__dirname, 'create_work_permits_table.sql'),
      'utf8'
    );

    // Execute migration
    console.log('Running migration: create_work_permits_table.sql');
    await connection.query(migrationSQL);

    console.log('✅ Migration completed successfully!');

    // Verify table was created
    const [tables] = await connection.query("SHOW TABLES LIKE 'work_permits'");
    if (tables.length > 0) {
      console.log('✅ Table "work_permits" created successfully!');

      // Show table structure
      const [columns] = await connection.query('DESCRIBE work_permits');
      console.log('\nTable structure:');
      console.table(columns);
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('\nDatabase connection closed.');
    }
  }
}

runMigration();
