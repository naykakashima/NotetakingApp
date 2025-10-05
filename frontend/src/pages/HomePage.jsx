import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { TrashIcon } from 'lucide-react'
import Navbar from '../components/Navbar'


const HomePage = () => {
  const backendURL = import.meta.env.VITE_URL;
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteButtonLoading, setDeleteButtonLoading] = useState(false)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        console.log(backendURL);
        const response = await axios.get(`${backendURL}/api/notes/retrievenotes`)
        console.log(response.data)
        setNotes(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching notes:', error);
        if (error.response) {
        // Server responded with a status code outside 2xx
          if (error.response.status === 429) {
          console.error('Too many requests - rate limit exceeded');
          toast.error('Too many requests - rate limit exceeded');
          } else {
          toast.error(`Server error: ${error.response.status}`);
          }
        } else if (error.request) {
          // Request was made but no response received
          toast.error('Network error: Unable to reach backend');
        } else {
          // Something else happened
          toast.error('An unexpected error occurred');
        }
      }
      finally {
              setLoading(false)
              setDeleteButtonLoading(false)
            }
      }

    fetchNotes()
  }, [backendURL])

  const deleteNoteId = async (id) => {
    try {
      await axios.delete(`${backendURL}/api/notes/deletenote/${id}`);
      setNotes(notes.filter(note => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Error deleting note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl p-4">
        {loading ? (
          <div>Loading notes...</div>
        ) : (
          <>
            {notes.length === 0 ? (
              <div>No notes available.</div>
            ) : (
              <ul className="space-y-4">
                {notes.map((note) => (
                  <li key={note._id} className="border p-4 rounded shadow">
                      <div className = "flex justify-between items-center mb-2">
                      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                      <p>{note.content}</p>
                      <div class="card-actions justify-end">
                        <button type="delete" class="btn btn-primary" disabled={deleteButtonLoading} onClick={() => deleteNoteId(note._id)}>
                          {loading ? 'Deleting...' : 'Delete Note'}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    </div>
  )
}


export default HomePage