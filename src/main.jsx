import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './sections/Home.jsx'
import ErrorPage from './sections/error-page.jsx'
import { QuestionsItems } from './components/Questions/QuestionsItems.jsx'
import { NextUIProvider } from '@nextui-org/react'
import {Header} from './sections/Header.jsx'
import { Results } from './sections/Results.jsx'
import { Questions } from './sections/Questions.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/questions",
        element: <Questions />,
        errorElement: <ErrorPage />
      },
      {
        path: "/results",
        element: <Results />,
        errorElement: <ErrorPage />
      },
      
    ]
  },
  {
    path: "/questions/documentation",
    element: <QuestionsItems />,
    errorElement: <ErrorPage />
  },
  {
    path: "/questions/strategy",
    element: <QuestionsItems />,
    errorElement: <ErrorPage />
  }
])

//! TODO: fix enrutado para las preguntas, deberia quedar todo en un solo componente que decide cual pregunta muestra 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
    </NextUIProvider>
  </React.StrictMode>,
)
