import pg from 'pg';

const dsconfig = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: ''
}

// 数据库连接池
const pool = new pg.Pool(dsconfig);

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error acquiring client', err);
    return;
  }
  console.log('Connected to database');

  const sql = 'SELECT * from detail';
  client.query(sql, (err, result) => {
    done();
    if (err) {
      console.error('Error executing query', err);
      return;
    }
    console.log(result.rows);
  });
})