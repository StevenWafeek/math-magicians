import './App.css';
import Calculator from './components/Calculator';
import QuoteComponent from './QuoteComponent/quote';

export default function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
      <QuoteComponent />
    </div>

  );
}
