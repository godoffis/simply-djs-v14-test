import { ButtonInteraction } from 'discord.js';
import { manageSugOptions } from './manageSug';
/**
 * @deprecated Use {@link manageSug()}
 */
export declare function suggestBtn(button: ButtonInteraction, options: manageSugOptions): Promise<void>;
