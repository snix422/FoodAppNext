import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const isAdmin = (email: string): boolean => {
    const emailsAdmin = ["admin@gmail.com", "wojcik@gmail.com", "mariuszwojcik@gmail.com"];
    return emailsAdmin.includes(email);
  };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = isAdmin(email) ? 'admin' : 'user';
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role
        }
      });
      res.status(201).json({ message: 'User created', user });
    } catch (error) {
      res.status(500).json({ error: 'User already exists' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}