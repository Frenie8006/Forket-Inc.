import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-28 rounded-full bg-sky-900 px-4 py-2 text-sm text-white transition-all duration-300 placeholder:text-stone-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
