
let products = {
    data: [{
        gadget: "Sony PlayStation 5 - PS5 Digital Edition",
        category: "PlayStation",
        price: "39,000",
        image: "images/ps5-digital.jpg",
    }, {
        gadget: "Sony PlayStation 5 - PS5 Disk Edition",
        category: "PlayStation",
        price: "59,000",
        image: "images/ps5.jpg",
    },
    {
        gadget: "Nitendo Switch",
        category: "Games",
        price: "25,399",
        image: "images/nitendo.jpg",
    },
    {
        gadget: "Playstation 5 DualSense Wireless ",
        category: "Controllers",
        price: "4999",
        image: "images/ps5-joystick.jpg",
    },
    {
        gadget: "Sony PlayStation 4 500GB Console (PS4)",
        category: "PlayStation",
        price: "30,450.00",
        image: "images/ps4.jpg",
    },
    {
        gadget: "Playstation 5 DualSense Wireless(Black)",
        category: "Controllers",
        price: "4999",
        image: "images/ps5-black-joystick.jpg",
    },
    {
        gadget: "Super Mario Party(Nitendo Switch)",
        category: "Games",
        price: "8639",
        image: "images/supermario.jpg",
    },
    {
        gadget: "DualShock 4 Wireless Controller for PlayStation 4",
        category: "Controllers",
        price: "3950.00",
        image: "images/ps4-joystick.jpg",
    },
    {
        gadget: "Sony Playstation 3 320GB PS3",
        category: "PlayStation",
        price: "22,343.00",
        image: "images/ps3-joystick.jpg",
    },
    {
        gadget: "Oculus Quest 2 VR",
        category: "Accessories",
        price: "39,050.00",
        image: "images/oculus-quest2.jpg",
    },
    {
        gadget: "Gaming HeadPhone",
        category: "Accessories",
        price: "4690.00",
        image: "images/headphones.jpg",
    },
    {
        gadget: "Xbox Series S",
        category: "XboxSeries",
        price: "34,700.00",
        image: "images/xbox-s.jpg",
    },
    {
        gadget: "Microsoft Xbox Series S Wireless Controller",
        category: "Controllers",
        price: "3556.00",
        image: "images/xbox-s-joystick.jpg",
    },
    {
        gadget: "Xbox Series X",
        category: "XboxSeries",
        price: "30,540.00",
        image: "images/xbox-x.jpg",
    },
    {
        gadget: "Microsoft Xbox Series X Wireless Controller Carbon Black",
        category: "Controllers",
        price: "3053.00",
        image: "images/xbox-x-joystick.jpg",
    },
    {
        gadget: "God Of War Ragnork PS5",
        category: "Games",
        price: "2953.25",
        image: "images/gow5.jpg",
    },
    {
        gadget: "The Quarry",
        category: "Games",
        price: "1904.24",
        image: "images/quarry.jpg",
    },
    {
        gadget: "Stray",
        category: "Games",
        price: "1205.78",
        image: "images/stray.jpg",
    },
    {
        gadget: "Last Of Us Part 2 PS5",
        category: "Games",
        price: "1467.02",
        image: "images/lastofus.jpg",
    },
    {
        gadget: "Red Dead Redemption 2",
        category: "Games",
        price: "1443.86",
        image: "images/rdr2.jpg",
    },
    {
        gadget: "Assassin Creed Valhalla (Gold Edition)",
        category: "Games",
        price: "1640.07",
        image: "images/acvalhalla.jpg",
    },
    {
        gadget: "Gears 5 Exclusive On Xbox",
        category: "Games",
        price: "934.06",
        image: "images/gears.jpg",
    },
    ]
};
for (let i of products.data) {
    let card = document.createElement("div");

    //adding class to the card
    card.classList.add("card", i.category, "hide");

    //adding img container for gadgets
    let imagecontainer = document.createElement("div")
    imagecontainer.classList.add("image-container");

    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    imagecontainer.appendChild(img);

    //adding imagecontainer to the card div
    card.appendChild(imagecontainer);

    let contain = document.createElement("div");
    contain.classList.add("contain");

    //adding produtname
    let productName = document.createElement("h5");
    productName.classList.add("product-name");
    productName.innerText = i.gadget.toUpperCase();
    contain.appendChild(productName);
    //adding product price

    let price = document.createElement("h3");
    price.classList.add('product-price');
    price.innerText = `₹${i.price}`;
    contain.appendChild(price);

    //adding contain to the card div

    card.append(contain);

    document.querySelector(".gadgets").appendChild(card);

}
function selectItems(value) {
    let btn = document.querySelectorAll('.select-items');

    btn.forEach((btns) => {
        if (value.toUpperCase() === btns.innerText.toUpperCase()) {
            btns.classList.add('active');
        } else {
            btns.classList.remove('active')
        }
    });


    let cards = document.querySelectorAll('.card');

    cards.forEach((e) => {
        if (value == 'all') {
            e.classList.remove('hide');
        } else {
            if (e.classList.contains(value)) {
                e.classList.remove('hide');
            } else {
                e.classList.add('hide');
            }
        }
    })
}

window.onload = () => {
    selectItems('all');
}