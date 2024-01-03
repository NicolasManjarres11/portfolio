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
import Project0 from '../assets/img/projects/prueba.webp'
import Project1 from '../assets/img/projects/pokedex.webp'
import Project2 from '../assets/img/projects/solarsystem.webp'
import Project3 from '../assets/img/projects/imashare.png'

// import skills onn

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const iconSocial = [
    {
        icon: <FontAwesomeIcon icon={faGithub}/>
    },
]

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

    {image: Project3,
        tittle: 'Imashare',
        description: 'Red social basada en imágenes donde se utilizó Nodejs, Express y Mongodb para construir su lógica, además de utilizar conceptos de frontend tales como Bootstrap, Handlebars, Jquery y otros más. Podemos ver, comentar, agregar, eliminar y darle like a imágenes. (Link no disponible por ahora)',
        skill: [node, mongo, javascript, html],
        code: 'https://github.com/NicolasManjarres11/ImaShare.git',
    },
    {
        image: Project2,
        tittle: 'Sistema solar',
        description: 'Proyecto realizado a base de HTML, CSS y Javascript, para mostrar de una manera muy simple el sistema solar, utilizando métodos de manipulación de DOM, importación de imágenes, animaciones con CSS y demás',
        skill: [html, css, javascript],
        code: 'https://github.com/NicolasManjarres11/solar-system.git',
        live:'https://nicolasmanjarres11.github.io/solar-system/'

    },
    {
        image: Project1,
        tittle: 'Pokedex',
        description: 'Página de pókedex la cual se realizó con HTML, CSS y Javascript, esto con el fin de aprender a consumir una API por medio de fecth y permitir que la página pueda filtrar por categorías; en este caso, por tipo de elemento del pokemon',
        skill: [html, css, javascript],
        code: 'https://github.com/NicolasManjarres11/pokedex',
        live:'https://nicolasmanjarres11.github.io/pokedex/'

    },
    {
        image: Project0,
        tittle: 'Javascript práctico',
        description: 'Proyecto realizado a base de HTML, CSS y Javascript, utilizando métodos de manipulación de DOm e importación de imágenes',
        skill: [html, css, javascript],
        code: 'https://github.com/NicolasManjarres11/curso-frontend-developer-javascript-practico',
        live:'https://nicolasmanjarres11.github.io/curso-frontend-developer-javascript-practico/'
    },
    
]

export const exp = [
    {
        cargo: "Técnico de soporte nvl 2",
        empresa: "Reserco ISIT",
        description:"Soporte técnico para Banco Popular en requerimientos y solicitudes generadas por los usuarios del banco para instalación de programas, software especializado, acompañamientos técnicos, alistamiento de equipos, migración de equipos, copias de seguridad, traslado de equipos, instalación de periféricos, mantenimientos, entre otros.",
        fecha:"Oct 2021 - Laborando actualmente",
        
    },
    {
        cargo: "Asesor soporte cliente",
        empresa: "Carvajal S.A.",
        description:"Soporte a facturación electrónica revisando las facturas en XML realizadas por las empresas. se revisaba de acuerdo al estándar otorgado por la DIAN. Se utilizaba MySQL para consultas y manejo de Querys, se realizaban informes, se le indicaba al usuario las correccones a realizar, entre otras funciones.",
        fecha:"Jul 2021 - Oct 2021",
        
    },
    {
        cargo: "Soporte técnico",
        empresa: "Universidad central",
        description:"Soporte técnico al área administrativa de la Universidad Central, donde se atendían solicitudes e incidentes tanto de hardware como de software, instalación de equipos nuevos, mantenimientos, instalación de programas y software especializado y demás.",
        inicio: "28/10/2020",
        fin: "24/05/2021",
        fecha: "Oct 2020 - May 2021"
        
    },
    {
        cargo: "Soporte técnico",
        empresa: "Gimnasio Colombo Británico",
        description:"Soporte técnico al área administrativa y académica del Gimnasio Colombo Británico, atendiendo solicitudes de software y hardware, incluyendo instalación de equipos, de programas y software especializado, soporte de impresión, administración de Acces point y mantenimiento de equipos de cómputo.",
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
        titulo: 'Desarrollo de software y aplicativos web',
        instituto: 'Universidad tecnológica de Pereira',
        fecha: '2021 - 2022'
    },
    {
        titulo: 'ITIL Foundation Certificate in IT Service Management V4',
        instituto: 'PeopleCert',
        fecha: '2022'
    },
]