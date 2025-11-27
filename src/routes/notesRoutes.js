// src/routes/studentsRoutes.js

import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const notesRoutes = Router();

notesRoutes.get('/notes', getAllNotes);
notesRoutes.get('/notes/:notetId', getNoteById);
notesRoutes.post('/notes', createNote);
notesRoutes.delete('/notes/:notetId', deleteNote);
notesRoutes.patch('/notes/:notetId', updateNote);
export default notesRoutes;
