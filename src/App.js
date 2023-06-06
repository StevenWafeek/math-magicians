// import './App.css';
// import Calculator from './components/Calculator';
// import QuoteComponent from './QuoteComponent/quote';

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Math-magicians</h1>
//       <Calculator />
//       <QuoteComponent />
//     </div>

//   );
// }
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './home/navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
