/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffled = new Array(indices.length);
    for (let i = 0; i < indices.length; i++) {
        shuffled[indices[i]] = s[i];
    }
    return shuffled.join('');
};
