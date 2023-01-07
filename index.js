let content = document.getElementById("content");

class ElmBuilder {
  build = (elm, target, content) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = content;
    document.querySelector(`.${target}`).appendChild(div);
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

// foot, triDown, footContainer, footLogo, social, facebook, instagram, other, options, list, privacy, legal, careers

let nav = new Nav();
let foot = new Foot();
let abt = new About();

let body = document.createElement("div");
body.classList.add("body");

// nav.buildNav();
// content.appendChild(body);
// nav.addTriangle("");
// nav.remove("triContainer");
// nav.addTriangle("Right");
// foot.buildFoot();
