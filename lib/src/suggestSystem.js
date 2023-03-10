"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Discord = require('discord.js');
let SimplyError = require('./Error/Error');
let { ButtonBuilder, ActionRowBuilder } = require('discord.js');
const { join } = require('path');
const db = require(join(__dirname, 'model', 'suggestion.js'));
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
function suggestSystem(client, message, options = []) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let interaction;
            let url;
            let suggestion;
            if (message.commandId) {
                interaction = message;
                suggestion =
                    options.suggestion || interaction.options.getString('suggestion');
                if (suggestion === '' || !suggestion)
                    return interaction.followUp('Give me a suggestion to post.');
            }
            else if (!message.commandId) {
                const attachment = message.attachments.first();
                url = attachment ? attachment.url : null;
                suggestion = options.suggestion;
                if (!options.suggestion)
                    throw new SimplyError(`You didnt specify a suggestion option on suggestSystem..`, 'Check the docs. v3 has changed alot.');
                if (suggestion === '' || !suggestion)
                    return message.reply('Give me a suggestion to post.');
            }
            let channel = options.channel;
            if (!options.embed) {
                options.embed = {
                    footer: { text: options.embedFoot, iconURL: null } || {
                        text: '????? Simply Develop. npm i simply-djs',
                        iconURL: 'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand'
                    },
                    color: options.embedColor || '#075FFF',
                    credit: true
                };
            }
            if (!options.buttons) {
                options.buttons = {
                    yesBtn: { color: Discord.ButtonStyle.Success },
                    noBtn: { color: Discord.ButtonStyle.Danger }
                };
            }
            if (options.embedFoot !== undefined || options.embedColor !== undefined) {
                console.log('Deprecation Warning! Do not use the old options (options.embedColor). v3 has changed alot. Please refer docs..');
            }
            if (options.credit !== undefined) {
                console.log('Deprecation Warning! Do not use the old options (options.credit). v3 has changed alot. Please refer docs..');
                options.embed.credit = options.credit;
            }
            if (options.embed.credit === undefined) {
                options.embed.credit = true;
            }
            options.embed = {
                footer: options.embed.footer,
                color: options.embed.color || '#075FFF',
                credit: options.embed.credit
            };
            options.buttons = {
                yesBtn: options.buttons.yesBtn || { color: Discord.ButtonStyle.Success },
                noBtn: options.buttons.noBtn || { color: Discord.ButtonStyle.Danger }
            };
            let ch = client.channels.cache.get(channel);
            if (!ch)
                throw new SimplyError(`INVALID_CHANNEL_ID: ${channel}. The channel id you specified is not valid (or) I dont have VIEW_CHANNEL permission.`, 'Check my permissions (or) Try using another Channel ID');
            let surebtn = new ButtonBuilder()
                .setStyle(Discord.ButtonStyle.Success)
                .setLabel('Sure')
                .setCustomId('send-sug');
            let nobtn = new ButtonBuilder()
                .setStyle(Discord.ButtonStyle.Danger)
                .setLabel('Cancel')
                .setCustomId('nope-sug');
            let row1 = new ActionRowBuilder().addComponents([surebtn, nobtn]);
            let icon = 'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand';
            if (options.embed.credit === false) {
                foot = ((_a = options.embed.footer) === null || _a === void 0 ? void 0 : _a.text) || message.guild.name;
                icon = ((_b = options.embed.footer) === null || _b === void 0 ? void 0 : _b.iconURL) || message.guild.iconURL();
            }
            else if (options.embed.credit === undefined ||
                options.embed.credit !== false) {
                foot = '????? Simply Develop. npm i simply-djs';
                icon = 'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand';
            }
            let embedo = new Discord.EmbedBuilder()
                .setTitle('Are you sure ?')
                .setDescription(`Is this your suggestion ? \`${suggestion}\``)
                .setTimestamp()
                .setColor(options.embed.color || '#075FFF')
                .setFooter({ text: foot, iconURL: icon });
            let m;
            if (message.commandId) {
                m = yield interaction.followUp({
                    embeds: [embedo],
                    components: [row1],
                    ephemeral: true
                });
            }
            else if (!message.commandId) {
                m = yield message.reply({
                    embeds: [embedo],
                    components: [row1],
                    ephemeral: true
                });
            }
            const filter = (button) => button.user.id === (message.user ? message.user : message.author).id;
            const collect = m.createMessageComponentCollector({
                filter,
                componentType: Discord.ComponentType.Button,
                max: 1,
                time: 15000
            });
            collect.on('collect', (b) => __awaiter(this, void 0, void 0, function* () {
                if (b.customId === 'send-sug') {
                    b.reply({ content: 'Ok Suggested.', ephemeral: true });
                    b.message.delete();
                    if (options.embed.credit === false) {
                        foot =
                            options.embedFoot || options.embed.footer.text || message.guild.name;
                        icon = options.embed.footer.iconURL || message.guild.iconURL();
                    }
                    else if (options.embed.credit === undefined ||
                        options.embed.credit !== false) {
                        foot = '????? Simply Develop. npm i simply-djs';
                        icon =
                            'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand';
                    }
                    const emb = new Discord.EmbedBuilder()
                        .setDescription(suggestion)
                        .setAuthor({
                        name: (message.user ? message.user : message.author).tag,
                        iconURL: (message.user
                            ? message.user
                            : message.author).displayAvatarURL()
                    })
                        .setColor(options.embed.color || '#075FFF')
                        .setFooter({ text: foot, iconURL: icon })
                        .addFields({
                        name: 'Status:',
                        value: `\`\`\`\nWaiting for the response..\n\`\`\``
                    }, {
                        name: 'Reactions',
                        value: `*Likes:* \`0\` \n*Dislikes:* \`0\``
                    });
                    let approve = new ButtonBuilder()
                        .setEmoji(options.buttons.yesBtn.emoji || '??????')
                        .setStyle(options.buttons.yesBtn.color || Discord.ButtonStyle.Success)
                        .setCustomId('agree-sug');
                    let no = new ButtonBuilder()
                        .setEmoji(options.buttons.noBtn.emoji || '????')
                        .setStyle(options.buttons.noBtn.color || Discord.ButtonStyle.Danger)
                        .setCustomId('no-sug');
                    let row = new ActionRowBuilder().addComponents([approve, no]);
                    ch.send({ embeds: [emb], components: [row] }).then((ms) => __awaiter(this, void 0, void 0, function* () {
                        let cr = new db({
                            message: ms.id,
                            author: message.user.id
                        });
                        yield cr.save();
                    }));
                }
                else if (b.customId === 'nope-sug') {
                    b.message.delete();
                    b.reply({
                        content: 'Ok i am not sending the suggestion',
                        ephemeral: true
                    });
                }
            }));
            collect.on('end', (b) => __awaiter(this, void 0, void 0, function* () {
                if (b.size == 0) {
                    m.delete();
                    m.channel.send({
                        content: 'Timeout.. So I didnt send the suggestion.'
                    });
                }
            }));
        }
        catch (err) {
            console.log(`Error Occured. | suggestSystem | Error: ${err.stack}`);
        }
    });
}
module.exports = suggestSystem;
