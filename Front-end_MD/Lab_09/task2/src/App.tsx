import { useState } from 'react';
import { VirtualList } from './components/VirtualList';
import { RegularList } from './components/RegularList';

function App() {
  const [mode, setMode] = useState<'virtual' | 'regular' | 'none'>('none');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Lab 9.2: Virtualization for Large Lists</h1>
      
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => setMode('virtual')}
          style={{ padding: '0.5rem 1rem', background: mode === 'virtual' ? '#e0f7fa' : '#eee' }}
        >
          Render Virtual List
        </button>
        <button 
          onClick={() => setMode('regular')}
          style={{ padding: '0.5rem 1rem', background: mode === 'regular' ? '#ffe0b2' : '#eee' }}
        >
          Render Regular List
        </button>
      </div>

      {mode === 'virtual' && <VirtualList itemCount={10000} height={500} />}
      {mode === 'regular' && <RegularList itemCount={10000} />}
    </div>
  );
}

export default App;
