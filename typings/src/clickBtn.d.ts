import { ButtonInteraction } from 'discord.js';
import { manageBtnOptions } from './manageBtn';
/**
 * @deprecated Use {@link manageBtn()}
 */
export declare function clickBtn(button: ButtonInteraction, options: manageBtnOptions): Promise<void>;
