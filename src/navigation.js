import { getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      links: [
        {
          text: 'Acta Constitutiva',
          href: getPermalink('/nosotros/actaConstitutiva'),
        },
        {
          text: 'Filosofía Organizacional',
          href: getPermalink('/nosotros/filosofiaOrganizacional'),
        },
        {
          text: 'Estructura Organizacional',
          href: getPermalink('/nosotros/estructuraOrganizacional'),
        },
        {
          text: 'Cultura Organizacional',
          href: getPermalink('/nosotros/culturaOrganizacional'),
        },
      ],
    },
    {
      text: 'Desarrollo',
      links: [
        {
          text: 'CMI',
          href: getPermalink('/desarrollo/cmi'),
        },
        {
          text: 'Herramientas de Gestión Estratégica',
          href: getPermalink('/desarrollo/herramientasDeGestionEstrategica'),
        },
        {
          text: 'Innovación y Tecnología',
          href: getPermalink('/desarrollo/innovacionytecnologia'),
        },
        {
          text: 'Manejo del cambio y la innovación',
          href: getPermalink('/desarrollo/innovacion'),
        },
        {
          text: 'Herramientas de Gestión Operativa en la empresa',
          href: getPermalink('/desarrollo/operativa'),
        },
        {
          text: 'Gestion de capital',
          href: getPermalink('/otras/gestion-capital'),
        },
        {
          text: 'Aspectos legales',
          href: getPermalink('/otras/aspectos-legales'),
        },
        {
          text: 'Responsabilidad social',
          href: getPermalink('/otras/responsabilidad-social'),
        },
        {
          text: 'Implementación de las habilidades digitales',
          href: getPermalink('/otras/habilidades-digitales'),
        },
        {
          text: 'Implementación de tecnologías y tendencias digitales',
          href: getPermalink('/otras/implementacion-tecnologias-tendencias'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Colaboradores',
      links: [
        { text: 'Jurado Santos Alberto Isaac', href: '#' },
        { text: 'Ponce Ortega Miguel Angel ', href: '#' },
        { text: 'Estrada Corona Alexis ', href: '#' },
        { text: 'Sánchez Ramos Jorge Alberto ', href: '#' },
        { text: 'Velazquez Hernandez Aldo ', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Acta Constitutiva', href: '/nosotros/actaConstitutiva' },
        { text: 'Filosofia Organizacional', href: '/nosotros/filosofiaOrganizacional' },
        { text: 'Estructura Organizacional', href: '/nosotros/estructuraOrganizacional' },
        { text: 'Cultura Organizacional', href: '/nosotros/culturaOrganizacional' },
      ],
    },
    {
      title: 'Desarrollo',
      links: [
        { text: 'CMI', href: '/desarrollo/cmi' },
        { text: 'Estrategias de Gestión Estratégica', href: '/desarrollo/herramientasDeGestionEstrategica' },
        { text: 'Innovación y Tecnología', href: '/desarrollo/innovacionytecnologia' },
        { text: 'Manejo del Cambio y la Innovación', href: '/desarrollo/innovacion' },
        { text: 'Herramientas de Gestión Operativa en la Empresa', href: '/desarrollo/operativa' },
      ],
    },
    {
      title: 'Desarrollo',
      links: [
        { text: 'Gestion de Capital', href: '/otras/gestion-capital' },
        { text: 'Aspectos Legales', href: '/otras/aspectos-legales' },
        { text: 'Responsabilidad Social', href: '/otras/responsabilidad-social' },
        { text: 'Implementación de las habilidades digitales', href: '/otras/habilidades-digitales' },
        { text: 'Implementación de tecnologías y tendencias digitales', href: '/otras/implementacion-tecnologias-tendencias' },
      ],
    },
  ],
};
