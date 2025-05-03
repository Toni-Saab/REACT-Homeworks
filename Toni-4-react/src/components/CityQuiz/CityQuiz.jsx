import React, { useState } from 'react';
import './CityQuiz.css';

const citiesData = [
  {
    name: "Токио",
    description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl: "https://live.staticflickr.com/65535/53228640707_f8cdf49a6a_o.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей."
    ]
  },
  {
    name: "Киото",
    description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl: "https://study-japan-guide.com/media/images/Kyoto.jpg",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет."
    ]
  },
  {
    name: "Осака",
    description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl: "https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/1/w11910-small.jpg",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии."
    ]
  },
  {
    name: "Хоккайдо",
    description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl: "https://i.pinimg.com/originals/ba/1e/24/ba1e246b2a39f90ae5850fc5cf7d9467.jpg",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями."
    ]
  },
  {
    name: "Нагоя",
    description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl: "https://voyageforum.info/images/hd/posts/openmedium/1581543288-kPfp0uX43FfmszO.jpeg",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."
    ]
  }
];

const CityQuiz = () => {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const selectedCity = citiesData[selectedCityIndex];

  const handleCityChange = (event) => {
    setSelectedCityIndex(event.target.value);
  };

  return (
    <div className="city-explorer">
      <div className="selector-block">
        <h2 className="selector-label">Choose Biome:</h2>
        <select className="city-select" onChange={handleCityChange} value={selectedCityIndex}>
          {citiesData.map((city, index) => (
            <option key={index} value={index}>{city.name}</option>
          ))}
        </select>
      </div>

      <div className="city-card-container">
        <div className="city-card">
          <h3 className="city-name">{selectedCity.name}</h3>
          <img src={selectedCity.imageUrl} alt={selectedCity.name} className="city-image" />
          <div className="city-info-scroll">
            <p className="city-description">{selectedCity.description}</p>
            <ul className="city-facts">
              <li className="fact-title">Interesting Details:</li>
              {selectedCity.facts.map((fact, index) => (
                <li key={index} className="city-fact">- {fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityQuiz;