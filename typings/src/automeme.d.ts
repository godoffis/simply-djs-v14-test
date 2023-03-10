import { Client, MessageEmbedAuthor, ColorResolvable, MessageEmbedFooter } from 'discord.js';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/CustomizableEmbed*
 */
interface CustomizableEmbed {
    author?: MessageEmbedAuthor;
    title?: string;
    footer?: MessageEmbedFooter;
    color?: ColorResolvable;
    description?: string;
    credit?: boolean;
}
export declare type memeOptions = {
    embed?: CustomizableEmbed;
    channelId: string;
    interval?: number;
    sub?: string[] | string;
};
/**
 * The memes are sent automatically, so others will able to laugh at the jokes without having to do anything !
 * @param client
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/automeme***
 * @example simplydjs.automeme(client, { channelId: '1234567890123' })
 */
export declare function automeme(client: Client, options?: memeOptions): Promise<void>;
export {};
