import './App.css';
import { useState } from 'react';
import Card from './Components/Card';

function App() {
  const [cards, setCards] = useState(
    [
      {
        title: 'card 1',
        color: 'pink',
        tasks: [
          'a task',
          'b task',
          'c task'
        ]
      },
      {
        title: 'card 2',
        color: 'red',
        tasks: [
          'a task',
          'b task',
          'c task'
        ]
      },
      {
        title: 'card 3',
        color: 'blue',
        tasks: [
          'a task',
          'b task',
          'c task'
        ]
      },
      {
        title: 'card 4',
        color: 'orange',
        tasks: [
          'a task',
          'b task',
          'c task'
        ]
      }
    ]
  )

  const handleClick = (e, idx) => {
    const newTask = prompt(`Enter a new task:`);

    let newCards = [...cards];

    newCards[idx].tasks.push(newTask);
    setCards(newCards);
  }

  return (
    <div className="App">
      <header className="App-header">
        RG Test
      </header>
      <section className="main">
        {cards.map((card, idx) => 
          <Card 
            key={idx}
            title={card.title}
            color={card.color}
            tasks={card.tasks}  
            handleClick={(e) => handleClick(e, idx)}
          />
        )}
      </section>
    </div>
  );
}

export default App;
