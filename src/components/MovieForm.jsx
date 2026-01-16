import { useState, useEffect } from "react";
import { useMovieStore } from "../store/movieStore";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineCheck } from "react-icons/ai"; 
import "./MovieForm.css";

export default function MovieForm() {
  const { movies, editing, setEditing, save } = useMovieStore();
  const [form, setForm] = useState({ name: "", image: "", rating: 0, genres: [], description: "", inTheaters: false });

  const allGenres = Array.from(new Set(movies.flatMap(m => m.genres || []))).sort();

  useEffect(() => {
    if (editing) {
      setForm({
        ...editing,
        genres: editing.genres || []
      });
    } else {
      setForm({ name: "", image: "", rating: 0, genres: [], description: "", inTheaters: false });
    }
  }, [editing]);

  if (!editing) return null;

  const toggleGenre = (g) => {
    setForm(prev => ({
      ...prev,
      genres: prev.genres.includes(g)
        ? prev.genres.filter(x => x !== g)
        : [...prev.genres, g]
    }));
  };

  const handleSubmit = () => {
    save({
      ...editing,
      ...form,
      rating: Number(form.rating)
    });
  };

  return (
    <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
      <DialogContent>
        <DialogTitle style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
          {editing.id ? "Edit Movie" : "Add Movie"}
        </DialogTitle>
        
        <div className="movie-form-content">
          
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              className="form-input"
              placeholder="Movie Name"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea 
              className="form-input form-textarea"
              value={form.description} 
              onChange={e => setForm({...form, description: e.target.value})}
              placeholder="Movie description..." 
              rows={3}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input 
              value={form.image} 
              onChange={e => setForm({...form, image: e.target.value})} 
              className="form-input"
              placeholder="https://..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Genres</label>
            <div className="genres-container custom-scrollbar">
              {allGenres.map(g => {
                const isSelected = form.genres.includes(g);
                return (
                  <div 
                    key={g} 
                    onClick={() => toggleGenre(g)}
                    className={`genre-item ${isSelected ? 'selected' : 'unselected'}`}
                  >
                    <span>{g}</span>
                    {isSelected && (
                      <span className="check-icon">
                        <AiOutlineCheck size={14} color="black" /> 
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div 
            className="theater-group" 
            onClick={() => setForm({...form, inTheaters: !form.inTheaters})}
          >
            <div className={`theater-toggle ${form.inTheaters ? 'active' : ''}`}>
              {form.inTheaters && <AiOutlineCheck size={14} color="white" />}
            </div>
            <span className="theater-text">
              In theaters
            </span>
          </div>

          <div className="form-actions">
             <Button 
               variant="ghost" 
               onClick={() => setEditing(null)}
               className="btn-cancel px-6"
             >
               Cancel
             </Button>
             <Button 
               onClick={handleSubmit}
               className="btn-submit px-8 py-2 rounded-md font-medium"
             >
               {editing.id ? "Update" : "Create"}
             </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
