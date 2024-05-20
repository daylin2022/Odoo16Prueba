/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PhoneField, phoneField, formPhoneField } from "@web/views/fields/phone/phone_field";
import { SendWhatsAppButton } from "@whatsapp/components/whatsapp_button/whatsapp_button";

patch(PhoneField,"whatsapp.PhoneField", {
    components: {
        ...PhoneField.components,
        SendWhatsAppButton,
    },
    defaultProps: {
        ...PhoneField.defaultProps,
        enableWhatsAppButton: true,
    },
    props: {
        ...PhoneField.props,
        enableWhatsAppButton: { type: Boolean, optional: true },
    },
});

const patchDescr = {
    extractProps({ options }) {
        const props = super.extractProps(...arguments);
        props.enableWhatsAppButton = options.enable_whatsapp;
        return props;
    },
};

