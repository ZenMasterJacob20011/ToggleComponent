import {Formio} from "@formio/js";
import Toggle from "./Toggle.js";
import './index.css';
Formio.use({
    components: {
        toggle: Toggle
    }
});

// Formio.createForm(document.getElementById('formio'), {
//     components: [
//         {
//             type: 'toggle'
//         }
//     ]
// }, {});

Formio.builder(document.getElementById('builder'), {}, {});