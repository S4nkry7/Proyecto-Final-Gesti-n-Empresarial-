import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
          href: getPermalink('/desarrollo/culturaOrganizacional'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
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
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
};
