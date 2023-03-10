import mongoose from 'mongoose';
interface cts {
    user: string;
    count: number;
}
export declare type bumpSysData = {
    channel: string;
    nxtBump: any;
    guild: string;
    counts: cts[];
};
declare const _default: mongoose.Model<bumpSysData, {}, {}, {}>;
export default _default;
