import { MessageEmbedFooter, MessageEmbedAuthor, ColorResolvable, ButtonInteraction, MessageButtonStyle, User, MessageAttachment, GuildMember } from 'discord.js';
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/types/btnTemplate*
 */
interface btnTemplate {
    style?: MessageButtonStyle;
    label?: string;
    emoji?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Handler/manageBtn#ticketbtn*
 */
interface ticketBtn {
    close: btnTemplate;
    reopen: btnTemplate;
    delete: btnTemplate;
    transcript: btnTemplate;
}
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
 * **URL** of the Type: *https://simplyd.js.org/docs/Handler/manageBtn#ticketsys*
 */
interface ticketSys {
    ticketname?: string;
    buttons?: ticketBtn;
    pingRole?: string | string[];
    category?: string;
    timed?: boolean;
    embed?: CustomizableEmbed;
    logChannelId?: string;
}
/**
 * **URL** of the Type: *https://simplyd.js.org/docs/Handler/manageBtn#btnrole*
 */
interface btnRole {
    addedMsg: string;
    removedMsg: string;
}
export declare type manageBtnOptions = {
    ticketSys?: ticketSys;
    btnRole?: btnRole;
};
declare type ticketDelete = {
    type?: 'Delete';
    channelId?: string;
    user?: User;
    data?: MessageAttachment;
};
declare type rerolly = {
    type?: 'Reroll';
    user?: GuildMember | GuildMember[];
    msgURL?: string;
};
/**
 * A Button Handler for **simplydjs package functions.** [Except Suggestion Handling !]
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Handler/manageBtn***
 * @example simplydjs.manageBtn(interaction)
 */
export declare function manageBtn(interaction: ButtonInteraction, options?: manageBtnOptions): Promise<ticketDelete | rerolly>;
export {};
