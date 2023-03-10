import { MessageEmbed, MessageActionRow } from 'discord.js';
import { ExtendedInteraction, ExtendedMessage } from './interfaces';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/General/menuPages#deleteopt*
 */
interface deleteOpt {
    enable?: boolean;
    label?: string;
    description?: string;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/General/menuPages#dataobj*
 */
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
 * An Embed paginator using Select Menus
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/menuPages***
 * @example simplydjs.menuPages(interaction, { data: {...} })
 */
export declare function menuPages(message: ExtendedMessage | ExtendedInteraction, options?: menuEmbOptions): Promise<void>;
export {};
