import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WritePage from './pages/write/WritePage';
import MainPage from './pages/main/MainPage';
import RootLayer from './pages/components/RootLayer';
import BreakingNews from './pages/breakingnews/BreakingNews';
import BreakingNewsDetail from './pages/breakingnewsDetail/BreakingNewsDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayer />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/breakingnews',
        element: <BreakingNews />
      },
      {
        path: '/breakingnews/:BreakingNewsDetailId',
        element: <BreakingNewsDetail />
      },
      {
        path: '/writebreakingnews',
        element: <WritePage />
      },
    ]


  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
