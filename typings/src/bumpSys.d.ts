import { Client, MessageEmbed, Message } from 'discord.js';
interface TypeEmbed {
    thankEmb?: MessageEmbed;
    bumpEmb?: MessageEmbed;
}
export declare type bumpOptions = {
    content?: string;
    embed?: TypeEmbed;
    toggle?: boolean;
    auto?: boolean;
    channelId?: string[];
};
/**
 * A Very cool bump reminder system that reminds when a bump is necessary [Only Disboard].
 *
 * **Requires you to have this in `messageCreate` and `ready` event**
 * @param client
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/bumpSystem***
 * @example simplydjs.bumpSystem(client, message)
 */
export declare function bumpSystem(client: Client, message: Message | bumpOptions, options: bumpOptions): Promise<boolean>;
export {};
