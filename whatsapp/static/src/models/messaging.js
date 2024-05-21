/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { many } from '@mail/model/model_field';

registerPatch({
    name: 'Messaging',
    fields: {
        /**
         * All pinned livechats that are known.
         */
        pinnedWhatsapp: many('Thread', {
            inverse: 'messagingAsPinnedWhatsapp',
            readonly: true,
        }),
    },
});
