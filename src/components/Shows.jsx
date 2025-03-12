import React from 'react';
import "../styles/Shows.css";
import { Link } from "react-router-dom";

const showsData = [
  {
    id: 18,
    title: "Tajomstvo Veľkého Knihovníka",
    date: "2024",
    image: "TVK-265.jpg",
    description: "Anička a Sára nerady čítajú, radšej sa venujú svojim mobilom, a tak sú dosť otrávené, keď musia navštíviť knižnicu, aby si tam vypožičali diela povinnej literatúry. Ich odpor ku knihám spôsobí, že do knižnice privolajú zlých knihožrútov, ktorí spôsobia chaos medzi knihami a unesú pani knihovníčku. Sára s Aničkou sa ju teda rozhodnú zachrániť. Po ceste prechádzajú tromi krajinami. V prvej sa poplietli známe rozprávky -babička si vymenila miesto s Červenou čiapočkou, Zlej kráľovnej nefunguje zrkadlo, Janko Hraško narástol, Perinbaba nedokáže ovládať počasie, vodník sa takmer utopil a čert sa chce umývať. Dievčatá zisťujú, že to spôsobili ony. Vyriešiť to môže len Veľký knihovník žijúci v Knihohrade. Druhá krajina, ktorú dievčatá a diváci navštívia, je celá „princeznovská“. Vďaka zásahu knihožrútov sa tu stretli všetky rozprávkové princezné (Snehulienka, Popoluška, Šípková Ruženka, Pyšná princezná...). Princezien je veľa, ale princ iba jeden. Aj túto kalamitu musia Anička so Sárou dať doporiadku. V poslednej krajine sa zas stretli postavy z kníh pre mládež (Sherlock Holmes, Galadriel, Robinson Crusoe, Ribana, Jánošík...), im sa stratili verní priatelia a kamaráti. Aj toto môže napraviť len Veľký knihovník. Podarí sa Aničke a Sáre zachrániť unesenú pani knihovníčku a znova nastoliť poriadok v literárnych príbehoch? To sa diváci mohli dozvieť v rozprávkovom hradnom muzikáli Tajomstvo Veľkého Knihovníka, ktorý sa hral od 15. do 21. júla 2024 na hrade Ľubovňa."
  },
  {
    id: 17,
    title: "Železník",
    date: "2023",
    image: "Z-171.jpg",
    description: "Profesor Physicus vynájde mechanického človeka, ktorému dá meno Železník. Železník je silný, vytrvalý a šikovný a pán veľkopodnikateľ, ktorý si robota objednal, ho chce využiť na prácu v továrni, aby mohol prepustiť ostatných zamestnancov. Železníkovi sa však táto úloha nepáči, pretože by sa chcel stať človekom, na to však potrebuje srdce. Počas plesu, ktorý usporiada veľkopodnikateľ na oslavu zásnub svojej dcéry Flóry, sa nechá oklamať zlodejskou bandou, ktorá mu prisľúbi zlaté srdce a začne s nimi lúpiť. Jeho púť za srdcom sa však u zlodejov nekončí. Po tom, ako oslobodí unesenú Flóru, dostane sa do galérie, kde stretá Monu Lisu, Nefertiti, Fridu Kalo, Venušu a Apolóna i ďalšie umelecké diela. Ani tam však srdce nenájde. Až láska mu dá to, čo hľadá."
  },
  {
    id: 16,
    title: "Cesta do Kráľovstva Víl",
    date: "2022",
    image: "CDKV-1.jpg",
    description: "V dobe, keď na našom území sídlili ešte starí Slovania, žil v osade Ľubovňa kováč Radan, ktorý sa zaľúbil do spanilej kráľovnej víl. Aj kráľovnej sa švárny kováč páčil, nuž sa rozhodla, že sa zaňho vydá. Radana však milovala aj deva Dobrava. Len čo dievčina zistila, že jej milého počas letného slnovratu uniesli rusalky do svojho kráľovstva, vybrala sa ho zachrániť. Na svojej púti postretla bratov Konštantína a Metoda, ktorí sem zablúdili na ceste do Nitrianskeho kniežatstva. Dobrava navštívi aj chalúpku kmotry Bylinkárky a tam sa zoznámi s hovoriacim havranom a jeho kamarátkou čiernou mačkou. Ocitne sa tiež medzi starými slovanskými bohmi, ktorým pomôže vyriešiť zložitý spor. Napokon sa dostane aj do Kráľovstva víl."
  }
];

const Shows = () => {
  return (
    <section id="showsMain" className="showsMain">
      <h2>Naše Predstavenia</h2>
      <div className="showsMain-grid">
        {showsData.map((show) => (
          <Link to={`/shows/${show.id}`} key={show.id} className="showMain-card">
            <img src={show.image} alt={show.title} />
            <h3>{show.title}</h3>
            <p className="showMain-date">{show.date}</p>
            <p className="showMain-description">{show.description}</p>
          </Link>
        ))}
      </div>
      <div className="showMain-more-container">
        
        <Link to="/shows" className="showMain-more-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Zobraziť všetky predstavenia
        </Link>
      </div>
    </section>
  );
};

export default Shows;
