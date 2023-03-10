/**
 * Connect to a mongo database to access some functions ! *Requires* ***[mongodb uri](https://mongodb.com/)***
 * @param db mongoDbUri
 * @param notify
 * @link `Documentation:` ***https://simplyd.js.org/docs/General/connect***
 * @example simplydjs.connect('mongoURI', true)
 */
export declare function connect(db: string, notify?: boolean): Promise<boolean>;
