#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const card = boxen(`
${chalk.bold('Joshua Wu')} | Software Engineer
${chalk.bold('-'.repeat(40))}

${chalk.bold('Github:')} https://github.com/jwu910
${chalk.bold('LinkedIn:')} https://linkedin.com/in/wujoshua
${chalk.bold('NPM:')} https://www.npmjs.com/~jwu910
${chalk.bold('Portfolio:')} https://joshuawu.me
${chalk.bold('Schedule a BobaTalk:')} https://calendly.com/wujoshua/boba-talk-30-min
`,
    {
        borderColor: 'cyan',
        borderStyle: 'double',
        padding: 1,
    }
);

console.log(card);
