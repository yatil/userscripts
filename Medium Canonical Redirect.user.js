// ==UserScript==
// @name         Medium Canonical Redirect
// @namespace    https://medium.com/
// @version      0.1
// @description  Redirects Medium Links to their canonical source, if that exists.
// @author       Eric Eggert (yatil.net)
// @match        https://medium.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
        if (document.querySelector('link[rel=canonical]')) {
            var canonicalLink = document.querySelector('link[rel=canonical]').getAttribute('href');
            if (canonicalLink) {
                document.location = canonicalLink;
            }
        }
    };

})();