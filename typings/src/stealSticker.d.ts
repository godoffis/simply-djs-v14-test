export = stealSticker;
/**
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {import('../index').stealStickerOptions} options
 */
/**
 --- options ---
 
  credit => Boolean

  embedFoot => String
  embedTitle => String
  embedColor => HexColor
 */
declare function stealSticker(message: any, args: any, options?: any[]): Promise<void>;
