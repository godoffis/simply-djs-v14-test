import { ColorResolvable, ButtonInteraction } from 'discord.js';
export declare type manageSugOptions = {
    deny?: {
        color: ColorResolvable;
    };
    accept?: {
        color: ColorResolvable;
    };
};
/**
 * A **Suggestion** handler which handles all sugestions from the package
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Handler/manageSug***
 * @example simplydjs.manageSug(interaction)
 */
export declare function manageSug(interaction: ButtonInteraction, options?: manageSugOptions): Promise<void>;
