import { Message, MessageEmbedFooter, MessageEmbedAuthor, ColorResolvable } from 'discord.js';
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
export declare type ghostOptions = {
    embed?: CustomizableEmbed;
    custom?: boolean;
};
/**
 * A Great system to see **who ghost pinged**
 *
 * **Important!**: Use it in `messageDelete` event
 *
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/ghostPing***
 * @example simplydjs.ghostPing(message)
 */
export declare function ghostPing(message: Message, options?: ghostOptions): Promise<boolean>;
export {};
