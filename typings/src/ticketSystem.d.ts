import { Message, ColorResolvable, MessageEmbedAuthor, MessageEmbedFooter, MessageButtonStyle } from 'discord.js';
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
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/btnTemplate*
 */
interface btnTemplate {
    style?: MessageButtonStyle;
    label?: string;
    emoji?: string;
}
export declare type tSysOptions = {
    embed?: CustomizableEmbed;
    button?: btnTemplate;
    channelId?: string;
};
/**
 * A **Faster** yet Powerful ticketSystem | *Requires: [**manageBtn()**](https://simplyd.js.org/docs/handler/manageBtn)*
 *
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/ticketSystem***
 * @example simplydjs.ticketSystem(interaction, { channelId: '0123456789012' })
 */
export declare function ticketSystem(message: ExtendedMessage | ExtendedInteraction, options?: tSysOptions): Promise<Message<boolean> | import("discord-api-types/v9").APIMessage>;
export {};
