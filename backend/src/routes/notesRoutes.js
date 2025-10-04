import express from 'express';
import { getAllNotes } from '../controllers/notesController.js';
import { createNote } from '../controllers/notesController.js';
import { updateNote } from '../controllers/notesController.js';
import { deleteNote } from '../controllers/notesController.js';
import { findNoteByTitle } from '../controllers/notesController.js';

const router = express.Router();

// GET ALL NOTES
router.get("/retrievenotes", getAllNotes); 

// CREATE A NOTE
router.post('/createnote', createNote);

// UPDATE A NOTE
router.put('/updatenote/:id', updateNote);

// DELETE A NOTE
router.delete('/deletenote/:id', deleteNote);

// FIND A NOTE BY TITLE
router.get('/findnote/:title', findNoteByTitle);

export default router;

