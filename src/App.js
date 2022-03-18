import React from 'react';
import RouteManager from './RouteManager';
import { AppProvider } from './context/app.context';

// TODO: fix spacing while on larger screens (second element has margin bottom ShapeSlide:53)
function App() {
  return (
    <AppProvider>
      <RouteManager />
    </AppProvider>
  );
}

export default App;
