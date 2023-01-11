import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faUser, faUpload, faPaperPlane,
    faHeadphones, faCode, faHouseChimney, faChartLine, faSackDollar, faTruckFast, faUtensils, faFire,
    faStar, faBuilding, faCreditCard, faBriefcase,
    faChevronDown, faArrowUpFromBracket, faMagnifyingGlass, faArrowRight, faLocationDot, faClock, faChevronRight, faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

library.add(faUser, faUpload, faPaperPlane, faHeadphones, faCode, faHouseChimney, faChartLine, faSackDollar, faTruckFast, faUtensils, faFire, faStar, faBuilding, faCreditCard, faBriefcase, faChevronDown, faArrowUpFromBracket, faMagnifyingGlass, faArrowRight, faLocationDot, faClock, faChevronRight, faChevronLeft);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.component('font-awesome-layer-text', FontAwesomeLayersText)
.mount('#app');