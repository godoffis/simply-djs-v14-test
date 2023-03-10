import { Client, MessageButtonStyle, TextChannel, Role } from 'discord.js';
import { ExtendedInteraction } from './interfaces';
export declare type betterbtnOptions = {
    custom: true | false;
    type?: 'add' | 'remove';
    channel?: TextChannel;
    label?: string;
    messageId?: string;
    role?: Role;
    style?: MessageButtonStyle;
    emoji?: string;
};
/**
 * A **Button Role builder** that lets **admins create** button roles. | *Requires: [**manageBtn()**](https://simplyd.js.org/docs/handler/manageBtn)*
 * @param client
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/betterBtnRole***
 * @example simplydjs.betterBtnRole(client, interaction)
 */
export declare function betterBtnRole(client: Client, interaction: ExtendedInteraction, options?: betterbtnOptions): Promise<string>;
