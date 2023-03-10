import { MessageEmbedFooter, MessageEmbedAuthor, ColorResolvable, Client, MessageButtonStyle, Role, EmbedFieldData } from 'discord.js';
import { ExtendedInteraction, ExtendedMessage } from './interfaces';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/CustomizableEmbed*
 */
interface CustomizableEmbed {
    author?: MessageEmbedAuthor;
    title?: string;
    footer?: MessageEmbedFooter;
    description?: string;
    color?: ColorResolvable;
    credit?: boolean;
}
interface requirement {
    type: 'Role' | 'Guild' | 'None';
    id: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/btnTemplate*
 */
interface btnTemplate {
    style?: MessageButtonStyle;
    label?: string;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/Buttons/giveawaySystem*
 */
interface gSysButtons {
    enter?: btnTemplate;
    end?: btnTemplate;
    reroll?: btnTemplate;
}
export declare type giveawayOptions = {
    prize?: string;
    winners?: string | number;
    channel?: MessageChannel;
    time?: string;
    buttons?: gSysButtons;
    manager?: Role | string;
    req?: requirement;
    ping?: string;
    embed?: CustomizableEmbed;
    fields?: EmbedFieldData[];
    disable?: 'Label' | 'Emoji';
};
interface returns {
    message: string;
    winners: number;
    prize: string;
    endsAt: number;
    req: string;
}
/**
 * A **Powerful** yet simple giveawaySystem | *Required: **manageBtn()***
 * @param client
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/givewaySystem***
 * @example simplydjs.giveawaySystem(client, message)
 */
export declare function giveawaySystem(client: Client, message: ExtendedMessage | ExtendedInteraction, options?: giveawayOptions): Promise<returns>;
export {};
