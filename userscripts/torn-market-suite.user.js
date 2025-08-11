// ==UserScript==
// @name         Torn Market Suite (Starter)
// @namespace    https://github.com/BazookaJoe-Torn
// @version      0.1.1
// @description  Starter scaffold; updates from GitHub raw
// @author       BazookaJoe
// @license      MIT
// @match        https://www.torn.com/*
// @run-at       document-idle
// @grant        GM_addStyle
// @downloadURL  https://www.tampermonkey.net/script_installation.php#url=https://github.com/BazookaJoe-Torn/Torn-scripts/raw/refs/heads/main/userscripts/torn-market-suite.user.js
// @updateURL    https://www.tampermonkey.net/script_installation.php#url=https://github.com/BazookaJoe-Torn/Torn-scripts/raw/refs/heads/main/userscripts/torn-market-suite.user.js
// ==/UserScript==

(function () {
  'use strict';
  const tag = document.createElement('div');
  tag.textContent = 'TMS v0.1.1';
  tag.style.cssText = 'position:fixed;bottom:8px;right:8px;padding:4px 8px;font:12px/1.2 system-ui;border:1px solid #999;border-radius:6px;background:#fff;opacity:.9;z-index:999999;';
  document.body.appendChild(tag);
  setTimeout(() => tag.remove(), 3000);
})();
