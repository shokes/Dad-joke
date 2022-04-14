import { useState } from 'react';
import axios from 'axios';
import dad from './images/dad-joke-image.jpg';

const url = 'https://icanhazdadjoke.com/';
const Joke = function () {
  const [joke, setJoke] = useState('Click button for random dad joke');
  const fetchJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <main className='container'>
      <img src={dad} alt='a dad' />
      <article className='joke'>{joke}</article>

      <div>
        <button className='btn' onClick={() => fetchJoke()}>
          Random joke
        </button>
      </div>
    </main>
  );
};

export default Joke;
