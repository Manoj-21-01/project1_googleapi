import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { noteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('', newNoteValidator, noteController.newNote);
// login function
router.post('/:_id',noteController.getNote);

router.get('',noteController.getAllNotes);


// router.post('', noteController.loginNote);

//route to delete a note
router.delete('/:noteId', noteController.deleteNote);

//route to update a note
router.put('/:noteId', noteController.updateNote);

export default router;