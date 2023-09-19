import React, { useEffect, useState } from 'react';
import useOnScroll from '../utils/useOnScroll';
import useOnResize from '../utils/useOnResize';
import upArrow from '../graphics/up-arrow.png';

// import iconWhite from '../graphics/icon-white.png'
// import icon from '../graphics/icon.png'

import icon from '../graphics/cs-logo-1.png'



import './Navbar.css'
const Navbar = () => {
   let windowY = useOnScroll();
   let windowX = useOnResize();
   const [isToggle, setIsToggle] = useState(false);
  

    const handleOnClick = (e) => {
        let to = e.target.textContent.toLowerCase().trim()
        document.getElementById(to).scrollIntoView({behavior: 'smooth'});
        if(windowX <= 850){
            document.getElementById('dropdown-menu').click();
        }
    }
    //show transition as changing height and width
   useEffect(() => {
        const homeHeight = document.getElementById('home').clientHeight-50;
        const aboutHeight = document.getElementById('about').clientHeight;
        const eduHeight = document.getElementById('education').clientHeight;
        const projHeight = document.getElementById('project').clientHeight;

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
    let hr = document.getElementsByClassName('navbar-hr');
    let texts = document.getElementById('navbar-menu').children;
    let scrollUp = document.getElementsByClassName('scrollUp-button')[0];
    let container =  document.getElementsByClassName('nav-logo-container')[0];
    let home_section_height = document.getElementById('home').offsetHeight - 25;
    let dropdown_menu = document.getElementById("dropdown-menu");
    if(windowY >= home_section_height){
        navbar.style.backgroundColor = '#fff';
        container.style.color = '#000';
        // dropdown_menu.style.background = '#000';
        scrollUp.style.display = 'block';
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = '#000';
            hr[i].style.background = '#000';
        }
        for (let i = 0; i < dropdown_menu.children.length; i++) {
            dropdown_menu.children[i].style.background = "#000";
        }
    }else{
        scrollUp.style.display = 'none';
        navbar.style.backgroundColor = 'transparent';
        container.style.color = '#fff'
        // dropdown_menu.style.background = '#fff';

        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = '#fff';
            hr[i].style.background = '#fff';
        }
        for (let i = 0; i < dropdown_menu.children.length; i++) {
            dropdown_menu.children[i].style.background = "#fff";
        }
    }
    let isVisibleOverlay = document.getElementsByClassName("dropdown-selection")[0].offsetHeight > 0;
    if (isVisibleOverlay){
        let dropdown_menu_options = document.getElementsByClassName("dropdown-selection")[0]
        if(windowY >= home_section_height) {
            for (let i = 0; i < dropdown_menu_options.children.length; i++) {
                dropdown_menu_options.children[i].style.color = "#000";
            }
        }
        else {
            for (let i = 0; i < dropdown_menu_options.children.length; i++) {
                dropdown_menu_options.children[i].style.color = "#fff";
            }
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
           document.getElementsByClassName('overlay')[0].style.height = '300px';
           document.getElementsByClassName('dropdown-selection')[0].style.height = '300px';
           setIsToggle(true);
        }
   }


   //reset drop-down menu;
   useEffect (()=> {
       if(isToggle && windowX > 850){
           document.getElementById('dropdown-menu').click();
        }
       if(windowX <= 850){
           let home_section_height = document.getElementById('home').offsetHeight - 25;
           let dropdown_menu_options = document.getElementsByClassName("dropdown-selection")[0].querySelectorAll('h2')
           let hr_line = [...document.getElementsByClassName("dropdown-hr")]
           if(windowY >= home_section_height) {
               dropdown_menu_options.forEach((menu)=>{menu.style.color = '#000'})
               hr_line.forEach((hr) => {hr.style.background = "black"})
           }
           else {
               dropdown_menu_options.forEach((menu)=>{menu.style.color = '#fff'})
               hr_line.forEach((hr) => {hr.style.background = "white"})
           }
       }
   }, [windowX, windowY, isToggle])

    return (  
        <nav className="navbar">
            <div onClick = {() => window.scrollTo({top:0, behavior: 'smooth'})} className= "nav-logo-container">
                <div className="nav-logo">
                    <span> Bi Nguyen </span>
                    <p></p>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Handlee');
                    </style>

                </div>
         
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