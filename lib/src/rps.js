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
exports.rps = void 0;
const { disableButtons } = require("./Utils/Utils")
const discord_js_1 = require("discord.js");
const chalk_1 = __importDefault(require("chalk"));
// ------------------------------
// ------ F U N C T I O N -------
// ------------------------------
/**
 * A classic RPS game, except this time it's on Discord to play with your pals, how cool is that ?
 *
 * @param message
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Fun/rps***
 * @example simplydjs.rps(message)
 */
function rps(message, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
            const accept = new discord_js_1.ButtonBuilder()
                .setLabel('Accept')
                .setStyle(discord_js_1.ButtonStyle.Success)
                .setCustomId('accept');
            const decline = new discord_js_1.ButtonBuilder()
                .setLabel('Deny')
                .setStyle(discord_js_1.ButtonStyle.Danger)
                .setCustomId('decline');
            const acceptComponents = new discord_js_1.ActionRowBuilder().addComponents([
                accept,
                decline
            ]);
            options.buttons = {
                rock: {
                    style: ((_b = (_a = options.buttons) === null || _a === void 0 ? void 0 : _a.rock) === null || _b === void 0 ? void 0 : _b.style) || discord_js_1.ButtonStyle.Primary,
                    label: ((_d = (_c = options.buttons) === null || _c === void 0 ? void 0 : _c.rock) === null || _d === void 0 ? void 0 : _d.label) || 'Rock',
                    emoji: ((_f = (_e = options.buttons) === null || _e === void 0 ? void 0 : _e.rock) === null || _f === void 0 ? void 0 : _f.emoji) || '????'
                },
                paper: {
                    style: ((_h = (_g = options.buttons) === null || _g === void 0 ? void 0 : _g.paper) === null || _h === void 0 ? void 0 : _h.style) || discord_js_1.ButtonStyle.Success,
                    label: ((_k = (_j = options.buttons) === null || _j === void 0 ? void 0 : _j.paper) === null || _k === void 0 ? void 0 : _k.label) || 'Paper',
                    emoji: ((_m = (_l = options.buttons) === null || _l === void 0 ? void 0 : _l.paper) === null || _m === void 0 ? void 0 : _m.emoji) || '????'
                },
                scissor: {
                    style: ((_p = (_o = options.buttons) === null || _o === void 0 ? void 0 : _o.paper) === null || _p === void 0 ? void 0 : _p.style) || discord_js_1.ButtonStyle.Danger,
                    label: ((_r = (_q = options.buttons) === null || _q === void 0 ? void 0 : _q.paper) === null || _r === void 0 ? void 0 : _r.label) || 'Scissor',
                    emoji: ((_t = (_s = options.buttons) === null || _s === void 0 ? void 0 : _s.paper) === null || _t === void 0 ? void 0 : _t.emoji) || '??????'
                }
            };
            if (!options.embed) {
                options.embed = {
                    footer: {
                        text: '????? Simply Develop. npm i simply-djs',
                        iconURL: 'https://i.imgur.com/u8VlLom.png'
                    },
                    color: '#075FFF',
                    title: 'Rock Paper Scissor !',
                    credit: true
                };
            }
            const rock = new discord_js_1.ButtonBuilder()
                .setLabel((_v = (_u = options.buttons) === null || _u === void 0 ? void 0 : _u.rock) === null || _v === void 0 ? void 0 : _v.label)
                .setCustomId('rock')
                .setStyle((_x = (_w = options.buttons) === null || _w === void 0 ? void 0 : _w.rock) === null || _x === void 0 ? void 0 : _x.style)
                .setEmoji((_z = (_y = options.buttons) === null || _y === void 0 ? void 0 : _y.rock) === null || _z === void 0 ? void 0 : _z.emoji);
            const paper = new discord_js_1.ButtonBuilder()
                .setLabel((_1 = (_0 = options.buttons) === null || _0 === void 0 ? void 0 : _0.paper) === null || _1 === void 0 ? void 0 : _1.label)
                .setCustomId('paper')
                .setStyle((_3 = (_2 = options.buttons) === null || _2 === void 0 ? void 0 : _2.paper) === null || _3 === void 0 ? void 0 : _3.style)
                .setEmoji((_5 = (_4 = options.buttons) === null || _4 === void 0 ? void 0 : _4.paper) === null || _5 === void 0 ? void 0 : _5.emoji);
            const scissors = new discord_js_1.ButtonBuilder()
                .setLabel((_7 = (_6 = options.buttons) === null || _6 === void 0 ? void 0 : _6.scissor) === null || _7 === void 0 ? void 0 : _7.label)
                .setCustomId('scissors')
                .setStyle((_9 = (_8 = options.buttons) === null || _8 === void 0 ? void 0 : _8.scissor) === null || _9 === void 0 ? void 0 : _9.style)
                .setEmoji((_11 = (_10 = options.buttons) === null || _10 === void 0 ? void 0 : _10.scissor) === null || _11 === void 0 ? void 0 : _11.emoji);
            const rpsComponents = new discord_js_1.ActionRowBuilder().addComponents([
                rock,
                paper,
                scissors
            ]);
            //Embeds
            const timeoutEmbed = new discord_js_1.EmbedBuilder()
                .setTitle('Game Timed Out!')
                .setColor('#ED4245')
                .setDescription('The opponent didnt respond in time (30s)')
                .setFooter(((_12 = options.embed) === null || _12 === void 0 ? void 0 : _12.credit) === false
                ? (_13 = options.embed) === null || _13 === void 0 ? void 0 : _13.footer
                : {
                    text: '????? Simply Develop. npm i simply-djs',
                    iconURL: 'https://i.imgur.com/u8VlLom.png'
                });
            try {
                let opponent;
                let interaction;
                if (message.commandId) {
                    interaction = message;
                    opponent = options.opponent || interaction.options.getUser('user');
                }
                else {
                    opponent = (_14 = message.mentions.members.first()) === null || _14 === void 0 ? void 0 : _14.user;
                }
                const int = message;
                const mes = message;
                if (!interaction) {
                    if (!opponent)
                        return mes.reply('No opponent mentioned!');
                    if (opponent.bot)
                        return mes.reply('You cannot play against bots');
                    if (opponent.id === message.member.user.id)
                        return mes.reply('You cannot play by yourself!');
                }
                else if (interaction) {
                    if (!opponent)
                        return yield int.followUp({
                            content: 'No opponent mentioned!',
                            ephemeral: true
                        });
                    if (opponent.bot)
                        return yield int.followUp({
                            content: "You can't play against bots",
                            ephemeral: true
                        });
                    if (opponent.id === message.member.user.id)
                        return yield int.followUp({
                            content: 'You cannot play by yourself!',
                            ephemeral: true
                        });
                }
                const acceptEmbed = new discord_js_1.EmbedBuilder()
                    .setTitle(`Request for ${opponent.tag} !`)
                    .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({
                        dynamic: true
                    })
                })
                    .setColor(((_15 = options.embed) === null || _15 === void 0 ? void 0 : _15.color) || `#075FFF`)
                    .setFooter(((_16 = options.embed) === null || _16 === void 0 ? void 0 : _16.credit)
                    ? (_17 = options.embed) === null || _17 === void 0 ? void 0 : _17.footer
                    : {
                        text: '????? Simply Develop. npm i simply-djs',
                        iconURL: 'https://i.imgur.com/u8VlLom.png'
                    });
                let m;
                if (interaction) {
                    m = yield int.followUp({
                        content: `Hey <@${opponent.id}>. You got a RPS invitation !`,
                        embeds: [acceptEmbed],
                        components: [acceptComponents]
                    });
                }
                else if (!interaction) {
                    m = yield mes.reply({
                        content: `Hey <@${opponent.id}>. You got a RPS invitation !`,
                        embeds: [acceptEmbed],
                        components: [acceptComponents]
                    });
                }
                const filter = (m) => m.user.id === opponent.id;
                const acceptCollector = m.createMessageComponentCollector({
                    filter,
                    componentType: discord_js_1.ComponentType.Button,
                    time: 30000,
                    maxUsers: 1
                });
                acceptCollector.on('collect', (button) => __awaiter(this, void 0, void 0, function* () {
                    if (button.user.id !== opponent.id)
                        return yield button.reply({
                            content: 'You cannot play the game.',
                            ephemeral: true
                        });
                    yield button.deferUpdate();
                    if (button.customId == 'decline') {
                        if (interaction) {
                            yield interaction.editReply({
                            content: '** **',
                            embeds: [
                                new discord_js_1.EmbedBuilder()
                                    .setColor('#ED4245')
                                    .setFooter(((options.embed) === null || options.embed === void 0 ? void 0 : options.embed.credit) === false
                                    ? (options.embed = options.embed) === null || options.embed === void 0 ? void 0 : options.embed.footer
                                    : {
                                        text: '????? Simply Develop. npm i simply-djs',
                                        iconURL: 'https://i.imgur.com/u8VlLom.png'
                                    })
                                    .setTitle('Game Declined!')
                                    .setDescription(`${opponent.tag} has declined your game request!`)
                            ],
                            components: []
                            });
                        }
                        else if (!interaction) {
                            yield m.edit({
                                content: '** **',
                                embeds: [
                                    new discord_js_1.EmbedBuilder()
                                        .setColor('#ED4245')
                                        .setFooter(((options.embed = options.embed) === null || options.embed === void 0 ? void 0 : options.embed.credit) === false
                                        ? (options.embed = options.embed) === null || options.embed === void 0 ? void 0 : options.embed.footer
                                        : {
                                            text: '????? Simply Develop. npm i simply-djs',
                                            iconURL: 'https://i.imgur.com/u8VlLom.png'
                                        })
                                        .setTitle('Game Declined!')
                                        .setDescription(`${opponent.tag} has declined your game request!`)
                                ],
                                components: []
                                });
                        }
                        acceptCollector.stop('decline');
                    } else if(button.customId == 'accept') {
                        acceptEmbed
                        .setTitle(`${message.member.user.tag} VS. ${opponent.tag}`)
                        .setDescription('Select ????, ????, or ??????');
                    if (interaction) {
                        yield int.editReply({
                            content: '**Its time.. for RPS.**',
                            embeds: [acceptEmbed],
                            components: [rpsComponents]
                        });
                    }
                    else if (!interaction) {
                        yield m.edit({
                            content: '**Its time.. for RPS.**',
                            embeds: [acceptEmbed],
                            components: [rpsComponents]
                        });
                    }
                    acceptCollector.stop();
                    const ids = new Set();
                    ids.add(message.member.user.id);
                    ids.add(opponent.id);
                    let op, auth;
                    const btnCollector = m.createMessageComponentCollector({
                        componentType: discord_js_1.ComponentType.Button,
                        time: 30000
                    });
                    btnCollector.on('collect', (b) => __awaiter(this, void 0, void 0, function* () {
                        yield b.deferUpdate();
                        if (!ids.has(b.user.id)) {
                            yield button.followUp({
                                content: 'You cannot play the game.',
                                ephemeral: true
                            });
                            return;
                        }
                        ids.delete(b.user.id);
                        if (b.user.id === opponent.id)
                            op = b.customId;
                        if (b.user.id === message.member.user.id)
                            auth = b.customId;
                        setTimeout(() => {
                            if (ids.size == 0)
                                btnCollector.stop();
                        }, 500);
                    }));
                    btnCollector.on('end', (coll, reason) => __awaiter(this, void 0, void 0, function* () {
                        var _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83;
                        if (reason === 'time') {
                            if (interaction) {
                                yield interaction.editReply({
                                    content: '** **',
                                    embeds: [timeoutEmbed],
                                    components: []
                                });
                            }
                            else if (!interaction) {
                                yield m.edit({
                                    content: '** **',
                                    embeds: [timeoutEmbed],
                                    components: []
                                });
                            }
                        }
                        else {
                            const winnerMap = {
                                rock: 'scissors',
                                scissors: 'paper',
                                paper: 'rock'
                            };
                            if (op === auth) {
                                op = op
                                    .replace('scissors', `${(_19 = (_18 = options.buttons) === null || _18 === void 0 ? void 0 : _18.scissor) === null || _19 === void 0 ? void 0 : _19.emoji} ${(_21 = (_20 = options.buttons) === null || _20 === void 0 ? void 0 : _20.scissor) === null || _21 === void 0 ? void 0 : _21.label}`)
                                    .replace('paper', `${(_23 = (_22 = options.buttons) === null || _22 === void 0 ? void 0 : _22.paper) === null || _23 === void 0 ? void 0 : _23.emoji} ${(_25 = (_24 = options.buttons) === null || _24 === void 0 ? void 0 : _24.paper) === null || _25 === void 0 ? void 0 : _25.label}`)
                                    .replace('rock', `${(_27 = (_26 = options.buttons) === null || _26 === void 0 ? void 0 : _26.rock) === null || _27 === void 0 ? void 0 : _27.emoji} ${(_29 = (_28 = options.buttons) === null || _28 === void 0 ? void 0 : _28.rock) === null || _29 === void 0 ? void 0 : _29.label}`);
                                const mm = {
                                    content: '** **',
                                    embeds: [
                                        new discord_js_1.EmbedBuilder()
                                            .setTitle('Draw!')
                                            .setColor(options.drawColor || '#808080')
                                            .setDescription(`Both players chose **${op}**`)
                                            .setFooter(((_30 = options.embed) === null || _30 === void 0 ? void 0 : _30.credit) === false
                                            ? (_31 = options.embed) === null || _31 === void 0 ? void 0 : _31.footer
                                            : {
                                                text: '????? Simply Develop. npm i simply-djs',
                                                iconURL: 'https://i.imgur.com/u8VlLom.png'
                                            })
                                    ],
                                    components: []
                                };
                                if (interaction) {
                                    yield interaction.editReply(mm);
                                }
                                if (!interaction) {
                                    yield m.edit(mm);
                                }
                            }
                            else if (winnerMap[op] === auth) {
                                op = op
                                    .replace('scissors', `${(_33 = (_32 = options.buttons) === null || _32 === void 0 ? void 0 : _32.scissor) === null || _33 === void 0 ? void 0 : _33.emoji} ${(_35 = (_34 = options.buttons) === null || _34 === void 0 ? void 0 : _34.scissor) === null || _35 === void 0 ? void 0 : _35.label}`)
                                    .replace('paper', `${(_37 = (_36 = options.buttons) === null || _36 === void 0 ? void 0 : _36.paper) === null || _37 === void 0 ? void 0 : _37.emoji} ${(_39 = (_38 = options.buttons) === null || _38 === void 0 ? void 0 : _38.paper) === null || _39 === void 0 ? void 0 : _39.label}`)
                                    .replace('rock', `${(_41 = (_40 = options.buttons) === null || _40 === void 0 ? void 0 : _40.rock) === null || _41 === void 0 ? void 0 : _41.emoji} ${(_43 = (_42 = options.buttons) === null || _42 === void 0 ? void 0 : _42.rock) === null || _43 === void 0 ? void 0 : _43.label}`);
                                auth = auth
                                    .replace('scissors', `${(_45 = (_44 = options.buttons) === null || _44 === void 0 ? void 0 : _44.scissor) === null || _45 === void 0 ? void 0 : _45.emoji} ${(_47 = (_46 = options.buttons) === null || _46 === void 0 ? void 0 : _46.scissor) === null || _47 === void 0 ? void 0 : _47.label}`)
                                    .replace('paper', `${(_49 = (_48 = options.buttons) === null || _48 === void 0 ? void 0 : _48.paper) === null || _49 === void 0 ? void 0 : _49.emoji} ${(_51 = (_50 = options.buttons) === null || _50 === void 0 ? void 0 : _50.paper) === null || _51 === void 0 ? void 0 : _51.label}`)
                                    .replace('rock', `${(_53 = (_52 = options.buttons) === null || _52 === void 0 ? void 0 : _52.rock) === null || _53 === void 0 ? void 0 : _53.emoji} ${(_55 = (_54 = options.buttons) === null || _54 === void 0 ? void 0 : _54.rock) === null || _55 === void 0 ? void 0 : _55.label}`);
                                const mm = {
                                    content: '** **',
                                    embeds: [
                                        new discord_js_1.EmbedBuilder()
                                            .setTitle(`${opponent.tag} Won !`)
                                            .setColor(options.winColor || '#00FF00')
                                            .setDescription(`**${op}** defeats **${auth}**`)
                                            .setFooter(((_56 = options.embed) === null || _56 === void 0 ? void 0 : _56.credit) === false
                                            ? (_57 = options.embed) === null || _57 === void 0 ? void 0 : _57.footer
                                            : {
                                                text: '????? Simply Develop. npm i simply-djs',
                                                iconURL: 'https://i.imgur.com/u8VlLom.png'
                                            })
                                    ],
                                    components: []
                                };
                                //op - won
                                if (interaction) {
                                    yield interaction.editReply(mm);
                                    resolve(opponent);
                                }
                                else if (!interaction) {
                                    resolve(opponent);
                                    yield m.edit(mm);
                                }
                            }
                            else {
                                op = op
                                    .replace('scissors', `${(_59 = (_58 = options.buttons) === null || _58 === void 0 ? void 0 : _58.scissor) === null || _59 === void 0 ? void 0 : _59.emoji} ${(_61 = (_60 = options.buttons) === null || _60 === void 0 ? void 0 : _60.scissor) === null || _61 === void 0 ? void 0 : _61.label}`)
                                    .replace('paper', `${(_63 = (_62 = options.buttons) === null || _62 === void 0 ? void 0 : _62.paper) === null || _63 === void 0 ? void 0 : _63.emoji} ${(_65 = (_64 = options.buttons) === null || _64 === void 0 ? void 0 : _64.paper) === null || _65 === void 0 ? void 0 : _65.label}`)
                                    .replace('rock', `${(_67 = (_66 = options.buttons) === null || _66 === void 0 ? void 0 : _66.rock) === null || _67 === void 0 ? void 0 : _67.emoji} ${(_69 = (_68 = options.buttons) === null || _68 === void 0 ? void 0 : _68.rock) === null || _69 === void 0 ? void 0 : _69.label}`);
                                auth = auth
                                    .replace('scissors', `${(_71 = (_70 = options.buttons) === null || _70 === void 0 ? void 0 : _70.scissor) === null || _71 === void 0 ? void 0 : _71.emoji} ${(_73 = (_72 = options.buttons) === null || _72 === void 0 ? void 0 : _72.scissor) === null || _73 === void 0 ? void 0 : _73.label}`)
                                    .replace('paper', `${(_75 = (_74 = options.buttons) === null || _74 === void 0 ? void 0 : _74.paper) === null || _75 === void 0 ? void 0 : _75.emoji} ${(_77 = (_76 = options.buttons) === null || _76 === void 0 ? void 0 : _76.paper) === null || _77 === void 0 ? void 0 : _77.label}`)
                                    .replace('rock', `${(_79 = (_78 = options.buttons) === null || _78 === void 0 ? void 0 : _78.rock) === null || _79 === void 0 ? void 0 : _79.emoji} ${(_81 = (_80 = options.buttons) === null || _80 === void 0 ? void 0 : _80.rock) === null || _81 === void 0 ? void 0 : _81.label}`);
                                const mm = {
                                    content: '** **',
                                    embeds: [
                                        new discord_js_1.EmbedBuilder()
                                            .setTitle(`${message.member.user.tag} Won !`)
                                            .setColor(options.winColor || '#00FF00')
                                            .setDescription(`**${auth}** defeats **${op}**`)
                                            .setFooter(((_82 = options.embed) === null || _82 === void 0 ? void 0 : _82.credit) === false
                                            ? (_83 = options.embed) === null || _83 === void 0 ? void 0 : _83.footer
                                            : {
                                                text: '????? Simply Develop. npm i simply-djs',
                                                iconURL: 'https://i.imgur.com/u8VlLom.png'
                                            })
                                    ],
                                    components: []
                                };
                                //auth - won
                                if (interaction) {
                                    yield interaction.editReply(mm);
                                }
                                else if (!interaction) {
                                    yield m.edit(mm);
                                }
                                resolve(message.member.user);
                            }
                        }
                    }));
                    }
                }));
                acceptCollector.on('end', (coll, reason) => __awaiter(this, void 0, void 0, function* () {
                    var _84, _85;
                    if (reason === 'time') {
                        if (interaction) {
                            yield interaction.editReply({
                                content: '** **',
                                embeds: [timeoutEmbed],
                                components: []
                            });
                        }
                        else if (!interaction) {
                            yield m.edit({
                                content: '** **',
                                embeds: [timeoutEmbed],
                                components: []
                            });
                        }
                    }
                }));
            }
            catch (err) {
                console.log(`${chalk_1.default.red('Error Occured.')} | ${chalk_1.default.magenta('menuPages')} | Error: ${err.stack}`);
            }
        }));
    });
}
exports.rps = rps;