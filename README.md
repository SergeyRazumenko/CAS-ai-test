# Multi-Step Registration Form

A responsive multi-step registration form built with React and TypeScript.
The project demonstrates form state management, step-based validation, and clean UI implementation based on a provided mockup.

## Live Demo

[https://multi-step-registration-form-lemon.vercel.app/]

## Tech Stack

- React
- TypeScript
- Vite
- SCSS
- Bootstrap 5

## Features

- 3-step registration form with step indicator
- Step navigation (Next / Back)
- Step-based client-side validation
- Validation only for required fields (\*)
- Email format validation
- Inline error messages
- Form submission with JSON output (console.log)
- Form reset after successful submission
- Responsive layout (desktop and mobile)
- Smooth transitions between steps

## How to Run Locally

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

## Time Spent

Approximately: **7 hours**

## Development Setup

- IDE: VS Code
- Extensions:
  - ES7+ React Snippets
  - Prettier
  - ESLint

## AI Tools Used

- ChatGPT — used for:
  - architecture planning
  - code review and improvements

- Cursor — used for:
  - project scaffolding
  - generating initial component structure

All generated code was reviewed and adjusted manually.

## Notes

- The project follows a clean separation of concerns:
  - logic (hooks)
  - validation (utils)
  - UI (components)

- No external form libraries were used (Formik, React Hook Form, etc.)
- Bootstrap was used for layout and UI consistency
