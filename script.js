
const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: "500Р",
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: "900Р",
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: "300Р",
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: "660Р",
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: "400Р",
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: "200Р",
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: "300Р",
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: "500Р",
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: "1500Р",
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: "800Р",
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: "3500Р",
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: "800Р",
    img: "./img/12.jpeg",
  },
];

const template = document.querySelector('#item-template');
const clone = template.content.cloneNode(true);
const list = clone.querySelector('.shop-item');
const container = document.querySelector('#shop-items');
const button = document.querySelector('#search-btn');
const input = document.querySelector('#search-input');
const elem = document.querySelector('#nothing-found');

items.forEach(i => {
  let newClone = list.cloneNode(true)
  newClone.querySelector('h1').textContent = i.title;
  newClone.querySelector('p').textContent = i.description;
  newClone.querySelector('.price').textContent = i.price;
  newClone.querySelector('img').src = i.img;

  i.tags.forEach(i => {
    const element = document.createElement('span');
    element.classList.add('tag');
    element.textContent = i;
    newClone.querySelector('.tags').append(element);
  })
  container.append(newClone);
})

button.addEventListener('click', function () {
  const messageText = items.filter(item => item.title.toLowerCase().includes(input.value.trim().toLowerCase()));
  container.innerHTML = '';
  const item = elem;
  item.textContent = 'Ничего не найдено';

  messageText.forEach(obj => {
    let newCard = list.cloneNode(true)
    newCard.querySelector('h1').textContent = obj.title;
    newCard.querySelector('p').textContent = obj.description;
    newCard.querySelector('.price').textContent = obj.price;
    newCard.querySelector('img').src = obj.img;

    obj.tags.forEach(i => {
      const tag = document.createElement('span');
      tag.classList.add('tag');
      tag.textContent = i;
      newCard.querySelector('.tags').append(tag);
    })

    elem.innerHTML = ''
    container.append(newCard);  
  })

  input.value = ''
})

