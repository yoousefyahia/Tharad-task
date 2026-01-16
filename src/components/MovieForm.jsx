import { useEffect } from "react";
import { useMovieStore } from "../store/movieStore";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./MovieForm.css";

const movieSchema = z.object({
  name: z.string().min(1, { message: "Movie name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image: z.string().url({ message: "Must be a valid URL" }).or(z.literal('')),
  genres: z.array(z.string()).min(1, { message: "Select at least one genre" }),
  rating: z.number().optional(),
  inTheaters: z.boolean(),
});

export default function MovieForm() {
  const { movies, editing, setEditing, save } = useMovieStore();

  const allGenres = Array.from(
    new Set(movies.flatMap(m => m.genres || []))
  ).sort();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      name: "",
      image: "",
      rating: 0,
      genres: [],
      description: "",
      inTheaters: false,
    },
  });

  useEffect(() => {
    if (editing) {
      reset(editing);
    } else {
      reset({
        name: "",
        image: "",
        rating: 0,
        genres: [],
        description: "",
        inTheaters: false,
      });
    }
  }, [editing, reset]);

  if (!editing) return null;

  const onSubmit = (data) => {
    save({
      ...editing,
      ...data,
      rating: Number(data.rating),
    });
  };

  return (
    <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
      <DialogContent>
        <DialogTitle>
          {editing.id ? "Edit Movie" : "Add Movie"}
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="movie-form-content">

          {/* Name */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <input className="form-input" {...register("name")} />
            {errors.name && (
              <span className="form-error">{errors.name.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input form-textarea"
              {...register("description")}
            />
            {errors.description && (
              <span className="form-error">{errors.description.message}</span>
            )}
          </div>

          {/* Image */}
          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input className="form-input" {...register("image")} />
            {errors.image && (
              <span className="form-error">{errors.image.message}</span>
            )}
          </div>

          {/* Genres */}
          <div className="form-group">
            <label className="form-label">Genres</label>

            <div className="genres-container">
              {allGenres.map((g) => (
                <label key={g}>
                  <input
                    type="checkbox"
                    value={g}
                    {...register("genres")}
                  />
                  {g}
                </label>
              ))}
            </div>

            {errors.genres && (
              <span className="form-error">{errors.genres.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="theater-label">
              <input
                type="checkbox"
                {...register("inTheaters")}
              />
              In theaters
            </label>
          </div>

          <div className="form-actions">
            <Button
              type="button"
              className="btn-cancel"
              onClick={() => setEditing(null)}
            >
              Cancel
            </Button>

            <Button type="submit" className="btn-submit">
              {editing.id ? "Update" : "Create"}
            </Button>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
}
