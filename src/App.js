import React from 'react';
import logo from './static/crazybonezhead.png';
import './App.css';
import Gallery from 'react-grid-gallery';

const IMAGES =
    [{
        src: "http://crazybonezskeleton.com/images/basshead/basshead.jpg",
        thumbnail: "http://crazybonezskeleton.com/images/basshead/basshead.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "http://crazybonezskeleton.com/images/basshead/CrazyBonez1.jpg",
        thumbnail: "http://crazybonezskeleton.com/images/basshead/CrazyBonez1.jpg",
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }];


function App() {



  return (
    <div className="App">
      <header className="App-header">
          <img className="home" src={logo} alt=""/>
          <div className="App-gallery" >
              <Gallery images={IMAGES}/>
          </div>
      </header>
    </div>
  );
}

export default App;
