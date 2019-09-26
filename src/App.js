import React from 'react';
import logo from './static/crazybonezhead.png';
import './App.css';
import Gallery from 'react-grid-gallery';


const IMAGES =
    [
        {
            src: "http://crazybonezskeleton.com/images/basshead/basshead.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/basshead.jpg",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/CrazyBonez1.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/CrazyBonez1.jpg",
            tags: [
                {
                    value: "Ocean",
                    title: "Ocean"
                },
                {
                    value: "People",
                    title: "People"
                }
            ],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/CrazyBonez2.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/CrazyBonez2.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/Mrz%20CB%20in%20Clint%20Buttum's%20Van%20-%20Tiger.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/Mrz%20CB%20in%20Clint%20Buttum's%20Van%20-%20Tiger.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/Selfie%20with%20Katie%20Roberts%20and%20Sheena%20Buttrum.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/Selfie%20with%20Katie%20Roberts%20and%20Sheena%20Buttrum.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/The%20Black%20Nasty.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/The%20Black%20Nasty.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/12019939_1648910082029701_5865308826277382321_n.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/12019939_1648910082029701_5865308826277382321_n.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/Back%20to%20the%20Future%202.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/Back%20to%20the%20Future%202.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/basshead1.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/basshead1.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/CB%20Bassheads.%20Term%20lab%20test%20on%20The%20Black%20Nasty%20before%20Finals%202.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/CB%20Bassheads.%20Term%20lab%20test%20on%20The%20Black%20Nasty%20before%20Finals%202.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/IMG_4211.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/IMG_4211.jpg"
        },
        {
            src: "http://crazybonezskeleton.com/images/basshead/IMG_4180.jpg",
            thumbnail: "http://crazybonezskeleton.com/images/basshead/IMG_4180.jpg"
        }
    ];
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
