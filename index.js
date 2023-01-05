let content = document.getElementById("content");

class Nav {
  createNav = () => {
    let nav = document.createElement("div");
    let navContainer = document.createElement("div");
    let logo = document.createElement("div");
    let navItems = document.createElement("div");
    let about = document.createElement("div");
    let menu = document.createElement("div");
    let bookNow = document.createElement("div");
    let triangleContainer = document.createElement("div");
    let triangle = document.createElement("div");
    nav.classList.add("nav");
    navContainer.classList.add("navContainer");
    logo.classList.add("logo");
    navItems.classList.add("navItems");
    about.classList.add("about");
    menu.classList.add("menu");
    bookNow.classList.add("bookNow");
    triangleContainer.classList.add("triangleContainer");
    triangle.classList.add("triangle");
    logo.textContent = "Du Bois";
    about.textContent = "About";
    menu.textContent = "Menu";
    bookNow.textContent = "Book Now";
    triangleContainer.appendChild(triangle);
    navItems.appendChild(about);
    navItems.appendChild(menu);
    navItems.appendChild(bookNow);
    navContainer.appendChild(logo);
    navContainer.appendChild(navItems);
    navContainer.appendChild(triangleContainer);
    nav.appendChild(navContainer);
    content.appendChild(nav);
  };

  test = (elm, target) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = "About";
    document.querySelector(`.${target}`).appendChild(div);
  };
}

let nav = new Nav();
nav.createNav();
nav.test("about", "navItems");
