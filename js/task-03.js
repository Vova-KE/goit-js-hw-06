const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

const createListItem = images.map(image => {
  return `<li class = "list__item">
      <img
        src = ${image.url},
        alt = '${image.alt}',
        width = 200,
        height = 100,
        class = "list__img",
      >
    </li>`
}
).join(' ');
  
list.insertAdjacentHTML('afterbegin', createListItem)

list.style.cssText = `display: grid; grid-template-columns: 300px 300px 300px;`
list.style.listStyleType = 'none';