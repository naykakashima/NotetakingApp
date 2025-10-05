import React, { useEffect } from 'react'
import NavBar from '../components/Navbar'
import { Link, redirect } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const backendURL = import.meta.env.VITE_URL;
  console.log(backendURL);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!title || !content) {
        toast.error("Please fill in all fields");
        setLoading(true);
        return;
      }

      const response = await fetch(`${backendURL}/api/notes/createnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await response.json();
      console.log(data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error("Error creating note");
    } finally {
      toast.success("Note created successfully");
      redirect("/");
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Create Note - Notes App";
  }, []);


  return (
    <div className='min-h-screen'>
      <NavBar />
      <div className='container mx-auto p-4'>
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="btn btn-ghost mb-4">
            <ArrowLeft className="size-5" />
              Back To Notes
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <div class="card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Create Note</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                  <label className="block text-sm font-medium text-gray-700 mt-4">Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Note Content"
                    className="textarea textarea-bordered w-full max-w-xs"
                    required
                  ></textarea>
                </div>
                <div class="card-actions justify-end">
                  <button type="submit" class="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
                </div>
                <div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage