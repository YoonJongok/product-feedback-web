import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from '../Home';
import FeedbackDetail from '../FeedbackDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=':id' element={<FeedbackDetail />} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

