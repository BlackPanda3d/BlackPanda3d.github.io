const moreCards = [
    { imgSrc: './assets/market/1.png', title: 'Foxy Life', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/2.png', title: 'Cat From Future', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/3.png', title: 'Psycho Dog', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/4.png', title: 'Designer Bear', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/5.png', title: 'Dancing Robot 0375', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/6.png', title: 'Dancing Robot 0356', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/7.png', title: 'Dancing Robot 0321', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/8.png', title: 'Dancing Robot 0512', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' },
    { imgSrc: './assets/market/9.png', title: 'Dancing Robot 0024', author: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 wETH' }
];

function createMoreCards() {
    const container = document.querySelector('.more__cards');
    const posterImg = document.querySelector('.poster__img img');
    try {
        moreCards.forEach(card => {
            const cardHTML = `
                            <div class="more__card">
                                <div class="more__img">
                                    <img src="${card.imgSrc}" alt="img">
                                </div>
                                <div class="more-stat">
                                    <h5 class="more-stat__title">${card.title}</h5>
                                    <div class="more-stat__info">
                                        <div class="more-stat__avatar">
                                            <img src="./assets/media/avatar.png" alt="">
                                        </div>
                                        <h6>${card.author}</h6>
                                    </div>
                                    <div class="more-stat__price">
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

        const cards = container.querySelectorAll('.more__card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.querySelector('.more__img img').getAttribute('src');
                posterImg.setAttribute('src', imgSrc);
            });
        });
    } catch (error) {
        console.error(error);
    }
}




createMoreCards();