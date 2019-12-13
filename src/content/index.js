const AVATAR = Symbol('AVATAR');
const VCU = Symbol('VCU');
const SAGE = Symbol('SAGE');
const PIVOTAL = Symbol('PIVOTAL');

export default { AVATAR, VCU, SAGE, PIVOTAL }

export const IMAGES = {
  [AVATAR]: { imgSrc: '/avatar.jpg' },
  [VCU]: { imgSrc: '/vcu.png' },
  [SAGE]: { imgSrc: '/sage.png' },
  [PIVOTAL]: { imgSrc: '/pivotal.png' },
};

export const COLORS = {
  [AVATAR]: { backgroundColor: 'rgb(31, 17, 22)', textColor: 'white' },
  [VCU]: { backgroundColor: 'rgb(252, 171, 18)', textColor: 'black' },
  [SAGE]: { backgroundColor: 'rgb(3, 38, 56)', textColor: 'white' },
  [PIVOTAL]: { backgroundColor: '#b2f1e8', textColor: 'black' },
}

export const TITLES = {
  [AVATAR]: { title: 'Majid Razvi' },
  [VCU]: { title: 'VCU' },
  [SAGE]: { title: 'Sage' },
  [PIVOTAL]: { title: 'Pivotal' },
}