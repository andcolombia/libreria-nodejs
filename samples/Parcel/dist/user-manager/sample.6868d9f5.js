// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"POFEp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "ee62bac66868d9f5";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lqq57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _sampleSettings = require("./sample-settings");
///////////////////////////////
// UI event handlers
///////////////////////////////
document.getElementById("clearState").addEventListener("click", clearState, false);
document.getElementById("getUser").addEventListener("click", getUser, false);
document.getElementById("removeUser").addEventListener("click", removeUser, false);
document.getElementById("startSigninMainWindow").addEventListener("click", startSigninMainWindow, false);
document.getElementById("endSigninMainWindow").addEventListener("click", endSigninMainWindow, false);
document.getElementById("popupSignin").addEventListener("click", popupSignin, false);
document.getElementById("iframeSignin").addEventListener("click", iframeSignin, false);
document.getElementById("startSignoutMainWindow").addEventListener("click", startSignoutMainWindow, false);
document.getElementById("endSignoutMainWindow").addEventListener("click", endSignoutMainWindow, false);
document.getElementById("popupSignout").addEventListener("click", popupSignout, false);
///////////////////////////////
// config
///////////////////////////////
_sampleSettings.Log.logger = console;
_sampleSettings.Log.level = _sampleSettings.Log.DEBUG;
function log() {
    document.getElementById("out").innerText = "";
    Array.prototype.forEach.call(arguments, function(msg) {
        if (msg instanceof Error) msg = "Error: " + msg.message;
        else if (typeof msg !== "string") msg = JSON.stringify(msg, null, 2);
        document.getElementById("out").innerHTML += msg + "\r\n";
    });
}
const mgr = new _sampleSettings.UserManager(_sampleSettings.settings);
///////////////////////////////
// events
///////////////////////////////
mgr.events.addAccessTokenExpiring(function() {
    console.log("token expiring");
    log("token expiring");
});
mgr.events.addAccessTokenExpired(function() {
    console.log("token expired");
    log("token expired");
});
mgr.events.addSilentRenewError(function(e) {
    console.log("silent renew error", e.message);
    log("silent renew error", e.message);
});
mgr.events.addUserLoaded(function(user) {
    console.log("user loaded", user);
    mgr.getUser().then(function() {
        console.log("getUser loaded user after userLoaded event fired");
    }, ()=>{
    });
});
mgr.events.addUserUnloaded(function(e) {
    console.log("user unloaded");
});
///////////////////////////////
// functions for UI elements
///////////////////////////////
function clearState() {
    mgr.clearStaleState().then(function() {
        log("clearStateState success");
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function getUser() {
    mgr.getUser().then(function(user) {
        log("got user", user);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function removeUser() {
    mgr.removeUser().then(function() {
        log("user removed");
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function startSigninMainWindow() {
    mgr.signinRedirect({
        state: {
            some: "data"
        }
    }).then(function() {
        log("signinRedirect done");
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function endSigninMainWindow() {
    mgr.signinRedirectCallback().then(function(user) {
        log("signed in", user);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function popupSignin() {
    mgr.signinPopup().then(function(user) {
        log("signed in", user);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function popupSignout() {
    mgr.signoutPopup().then(function() {
        log("signed out");
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function iframeSignin() {
    mgr.signinSilent().then(function(user) {
        log("signed in", user);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function startSignoutMainWindow() {
    mgr.signoutRedirect().then(function(resp) {
        log("signed out", resp);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}
function endSignoutMainWindow() {
    mgr.signoutRedirectCallback().then(function(resp) {
        log("signed out", resp);
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}

},{"./sample-settings":"b37YY","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"b37YY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "settings", ()=>settings
);
parcelHelpers.export(exports, "Log", ()=>_src.Log
);
parcelHelpers.export(exports, "UserManager", ()=>_src.UserManager
);
var _src = require("../../../../src");
const url = window.location.origin + "/user-manager";
const settings = {
    authority: "http://localhost:1234/oidc",
    client_id: "js.tokenmanager",
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid email roles",
    response_mode: "fragment",
    popup_redirect_uri: url + "/sample-popup-signin.html",
    popup_post_logout_redirect_uri: url + "/sample-popup-signout.html",
    silent_redirect_uri: url + "/sample-silent.html",
    automaticSilentRenew: true,
    //silentRequestTimeout: 10000,
    filterProtocolClaims: true
};

},{"../../../../src":"4aleK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4aleK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Log", ()=>_utils.Log
);
parcelHelpers.export(exports, "Logger", ()=>_utils.Logger
);
parcelHelpers.export(exports, "AccessTokenEvents", ()=>_accessTokenEvents.AccessTokenEvents
);
parcelHelpers.export(exports, "CheckSessionIFrame", ()=>_checkSessionIFrame.CheckSessionIFrame
);
parcelHelpers.export(exports, "ErrorResponse", ()=>_errorResponse.ErrorResponse
);
parcelHelpers.export(exports, "InMemoryWebStorage", ()=>_inMemoryWebStorage.InMemoryWebStorage
);
parcelHelpers.export(exports, "MetadataService", ()=>_metadataService.MetadataService
);
parcelHelpers.export(exports, "OidcClientSettingsStore", ()=>_oidcClientSettings.OidcClientSettingsStore
);
parcelHelpers.export(exports, "SessionMonitor", ()=>_sessionMonitor.SessionMonitor
);
parcelHelpers.export(exports, "SigninResponse", ()=>_signinResponse.SigninResponse
);
parcelHelpers.export(exports, "SigninState", ()=>_signinState.SigninState
);
parcelHelpers.export(exports, "SignoutResponse", ()=>_signoutResponse.SignoutResponse
);
parcelHelpers.export(exports, "State", ()=>_state.State
);
parcelHelpers.export(exports, "User", ()=>_user.User
);
parcelHelpers.export(exports, "UserManagerSettingsStore", ()=>_userManagerSettings.UserManagerSettingsStore
);
parcelHelpers.export(exports, "Version", ()=>_version.Version
);
parcelHelpers.export(exports, "WebStorageStateStore", ()=>_webStorageStateStore.WebStorageStateStore
);
var _utils = require("./utils");
var _accessTokenEvents = require("./AccessTokenEvents");
var _checkSessionIFrame = require("./CheckSessionIFrame");
var _errorResponse = require("./ErrorResponse");
var _inMemoryWebStorage = require("./InMemoryWebStorage");
var _metadataService = require("./MetadataService");
var _oidcClient = require("./OidcClient");
parcelHelpers.exportAll(_oidcClient, exports);
var _oidcClientSettings = require("./OidcClientSettings");
var _sessionMonitor = require("./SessionMonitor");
var _signinResponse = require("./SigninResponse");
var _signinState = require("./SigninState");
var _signoutResponse = require("./SignoutResponse");
var _state = require("./State");
var _user = require("./User");
var _userManager = require("./UserManager");
parcelHelpers.exportAll(_userManager, exports);
var _userManagerSettings = require("./UserManagerSettings");
var _version = require("./Version");
var _webStorageStateStore = require("./WebStorageStateStore");

},{"./utils":"3S0XE","./AccessTokenEvents":"4PP5j","./CheckSessionIFrame":"buTal","./ErrorResponse":"7L2pO","./InMemoryWebStorage":"4mz8S","./MetadataService":"l2UGU","./OidcClient":"evoWq","./OidcClientSettings":"i4FII","./SessionMonitor":"eMjwU","./SigninResponse":"5g0G9","./SigninState":"6mKOR","./SignoutResponse":"6dwjR","./State":"e0Ong","./User":"kijw1","./UserManager":"dAzXH","./UserManagerSettings":"fgtro","./Version":"24xGo","./WebStorageStateStore":"b1SmR","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3S0XE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cryptoUtils = require("./CryptoUtils");
parcelHelpers.exportAll(_cryptoUtils, exports);
var _event = require("./Event");
parcelHelpers.exportAll(_event, exports);
var _jwtUtils = require("./JwtUtils");
parcelHelpers.exportAll(_jwtUtils, exports);
var _log = require("./Log");
parcelHelpers.exportAll(_log, exports);
var _popupUtils = require("./PopupUtils");
parcelHelpers.exportAll(_popupUtils, exports);
var _timer = require("./Timer");
parcelHelpers.exportAll(_timer, exports);
var _urlUtils = require("./UrlUtils");
parcelHelpers.exportAll(_urlUtils, exports);

},{"./CryptoUtils":"jxBb2","./Event":"8QalB","./JwtUtils":"eRW43","./Log":"2wqkI","./PopupUtils":"jLFbE","./Timer":"cKeK4","./UrlUtils":"5Hnvs","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jxBb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "CryptoUtils", ()=>CryptoUtils
);
var _coreJs = require("crypto-js/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _sha256Js = require("crypto-js/sha256.js");
var _sha256JsDefault = parcelHelpers.interopDefault(_sha256Js);
var _encBase64Js = require("crypto-js/enc-base64.js");
var _encBase64JsDefault = parcelHelpers.interopDefault(_encBase64Js);
var _encUtf8Js = require("crypto-js/enc-utf8.js");
var _encUtf8JsDefault = parcelHelpers.interopDefault(_encUtf8Js);
var _log = require("./Log");
const UUID_V4_TEMPLATE = "10000000-1000-4000-8000-100000000000";
class CryptoUtils {
    static _randomWord() {
        return _coreJsDefault.default.lib.WordArray.random(1).words[0];
    }
    /**
     * Generates RFC4122 version 4 guid
     */ static generateUUIDv4() {
        const uuid = UUID_V4_TEMPLATE.replace(/[018]/g, (c)=>(+c ^ CryptoUtils._randomWord() & 15 >> +c / 4).toString(16)
        );
        return uuid.replace(/-/g, "");
    }
    /**
     * PKCE: Generate a code verifier
     */ static generateCodeVerifier() {
        return CryptoUtils.generateUUIDv4() + CryptoUtils.generateUUIDv4() + CryptoUtils.generateUUIDv4();
    }
    /**
     * PKCE: Generate a code challenge
     */ static generateCodeChallenge(code_verifier) {
        try {
            const hashed = _sha256JsDefault.default(code_verifier);
            return _encBase64JsDefault.default.stringify(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        } catch (err) {
            _log.Logger.error("CryptoUtils", err);
            throw err;
        }
    }
    /**
     * Generates a base64-encoded string for a basic auth header
     */ static generateBasicAuth(client_id, client_secret) {
        const basicAuth = _encUtf8JsDefault.default.parse([
            client_id,
            client_secret
        ].join(":"));
        return _encBase64JsDefault.default.stringify(basicAuth);
    }
}

},{"crypto-js/core.js":"hHLcY","crypto-js/sha256.js":"itvSB","crypto-js/enc-base64.js":"fkrRW","crypto-js/enc-utf8.js":"3IEz2","./Log":"2wqkI","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hHLcY":[function(require,module,exports) {
var global = arguments[3];
(function(root, factory) {
    if (typeof exports === "object") // CommonJS
    module.exports = exports = factory();
    else if (typeof define === "function" && define.amd) // AMD
    define([], factory);
    else // Global (browser)
    root.CryptoJS = factory();
})(this, function() {
    /*globals window, global, require*/ /**
	 * CryptoJS core components.
	 */ var CryptoJS = CryptoJS || function(Math1, undefined) {
        var crypto;
        // Native crypto from window (Browser)
        if (typeof window !== 'undefined' && window.crypto) crypto = window.crypto;
        // Native crypto in web worker (Browser)
        if (typeof self !== 'undefined' && self.crypto) crypto = self.crypto;
        // Native crypto from worker
        if (typeof globalThis !== 'undefined' && globalThis.crypto) crypto = globalThis.crypto;
        // Native (experimental IE 11) crypto from window (Browser)
        if (!crypto && typeof window !== 'undefined' && window.msCrypto) crypto = window.msCrypto;
        // Native crypto from global (NodeJS)
        if (!crypto && typeof global !== 'undefined' && global.crypto) crypto = global.crypto;
        // Native crypto import via require (NodeJS)
        if (!crypto && typeof require === 'function') try {
            crypto = require('crypto');
        } catch (err) {
        }
        /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */ var cryptoSecureRandomInt = function() {
            if (crypto) {
                // Use getRandomValues method (Browser)
                if (typeof crypto.getRandomValues === 'function') try {
                    return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
                // Use randomBytes method (NodeJS)
                if (typeof crypto.randomBytes === 'function') try {
                    return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
            }
            throw new Error('Native crypto module could not be used to get secure random number.');
        };
        /*
	     * Local polyfill of Object.create

	     */ var create = Object.create || function() {
            function F() {
            }
            return function(obj) {
                var subtype;
                F.prototype = obj;
                subtype = new F();
                F.prototype = null;
                return subtype;
            };
        }();
        /**
	     * CryptoJS namespace.
	     */ var C = {
        };
        /**
	     * Library namespace.
	     */ var C_lib = C.lib = {
        };
        /**
	     * Base object for prototypal inheritance.
	     */ var Base = C_lib.Base = function() {
            return {
                /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */ extend: function(overrides) {
                    // Spawn
                    var subtype = create(this);
                    // Augment
                    if (overrides) subtype.mixIn(overrides);
                    // Create default initializer
                    if (!subtype.hasOwnProperty('init') || this.init === subtype.init) subtype.init = function() {
                        subtype.$super.init.apply(this, arguments);
                    };
                    // Initializer's prototype is the subtype object
                    subtype.init.prototype = subtype;
                    // Reference supertype
                    subtype.$super = this;
                    return subtype;
                },
                /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */ create: function() {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                },
                /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */ init: function() {
                },
                /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */ mixIn: function(properties) {
                    for(var propertyName in properties)if (properties.hasOwnProperty(propertyName)) this[propertyName] = properties[propertyName];
                    // IE won't copy toString using the loop above
                    if (properties.hasOwnProperty('toString')) this.toString = properties.toString;
                },
                /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */ clone: function() {
                    return this.init.prototype.extend(this);
                }
            };
        }();
        /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */ var WordArray = C_lib.WordArray = Base.extend({
            /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */ init: function(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined) this.sigBytes = sigBytes;
                else this.sigBytes = words.length * 4;
            },
            /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */ toString: function(encoder) {
                return (encoder || Hex).stringify(this);
            },
            /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */ concat: function(wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                // Clamp excess bits
                this.clamp();
                // Concat
                if (thisSigBytes % 4) // Copy one byte at a time
                for(var i = 0; i < thatSigBytes; i++){
                    var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
                else // Copy one word at a time
                for(var j = 0; j < thatSigBytes; j += 4)thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                this.sigBytes += thatSigBytes;
                // Chainable
                return this;
            },
            /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */ clamp: function() {
                // Shortcuts
                var words = this.words;
                var sigBytes = this.sigBytes;
                // Clamp
                words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                words.length = Math1.ceil(sigBytes / 4);
            },
            /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
            },
            /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */ random: function(nBytes) {
                var words = [];
                for(var i = 0; i < nBytes; i += 4)words.push(cryptoSecureRandomInt());
                return new WordArray.init(words, nBytes);
            }
        });
        /**
	     * Encoder namespace.
	     */ var C_enc = C.enc = {
        };
        /**
	     * Hex encoding strategy.
	     */ var Hex = C_enc.Hex = {
            /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var hexChars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 15).toString(16));
                }
                return hexChars.join('');
            },
            /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */ parse: function(hexStr) {
                // Shortcut
                var hexStrLength = hexStr.length;
                // Convert
                var words = [];
                for(var i = 0; i < hexStrLength; i += 2)words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new WordArray.init(words, hexStrLength / 2);
            }
        };
        /**
	     * Latin1 encoding strategy.
	     */ var Latin1 = C_enc.Latin1 = {
            /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var latin1Chars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join('');
            },
            /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */ parse: function(latin1Str) {
                // Shortcut
                var latin1StrLength = latin1Str.length;
                // Convert
                var words = [];
                for(var i = 0; i < latin1StrLength; i++)words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                return new WordArray.init(words, latin1StrLength);
            }
        };
        /**
	     * UTF-8 encoding strategy.
	     */ var Utf8 = C_enc.Utf8 = {
            /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */ stringify: function(wordArray) {
                try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                } catch (e) {
                    throw new Error('Malformed UTF-8 data');
                }
            },
            /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */ parse: function(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
        };
        /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */ var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */ reset: function() {
                // Initial values
                this._data = new WordArray.init();
                this._nDataBytes = 0;
            },
            /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */ _append: function(data) {
                // Convert string to WordArray, else assume WordArray already
                if (typeof data == 'string') data = Utf8.parse(data);
                // Append
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
            },
            /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */ _process: function(doFlush) {
                var processedWords;
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                // Count blocks ready
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) // Round up to include partial blocks
                nBlocksReady = Math1.ceil(nBlocksReady);
                else // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math1.max((nBlocksReady | 0) - this._minBufferSize, 0);
                // Count words ready
                var nWordsReady = nBlocksReady * blockSize;
                // Count bytes ready
                var nBytesReady = Math1.min(nWordsReady * 4, dataSigBytes);
                // Process blocks
                if (nWordsReady) {
                    for(var offset = 0; offset < nWordsReady; offset += blockSize)// Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                    // Remove processed words
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                }
                // Return processed words
                return new WordArray.init(processedWords, nBytesReady);
            },
            /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone._data = this._data.clone();
                return clone;
            },
            _minBufferSize: 0
        });
        /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */ var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
	         * Configuration options.
	         */ cfg: Base.extend(),
            /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */ init: function(cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Set initial values
                this.reset();
            },
            /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */ reset: function() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-hasher logic
                this._doReset();
            },
            /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */ update: function(messageUpdate) {
                // Append
                this._append(messageUpdate);
                // Update the hash
                this._process();
                // Chainable
                return this;
            },
            /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */ finalize: function(messageUpdate) {
                // Final message update
                if (messageUpdate) this._append(messageUpdate);
                // Perform concrete-hasher logic
                var hash = this._doFinalize();
                return hash;
            },
            blockSize: 16,
            /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */ _createHelper: function(hasher) {
                return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */ _createHmacHelper: function(hasher) {
                return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            }
        });
        /**
	     * Algorithm namespace.
	     */ var C_algo = C.algo = {
        };
        return C;
    }(Math);
    return CryptoJS;
});

},{"crypto":"8VSUO"}],"8VSUO":[function(require,module,exports) {
"use strict";

},{}],"itvSB":[function(require,module,exports) {
(function(root, factory) {
    if (typeof exports === "object") // CommonJS
    module.exports = exports = factory(require("./core"));
    else if (typeof define === "function" && define.amd) // AMD
    define([
        "./core"
    ], factory);
    else // Global (browser)
    factory(root.CryptoJS);
})(this, function(CryptoJS) {
    (function(Math1) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        // Initialization and round constants tables
        var H = [];
        var K = [];
        (function() {
            function isPrime(n) {
                var sqrtN = Math1.sqrt(n);
                for(var factor = 2; factor <= sqrtN; factor++){
                    if (!(n % factor)) return false;
                }
                return true;
            }
            function getFractionalBits(n) {
                return (n - (n | 0)) * 4294967296 | 0;
            }
            var n = 2;
            var nPrime = 0;
            while(nPrime < 64){
                if (isPrime(n)) {
                    if (nPrime < 8) H[nPrime] = getFractionalBits(Math1.pow(n, 0.5));
                    K[nPrime] = getFractionalBits(Math1.pow(n, 1 / 3));
                    nPrime++;
                }
                n++;
            }
        })();
        // Reusable object
        var W = [];
        /**
	     * SHA-256 hash algorithm.
	     */ var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
                this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function(M, offset) {
                // Shortcut
                var H1 = this._hash.words;
                // Working variables
                var a = H1[0];
                var b = H1[1];
                var c = H1[2];
                var d = H1[3];
                var e = H1[4];
                var f = H1[5];
                var g = H1[6];
                var h = H1[7];
                // Computation
                for(var i = 0; i < 64; i++){
                    if (i < 16) W[i] = M[offset + i] | 0;
                    else {
                        var gamma0x = W[i - 15];
                        var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                        var gamma1x = W[i - 2];
                        var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                    }
                    var ch = e & f ^ ~e & g;
                    var maj = a & b ^ a & c ^ b & c;
                    var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                    var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                    var t1 = h + sigma1 + ch + K[i] + W[i];
                    var t2 = sigma0 + maj;
                    h = g;
                    g = f;
                    f = e;
                    e = d + t1 | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = t1 + t2 | 0;
                }
                // Intermediate hash value
                H1[0] = H1[0] + a | 0;
                H1[1] = H1[1] + b | 0;
                H1[2] = H1[2] + c | 0;
                H1[3] = H1[3] + d | 0;
                H1[4] = H1[4] + e | 0;
                H1[5] = H1[5] + f | 0;
                H1[6] = H1[6] + g | 0;
                H1[7] = H1[7] + h | 0;
            },
            _doFinalize: function() {
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;
                // Add padding
                dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math1.floor(nBitsTotal / 4294967296);
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                data.sigBytes = dataWords.length * 4;
                // Hash final blocks
                this._process();
                // Return final computed hash
                return this._hash;
            },
            clone: function() {
                var clone = Hasher.clone.call(this);
                clone._hash = this._hash.clone();
                return clone;
            }
        });
        /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */ C.SHA256 = Hasher._createHelper(SHA256);
        /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */ C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
});

},{"./core":"hHLcY"}],"fkrRW":[function(require,module,exports) {
(function(root, factory) {
    if (typeof exports === "object") // CommonJS
    module.exports = exports = factory(require("./core"));
    else if (typeof define === "function" && define.amd) // AMD
    define([
        "./core"
    ], factory);
    else // Global (browser)
    factory(root.CryptoJS);
})(this, function(CryptoJS) {
    (function() {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        /**
	     * Base64 encoding strategy.
	     */ var Base64 = C_enc.Base64 = {
            /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var map = this._map;
                // Clamp excess bits
                wordArray.clamp();
                // Convert
                var base64Chars = [];
                for(var i = 0; i < sigBytes; i += 3){
                    var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                    var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                    var triplet = byte1 << 16 | byte2 << 8 | byte3;
                    for(var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++)base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                }
                // Add padding
                var paddingChar = map.charAt(64);
                if (paddingChar) while(base64Chars.length % 4)base64Chars.push(paddingChar);
                return base64Chars.join('');
            },
            /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */ parse: function(base64Str) {
                // Shortcuts
                var base64StrLength = base64Str.length;
                var map = this._map;
                var reverseMap = this._reverseMap;
                if (!reverseMap) {
                    reverseMap = this._reverseMap = [];
                    for(var j = 0; j < map.length; j++)reverseMap[map.charCodeAt(j)] = j;
                }
                // Ignore padding
                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    var paddingIndex = base64Str.indexOf(paddingChar);
                    if (paddingIndex !== -1) base64StrLength = paddingIndex;
                }
                // Convert
                return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for(var i = 0; i < base64StrLength; i++)if (i % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
            }
            return WordArray.create(words, nBytes);
        }
    })();
    return CryptoJS.enc.Base64;
});

},{"./core":"hHLcY"}],"3IEz2":[function(require,module,exports) {
(function(root, factory) {
    if (typeof exports === "object") // CommonJS
    module.exports = exports = factory(require("./core"));
    else if (typeof define === "function" && define.amd) // AMD
    define([
        "./core"
    ], factory);
    else // Global (browser)
    factory(root.CryptoJS);
})(this, function(CryptoJS) {
    return CryptoJS.enc.Utf8;
});

},{"./core":"hHLcY"}],"2wqkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Log manager
 *
 * @public
 */ parcelHelpers.export(exports, "Log", ()=>Log
);
/**
 * @public
 * Internal logger instance
 */ parcelHelpers.export(exports, "Logger", ()=>Logger
);
const nopLogger = {
    debug: ()=>undefined
    ,
    info: ()=>undefined
    ,
    warn: ()=>undefined
    ,
    error: ()=>undefined
};
const NONE = 0;
const ERROR = 1;
const WARN = 2;
const INFO = 3;
const DEBUG = 4;
class Log {
    static get NONE() {
        return NONE;
    }
    static get ERROR() {
        return ERROR;
    }
    static get WARN() {
        return WARN;
    }
    static get INFO() {
        return INFO;
    }
    static get DEBUG() {
        return DEBUG;
    }
    static reset() {
        this._level = INFO;
        this._logger = nopLogger;
    }
    static get level() {
        return this._level;
    }
    static set level(value) {
        if (NONE > value || value > DEBUG) throw new Error("Invalid log level");
        this._level = value;
    }
    // native logger
    static get logger() {
        return this._logger;
    }
    static set logger(value) {
        this._logger = value;
    }
}
class Logger {
    constructor(name1){
        this._name = name1;
    }
    debug(...args) {
        Logger.debug(this._name, ...args);
    }
    info(...args) {
        Logger.info(this._name, ...args);
    }
    warn(...args) {
        Logger.warn(this._name, ...args);
    }
    error(...args) {
        Logger.error(this._name, ...args);
    }
    // helpers for static class methods
    static debug(name, ...args) {
        if (Log.level >= DEBUG) Log.logger.debug(`[${name}]`, ...args);
    }
    static info(name, ...args) {
        if (Log.level >= INFO) Log.logger.info(`[${name}]`, ...args);
    }
    static warn(name, ...args) {
        if (Log.level >= WARN) Log.logger.warn(`[${name}]`, ...args);
    }
    static error(name, ...args) {
        if (Log.level >= ERROR) Log.logger.error(`[${name}]`, ...args);
    }
}
Log.reset();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8QalB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "Event", ()=>Event1
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _log = require("./Log");
class Event1 {
    constructor(_name){
        this._name = _name;
        this._logger = new _log.Logger(`Event(${this._name})`);
        this._callbacks = [];
    }
    addHandler(cb) {
        this._callbacks.push(cb);
        return ()=>this.removeHandler(cb)
        ;
    }
    removeHandler(cb) {
        const idx = this._callbacks.lastIndexOf(cb);
        if (idx >= 0) this._callbacks.splice(idx, 1);
    }
    raise(...ev) {
        this._logger.debug("Raising event: " + this._name);
        for (const cb of this._callbacks)cb(...ev);
    }
}

},{"./Log":"2wqkI","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eRW43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "JwtUtils", ()=>JwtUtils
);
var _jwtDecode = require("jwt-decode");
var _jwtDecodeDefault = parcelHelpers.interopDefault(_jwtDecode);
var _log = require("./Log");
class JwtUtils {
    // IMPORTANT: doesn't validate the token
    static decode(token) {
        try {
            const payload = _jwtDecodeDefault.default(token);
            return payload;
        } catch (err) {
            _log.Logger.error("JwtUtils", err);
            throw err;
        }
    }
}

},{"jwt-decode":"cmbwR","./Log":"2wqkI","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cmbwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidTokenError", ()=>n
);
function e(e1) {
    this.message = e1;
}
e.prototype = new Error, e.prototype.name = "InvalidCharacterError";
var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(r1) {
    var t = String(r1).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
    for(var n, o, a = 0, i = 0, c = ""; o = t.charAt(i++); ~o && (n = a % 4 ? 64 * n + o : o, (a++) % 4) && (c += String.fromCharCode(255 & n >> (-2 * a & 6))))o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
    return c;
};
function t(e1) {
    var t1 = e1.replace(/-/g, "+").replace(/_/g, "/");
    switch(t1.length % 4){
        case 0:
            break;
        case 2:
            t1 += "==";
            break;
        case 3:
            t1 += "=";
            break;
        default:
            throw "Illegal base64url string!";
    }
    try {
        return (function(e2) {
            return decodeURIComponent(r(e2).replace(/(.)/g, function(e3, r1) {
                var t2 = r1.charCodeAt(0).toString(16).toUpperCase();
                return t2.length < 2 && (t2 = "0" + t2), "%" + t2;
            }));
        })(t1);
    } catch (e2) {
        return r(t1);
    }
}
function n(e1) {
    this.message = e1;
}
function o(e1, r1) {
    if ("string" != typeof e1) throw new n("Invalid token specified");
    var o1 = !0 === (r1 = r1 || {
    }).header ? 0 : 1;
    try {
        return JSON.parse(t(e1.split(".")[o1]));
    } catch (e2) {
        throw new n("Invalid token specified: " + e2.message);
    }
}
n.prototype = new Error, n.prototype.name = "InvalidTokenError";
exports.default = o;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jLFbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PopupUtils", ()=>PopupUtils
);
class PopupUtils {
    /**
     * Popuplates a map of window features with a placement centered in front of
     * the current window. If no explicit width is given, a default value is
     * binned into [800, 720, 600, 480, 360] based on the current window's width.
     */ static center({ ...features }) {
        if (features.width == null) features.width = [
            800,
            720,
            600,
            480
        ].find((width)=>width <= window.outerWidth / 1.618
        ) ?? 360;
        features.left ??= Math.max(0, Math.round(window.screenX + (window.outerWidth - features.width) / 2));
        if (features.height != null) features.top ??= Math.max(0, Math.round(window.screenY + (window.outerHeight - features.height) / 2));
        return features;
    }
    static serialize(features) {
        return Object.entries(features).filter(([, value])=>value != null
        ).map(([key, value])=>`${key}=${typeof value !== "boolean" ? value : value ? "yes" : "no"}`
        ).join(",");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cKeK4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "Timer", ()=>Timer
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _event = require("./Event");
class Timer extends _event.Event {
    // get the time
    static getEpochTime() {
        return Math.floor(Date.now() / 1000);
    }
    init(durationInSeconds) {
        durationInSeconds = Math.max(Math.floor(durationInSeconds), 1);
        const expiration = Timer.getEpochTime() + durationInSeconds;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            this._logger.debug("init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }
        this.cancel();
        this._logger.debug("init timer " + this._name + " for duration:", durationInSeconds);
        this._expiration = expiration;
        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        const timerDurationInSeconds = Math.min(durationInSeconds, 5);
        this._timerHandle = setInterval(this._callback, timerDurationInSeconds * 1000);
    }
    get expiration() {
        return this._expiration;
    }
    cancel() {
        if (this._timerHandle) {
            this._logger.debug("cancel: ", this._name);
            clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    }
    constructor(...args){
        super(...args);
        this._timerHandle = null;
        this._expiration = 0;
        this._callback = ()=>{
            const diff = this._expiration - Timer.getEpochTime();
            this._logger.debug("_callback: " + this._name + " timer expires in:", diff);
            if (this._expiration <= Timer.getEpochTime()) {
                this.cancel();
                super.raise();
            }
        };
    }
}

},{"./Event":"8QalB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5Hnvs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
/**
 * @internal
 */ parcelHelpers.export(exports, "UrlUtils", ()=>UrlUtils
);
class UrlUtils {
    static readParams(url, responseMode = "query") {
        const parsedUrl = new URL(url);
        const params = parsedUrl[responseMode === "fragment" ? "hash" : "search"];
        return new URLSearchParams(params.slice(1));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4PP5j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "AccessTokenEvents", ()=>AccessTokenEvents
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class AccessTokenEvents {
    constructor(args){
        this._logger = new _utils.Logger("AccessTokenEvents");
        this._expiringTimer = new _utils.Timer("Access token expiring");
        this._expiredTimer = new _utils.Timer("Access token expired");
        this._expiringNotificationTimeInSeconds = args.expiringNotificationTimeInSeconds;
    }
    load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            const duration = container.expires_in;
            this._logger.debug("load: access token present, remaining duration:", duration);
            if (duration > 0) {
                // only register expiring if we still have time
                let expiring = duration - this._expiringNotificationTimeInSeconds;
                if (expiring <= 0) expiring = 1;
                this._logger.debug("load: registering expiring timer in:", expiring);
                this._expiringTimer.init(expiring);
            } else {
                this._logger.debug("load: canceling existing expiring timer because we're past expiration.");
                this._expiringTimer.cancel();
            }
            // if it's negative, it will still fire
            const expired = duration + 1;
            this._logger.debug("load: registering expired timer in:", expired);
            this._expiredTimer.init(expired);
        } else {
            this._expiringTimer.cancel();
            this._expiredTimer.cancel();
        }
    }
    unload() {
        this._logger.debug("unload: canceling existing access token timers");
        this._expiringTimer.cancel();
        this._expiredTimer.cancel();
    }
    /**
     * Add callback: Raised prior to the access token expiring.
     */ addAccessTokenExpiring(cb) {
        return this._expiringTimer.addHandler(cb);
    }
    /**
     * Remove callback: Raised prior to the access token expiring.
     */ removeAccessTokenExpiring(cb) {
        this._expiringTimer.removeHandler(cb);
    }
    /**
     * Add callback: Raised after the access token has expired.
     */ addAccessTokenExpired(cb) {
        return this._expiredTimer.addHandler(cb);
    }
    /**
     * Remove callback: Raised after the access token has expired.
     */ removeAccessTokenExpired(cb) {
        this._expiredTimer.removeHandler(cb);
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"buTal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "CheckSessionIFrame", ()=>CheckSessionIFrame
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class CheckSessionIFrame {
    constructor(_callback, _client_id, url, _intervalInSeconds, _stopOnError){
        this._callback = _callback;
        this._client_id = _client_id;
        this._intervalInSeconds = _intervalInSeconds;
        this._stopOnError = _stopOnError;
        this._logger = new _utils.Logger("CheckSessionIFrame");
        this._timer = null;
        this._session_state = null;
        this._message = (e)=>{
            if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
                if (e.data === "error") {
                    this._logger.error("error message from check session op iframe");
                    if (this._stopOnError) this.stop();
                } else if (e.data === "changed") {
                    this._logger.debug("changed message from check session op iframe");
                    this.stop();
                    this._callback();
                } else this._logger.debug(e.data + " message from check session op iframe");
            }
        };
        const idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);
        this._frame = window.document.createElement("iframe");
        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "fixed";
        this._frame.style.left = "-1000px";
        this._frame.style.top = "0";
        this._frame.width = "0";
        this._frame.height = "0";
        this._frame.src = url;
    }
    load() {
        return new Promise((resolve)=>{
            this._frame.onload = ()=>{
                resolve();
            };
            window.document.body.appendChild(this._frame);
            window.addEventListener("message", this._message, false);
        });
    }
    start(session_state) {
        if (this._session_state === session_state) return;
        this._logger.debug("start");
        this.stop();
        this._session_state = session_state;
        const send = ()=>{
            if (!this._frame.contentWindow || !this._session_state) return;
            this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin);
        };
        // trigger now
        send();
        // and setup timer
        this._timer = setInterval(send, this._intervalInSeconds * 1000);
    }
    stop() {
        this._session_state = null;
        if (this._timer) {
            this._logger.debug("stop");
            clearInterval(this._timer);
            this._timer = null;
        }
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7L2pO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Error class thrown in case of an authentication error.
 *
 * See https://openid.net/specs/openid-connect-core-1_0.html#AuthError
 *
 * @public
 */ parcelHelpers.export(exports, "ErrorResponse", ()=>ErrorResponse
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class ErrorResponse extends Error {
    constructor(args, form){
        super(args.error_description || args.error || "");
        this.form = form;
        /** Marker to detect class: "ErrorResponse" */ this.name = "ErrorResponse";
        if (!args.error) {
            _utils.Logger.error("ErrorResponse", "No error passed");
            throw new Error("No error passed");
        }
        this.error = args.error;
        this.error_description = args.error_description ?? null;
        this.error_uri = args.error_uri ?? null;
        this.state = args.userState;
        this.session_state = args.session_state ?? null;
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4mz8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "InMemoryWebStorage", ()=>InMemoryWebStorage
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class InMemoryWebStorage {
    clear() {
        this._logger.debug("clear");
        this._data = {
        };
    }
    getItem(key) {
        this._logger.debug("getItem", key);
        return this._data[key];
    }
    setItem(key, value) {
        this._logger.debug("setItem", key);
        this._data[key] = value;
    }
    removeItem(key) {
        this._logger.debug("removeItem", key);
        delete this._data[key];
    }
    get length() {
        return Object.getOwnPropertyNames(this._data).length;
    }
    key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    }
    constructor(){
        this._logger = new _utils.Logger("InMemoryWebStorage");
        this._data = {
        };
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"l2UGU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "MetadataService", ()=>MetadataService
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _jsonService = require("./JsonService");
const OidcMetadataUrlPath = ".well-known/openid-configuration";
class MetadataService {
    constructor(_settings){
        this._settings = _settings;
        this._logger = new _utils.Logger("MetadataService");
        this._jsonService = new _jsonService.JsonService([
            "application/jwk-set+json"
        ]);
        // cache
        this._metadataUrl = null;
        this._signingKeys = null;
        this._metadata = null;
        if (this._settings.metadataUrl) this._metadataUrl = this._settings.metadataUrl;
        else if (this._settings.authority) {
            this._metadataUrl = this._settings.authority;
            if (this._metadataUrl[this._metadataUrl.length - 1] !== "/") this._metadataUrl += "/";
            this._metadataUrl += OidcMetadataUrlPath;
        }
        if (this._settings.signingKeys) {
            this._logger.debug("ctor: Using signingKeys from settings");
            this._signingKeys = this._settings.signingKeys;
        }
        if (this._settings.metadata) {
            this._logger.debug("ctor: Using metadata from settings");
            this._metadata = this._settings.metadata;
        }
    }
    resetSigningKeys() {
        this._signingKeys = null;
    }
    async getMetadata() {
        if (this._metadata) {
            this._logger.debug("getMetadata: Returning metadata from cache");
            return this._metadata;
        }
        if (!this._metadataUrl) {
            this._logger.error("getMetadata: No authority or metadataUrl configured on settings");
            throw new Error("No authority or metadataUrl configured on settings");
        }
        this._logger.debug("getMetadata: getting metadata from", this._metadataUrl);
        const metadata = await this._jsonService.getJson(this._metadataUrl);
        this._logger.debug("getMetadata: json received");
        const seed = this._settings.metadataSeed || {
        };
        this._metadata = Object.assign({
        }, seed, metadata);
        return this._metadata;
    }
    getIssuer() {
        return this._getMetadataProperty("issuer");
    }
    getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    }
    getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    }
    getTokenEndpoint(optional = true) {
        return this._getMetadataProperty("token_endpoint", optional);
    }
    getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    }
    getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    }
    getRevocationEndpoint(optional = true) {
        return this._getMetadataProperty("revocation_endpoint", optional);
    }
    getKeysEndpoint(optional = true) {
        return this._getMetadataProperty("jwks_uri", optional);
    }
    async _getMetadataProperty(name, optional = false) {
        this._logger.debug("getMetadataProperty for: " + name);
        const metadata = await this.getMetadata();
        this._logger.debug("getMetadataProperty: metadata received");
        if (metadata[name] === undefined) {
            if (optional === true) {
                this._logger.warn("getMetadataProperty: Metadata does not contain optional property " + name);
                return undefined;
            }
            this._logger.error("getMetadataProperty: Metadata does not contain property " + name);
            throw new Error("Metadata does not contain property " + name);
        }
        return metadata[name];
    }
    async getSigningKeys() {
        if (this._signingKeys) {
            this._logger.debug("getSigningKeys: Returning signingKeys from cache");
            return this._signingKeys;
        }
        const jwks_uri = await this.getKeysEndpoint(false);
        this._logger.debug("getSigningKeys: jwks_uri received", jwks_uri);
        const keySet = await this._jsonService.getJson(jwks_uri);
        this._logger.debug("getSigningKeys: key set received", keySet);
        if (!Array.isArray(keySet.keys)) {
            this._logger.error("getSigningKeys: Missing keys on keyset");
            throw new Error("Missing keys on keyset");
        }
        this._signingKeys = keySet.keys;
        return this._signingKeys;
    }
}

},{"./utils":"3S0XE","./JsonService":"3HbG5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3HbG5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "JsonService", ()=>JsonService
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _errorResponse = require("./ErrorResponse");
var _utils = require("./utils");
class JsonService {
    constructor(additionalContentTypes = [], _jwtHandler = null){
        this._jwtHandler = _jwtHandler;
        this._logger = new _utils.Logger("JsonService");
        this._contentTypes = [];
        this._contentTypes.push(...additionalContentTypes, "application/json");
        if (_jwtHandler) this._contentTypes.push("application/jwt");
    }
    async getJson(url, token) {
        const headers = {
            "Accept": this._contentTypes.join(", ")
        };
        if (token) {
            this._logger.debug("getJson: token passed, setting Authorization header");
            headers["Authorization"] = "Bearer " + token;
        }
        let response;
        try {
            this._logger.debug("getJson, url:", url);
            response = await fetch(url, {
                method: "GET",
                headers
            });
        } catch (err) {
            this._logger.error("getJson: network error");
            throw new Error("Network Error");
        }
        this._logger.debug("getJson: HTTP response received, status", response.status);
        const contentType = response.headers.get("Content-Type");
        if (contentType && !this._contentTypes.find((item)=>contentType.startsWith(item)
        )) throw new Error(`Invalid response Content-Type: ${contentType ?? "undefined"}, from URL: ${url}`);
        if (response.ok && this._jwtHandler && contentType?.startsWith("application/jwt")) return await this._jwtHandler(await response.text());
        let json;
        try {
            json = await response.json();
        } catch (err) {
            this._logger.error("getJson: Error parsing JSON response", err);
            if (response.ok) throw err;
            throw new Error(`${response.statusText} (${response.status})`);
        }
        if (!response.ok) {
            this._logger.error("getJson: Error from server:", json);
            if (json.error) throw new _errorResponse.ErrorResponse(json);
            throw new Error(`${response.statusText} (${response.status}): ${JSON.stringify(json)}`);
        }
        return json;
    }
    async postForm(url, body, basicAuth) {
        const headers = {
            "Accept": this._contentTypes.join(", "),
            "Content-Type": "application/x-www-form-urlencoded"
        };
        if (basicAuth !== undefined) headers["Authorization"] = "Basic " + basicAuth;
        let response;
        try {
            this._logger.debug("postForm, url:", url);
            response = await fetch(url, {
                method: "POST",
                headers,
                body
            });
        } catch (err) {
            this._logger.error("postForm: network error");
            throw new Error("Network Error");
        }
        this._logger.debug("postForm: HTTP response received, status", response.status);
        const contentType = response.headers.get("Content-Type");
        if (contentType && !this._contentTypes.find((item)=>contentType.startsWith(item)
        )) throw new Error(`Invalid response Content-Type: ${contentType ?? "undefined"}, from URL: ${url}`);
        const responseText = await response.text();
        let json = {
        };
        if (responseText) try {
            json = JSON.parse(responseText);
        } catch (err) {
            this._logger.error("postForm: Error parsing JSON response", err);
            if (response.ok) throw err;
            throw new Error(`${response.statusText} (${response.status})`);
        }
        if (!response.ok) {
            this._logger.error("postForm: Error from server:", json);
            if (json.error) throw new _errorResponse.ErrorResponse(json, body);
            throw new Error(`${response.statusText} (${response.status}): ${JSON.stringify(json)}`);
        }
        return json;
    }
}

},{"./ErrorResponse":"7L2pO","./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"evoWq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides the raw OIDC/OAuth2 protocol support for the authorization endpoint and the end session endpoint in the
 * authorization server. It provides a bare-bones protocol implementation and is used by the UserManager class.
 * Only use this class if you simply want protocol support without the additional management features of the
 * UserManager class.
 *
 * @public
 */ parcelHelpers.export(exports, "OidcClient", ()=>OidcClient
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _oidcClientSettings = require("./OidcClientSettings");
var _responseValidator = require("./ResponseValidator");
var _metadataService = require("./MetadataService");
var _errorResponse = require("./ErrorResponse");
var _signinRequest = require("./SigninRequest");
var _signinResponse = require("./SigninResponse");
var _signoutRequest = require("./SignoutRequest");
var _signoutResponse = require("./SignoutResponse");
var _signinState = require("./SigninState");
var _state = require("./State");
var _tokenClient = require("./TokenClient");
class OidcClient {
    constructor(settings){
        this._logger = new _utils.Logger("OidcClient");
        this.settings = new _oidcClientSettings.OidcClientSettingsStore(settings);
        this.metadataService = new _metadataService.MetadataService(this.settings);
        this._validator = new _responseValidator.ResponseValidator(this.settings, this.metadataService);
        this._tokenClient = new _tokenClient.TokenClient(this.settings, this.metadataService);
    }
    async createSigninRequest({ state , request , request_uri , request_type , id_token_hint , login_hint , skipUserInfo , response_type =this.settings.response_type , scope =this.settings.scope , redirect_uri =this.settings.redirect_uri , prompt =this.settings.prompt , display =this.settings.display , max_age =this.settings.max_age , ui_locales =this.settings.ui_locales , acr_values =this.settings.acr_values , resource =this.settings.resource , response_mode =this.settings.response_mode , extraQueryParams =this.settings.extraQueryParams , extraTokenParams =this.settings.extraTokenParams  }) {
        this._logger.debug("createSigninRequest");
        if (response_type !== "code") throw new Error("Only the Authorization Code flow (with PKCE) is supported");
        const url = await this.metadataService.getAuthorizationEndpoint();
        this._logger.debug("createSigninRequest: Received authorization endpoint", url);
        const signinRequest = new _signinRequest.SigninRequest({
            url,
            authority: this.settings.authority,
            client_id: this.settings.client_id,
            redirect_uri,
            response_type,
            scope,
            state_data: state,
            prompt,
            display,
            max_age,
            ui_locales,
            id_token_hint,
            login_hint,
            acr_values,
            resource,
            request,
            request_uri,
            extraQueryParams,
            extraTokenParams,
            request_type,
            response_mode,
            client_secret: this.settings.client_secret,
            skipUserInfo
        });
        const signinState = signinRequest.state;
        await this.settings.stateStore.set(signinState.id, signinState.toStorageString());
        return signinRequest;
    }
    async readSigninResponseState(url, removeState = false) {
        this._logger.debug("readSigninResponseState");
        const response = new _signinResponse.SigninResponse(_utils.UrlUtils.readParams(url, this.settings.response_mode));
        if (!response.state) {
            this._logger.error("readSigninResponseState: No state in response");
            throw new Error("No state in response");
        }
        const storedStateString = await this.settings.stateStore[removeState ? "remove" : "get"](response.state);
        if (!storedStateString) {
            this._logger.error("readSigninResponseState: No matching state found in storage");
            throw new Error("No matching state found in storage");
        }
        const state = _signinState.SigninState.fromStorageString(storedStateString);
        return {
            state,
            response
        };
    }
    async processSigninResponse(url) {
        this._logger.debug("processSigninResponse");
        const { state , response  } = await this.readSigninResponseState(url, true);
        this._logger.debug("processSigninResponse: Received state from storage; validating response");
        await this._validator.validateSigninResponse(response, state);
        return response;
    }
    async useRefreshToken(state) {
        this._logger.debug("useRefreshToken");
        const result = await this._tokenClient.exchangeRefreshToken({
            refresh_token: state.refresh_token
        });
        const response = new _signinResponse.SigninResponse(new URLSearchParams());
        Object.assign(response, result);
        this._logger.debug("useRefreshToken: validating response", response);
        await this._validator.validateRefreshResponse(response, state);
        return response;
    }
    async createSignoutRequest({ state , id_token_hint , request_type , post_logout_redirect_uri =this.settings.post_logout_redirect_uri , extraQueryParams =this.settings.extraQueryParams  } = {
    }) {
        this._logger.debug("createSignoutRequest");
        const url = await this.metadataService.getEndSessionEndpoint();
        if (!url) {
            this._logger.error("createSignoutRequest: No end session endpoint url returned");
            throw new Error("no end session endpoint");
        }
        this._logger.debug("createSignoutRequest: Received end session endpoint", url);
        const request = new _signoutRequest.SignoutRequest({
            url,
            id_token_hint,
            post_logout_redirect_uri,
            state_data: state,
            extraQueryParams,
            request_type
        });
        const signoutState = request.state;
        if (signoutState) {
            this._logger.debug("createSignoutRequest: Signout request has state to persist");
            await this.settings.stateStore.set(signoutState.id, signoutState.toStorageString());
        }
        return request;
    }
    async readSignoutResponseState(url, removeState = false) {
        this._logger.debug("readSignoutResponseState");
        const response = new _signoutResponse.SignoutResponse(_utils.UrlUtils.readParams(url, this.settings.response_mode));
        if (!response.state) {
            this._logger.debug("readSignoutResponseState: No state in response");
            if (response.error) {
                this._logger.warn("readSignoutResponseState: Response was error:", response.error);
                throw new _errorResponse.ErrorResponse(response);
            }
            return {
                state: undefined,
                response
            };
        }
        const storedStateString = await this.settings.stateStore[removeState ? "remove" : "get"](response.state);
        if (!storedStateString) {
            this._logger.error("readSignoutResponseState: No matching state found in storage");
            throw new Error("No matching state found in storage");
        }
        const state = _state.State.fromStorageString(storedStateString);
        return {
            state,
            response
        };
    }
    async processSignoutResponse(url) {
        this._logger.debug("processSignoutResponse");
        const { state , response  } = await this.readSignoutResponseState(url, true);
        if (state) {
            this._logger.debug("processSignoutResponse: Received state from storage; validating response");
            this._validator.validateSignoutResponse(response, state);
        } else this._logger.debug("processSignoutResponse: No state from storage; skipping validating response");
        return response;
    }
    clearStaleState() {
        this._logger.debug("clearStaleState");
        return _state.State.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
    }
    async revokeToken(token, type) {
        this._logger.debug("revokeToken");
        return await this._tokenClient.revoke({
            token,
            token_type_hint: type
        });
    }
}

},{"./utils":"3S0XE","./OidcClientSettings":"i4FII","./ResponseValidator":"69h4S","./MetadataService":"l2UGU","./ErrorResponse":"7L2pO","./SigninRequest":"4YGi2","./SigninResponse":"5g0G9","./SignoutRequest":"cqLit","./SignoutResponse":"6dwjR","./SigninState":"6mKOR","./State":"e0Ong","./TokenClient":"8HdxU","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"i4FII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The settings with defaults applied of the {@link OidcClient}.
 * @see {@link OidcClientSettings}
 *
 * @public
 */ parcelHelpers.export(exports, "OidcClientSettingsStore", ()=>OidcClientSettingsStore
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _webStorageStateStore = require("./WebStorageStateStore");
var _inMemoryWebStorage = require("./InMemoryWebStorage");
const DefaultResponseType = "code";
const DefaultScope = "openid";
const DefaultClientAuthentication = "client_secret_post";
const DefaultResponseMode = "query";
const DefaultStaleStateAgeInSeconds = 900;
const DefaultClockSkewInSeconds = 300;
class OidcClientSettingsStore {
    constructor({ // metadata related
    authority , metadataUrl , metadata , signingKeys , metadataSeed , // client related
    client_id , client_secret , response_type =DefaultResponseType , scope =DefaultScope , redirect_uri , post_logout_redirect_uri , client_authentication =DefaultClientAuthentication , // optional protocol
    prompt , display , max_age , ui_locales , acr_values , resource , response_mode =DefaultResponseMode , // behavior flags
    filterProtocolClaims =true , loadUserInfo =false , staleStateAgeInSeconds =DefaultStaleStateAgeInSeconds , clockSkewInSeconds =DefaultClockSkewInSeconds , userInfoJwtIssuer ="OP" , mergeClaims =false , // other behavior
    stateStore , // extra query params
    extraQueryParams ={
    } , extraTokenParams ={
    }  }){
        this.authority = authority;
        this.metadataUrl = metadataUrl;
        this.metadata = metadata;
        this.metadataSeed = metadataSeed;
        this.signingKeys = signingKeys;
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.response_type = response_type;
        this.scope = scope;
        this.redirect_uri = redirect_uri;
        this.post_logout_redirect_uri = post_logout_redirect_uri;
        this.client_authentication = client_authentication;
        this.prompt = prompt;
        this.display = display;
        this.max_age = max_age;
        this.ui_locales = ui_locales;
        this.acr_values = acr_values;
        this.resource = resource;
        this.response_mode = response_mode;
        this.filterProtocolClaims = !!filterProtocolClaims;
        this.loadUserInfo = !!loadUserInfo;
        this.staleStateAgeInSeconds = staleStateAgeInSeconds;
        this.clockSkewInSeconds = clockSkewInSeconds;
        this.userInfoJwtIssuer = userInfoJwtIssuer;
        this.mergeClaims = !!mergeClaims;
        if (stateStore) this.stateStore = stateStore;
        else {
            const store = typeof window !== "undefined" ? window.localStorage : new _inMemoryWebStorage.InMemoryWebStorage();
            this.stateStore = new _webStorageStateStore.WebStorageStateStore({
                store
            });
        }
        this.extraQueryParams = extraQueryParams;
        this.extraTokenParams = extraTokenParams;
    }
}

},{"./WebStorageStateStore":"b1SmR","./InMemoryWebStorage":"4mz8S","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"b1SmR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "WebStorageStateStore", ()=>WebStorageStateStore
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class WebStorageStateStore {
    constructor({ prefix ="oidc." , store =localStorage  } = {
    }){
        this._logger = new _utils.Logger("WebStorageStateStore");
        this._store = store;
        this._prefix = prefix;
    }
    set(key, value) {
        this._logger.debug("set", key);
        key = this._prefix + key;
        this._store.setItem(key, value);
        return Promise.resolve();
    }
    get(key) {
        this._logger.debug("get", key);
        key = this._prefix + key;
        const item = this._store.getItem(key);
        return Promise.resolve(item);
    }
    remove(key) {
        this._logger.debug("remove", key);
        key = this._prefix + key;
        const item = this._store.getItem(key);
        this._store.removeItem(key);
        return Promise.resolve(item);
    }
    getAllKeys() {
        this._logger.debug("getAllKeys");
        const keys = [];
        for(let index = 0; index < this._store.length; index++){
            const key = this._store.key(index);
            if (key && key.indexOf(this._prefix) === 0) keys.push(key.substr(this._prefix.length));
        }
        return Promise.resolve(keys);
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"69h4S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "ResponseValidator", ()=>ResponseValidator
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _userInfoService = require("./UserInfoService");
var _tokenClient = require("./TokenClient");
var _errorResponse = require("./ErrorResponse");
/**
 * Derived from the following sets of claims:
 * - {@link https://datatracker.ietf.org/doc/html/rfc7519.html#section-4.1}
 * - {@link https://openid.net/specs/openid-connect-core-1_0.html#IDToken}
 * - {@link https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken}
 *
 * @internal
 */ const ProtocolClaims = [
    "iss",
    // "sub" should never be excluded, we need access to it internally
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "auth_time",
    "nonce",
    "acr",
    "amr",
    "azp",
    // https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken
    "at_hash", 
];
class ResponseValidator {
    constructor(_settings, _metadataService){
        this._settings = _settings;
        this._metadataService = _metadataService;
        this._logger = new _utils.Logger("ResponseValidator");
        this._userInfoService = new _userInfoService.UserInfoService(this._metadataService);
        this._tokenClient = new _tokenClient.TokenClient(this._settings, this._metadataService);
    }
    async validateSigninResponse(response, state) {
        this._logger.debug("validateSigninResponse");
        this._processSigninState(response, state);
        this._logger.debug("validateSigninResponse: state processed");
        await this._processCode(response, state);
        this._logger.debug("validateSigninResponse: code processed");
        if (response.isOpenId) this._validateIdTokenAttributes(response);
        this._logger.debug("validateSigninResponse: tokens validated");
        await this._processClaims(response, state?.skipUserInfo);
        this._logger.debug("validateSigninResponse: claims processed");
    }
    async validateRefreshResponse(response, state) {
        this._logger.debug("validateRefreshResponse");
        response.userState = state.data;
        // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
        response.scope ??= state.scope;
        if (response.isOpenId) this._validateIdTokenAttributes(response, state.id_token);
        this._logger.debug("validateSigninResponse: tokens validated");
        await this._processClaims(response);
        this._logger.debug("validateSigninResponse: claims processed");
    }
    validateSignoutResponse(response, state) {
        if (state.id !== response.state) {
            this._logger.error("validateSignoutResponse: State does not match");
            throw new Error("State does not match");
        }
        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        this._logger.debug("validateSignoutResponse: state validated");
        response.userState = state.data;
        if (response.error) {
            this._logger.warn("validateSignoutResponse: Response was error", response.error);
            throw new _errorResponse.ErrorResponse(response);
        }
    }
    _processSigninState(response, state) {
        if (state.id !== response.state) {
            this._logger.error("_processSigninState: State does not match");
            throw new Error("State does not match");
        }
        if (!state.client_id) {
            this._logger.error("_processSigninState: No client_id on state");
            throw new Error("No client_id on state");
        }
        if (!state.authority) {
            this._logger.error("_processSigninState: No authority on state");
            throw new Error("No authority on state");
        }
        // ensure we're using the correct authority
        if (this._settings.authority !== state.authority) {
            this._logger.error("_processSigninState: authority mismatch on settings vs. signin state");
            throw new Error("authority mismatch on settings vs. signin state");
        }
        if (this._settings.client_id && this._settings.client_id !== state.client_id) {
            this._logger.error("_processSigninState: client_id mismatch on settings vs. signin state");
            throw new Error("client_id mismatch on settings vs. signin state");
        }
        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        this._logger.debug("_processSigninState: state validated");
        response.userState = state.data;
        // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
        response.scope ??= state.scope;
        if (response.error) {
            this._logger.warn("_processSigninState: Response was error", response.error);
            throw new _errorResponse.ErrorResponse(response);
        }
        if (state.code_verifier && !response.code) {
            this._logger.error("_processSigninState: Expecting code in response");
            throw new Error("No code in response");
        }
        if (!state.code_verifier && response.code) {
            this._logger.error("_processSigninState: Not expecting code in response");
            throw new Error("Unexpected code in response");
        }
    }
    async _processClaims(response, skipUserInfo = false) {
        if (!response.isOpenId) {
            this._logger.debug("_processClaims: response is not OIDC, not processing claims");
            return;
        }
        this._logger.debug("_processClaims: response is OIDC, processing claims");
        response.profile = this._filterProtocolClaims(response.profile);
        if (skipUserInfo || !this._settings.loadUserInfo || !response.access_token) {
            this._logger.debug("_processClaims: not loading user info");
            return;
        }
        this._logger.debug("_processClaims: loading user info");
        const claims = await this._userInfoService.getClaims(response.access_token);
        this._logger.debug("_processClaims: user info claims received from user info endpoint");
        if (claims.sub !== response.profile.sub) {
            this._logger.error("_processClaims: subject from UserInfo response does not match subject in ID Token");
            throw new Error("subject from UserInfo response does not match subject in ID Token");
        }
        response.profile = this._mergeClaims(response.profile, this._filterProtocolClaims(claims));
        this._logger.debug("_processClaims: user info claims received, updated profile:", response.profile);
    }
    _mergeClaims(claims1, claims2) {
        const result = {
            ...claims1
        };
        for (const [claim, values] of Object.entries(claims2))for (const value of Array.isArray(values) ? values : [
            values
        ]){
            const previousValue = result[claim];
            if (!previousValue) result[claim] = value;
            else if (Array.isArray(previousValue)) {
                if (!previousValue.includes(value)) previousValue.push(value);
            } else if (result[claim] !== value) {
                if (typeof value === "object" && this._settings.mergeClaims) result[claim] = this._mergeClaims(previousValue, value);
                else result[claim] = [
                    previousValue,
                    value
                ];
            }
        }
        return result;
    }
    _filterProtocolClaims(claims) {
        this._logger.debug("_filterProtocolClaims, incoming claims:", claims);
        const result = {
            ...claims
        };
        if (this._settings.filterProtocolClaims) {
            for (const type of ProtocolClaims)delete result[type];
            this._logger.debug("_filterProtocolClaims: protocol claims filtered:", result);
        } else this._logger.debug("_filterProtocolClaims: protocol claims not filtered");
        return result;
    }
    async _processCode(response, state) {
        if (response.code) {
            this._logger.debug("_processCode: Validating code");
            const tokenResponse = await this._tokenClient.exchangeCode({
                client_id: state.client_id,
                client_secret: state.client_secret,
                code: response.code,
                redirect_uri: state.redirect_uri,
                code_verifier: state.code_verifier,
                ...state.extraTokenParams
            });
            Object.assign(response, tokenResponse);
        } else this._logger.debug("_processCode: No code to process");
    }
    _validateIdTokenAttributes(response, currentToken) {
        this._logger.debug("_validateIdTokenAttributes: Decoding JWT attributes");
        const profile = _utils.JwtUtils.decode(response.id_token ?? "");
        if (!profile.sub) {
            this._logger.error("_validateIdTokenAttributes: No subject present in ID Token");
            throw new Error("No subject is present in ID Token");
        }
        if (currentToken) {
            const current = _utils.JwtUtils.decode(currentToken);
            if (current.sub !== profile.sub) {
                this._logger.error("_validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                throw new Error("sub in id_token does not match current sub");
            }
            if (current.auth_time && current.auth_time !== profile.auth_time) {
                this._logger.error("_validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                throw new Error("auth_time in id_token does not match original auth_time");
            }
            if (current.azp && current.azp !== profile.azp) {
                this._logger.error("_validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                throw new Error("azp in id_token does not match original azp");
            }
            if (!current.azp && profile.azp) {
                this._logger.error("_validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                throw new Error("azp not in id_token, but present in original id_token");
            }
        }
        response.profile = profile;
    }
}

},{"./utils":"3S0XE","./UserInfoService":"dC4Ry","./TokenClient":"8HdxU","./ErrorResponse":"7L2pO","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dC4Ry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "UserInfoService", ()=>UserInfoService
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _jsonService = require("./JsonService");
class UserInfoService {
    constructor(_metadataService){
        this._metadataService = _metadataService;
        this._logger = new _utils.Logger("UserInfoService");
        this._getClaimsFromJwt = async (responseText)=>{
            try {
                const payload = _utils.JwtUtils.decode(responseText);
                this._logger.debug("_getClaimsFromJwt: JWT decoding successful");
                return payload;
            } catch (err) {
                this._logger.error("_getClaimsFromJwt: Error parsing JWT response", err instanceof Error ? err.message : err);
                throw err;
            }
        };
        this._jsonService = new _jsonService.JsonService(undefined, this._getClaimsFromJwt);
    }
    async getClaims(token) {
        if (!token) {
            this._logger.error("getClaims: No token passed");
            throw new Error("A token is required");
        }
        const url = await this._metadataService.getUserInfoEndpoint();
        this._logger.debug("getClaims: received userinfo url", url);
        const claims = await this._jsonService.getJson(url, token);
        this._logger.debug("getClaims: claims received", claims);
        return claims;
    }
}

},{"./utils":"3S0XE","./JsonService":"3HbG5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8HdxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "TokenClient", ()=>TokenClient
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _jsonService = require("./JsonService");
class TokenClient {
    constructor(_settings, _metadataService){
        this._settings = _settings;
        this._metadataService = _metadataService;
        this._logger = new _utils.Logger("TokenClient");
        this._jsonService = new _jsonService.JsonService();
    }
    async exchangeCode({ grant_type ="authorization_code" , redirect_uri =this._settings.redirect_uri , client_id =this._settings.client_id , client_secret =this._settings.client_secret , ...args }) {
        if (!client_id) {
            this._logger.error("exchangeCode: No client_id passed");
            throw new Error("A client_id is required");
        }
        if (!redirect_uri) {
            this._logger.error("exchangeCode: No redirect_uri passed");
            throw new Error("A redirect_uri is required");
        }
        if (!args.code) {
            this._logger.error("exchangeCode: No code passed");
            throw new Error("A code is required");
        }
        if (!args.code_verifier) {
            this._logger.error("exchangeCode: No code_verifier passed");
            throw new Error("A code_verifier is required");
        }
        const params = new URLSearchParams({
            grant_type,
            redirect_uri
        });
        for (const [key, value] of Object.entries(args))if (value != null) params.set(key, value);
        let basicAuth;
        switch(this._settings.client_authentication){
            case "client_secret_basic":
                if (!client_secret) {
                    this._logger.error("exchangeCode: No client_secret passed");
                    throw new Error("A client_secret is required");
                }
                basicAuth = _utils.CryptoUtils.generateBasicAuth(client_id, client_secret);
                break;
            case "client_secret_post":
                params.append("client_id", client_id);
                if (client_secret) params.append("client_secret", client_secret);
                break;
        }
        const url = await this._metadataService.getTokenEndpoint(false);
        this._logger.debug("exchangeCode: Received token endpoint");
        const response = await this._jsonService.postForm(url, params, basicAuth);
        this._logger.debug("exchangeCode: response received");
        return response;
    }
    async exchangeRefreshToken({ grant_type ="refresh_token" , client_id =this._settings.client_id , client_secret =this._settings.client_secret , ...args }) {
        if (!client_id) {
            this._logger.error("exchangeRefreshToken: No client_id passed");
            throw new Error("A client_id is required");
        }
        if (!args.refresh_token) {
            this._logger.error("exchangeRefreshToken: No refresh_token passed");
            throw new Error("A refresh_token is required");
        }
        const params = new URLSearchParams({
            grant_type
        });
        for (const [key, value] of Object.entries(args))if (value != null) params.set(key, value);
        let basicAuth;
        switch(this._settings.client_authentication){
            case "client_secret_basic":
                if (!client_secret) {
                    this._logger.error("exchangeCode: No client_secret passed");
                    throw new Error("A client_secret is required");
                }
                basicAuth = _utils.CryptoUtils.generateBasicAuth(client_id, client_secret);
                break;
            case "client_secret_post":
                params.append("client_id", client_id);
                if (client_secret) params.append("client_secret", client_secret);
                break;
        }
        const url = await this._metadataService.getTokenEndpoint(false);
        this._logger.debug("exchangeRefreshToken: Received token endpoint");
        const response = await this._jsonService.postForm(url, params, basicAuth);
        this._logger.debug("exchangeRefreshToken: response received");
        return response;
    }
    async revoke(args) {
        if (!args.token) {
            this._logger.error("revoke: No token passed");
            throw new Error("A token is required");
        }
        const url = await this._metadataService.getRevocationEndpoint(false);
        this._logger.debug(`revoke: Received revocation endpoint, revoking ${args.token_type_hint ?? "default type"}`);
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(args))if (value != null) params.set(key, value);
        params.set("client_id", this._settings.client_id);
        if (this._settings.client_secret) params.set("client_secret", this._settings.client_secret);
        await this._jsonService.postForm(url, params);
        this._logger.debug("revoke: response received");
    }
}

},{"./utils":"3S0XE","./JsonService":"3HbG5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4YGi2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "SigninRequest", ()=>SigninRequest
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _signinState = require("./SigninState");
class SigninRequest {
    constructor({ // mandatory
    url , authority , client_id , redirect_uri , response_type , scope , // optional
    state_data , response_mode , request_type , client_secret , skipUserInfo , extraQueryParams , extraTokenParams , ...optionalParams }){
        this._logger = new _utils.Logger("SigninRequest");
        if (!url) {
            this._logger.error("ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            this._logger.error("ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            this._logger.error("ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            this._logger.error("ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            this._logger.error("ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            this._logger.error("ctor: No authority passed");
            throw new Error("authority");
        }
        this.state = new _signinState.SigninState({
            data: state_data,
            request_type,
            code_verifier: true,
            client_id,
            authority,
            redirect_uri,
            response_mode,
            client_secret,
            scope,
            extraTokenParams,
            skipUserInfo
        });
        const parsedUrl = new URL(url);
        parsedUrl.searchParams.append("client_id", client_id);
        parsedUrl.searchParams.append("redirect_uri", redirect_uri);
        parsedUrl.searchParams.append("response_type", response_type);
        parsedUrl.searchParams.append("scope", scope);
        parsedUrl.searchParams.append("state", this.state.id);
        if (this.state.code_challenge) {
            parsedUrl.searchParams.append("code_challenge", this.state.code_challenge);
            parsedUrl.searchParams.append("code_challenge_method", "S256");
        }
        for (const [key, value] of Object.entries({
            response_mode,
            ...optionalParams,
            ...extraQueryParams
        }))if (value != null) parsedUrl.searchParams.append(key, value.toString());
        this.url = parsedUrl.href;
    }
}

},{"./utils":"3S0XE","./SigninState":"6mKOR","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6mKOR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "SigninState", ()=>SigninState
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _state = require("./State");
class SigninState extends _state.State {
    constructor(args){
        super(args);
        if (args.code_verifier === true) this.code_verifier = _utils.CryptoUtils.generateCodeVerifier();
        else if (args.code_verifier) this.code_verifier = args.code_verifier;
        if (this.code_verifier) this.code_challenge = _utils.CryptoUtils.generateCodeChallenge(this.code_verifier);
        this.authority = args.authority;
        this.client_id = args.client_id;
        this.redirect_uri = args.redirect_uri;
        this.scope = args.scope;
        this.client_secret = args.client_secret;
        this.extraTokenParams = args.extraTokenParams;
        this.response_mode = args.response_mode;
        this.skipUserInfo = args.skipUserInfo;
    }
    toStorageString() {
        _utils.Logger.debug("SigninState", "toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            code_verifier: this.code_verifier,
            authority: this.authority,
            client_id: this.client_id,
            redirect_uri: this.redirect_uri,
            scope: this.scope,
            client_secret: this.client_secret,
            extraTokenParams: this.extraTokenParams,
            response_mode: this.response_mode,
            skipUserInfo: this.skipUserInfo
        });
    }
    static fromStorageString(storageString) {
        _utils.Logger.debug("SigninState", "fromStorageString");
        const data = JSON.parse(storageString);
        return new SigninState(data);
    }
}

},{"./utils":"3S0XE","./State":"e0Ong","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e0Ong":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "State", ()=>State
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class State {
    constructor(args){
        this.id = args.id || _utils.CryptoUtils.generateUUIDv4();
        this.data = args.data;
        if (args.created && args.created > 0) this.created = args.created;
        else this.created = _utils.Timer.getEpochTime();
        this.request_type = args.request_type;
    }
    toStorageString() {
        _utils.Logger.debug("State", "toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    }
    static fromStorageString(storageString) {
        _utils.Logger.debug("State", "fromStorageString");
        return new State(JSON.parse(storageString));
    }
    static async clearStaleState(storage, age) {
        const cutoff = _utils.Timer.getEpochTime() - age;
        const keys = await storage.getAllKeys();
        _utils.Logger.debug("State", "clearStaleState: got keys", keys);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const item = await storage.get(key);
            let remove = false;
            if (item) try {
                const state = State.fromStorageString(item);
                _utils.Logger.debug("State", "clearStaleState: got item from key: ", key, state.created);
                if (state.created <= cutoff) remove = true;
            } catch (err) {
                _utils.Logger.error("State", "clearStaleState: Error parsing state for key", key, err instanceof Error ? err.message : err);
                remove = true;
            }
            else {
                _utils.Logger.debug("State", "clearStaleState: no item in storage for key: ", key);
                remove = true;
            }
            if (remove) {
                _utils.Logger.debug("State", "clearStaleState: removed item for key: ", key);
                storage.remove(key);
            }
        }
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5g0G9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "SigninResponse", ()=>SigninResponse
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
const OidcScope = "openid";
class SigninResponse {
    constructor(params){
        /** @see {@link User.access_token} */ this.access_token = "";
        /** @see {@link User.token_type} */ this.token_type = "";
        /** @see {@link User.profile} */ this.profile = {
        };
        this.state = params.get("state");
        this.session_state = params.get("session_state");
        this.error = params.get("error");
        this.error_description = params.get("error_description");
        this.error_uri = params.get("error_uri");
        this.code = params.get("code");
    }
    get expires_in() {
        if (this.expires_at === undefined) return undefined;
        return this.expires_at - _utils.Timer.getEpochTime();
    }
    set expires_in(value) {
        // spec expects a number, but normalize here just in case
        if (typeof value === "string") value = Number(value);
        if (value !== undefined && value >= 0) this.expires_at = Math.floor(value) + _utils.Timer.getEpochTime();
    }
    get isOpenId() {
        return this.scope?.split(" ").includes(OidcScope) || !!this.id_token;
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cqLit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "SignoutRequest", ()=>SignoutRequest
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _state = require("./State");
class SignoutRequest {
    constructor({ url , state_data , id_token_hint , post_logout_redirect_uri , extraQueryParams , request_type  }){
        this._logger = new _utils.Logger("SignoutRequest");
        if (!url) {
            this._logger.error("ctor: No url passed");
            throw new Error("url");
        }
        const parsedUrl = new URL(url);
        if (id_token_hint) parsedUrl.searchParams.append("id_token_hint", id_token_hint);
        if (post_logout_redirect_uri) {
            parsedUrl.searchParams.append("post_logout_redirect_uri", post_logout_redirect_uri);
            if (state_data) {
                this.state = new _state.State({
                    data: state_data,
                    request_type
                });
                parsedUrl.searchParams.append("state", this.state.id);
            }
        }
        for (const [key, value] of Object.entries({
            ...extraQueryParams
        }))if (value != null) parsedUrl.searchParams.append(key, value.toString());
        this.url = parsedUrl.href;
    }
}

},{"./utils":"3S0XE","./State":"e0Ong","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6dwjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
/**
 * @public
 */ parcelHelpers.export(exports, "SignoutResponse", ()=>SignoutResponse
);
class SignoutResponse {
    constructor(params){
        this.state = params.get("state");
        this.error = params.get("error");
        this.error_description = params.get("error_description");
        this.error_uri = params.get("error_uri");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eMjwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "SessionMonitor", ()=>SessionMonitor
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _checkSessionIFrame = require("./CheckSessionIFrame");
class SessionMonitor {
    constructor(_userManager){
        this._userManager = _userManager;
        this._logger = new _utils.Logger("SessionMonitor");
        this._start = async (user)=>{
            const session_state = user.session_state;
            if (!session_state) return;
            if (user.profile) {
                this._sub = user.profile.sub;
                this._sid = user.profile.sid;
                this._logger.debug("_start: session_state:", session_state, ", sub:", this._sub);
            } else {
                this._sub = undefined;
                this._sid = undefined;
                this._logger.debug("_start: session_state:", session_state, ", anonymous user");
            }
            if (this._checkSessionIFrame) {
                this._checkSessionIFrame.start(session_state);
                return;
            }
            try {
                const url = await this._userManager.metadataService.getCheckSessionIframe();
                if (url) {
                    this._logger.debug("_start: Initializing check session iframe");
                    const client_id = this._userManager.settings.client_id;
                    const intervalInSeconds = this._userManager.settings.checkSessionIntervalInSeconds;
                    const stopOnError = this._userManager.settings.stopCheckSessionOnError;
                    const checkSessionIFrame = new _checkSessionIFrame.CheckSessionIFrame(this._callback, client_id, url, intervalInSeconds, stopOnError);
                    await checkSessionIFrame.load();
                    this._checkSessionIFrame = checkSessionIFrame;
                    checkSessionIFrame.start(session_state);
                } else this._logger.warn("_start: No check session iframe found in the metadata");
            } catch (err) {
                // catch to suppress errors since we're in non-promise callback
                this._logger.error("_start: Error from getCheckSessionIframe:", err instanceof Error ? err.message : err);
            }
        };
        this._stop = ()=>{
            this._sub = undefined;
            this._sid = undefined;
            if (this._checkSessionIFrame) {
                this._logger.debug("_stop");
                this._checkSessionIFrame.stop();
            }
            if (this._userManager.settings.monitorAnonymousSession) {
                // using a timer to delay re-initialization to avoid race conditions during signout
                // TODO rewrite to use promise correctly
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                const timerHandle = setInterval(async ()=>{
                    clearInterval(timerHandle);
                    try {
                        const session = await this._userManager.querySessionStatus();
                        if (session) {
                            const tmpUser = {
                                session_state: session.session_state,
                                profile: session.sub && session.sid ? {
                                    sub: session.sub,
                                    sid: session.sid
                                } : null
                            };
                            this._start(tmpUser);
                        }
                    } catch (err) {
                        // catch to suppress errors since we're in a callback
                        this._logger.error("_stop: error from querySessionStatus:", err instanceof Error ? err.message : err);
                    }
                }, 1000);
            }
        };
        this._callback = async ()=>{
            try {
                const session = await this._userManager.querySessionStatus();
                let raiseEvent = true;
                if (session && this._checkSessionIFrame) {
                    if (session.sub === this._sub) {
                        raiseEvent = false;
                        this._checkSessionIFrame.start(session.session_state);
                        if (session.sid === this._sid) this._logger.debug("_callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                        else {
                            this._logger.debug("_callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                            this._userManager.events._raiseUserSessionChanged();
                        }
                    } else this._logger.debug("_callback: Different subject signed into OP:", session.sub);
                } else this._logger.debug("_callback: Subject no longer signed into OP");
                if (raiseEvent) {
                    if (this._sub) {
                        this._logger.debug("_callback: SessionMonitor._callback; raising signed out event");
                        this._userManager.events._raiseUserSignedOut();
                    } else {
                        this._logger.debug("_callback: SessionMonitor._callback; raising signed in event");
                        this._userManager.events._raiseUserSignedIn();
                    }
                }
            } catch (err) {
                if (this._sub) {
                    this._logger.debug("_callback: Error calling queryCurrentSigninSession; raising signed out event", err instanceof Error ? err.message : err);
                    this._userManager.events._raiseUserSignedOut();
                }
            }
        };
        if (!_userManager) {
            this._logger.error("ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }
        this._userManager.events.addUserLoaded(this._start);
        this._userManager.events.addUserUnloaded(this._stop);
        Promise.resolve(this._init()).catch((err)=>{
            // catch to suppress errors since we're in a ctor
            this._logger.error("ctor: error:", err.message);
        });
    }
    async _init() {
        const user = await this._userManager.getUser();
        // doing this manually here since calling getUser
        // doesn't trigger load event.
        if (user) this._start(user);
        else if (this._userManager.settings.monitorAnonymousSession) {
            const session = await this._userManager.querySessionStatus();
            if (session) {
                const tmpUser = {
                    session_state: session.session_state,
                    profile: session.sub && session.sid ? {
                        sub: session.sub,
                        sid: session.sid
                    } : null
                };
                this._start(tmpUser);
            }
        }
    }
}

},{"./utils":"3S0XE","./CheckSessionIFrame":"buTal","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kijw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "User", ()=>User
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class User {
    constructor(args){
        this.id_token = args.id_token;
        this.session_state = args.session_state ?? null;
        this.access_token = args.access_token;
        this.refresh_token = args.refresh_token;
        this.token_type = args.token_type;
        this.scope = args.scope;
        this.profile = args.profile;
        this.expires_at = args.expires_at;
        this.state = args.userState;
    }
    /** Computed number of seconds the access token has remaining. */ get expires_in() {
        if (this.expires_at === undefined) return undefined;
        return this.expires_at - _utils.Timer.getEpochTime();
    }
    set expires_in(value) {
        if (value !== undefined) this.expires_at = Math.floor(value) + _utils.Timer.getEpochTime();
    }
    /** Computed value indicating if the access token is expired. */ get expired() {
        const expires_in = this.expires_in;
        if (expires_in === undefined) return undefined;
        return expires_in <= 0;
    }
    /** Array representing the parsed values from the `scope`. */ get scopes() {
        return this.scope?.split(" ") ?? [];
    }
    toStorageString() {
        _utils.Logger.debug("User", "toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    }
    static fromStorageString(storageString) {
        _utils.Logger.debug("User", "fromStorageString");
        return new User(JSON.parse(storageString));
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dAzXH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides a higher level API for signing a user in, signing out, managing the user's claims returned from the OIDC provider,
 * and managing an access token returned from the OIDC/OAuth2 provider.
 *
 * @public
 */ parcelHelpers.export(exports, "UserManager", ()=>UserManager
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _navigators = require("./navigators");
var _oidcClient = require("./OidcClient");
var _userManagerSettings = require("./UserManagerSettings");
var _user = require("./User");
var _userManagerEvents = require("./UserManagerEvents");
var _silentRenewService = require("./SilentRenewService");
var _sessionMonitor = require("./SessionMonitor");
var _errorResponse = require("./ErrorResponse");
var _refreshState = require("./RefreshState");
class UserManager {
    constructor(settings){
        this._logger = new _utils.Logger("UserManager");
        this.settings = new _userManagerSettings.UserManagerSettingsStore(settings);
        this._client = new _oidcClient.OidcClient(settings);
        this._redirectNavigator = new _navigators.RedirectNavigator(this.settings);
        this._popupNavigator = new _navigators.PopupNavigator(this.settings);
        this._iframeNavigator = new _navigators.IFrameNavigator(this.settings);
        this._events = new _userManagerEvents.UserManagerEvents(this.settings);
        this._silentRenewService = new _silentRenewService.SilentRenewService(this);
        // order is important for the following properties; these services depend upon the events.
        if (this.settings.automaticSilentRenew) {
            this._logger.debug("ctor: automaticSilentRenew is configured, setting up silent renew");
            this.startSilentRenew();
        }
        this._sessionMonitor = null;
        if (this.settings.monitorSession) {
            this._logger.debug("ctor: monitorSession is configured, setting up session monitor");
            this._sessionMonitor = new _sessionMonitor.SessionMonitor(this);
        }
    }
    /** Returns an object used to register for events raised by the `UserManager`. */ get events() {
        return this._events;
    }
    /** Returns an object used to access the metadata configuration of the OIDC provider. */ get metadataService() {
        return this._client.metadataService;
    }
    /**
     * Returns promise to load the `User` object for the currently authenticated user.
     */ async getUser() {
        const user = await this._loadUser();
        if (user) {
            this._logger.info("getUser: user loaded");
            this._events.load(user, false);
            return user;
        }
        this._logger.info("getUser: user not found in storage");
        return null;
    }
    /**
     * Returns promise to remove from any storage the currently authenticated user.
     */ async removeUser() {
        await this.storeUser(null);
        this._logger.info("removeUser: user removed from storage");
        this._events.unload();
    }
    /**
     * Returns promise to trigger a redirect of the current window to the authorization endpoint.
     */ async signinRedirect(args = {
    }) {
        const { redirectMethod , ...requestArgs } = args;
        const handle = await this._redirectNavigator.prepare({
            redirectMethod
        });
        await this._signinStart({
            request_type: "si:r",
            ...requestArgs
        }, handle);
        this._logger.info("signinRedirect: successful");
    }
    /**
     * Returns promise to process response from the authorization endpoint. The result of the promise is the authenticated `User`.
     */ async signinRedirectCallback(url = window.location.href) {
        const user = await this._signinEnd(url);
        if (user.profile && user.profile.sub) this._logger.info("signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
        else this._logger.info("signinRedirectCallback: no sub");
        return user;
    }
    /**
     * Returns promise to trigger a request (via a popup window) to the authorization endpoint. The result of the promise is the authenticated `User`.
     */ async signinPopup(args = {
    }) {
        const { popupWindowFeatures , popupWindowTarget , ...requestArgs } = args;
        const url = this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            this._logger.error("signinPopup: No popup_redirect_uri or redirect_uri configured");
            throw new Error("No popup_redirect_uri or redirect_uri configured");
        }
        const handle = await this._popupNavigator.prepare({
            popupWindowFeatures,
            popupWindowTarget
        });
        const user = await this._signin({
            request_type: "si:p",
            redirect_uri: url,
            display: "popup",
            ...requestArgs
        }, handle);
        if (user) {
            if (user.profile && user.profile.sub) this._logger.info("signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
            else this._logger.info("signinPopup: no sub");
        }
        return user;
    }
    /**
     * Returns promise to notify the opening window of response from the authorization endpoint.
     */ async signinPopupCallback(url = window.location.href, keepOpen = false) {
        try {
            await this._popupNavigator.callback(url, keepOpen);
            this._logger.info("signinPopupCallback: successful");
        } catch (err) {
            this._logger.error("signinPopupCallback error", err instanceof Error ? err.message : err);
        }
    }
    /**
     * Returns promise to trigger a silent request (via an iframe) to the authorization endpoint.
     * The result of the promise is the authenticated `User`.
     */ async signinSilent(args = {
    }) {
        const { silentRequestTimeoutInSeconds , ...requestArgs } = args;
        // first determine if we have a refresh token, or need to use iframe
        let user = await this._loadUser();
        if (user?.refresh_token) {
            this._logger.debug("signinSilent: using refresh token");
            const state = new _refreshState.RefreshState(user);
            return await this._useRefreshToken(state);
        }
        const url = this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            this._logger.error("signinSilent: No silent_redirect_uri configured");
            throw new Error("No silent_redirect_uri configured");
        }
        let verifySub;
        if (user && this.settings.validateSubOnSilentRenew) {
            this._logger.debug("signinSilent: subject prior to silent renew: ", user.profile.sub);
            verifySub = user.profile.sub;
        }
        const handle = await this._iframeNavigator.prepare({
            silentRequestTimeoutInSeconds
        });
        user = await this._signin({
            request_type: "si:s",
            redirect_uri: url,
            prompt: "none",
            id_token_hint: this.settings.includeIdTokenInSilentRenew ? user?.id_token : undefined,
            ...requestArgs
        }, handle, verifySub);
        if (user) {
            if (user.profile && user.profile.sub) this._logger.info("signinSilent: successful, signed in sub: ", user.profile.sub);
            else this._logger.info("signinSilent: no sub");
        }
        return user;
    }
    async _useRefreshToken(state) {
        const response = await this._client.useRefreshToken(state);
        const user = new _user.User({
            ...state,
            ...response
        });
        await this.storeUser(user);
        this._events.load(user);
        return user;
    }
    /**
     * Returns promise to notify the parent window of response from the authorization endpoint.
     */ async signinSilentCallback(url = window.location.href) {
        await this._iframeNavigator.callback(url);
        this._logger.info("signinSilentCallback: successful");
    }
    async signinCallback(url = window.location.href) {
        const { state  } = await this._client.readSigninResponseState(url);
        switch(state.request_type){
            case "si:r":
                return await this.signinRedirectCallback(url);
            case "si:p":
                return await this.signinPopupCallback(url);
            case "si:s":
                return await this.signinSilentCallback(url);
            default:
                throw new Error("invalid response_type in state");
        }
    }
    async signoutCallback(url = window.location.href, keepOpen = false) {
        const { state  } = await this._client.readSignoutResponseState(url);
        if (!state) return;
        switch(state.request_type){
            case "so:r":
                await this.signoutRedirectCallback(url);
                break;
            case "so:p":
                await this.signoutPopupCallback(url, keepOpen);
                break;
            default:
                throw new Error("invalid response_type in state");
        }
    }
    /**
     * Returns promise to query OP for user's current signin status. Returns object with session_state and subject identifier.
     */ async querySessionStatus(args = {
    }) {
        const { silentRequestTimeoutInSeconds , ...requestArgs } = args;
        const url = this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            this._logger.error("querySessionStatus: No silent_redirect_uri configured");
            throw new Error("No silent_redirect_uri configured");
        }
        const handle = await this._iframeNavigator.prepare({
            silentRequestTimeoutInSeconds
        });
        const navResponse = await this._signinStart({
            request_type: "si:s",
            redirect_uri: url,
            prompt: "none",
            response_type: this.settings.query_status_response_type,
            scope: "openid",
            skipUserInfo: true,
            ...requestArgs
        }, handle);
        try {
            const signinResponse = await this._client.processSigninResponse(navResponse.url);
            this._logger.debug("querySessionStatus: got signin response");
            if (signinResponse.session_state && signinResponse.profile.sub) {
                this._logger.info("querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                return {
                    session_state: signinResponse.session_state,
                    sub: signinResponse.profile.sub,
                    sid: signinResponse.profile.sid
                };
            }
            this._logger.info("querySessionStatus: successful, user not authenticated");
            return null;
        } catch (err) {
            if (this.settings.monitorAnonymousSession && err instanceof _errorResponse.ErrorResponse) switch(err.error){
                case "login_required":
                case "consent_required":
                case "interaction_required":
                case "account_selection_required":
                    this._logger.info("querySessionStatus: querySessionStatus success for anonymous user");
                    return {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        session_state: err.session_state
                    };
            }
            throw err;
        }
    }
    async _signin(args, handle, verifySub) {
        const navResponse = await this._signinStart(args, handle);
        return await this._signinEnd(navResponse.url, verifySub);
    }
    async _signinStart(args, handle) {
        this._logger.debug("_signinStart: got navigator window handle");
        try {
            const signinRequest = await this._client.createSigninRequest(args);
            this._logger.debug("_signinStart: got signin request");
            return await handle.navigate({
                url: signinRequest.url,
                state: signinRequest.state.id,
                response_mode: signinRequest.state.response_mode
            });
        } catch (err) {
            this._logger.debug("_signinStart: Error after preparing navigator, closing navigator window");
            handle.close();
            throw err;
        }
    }
    async _signinEnd(url, verifySub) {
        const signinResponse = await this._client.processSigninResponse(url);
        this._logger.debug("_signinEnd: got signin response");
        const user = new _user.User(signinResponse);
        if (verifySub) {
            if (verifySub !== user.profile.sub) {
                this._logger.debug("_signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
                throw new Error("login_required");
            }
            this._logger.debug("_signinEnd: current user matches user returned from signin");
        }
        await this.storeUser(user);
        this._logger.debug("_signinEnd: user stored");
        this._events.load(user);
        return user;
    }
    /**
     * Returns promise to trigger a redirect of the current window to the end session endpoint.
     */ async signoutRedirect(args = {
    }) {
        const { redirectMethod , ...requestArgs } = args;
        const handle = await this._redirectNavigator.prepare({
            redirectMethod
        });
        await this._signoutStart({
            request_type: "so:r",
            post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
            ...requestArgs
        }, handle);
        this._logger.info("signoutRedirect: successful");
    }
    /**
     * Returns promise to process response from the end session endpoint.
     */ async signoutRedirectCallback(url = window.location.href) {
        const response = await this._signoutEnd(url);
        this._logger.info("signoutRedirectCallback: successful");
        return response;
    }
    /**
     * Returns promise to trigger a redirect of a popup window window to the end session endpoint.
     */ async signoutPopup(args = {
    }) {
        const { popupWindowFeatures , popupWindowTarget , ...requestArgs } = args;
        const url = this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        const handle = await this._popupNavigator.prepare({
            popupWindowFeatures,
            popupWindowTarget
        });
        await this._signout({
            request_type: "so:p",
            post_logout_redirect_uri: url,
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            state: url == null ? undefined : {
            },
            ...requestArgs
        }, handle);
        this._logger.info("signoutPopup: successful");
    }
    /**
     * Returns promise to process response from the end session endpoint from a popup window.
     */ async signoutPopupCallback(url = window.location.href, keepOpen = false) {
        await this._popupNavigator.callback(url, keepOpen);
        this._logger.info("signoutPopupCallback: successful");
    }
    async _signout(args, handle) {
        const navResponse = await this._signoutStart(args, handle);
        return await this._signoutEnd(navResponse.url);
    }
    async _signoutStart(args = {
    }, handle) {
        this._logger.debug("_signoutStart: got navigator window handle");
        try {
            const user = await this._loadUser();
            this._logger.debug("_signoutStart: loaded current user from storage");
            if (this.settings.revokeTokensOnSignout) await this._revokeInternal(user);
            const id_token = args.id_token_hint || user && user.id_token;
            if (id_token) {
                this._logger.debug("_signoutStart: Setting id_token into signout request");
                args.id_token_hint = id_token;
            }
            await this.removeUser();
            this._logger.debug("_signoutStart: user removed, creating signout request");
            const signoutRequest = await this._client.createSignoutRequest(args);
            this._logger.debug("_signoutStart: got signout request");
            return await handle.navigate({
                url: signoutRequest.url,
                state: signoutRequest.state?.id
            });
        } catch (err) {
            this._logger.debug("_signoutStart: Error after preparing navigator, closing navigator window");
            handle.close();
            throw err;
        }
    }
    async _signoutEnd(url) {
        const signoutResponse = await this._client.processSignoutResponse(url);
        this._logger.debug("_signoutEnd: got signout response");
        return signoutResponse;
    }
    async revokeTokens(types) {
        const user = await this._loadUser();
        await this._revokeInternal(user, types);
    }
    async _revokeInternal(user, types = this.settings.revokeTokenTypes) {
        if (!user) return;
        const typesPresent = types.filter((type)=>typeof user[type] === "string"
        );
        if (!typesPresent.length) {
            this._logger.debug("revokeTokens: no need to revoke due to no token(s)");
            return;
        }
        // don't Promise.all, order matters
        for (const type of typesPresent){
            await this._client.revokeToken(user[type], type);
            this._logger.info(`revokeTokens: ${type} revoked successfully`);
            if (type !== "access_token") user[type] = null;
        }
        await this.storeUser(user);
        this._logger.debug("revokeTokens: user stored");
        this._events.load(user);
    }
    /**
     * Enables silent renew for the `UserManager`.
     */ startSilentRenew() {
        this._silentRenewService.start();
    }
    /**
     * Disables silent renew for the `UserManager`.
     */ stopSilentRenew() {
        this._silentRenewService.stop();
    }
    get _userStoreKey() {
        return `user:${this.settings.authority}:${this.settings.client_id}`;
    }
    async _loadUser() {
        const storageString = await this.settings.userStore.get(this._userStoreKey);
        if (storageString) {
            this._logger.debug("_loadUser: user storageString loaded");
            return _user.User.fromStorageString(storageString);
        }
        this._logger.debug("_loadUser: no user storageString");
        return null;
    }
    async storeUser(user) {
        if (user) {
            this._logger.debug("storeUser: storing user");
            const storageString = user.toStorageString();
            await this.settings.userStore.set(this._userStoreKey, storageString);
        } else {
            this._logger.debug("storeUser: removing user");
            await this.settings.userStore.remove(this._userStoreKey);
        }
    }
    /**
     * Removes stale state entries in storage for incomplete authorize requests.
     */ async clearStaleState() {
        await this._client.clearStaleState();
    }
}

},{"./utils":"3S0XE","./navigators":"kWCEP","./OidcClient":"evoWq","./UserManagerSettings":"fgtro","./User":"kijw1","./UserManagerEvents":"awz14","./SilentRenewService":"88hja","./SessionMonitor":"eMjwU","./ErrorResponse":"7L2pO","./RefreshState":"gJ9tD","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kWCEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iframeNavigator = require("./IFrameNavigator");
parcelHelpers.exportAll(_iframeNavigator, exports);
var _iframeWindow = require("./IFrameWindow");
parcelHelpers.exportAll(_iframeWindow, exports);
var _inavigator = require("./INavigator");
parcelHelpers.exportAll(_inavigator, exports);
var _iwindow = require("./IWindow");
parcelHelpers.exportAll(_iwindow, exports);
var _popupNavigator = require("./PopupNavigator");
parcelHelpers.exportAll(_popupNavigator, exports);
var _popupWindow = require("./PopupWindow");
parcelHelpers.exportAll(_popupWindow, exports);
var _redirectNavigator = require("./RedirectNavigator");
parcelHelpers.exportAll(_redirectNavigator, exports);

},{"./IFrameNavigator":"dHDrj","./IFrameWindow":"5zV94","./INavigator":"buYTB","./IWindow":"arHlK","./PopupNavigator":"grmOe","./PopupWindow":"bYCzT","./RedirectNavigator":"6kTJC","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dHDrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "IFrameNavigator", ()=>IFrameNavigator
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
var _iframeWindow = require("./IFrameWindow");
class IFrameNavigator {
    constructor(_settings){
        this._settings = _settings;
        this._logger = new _utils.Logger("IFrameNavigator");
    }
    async prepare({ silentRequestTimeoutInSeconds =this._settings.silentRequestTimeoutInSeconds  }) {
        return new _iframeWindow.IFrameWindow({
            silentRequestTimeoutInSeconds
        });
    }
    async callback(url) {
        this._logger.debug("callback");
        _iframeWindow.IFrameWindow.notifyParent(url);
    }
}

},{"../utils":"3S0XE","./IFrameWindow":"5zV94","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5zV94":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "IFrameWindow", ()=>IFrameWindow
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
var _abstractChildWindow = require("./AbstractChildWindow");
const defaultTimeoutInSeconds = 10;
class IFrameWindow extends _abstractChildWindow.AbstractChildWindow {
    constructor({ silentRequestTimeoutInSeconds =defaultTimeoutInSeconds  }){
        super();
        this._logger = new _utils.Logger("IFrameWindow");
        this._timeoutInSeconds = silentRequestTimeoutInSeconds;
        this._frame = window.document.createElement("iframe");
        this._window = this._frame.contentWindow;
        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "fixed";
        this._frame.style.left = "-1000px";
        this._frame.style.top = "0";
        this._frame.width = "0";
        this._frame.height = "0";
        window.document.body.appendChild(this._frame);
        this._window = this._frame.contentWindow;
    }
    async navigate(params) {
        this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
        const timer = setTimeout(()=>this._abort.raise(new Error("IFrame timed out without a response"))
        , this._timeoutInSeconds * 1000);
        this._disposeHandlers.add(()=>clearTimeout(timer)
        );
        return await super.navigate(params);
    }
    close() {
        if (this._frame) {
            if (this._frame.parentNode) this._frame.parentNode.removeChild(this._frame);
            this._abort.raise(new Error("IFrame removed from DOM"));
            this._frame = null;
        }
        this._window = null;
    }
    static notifyParent(url) {
        return super._notifyParent(window.parent, url);
    }
}

},{"../utils":"3S0XE","./AbstractChildWindow":"8dRS3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8dRS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Window implementation which resolves via communication from a child window
 * via the `Window.postMessage()` interface.
 *
 * @internal
 */ parcelHelpers.export(exports, "AbstractChildWindow", ()=>AbstractChildWindow
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
const messageSource = "oidc-client";
class AbstractChildWindow {
    async navigate(params) {
        if (!this._window) throw new Error("Attempted to navigate on a disposed window");
        this._logger.debug("navigate: Setting URL in window");
        this._window.location.replace(params.url);
        const { url , keepOpen  } = await new Promise((resolve, reject)=>{
            const listener = (e)=>{
                const data = e.data;
                if (e.origin !== window.location.origin || data?.source !== messageSource) // silently discard events not intended for us
                return;
                try {
                    const state = _utils.UrlUtils.readParams(data.url, params.response_mode).get("state");
                    if (!state) this._logger.warn("navigate: no state found in response url");
                    if (e.source !== this._window && state !== params.state) // MessageEvent source is a relatively modern feature, we can't rely on it
                    // so we also inspect the payload for a matching state key as an alternative
                    return;
                } catch (err) {
                    this._dispose();
                    reject(new Error("Invalid response from window"));
                }
                resolve(data);
            };
            window.addEventListener("message", listener, false);
            this._disposeHandlers.add(()=>window.removeEventListener("message", listener, false)
            );
            this._disposeHandlers.add(this._abort.addHandler((reason)=>{
                this._dispose();
                reject(reason);
            }));
        });
        this._logger.debug("navigate: Got response from window");
        this._dispose();
        if (!keepOpen) this.close();
        return {
            url
        };
    }
    _dispose() {
        this._logger.debug("_dispose");
        for (const dispose of this._disposeHandlers)dispose();
        this._disposeHandlers.clear();
    }
    static _notifyParent(parent, url, keepOpen = false) {
        parent.postMessage({
            source: messageSource,
            url,
            keepOpen
        }, window.location.origin);
    }
    constructor(){
        this._abort = new _utils.Event("Window navigation aborted");
        this._disposeHandlers = new Set();
        this._window = null;
    }
}

},{"../utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"buYTB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"arHlK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"grmOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "PopupNavigator", ()=>PopupNavigator
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
var _popupWindow = require("./PopupWindow");
class PopupNavigator {
    constructor(_settings){
        this._settings = _settings;
        this._logger = new _utils.Logger("PopupNavigator");
    }
    async prepare({ popupWindowFeatures =this._settings.popupWindowFeatures , popupWindowTarget =this._settings.popupWindowTarget  }) {
        return new _popupWindow.PopupWindow({
            popupWindowFeatures,
            popupWindowTarget
        });
    }
    async callback(url, keepOpen = false) {
        this._logger.debug("callback");
        _popupWindow.PopupWindow.notifyOpener(url, keepOpen);
    }
}

},{"../utils":"3S0XE","./PopupWindow":"bYCzT","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bYCzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "PopupWindow", ()=>PopupWindow
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
var _abstractChildWindow = require("./AbstractChildWindow");
const checkForPopupClosedInterval = 500;
const defaultPopupWindowFeatures = {
    location: false,
    toolbar: false,
    height: 640
};
const defaultPopupTarget = "_blank";
class PopupWindow extends _abstractChildWindow.AbstractChildWindow {
    constructor({ popupWindowTarget =defaultPopupTarget , popupWindowFeatures ={
    }  }){
        super();
        this._logger = new _utils.Logger("PopupWindow");
        const centeredPopup = _utils.PopupUtils.center({
            ...defaultPopupWindowFeatures,
            ...popupWindowFeatures
        });
        this._window = window.open(undefined, popupWindowTarget, _utils.PopupUtils.serialize(centeredPopup));
    }
    async navigate(params) {
        this._window?.focus();
        const popupClosedInterval = setInterval(()=>{
            if (!this._window || this._window.closed) this._abort.raise(new Error("Popup closed by user"));
        }, checkForPopupClosedInterval);
        this._disposeHandlers.add(()=>clearInterval(popupClosedInterval)
        );
        return await super.navigate(params);
    }
    close() {
        if (this._window) {
            if (!this._window.closed) this._window.close();
            this._abort.raise(new Error("Popup closed"));
        }
        this._window = null;
    }
    static notifyOpener(url, keepOpen) {
        if (!window.opener) throw new Error("No window.opener. Can't complete notification.");
        return super._notifyParent(window.opener, url, keepOpen);
    }
}

},{"../utils":"3S0XE","./AbstractChildWindow":"8dRS3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6kTJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "RedirectNavigator", ()=>RedirectNavigator
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("../utils");
class RedirectNavigator {
    constructor(_settings){
        this._settings = _settings;
        this._logger = new _utils.Logger("RedirectNavigator");
    }
    async prepare({ redirectMethod =this._settings.redirectMethod  }) {
        const redirect = window.location[redirectMethod].bind(window.location);
        return {
            navigate: (params)=>redirect(params.url)
            ,
            close: ()=>this._logger.warn("close: cannot close the current window")
        };
    }
}

},{"../utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fgtro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The settings with defaults applied of the {@link UserManager}.
 * @see {@link UserManagerSettings}
 *
 * @public
 */ parcelHelpers.export(exports, "UserManagerSettingsStore", ()=>UserManagerSettingsStore
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _oidcClientSettings = require("./OidcClientSettings");
var _webStorageStateStore = require("./WebStorageStateStore");
var _inMemoryWebStorage = require("./InMemoryWebStorage");
const DefaultAccessTokenExpiringNotificationTimeInSeconds = 60;
const DefaultCheckSessionIntervalInSeconds = 2;
class UserManagerSettingsStore extends _oidcClientSettings.OidcClientSettingsStore {
    constructor(args){
        const { popup_redirect_uri , popup_post_logout_redirect_uri , popupWindowFeatures , popupWindowTarget , redirectMethod ="assign" , silent_redirect_uri , silentRequestTimeoutInSeconds , automaticSilentRenew =true , validateSubOnSilentRenew =true , includeIdTokenInSilentRenew =false , monitorSession =false , monitorAnonymousSession =false , checkSessionIntervalInSeconds =DefaultCheckSessionIntervalInSeconds , query_status_response_type , stopCheckSessionOnError =true , revokeTokenTypes =[
            "access_token",
            "refresh_token"
        ] , revokeTokensOnSignout =false , accessTokenExpiringNotificationTimeInSeconds =DefaultAccessTokenExpiringNotificationTimeInSeconds , userStore ,  } = args;
        super(args);
        this.popup_redirect_uri = popup_redirect_uri;
        this.popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        this.popupWindowFeatures = popupWindowFeatures;
        this.popupWindowTarget = popupWindowTarget;
        this.redirectMethod = redirectMethod;
        this.silent_redirect_uri = silent_redirect_uri;
        this.silentRequestTimeoutInSeconds = silentRequestTimeoutInSeconds;
        this.automaticSilentRenew = automaticSilentRenew;
        this.validateSubOnSilentRenew = validateSubOnSilentRenew;
        this.includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        this.monitorSession = monitorSession;
        this.monitorAnonymousSession = monitorAnonymousSession;
        this.checkSessionIntervalInSeconds = checkSessionIntervalInSeconds;
        this.stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) this.query_status_response_type = query_status_response_type;
        else this.query_status_response_type = "code";
        this.revokeTokenTypes = revokeTokenTypes;
        this.revokeTokensOnSignout = revokeTokensOnSignout;
        this.accessTokenExpiringNotificationTimeInSeconds = accessTokenExpiringNotificationTimeInSeconds;
        if (userStore) this.userStore = userStore;
        else {
            const store = typeof window !== "undefined" ? window.sessionStorage : new _inMemoryWebStorage.InMemoryWebStorage();
            this.userStore = new _webStorageStateStore.WebStorageStateStore({
                store
            });
        }
    }
}

},{"./OidcClientSettings":"i4FII","./WebStorageStateStore":"b1SmR","./InMemoryWebStorage":"4mz8S","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"awz14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "UserManagerEvents", ()=>UserManagerEvents
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
var _accessTokenEvents = require("./AccessTokenEvents");
class UserManagerEvents extends _accessTokenEvents.AccessTokenEvents {
    constructor(settings){
        super({
            expiringNotificationTimeInSeconds: settings.accessTokenExpiringNotificationTimeInSeconds
        });
        this._logger = new _utils.Logger("UserManagerEvents");
        this._userLoaded = new _utils.Event("User loaded");
        this._userUnloaded = new _utils.Event("User unloaded");
        this._silentRenewError = new _utils.Event("Silent renew error");
        this._userSignedIn = new _utils.Event("User signed in");
        this._userSignedOut = new _utils.Event("User signed out");
        this._userSessionChanged = new _utils.Event("User session changed");
    }
    load(user, raiseEvent = true) {
        this._logger.debug("load");
        super.load(user);
        if (raiseEvent) this._userLoaded.raise(user);
    }
    unload() {
        this._logger.debug("unload");
        super.unload();
        this._userUnloaded.raise();
    }
    /**
     * Add callback: Raised when a user session has been established (or re-established).
     */ addUserLoaded(cb) {
        return this._userLoaded.addHandler(cb);
    }
    /**
     * Remove callback: Raised when a user session has been established (or re-established).
     */ removeUserLoaded(cb) {
        return this._userLoaded.removeHandler(cb);
    }
    /**
     * Add callback: Raised when a user session has been terminated.
     */ addUserUnloaded(cb) {
        return this._userUnloaded.addHandler(cb);
    }
    /**
     * Remove callback: Raised when a user session has been terminated.
     */ removeUserUnloaded(cb) {
        return this._userUnloaded.removeHandler(cb);
    }
    /**
     * Add callback: Raised when the automatic silent renew has failed.
     */ addSilentRenewError(cb) {
        return this._silentRenewError.addHandler(cb);
    }
    /**
     * Remove callback: Raised when the automatic silent renew has failed.
     */ removeSilentRenewError(cb) {
        return this._silentRenewError.removeHandler(cb);
    }
    /**
     * @internal
     */ _raiseSilentRenewError(e) {
        this._logger.debug("_raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    }
    /**
     * Add callback: Raised when the user is signed in.
     */ addUserSignedIn(cb) {
        return this._userSignedIn.addHandler(cb);
    }
    /**
     * Remove callback: Raised when the user is signed in.
     */ removeUserSignedIn(cb) {
        this._userSignedIn.removeHandler(cb);
    }
    /**
     * @internal
     */ _raiseUserSignedIn() {
        this._logger.debug("_raiseUserSignedIn");
        this._userSignedIn.raise();
    }
    /**
     * Add callback: Raised when the user's sign-in status at the OP has changed.
     */ addUserSignedOut(cb) {
        return this._userSignedOut.addHandler(cb);
    }
    /**
     * Remove callback: Raised when the user's sign-in status at the OP has changed.
     */ removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    }
    /**
     * @internal
     */ _raiseUserSignedOut() {
        this._logger.debug("_raiseUserSignedOut");
        this._userSignedOut.raise();
    }
    /**
     * Add callback: Raised when the user session changed (when `monitorSession` is set)
     */ addUserSessionChanged(cb) {
        return this._userSessionChanged.addHandler(cb);
    }
    /**
     * Remove callback: Raised when the user session changed (when `monitorSession` is set)
     */ removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    }
    /**
     * @internal
     */ _raiseUserSessionChanged() {
        this._logger.debug("_raiseUserSessionChanged");
        this._userSessionChanged.raise();
    }
}

},{"./utils":"3S0XE","./AccessTokenEvents":"4PP5j","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"88hja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "SilentRenewService", ()=>SilentRenewService
);
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
var _utils = require("./utils");
class SilentRenewService {
    constructor(_userManager){
        this._userManager = _userManager;
        this._logger = new _utils.Logger("SilentRenewService");
        this._isStarted = false;
        this._tokenExpiring = ()=>{
            this._userManager.signinSilent().then(()=>{
                this._logger.debug("_tokenExpiring: Silent token renewal successful");
            }).catch((err)=>{
                const error = err instanceof Error ? err : new Error("Silent renew failed");
                this._logger.error("_tokenExpiring: Error from signinSilent:", error.message);
                this._userManager.events._raiseSilentRenewError(error);
            });
        };
    }
    async start() {
        if (!this._isStarted) {
            this._isStarted = true;
            this._userManager.events.addAccessTokenExpiring(this._tokenExpiring);
            // this will trigger loading of the user so the expiring events can be initialized
            try {
                await this._userManager.getUser();
            // deliberate nop
            } catch (err) {
                // catch to suppress errors since we're in a ctor
                this._logger.error("start: Error from getUser:", err instanceof Error ? err.message : err);
            }
        }
    }
    stop() {
        if (this._isStarted) {
            this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring);
            this._isStarted = false;
        }
    }
}

},{"./utils":"3S0XE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gJ9tD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Fake state store implementation necessary for validating refresh token requests.
 *
 * @internal
 */ parcelHelpers.export(exports, "RefreshState", ()=>RefreshState
);
class RefreshState {
    constructor(args){
        this.id = undefined;
        this.created = undefined;
        this.request_type = undefined;
        this.refresh_token = args.refresh_token;
        this.id_token = args.id_token;
        this.scope = args.scope;
        this.data = args.state;
    }
    toStorageString() {
        throw new Error("This method was called in error - refresh requests do not store persistent state.");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"24xGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Version", ()=>Version
);
// @ts-expect-error avoid enabling resolveJsonModule to keep build process simple
var _packageJson = require("../package.json");
const Version = _packageJson.version;

},{"../package.json":"sNso2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"sNso2":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"oidc-client-ts\",\"version\":\"2.0.0-rc.3\",\"description\":\"OpenID Connect (OIDC) & OAuth2 client library\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com:authts/oidc-client-ts.git\"},\"homepage\":\"https://github.com/authts/oidc-client-ts#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/umd/oidc-client-ts.js\",\"types\":\"dist/types/oidc-client-ts.d.ts\",\"exports\":{\".\":{\"import\":\"./dist/esm/oidc-client-ts.js\",\"require\":\"./dist/umd/oidc-client-ts.js\"},\"./package.json\":\"./package.json\"},\"workspaces\":[\"samples/*\",\"website\"],\"files\":[\"dist\"],\"keywords\":[\"authentication\",\"oauth2\",\"oidc\",\"openid\",\"OpenID Connect\"],\"scripts\":{\"build\":\"node scripts/build.js && npm run build-types\",\"build-types\":\"tsc -p tsconfig.build.json && api-extractor run\",\"clean\":\"git clean -fdX dist lib *.tsbuildinfo\",\"prepack\":\"npm run build\",\"test\":\"tsc && jest\",\"typedoc\":\"typedoc\",\"lint\":\"eslint --max-warnings=0 --cache .\",\"prepare\":\"husky install\"},\"dependencies\":{\"crypto-js\":\"^4.1.1\",\"jwt-decode\":\"^3.1.2\"},\"devDependencies\":{\"@microsoft/api-extractor\":\"^7.18.10\",\"@testing-library/jest-dom\":\"^5.5.0\",\"@types/crypto-js\":\"^4.0.2\",\"@types/jest\":\"^27.0.2\",\"@typescript-eslint/eslint-plugin\":\"^5.8.0\",\"@typescript-eslint/parser\":\"^5.8.0\",\"esbuild\":\"^0.14.0\",\"eslint\":\"^8.5.0\",\"eslint-plugin-testing-library\":\"^5.0.1\",\"http-proxy-middleware\":\"^2.0.1\",\"husky\":\"^7.0.2\",\"jest\":\"^27.2.0\",\"jest-mock\":\"^27.4.2\",\"lint-staged\":\"^12.0.2\",\"ts-jest\":\"^27.0.5\",\"typedoc\":\"^0.22.7\",\"typescript\":\"~4.5.4\",\"yn\":\"^5.0.0\"},\"engines\":{\"node\":\">=12.13.0\"},\"lint-staged\":{\"*.{js,jsx,ts,tsx}\":\"eslint --cache --fix\"}}");

},{}]},["POFEp","lqq57"], "lqq57", "parcelRequire7bde")

//# sourceMappingURL=sample.6868d9f5.js.map
