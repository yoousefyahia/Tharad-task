# Movie Management Module

A **React module** to manage movies, including adding, editing, filtering, rating, and deleting movies. Built with **React**, **Framer Motion**, **Zustand store**, and **react-icons**.

## Features

- **Add / Edit Movie**: Fill in name, description, image URL, rating, genres, and "In Theaters" status.
- **Delete Movie**: Delete a movie with a confirmation dialog.
- **Filter Movies**: Search by name, select genre, and toggle "In Theaters".
- **Rate Movies**: Click on stars to set a rating (1–5).
- **Pagination**: Navigate through movies when there are many.
- **Animations**: Smooth appearance and hover effects with Framer Motion.

## Components

- `MovieModule`: Main module, combines all sub-components.
- `MovieForm: Form to add/edit a movie, with validation using react-hook-form and Zod- `MovieCard`: Card displaying movie info, rating, and actions.
- `FiltersBar`: Filter and search bar for movies.
- `MoviePagination`: Pagination component for movie list.
- `DeleteDialog`: Confirmation dialog for deleting movies.
Usage

View Movies: Movies are displayed in a grid.

Filter: Use the search input or genre dropdown to filter movies.

Add / Edit Movie: Click "Add Movie" or the edit icon on a movie card.

Delete Movie: Click the delete icon and confirm in the dialog.

Rate Movie: Click on the stars to rate a movie (updates live).

Tech Stack

React – UI library

Framer Motion – Animations

react-icons – Icons

Zustand – State management

CSS Modules – Component styling
