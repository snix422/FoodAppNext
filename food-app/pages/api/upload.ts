import { IncomingForm } from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'public/uploads'),
    keepExtensions: true, 
    maxFileSize: 10 * 1024 * 1024, 
  });

  form.parse(req, (err:any, fields:any, files:any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const file = files.file[0];
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    
    const filePath = `/uploads/${path.basename(file.filepath)}`;

    res.status(200).json({ imageUrl: filePath });
  });
};

export default handler;
