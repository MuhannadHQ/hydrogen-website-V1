// Accordion.js
import { Arrow } from "assets/icons/Arrow"
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="border-b text-start">
      <div
        className="p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-primary">{title}</h3>
          <span className={`transform ${isOpen ? 'rotate-90' : '-rotate-90'} transition-transform`}><Arrow color="#000"/></span>
        </div>
      </div>
      <Transition in={isOpen} timeout={300} unmountOnExit>
        {state => (
          <div
            className={`px-4 bg-white overflow-hidden transition-height duration-200 transform-gpu ${
              state === 'entered' ? 'h-auto py-4' : 'h-0'
            }`}
          >
            {content}
          </div>
        )}
      </Transition>
    </section>
  );
};

export default Accordion;
