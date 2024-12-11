import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function MyApp() {
  return (
    <>
      <div>myapp</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>

          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/nothing-here">nothing here</Link>
        </li>
      </nav>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>no match</h2>
      <Link to="/">Go to the home page</Link>
    </div>
  );
}
