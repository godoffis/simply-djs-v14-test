import { MessageEmbedAuthor, ColorResolvable, MessageEmbedFooter } from 'discord.js';
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
export declare type stealOptions = {
    embed?: CustomizableEmbed;
    emoji?: string;
    name?: string;
};
/**
 * How cool is **stealing an emoji** from another server ? Feel the power with this function
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/stealEmoji***
 * @example simplydjs.stealEmoji(interaction)
 */
export declare function stealEmoji(message: ExtendedMessage | ExtendedInteraction, options?: stealOptions): Promise<import("discord.js").Message<boolean> | import("discord-api-types/v9").APIMessage>;
export {};
