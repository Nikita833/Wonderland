!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),o=/^(\S.*):$/,a=/^(\s+)(\d+)(:| )(\s+)(.*)$/,l={language:"search-result"},c=["# Query:","# Flags:","# Including:","# Excluding:","# ContextLines:"],s=["RegExp","CaseSensitive","IgnoreExcludeSettings","WordMatch"];let u,d;function f(e,t){if(r.isAbsolute(e))return i.Uri.file(e);if(0===e.indexOf("~/"))return i.Uri.file(r.join(process.env.HOME,e.slice(2)));if(i.workspace.workspaceFolders){const n=/^(.*) • (.*)$/.exec(e);if(n){const[,e,t]=n,o=i.workspace.workspaceFolders.filter(t=>t.name===e)[0];if(o)return i.Uri.file(r.join(o.uri.fsPath,t))}else{if(1===i.workspace.workspaceFolders.length)return i.Uri.file(r.join(i.workspace.workspaceFolders[0].uri.fsPath,e));if("untitled"!==t.scheme){const n=i.workspace.workspaceFolders.filter(e=>t.toString().startsWith(e.uri.toString()))[0];if(n)return i.Uri.file(r.join(n.uri.fsPath,e))}}}console.error(`Unable to resolve path ${e}`)}t.activate=function(e){const t=i.window.createTextEditorDecorationType({opacity:"0.7"}),n=i.window.createTextEditorDecorationType({fontWeight:"bold"}),r=e=>{const i=v(e.document).filter(p),r=i.filter(e=>e.isContext).map(e=>e.prefixRange),o=i.filter(e=>!e.isContext).map(e=>e.prefixRange);e.setDecorations(t,r),e.setDecorations(n,o)};i.window.activeTextEditor&&"search-result"===i.window.activeTextEditor.document.languageId&&r(i.window.activeTextEditor),e.subscriptions.push(i.languages.registerDocumentSymbolProvider(l,{provideDocumentSymbols:(e,t)=>v(e,t).filter(g).map(e=>new i.DocumentSymbol(e.path,"",i.SymbolKind.File,e.allLocations.map(({originSelectionRange:e})=>e).reduce((e,t)=>e.union(t),e.location.originSelectionRange),e.location.originSelectionRange))}),i.languages.registerCompletionItemProvider(l,{provideCompletionItems(e,t){const n=e.lineAt(t.line);if(t.line>3)return[];if(0===t.character||1===t.character&&"#"===n.text){const n=Array.from({length:c.length}).map((t,n)=>e.lineAt(n).text);return c.filter(e=>n.every(t=>-1===t.indexOf(e))).map(e=>({label:e,insertText:e.slice(t.character)+" "}))}return-1===n.text.indexOf("# Flags:")?[]:s.filter(e=>-1===n.text.indexOf(e)).map(e=>({label:e,insertText:e+" "}))}},"#"),i.languages.registerDefinitionProvider(l,{provideDefinition(e,t,n){const r=v(e,n)[t.line];return r?"file"===r.type?r.allLocations:[{...r.location,targetSelectionRange:((e,t)=>e.with({start:new i.Position(e.start.line,Math.max(0,t-e.start.character)),end:new i.Position(e.end.line,Math.max(0,t-e.end.character))}))(r.location.targetSelectionRange,t.character-1)}]:[]}}),i.languages.registerDocumentLinkProvider(l,{provideDocumentLinks:async(e,t)=>v(e,t).filter(({type:e})=>"file"===e).map(({location:e})=>({range:e.originSelectionRange,target:e.targetUri}))}),i.window.onDidChangeActiveTextEditor(e=>{"search-result"===(null===e||void 0===e?void 0:e.document.languageId)&&(u=void 0,null===d||void 0===d||d.dispose(),d=i.workspace.onDidChangeTextDocument(t=>{t.document.uri===e.document.uri&&r(e)}),r(e))}),{dispose(){u=void 0,null===d||void 0===d||d.dispose()}})};const g=e=>"file"===e.type,p=e=>"result"===e.type;function v(e,t){if(u&&u.uri===e.uri&&u.version===e.version)return u.parse;const n=e.getText().split(/\r?\n/),r=[];let l=void 0,c=void 0;for(let s=0;s<n.length;s++){if(null===t||void 0===t?void 0:t.isCancellationRequested)return[];const u=n[s],d=o.exec(u);if(d){const[,t]=d;if(!(l=f(t,e.uri)))continue;c=[];const n={targetRange:new i.Range(0,0,0,1),targetUri:l,originSelectionRange:new i.Range(s,0,s,u.length)};r[s]={type:"file",location:n,allLocations:c,path:t}}if(!l)continue;const g=a.exec(u);if(g){const[,e,t,n,o]=g,a=+t-1,d=(e+t+n+o).length,f=(e+t+n).length,p={targetRange:new i.Range(Math.max(a-3,0),0,a+3,u.length),targetSelectionRange:new i.Range(a,f,a,f),targetUri:l,originSelectionRange:new i.Range(s,d,s,u.length)};null===c||void 0===c||c.push(p),r[s]={type:"result",location:p,isContext:" "===n,prefixRange:new i.Range(s,0,s,f)}}}return u={version:e.version,parse:r,uri:e.uri},r}},function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("path")}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/0ba0ca52957102ca3527cf479571617f0de6ed50/extensions/search-result/dist/extension.js.map