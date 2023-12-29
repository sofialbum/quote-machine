import { useState } from "react";

import Card from "./components/Card";
import data from './data/data.json';

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const quotesData = [
  
   { quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill'
  },
  {
    "quote": "Strive not to be a success, but rather to be of value.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "author": "Robert Frost"
  },
]



function App() {
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };

  const [quote, setQuote] = useState(getRandomObject(quotesData));

  const handleClick = () => {
    setQuote(getRandomObject(quotesData));
  };

  return (
    <div>
      <Card onButtonClick={handleClick} quote={quote} />
      <div className="footer">
        by  
        <a href="https://github.com/sofialbum"> Sofi</a>
      </div>
    </div>
  );
}
export default App;
