import server from './server';
import { prisma } from './client';

prisma.$connect().then(() => {
  console.log('Connected to SQL Database');
  server.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 8080}`);
  });
});
