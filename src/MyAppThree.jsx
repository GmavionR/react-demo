import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "hello data router" }),
    Component() {
      let data = useLoaderData();
      return <h1>{data.message}</h1>;
    },
  },
]);

export default function MyAppThree() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>loading...</p>}
    ></RouterProvider>
  );
}
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
