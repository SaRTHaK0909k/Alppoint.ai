import React from 'react';
import styles from './Cards.module.css'; // Import your CSS module styles
import { BrainCircuit, Atom, BrainCog } from 'lucide-react';

const FlipCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-5 p-4 md:p-8">
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <BrainCircuit size={48} className="mb-4" />
            <h2 className="text-xl font-bold">MLOPS</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of MLOPS content.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <BrainCircuit size={48} className="mb-4" />
            <h2 className="text-xl font-bold">Data Engineering Devices</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of Data Engineering Devices content.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <Atom size={48} className="mb-4" />
            <h2 className="text-xl font-bold">Generative AI Development</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of Generative AI Development content.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <Atom size={48} className="mb-4" />
            <h2 className="text-xl font-bold">Computer Vision Solutions</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of Computer Vision Solutions content.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <BrainCircuit size={48} className="mb-4" />
            <h2 className="text-xl font-bold">AI Consulting</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of AI Consulting content.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flipCard} bg-orange-800 text-white p-8 md:p-12 lg:p-16 xl:p-24 rounded shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300`}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront} flex flex-col items-center justify-center`}>
            <BrainCog size={48} className="mb-4" />
            <h2 className="text-xl font-bold">NLP Solutions</h2>
          </div>
          <div className={`${styles.flipCardBack} flex flex-col items-center justify-center`}>
            <p>This is an example of NLP Solutions content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
