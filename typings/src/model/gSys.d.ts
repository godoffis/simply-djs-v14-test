import mongoose from 'mongoose';
interface Entri {
    userID: string;
    guildID: string;
    messageID: string;
}
interface req {
    type: 'guild' | 'role' | 'none';
    id?: string;
}
export declare type gwData = {
    message?: string;
    entry?: Entri[];
    entered?: number;
    winCount?: number;
    requirements?: req;
    endTime?: string;
    desc?: string;
    started?: number;
    prize?: string;
    host?: string;
};
declare const _default: mongoose.Model<gwData, {}, {}, {}>;
export default _default;
