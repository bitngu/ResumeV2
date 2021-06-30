import React, { useEffect, useState } from 'react';
import useOnScroll from '../utils/useOnScroll';
import useOnResize from '../utils/useOnResize';
import upArrow from '../graphics/up-arrow.png';
// import iconWhite from '../graphics/icon-white.png'
// import icon from '../graphics/icon.png'

import './Navbar.css'
const Navbar = () => {
   let windowY = useOnScroll();
   let windowX = useOnResize();

   console.log('y', windowY);
   console.log('x', windowX);
   
   const [isToggle, setIsToggle] = useState(false);

    const handleOnClick = (e) => {
        let to = e.target.textContent.toLowerCase().trim()
        console.log(to);

        if (to === 'bi nguyen' || to === 'home'){
            window.scrollTo(0,0);
        }else if (to === 'about'){
            windowX > 850 ? window.scrollTo(0, 675) : window.scrollTo(0, 520);
        }else if (to === 'education'){
            if (windowX < 768){
                window.scrollTo(0, 1730);
            }else{
                windowX > 850 ? window.scrollTo(0, 1638) : window.scrollTo(0, 1435);
            }
        }
        else if (to === 'project'){
            if (windowX < 768){
                window.scrollTo(0,2375);
            }else {
                windowX > 850 ? window.scrollTo(0, 2200) : window.scrollTo(0, 1980);
            }
        }else if( to === 'contact'){
            if(windowX < 768){
                window.scrollTo(0, 3850);
            }else{
                windowX > 850 ? window.scrollTo(0, 3020) : window.scrollTo(0, 3815);
            }
        }
        // else {
        //     document.getElementById(to).scrollIntoView(true);
        // }
    }
   

    //show section as scroll
   useEffect(() => {
       if (windowX > 850){
            document.getElementById('navhome_').style.width = '0';
            document.getElementById('navabout_').style.width = '0';
            document.getElementById('naveducation_').style.width = '0';
            document.getElementById('navproject_').style.width = '0';
            document.getElementById('navcontact_').style.width = '0';
            
        if (windowY < 675){
            //home
            document.getElementById('navhome_').style.width = 'inherit';
            document.getElementById('navhome_').style.transform = 'scaleX(1.8)';
            
        }else if (windowY >= 675 && windowY < 1638){
            //about
            document.getElementById('navabout_').style.width = 'inherit';
            document.getElementById('navabout_').style.transform = 'scaleX(1.8)';
        }else if (windowY >= 1638 && windowY < 2200){
            //education
            document.getElementById('naveducation_').style.width = 'inherit';
            document.getElementById('naveducation_').style.transform = 'scaleX(1.8)';
       }else if ( windowY >= 2200 && windowY < 2600){
            //project
            document.getElementById('navproject_').style.width = 'inherit';
            document.getElementById('navproject_').style.transform = 'scaleX(1.8)';
        }else{
            document.getElementById('navcontact_').style.width = 'inherit';
            document.getElementById('navcontact_').style.transform = 'scaleX(1.8)';
        }

    }else {
        document.getElementById('dropdownhome_').style.fontWeight = '300';
        document.getElementById('dropdownabout_').style.fontWeight = '300';
        document.getElementById('dropdowneducation_').style.fontWeight = '300';
        document.getElementById('dropdownproject_').style.fontWeight = '300';
        document.getElementById('dropdowncontact_').style.fontWeight = '300';
        if (windowY < 520 ) {
            //home
            document.getElementById('dropdownhome_').style.fontWeight = '600';
        }
        else if (windowY >= 520 && windowY < 1435){
            //about
            document.getElementById('dropdownabout_').style.fontWeight = '600';

        }else if (windowY >= 1435 && windowY < 1980){
            document.getElementById('dropdowneducation_').style.fontWeight = '600';
        }else if( windowY >= 1980 && windowY < 3300){
            document.getElementById('dropdownproject_').style.fontWeight = '600';
        }else {
            document.getElementById('dropdowncontact_').style.fontWeight = '600';

        }
    }


   }, [windowY, windowX])
   //change color as scroll
   useEffect (()=>{
    let navbar = document.getElementsByClassName('navbar')[0];
    let name =  document.getElementsByClassName('name')[0].children;
    let hr = document.getElementsByClassName('navbar-hr');
    let texts = document.getElementById('navbar-menu').children;
    let scrollUp = document.getElementsByClassName('scrollUp-button')[0];

    if(windowY >= 75){
        navbar.style.backgroundColor = 'white';
        name[0].style.color = 'black';
        scrollUp.style.display = 'block';
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = 'black';
            hr[i].style.background = 'black';
        }
    }else{
        scrollUp.style.display = 'none';
        navbar.style.backgroundColor = 'transparent';
        name[0].style.color =  'white';
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = 'white';
            hr[i].style.background = 'white';
        }
        }
   }, [windowY])

   const rotateAnimate = (e) => {      
       e.target.classList.toggle('rotate');
       if (isToggle){
           document.getElementsByClassName('overlay')[0].style.height = '0px';
           document.getElementsByClassName('dropdown-selection')[0].style.height = '0';
           setIsToggle(false);

       }
        else{
           document.getElementsByClassName('overlay')[0].style.height = '225px';
           document.getElementsByClassName('dropdown-selection')[0].style.height = '225px';
           setIsToggle(true);
        }
   }

   //reset drop-down menu;
   useEffect (()=> {
       if(isToggle && windowX > 850){
           document.getElementById('dropdown-menu').click();
        }
   }, [windowX, isToggle])

    return (  
        <nav className="navbar">
            <div className="name">
                <h1 onClick = {handleOnClick}>Bi Nguyen</h1>
            </div>
            <div id="navbar-menu">
                <div className="outerText">
                    <h2 onClick = {handleOnClick} > Home</h2> 
                    <div className= 'navbar-hr' id = 'navhome_'></div>
               </div>
               <div className="outerText">
                    <h2 onClick = {handleOnClick} > About</h2> 
                    <div className= 'navbar-hr' id = 'navabout_'></div>
               </div>
               <div className="outerText">
                    <h2 onClick = {handleOnClick} > Education </h2> 
                    <div className= 'navbar-hr' id = 'naveducation_'></div>
               </div>

               <div className="outerText">
                    <h2 onClick = {handleOnClick} > Project</h2> 
                    <div className= 'navbar-hr' id = 'navproject_'></div>
               </div>
               <div className="outerText">
                    <h2 onClick = {handleOnClick} > Contact </h2> 
                    <div className= 'navbar-hr' id = 'navcontact_'></div>
               </div>
            </div>
            <div onClick = {rotateAnimate} id = "dropdown-menu">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="overlay">
                <div className="dropdown-selection">
                    <h2 id = 'dropdownhome_' onClick = {handleOnClick} > Home</h2>
                    <div className= 'dropdown-hr'></div>
                    <h2 id = 'dropdownabout_' onClick = {handleOnClick} > About</h2>
                    <div className= 'dropdown-hr'></div>
                    <h2 id = 'dropdowneducation_' onClick = {handleOnClick} > Education </h2>
                    <div className= 'dropdown-hr'></div>

                    <h2 id = 'dropdownproject_' onClick = {handleOnClick} > Project</h2>
                    <div className= 'dropdown-hr'></div>
                    <h2 id = 'dropdowncontact_' onClick = {handleOnClick} > Contact</h2>

                </div>
            </div>
            <div onClick = {() => window.scrollTo(0,0)} className="scrollUp-button">
                <img src={upArrow} alt= "^" />
            </div>
        </nav>
    );
}
 
export default Navbar;