const SECTIONS = {
  AVATAR: Symbol('AVATAR'),
  VCU: Symbol('VCU'),
  SAGE: Symbol('SAGE'),
  PIVOTAL: Symbol('PIVOTAL'),
}

export default SECTIONS;

export const BAUBLES = {
  [SECTIONS.AVATAR]: { imgSrc: '/avatar.jpg', accentColor: 'rgb(31, 17, 22)' },
  [SECTIONS.VCU]: { imgSrc: '/vcu.png', accentColor: 'rgb(252, 171, 18)' },
  [SECTIONS.SAGE]: { imgSrc: '/sage.png', accentColor: 'rgb(3, 38, 56)' },
  [SECTIONS.PIVOTAL]: { imgSrc: '/pivotal.png', accentColor: '#b2f1e8' },
};

export const TITLES = {
  [SECTIONS.AVATAR]: { title: 'Majid Razvi', subtitle: '' },
  [SECTIONS.VCU]: { title: 'Virginia Commonwealth University', subtitle: 'Philosophy & Religious Studies' },
  [SECTIONS.SAGE]: { title: 'Sage Payment Solutions', subtitle: 'Sotware Engineer' },
  [SECTIONS.PIVOTAL]: { title: 'Pivotal', subtitle: 'Software Engineer' },
}