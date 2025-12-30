import React from 'react';
import { Routes, Route } from 'react-router';
import { Question, Results } from '../pages';
import type { AnswerBase } from '../types/types';

import App from '../App';

export const AppRoutes = () => {
  const [allSelectedAnswers, setAllSelectedAnswers] = React.useState<AnswerBase[]>([]);
  const navigationRoutes = [
    { path: '/question/:id', element: <Question allSelectedAnswers={allSelectedAnswers} setAllSelectedAnswers={setAllSelectedAnswers} /> },
    { path: '/results', element: <Results selectedAnswers={allSelectedAnswers} /> },

    { path: '*', element: <App /> },
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
