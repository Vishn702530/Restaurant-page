const homePage = document.createElement('div');
homePage.id="home";

const restaurantName = document.createElement('h1')
restaurantName.className="title";
restaurantName.textContent = "welcome";



homePage.append(restaurantName);

function getHome(){
    return homePage;
}

export {getHome};