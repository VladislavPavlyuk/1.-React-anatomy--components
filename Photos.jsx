import React from 'react';
import Hrad from 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Bratislava%2C_Hrad%2C_Slovensko.jpg';
import Panorama from 'https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Bratislava_Panorama_R01.jpg';

function Photos() {
  return <div>
        <img src={Hrad} alt="Bratislavsky Hrad" width="300" height="200"/>
        <img src={Panorama} alt="Panorama of Bratislava" width="300" height="200"/>
    </div>;
}

export default Photos;