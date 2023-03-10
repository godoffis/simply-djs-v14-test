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
exports.calculator = void 0;
const { disableButtons } = require("./Utils/Utils")
const discord_js_1 = require("discord.js");
const chalk_1 = __importDefault(require("chalk"));
// ------------------------------
// ------ F U N C T I O N -------
// ------------------------------
/**
 * An Unique **calculator** which can be *used inside Discord*
 * @param interaction
 * @param options
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/calculator***
 * @example simplydjs.calculator(interaction)
 */
function calculator(interaction, options = {
    buttons: { numbers: discord_js_1.ButtonStyle.Secondary, symbols: discord_js_1.ButtonStyle.Primary, delete: discord_js_1.ButtonStyle.Danger }
}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const button = [[], [], [], [], []];
            const row = [];
            const text = [
                'Clear',
                '(',
                ')',
                '/',
                '⌫',
                '7',
                '8',
                '9',
                '*',
                '%',
                '4',
                '5',
                '6',
                '-',
                '^',
                '1',
                '2',
                '3',
                '+',
                'π',
                '.',
                '0',
                '00',
                '=',
                'Delete'
            ];
            let current = 0;
            if (!options.embed) {
                options.embed = {
                    footer: {
                        text: '©️ Simply Develop. npm i simply-djs',
                        iconURL: 'https://i.imgur.com/u8VlLom.png'
                    },
                    color: '#075FFF',
                    credit: true
                };
            }
            options.buttons = {
                numbers: ((_a = options.buttons) === null || _a === void 0 ? void 0 : _a.numbers) || discord_js_1.ButtonStyle.Secondary,
                symbols: ((_b = options.buttons) === null || _b === void 0 ? void 0 : _b.symbols) || discord_js_1.ButtonStyle.Primary,
                delete: ((_c = options.buttons) === null || _c === void 0 ? void 0 : _c.delete) || discord_js_1.ButtonStyle.Danger
            };
            let message;
            if (!interaction.commandId) {
                message = interaction;
            }
            for (let i = 0; i < text.length; i++) {
                if (button[current].length === 5)
                    current++;
                button[current].push(createButton(text[i]));
                if (i === text.length - 1) {
                    for (const btn of button)
                        row.push(addRow(btn));
                }
            }
            const emb1 = new discord_js_1.EmbedBuilder()
                .setColor(((_d = options.embed) === null || _d === void 0 ? void 0 : _d.color) || '#075FFF')
                .setFooter(((_e = options.embed) === null || _e === void 0 ? void 0 : _e.credit) === false
                ? (_f = options.embed) === null || _f === void 0 ? void 0 : _f.footer : {
                text: '©️ Simply Develop. npm i simply-djs',
                iconURL: 'https://i.imgur.com/u8VlLom.png'
            })
                .setDescription('```js\n0\n// Result: 0\n```' +
                (((_g = options.embed) === null || _g === void 0 ? void 0 : _g.description) ? `\n${(_h = options.embed) === null || _h === void 0 ? void 0 : _h.description}` : ''));
            if ((_j = options.embed) === null || _j === void 0 ? void 0 : _j.author) {
                emb1.setAuthor((_k = options.embed) === null || _k === void 0 ? void 0 : _k.author);
            }
            if ((_l = options.embed) === null || _l === void 0 ? void 0 : _l.title) {
                emb1.setTitle((_m = options.embed) === null || _m === void 0 ? void 0 : _m.title);
            }
            let msg;
            const int = interaction;
            const ms = interaction;
            if (!message) {
                yield int.followUp({
                    embeds: [emb1],
                    components: row
                });
                msg = yield int.fetchReply();
            }
            else if (message) {
                msg = yield ms.reply({
                    embeds: [emb1],
                    components: row
                });
            }
            const time = 300000;
            let elem = '0';
            const collect = msg.createMessageComponentCollector({
                componentType: discord_js_1.ComponentType.Button,
                time: time
            });
            collect.on('collect', (button) => __awaiter(this, void 0, void 0, function* () {
                var _o, _p, _q, _r, _s, _t;
                if(message.member.user.id !== button.user.id){
                    return button.reply({
                        content: "You are not allowed to use this claculator",
                        ephemeral: true
                    })
                }
                yield button.deferUpdate();
                const btnName = button.customId.replace('cal-', '');
                if (elem === '0')
                    elem = '';
                if (btnName === '=') {
                    elem = mathEval(elem, true);
                    emb1.setDescription(`\`\`\`js\n${elem}\n\`\`\`` +
                        (((_o = options.embed) === null || _o === void 0 ? void 0 : _o.description)
                            ? `\n${(_p = options.embed) === null || _p === void 0 ? void 0 : _p.description}`
                            : ''));
                    elem = '0';
                    return yield msg
                        .edit({
                        embeds: [emb1],
                        components: row
                    })
                        .catch(() => { });
                }
                elem = elem + btnName.toString();
                if (btnName === 'Delete')
                    return yield msg.delete().catch(() => { });
                else if (btnName === 'Clear')
                    elem = '0';
                if (btnName === '⌫')
                    elem = elem.slice(0, -2);
                if (isNaN(btnName) && btnName !== '⌫') {
                    emb1.setDescription(`\`\`\`js\n${elem
                        .replaceAll('+', ' + ')
                        .replaceAll('*', ' * ')}\n\t\n\`\`\`` +
                        (((_q = options.embed) === null || _q === void 0 ? void 0 : _q.description)
                            ? `\n${(_r = options.embed) === null || _r === void 0 ? void 0 : _r.description}`
                            : ''));
                    return yield msg
                        .edit({
                        embeds: [emb1],
                        components: row
                    })
                        .catch(() => { });
                }
                emb1.setDescription(`\`\`\`js\n${elem
                    .replaceAll('+', ' + ')
                    .replaceAll('*', ' * ')}\n// Result: ${mathEval(elem)
                    .replaceAll('^', '**')
                    .replaceAll('%', '/100')
                    .replace(' ', '')}\n\`\`\`` +
                    (((_s = options.embed) === null || _s === void 0 ? void 0 : _s.description) ? `\n${(_t = options.embed) === null || _t === void 0 ? void 0 : _t.description}` : ''));
                yield msg
                    .edit({
                    embeds: [emb1],
                    components: row
                })
                    .catch(() => { });
            }));
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (!msg)
                    return;
                if (!msg.editable)
                    return;
                if (msg) {
                    if (msg.editable) {
                        emb1.setDescription('Your Time for using the calculator ran out (5 minutes)');
                        emb1.setColor(0xc90000);
                        yield msg.edit({ embeds: [emb1], components: disableButtons(msg.components) }).catch(() => { });
                    }
                }
            }), time);
            function addRow(btns) {
                const row1 = new discord_js_1.ActionRowBuilder();
                for (const btn of btns) {
                    row1.addComponents(btn);
                }
                return row1;
            }
            function createButton(label, style) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                if (style === void 0) { style = (_a = options.buttons) === null || _a === void 0 ? void 0 : _a.numbers; }
                if (label === 'Clear')
                    style = (_b = options.buttons) === null || _b === void 0 ? void 0 : _b.delete;
                else if (label === 'Delete')
                    style = (_c = options.buttons) === null || _c === void 0 ? void 0 : _c.delete;
                else if (label === '⌫')
                    style = (_d = options.buttons) === null || _d === void 0 ? void 0 : _d.delete;
                else if (label === 'π')
                    style = (_e = options.buttons) === null || _e === void 0 ? void 0 : _e.numbers;
                else if (label === '%')
                    style = (_f = options.buttons) === null || _f === void 0 ? void 0 : _f.numbers;
                else if (label === '^')
                    style = (_g = options.buttons) === null || _g === void 0 ? void 0 : _g.numbers;
                else if (label === '.')
                    style = (_h = options.buttons) === null || _h === void 0 ? void 0 : _h.symbols;
                else if (label === '=')
                    style = discord_js_1.ButtonStyle.Success;
                else if (isNaN(label))
                    style = (_j = options.buttons) === null || _j === void 0 ? void 0 : _j.symbols;
                const btn = new discord_js_1.ButtonBuilder()
                    .setCustomId('cal-' + label)
                    .setLabel(label)
                    .setStyle(style);
                return btn;
            }
            const evalRegex = /^[0-9π\+\%\^\-*\/\.\(\)]*$/;
            function mathEval(input, result = false, symbol = false) {
                try {
                    const matched = evalRegex.exec(input);
                    if (!matched)
                        return 'Invalid';
                    if (result === false) {
                        return `${Function(`"use strict";let π=Math.PI;return (${input})`)()}`;
                    }
                    else
                        return `${input
                            .replaceAll('**', '^')
                            .replaceAll('/100', '%')} = ${Function(`"use strict";let π=Math.PI;return (${input})`)()}`;
                }
                catch (_a) {
                    return 'Wrong Input';
                }
            }
        }
        catch (err) {
            console.log(`${chalk_1.default.red('Error Occurred.')} | ${chalk_1.default.magenta('calculator')} | Error: ${err.stack}`);
        }
    });
}
exports.calculator = calculator;