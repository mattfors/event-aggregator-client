import './styles.css';
import Handlebars from 'handlebars';
import data from './assets/grouped_output.json';
import { format } from 'date-fns';
import templateEvent from './templates/event.hbs';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import '@shoelace-style/shoelace/dist/components/details/details';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/drawer/drawer';

setBasePath('/shoelace');

Handlebars.registerHelper('formatDate', function(dateString) {
    return format(new Date(dateString), 'M/d EEEE');
});

Handlebars.registerHelper('formatTime', function(dateString) {
    return format(new Date(dateString), 'h:mm a');
});

const template = Handlebars.compile(templateEvent);
const html = template({ events: data });
console.log(data)

const mainContent = document.getElementById('main-content');
mainContent.innerHTML = html;

const container = document.querySelector('.details-group-example');
const menuToggle = document.getElementById('menu-toggle');
const drawer = document.querySelector('sl-drawer');

menuToggle.addEventListener('click', () => {
    drawer.open = !drawer.open;
});

container.addEventListener('sl-show', event => {
    if (event.target.localName === 'sl-details') {
        [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.querySelector('sl-drawer');
    drawer.hidden = false;
});
