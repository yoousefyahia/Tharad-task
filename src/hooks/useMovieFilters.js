import { useState, useMemo } from "react";
import Fuse from "fuse.js";

export default function useMovieFilters(movies){

  const [search,setSearch] = useState("");
  const [genre,setGenre] = useState("all");
  const [onlyTheaters,setOnly] = useState(false);
  const [page,setPage] = useState(1);

  const fuse = useMemo(
    ()=> new Fuse(movies,{ keys:["name"], threshold:0.3 }),
    [movies]
  );

  const result = search
    ? fuse.search(search).map(r=>r.item)
    : movies;

  const filtered = result.filter(m=>{
    if(genre!=="all"&&!m.genres.includes(genre)) return false;
    if(onlyTheaters&&!m.inTheaters) return false;
    return true;
  });

  const perPage=6;
  const pages=Math.ceil(filtered.length/perPage);

  const shown=filtered.slice(
    (page-1)*perPage,
    page*perPage
  );

  const allGenres=["all",...new Set(movies.flatMap(m=>m.genres))];

  return {
    search,setSearch,
    genre,setGenre,
    onlyTheaters,setOnly,
    page,setPage,
    pages,shown,allGenres
  };
}
