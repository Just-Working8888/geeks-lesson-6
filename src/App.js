import './App.css';
import Card from './components/Card';
import { createContext, useContext, useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header'
import Modal from './components/Modal';

export const ThemeContext = createContext()
export const ThemeToggleContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const togleTheme = () => {
    setIsDark(prev => !prev)
  }
  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeToggleContext.Provider value={togleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('USeTheme must be used with a theme provider')
  }
  return context
}
export function useThemeToggle() {
  const context = useContext(ThemeToggleContext);
  if (context === undefined) {
    throw new Error('useThemeToggle must be used within a ThemeProvider');
  }
  return context;
}

function App() {
  const [state, setState] = useState('')
  const [sort, setSort] = useState('asc')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([
    {
      "title": "Investment",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "img": "https://loremflickr.com/640/480/nature",
      "price": 98,
      "oldPrice": 10,
      "id": "1"
    },
    {
      "title": "Unions",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "img": "https://loremflickr.com/640/480/nature",
      "price": 29,
      "oldPrice": 52,
      "id": "2"
    },
    {
      "title": "Hybrid",
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "img": "https://loremflickr.com/640/480/nature",
      "price": 41,
      "oldPrice": 7,
      "id": "3"
    },
  ])

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


  if (loading) {
    return <div>loading....</div>
  }
  return (
    <ThemeProvider>
      <div>
        <Header data={cart} />
        <input onChange={(e) => setState(e.target.value)} />

        <button onClick={() => setSort('asc')}>sort by top</button>
        <button onClick={() => setSort('desc')}> sort by bot</button>
        <button onClick={() => setModal(!modal)}>open</button>
        {/* {modal && <Form setState={setModal}/>} */}
        <Modal state={modal} setState={setModal}>
          <Form />
        </Modal>
        <div className="App">
          {
            data.map((item) =>
              <Card
                key={item.id}
                props={item}
                cart={cart}
                setCart={setCart}
              />)
          }
        </div>
      </div>
    </ThemeProvider>
  );
}


export default App;
