import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'wanjiku.michael20@students.dkut.ac.ke' },
    update: {},
    create: {
      email: 'wanjiku.michael20@students.dkut.ac.ke',
      password: 'E021-01-0939/2020',
    },
  });
  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });