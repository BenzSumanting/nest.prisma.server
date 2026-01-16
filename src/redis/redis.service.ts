// import { createClient, RedisClientType } from 'redis';

// export const REDIS_CLIENT = 'REDIS_CLIENT';

// export const RedisProvider = {
//   provide: REDIS_CLIENT,
//   useFactory: async () => {
//     const client = createClient({
//       url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/${process.env.REDIS_DB}`,
//       socket: {
//         connectTimeout: 10000,
//       },
//     });

//     client.on('connect', () => {
//       console.log('Redis connected');
//     });

//     client.on('error', (err) => {
//       console.error('Redis error', err);
//     });

//     await client.connect();
//     return client;
//   },
// };
