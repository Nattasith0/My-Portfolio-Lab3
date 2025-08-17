// src/data/portfolioData.js
import project1Img from '/src/assets/images/project1.png';
import project2Img from '/src/assets/images/project2.png';
import project3Img from '/src/assets/images/project3.png';
import project4Img from '/src/assets/images/project4.png';
import project5Img from '/src/assets/images/project5.png';

export const CONTACT = {
    email: 'Nattasitth_ma67@live.ac.th',
    phone: '+66 12 345 6789',
    location: 'Chiang Mai, Thailand',
    socials: {
        github: 'https://github.com/Nattasith0',
        linkedin: 'https://www.linkedin.com/in/yourname',
        twitter: 'https://twitter.com/yourname',
    },
};

export const PROJECTS = [
    {
        title: 'To-Do-App',
        description: 'You can record data, delete, and edit it.',
        image: project1Img,
        demo: 'https://nattasith0.github.io/My_To-Do_App/',
        github: 'https://github.com/Nattasith0/My_To-Do_App',
    },
    {
        title: 'Weather-App',
        description:
            'Can forecast the weather for each area as well as specify the weather forecast in advance.',
        image: project2Img,
        demo: 'https://nattasith0.github.io/my-weather-app/',
        github: 'https://github.com/Nattasith0/my-weather-app',
    },
    {
        title: 'Portfolio-Website',
        description: 'A website that recommends about me.',
        image: project3Img,
        demo: 'https://nattasith0.github.io/portfolio-website/',
        github: 'https://github.com/Nattasith0/portfolio-website',
    },
    {
        title: 'Mini-Ecommerce',
        description: 'The website with product details.',
        image: project4Img,
        demo: 'https://nattasith0.github.io/mini-ecommerce-collaboration/',
        github: 'https://github.com/Nattasith0/mini-ecommerce-collaboration',
    },
    {
        title: 'Portfolio-Website-Team',
        description: 'A website that recommends about me and my friends.',
        image: project5Img,
        demo: 'https://nattasith0.github.io/portfolio-website-collaborations/',
        github: 'https://github.com/Nattasith0/portfolio-website-collaborations',
    },
];
