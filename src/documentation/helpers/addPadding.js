import stripAnsi from 'strip-ansi';

import pad from './pad';

/**
 * Pads a string to a given length with spaces.
 *
 * @param {string} str - The string to be padded.
 * @param {number} length - The desired length of the new string.
 *
 * @returns {string} - A string matching the input.
 */
export default function addPadding(str, length) {
    const string = str || '';
    return string + pad(length - stripAnsi(string).length);
}
