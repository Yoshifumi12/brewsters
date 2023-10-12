const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const Lily = await prisma.user.upsert({
    where: { email: 'lily@gmail.com' },
    update: {},
    create: {
      email: 'lily@gmail.com',
      name: 'Lily Morrow',
      password: 'nmixxchangeupletsgo',
      image: 'https://i.pinimg.com/750x/eb/d3/98/ebd398d60413cc3a2b92fff6bed4a238.jpg',

    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
