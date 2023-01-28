import React from 'react';

export default function Header({ filters, filter, onfilterChange }) {
  return (
    <header >
      <ul>
        {
          filters.map((value, index) => (
            <li key={index}>
              <button onClick={() => onfilterChange(value)}>{value}</button>
            </li>
          ))
        }
      </ul>
    </header>
  );
}