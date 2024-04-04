import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] = useState('')
  const [sort, setSort] = useState('asc')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL('https://63d304794abff88834170d21.mockapi.io/items');
        url.searchParams.append('title', state);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state]);




  // const sortBy = {
  //   asc: (a, b) => a.price - b.price,
  //   desc: (a, b) => b.price - a.price
  // }
  // const sortedData = data.sort(sortBy[sort])

  if (loading) {
    return <div>loading....</div>
  }
  return (
    <div>
      <input onChange={(e) => setState(e.target.value)} />

      <button onClick={() => setSort('asc')}>sort by top</button>
      <button onClick={() => setSort('desc')}> sort by bot</button>
      <div className="App">
        {
          data.map((item) =>
            <Card
              key={item.id}
              image={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />)
        }
      </div>
    </div>
  );
}


export default App;
