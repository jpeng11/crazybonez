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
        src: "http://crazybonezskeleton.com/images/basshead/CrazyBonez2.jpg",
        thumbnail: "http://crazybonezskeleton.com/images/basshead/CrazyBonez2.jpg"
    },
    {
        src: "http://crazybonezskeleton.com/images/basshead/Mrz%20CB%20in%20Clint%20Buttum's%20Van%20-%20Tiger.jpg",
        thumbnail: "http://crazybonezskeleton.com/images/basshead/Mrz%20CB%20in%20Clint%20Buttum's%20Van%20-%20Tiger.jpg"
    }];


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img className="home" src={logo} alt=""/>
                <div className="App-gallery">
                    <Gallery images={IMAGES}/>
                </div>
            </header>
        </div>
    );
}

export default App;
