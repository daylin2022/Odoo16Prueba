/** @odoo-module **/


import { registerPatch } from '@mail/model/model_core';
import core from 'web.core';

registerPatch({
    name: 'Chatter',
    recordMethods: {
        async prueba(event) {
            console.log(this.models,"mopdeeeeeeeeee")
            await new Promise((resolve) => {
                this.env.services.action.doAction(
            {
                type: "ir.actions.act_window",
                target: "new",
                name: "Send WhatsApp Message",
                res_model: "whatsapp.composer",
                views: [[false, "form"]],
                context: {
                    active_model: this.thread.model,
                    active_id: this.thread.id,
                },
            },
           { onClose: resolve }
        );
            });
            
        },
    },
});


        