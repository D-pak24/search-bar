let searchSuggest = ['Playstation', 'XboxSeries', 'Nitendo', 'Games', 'God of war Rangnork', 'Gears 5', 'Assassin Creed Valhalla', 'Last of us 2', 'Red Dead Redemption 2', 'Stray', 'The Quarry', 'Gaming HeadPhone', 'Oculus Quest 2 VR', 'Sony Playstation 3', 'DualShock 4 Wireless Controller for PlayStation 4', 'Super Mario Party', 'Sony PlayStation 4', 'Nitendo Switch', 'Sony PlayStation 5 - PS5 Disk Edition', 'Sony PlayStation 5 - PS5 Digital Edition', 'Playstation 5 DualSense Wireless', 'Xbox Series S Wireless Controller', 'Xbox Series X', 'Xbox Series S', 'Xbox Series X Wireless Controller (Black)'];

const input = document.getElementById('search-gadgets');
const suggestionList = document.querySelector('.list-container');
const body = document.querySelector('body');
const gadgetsSection = document.querySelector('.gadgets');

input.addEventListener('keyup', () => {
    let lists = [];
    let inputs = input.value;
    if (inputs.length) {
        lists = searchSuggest.filter((items) => {
            return items.toLowerCase().startsWith(inputs.toLowerCase());
        });
    }
    listRender(lists);
});

input.addEventListener('keyup', () => {
    let inputValue = input.value.toLowerCase();
    let filteredProducts = products.data.filter(product => product.gadget.toLowerCase().includes(inputValue));
    renderGadgets(filteredProducts);
});

function renderGadgets(products) {
    let gadgetCards = '';
    products.forEach(product => {
        gadgetCards += `
      <div class="card">
      <div class="image-container">
        <img src=${product.image} alt=${product.gadget} />
       </div>
       <div class="contain">
        <h5 class="product-name">${product.gadget}</h5>
        <h3 class="product-price">Price: ${product.price}</h3>
        </div>
      </div>
    `;
    });
    gadgetsSection.innerHTML = gadgetCards;
}
function listRender(lists) {
    if (!lists.length) {
        return suggestionList.classList.add('hide');
    }

    const content = lists.map((list) => {
        return `<li class="lists">${list}</li>`;
    }).join(" ");
    suggestionList.classList.remove('hide');
    suggestionList.innerHTML = `<ul>${content}</ul>`;
}

body.addEventListener('click', (e) => {
    if (e.target.className === 'lists') {
        input.value = e.target.innerHTML;
        suggestionList.classList.add('hide');
    } else {
        suggestionList.classList.add('hide');
    }
});
