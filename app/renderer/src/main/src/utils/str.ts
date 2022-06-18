export function Uint8ArrayToString(fileData: Uint8Array, encoding?: "utf8" | "latin1" | any) {
    const result = Buffer.from(fileData).toString(encoding ? encoding : "latin1");
    return result;
}


export function StringToUint8Array(str: string, encoding?: "latin1" | "ascii" | "utf8") {
    return new Uint8Array(Buffer.from(str, encoding));
    // let arr = new Uint8Array(str.length);
    // for (let i = 0, j = str.length; i < j; ++i) {
    //     arr[i] = (str.charCodeAt(i));
    // }
    // return arr
}