/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-script-lifecycles",
factory: function (require) {
var plugin;plugin=(()=>{"use strict";var t={425:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});const i=require("@yarnpkg/core"),n="pre-",s="post-";const c={hooks:{wrapScriptExecution:async function(t,e,r,c,o){const{configuration:a}=e,u=!a.get("userScriptLifecycleExcludes").get(c);return async()=>{const a=e.tryWorkspaceByLocator(r);if(null===a)return t();const p=a.manifest.scripts.get(c);if(void 0===p)return 1;async function d(t){const n=`${t}${c}`;return u&&await i.scriptUtils.hasPackageScript(r,n,{project:e})?await i.scriptUtils.executePackageScript(r,n,[],{cwd:o.cwd,project:e,stdin:o.stdin,stdout:o.stdout,stderr:o.stderr}):0}if(!c.startsWith(n)){const t=await d(n);if(0!==t)return t}const l=await(async()=>await i.scriptUtils.executePackageShellcode(r,p,o.args,{cwd:o.cwd,project:e,stdin:o.stdin,stdout:o.stdout,stderr:o.stderr}))();if(0!==l)return l;if(!c.startsWith(s)){const t=await d(s);if(0!==t)return t}return 0}}},configuration:{userScriptLifecycleExcludes:{description:"",type:i.SettingsType.MAP,valueDefinition:{description:"",type:i.SettingsType.BOOLEAN}}}}}},e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}return r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(425)})();
return plugin;
}
};