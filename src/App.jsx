import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  BookmarkPage,
  DetailPage,
  LandingPage,
  LoginPage,
  NewJourneyPage,
  ProfilePage,
  RegisterPage,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details/:id" element={<DetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
      <Route path="/new" element={<NewJourneyPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
