import { find } from '@discordjs/node-pre-gyp';
import { resolve, join } from 'path';

const bindingPath = find(resolve(join(__dirname, '..', './package.json')));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { prompt: prompter } = require(bindingPath);

/**
 * Prompts a message.
 * @since 1.0.0
 * @param {string} message The message.
 * @param {string} [char='>'] The character.
 * @returns {string} The response.
 * @example ```js
 * const { prompt } = require('@yukikaze-bot/prompt');
 * const response = prompt('What is your name?');
 *
 * console.log(`Your name is: ${response}`);
 * ```
 */
export const prompt = (message: string, char = '>'): string => {
	const response = prompter(`${message}\n${char} `);

	return response as string;
};
