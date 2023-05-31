import React, { useState, useEffect } from 'react';
import './quote.css';

export default function QuoteComponent() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const category = 'happiness';
    const apiKey = 'ymCbBE03nErvlKzbVx1/bQ==cOiHM9eT0XjlnLNn';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="quote">
      <h2>{quote.quote}</h2>
      <p>{quote.author}</p>
    </div>
  );
}
