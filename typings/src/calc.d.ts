import { MessageButtonStyle, MessageEmbedAuthor, MessageEmbedFooter, ColorResolvable } from 'discord.js';
import { ExtendedInteraction, ExtendedMessage } from './interfaces';
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
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/General/calculator#calcbuttons*
 */
interface calcButtons {
    numbers?: MessageButtonStyle;
    symbols?: MessageButtonStyle;
    delete?: MessageButtonStyle;
}
export declare type calcOptions = {
    embed?: CustomizableEmbed;
    buttons?: calcButtons;
};
/**
 * An Unique **calculator** which can be *used inside Discord*
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/calculator***
 * @example simplydjs.calculator(interaction)
 */
export declare function calculator(interaction: ExtendedMessage | ExtendedInteraction, options?: calcOptions): Promise<void>;
export {};
