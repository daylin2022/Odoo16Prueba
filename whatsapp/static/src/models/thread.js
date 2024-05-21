/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { one } from '@mail/model/model_field';
import { clear } from '@mail/model/model_field_command';

registerPatch({
    name: 'Thread',
    recordMethods: {
        /**
         * @override
         */

    },
    fields: {
        hasInviteFeature: {
            compute() {
                if (this.channel && this.channel.channel_type === 'whatsapp') {
                    return true;
                }
                return this._super();
            },
        },
        hasMemberListFeature: {
            compute() {
                if (this.channel && this.channel.channel_type === 'whatsapp') {
                    return true;
                }
                return this._super();
            },
        },
        isChatChannel: {
            compute() {
                if (this.channel && this.channel.channel_type === 'whatsapp') {
                    return true;
                }
                return this._super();
            },
        },
        /**
         * If set, current thread is a livechat.
         */
        messagingAsPinnedWhatsapp: one('Messaging', {
            compute() {
                if (!this.messaging || !this.channel || this.channel.channel_type !== 'whatsapp' || !this.isPinned) {
                    return this.messaging;
                }
                return this.messaging;
            },
            inverse: 'pinnedWhatsapp',
        }),
    },
});
