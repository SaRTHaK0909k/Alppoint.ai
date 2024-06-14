import React from 'react';
import styles from './Cards.module.css';
import { BrainCircuit,Atom,BrainCog } from 'lucide-react';
const FlipCards = () => {
  const cards = [
    {
      frontImage: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      
      title: 'MLOPS',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    },
    {
      frontImage: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      title: 'Data Engineering Services',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    },
    {
      frontImage: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      title: 'Generative AI Development',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    },
    {
      frontImage: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      title: 'NLP Solutions',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    },
    {
      frontImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      title: 'AI Consulting',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    },
    {
      frontImage: 'https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      title: 'NLP Solutions',
      backTitle: 'Angular',
      backDescription: 'Good tools make application development quicker and easier to maintain than if you did everything by hand.'
    }
  ];

  return (
    <div className='mt-12'>
      
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.flip}>
            <div className={`{styles.front}`} >
              <h1 className={styles.textShadow}>{card.title}</h1>
            </div>
            <div className={styles.back}>
              <h2>{card.backTitle}</h2>
              <p>{card.backDescription}</p>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

export default FlipCards;
