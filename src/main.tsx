import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./ui/components"
import { Cards, Collection, Events, Friends, Home, NotFound, Play } from "./ui/screens"

import "./styles/globals.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/events",
    element: (
      <Layout>
        <Events />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/friends",
    element: (
      <Layout>
        <Friends />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/play",
    element: (
      <Layout>
        <Play />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/cards",
    element: (
      <Layout>
        <Cards />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/collection",
    element: (
      <Layout>
        <Collection />
      </Layout>
    ),
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
