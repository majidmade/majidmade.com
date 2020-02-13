const AVATAR = Symbol('AVATAR');
const VCU = Symbol('VCU');
const SAGE = Symbol('SAGE');
const PIVOTAL = Symbol('PIVOTAL');

export default [ AVATAR, VCU, SAGE, PIVOTAL ]

export const IMAGES = {
  [AVATAR]: { imgSrc: '/avatar.jpg' },
  [VCU]: { imgSrc: '/vcu.png' },
  [SAGE]: { imgSrc: '/sage.png' },
  [PIVOTAL]: { imgSrc: '/pivotal.png' },
};

export const COLORS = {
  [AVATAR]: { backgroundColor: 'rgb(130, 49, 35)', textColor: 'white', glowColor: 'rgb(20, 12, 14)' },
  [VCU]: { backgroundColor: 'rgb(252, 171, 18)', textColor: 'black', glowColor: 'black' },
  [SAGE]: { backgroundColor: 'rgb(3, 38, 56)', textColor: 'white', glowColor: 'rgb(29, 218, 9)' },
  [PIVOTAL]: { backgroundColor: '#b2f1e8', textColor: 'black', glowColor: 'rgb(22, 169, 144)' },
}

export const TITLES = {
  [AVATAR]: { title: 'Majid Razvi', subtitle: '❤️ Denver, CO' },
  [VCU]: { title: 'VCU', subtitle: '🎓 Philosophy' },
  [SAGE]: { title: 'Sage', subtitle: '💸 Software Engineer' },
  [PIVOTAL]: { title: 'Pivotal', subtitle: '☁️ Software Engineer' },
}