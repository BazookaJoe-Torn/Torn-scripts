// ==UserScript==
// @name         Torn Market Suite (Starter)
// @namespace    https://github.com/<your-username>/<your-repo>
// @version      0.1.0
// @description  Starter scaffold; updates from GitHub raw
// @author       BazookaJoe
// @license      MIT
// @match        https://www.torn.com/*
// @run-at       document-idle
// @grant        GM_addStyle
// @downloadURL  REPLACE_WITH_YOUR_RAW_URL
// @updateURL    REPLACE_WITH_YOUR_RAW_URL
// ==/UserScript==

(function () {
  'use strict';
  const tag = document.createElement('div');
  tag.textContent = 'TMS loaded';
  tag.style.cssText = 'position:fixed;bottom:8px;right:8px;padding:4px 8px;font:12px/1.2 system-ui;border:1px solid #999;border-radius:6px;background:#fff;opacity:.9;z-index:999999;';
  document.body.appendChild(tag);
  setTimeout(() => tag.remove(), 3000);
})();
