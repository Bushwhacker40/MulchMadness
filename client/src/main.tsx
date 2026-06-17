import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router';
import {router} from "./types/Routes.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
