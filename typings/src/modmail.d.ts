export = modmail;
/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {import('../index').modmailOptions} options
 */
/**
 --- options ---
 
  credit => Boolean
  dmToggle => Boolean
  blacklistUser => Array (User ID)
  blacklistGuild => Array (Guild ID)
  categoryID => String

  mailname => String
  
  delColor => (ButtonColor) String
  delEmoji => (Emoji ID) String

  trColor => (ButtonColor) String
  trEmoji => (Emoji ID) String

  embedColor => HexColor
  content => String

  role => Array (Role ID)
  pingRole => Array (Role ID)
 */
declare function modmail(client: any, message: any, options?: any[]): Promise<any>;
