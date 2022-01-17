import React from 'react';
import RouteManager from './RouteManager';
import { AppProvider } from './context/app.context';

function App() {
  return (
    <AppProvider>
      <RouteManager />
    </AppProvider>
  );
}

export default App;
