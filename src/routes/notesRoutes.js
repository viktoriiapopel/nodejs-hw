// src/routes/studentsRoutes.js

import { Router } from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';

const notesRoutes = Router();

notesRoutes.get('/notes', getAllNotes);
notesRoutes.get('/notes/:notetId', getNoteById);
export default notesRoutes;
