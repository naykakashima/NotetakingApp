import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error retrieving notes from getAllNotes API:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function createNote(req, res) {
    try{
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note from createNote API:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateNote(req, res) {
    try{
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedNote = await Note
            .findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error updating note from updateNote API:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteNote(req, res) {
    try{
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting note from deleteNote API:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function findNoteByTitle(req, res) {
    try {
        const { title } = req.params;
        const note = await Note.findOne({ title });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error('Error finding note by title from findNoteByTitle API:', error);
        res.status(500).json({ message: 'Server error' });
    } 
}


