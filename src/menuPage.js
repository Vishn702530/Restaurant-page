const menuPage = document.createElement('div');
menuPage.id = "menu";

const menuContent = document.createElement('h1');
menuContent.className = "menuinfo";
menuContent.textContent="menuuuu";

menuPage.append(menuContent);

function getMenu(){
    return menuPage;
}
export {getMenu};