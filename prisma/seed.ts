const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const Lily = await prisma.user.upsert({
    where: { email: 'Lily@prisma.io' },
    update: {},
    create: {
      email: 'Lily@prisma.io',
      name: 'Lily Morrow',
      password: 'nmixxchangeupletsgo'
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
