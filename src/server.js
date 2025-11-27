import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRoutes from './routes/notesRoutes.js';

dotenv.config(); // Підвантажуємо .env

const app = express();
const PORT = process.env.PORT || 3000;

// // --- Middleware логування HTTP-запитів ---
app.use(logger);

// --- Стандартні Middleware ---
app.use(express.json()); // Дає змогу читати JSON у body
app.use(cors()); // Дозволяє запити з інших доменів

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
