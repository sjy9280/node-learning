import redis from 'redis';

const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: ''
}

const redisClient = redis.createClient(redisConfig);

redisClient.on("error", (err) => {
  console.error("Redis Error" + err)
})

redisClient.on('connect', () => {
  redisClient.set('test:name', 'John', { EX: 20 });
  console.log('Connected to Redis');
});

redisClient.connect();