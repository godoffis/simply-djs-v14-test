import mongoose from 'mongoose';
export interface votz {
    user: number | string;
    vote: 'up' | 'down';
}
export declare type sugData = {
    message: string;
    author: string;
    votes: Array<votz>;
};
declare const _default: mongoose.Model<sugData, {}, {}, {}>;
export default _default;
