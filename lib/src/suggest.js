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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestSystem = void 0;
const discord_js_1 = require("discord.js");
const Error_1 = require("./Error/Error");
const chalk_1 = __importDefault(require("chalk"));
const suggestion_1 = __importDefault(require("./model/suggestion"));
// ------------------------------
// ------ F U N C T I O N -------
// ------------------------------
/**
 * An **Beautiful** suggestion system with buttons ;D | *Requires: [**manageSug()**](https://simplyd.js.org/docs/handler/manageSug)*
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Systems/suggestSystem***
 * @example simplydjs.suggestSystem(interaction, { channelId: '1234567890123' })
 */
function suggestSystem(message, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { client } = message;
            let url;
            let suggestion;
            let interaction;
            if (message.commandId || !message.content) {
                interaction = message;
                suggestion =
                    options.suggestion || interaction.options.getString('suggestion');
                if (!suggestion)
                    return interaction.followUp('Give me a suggestion to post.');
            }
            else if (!message.commandId && message.content) {
                const attachment = (_a = message.attachments) === null || _a === void 0 ? void 0 : _a.first();
                url = attachment ? attachment.url : null;
                suggestion = options === null || options === void 0 ? void 0 : options.suggestion;
                if (url) {
                    suggestion = suggestion + ' ' + url;
                }
                if (!options.suggestion) {
                    const [...args] = (_b = message.content) === null || _b === void 0 ? void 0 : _b.split(/ +/g);
                    suggestion = args.slice(1).join(' ');
                }
                if (suggestion === '' || !suggestion)
                    return message.reply('Give me a suggestion to post.');
            }
            const channel = options === null || options === void 0 ? void 0 : options.channelId;
            if (!options.embed) {
                options.embed = {
                    footer: {
                        text: '????? Simply Develop. npm i simply-djs',
                        iconURL: 'https://i.imgur.com/u8VlLom.png'
                    },
                    color: '#075FFF',
                    title: 'Suggestions',
                    credit: true
                };
            }
            options.buttons = {
                upvote: {
                    style: ((_d = (_c = options.buttons) === null || _c === void 0 ? void 0 : _c.upvote) === null || _d === void 0 ? void 0 : _d.style) || discord_js_1.ButtonStyle.Primary,
                    emoji: ((_f = (_e = options.buttons) === null || _e === void 0 ? void 0 : _e.upvote) === null || _f === void 0 ? void 0 : _f.emoji) || '??????'
                },
                downvote: {
                    style: ((_h = (_g = options.buttons) === null || _g === void 0 ? void 0 : _g.downvote) === null || _h === void 0 ? void 0 : _h.style) || discord_js_1.ButtonStyle.Danger,
                    emoji: ((_k = (_j = options.buttons) === null || _j === void 0 ? void 0 : _j.downvote) === null || _k === void 0 ? void 0 : _k.emoji) || '????'
                }
            };
            const ch = client.channels.cache.get(channel) || channel;
            if (!ch)
                throw new Error_1.SimplyError({
                    name: `INVALID_CHID - ${channel} | The channel id you specified is not valid (or) The bot has no VIEW_CHANNEL permission.`,
                    tip: 'Check the permissions (or) Try using another Channel ID'
                });
            const surebtn = new discord_js_1.ButtonBuilder()
                .setStyle(discord_js_1.ButtonStyle.Success)
                .setLabel('Yes')
                .setCustomId('send-sug');
            const nobtn = new discord_js_1.ButtonBuilder()
                .setStyle(discord_js_1.ButtonStyle.Danger)
                .setLabel('No')
                .setCustomId('nope-sug');
            const row1 = new discord_js_1.ActionRowBuilder().addComponents([surebtn, nobtn]);
            const embedo = new discord_js_1.EmbedBuilder()
                .setTitle('Are you sure ?')
                .setDescription(`Is this your suggestion ? \`${suggestion}\``)
                .setTimestamp()
                .setColor(((_l = options.embed) === null || _l === void 0 ? void 0 : _l.color) || '#075FFF')
                .setFooter(((_m = options.embed) === null || _m === void 0 ? void 0 : _m.credit) === false
                ? (_o = options.embed) === null || _o === void 0 ? void 0 : _o.footer
                : {
                    text: '????? Simply Develop. npm i simply-djs',
                    iconURL: 'https://i.imgur.com/u8VlLom.png'
                });
            let m;
            if (interaction) {
                m = yield interaction.followUp({
                    embeds: [embedo],
                    components: [row1],
                    ephemeral: true
                });
            }
            else if (!interaction) {
                m = yield message.reply({
                    embeds: [embedo],
                    components: [row1],
                    ephemeral: true
                });
            }
            const filter = (m) => m.user.id === (message.user ? message.user : message.author).id;
            const collect = m.createMessageComponentCollector({
                filter,
                max: 1,
                componentType: discord_js_1.ComponentType.Button,
                time: 1000 * 15
            });
            collect.on('collect', (b) => __awaiter(this, void 0, void 0, function* () {
                var _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
                if (b.customId === 'send-sug') {
                    yield b.reply({ content: 'Ok Suggested.', ephemeral: true });
                    yield b.message.delete();
                    const emb = new discord_js_1.EmbedBuilder()
                        .setDescription(suggestion)
                        .setAuthor({
                        name: message.member.user.tag,
                        iconURL: message.member.user.displayAvatarURL({
                            dynamic: true
                        })
                    })
                        .setColor(((_p = options.embed) === null || _p === void 0 ? void 0 : _p.color) || '#075FFF')
                        .setFooter(((_q = options.embed) === null || _q === void 0 ? void 0 : _q.credit) === false
                        ? (_r = options.embed) === null || _r === void 0 ? void 0 : _r.footer
                        : {
                            text: '????? Simply Develop. npm i simply-djs',
                            iconURL: 'https://i.imgur.com/u8VlLom.png'
                        })
                        .addFields({
                        name: 'Status',
                        value: `\`\`\`\nWaiting for the response..\n\`\`\``
                    }, {
                        name: 'Percentage',
                        value: `?????????????????????????????? [0% - 0%]`
                    });
                    const approve = new discord_js_1.ButtonBuilder()
                        .setEmoji((_t = (_s = options.buttons) === null || _s === void 0 ? void 0 : _s.upvote) === null || _t === void 0 ? void 0 : _t.emoji)
                        .setLabel('0')
                        .setStyle((_v = (_u = options.buttons) === null || _u === void 0 ? void 0 : _u.upvote) === null || _v === void 0 ? void 0 : _v.style)
                        .setCustomId('agree-sug');
                    const no = new discord_js_1.ButtonBuilder()
                        .setEmoji((_x = (_w = options.buttons) === null || _w === void 0 ? void 0 : _w.downvote) === null || _x === void 0 ? void 0 : _x.emoji)
                        .setLabel('0')
                        .setStyle((_z = (_y = options.buttons) === null || _y === void 0 ? void 0 : _y.downvote) === null || _z === void 0 ? void 0 : _z.style)
                        .setCustomId('no-sug');
                    const row = new discord_js_1.ActionRowBuilder().addComponents([approve, no]);
                    yield ch
                        .send({ embeds: [emb], components: [row] })
                        .then((ms) => __awaiter(this, void 0, void 0, function* () {
                        const cr = new suggestion_1.default({
                            message: ms.id,
                            author: message.member.user.id
                        });
                        yield cr.save();
                    }));
                }
                else if (b.customId === 'nope-sug') {
                    b.message.delete();
                }
            }));
            collect.on('end', (b) => __awaiter(this, void 0, void 0, function* () {
                if (b.size == 0) {
                    m.edit({
                        content: 'Timeout.. Cancelled the suggestion',
                        embeds: [],
                        components: []
                    });
                }
            }));
        }
        catch (err) {
            console.log(`${chalk_1.default.red('Error Occured.')} | ${chalk_1.default.magenta('suggestSystem')} | Error: ${err.stack}`);
        }
    });
}
exports.suggestSystem = suggestSystem;
