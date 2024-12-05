import './styles.css';
import Handlebars from 'handlebars';
import data from './assets/data.json';
import { format } from 'date-fns';
import templateEvent from './templates/event.hbs';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import '@shoelace-style/shoelace/dist/components/details/details';

setBasePath('/node_modules/@shoelace-style/shoelace/dist');

Handlebars.registerHelper('formatDate', function(dateString) {
    return format(new Date(dateString), 'MMMM do, yyyy h:mm a');
});

const template = Handlebars.compile(templateEvent);
const html = template({ events: data });

document.body.innerHTML = html;
