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
        if(to === 'bi nguyen'){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }else{document.getElementById(to).scrollIntoView({behavior: 'smooth'});}
        
        if(windowX <= 850 && to !== 'bi nguyen'){
            document.getElementById('dropdown-menu').click();
        }
    }
    //show transition as changing height and width
   useEffect(() => {
        const homeHeight = document.getElementById('home').clientHeight;
        const aboutHeight = document.getElementById('about').clientHeight;
        const eduHeight = document.getElementById('education').clientHeight;
        const projHeight = document.getElementById('project').clientHeight;
        console.log()
        if (windowX > 850){
            document.getElementById('navhome_').style.width = '0';
            document.getElementById('navabout_').style.width = '0';
            document.getElementById('naveducation_').style.width = '0';
            document.getElementById('navproject_').style.width = '0';
            document.getElementById('navcontact_').style.width = '0';
            if (windowY <= homeHeight) {
                document.getElementById('navhome_').style.width = 'inherit';
                document.getElementById('navhome_').style.transform = 'scaleX(1.8)';
            }else if (windowY <= homeHeight + aboutHeight){
                document.getElementById('navabout_').style.width = 'inherit';
                document.getElementById('navabout_').style.transform = 'scaleX(1.8)';

            }else if (windowY <= homeHeight + aboutHeight + eduHeight){
                document.getElementById('naveducation_').style.width = 'inherit';
                document.getElementById('naveducation_').style.transform = 'scaleX(1.8)';

            }else if(windowY <= homeHeight + aboutHeight + eduHeight + projHeight ){
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
        if (windowY <= homeHeight ) {
            document.getElementById('dropdownhome_').style.fontWeight = '600';
        }
        else if (windowY <= homeHeight + aboutHeight){
            document.getElementById('dropdownabout_').style.fontWeight = '600';
        }else if (windowY <= homeHeight + aboutHeight + eduHeight ){
            document.getElementById('dropdowneducation_').style.fontWeight = '600';
        }else if( windowY <= homeHeight + aboutHeight + eduHeight + projHeight){
            document.getElementById('dropdownproject_').style.fontWeight = '600';
        }else {
            document.getElementById('dropdowncontact_').style.fontWeight = '600';
        }
    }
   }, [windowY, windowX])


   //change color of navbar as scroll
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
            <div onClick = {() => window.scrollTo({top:0, behavior: 'smooth'})} className="scrollUp-button">
                <img src={upArrow} alt= "^" />
            </div>
        </nav>
    );
}
 
export default Navbar;