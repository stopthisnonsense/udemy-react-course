
import { Header } from './components/Header/Header';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;