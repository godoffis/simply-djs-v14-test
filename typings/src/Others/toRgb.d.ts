/**
 * Transforms Hex code into RGB Array (or) RGB String. This makes it easy to convert from discord.js v13 to v14.
 * @param hex
 * @param type
 * @link `Documentation:` ***https://simplyd.js.org/docs/Others/toRgb***
 * @example simplydjs.toRgb('#075FFF')
 */
export declare function toRgb(hex: string, type?: 'Array' | 'String'): number[] | string;
