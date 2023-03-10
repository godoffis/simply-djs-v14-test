import { Client, ColorResolvable, MessageEmbedAuthor, MessageReaction } from 'discord.js';
import { ExtendedMessage } from './interfaces';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Systems/starboard#starboardembed*
 */
interface StarboardEmbed {
    author?: MessageEmbedAuthor;
    title?: string;
    description?: string;
    color?: ColorResolvable;
}
export declare type starboardOption = {
    embed?: StarboardEmbed;
    channelId?: string;
    min?: number | string;
    emoji?: string;
};
/**
 * Efficient yet Simplest starboard system ever existed !
 *
 * `NOTE:` **Only Use it in `messageReactionAdd`, `messageReactionRemove` and `messageDelete` events.**
 * @param client
 * @param reaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/starboard***
 * @example simplydjs.starboard(client, reaction, { channelId: '1234567890123' })
 */
export declare function starboard(client: Client, reaction: MessageReaction | ExtendedMessage, options?: starboardOption): Promise<import("discord.js").Message<boolean>>;
export {};
