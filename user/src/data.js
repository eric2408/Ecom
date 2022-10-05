import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';
import sliderOne from './video/virtual.mp4'
import sliderThree from './video/robo.mp4'
import sliderTwo from './img/astro.png'

export const sliderItems = [
    {
      id: 1,
      vid: sliderThree,
    },
    {
      id: 2,
      vid: sliderOne,
    },
    {
      id: 3,
      img: sliderTwo,
    },
  ];

  export const categories = [
    {
      id: 1,
      img: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/09/Oculus-Quest-gets-Meta-Quest-2-hand-tracking-2.jpg",
      title: "VR GEARS",
      cat:"VR GEARS"
    },
    {
      id: 2,
      img: "https://gmedia.playstation.com/is/image/SIEPDC/psvr-games-keyart-02-en-11jan22?$facebook$",
      title: "VR GAMES",
      cat:"Games"
    },
    {
      id: 3,
      img: "https://www.beatsbydre.com/content/dam/beats/web/product/earphones/powerbeats-pro/plp/bbd.plpasset.earbuds.pbpro-v2.jpg.large.2x.jpg",
      title: "ACCESSORIES",
      cat:"Accessories"
    },
  ];




  
export const featureData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Express Delivery",
        info: "Ships within 24 Hours",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Safe Purchases",
        info: "Full Refund",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Exciting Deals",
        info: "On all prepaid orders",
    },
    {
        id: 4,
        icon: <FaCreditCard />,
        title: "Secure Payments",
        info: "Through Stripe and Paypal",
    },
];