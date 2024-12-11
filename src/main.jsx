import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes";
import MyApp from "./MyApp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
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
            errorElement: <div>oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

createRoot(document.getElementById("rootTwo")).render(
  <StrictMode>
    <BrowserRouter>
      <MyApp></MyApp>
    </BrowserRouter>
  </StrictMode>
);

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }}></Component>
    );
  }
  return ComponentWithRouterProp;
}
