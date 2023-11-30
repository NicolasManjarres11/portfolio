// Import Skills

import SkillImg1 from '../assets/img/skills/html5.webp';
import SkillImg2 from '../assets/img/skills/css3.webp';
import SkillImg3 from '../assets/img/skills/js.webp';
import SkillImg4 from '../assets/img/skills/nodejs.webp';
import SkillImg5 from '../assets/img/skills/tailwind.webp';
import SkillImg6 from '../assets/img/skills/git.webp';
import SkillImg7 from '../assets/img/skills/reactjs.webp';
import SkillImg8 from '../assets/img/skills/java.webp';
import Skillimg9 from '../assets/img/skills/python.webp';
import Skillimg10 from '../assets/img/skills/mongodb.webp';
import Skillimg11 from '../assets/img/skills/mysql.webp';

//Import projects

import Projectimgproof from '../assets/img/logo2.webp'
import Project0 from '../assets/img/projects/prueba.png'
import Project1 from '../assets/img/projects/pokedex.png'

// import skills on 

import html from '../assets/svg/html.svg'
import javascript from '../assets/svg/javascript-js.svg';
import reactSvg from '../assets/svg/react.svg';

export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
    {
        image: Skillimg9,
    },
    {
        image: Skillimg10,
    },
    {
        image: Skillimg11,
    },
    
];

export const projects = [
    /* {
        image: Projectimgproof,
        tittle: 'Ejemplo',
        description: 'Este es un proyecto de ejemplo',
        skills: {SkillImg1, SkillImg2, SkillImg3, SkillImg4},
        code: 'linkgithub',
        live:'linkpage'

    },  */
    {
        image: Project0,
        tittle: 'Javascript práctico',
        description: 'Proyecto realizado a base de HTML, CSS y Javascript, utilizando métodos de manipulación de DOm e importación de imágenes',
        skill: [javascript, reactSvg, html],
        code: 'https://github.com/NicolasManjarres11/curso-frontend-developer-javascript-practico',
        live:'https://nicolasmanjarres11.github.io/curso-frontend-developer-javascript-practico/'
    },
    {
        image: Project1,
        tittle: 'Pokedex',
        description: 'Página de pókedex la cual se realizó con HTML, CSS y Javascript, esto con el fin de aprender a consumir una API por medio de fecth y permitir que la página pueda filtrar por categorías; en este caso, por tipo de elemento del pokemon',
        skill: [javascript, html],
        code: 'https://github.com/NicolasManjarres11/pokedex',
        live:'https://nicolasmanjarres11.github.io/pokedex/'

    },
]