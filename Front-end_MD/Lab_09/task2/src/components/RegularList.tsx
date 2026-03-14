import React, { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);
  
  return (
    <div className="regular-list" style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', height: '500px', overflowY: 'auto' }}>
      <h3>Regular List (No Virtualization)</h3>
      <div className="list-info" style={{ marginBottom: '1rem', color: '#666' }}>
        Showing {items.length} items
      </div>
      {items.map(item => (
        <div key={item.id} className="list-item" style={{ borderBottom: '1px solid #ddd', padding: '1rem', height: '130px', boxSizing: 'border-box' }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
          <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>{item.description}</p>
          <span className="category" style={{ background: '#ffe0b2', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>
            {item.category}
          </span>
        </div>
      ))}
    </div>
  );
}
