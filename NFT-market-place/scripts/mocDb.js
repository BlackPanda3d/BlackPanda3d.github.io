const categories = [
    { imgSrc: './assets/categories/art.png', title: 'Art' },
    { imgSrc: './assets/categories/collectibles.png', title: 'Collectibles' },
    { imgSrc: './assets/categories/music.png', title: 'Music' },
    { imgSrc: './assets/categories/Photo.png', title: 'Photography' },
    { imgSrc: './assets/categories/video.png', title: 'Video' },
    { imgSrc: './assets/categories/utility.png', title: 'Utility' },
    { imgSrc: './assets/categories/sport.png', title: 'Sport' },
    { imgSrc: './assets/categories/wirtual words.png', title: 'Virtual Words' }
];

const creators = [
    { circle: '1', imgSrc: './assets/creator/1.png', name: 'Keepitreal', sales: '34.53 ETH' },
    { circle: '2', imgSrc: './assets/creator/2.png', name: 'DigiLab', sales: '34.53 ETH' },
    { circle: '3', imgSrc: './assets/creator/3.png', name: 'GravityOne', sales: '34.53 ETH' },
    { circle: '4', imgSrc: './assets/creator/4.png', name: 'Juanie', sales: '34.53 ETH' },
    { circle: '5', imgSrc: './assets/creator/5.png', name: 'BlueWhale', sales: '34.53 ETH' },
    { circle: '6', imgSrc: './assets/creator/6.png', name: 'Mr fox', sales: '34.53 ETH' },
    { circle: '7', imgSrc: './assets/creator/7.png', name: 'Shroomie', sales: '34.53 ETH' },
    { circle: '8', imgSrc: './assets/creator/8.png', name: 'Robotica', sales: '34.53 ETH' },
    { circle: '9', imgSrc: './assets/creator/9.png', name: 'RustyRobot', sales: '34.53 ETH' },
    { circle: '10', imgSrc: './assets/creator/10.png', name: 'Animakid', sales: '34.53 ETH' },
    { circle: '11', imgSrc: './assets/creator/11.png', name: 'Dotgu', sales: '34.53 ETH' },
    { circle: '12', imgSrc: './assets/creator/12.png', name: 'Ghiblier', sales: '34.53 ETH' },
    { circle: '13', imgSrc: './assets/creator/2.png', name: 'Keepitreal', sales: '34.53 ETH' },
    { circle: '14', imgSrc: './assets/creator/3.png', name: 'DigiLab', sales: '34.53 ETH' },
    { circle: '15', imgSrc: './assets/creator/4.png', name: 'GravityOne', sales: '34.53 ETH' },
    { circle: '16', imgSrc: './assets/creator/5.png', name: 'Juanie', sales: '34.53 ETH' }
];


const discoverCards = [
    { imgSrc: './assets/discover/discover-1.png', title: 'DSGN Animals', author: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/discover/discover-2.png', title: 'DSGN Animals', author: 'Life On Edena', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/discover/discover-3.png', title: 'AstroFiction', author: 'AstroFiction', price: '1.63 ETH', highestBid: '0.33 wETH' }
];

function createCategories() {
    const container = document.querySelector('.categories__cards');
    try {
        categories.forEach(category => {
            const cardHTML = `
                <div class="categories__card">
                    <div class="categories__img">
                        <img src="${category.imgSrc}" alt="${category.title}">
                    </div>
                    <div class="categories__title-card">
                        <h6>${category.title}</h6>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHTML);
        });
    } catch (error) {
        console.error(error);
    }
}

function createCreators() {
    const container = document.querySelector('.creators__avtor');
    try {
        creators.forEach(creator => {
            const creatorHTML = `
                <div class="creator">
                    <span class="creator__circle">${creator.circle}</span>
                    <div class="creator__avatar">
                        <img src="${creator.imgSrc}" alt="#">
                    </div>
                    <span class="creator-wrapper">
                    <h5 class="creator__name">${creator.name}</h5>
                    <p class="creator__price"><span>Total Sales:</span> ${creator.sales}</p>
                    <span>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', creatorHTML);
        });
    } catch (error) {
        console.error(error);
    }
}

function createDiscoverCards() {
    const container = document.querySelector('.discover__cards');
    try {
        discoverCards.forEach(card => {
            const cardHTML = `
                <div class="discover__card">
                    <div class="discover__img">
                        <img src="${card.imgSrc}" alt="img">
                    </div>
                    <div class="discover-stat">
                        <h5 class="discover-stat__title">${card.title}</h5>
                        <div class="discover-stat__info">
                            <div class="discover-stat__avatar">
                                <img src="./assets/media/avatar.png" alt="">
                            </div>
                            <h6>${card.author}</h6>
                        </div>
                        <div class="discover-stat__price">
                            <span>
                                <h6>Price</h6>
                                <p>${card.price}</p>
                            </span>
                            <span>
                                <h6>Highest Bid</h6>
                                <p>${card.highestBid}</p>
                            </span>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHTML);
        });
    } catch (error) {
        console.error(error);
    }
}



createCategories();
createCreators();
createDiscoverCards();