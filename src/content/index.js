const SECTIONS = {
  AVATAR: Symbol('AVATAR'),
  VCU: Symbol('VCU'),
  SAGE: Symbol('SAGE'),
  PIVOTAL: Symbol('PIVOTAL'),
}

export default SECTIONS;

export const BAUBLES = {
  [SECTIONS.AVATAR]: { imgSrc: '/avatar.jpg', accentColor: 'rgb(187, 76, 67)' },
  [SECTIONS.VCU]: { imgSrc: '/vcu.png', accentColor: 'rgb(252, 171, 18)' },
  [SECTIONS.SAGE]: { imgSrc: '/sage.png', accentColor: 'rgb(3, 38, 56)' },
  [SECTIONS.PIVOTAL]: { imgSrc: '/pivotal.png', accentColor: '#b2f1e8' },
};
