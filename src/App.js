import {Router,Route,BrowserRouter} from "react-router-dom";
import data from './data/data.json'
import Video from "./components/Video";
import img from './assets/academy.png';
import story from './assets/story.png';
import news from './assets/in-the-news.gif';
import franchiseImg from './assets/franchise.gif';
import locations from './assets/locations.png';
import image2 from './assets/image2.png';
import albumImg from './assets/mba-cares.gif';
import baratImg from './assets/image1.png';
import chaiwalaImg from './assets/image3.png';
import Footer from './components/Footer.jsx'
import Misc from "./components/Misc";


import Section from "./components/Section";

import './styles/misc.scss'
import './styles/video.scss'  
import './styles/section.scss'  
import './styles/footer.scss'
import './styles/mediaQuery.scss'
// import { Component } from "react";


// $yellow: #fff100;
// $pink:#ed1e79;
// $red:#d20120;
// $white:#fff;
// $brown:#6d3d0f;

const yellow = '#fff100', pink= '#ed1e79', red = '#d20120', white='#fff', brown = '#6d3d0f'

const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;
function App() {
  
  return (  
    <>
 
<Video/>
<Section img={img}
h3={freshTopic.heading}
text={freshTopic.text}
btnTxt = {freshTopic.btn}
bgColor={pink}
headingColor={yellow}
txtColor={yellow}

btnBgColor={yellow}
btnColor={pink}
/>

<Section img={story}
h3={freshTopic2.heading}
text={freshTopic2.text}
btnTxt = {freshTopic2.btn}
bgColor={pink}
headingColor={yellow}
txtColor={yellow}

btnBgColor={yellow}
btnColor={pink}

/>

<Section img={news}
h3={tedTalks.heading}
text={tedTalks.text}
btnTxt = {tedTalks.btn}
bgColor={yellow}
headingColor={pink}
txtColor={pink}

btnBgColor={pink}
btnColor={yellow}

/>
     
<Section img={franchiseImg}
h3={franchise.heading}
text={franchise.text}
btnTxt = {franchise.btn}
bgColor={white}
headingColor={pink}
txtColor={brown}

btnBgColor={brown}
btnColor={yellow}

/>
    
<Section img={locations}
h3={map.heading}
text={map.text}
// btnTxt = {map.btn}
hasBtn={false}
bgColor={pink}
headingColor={yellow}
txtColor={yellow}


/>
    
<Section img={image2}
h3={courses.heading}
text={courses.text}
imgSize={'30%'}
btnTxt = {courses.btn}
bgColor={yellow}
headingColor={pink}
txtColor={pink}

btnBgColor={pink}
btnColor={yellow}

/>

<Section img={albumImg}
h3={album.heading}
text={album.text}
// imgSize={'30%'}
btnTxt = {album.btn}
bgColor={white}
headingColor={pink}
txtColor={brown}

btnBgColor={brown}  
btnColor={yellow}

/>

<Section img={baratImg}
h3={barat.heading}
text={barat.text}
// imgSize={'30%'}
btnTxt = {barat.btn}
bgColor={pink}
headingColor={yellow}
txtColor={yellow}

btnBgColor={yellow}
btnColor={pink}

/>

<Section img={chaiwalaImg}
h3={chaiwala.heading}
text={chaiwala.text}
// imgSize={'30%'}
btnTxt = {chaiwala.btn}
bgColor={white}
headingColor={pink}
txtColor={brown}

btnBgColor={brown}
btnColor={yellow}

/>
<Footer/>
<Misc/>
  
    </>
  );
}

export default App;
