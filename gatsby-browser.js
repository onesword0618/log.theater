/**
 * Call Create Gatsby Browser Process.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
const requireEsm = require('esm')(module);
module.exports = requireEsm('./gatsby-browser.esm.js');
