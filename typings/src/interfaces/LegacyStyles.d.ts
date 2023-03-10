import { ButtonStyle } from "discord.js";
/**
 * An object to convert legacy button styles (string) to ButtonStyle counterparts for v14
 */
export declare const styles: {
    PRIMARY: ButtonStyle;
    SECONDARY: ButtonStyle;
    SUCCESS: ButtonStyle;
    DANGER: ButtonStyle;
    LINK: ButtonStyle;
};
/**
 * Type for Legacy button styles used in discord.js v13
 */
export declare type oldBtnStyle = 'LINK' | 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER';
