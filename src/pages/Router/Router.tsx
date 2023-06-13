import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from '../Home';
import FeedbackDetail from '../FeedbackDetail';
import { AddFeedback } from '../AddFeedback/AddFeedback';
import Roadmap from '../Roadmap';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=':id' element={<FeedbackDetail />} />
      <Route path='add' element={<AddFeedback />} />
      <Route path='roadmap' element={<Roadmap />} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

