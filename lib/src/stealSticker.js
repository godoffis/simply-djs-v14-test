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
function stealSticker(message, args, options = []) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let filter = (m) => m.author.id === message.author.id;
            message.channel.send('Send the sticker/attachment now . i am collecting...');
            let collector = message.channel.createMessageCollector({
                filter,
                time: 15000,
                max: 1
            });
            collector.on('collect', (message) => __awaiter(this, void 0, void 0, function* () {
                let stickers = message.stickers.first();
                if (options.credit === false) {
                    foot = options.embedFoot || 'Stealing is illegal';
                }
                else {
                    foot = '©️ Simply Develop. npm i simply-djs';
                }
                if (!stickers) {
                    const attachment = message.attachments.first();
                    const url = attachment ? attachment.url : null;
                    if (url === null)
                        return message.reply('Sorry you didnt provide a sticker/attachment');
                    message.guild.stickers
                        .create(url, args[0] || 'stickerURL', args[1] || 'simply-djs')
                        .then((st) => __awaiter(this, void 0, void 0, function* () {
                        const mentionav = new Discord.EmbedBuilder()
                            .setTitle(options.embedTitle ||
                            `Sticker Added ;)\n\nSticker Name: \`${st.name}\`\nSticker ID: \`${st.id}\``)
                            .setThumbnail(st.url)
                            .setColor(options.embedColor || 0x075fff)
                            .setFooter(foot);
                        message.channel.send({ embeds: [mentionav] });
                        message.delete();
                    }))
                        .catch((err) => {
                        message.reply({ content: `Error: ${err}` });
                    });
                }
                else {
                    message.guild.stickers
                        .create(stickers.url, args[0] || stickers.id, args[1] || 'simply-djs')
                        .then((st) => __awaiter(this, void 0, void 0, function* () {
                        const mentionav = new Discord.EmbedBuilder()
                            .setTitle(options.embedTitle ||
                            `Sticker Added ;)\n\nSticker Name: \`${st.name}\`\nSticker ID: \`${st.id}\``)
                            .setThumbnail(st.url)
                            .setColor(options.embedColor || 0x075fff)
                            .setFooter(foot);
                        message.channel.send({ embeds: [mentionav] });
                        message.delete();
                    }))
                        .catch((err) => {
                        message.reply({ content: `Error: ${err}` });
                    });
                }
            }));
        }
        catch (err) {
            console.log(`Error Occured. | stealSticker | Error: ${err.stack}`);
        }
    });
}
module.exports = stealSticker;
