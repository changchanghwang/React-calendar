import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexScreen } from '../screens';

function AppRouter(props: {}) {
  // prop destruction
  // lib, style hooks
  // state, ref hooks
  // formik
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
