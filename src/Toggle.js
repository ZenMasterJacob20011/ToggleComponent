import {Formio} from "@formio/js";

const Field = Formio.Components.components.field;
export default class Toggle extends Field {

    static schema(...extend) {
        return Field.schema({
            type: 'toggle',
            key: 'toggle',
            label: 'Toggle'
        }, ...extend);
    }

    static get builderInfo() {
        return {
            title: 'Toggle',
            icon: 'toggle-on',
            group: 'basic',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: Toggle.schema()
        }
    }

    get defaultSchema() {
        return Toggle.schema();
    }

    get emptyValue() {
        return false;
    }

    render() {
        return super.render(`
            <label class="switch">
                <input ref="toggle" type="checkbox">
                <span class="slider"></span>
            </label>
        `);
    }

    attach(element) {

        this.loadRefs(element, {
            'toggle': 'single'
        });

        this.addEventListener(this.refs.toggle, 'click', () => {
            this.updateValue();
        });

        return super.attach(element);
    }

    updateValue() {
        super.updateValue(this.refs.toggle.checked);
    }
}