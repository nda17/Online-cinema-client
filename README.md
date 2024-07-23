# «Online-cinema

# Fully functional online cinema.

## Implementation features:

Implemented front-end user authorization based on Redux using two tokens: Access-token and Refresh-token. When the access-token expires and the refresh-token action condition occurs, the access-token is automatically updated; if the refresh-token expires, the system is logged out. Upon successful authorization, an automatic redirect occurs from the authorization page to the page from which the transition to the authorization page was made.

- Registration of a new profile
- Sending a confirmation code to Email to activate a new user profile
- User password recovery
- Identification, authentication and authorization of user data

## The application logic is implemented in accordance with the user role: guest, registered user, administrator.

## Available functionality with the guest role:

- Limited access to content
- When manually going to the user profile page, a redirect is made to the registration/authorization page
- When manually going to the admin panel page, a redirect to the 404 page is carried out

## Available functionality with the registered user role:

- Access to content (with restrictions, depending on whether the Email is confirmed after registration)
- View and change movie rating
- Access to personal profile, editing data
- When manually going to the admin panel page, a redirect to the 404 page is carried out

## Available functionality for a user with the administrator role:

- Superuser role
- Full access to all pages and sections
- Full access to user profiles
- Access to the admin panel

## Administrator panel:

- Statistics with the ability to view the number of users, view tracking for statistics on movie popularity
- Editing/deleting user profiles and their data
- Adding/removing films, editing information about films, actors, genres, ratings

## Used stack:

- Next.js
- Typescript
- React-query
- Axios
- Redux Toolkit
- Redux-toastr
- Tailwind
- Scss
- Classnames
- React-select
- React-icons
- Draft-js
- Js-cookie
- React-hook-form
- React-loading-skeleton
- React-transition-group
- Nextjs-toploader

## Compiles and minifies for production:

- pnpm next build
- npm run build
- yarn next build

## Getting started online development server:

- pnpm next dev
- npm rud next dev
- yarn next dev
