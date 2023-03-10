import { MessageEmbedFooter, MessageEmbedAuthor, ColorResolvable, MessageButtonStyle, HexColorString, User } from 'discord.js';
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
    label?: string;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Fun/rps#rpsbuttons*
 */
interface rpsButtons {
    rock?: btnTemplate;
    paper?: btnTemplate;
    scissor?: btnTemplate;
}
export declare type rpsOptions = {
    embed?: CustomizableEmbed;
    drawColor?: HexColorString;
    winColor?: HexColorString;
    buttons?: rpsButtons;
    opponent?: User;
};
/**
 * A classic RPS game, except this time it's on Discord to play with your pals, how cool is that ?
 *
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Fun/rps***
 * @example simplydjs.rps(message)
 */
export declare function rps(message: ExtendedMessage | ExtendedInteraction, options?: rpsOptions): Promise<unknown>;
export {};
