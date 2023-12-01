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
import css from '../assets/svg/csss.svg'
import javascript from '../assets/svg/javascript-js.svg';
import reactSvg from '../assets/svg/react.svg';
import node from '../assets/svg/node.svg';
import git from '../assets/svg/git.svg';
import java from '../assets/svg/java.svg';
import python from '../assets/svg/python.svg';
import mongo from '../assets/svg/mongo.svg';
import mysql from '../assets/svg/mysql.svg';

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
        skill: [html, css, javascript],
        code: 'https://github.com/NicolasManjarres11/curso-frontend-developer-javascript-practico',
        live:'https://nicolasmanjarres11.github.io/curso-frontend-developer-javascript-practico/'
    },
    {
        image: Project1,
        tittle: 'Pokedex',
        description: 'Página de pókedex la cual se realizó con HTML, CSS y Javascript, esto con el fin de aprender a consumir una API por medio de fecth y permitir que la página pueda filtrar por categorías; en este caso, por tipo de elemento del pokemon',
        skill: [html, css, javascript],
        code: 'https://github.com/NicolasManjarres11/pokedex',
        live:'https://nicolasmanjarres11.github.io/pokedex/'

    },
]

export const exp = [
    {
        cargo: "Técnico de soporte nvl 2",
        empresa: "Reserco ISIT",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        fecha: "Oct 2021 - laborando actualmente",
        
    },
    {
        cargo: "Asesor soporte cliente",
        empresa: "Carvajal S.A.",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        fecha:"Jul 2021 - Oct 2021",
        
    },
    {
        cargo: "Soporte técnico",
        empresa: "Universidad central",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        inicio: "28/10/2020",
        fin: "24/05/2021",
        fecha: "Oct 2020 - May 2021"
        
    },
    {
        cargo: "Soporte técnico",
        empresa: "Gimnasio Colombo Británico",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        inicio: "31/08/2017",
        fin: "09/02/2018",
        fecha: "Aug 2017 - Feb 2018"
        
    },
]

export const estudios =[

    {
        titulo: 'Técnico en sistemas',
        instituto: 'Servicio Nacional de Aprendizaje SENA',
        fecha: '2017 - 2018'
    },
    {
        titulo: 'Tecnólogo en sistemas',
        instituto: 'Servicio Nacional de Aprendizaje SENA',
        fecha: '2019 - 2021'
    },
    {
        titulo: 'Programación y desarrollo de aplicativos web',
        instituto: 'Universidad tecnológica de Pereira',
        fecha: '2021 - 2022'
    },
    {
        titulo: 'ITIL Foundation Certificate in IT Service Management V4',
        instituto: 'PeopleCert',
        fecha: '2022'
    },
]