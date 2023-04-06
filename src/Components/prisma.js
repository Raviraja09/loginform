import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(email,loginTime) {
  const newUser = await prisma.user.create({
    data: {
      email,
      loginTime,
    },
  });
  return newUser;
}


