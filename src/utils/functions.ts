/**
 * Slices a string to a maximum length and appends an ellipsis if necessary
 * @param {string}txt The input string to slice
 * @param {number} [max=50] The maximum length of the string
 * @returns The sliced string
 */


export function  textSlicer(txt:string, max:number=50){
    if(txt.length >= max){
        return txt.slice(0, max) + "..."
    }
    return txt;
}