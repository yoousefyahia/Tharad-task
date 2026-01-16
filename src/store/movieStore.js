import { create } from "zustand";
import { moviesData } from "../data/movies";

export const useMovieStore = create((set) => ({

  movies: moviesData,
  editing: null,

  save: (movie) =>
    set((s) => {
      const exist = s.movies.find(m => m.id === movie.id);

      return exist
        ? {
            movies: s.movies.map(m =>
              m.id === movie.id ? movie : m
            ),
            editing: null
          }
        : {
            movies: [...s.movies,{...movie,id:Date.now()}],
            editing: null
          };
    }),

  remove: (id) =>
    set(s => ({
      movies: s.movies.filter(m => m.id !== id)
    })),

  rate: (movie, rating) =>
    set(s => ({
      movies: s.movies.map(m =>
        m.id === movie.id ? {...m,rating} : m
      )
    })),

  removeAllRatings: () =>
    set(s => ({
      movies: s.movies.map(m => ({...m, rating: 0}))
    })),

  setEditing: (m) => set({ editing:m })
}));
