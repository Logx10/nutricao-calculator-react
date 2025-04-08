import '../styles/Menu.css';
import ButtonAction from './ButtonAction';
import { useState } from 'react';
import topics from '../data/topics.jsx';
import '../styles/SectionBox.css';

function Menu() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  return (
    <div className="Menu">
      {topics.map((section, index) => (
        <div key={index}>
          <ButtonAction
            title={section.title}
            onClick={() => toggleSection(index)}
          />
          <div
            className={`section-box ${openSection === index ? '' : 'hidden'}`}
          >
            <div>{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
