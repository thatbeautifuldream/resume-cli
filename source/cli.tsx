#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
// import meow from 'meow';
import App from './app.js';

// const cli = meow(
// 	`
// 	Usage
// 	  $ resume-cli [options]

// 	Options
// 		--print    Output the resume and exit immediately (useful for redirection)
// 		--help     Show this help message
// 		--version  Show the version

// 	Examples
// 	  $ resume-cli
// 	  $ resume-cli --print > resume.txt
// `,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			print: {
// 				type: 'boolean',
// 				default: false,
// 			},
// 		},
// 	},
// );

render(<App />);
