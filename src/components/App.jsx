import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const ArticleDetails = lazy(() => import('../pages/ArticleDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/articles/:articleId" element={<ArticleDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
