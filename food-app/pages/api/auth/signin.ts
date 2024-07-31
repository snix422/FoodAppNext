import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const secret = process.env.JWT_SECRET || '8sdf79w8efj98sf8s7df8sd78f9wef8sd78f9wef8sdf7s9df7wef8sdf7wef7sd';
  if (!secret) {
    return res.status(500).json({ error: 'JWT secret not defined' });
  }

  const token = sign({ id: user.id, email: user.email, role: user.role }, secret, {
    expiresIn: '1h',
  });

  setCookie({ res }, 'token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 3600,
    path: '/',
  });

  return res.status(200).json({ message: 'Logged in successfully' });
}