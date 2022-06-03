import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import FxCardList from './FxCardList';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFilter = searchParams.get("currency") || ""
  const [filter, setFilter] = useState(queryFilter.toUpperCase())

  useEffect(() => {
    filter === ""
      ? setSearchParams()
      : setSearchParams({ currency: filter })
  }, [filter])

  return (
    <div>
      <Header filter={filter} onChange={setFilter} />
      <FxCardList filter={filter} />
    </div>
  );
}

export default App;
