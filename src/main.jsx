import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import Contact, { loader as contactLoader } from "./routes/contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
