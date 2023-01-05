let content = document.getElementById("content");

class Nav {
  build = (elm, target, content) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = content;
    document.querySelector(`.${target}`).appendChild(div);
  };

  remove = (target) => {
    document.querySelector(`.${target}`).remove();
  };

  buildNav = (arr) => {
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
  addTriangle = (arr) => {
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
}

let nav = new Nav();
let arr = [
  ["nav", "content", ""],
  ["navContainer", "nav", ""],
  ["logo", "navContainer", "Du Bois"],
  ["navItems", "navContainer", ""],
  ["about", "navItems", "About"],
  ["menu", "navItems", "Menu"],
  ["bookNow", "navItems", "Book Now"],
];
let arr2 = [
  ["nav2", "content", ""],
  ["navContainer2", "nav2", ""],
  ["logo2", "navContainer2", "Du Bois"],
  ["navItems2", "navContainer2", ""],
  ["about2", "navItems2", "About"],
  ["menu2", "navItems2", "Menu"],
  ["bookNow2", "navItems2", "Book Now"],
];
let triCenter = [
  ["triContainer", "navContainer", ""],
  ["triangle", "triContainer", ""],
];
let triRight = [
  ["triContainerRight", "navContainer", ""],
  ["triangle", "triContainerRight", ""],
];
let triLeft = [
  ["triContainerLeft", "navContainer", ""],
  ["triangle", "triContainerLeft", ""],
];
nav.buildNav(arr);
nav.addTriangle(triCenter);
nav.remove("triContainer");
nav.addTriangle(triLeft);
