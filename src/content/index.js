import { createContext } from 'react';

const AVATAR = Symbol('AVATAR');
const VCU = Symbol('VCU');
const SAGE = Symbol('SAGE');
const PIVOTAL = Symbol('PIVOTAL');
const VMWARE = Symbol('VMWARE');
const FALLBACK = Symbol('DONTEXPORTME');

export const ALL_CONTENT = [ AVATAR, VCU, SAGE, PIVOTAL, VMWARE, ];

export const ContentContext = createContext(null);

// dev QoL
const withFallback = {
  get: (content, symbol) => content[symbol] || content[FALLBACK] || {}
}

export const IMAGES = new Proxy({
  [AVATAR]: { imgSrc: '/avatar.jpg' },
  [VCU]: { imgSrc: '/vcu.png' },
  [SAGE]: { imgSrc: '/sage.png' },
  [PIVOTAL]: { imgSrc: '/pivotal.png' },
  [VMWARE]: { imgSrc: '/vmware.png' },
  [FALLBACK]: { imgSrc: '' },
}, withFallback);

export const COLORS = new Proxy({
  [AVATAR]: { backgroundColor: 'rgb(130, 49, 35)', textColor: 'white', glowColor: 'rgb(20, 12, 14)' },
  [VCU]: { backgroundColor: 'rgb(252, 171, 18)', textColor: 'black', glowColor: 'black' },
  [SAGE]: { backgroundColor: 'rgb(3, 38, 56)', textColor: 'white', glowColor: 'rgb(29, 218, 9)' },
  [PIVOTAL]: { backgroundColor: '#b2f1e8', textColor: 'black', glowColor: 'rgb(22, 169, 144)' },
  [VMWARE]: { backgroundColor: 'rgb(9, 86, 127)', textColor: 'white', glowColor: 'white' },
  [FALLBACK]: { backgroundColor: 'white', textColor: 'black', glowColor: 'black' },
}, withFallback);

export const TITLES = new Proxy({
  [AVATAR]: { title: 'Majid Razvi', subtitle: '❤️ Denver, CO' },
  [VCU]: { title: 'VCU', subtitle: '🎓 Philosophy' },
  [SAGE]: { title: 'Sage', subtitle: '💸 Software Engineer' },
  [PIVOTAL]: { title: 'Pivotal', subtitle: '☁️ Software Engineer' },
  [VMWARE]: { title: 'VMware', subtitle: '☸︎ Engineering Manager' },
  [FALLBACK]: { title: '', subtitle: '' },
}, withFallback);

export const DESCRIPTIONS = new Proxy({
  [AVATAR]: { description: `Lorem ipsum dolor amet hammock actually waistcoat lomo taxidermy raclette, chillwave sartorial leggings drinking vinegar. Master cleanse fashion axe coloring book authentic.` },
  [VCU]: { description: `Pork belly fashion axe pitchfork, etsy hot chicken marfa yr. 3 wolf moon asymmetrical neutra unicorn tote bag kale chips. Taxidermy before they sold out cliche, synth kinfolk irony brunch williamsburg PBR&B authentic aesthetic pop-up deep v cloud bread.` },
  [SAGE]: { description: `Tacos migas meh hella typewriter photo booth franzen. Letterpress vape roof party, cred irony kickstarter pour-over direct trade 90's tumeric photo.` },
  [PIVOTAL]: { description: `Kogi next level chia edison bulb enamel pin prism taiyaki marfa. YOLO polaroid hot chicken, williamsburg direct trade vape four loko. Butcher chia pabst, tacos four dollar toast.` },
  [VMWARE]: { description: `Seitan hexagon tbh,` },
  [FALLBACK]: { description: '' },
}, withFallback) 