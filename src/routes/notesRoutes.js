import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
  createNoteSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const notesRoutes = Router();

notesRoutes.use('/notes', authenticate);

notesRoutes.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
notesRoutes.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRoutes.post('/notes', celebrate(createNoteSchema), createNote);
notesRoutes.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
notesRoutes.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
export default notesRoutes;
