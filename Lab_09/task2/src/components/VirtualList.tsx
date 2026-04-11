import React, { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { Item, generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div className="virtual-list-container" style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>Virtualized List (react-window)</h3>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }}
      />
      <div className="list-info" style={{ marginBottom: '1rem', color: '#666' }}>
        Showing {filteredItems.length} of {items.length} items
      </div>
      
      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={130}
        width="100%"
        style={{ border: '1px solid #eee' }}
      >
        {({ index, style }) => {
          const item = filteredItems[index];
          return (
            <div style={{ ...style, borderBottom: '1px solid #ddd', padding: '1rem', boxSizing: 'border-box' }} className="list-item">
              <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
              <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>{item.description}</p>
              <span className="category" style={{ background: '#e0f7fa', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                {item.category}
              </span>
            </div>
          );
        }}
      </List>
    </div>
  );
}
