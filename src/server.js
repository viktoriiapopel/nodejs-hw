import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pinoHttp from 'pino-http';

dotenv.config(); // Підвантажуємо .env

const app = express();
const PORT = process.env.PORT || 3000;

// --- Стандартні Middleware ---
app.use(cors()); // Дозволяє запити з інших доменів
app.use(express.json()); // Дає змогу читати JSON у body

// --- Middleware логування HTTP-запитів ---
const logger = pinoHttp();
app.use(logger);

// --- Маршрути ---
app.get('/', (req, res) => {
  res.send('Welcome to Note API!');
});

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

// Маршрут для тестування middleware помилки
app.get('/test-error', () => {
  throw new Error('Something went wrong');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// --- Middleware для обробки помилок ---
app.use((err, req, res, next) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
});

// --- Запуск сервера ---
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
