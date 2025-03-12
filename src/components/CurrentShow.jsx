import React, { useState, useEffect } from 'react';
import "../styles/CurrentShow.css";

const CurrentShow = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="current-show" className="current-show">
      <div className="current-show-container">
        <div className="current-show-poster">
          <img src="Z-plagat.jpg" alt="Plagát predstavenia" className="responsive-poster" />
        </div>
        <div className="current-show-info">
          <h2>Aktuálne pripravujeme:</h2>
          <table>
            <tbody>
              <tr>
                <th>Názov:</th>
                <td>Železník</td>
              </tr>
              <tr>
                <th>Dátum:</th>
                <td>14.07.2025 - 20.07.2025</td>
              </tr>
              <tr>
                <th>Miesto:</th>
                <td>Ľubovniansky Hrad</td>
              </tr>
              <tr>
                <th>Čas:</th>
                <td>Každý deň o 10:00, 12:00, 14:00, 16:00 (v stredu posledné vystúpenie je o 17:00)</td>
              </tr>
              <tr>
                <th>Opis:</th>
                <td>
                  <div 
                    className={`current-show-description ${isExpanded ? 'expanded' : 'collapsed'}`} 
                  >
                    <p>
                      Profesor Physicus vynájde mechanického človeka, ktorému dá meno Železník. 
                      Železník je silný, vytrvalý a šikovný a pán veľkopodnikateľ, ktorý si robota 
                      objednal, ho chce využiť na prácu v továrni, aby mohol prepustiť ostatných zamestnancov. 
                      Železníkovi sa však táto úloha nepáči, pretože by sa chcel stať človekom, na to však potrebuje srdce. 
                      Počas plesu, ktorý usporiada veľkopodnikateľ na oslavu zásnub svojej dcéry Flóry, sa nechá oklamať 
                      zlodejskou bandou, ktorá mu prisľúbi zlaté srdce a začne s nimi lúpiť. 
                      Jeho púť za srdcom sa však u zlodejov nekončí. Po tom, ako oslobodí unesenú Flóru, 
                      dostane sa do galérie, kde stretá Monu Lisu, Nefertiti, Fridu Kalo, Venušu a Apolóna i ďalšie umelecké diela. 
                      Ani tam však srdce nenájde. Až láska mu dá to, čo hľadá.
                    </p>
                  </div>
                  {isMobile && (
                    <button className="show-more-button" onClick={toggleDescription}>
                      {isExpanded ? 'Zobraziť menej' : 'Zobraziť viac'}
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CurrentShow;
