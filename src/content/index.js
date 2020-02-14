const AVATAR = Symbol('AVATAR');
const VCU = Symbol('VCU');
const SAGE = Symbol('SAGE');
const PIVOTAL = Symbol('PIVOTAL');
const FALLBACK = Symbol('DONTEXPORTME');

export default [ AVATAR, VCU, SAGE, PIVOTAL ]

// dev QoL
const withFallback = {
  get: (content, symbol) => content[symbol] || content[FALLBACK] || {}
}

export const IMAGES = new Proxy({
  [AVATAR]: { imgSrc: '/avatar.jpg' },
  [VCU]: { imgSrc: '/vcu.png' },
  [SAGE]: { imgSrc: '/sage.png' },
  [PIVOTAL]: { imgSrc: '/pivotal.png' },
  [FALLBACK]: { imgSrc: '' },
}, withFallback);

export const COLORS = new Proxy({
  [AVATAR]: { backgroundColor: 'rgb(130, 49, 35)', textColor: 'white', glowColor: 'rgb(20, 12, 14)' },
  [VCU]: { backgroundColor: 'rgb(252, 171, 18)', textColor: 'black', glowColor: 'black' },
  [SAGE]: { backgroundColor: 'rgb(3, 38, 56)', textColor: 'white', glowColor: 'rgb(29, 218, 9)' },
  [PIVOTAL]: { backgroundColor: '#b2f1e8', textColor: 'black', glowColor: 'rgb(22, 169, 144)' },
  [FALLBACK]: { backgroundColor: 'white', textColor: 'black', glowColor: 'black' },
}, withFallback);

export const TITLES = new Proxy({
  [AVATAR]: { title: 'Majid Razvi', subtitle: '❤️ Denver, CO' },
  [VCU]: { title: 'VCU', subtitle: '🎓 Philosophy' },
  [SAGE]: { title: 'Sage', subtitle: '💸 Software Engineer' },
  [PIVOTAL]: { title: 'Pivotal', subtitle: '☁️ Software Engineer' },
  [FALLBACK]: { title: '', subtitle: '' },
}, withFallback);