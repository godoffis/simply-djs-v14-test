import { MessageEmbed, Message, CommandInteraction, MessageActionRow } from 'discord.js';
interface deleteOpt {
    enable?: boolean;
    label?: string;
    description?: string;
    emoji?: string;
}
interface dataObj {
    label?: string;
    description?: string;
    embed?: MessageEmbed;
    emoji?: string;
}
export declare type menuEmbOptions = {
    type?: 1 | 2;
    rows?: MessageActionRow[];
    embed?: MessageEmbed;
    delete?: deleteOpt;
    data?: dataObj[];
    placeHolder?: string;
};
/**
 * An Embed Paginator using Select menus
 * @param message
 * @param options
 * @example simplydjs.menuPages(interaction, { ... })
 */
export declare function menuPages(message: Message | CommandInteraction, options?: menuEmbOptions): Promise<void>;
export {};
