import { MessageButtonStyle, Message, MessageEmbed } from 'discord.js';
import { ExtendedInteraction, ExtendedMessage } from './interfaces';
interface dataObj {
    role?: string;
    label?: string;
    emoji?: string;
    style?: MessageButtonStyle;
    url?: `https://${string}`;
}
export declare type btnOptions = {
    embed?: MessageEmbed;
    content?: string;
    data?: dataObj[];
};
/**
 * A **Button Role System** that lets you create button roles with your own message. | *Requires: [**manageBtn()**](https://simplyd.js.org/docs/handler/manageBtn)*
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/btnrole***
 * @example simplydjs.btnRole(message, { data: {...} })
 */
export declare function btnRole(message: ExtendedMessage | ExtendedInteraction, options?: btnOptions): Promise<Message>;
export {};
