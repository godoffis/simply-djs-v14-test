import { MessageEmbedFooter, MessageEmbedAuthor, ColorResolvable, MessageButtonStyle, User } from 'discord.js';
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
 * **URL** of the Type: *https://simplyd.js.org/docs/Fun/tictactoe#tttbtntemplate*
 */
interface tttBtnTemplate {
    style?: MessageButtonStyle;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Fun/tictactoe#tttbuttons*
 */
interface tttButtons {
    X?: tttBtnTemplate;
    O?: tttBtnTemplate;
    idle?: tttBtnTemplate;
}
export declare type tttOptions = {
    embed?: CustomizableEmbed;
    user?: User;
    result?: 'Button' | 'Embed';
    buttons?: tttButtons;
};
/**
 * One line implementation of a super enjoyable **tictactoe game**.
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Fun/tictactoe***
 * @example simplydjs.tictactoe(interaction)
 */
export declare function tictactoe(message: ExtendedMessage | ExtendedInteraction, options?: tttOptions): Promise<User>;
export {};
