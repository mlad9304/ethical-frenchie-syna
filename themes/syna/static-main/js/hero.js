import { Swiper, Autoplay } from 'swiper/dist/js/swiper.esm';
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
Swiper.use([Autoplay]);

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  }
});