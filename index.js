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

// foot, triDown, footContainer, footLogo, social, facebook, instagram, other, options, list, privacy, legal, careers

let nav = new Nav();
let body = document.createElement("div");
body.classList.add("body");
let foot = new Foot();
nav.buildNav();
content.appendChild(body);
nav.addTriangle("");
nav.remove("triContainer");
nav.addTriangle("Right");
foot.buildFoot();
