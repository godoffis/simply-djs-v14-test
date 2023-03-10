import { MessageButtonStyle, MessageEmbed, MessageActionRow } from 'discord.js';
import { ExtendedInteraction, ExtendedMessage } from './interfaces';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/btnTemplate*
 */
interface btnTemplate {
    style?: MessageButtonStyle;
    label?: string;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/General/embedPages#pagebuttons*
 */
interface Pagebuttons {
    firstBtn?: btnTemplate;
    nextBtn?: btnTemplate;
    backBtn?: btnTemplate;
    lastBtn?: btnTemplate;
    deleteBtn?: btnTemplate;
}
export declare type pagesOption = {
    buttons?: Pagebuttons;
    skips?: boolean;
    delete?: boolean;
    dynamic?: boolean;
    count?: boolean;
    rows?: MessageActionRow[];
    timeout?: number;
    disable?: 'Label' | 'Emoji' | 'None';
};
/**
 * An *powerful yet customizable* **Embed Paginator**
 *
 * @param message
 * @param pages
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/embedPages***
 * @example simplydjs.embedPages(message, [embed1, embed2] )
 */
export declare function embedPages(message: ExtendedMessage | ExtendedInteraction, pages: MessageEmbed[], options?: pagesOption): Promise<any>;
export {};
