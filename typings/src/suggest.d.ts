import { MessageEmbedAuthor, ColorResolvable, TextChannel, MessageEmbedFooter, MessageButtonStyle, Message } from 'discord.js';
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
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Systems/suggestSystem#suggestbuttons*
 */
interface suggestButtons {
    upvote?: btnTemplate;
    downvote?: btnTemplate;
}
export declare type suggestOption = {
    embed?: CustomizableEmbed;
    channelId?: string | TextChannel;
    suggestion?: string;
    buttons?: suggestButtons;
};
/**
 * An **Beautiful** suggestion system with buttons ;D | *Requires: [**manageSug()**](https://simplyd.js.org/docs/handler/manageSug)*
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/suggestSystem***
 * @example simplydjs.suggestSystem(interaction, { channelId: '1234567890123' })
 */
export declare function suggestSystem(message: ExtendedMessage | ExtendedInteraction, options?: suggestOption): Promise<void | Message<boolean> | import("discord-api-types/v9").APIMessage>;
export {};
