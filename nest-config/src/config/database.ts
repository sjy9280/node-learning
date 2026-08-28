 export default () => ({
   port: 8001,
   database: {
    host: 'localhost',
    port: process.env.DB_PORT
   },
 });