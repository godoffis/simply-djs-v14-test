import { Client, Message } from 'discord.js';
import { ExtendedMessage } from './interfaces';
export declare type chatbotOptions = {
    channelId?: string | string[];
    toggle?: boolean;
    name?: string;
    developer?: string;
};
/**
 * A chatbot system that is both technically advanced and intelligent, and is your buddy.
 *
 * **URL** of the api: *https://simplyapi.js.org*
 * @param client
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Fun/chatbot***
 * @example simplydjs.chatbot(client, message)
 */
export declare function chatbot(client: Client, message: ExtendedMessage, options?: chatbotOptions): Promise<Message>;
