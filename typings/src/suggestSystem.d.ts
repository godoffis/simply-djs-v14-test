export = suggestSystem;
/**
 * @param {Discord.Client} client
 * @param {Discord.CommandInteraction} interaction
 * @param {import('../index').suggestSystemOptions} options
 */
/**
 --- options ---
 
  credit => Boolean
  
  channel => (Channel ID) String
  suggestion => String
  
  embed => Object
  {
      footer: Object,
      { text: String, iconURL: URL }
      color: Hex Code,
      credit => Boolean
  }

  buttons => Object
  {
      yesBtn: { emoji: (Emoji ID) String, color: (ButtonColor) String },
      noBtn: { emoji: (Emoji ID) String, color: (ButtonColor) String },
  }
 */
declare function suggestSystem(client: any, message: any, options?: any[]): Promise<any>;
