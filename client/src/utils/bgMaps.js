import bg01 from '../assets/background_maps/map1.jpg'
import bg02 from '../assets/background_maps/map2.jpg'
import bg03 from '../assets/background_maps/map3.jpg'
import bg04 from '../assets/background_maps/map4.jpg'
import bg05 from '../assets/background_maps/map5.jpg'
import bg06 from '../assets/background_maps/map6.jpg'
import bg07 from '../assets/background_maps/map7.jpg'
import bg08 from '../assets/background_maps/map8.jpg'
import bg09 from '../assets/background_maps/map9.jpg'
import bg10 from '../assets/background_maps/map10.jpg'

export default function() {
  const maps = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09, bg10]
  const random = Math.floor(Math.random() * 10);
  document.querySelector('#root').setAttribute('style', `background-image: linear-gradient(#FFFFFF88, #FFFFFF88), url(${maps[random]}); background-size: cover; background-position: center`);
}