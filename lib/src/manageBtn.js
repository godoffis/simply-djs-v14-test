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
exports.manageBtn = void 0;
const discord_js_1 = require("discord.js");
const chalk_1 = __importDefault(require("chalk"));
const gSys_1 = __importDefault(require("./model/gSys"));
// ------------------------------
// ------ F U N C T I O N -------
// ------------------------------
/**
 * A Button Handler for **simplydjs package functions.** [Except Suggestion Handling !]
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/Handler/manageBtn***
 * @example simplydjs.manageBtn(interaction)
 */
function manageBtn(interaction, options = { ticketSys: { timed: true } }) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47;
            let { client } = interaction;
            if (interaction.isButton()) {
                try {
                    const member = interaction.member;
                    // ------------------------------
                    // ------ B T N - R O L E -------
                    // ------------------------------
                    if (interaction.customId.startsWith('role-')) {
                        const roleId = interaction.customId.replace('role-', '');
                        const role = yield interaction.guild.roles.fetch(roleId, {
                            force: true
                        });
                        if (!role)
                            return;
                        else {
                            yield interaction.deferReply({ ephemeral: true });
                            if (!member.roles.cache.find((r) => r.id === role.id)) {
                                member.roles
                                    // @ts-ignore
                                    .add(role)
                                    .catch((err) => interaction.channel.send({
                                    content: 'ERROR: Role is higher than me. `MISSING_PERMISSIONS`'
                                }));
                                yield interaction.editReply({
                                    content: ((_a = options === null || options === void 0 ? void 0 : options.btnRole) === null || _a === void 0 ? void 0 : _a.addedMsg) ||
                                        `??? Added the ${role.toString()} role to you.`
                                });
                            }
                            else if (member.roles.cache.find((r) => r.id === role.id)) {
                                member.roles
                                    // @ts-ignore
                                    .remove(role)
                                    .catch((err) => interaction.channel.send({
                                    content: 'ERROR: Role is higher than me. `MISSING_PERMISSIONS`'
                                }));
                                yield interaction.editReply({
                                    content: ((_b = options === null || options === void 0 ? void 0 : options.btnRole) === null || _b === void 0 ? void 0 : _b.removedMsg) ||
                                        `??? Removed the ${role.toString()} role from you.`
                                });
                            }
                        }
                    }
                    // ------------------------------
                    // ---- T I C K E T - S Y S -----
                    // ------------------------------
                    else if (interaction.customId === 'create_ticket') {
                        yield interaction.deferReply({ ephemeral: true });
                        let name = ((_c = options.ticketSys) === null || _c === void 0 ? void 0 : _c.ticketname) || `ticket_{tag}`;
                        name = name
                            .replaceAll('{username}', member.user.username)
                            .replaceAll('{tag}', member.user.tag)
                            .replaceAll('{id}', member.user.id);
                        const topic = `Ticket has been opened by <@${member.user.id}>`;
                        const check = yield interaction.guild.channels.cache.find((ch) => ch.topic === topic);
                        if (check) {
                            yield interaction.editReply({
                                content: `You have an pre-existing ticket opened (${check.toString()}). Close it before creating a new one.`
                            });
                        }
                        else if (!check) {
                            let chparent = ((_d = options.ticketSys) === null || _d === void 0 ? void 0 : _d.category) || null;
                            const category = interaction.guild.channels.cache.get((_e = options.ticketSys) === null || _e === void 0 ? void 0 : _e.category);
                            if (!category) {
                                chparent = null;
                            }
                            const ch = yield interaction.guild.channels.create(name, {
                                type: 'GUILD_TEXT',
                                topic: topic,
                                parent: chparent,
                                permissionOverwrites: [
                                    {
                                        id: interaction.guild.roles.everyone,
                                        deny: [
                                            'VIEW_CHANNEL',
                                            'SEND_MESSAGES',
                                            'READ_MESSAGE_HISTORY'
                                        ] //Deny permissions
                                    },
                                    {
                                        id: member.user.id,
                                        allow: [
                                            'VIEW_CHANNEL',
                                            'SEND_MESSAGES',
                                            'READ_MESSAGE_HISTORY'
                                        ]
                                    }
                                ]
                            });
                            yield interaction.editReply({
                                content: `???? Opened your support ticket in ${ch.toString()}.`
                            });
                            const rlz = [];
                            if ((_f = options.ticketSys) === null || _f === void 0 ? void 0 : _f.pingRole) {
                                if (Array.isArray((_g = options.ticketSys) === null || _g === void 0 ? void 0 : _g.pingRole)) {
                                    (_h = options.ticketSys) === null || _h === void 0 ? void 0 : _h.pingRole.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                                        const roler = yield interaction.guild.roles.fetch(e, {
                                            force: true
                                        });
                                        if (roler) {
                                            rlz.push(roler);
                                        }
                                    }));
                                }
                                else if (!Array.isArray((_j = options.ticketSys) === null || _j === void 0 ? void 0 : _j.pingRole)) {
                                    const roler = yield interaction.guild.roles.fetch((_k = options.ticketSys) === null || _k === void 0 ? void 0 : _k.pingRole, {
                                        force: true
                                    });
                                    if (roler) {
                                        rlz.push(roler);
                                    }
                                }
                                rlz.forEach((e) => {
                                    ch.permissionOverwrites
                                        .create(e, {
                                        VIEW_CHANNEL: true,
                                        SEND_MESSAGES: true,
                                        READ_MESSAGE_HISTORY: true
                                    })
                                        .catch((e) => { });
                                });
                            }
                            let str = '\n\nThis channel will be deleted after 30 minutes to prevent spams.';
                            if (((_l = options.ticketSys) === null || _l === void 0 ? void 0 : _l.timed) == false) {
                                str = '';
                            }
                            const emb = new discord_js_1.EmbedBuilder()
                                .setTitle(((_o = (_m = options.ticketSys) === null || _m === void 0 ? void 0 : _m.embed) === null || _o === void 0 ? void 0 : _o.title) || 'Ticket Created')
                                .setDescription((((_q = (_p = options.ticketSys) === null || _p === void 0 ? void 0 : _p.embed) === null || _q === void 0 ? void 0 : _q.description) ||
                                `Ticket has been raised by {user}. The support will reach you shortly.\n\n**User ID**: \`{id}\` | **User Tag**: \`{tag}\`${str}`)
                                .replaceAll('{user}', member.user.toString())
                                .replaceAll('{tag}', member.user.tag)
                                .replaceAll('{id}', member.user.id)
                                .replaceAll('{guild}', interaction.guild.name))
                                .setThumbnail(interaction.guild.iconURL())
                                .setTimestamp()
                                .setColor(((_s = (_r = options === null || options === void 0 ? void 0 : options.ticketSys) === null || _r === void 0 ? void 0 : _r.embed) === null || _s === void 0 ? void 0 : _s.color) || '#075FFF')
                                .setFooter(((_u = (_t = options.ticketSys) === null || _t === void 0 ? void 0 : _t.embed) === null || _u === void 0 ? void 0 : _u.credit) === false
                                ? (_w = (_v = options.ticketSys) === null || _v === void 0 ? void 0 : _v.embed) === null || _w === void 0 ? void 0 : _w.footer
                                : {
                                    text: '????? Simply Develop. npm i simply-djs',
                                    iconURL: 'https://i.imgur.com/u8VlLom.png'
                                });
                            if ((_y = (_x = options.ticketSys) === null || _x === void 0 ? void 0 : _x.embed) === null || _y === void 0 ? void 0 : _y.author)
                                emb.setAuthor((_0 = (_z = options.ticketSys) === null || _z === void 0 ? void 0 : _z.embed) === null || _0 === void 0 ? void 0 : _0.author);
                            const close = new discord_js_1.ButtonBuilder()
                                .setStyle(((_3 = (_2 = (_1 = options.ticketSys) === null || _1 === void 0 ? void 0 : _1.buttons) === null || _2 === void 0 ? void 0 : _2.close) === null || _3 === void 0 ? void 0 : _3.style) || discord_js_1.ButtonStyle.Danger)
                                .setEmoji(((_6 = (_5 = (_4 = options.ticketSys) === null || _4 === void 0 ? void 0 : _4.buttons) === null || _5 === void 0 ? void 0 : _5.close) === null || _6 === void 0 ? void 0 : _6.emoji) || '????')
                                .setLabel(((_9 = (_8 = (_7 = options.ticketSys) === null || _7 === void 0 ? void 0 : _7.buttons) === null || _8 === void 0 ? void 0 : _8.close) === null || _9 === void 0 ? void 0 : _9.label) || 'Close')
                                .setCustomId('close_ticket');
                            const closerow = new discord_js_1.ActionRowBuilder().addComponents([close]);
                            ch.send({
                                content: `Here is your ticket ${member.user.toString()}. | ${rlz.join(',')}`,
                                embeds: [emb],
                                components: [closerow]
                            }).then((msg) => __awaiter(this, void 0, void 0, function* () {
                                yield msg.pin();
                            }));
                            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                                yield ch.delete().catch(() => { });
                            }), 1000 * 60 * 30);
                        }
                    }
                    else if (interaction.customId === 'close_ticket') {
                        yield interaction.deferReply({ ephemeral: true });
                        interaction.editReply({ content: 'Locking the channel.' });
                        interaction.channel.permissionOverwrites
                            .edit(interaction.guild.roles.everyone, {
                            SEND_MESSAGES: false
                        })
                            .catch((err) => { });
                        const X_btn = new discord_js_1.ButtonBuilder()
                            .setStyle(((_12 = (_11 = (_10 = options.ticketSys) === null || _10 === void 0 ? void 0 : _10.buttons) === null || _11 === void 0 ? void 0 : _11.delete) === null || _12 === void 0 ? void 0 : _12.style) || discord_js_1.ButtonStyle.Danger)
                            .setEmoji(((_15 = (_14 = (_13 = options.ticketSys) === null || _13 === void 0 ? void 0 : _13.buttons) === null || _14 === void 0 ? void 0 : _14.delete) === null || _15 === void 0 ? void 0 : _15.emoji) || '???')
                            .setLabel(((_18 = (_17 = (_16 = options.ticketSys) === null || _16 === void 0 ? void 0 : _16.buttons) === null || _17 === void 0 ? void 0 : _17.delete) === null || _18 === void 0 ? void 0 : _18.label) || 'Delete')
                            .setCustomId('delete_ticket');
                        const open_btn = new discord_js_1.ButtonBuilder()
                            .setStyle(((_21 = (_20 = (_19 = options.ticketSys) === null || _19 === void 0 ? void 0 : _19.buttons) === null || _20 === void 0 ? void 0 : _20.reopen) === null || _21 === void 0 ? void 0 : _21.style) || discord_js_1.ButtonStyle.Success)
                            .setEmoji(((_24 = (_23 = (_22 = options.ticketSys) === null || _22 === void 0 ? void 0 : _22.buttons) === null || _23 === void 0 ? void 0 : _23.reopen) === null || _24 === void 0 ? void 0 : _24.emoji) || '????')
                            .setLabel(((_27 = (_26 = (_25 = options.ticketSys) === null || _25 === void 0 ? void 0 : _25.buttons) === null || _26 === void 0 ? void 0 : _26.delete) === null || _27 === void 0 ? void 0 : _27.label) || 'Reopen')
                            .setCustomId('open_ticket');
                        const tr_btn = new discord_js_1.ButtonBuilder()
                            .setStyle(((_30 = (_29 = (_28 = options.ticketSys) === null || _28 === void 0 ? void 0 : _28.buttons) === null || _29 === void 0 ? void 0 : _29.transcript) === null || _30 === void 0 ? void 0 : _30.style) || discord_js_1.ButtonStyle.Primary)
                            .setEmoji(((_33 = (_32 = (_31 = options.ticketSys) === null || _31 === void 0 ? void 0 : _31.buttons) === null || _32 === void 0 ? void 0 : _32.transcript) === null || _33 === void 0 ? void 0 : _33.emoji) || '????')
                            .setLabel(((_36 = (_35 = (_34 = options.ticketSys) === null || _34 === void 0 ? void 0 : _34.buttons) === null || _35 === void 0 ? void 0 : _35.transcript) === null || _36 === void 0 ? void 0 : _36.label) || 'Transcript')
                            .setCustomId('tr_ticket');
                        const row = new discord_js_1.ActionRowBuilder().addComponents([
                            open_btn,
                            X_btn,
                            tr_btn
                        ]);
                        yield interaction.message.edit({
                            components: [row]
                        });
                    }
                    else if (interaction.customId === 'tr_ticket') {
                        yield interaction.deferReply({ ephemeral: true });
                        let messagecollection = yield interaction.channel.messages.fetch({
                            limit: 100
                        });
                        const response = [];
                        messagecollection = messagecollection.sort((a, b) => a.createdTimestamp - b.createdTimestamp);
                        messagecollection.forEach((m) => {
                            if (m.author.bot)
                                return;
                            const attachment = m.attachments.first();
                            const url = attachment ? attachment.url : null;
                            if (url !== null) {
                                m.content = url;
                            }
                            response.push(`[${m.author.tag} | ${m.author.id}] => ${m.content}`);
                        });
                        yield interaction.editReply({
                            content: 'Collecting messages to create logs'
                        });
                        let use = interaction.channel.topic
                            .replace(`Ticket has been opened by <@`, '')
                            .replace('>', '');
                        use = yield interaction.guild.members.fetch(use);
                        const attach = new discord_js_1.AttachmentBuilder(Buffer.from(response.join(`\n`), 'utf-8'), `${use.user.tag}.txt`);
                        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                            yield interaction.followUp({
                                content: 'Done. Generated the logs',
                                files: [attach],
                                embeds: [],
                                ephemeral: false
                            });
                        }), 2300);
                    }
                    else if (interaction.customId === 'delete_ticket') {
                        yield interaction.deferReply({ ephemeral: false });
                        const yes = new discord_js_1.ButtonBuilder()
                            .setCustomId('yea_del')
                            .setLabel('Delete')
                            .setStyle(discord_js_1.ButtonStyle.Danger);
                        const no = new discord_js_1.ButtonBuilder()
                            .setCustomId('dont_del')
                            .setLabel('Cancel')
                            .setStyle(discord_js_1.ButtonStyle.Success);
                        const row = new discord_js_1.ActionRowBuilder().addComponents([yes, no]);
                        interaction.editReply({
                            content: 'Are you sure ?? This process is not reversible !',
                            components: [row]
                        });
                    }
                    else if (interaction.customId === 'yea_del') {
                        yield interaction.message.edit({
                            content: 'Deleting the channel..',
                            embeds: [],
                            components: []
                        });
                        let messagecollection = yield interaction.channel.messages.fetch({
                            limit: 100
                        });
                        const response = [];
                        messagecollection = messagecollection.sort((a, b) => a.createdTimestamp - b.createdTimestamp);
                        messagecollection.forEach((m) => {
                            if (m.author.bot)
                                return;
                            const attachment = m.attachments.first();
                            const url = attachment ? attachment.url : null;
                            if (url !== null) {
                                m.content = url;
                            }
                            response.push(`[${m.author.tag} | ${m.author.id}] => ${m.content}`);
                        });
                        const attach = new discord_js_1.AttachmentBuilder(Buffer.from(response.join(`\n`), 'utf-8'), `${interaction.channel.topic}.txt`);
                        let use = interaction.channel.topic
                            .replace(`Ticket has been opened by <@`, '')
                            .replace('>', '');
                        use = yield interaction.guild.members.fetch(use);
                        resolve({
                            type: 'Delete',
                            channelId: interaction.channel.id,
                            user: use.user,
                            data: attach
                        });
                        if ((_37 = options.ticketSys) === null || _37 === void 0 ? void 0 : _37.logChannelId) {
                            let ch = yield client.channels.fetch((_38 = options.ticketSys) === null || _38 === void 0 ? void 0 : _38.logChannelId, {
                                cache: true
                            });
                            if (ch) {
                                const log = new discord_js_1.EmbedBuilder()
                                    .setTitle('Ticket deleted')
                                    .setDescription(`We found an ticket \`${interaction.channel.name}\` getting deleted by ${use.user}.`)
                                    .setTimestamp()
                                    .setColor('RED');
                                yield ch.send({
                                    embeds: [log],
                                    files: [attach]
                                });
                            }
                            else
                                return;
                        }
                        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                            yield interaction.channel.delete();
                        }), 2000);
                    }
                    else if (interaction.customId === 'dont_del') {
                        yield interaction.deferUpdate();
                        interaction.message.edit({
                            content: 'You denied to delete',
                            components: []
                        });
                    }
                    else if (interaction.customId === 'open_ticket') {
                        yield interaction.deferReply({ ephemeral: true });
                        interaction.editReply({ content: 'Unlocking the channel.' });
                        interaction.channel.permissionOverwrites
                            .edit(interaction.guild.roles.everyone, {
                            SEND_MESSAGES: true
                        })
                            .catch((err) => { });
                        const close = new discord_js_1.ButtonBuilder()
                            .setStyle(((_41 = (_40 = (_39 = options.ticketSys) === null || _39 === void 0 ? void 0 : _39.buttons) === null || _40 === void 0 ? void 0 : _40.close) === null || _41 === void 0 ? void 0 : _41.style) || discord_js_1.ButtonStyle.Danger)
                            .setEmoji(((_44 = (_43 = (_42 = options.ticketSys) === null || _42 === void 0 ? void 0 : _42.buttons) === null || _43 === void 0 ? void 0 : _43.close) === null || _44 === void 0 ? void 0 : _44.emoji) || '????')
                            .setLabel(((_47 = (_46 = (_45 = options.ticketSys) === null || _45 === void 0 ? void 0 : _45.buttons) === null || _46 === void 0 ? void 0 : _46.close) === null || _47 === void 0 ? void 0 : _47.label) || 'Close')
                            .setCustomId('close_ticket');
                        const closerow = new discord_js_1.ActionRowBuilder().addComponents([close]);
                        interaction.message.edit({ components: [closerow] });
                    }
                    // ------------------------------
                    // ------ G I V E A W A Y -------
                    // ------------------------------
                    else if (interaction.customId === 'enter_giveaway') {
                        yield interaction.deferReply({ ephemeral: true });
                        const data = yield gSys_1.default.findOne({
                            message: interaction.message.id
                        });
                        if (Number(data.endTime) < Date.now())
                            return;
                        else {
                            if (data.requirements.type === 'role') {
                                if (!interaction.member.roles.cache.find((r) => r.id === data.requirements.id))
                                    return interaction.editReply({
                                        content: 'You do not fall under the requirements. | You dont have the role'
                                    });
                            }
                            if (data.requirements.type === 'guild') {
                                const g = interaction.client.guilds.cache.get(data.requirements.id);
                                const mem = yield g.members.fetch(interaction.member.user.id);
                                if (!mem)
                                    return interaction.editReply({
                                        content: 'You do not fall under the requirements. | Join the server.'
                                    });
                            }
                            const entris = data.entry.find((id) => id.userID === member.user.id);
                            if (entris) {
                                yield gSys_1.default.findOneAndUpdate({
                                    message: interaction.message.id
                                }, {
                                    $pull: { entry: { userID: member.user.id } }
                                });
                                data.entered = data.entered - 1;
                                yield data.save().then((a) => __awaiter(this, void 0, void 0, function* () {
                                    yield interaction.editReply({
                                        content: 'Left the giveaway ;('
                                    });
                                }));
                            }
                            else if (!entris) {
                                data.entry.push({
                                    userID: member.user.id,
                                    guildID: interaction.guild.id,
                                    messageID: interaction.message.id
                                });
                                data.entered = data.entered + 1;
                                yield data.save().then((a) => __awaiter(this, void 0, void 0, function* () {
                                    yield interaction.editReply({
                                        content: 'Entered the giveaway !'
                                    });
                                }));
                            }
                            const eem = interaction.message.embeds[0];
                            interaction.message.components[0].components[0] = discord_js_1.ButtonBuilder.from(interaction.message.components[0].components[0])
                            interaction.message.components[0].components[0].data.label = data.entered.toString();
                            const mes = interaction.message;
                            mes.edit({
                                embeds: [eem],
                                components: interaction.message.components
                            });
                        }
                    }
                    if (interaction.customId === 'end_giveaway' ||
                        interaction.customId === 'reroll_giveaway') {
                        const allComp = yield interaction.message.components[0];
                        const ftr = yield interaction.message.embeds[0].footer;
                        const embeded = new discord_js_1.EmbedBuilder()
                            .setTitle('Processing Data...')
                            .setColor(0xcc0000)
                            .setDescription(`Please wait.. We are Processing the winner with some magiks`)
                            .setFooter({
                            text: 'Ending the Giveaway, Scraping the ticket..'
                        });
                        const msg = interaction.message;
                        yield msg.edit({ embeds: [embeded], components: [] }).catch(() => { });
                        const dispWin = [];
                        const dt = yield gSys_1.default.findOne({ message: msg.id });
                        dt.endTime = undefined;
                        yield dt.save().catch(() => { });
                        const winArr = [];
                        const winCt = dt.winCount;
                        const entries = dt.entry;
                        if (dt.entered > 0) {
                            for (let i = 0; i < winCt; i++) {
                                const winno = Math.floor(Math.random() * dt.entered);
                                winArr.push(entries[winno]);
                            }
                        }
                        setTimeout(() => {
                            winArr.forEach((name) => __awaiter(this, void 0, void 0, function* () {
                                yield interaction.guild.members
                                    .fetch(name.userID)
                                    .then((user) => {
                                    dispWin.push(`<@${user.user.id}>`);
                                    const embod = new discord_js_1.EmbedBuilder()
                                        .setTitle('You.. Won the Giveaway !')
                                        .setDescription(`You just won \`${dt.prize}\` in the Giveaway at \`${user.guild.name}\` Go claim it fast !`)
                                        .setColor(0x075fff)
                                        .setFooter(ftr);
                                    const gothe = new discord_js_1.ButtonBuilder()
                                        .setLabel('View Giveaway')
                                        .setStyle(discord_js_1.ButtonStyle.Link)
                                        .setURL(msg.url);
                                    const entrow = new discord_js_1.ActionRowBuilder().addComponents([gothe]);
                                    return user
                                        .send({ embeds: [embod], components: [entrow] })
                                        .catch(() => { });
                                })
                                    .catch(() => { });
                            }));
                        }, 2000);
                        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                            if (!dt)
                                return yield msg.delete();
                            if (dt) {
                                const embed = interaction.message.embeds[0];
                                const tim = Number(dt.endTime);
                                const f = [];
                                embed.fields.forEach((a) => {
                                    if (a.name === 'Requirements')
                                        return;
                                    a.value = a.value
                                        .replaceAll('{hosted}', `<@${dt.host}>`)
                                        .replaceAll('{endsAt}', `<t:${tim}:f>`)
                                        .replaceAll('{prize}', dt.prize.toString())
                                        .replaceAll('{winCount}', dt.winCount.toString())
                                        .replaceAll('{entered}', dt.entered.toString());
                                    f.push(a);
                                });
                                if (dt.entered <= 0 || !winArr[0]) {
                                    embed.data = {
                                        type: 'rich',
                                        title: 'No one entered',
                                        fields: f,
                                        color: 0x3bb143,
                                        footer: { text: ftr.text, iconURL: ftr.iconURL }
                                    }
                                    return yield msg.edit({
                                        embeds: [embed],
                                        components: []
                                    });
                                }
                                const resWin = [];
                                console.log(embed.data)
                                allComp.components[0].data.disabled = true;
                                allComp.components[1].data.disabled = false;
                                allComp.components[2].data.disabled = true;
                                embed.data = {
                                    type: 'rich',
                                    title: 'We got the winner !',
                                    description: (`${dispWin.join(', ')} won in \`${dt.prize}\` !\n`),
                                    fields: f,
                                    color: 0x3bb143,
                                    footer: { text: ftr.text, iconURL: ftr.iconURL }
                                }
                                
                                //@ts-ignore
                                yield msg.edit({ embeds: [embed], components: [allComp] });
                                if (interaction.customId === 'reroll_giveaway') {
                                    resolve({
                                        type: 'Reroll',
                                        msgURL: msg.url,
                                        user: resWin
                                    });
                                }
                            }
                        }), 5200);
                    }
                }
                catch (err) {
                    console.log(`${chalk_1.default.red('Error Occured.')} | ${chalk_1.default.magenta('manageBtn')} | Error: ${err.stack}`);
                }
            }
            else
                return;
        }));
    });
}
exports.manageBtn = manageBtn;
