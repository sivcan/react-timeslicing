import React from 'react';

const Input = ({value, onChange}) => (
  <section>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search"
    />
    {value && <p>Expensive calculation for search term: {value}</p> }
  </section>
);
export default Input;
