import { MessageEmbed, MessageEmbedAuthor, MessageEmbedFooter, ColorResolvable } from 'discord.js';
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
export declare type embOptions = {
    embed?: CustomizableEmbed;
    rawEmbed?: MessageEmbed;
};
/**
 * Lets you create embeds with **an interactive builder**
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/embedCreate***
 * @example simplydjs.embedCreate(message)
 */
export declare function embedCreate(message: ExtendedMessage | ExtendedInteraction, options?: embOptions): Promise<MessageEmbed | any>;
export {};
