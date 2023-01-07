let content = document.getElementById("content");

class ElmBuilder {
  build = (elm, target, content) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = content;
    document.querySelector(`.${target}`).appendChild(div);
  };
  prebuild = (elm, target, content) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = content;
    document.querySelector(`.${target}`).prepend(div);
  };

  remove = (target) => {
    document.querySelector(`.${target}`).remove();
  };
}

class Nav extends ElmBuilder {
  buildNav = () => {
    let arr = [
      ["nav", "content", ""],
      ["navContainer", "nav", ""],
      ["logo", "navContainer", "Du Bois"],
      ["navItems", "navContainer", ""],
      ["about", "navItems", "About"],
      ["menu", "navItems", "Menu"],
      ["bookNow", "navItems", "Book Now"],
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
  addTriangle = (side) => {
    let arr = [
      [`triContainer${side}`, "navContainer", ""],
      ["triangle", `triContainer${side}`, ""],
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
  addClick = (cls) => {
    let btn = document.querySelector(cls);
    btn.addEventlistener("Click");
  };
}

class Foot extends ElmBuilder {
  buildFoot = () => {
    let arr = [
      ["foot", "content", ""],
      ["triDown", "foot", ""],
      ["footContainer", "foot", ""],
      ["logo", "footContainer", "Du Bois"],
      ["social", "footContainer", ""],
      ["facebook", "social", ""],
      ["instagram", "social", ""],
      ["other", "social", ""],
      ["options", "footContainer", ""],
      ["list", "options", ""],
      ["privacy", "list", "Privacy"],
      ["legal", "list", "Legal"],
      ["careers", "list", "Careers"],
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
  addClick = () => {
    let btns = [...document.querySelectorAll(".logo")];
    btns.forEach((btn) => btn.addEventListener("click", goToMain));
  };
}

class About extends ElmBuilder {
  buildAbout = () => {
    let p1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
    voluptatum debitis atque adipisci. Modi mollitia esse vel
    dolorum. Debitis fugit at natus minima aperiam eaque
    voluptatem, harum libero quaerat dolore provident quis nihil.
    Nobis, ducimus assumenda! Ratione cupiditate veniam, facilis
    magni quam dolore illum. Quo, aperiam! Eligendi tempora eius
    corrupti?`;

    let p2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Placeat, ducimus, aliquid quibusdam officiis quaerat
    blanditiis fugiat autem dolore eligendi voluptatibus veniam?
    Nostrum quam cupiditate nihil soluta, esse iste fugit,
    voluptatem officiis, quisquam alias eaque debitis!`;

    let arr = [
      // * Update this list
      ["body", "content", ""],
      ["bodyContainer", "body", ""],
      ["main", "bodyContainer", ""],
      ["mainPhoto", "main", ""],
      ["mainContent", "main", ""],
      ["mainHeading", "mainContent", ""],
      ["h2", "mainHeading", "A Really Sexy Heading"],
      ["mainStory", "mainContent", ""],
      ["h3", "mainStory", "The Journey Begins"],
      ["p", "mainStory", p1],
      ["h3", "mainStory", "Intriguing Second Part"],
      ["p", "mainStory", p2],
      ["h3", "mainStory", "Nice Concluding Tag Line"],
      ["line", "bodyContainer", ""],
      ["photos", "bodyContainer", ""],
      ["photo", "photos", ""],
      ["photo", "photos", ""],
      ["photo", "photos", ""],
      // *
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
}

class Menu extends ElmBuilder {
  buildMenu = () => {
    let arr = [
      // * Update this list
      ["menuContainer", "menuBody", ""],
      ["menuCard", "menuContainer", ""],
      ["food1", "menuCard", ""],
      ["menuDescription", "food1", "Warm, double fudge, chocolate brownie"],
      ["menuItem", "food1", "Brownie"],
      ["food2", "menuCard", ""],
      ["menuDescription", "food2", "Chocolate, Vanilla, Oreo, Mint"],
      ["menuItem", "food2", "Ice Cream"],
      ["menuHeading", "menuCard", ""],
      ["menuLine", "menuHeading", ""],
      ["menHead", "menuHeading", "Desserts"],
      ["menuLine", "menuHeading", ""],
      ["divideLine", "menuContainer", ""],
      ["menuCard", "menuContainer", ""],
      ["food1", "menuCard", ""],
      ["menuDescription", "food1", "Creamy four cheese pasta"],
      ["menuItem", "food1", "Mac and Cheese"],
      ["food2", "menuCard", ""],
      ["menuDescription", "food2", "Topped with lemon"],
      ["menuItem", "food2", "Salmon"],
      ["food3", "menuCard", ""],
      ["menuDescription", "food3", "Served with brocolli"],
      ["menuItem", "food3", "Steak"],
      ["menuHeading", "menuCard", ""],
      ["menuLine", "menuHeading", ""],
      ["menHead", "menuHeading", "Entres"],
      ["menuLine", "menuHeading", ""],
      ["divideLine", "menuContainer", ""],
      ["menuCard", "menuContainer", ""],
      ["food1", "menuCard", ""],
      ["menuDescription", "food1", "Warm soup of the day"],
      ["menuItem", "food1", "Bowl of Soup"],
      ["food2", "menuCard", ""],
      ["menuDescription", "food2", "Fresh salsa with corn chips"],
      ["menuItem", "food2", "Chips and Salsa"],
      ["food3", "menuCard", ""],
      ["menuDescription", "food3", "Salted and served with cheees dip"],
      ["menuItem", "food3", "Pretzel Bites"],
      ["menuHeading", "menuCard", ""],
      ["menuLine", "menuHeading", ""],
      ["menHead", "menuHeading", "Appetizers"],
      ["menuLine", "menuHeading", ""],
      // *
    ];
    this.build("menuBody", "content", "");
    for (let arg of arr) {
      this.prebuild(arg[0], arg[1], arg[2]);
    }
  };
}
class Main extends ElmBuilder {
  buildMain = () => {
    let arr = [
      // * Update this list
      ["bodyContainer", "body", ""],
      ["cardContainer", "bodyContainer", ""],
      ["img", "bodyContainer", ""],
      ["triContainer", "img", ""],
      ["triangle", "triContainer", ""],
      ["imgBlock", "img", ""],
      ["card", "cardContainer", ""],
      ["info", "card", ""],
      ["p", "info", "(564)-392-0098"],
      ["p", "info", "Phone"],
      ["heading", "card", "Contact"],
      ["card", "cardContainer", ""],
      ["info", "card", ""],
      ["p", "info", "6pm - 11pm"],
      ["p", "info", "Thursday - Saturday"],
      ["heading", "card", "Hours"],
      ["card", "cardContainer", ""],
      ["info", "card", ""],
      ["p", "info", "TX, 56834"],
      ["p", "info", "123 ABC Street,"],
      ["heading", "card", "Location"],
      // *
    ];
    this.build("body", "content", "");
    for (let arg of arr) {
      this.prebuild(arg[0], arg[1], arg[2]);
    }
  };
}
class BookNow extends ElmBuilder {
  part = (
    elm,
    target,
    content,
    input,
    type,
    name,
    id,
    placeholder,
    labelFor
  ) => {
    let div = document.createElement(input);
    div.classList.add(elm);
    div.textContent = content;
    div.type = type;
    div.name = name;
    div.id = id;
    div.placeholder = placeholder;
    div.for = labelFor;
    document.querySelector(`.${target}`).prepend(div);
  };

  buildBookNow = () => {
    let arr = [
      // * Update this list
      ["formContainer", "body", ""],
      ["form", "formContainer", ""],
      ["formHeading", "form", ""],
      ["h2", "formHeading", "Book Now"],
      ["actualForm", "form", ""],
      ["buttonContainer", "form", ""],
      ["button", "buttonContainer", "Submit"],
      // *
    ];
    let arr2 = [
      ["inputGroup", "actualForm", "", "div", "", "", "", "", ""],
      ["time", "inputGroup", "", "input", "time", "time", "time", "", ""],
      ["label", "inputGroup", "", "div", "", "", "", "", ""],
      ["l", "label", "Time", "label", "", "", "", "", "time"],
      ["inputGroup", "actualForm", "", "div", "", "", "", "", ""],
      ["date", "inputGroup", "", "input", "date", "date", "date", "", ""],
      ["label", "inputGroup", "", "div", "", "", "", "", ""],
      ["l", "label", "Date", "label", "", "", "", "", "date"],
      ["inputGroup", "actualForm", "", "div", "", "", "", "", ""],
      [
        "last",
        "inputGroup",
        "",
        "input",
        "text",
        "lastName",
        "lastName",
        "Johnson",
        "",
      ],
      ["label", "inputGroup", "", "div", "", "", "", "", ""],
      ["l", "label", "Last Name", "label", "", "", "", "", "lastName"],
      ["inputGroup", "actualForm", "", "div", "", "", "", "", ""],
      [
        "first",
        "inputGroup",
        "",
        "input",
        "text",
        "firstName",
        "firstName",
        "Kyle",
        "",
      ],
      ["label", "inputGroup", "", "div", "", "", "", "", ""],
      ["l", "label", "First Name", "label", "", "", "", "", "firstName"],
    ];

    this.build("body", "content", "");
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
    for (let arg of arr2) {
      this.part(
        arg[0],
        arg[1],
        arg[2],
        arg[3],
        arg[4],
        arg[5],
        arg[6],
        arg[7],
        arg[8]
      );
    }
  };
}

let goToMain = () => {
  console.log("Go to main");
};

let nav = new Nav();
let foot = new Foot();
let abt = new About();
let menu = new Menu();
let book = new BookNow();
let main = new Main();

nav.buildNav();
main.buildMain();
foot.buildFoot();
foot.addClick();
// menu.buildMenu();
// nav.addTriangle("");
// nav.remove("triContainer");
// nav.remove("menuBody");
// nav.remove("foot");
// nav.addTriangle("Right");
// abt.buildAbout();
// foot.buildFoot();
