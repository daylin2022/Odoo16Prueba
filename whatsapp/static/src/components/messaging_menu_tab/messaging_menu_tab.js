/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';

const { Component } = owl;

export class MessagingMenuTab extends Component {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * @returns {MessagingMenu}
     */
    get messagingMenu() {
        return this.props.messagingMenu;
    }

}

Object.assign(MessagingMenuTab, {
    props: {
        messagingMenu: Object,
        tabId: String,
    },
    template: 'odoo16Prueba.MessagingMenuTab',
});

registerMessagingComponent(MessagingMenuTab);
