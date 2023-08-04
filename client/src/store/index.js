import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: 'rgb(293,189,72)',
    // color: ' #EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});
export default state;
