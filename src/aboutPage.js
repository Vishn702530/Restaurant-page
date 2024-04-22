const aboutPage = document.createElement('div');
aboutPage.id = "about";

const aboutContent = document.createElement('h1')
aboutContent.className = "aboutinfo";
aboutContent.textContent="aboutttt";

aboutPage.append(aboutContent);

function getAbout(){
    return aboutPage;
}

export {getAbout};