import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Portfolio from '@/pages/Projects';
import AILab from '@/pages/AILab';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'about',        element: <About /> },
      { path: 'portfolio',    element: <Portfolio /> },
      { path: 'ai-lab',       element: <AILab /> },
      { path: 'blog',         element: <Blog /> },
      { path: 'contact',      element: <Contact /> },
      { path: '*',            element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
