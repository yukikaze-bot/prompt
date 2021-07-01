import { loadBinding } from '@node-rs/helper';
import { join } from 'path';

const home = join(__dirname, '..');
const { prompt: prompter } = loadBinding(home, 'prompt', '@yukikaze-bot/prompt');

export interface PromptOptions {
	char?: string;
	hide?: boolean;
}

/**
 * Prompts a message.
 * @since 1.0.0
 * @param {string} message The message.
 * @param {Object} [options] The prompt options.
 * @param {string} [options.char='>'] The character.
 * @param {boolean} [options.hide=false] If to hide the user input.
 * @returns {string} The response.
 * @example ```js
 * const { prompt } = require('@yukikaze-bot/prompt');
 * const response = prompt('What is your name?');
 *
 * console.log(`Your name is: ${response}`);
 * ```
 */
export const prompt = (message: string, options?: PromptOptions): string => {
	const char = options?.char ?? '>';
	const hide = options?.hide ?? false;
	const response = prompter(`${message}\n${char} `, hide);

	console.log('\n');
	return response as string;
};
