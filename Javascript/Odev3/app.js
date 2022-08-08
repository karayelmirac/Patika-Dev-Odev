const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Mirac",
    category: "Turkey",
    price: 31.99,
    img:
      "https://picsum.photos/500/400",
    desc: `amsdmasdaskdaskdks`,
  },
];
// PART OF BTN-CONTAINER START
// Create Set for MENU.CATEGORY
let newArr1 = []
for (let i =0;i<menu.length;i++){
 newArr1.push((menu[i].category)) 
}
let newSet = [...new Set(newArr1)]
 
let takeBtn = document.querySelector(".btn-container")
let createBtn = document.createElement("button")
createBtn.classList = ("btn btn-outline-dark btn-item")
createBtn.innerHTML = "All"
takeBtn.appendChild(createBtn)


function btnContainer () {
  for(let i =0;i<menu.length;i++) {
    if(newSet[i] != undefined) {
      let takeBtn = document.querySelector(".btn-container")
      let createBtn = document.createElement("button")
      createBtn.classList = ("btn btn-outline-dark btn-item "+ `${newSet[i]}`)
      
      createBtn.innerHTML = `${newSet[i]}`
      takeBtn.appendChild(createBtn)
    }
  }
}
btnContainer()

// PART OF BTN-CONTAINER END

// PART OF SECTION CENTER START
function sectionCenter () {
  for (let i = 0; i< menu.length; i++) {
    //menu-items start
    takeSectionCenter = document.querySelector(".section-center")
    createDIV = document.createElement("div")
    createDIV.classList=("menu-items col-lg-6 col-sm-12")
    createDIV.innerHTML = `<img src="${menu[i].img}" alt="${menu[i].title}" class="photo">`
    takeSectionCenter.appendChild(createDIV)
    //menu-items end
    createDIV2 = document.createElement("div") //menu-info
    createDIV2.classList = ("menu-info")
    createDIV.appendChild(createDIV2)
    createDIV3 = document.createElement("div") //menu-title
    createDIV3.classList = ("menu-title")
    h4_first = document.createElement("h4") //title
    h4_second = document.createElement("h4") //price
    h4_second.classList=("price")
    h4_first.innerHTML = `${menu[i].title}`
    h4_second.innerHTML = `${menu[i].price}`
    createDIV3.appendChild(h4_first)
    createDIV3.appendChild(h4_second)
    createDIV2.appendChild(createDIV3)


    createDIV4 = document.createElement("div") //menu-text
    createDIV4.classList = ("menu-text")

    createDIV4.innerHTML = `${menu[i].desc}`
  


    createDIV2.appendChild(createDIV4)
  }

}


sectionCenter()


