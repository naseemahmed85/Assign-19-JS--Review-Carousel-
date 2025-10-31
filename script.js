const reviews = [
    {
        name: 'Susan Smith',
        job: 'Web Developer',
        img: './Assets/Susan-Smith.jpeg',
        text: '“Hi, I’m Susan Smith, a passionate web developer who loves turning creative ideas into functional websites. I enjoy writing clean, efficient code and constantly learning new technologies to improve user experience and design.”'
    },

    {
        name: 'Diana',
        job: 'Web Designer',
        img: './Assets/Diana.jpeg',
        text: '“Hi, I’m Diana, a creative web designer who loves blending colors, layouts, and typography to craft unique websites. I focus on creating designs that are both visually appealing and easy to use for everyone.”'
    },

    {
        name: 'Jon',
        job: 'Web Developer',
        img: './Assets/Jon.jpeg',
        text: '“Hi, I’m Jon, a dedicated web developer who enjoys building modern, responsive websites. I love solving coding challenges and turning ideas into real, functional projects that provide a great user experience.”'
    }
];

const title = document.createElement('h2');
title.textContent = 'Our Reviews';
title.style.margin = '0 auto';
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.marginTop = '10vh';
title.style.fontSize = '4.5vw';
document.body.appendChild(title);

const underLine = document.createElement('div');
underLine.style.width = '5vw';
underLine.style.height = '1vh';
underLine.style.margin = '0 auto';
underLine.style.marginTop = '5px';
underLine.style.marginBottom = '10px';
underLine.style.background = '#49a6e9';
underLine.style.border = 'none';
underLine.style.borderRadius = '20px'
document.body.appendChild(underLine);

let currentItem = 0;

const container = document.createElement('div');
container.style.width = '40vw';
container.style.margin = '30px auto';
container.style.padding = '20px';
container.style.textAlign = 'center';
container.style.borderRadius = '10px';
container.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.1)';
container.style.background = '#fff';
document.body.style.background = '#f1f5f8';
document.body.style.fontFamily = 'Arial, sans-serif';

const imgContainer = document.createElement('div');
imgContainer.style.position = 'relative';
imgContainer.style.width = '150px';
imgContainer.style.height = '150px';
imgContainer.style.margin = '0 auto';
imgContainer.style.borderRadius = '50%';
imgContainer.style.border = '5px solid #49a6e9';
imgContainer.style.overflow = 'hidden';
container.appendChild(imgContainer);

const personImg = document.createElement('img');
personImg.style.width = '100%';
personImg.style.height = '100%';
personImg.style.objectFit = 'cover';
imgContainer.appendChild(personImg);

const quote = document.createElement('span');
quote.innerHTML = '<i class="fa-solid fa-quote-right"></i>';
quote.style.position = 'absolute';
quote.style.top = '10px';
quote.style.left = '10px';
quote.style.width = '35px';
quote.style.height = '35px';
quote.style.borderRadius = '50%';
quote.style.background = '#49a6e9';
quote.style.color = '#fff';
quote.style.display = 'flex';
quote.style.alignItems = 'center';
quote.style.justifyContent = 'center';
quote.style.fontSize = '24px';
imgContainer.appendChild(quote);

const author = document.createElement('h4');
author.style.fontSize = '2rem'
author.style.marginTop = '1rem'
container.appendChild(author);

const job = document.createElement('p');
job.style.color = '#49a6e9';
job.style.fontWeight = 'bold';
job.style.fontSize = '1.2rem';
job.style.marginBottom = '5px'
container.appendChild(job);

const info = document.createElement('p');
info.style.fontSize = '16px';
info.style.fontWeight = '10px';
container.appendChild(info);

const btnContainer = document.createElement('div');
btnContainer.style.marginTop = '10px';
container.appendChild(btnContainer);

const prevBtn = document.createElement('button');
prevBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
prevBtn.style.margin = '5px';
prevBtn.style.padding = '8px 12px';
prevBtn.style.border = 'none';
prevBtn.style.background = '#49a6e9';
prevBtn.style.color = '#fff';
prevBtn.style.borderRadius = '5px';
prevBtn.style.cursor = 'pointer';
btnContainer.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
nextBtn.style.margin = '5px';
nextBtn.style.padding = '8px 12px';
nextBtn.style.border = 'none';
nextBtn.style.background = '#49a6e9';
nextBtn.style.color = '#fff';
nextBtn.style.borderRadius = '5px';
nextBtn.style.cursor = 'pointer';
btnContainer.appendChild(nextBtn);

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Surprise Me';
randomBtn.style.display = 'block';
randomBtn.style.margin = '15px auto';
randomBtn.style.padding = '8px 16px';
randomBtn.style.background = '#222';
randomBtn.style.color = '#fff';
randomBtn.style.border = 'none';
randomBtn.style.borderRadius = '5px';
randomBtn.style.cursor = 'pointer';
container.appendChild(randomBtn);

document.body.appendChild(container);

function showPerson(index) {
    const item = reviews[index];
    personImg.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

showPerson(currentItem);

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem)
})
