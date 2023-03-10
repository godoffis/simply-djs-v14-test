export declare type Erroptions = {
    name?: string;
    tip?: string;
};
export declare class SimplyError extends Error {
    /**
     * Emit errors
     * @param {String} name
     * @param {String} tip
     */
    constructor(options?: Erroptions);
}
