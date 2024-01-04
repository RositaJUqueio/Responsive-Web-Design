const sections = document.querySelectorAll('.section'); //selects all elements with the class of "section"
const sectBtns = document.querySelectorAll('.controlls'); //parent container of icons controls
const sectBtn = document.querySelectorAll('.control'); //ach individual button with the class of control
const allSections = document.querySelector('.main-content'); //Body of the portfolio


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Moive to Active sections 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            // looping through buttons,remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hides other sections an go back to default page
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id); //we pass the id of whatever element we are on
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();