# 404 Not Found Page - Usage Guide

## Overview
The 404 Error Page component (`NotFound.jsx`) is ready to use but currently not integrated with routing since your app uses hash-based navigation (#home, #projects, etc.) instead of React Router.

## Current Setup
Your website is a **Single Page Application (SPA)** without routing, so the 404 page won't be triggered in the current setup.

## How to Use the 404 Page

### Option 1: Add React Router (Recommended for Multi-Page Sites)

If you plan to add multiple pages in the future:

1. **Install React Router:**
   ```bash
   npm install react-router-dom
   ```

2. **Update `main.jsx`:**
   ```jsx
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   import { BrowserRouter } from 'react-router-dom'
   import './index.css'
   import App from './App.jsx'

   createRoot(document.getElementById('root')).render(
     <StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </StrictMode>,
   )
   ```

3. **Update `App.jsx`:**
   ```jsx
   import { Routes, Route } from 'react-router-dom';
   import NotFound from './components/NotFound';

   // Inside your App component's return:
   <Routes>
     <Route path="/" element={<YourMainContent />} />
     <Route path="*" element={<NotFound />} />
   </Routes>
   ```

### Option 2: Keep Current Setup (Single Page)

Since your site is a single-page portfolio, you can:

1. **Use it for demonstration purposes** - Show it in your portfolio as an example of your UI/UX skills
2. **Manually navigate to it** - Create a route like `/404` if you add routing later
3. **Keep it ready** - Have it available for when you expand your site

## Testing the 404 Page

To test the 404 page in your current setup:

1. Temporarily replace your App.jsx return with:
   ```jsx
   return <NotFound />;
   ```

2. View in browser, then revert changes

## Features Included

✅ Glitch effect on the middle "0"
✅ Animated floating background shapes
✅ Gradient text styling
✅ Call-to-action buttons (Home & Projects)
✅ Fully responsive design
✅ Smooth animations

## File Locations

- Component: `src/components/NotFound.jsx`
- Styles: `src/components/NotFound.css`
