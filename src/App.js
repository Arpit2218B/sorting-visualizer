import { useEffect, useState } from 'react';
import './App.css';
import Visualizer from './components/Sorter';

let i = 0;
let j = 0;

const App = () => {
  const [array, setArray] = useState('');
  const [arrayInp, setArrayInp] = useState([]);
  const [sorte, setSort] = useState(false);

  const handleClick = () => {
    setArrayInp(array.split(' ').map(Number));
  }

  const handleSort = () => {
    setSort(!sorte);
  }

  const handleReset = () => {
    setSort(false);
    setArrayInp(array.split(' ').map(Number));
    i = 0;
  }

  useEffect(() => {
    if(sorte && i < arrayInp.length) {
      let timer = setInterval(() => {
        let j = i + 1;
        let min = arrayInp[i];
        let idx = i;
        while(j < arrayInp.length) {
          if(arrayInp[j] < min) {
            min = arrayInp[j];
            idx = j;
          }
          j++;
        }

        let t = [...arrayInp];
        [t[i], t[idx]] = [t[idx], t[i]];
        i = i + 1;
        if(i === arrayInp.length) {
          setSort(false);
        }
        setArrayInp(t);
      }, 2000);
      
      return () => clearInterval(timer);
    }
  }, [sorte, arrayInp]);

  return (
    <div className="App">
      <h1>Sorting Visualizer - Selection Sort</h1>
      <input placeholder="Enter numbers from 10 to 100 with space in between" className="input" value={array} onChange={e => setArray(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleSort}>{sorte ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      <Visualizer arrayInput={arrayInp} currentIndex={i} />
    </div>
  );
}

export default App;
