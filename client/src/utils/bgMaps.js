export default function() {
  const random = Math.floor(Math.random() * 10) + 1;
  document.querySelector('#root').setAttribute('style', `background-image: linear-gradient(#FFFFFF88, #FFFFFF88), url("/src/assets/background_maps/map${random}.jpg"); background-size: cover; background-position: center`);
}