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
exports.embedPages = void 0;
const discord_js_1 = require("discord.js");
const chalk_1 = __importDefault(require("chalk"));
const Error_1 = require("./Error/Error");
// ------------------------------
// ------ F U N C T I O N -------
// ------------------------------
/**
 * An *powerful yet customizable* **Embed Paginator**
 *
 * @param message
 * @param pages
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/embedPages***
 * @example simplydjs.embedPages(message, [embed1, embed2] )
 */
function embedPages(message, pages, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (_a = options.skips) !== null && _a !== void 0 ? _a : (options.skips = true);
            (_b = options.delete) !== null && _b !== void 0 ? _b : (options.delete = true);
            (_c = options.dynamic) !== null && _c !== void 0 ? _c : (options.dynamic = false);
            (_d = options.count) !== null && _d !== void 0 ? _d : (options.count = false);
            options.disable || (options.disable = 'Label');
            if (!pages)
                throw new Error_1.SimplyError({
                    name: 'NOT_SPECIFIED | Provide an array for the pages option',
                    tip: `Expected an array of MessageEmbed. Received ${pages || 'undefined'}`
                });
            let comps;
            if (options.rows) {
                if (!Array.isArray(options.rows))
                    throw new Error_1.SimplyError({
                        name: `NOT_SPECIFIED | Provide an array for the rows`,
                        tip: `Expected an array of ActionRowBuilders. Received ${options.rows || 'undefined'}`
                    });
                comps = options.rows;
            }
            else {
                comps = [];
            }
            options.buttons = {
                firstBtn: {
                    style: ((_f = (_e = options.buttons) === null || _e === void 0 ? void 0 : _e.firstBtn) === null || _f === void 0 ? void 0 : _f.style) || discord_js_1.ButtonStyle.Primary,
                    emoji: ((_h = (_g = options.buttons) === null || _g === void 0 ? void 0 : _g.firstBtn) === null || _h === void 0 ? void 0 : _h.emoji) || '???',
                    label: ((_k = (_j = options.buttons) === null || _j === void 0 ? void 0 : _j.firstBtn) === null || _k === void 0 ? void 0 : _k.label) || 'First'
                },
                nextBtn: {
                    style: ((_m = (_l = options.buttons) === null || _l === void 0 ? void 0 : _l.nextBtn) === null || _m === void 0 ? void 0 : _m.style) || discord_js_1.ButtonStyle.Success,
                    emoji: ((_p = (_o = options.buttons) === null || _o === void 0 ? void 0 : _o.nextBtn) === null || _p === void 0 ? void 0 : _p.emoji) || '??????',
                    label: ((_r = (_q = options.buttons) === null || _q === void 0 ? void 0 : _q.nextBtn) === null || _r === void 0 ? void 0 : _r.label) || 'Next'
                },
                backBtn: {
                    style: ((_t = (_s = options.buttons) === null || _s === void 0 ? void 0 : _s.backBtn) === null || _t === void 0 ? void 0 : _t.style) || discord_js_1.ButtonStyle.Success,
                    emoji: ((_v = (_u = options.buttons) === null || _u === void 0 ? void 0 : _u.backBtn) === null || _v === void 0 ? void 0 : _v.emoji) || '??????',
                    label: ((_x = (_w = options.buttons) === null || _w === void 0 ? void 0 : _w.backBtn) === null || _x === void 0 ? void 0 : _x.label) || 'Back'
                },
                lastBtn: {
                    style: ((_z = (_y = options.buttons) === null || _y === void 0 ? void 0 : _y.lastBtn) === null || _z === void 0 ? void 0 : _z.style) || discord_js_1.ButtonStyle.Primary,
                    emoji: ((_1 = (_0 = options.buttons) === null || _0 === void 0 ? void 0 : _0.lastBtn) === null || _1 === void 0 ? void 0 : _1.emoji) || '???',
                    label: ((_3 = (_2 = options.buttons) === null || _2 === void 0 ? void 0 : _2.lastBtn) === null || _3 === void 0 ? void 0 : _3.label) || 'Last'
                },
                deleteBtn: {
                    style: ((_5 = (_4 = options.buttons) === null || _4 === void 0 ? void 0 : _4.deleteBtn) === null || _5 === void 0 ? void 0 : _5.style) || discord_js_1.ButtonStyle.Danger,
                    emoji: ((_7 = (_6 = options.buttons) === null || _6 === void 0 ? void 0 : _6.deleteBtn) === null || _7 === void 0 ? void 0 : _7.emoji) || '????',
                    label: ((_9 = (_8 = options.buttons) === null || _8 === void 0 ? void 0 : _8.deleteBtn) === null || _9 === void 0 ? void 0 : _9.label) || 'Delete'
                }
            };
            //Defining all buttons
            const firstBtn = new discord_js_1.ButtonBuilder()
                .setCustomId('first_embed')
                .setStyle((_11 = (_10 = options.buttons) === null || _10 === void 0 ? void 0 : _10.firstBtn) === null || _11 === void 0 ? void 0 : _11.style);
            if (options.disable === 'Label' || options.disable === 'None')
                firstBtn.setEmoji((_13 = (_12 = options.buttons) === null || _12 === void 0 ? void 0 : _12.firstBtn) === null || _13 === void 0 ? void 0 : _13.emoji);
            else if (options.disable === 'Emoji' || options.disable === 'None')
                firstBtn.setLabel((_15 = (_14 = options.buttons) === null || _14 === void 0 ? void 0 : _14.firstBtn) === null || _15 === void 0 ? void 0 : _15.label);
            const forwardBtn = new discord_js_1.ButtonBuilder()
                .setCustomId('forward_button_embed')
                .setStyle((_17 = (_16 = options.buttons) === null || _16 === void 0 ? void 0 : _16.nextBtn) === null || _17 === void 0 ? void 0 : _17.style);
            if (options.disable === 'Label' || options.disable === 'None')
                forwardBtn.setEmoji((_19 = (_18 = options.buttons) === null || _18 === void 0 ? void 0 : _18.nextBtn) === null || _19 === void 0 ? void 0 : _19.emoji);
            else if (options.disable === 'Emoji' || options.disable === 'None')
                forwardBtn.setLabel((_21 = (_20 = options.buttons) === null || _20 === void 0 ? void 0 : _20.nextBtn) === null || _21 === void 0 ? void 0 : _21.label);
            const backBtn = new discord_js_1.ButtonBuilder()
                .setCustomId('back_button_embed')
                .setStyle((_23 = (_22 = options.buttons) === null || _22 === void 0 ? void 0 : _22.backBtn) === null || _23 === void 0 ? void 0 : _23.style);
            if (options.disable === 'Label' || options.disable === 'None')
                backBtn.setEmoji((_25 = (_24 = options.buttons) === null || _24 === void 0 ? void 0 : _24.backBtn) === null || _25 === void 0 ? void 0 : _25.emoji);
            else if (options.disable === 'Emoji' || options.disable === 'None')
                backBtn.setLabel((_27 = (_26 = options.buttons) === null || _26 === void 0 ? void 0 : _26.backBtn) === null || _27 === void 0 ? void 0 : _27.label);
            if (options.dynamic) {
                firstBtn.setDisabled(true);
                backBtn.setDisabled(true);
            }
            const lastBtn = new discord_js_1.ButtonBuilder()
                .setCustomId('last_embed')
                .setStyle((_29 = (_28 = options.buttons) === null || _28 === void 0 ? void 0 : _28.lastBtn) === null || _29 === void 0 ? void 0 : _29.style);
            if (options.disable === 'Label' || options.disable === 'None')
                lastBtn.setEmoji((_31 = (_30 = options.buttons) === null || _30 === void 0 ? void 0 : _30.lastBtn) === null || _31 === void 0 ? void 0 : _31.emoji);
            else if (options.disable === 'Emoji' || options.disable === 'None')
                lastBtn.setLabel((_33 = (_32 = options.buttons) === null || _32 === void 0 ? void 0 : _32.lastBtn) === null || _33 === void 0 ? void 0 : _33.label);
            const deleteBtn = new discord_js_1.ButtonBuilder()
                .setCustomId('delete_embed')
                .setStyle((_35 = (_34 = options.buttons) === null || _34 === void 0 ? void 0 : _34.deleteBtn) === null || _35 === void 0 ? void 0 : _35.style);
            if (options.disable === 'Label' || options.disable === 'None')
                deleteBtn.setEmoji((_37 = (_36 = options.buttons) === null || _36 === void 0 ? void 0 : _36.deleteBtn) === null || _37 === void 0 ? void 0 : _37.emoji);
            else if (options.disable === 'Emoji' || options.disable === 'None')
                deleteBtn.setLabel((_39 = (_38 = options.buttons) === null || _38 === void 0 ? void 0 : _38.deleteBtn) === null || _39 === void 0 ? void 0 : _39.label);
            let btnCollection = [];
            //Creating the ActionRowBuilder
            let pageMovingButtons = new discord_js_1.ActionRowBuilder();
            if (options.skips == true) {
                if (options.delete) {
                    btnCollection = [firstBtn, backBtn, deleteBtn, forwardBtn, lastBtn];
                }
                else {
                    btnCollection = [firstBtn, backBtn, forwardBtn, lastBtn];
                }
            }
            else {
                if (options.delete) {
                    btnCollection = [backBtn, deleteBtn, forwardBtn];
                }
                else {
                    btnCollection = [backBtn, forwardBtn];
                }
            }
            pageMovingButtons.addComponents(btnCollection);
            let currentPage = 0;
            comps.push(pageMovingButtons);
            let interaction;
            if (message.commandId) {
                interaction = message;
            }
            let m;
            const int = message;
            const ms = message;
            if (interaction) {
                if (options.count) {
                    yield int.followUp({
                        embeds: [pages[0].setFooter({ text: `Page 1/${pages.length}` })],
                        components: comps,
                        allowedMentions: { repliedUser: false }
                    });
                }
                else {
                    yield int.followUp({
                        embeds: [pages[0]],
                        components: comps,
                        allowedMentions: { repliedUser: false }
                    });
                }
                m = yield int.fetchReply();
            }
            else if (!interaction) {
                if (options.count) {
                    m = yield ms.reply({
                        embeds: [pages[0].setFooter({ text: `Page 1/${pages.length}` })],
                        components: comps,
                        allowedMentions: { repliedUser: false }
                    });
                }
                else {
                    m = yield message.reply({
                        embeds: [pages[0]],
                        components: comps,
                        allowedMentions: { repliedUser: false }
                    });
                }
            }
            const filter = (m) => m.user.id === (message.user ? message.user : message.author).id;
            const collector = m.createMessageComponentCollector({
                time: options.timeout || 120000,
                filter,
                componentType: discord_js_1.ComponentType.Button
            });
            collector.on('collect', (b) => __awaiter(this, void 0, void 0, function* () {
                if (!b.isButton())
                    return;
                if (b.message.id !== m.id)
                    return;
                yield b.deferUpdate();
                if (b.customId == 'back_button_embed') {
                    if (currentPage - 1 < 0)
                        currentPage = pages.length - 1;
                    else
                        currentPage -= 1;
                }
                else if (b.customId == 'forward_button_embed') {
                    if (currentPage + 1 == pages.length)
                        currentPage = 0;
                    else
                        currentPage += 1;
                }
                else if (b.customId == 'last_embed') {
                    currentPage = pages.length - 1;
                }
                else if (b.customId == 'first_embed') {
                    currentPage = 0;
                }
                if (options.dynamic) {
                    if (currentPage === 0) {
                        const bt = comps[0].components[0];
                        bt.disabled = true;
                        if (options.skips) {
                            const inde = comps[0].components[1];
                            inde.disabled = true;
                            comps[0].components[1] = inde;
                        }
                        comps[0].components[0] = bt;
                    }
                    else {
                        const bt = comps[0].components[0];
                        bt.disabled = false;
                        if (options.skips) {
                            const inde = comps[0].components[1];
                            inde.disabled = false;
                            comps[0].components[1] = inde;
                        }
                        comps[0].components[0] = bt;
                    }
                    if (currentPage === pages.length - 1) {
                        if (options.skips) {
                            const bt = comps[0].components[3];
                            const inde = comps[0].components[4];
                            inde.disabled = true;
                            bt.disabled = true;
                            comps[0].components[3] = bt;
                            comps[0].components[4] = inde;
                        }
                        else {
                            const bt = comps[0].components[2];
                            bt.disabled = true;
                            comps[0].components[2] = bt;
                        }
                    }
                    else {
                        if (options.skips) {
                            const bt = comps[0].components[3];
                            const inde = comps[0].components[4];
                            inde.disabled = false;
                            bt.disabled = false;
                            comps[0].components[3] = bt;
                            comps[0].components[4] = inde;
                        }
                        else {
                            const bt = comps[0].components[2];
                            bt.disabled = false;
                            comps[0].components[2] = bt;
                        }
                    }
                }
                if (b.customId !== 'delete_embed') {
                    if (options.count) {
                        m.edit({
                            embeds: [
                                pages[currentPage].setFooter({
                                    text: `Page: ${currentPage + 1}/${pages.length}`
                                })
                            ],
                            components: comps,
                            allowedMentions: { repliedUser: false }
                        });
                    }
                    else {
                        m.edit({
                            embeds: [pages[currentPage]],
                            components: comps,
                            allowedMentions: { repliedUser: false }
                        });
                    }
                }
                else if (b.customId === 'delete_embed') {
                    collector.stop('del');
                }
            }));
            collector.on('end', (coll, reason) => __awaiter(this, void 0, void 0, function* () {
                if (reason === 'del') {
                    yield m.delete().catch(() => { });
                }
                else {
                    const disab = [];
                    btnCollection.forEach((a) => {
                        disab.push(a.setDisabled(true));
                    });
                    pageMovingButtons = new discord_js_1.ActionRowBuilder().addComponents(disab);
                    m.edit({ components: [pageMovingButtons] });
                }
            }));
        }
        catch (err) {
            console.log(`${chalk_1.default.red('Error Occured.')} | ${chalk_1.default.magenta('embedPages')} | Error: ${err.stack}`);
        }
    });
}
exports.embedPages = embedPages;
