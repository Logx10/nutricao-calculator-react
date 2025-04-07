import '../styles/Menu.css';
import ButtonAction from './ButtonAction';
import { useState } from 'react';
import topics from '../data/topics';

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
          {openSection === index && (
            <div className="section-box">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Menu;
