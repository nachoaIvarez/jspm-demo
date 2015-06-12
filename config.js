System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.5.6",
    "babel-runtime": "npm:babel-runtime@5.5.6",
    "core-js": "npm:core-js@0.9.16",
    "firebase": "github:firebase/firebase-bower@2.2.7",
    "illuminati": "npm:illuminati@0.0.5",
    "illuminati-logo": "npm:illuminati-logo@1.0.1",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.9.3",
    "modernizr": "github:Modernizr/Modernizr@2.8.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:systemjs/plugin-css@0.1.12": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:JSONStream@0.6.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jsonparse": "npm:jsonparse@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through": "npm:through@2.2.7"
    },
    "npm:JSONStream@0.7.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jsonparse": "npm:jsonparse@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through": "npm:through@2.3.7"
    },
    "npm:JSONStream@0.8.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jsonparse": "npm:jsonparse@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:adm-zip@0.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:amdefine@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:argh@0.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.1.2": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assume@0.0.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "fn.name": "npm:fn.name@1.0.1",
      "is-node": "npm:is-node@0.0.0",
      "object-inspect": "npm:object-inspect@1.0.0",
      "pathval": "npm:pathval@0.1.1",
      "prettify-error": "npm:prettify-error@0.1.1"
    },
    "npm:astw@2.0.0": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:aws-sign2@0.5.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:backtrace@0.0.1": {
      "stacktrace-js": "github:stacktracejs/stacktrace.js@0.6.4"
    },
    "npm:base64-js@0.0.7": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:bl@0.9.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:boom@0.4.2": {
      "hoek": "npm:hoek@0.9.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browser-pack@2.0.1": {
      "JSONStream": "npm:JSONStream@0.6.4",
      "combine-source-map": "npm:combine-source-map@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:browser-resolve@1.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@0.6.3"
    },
    "npm:browser-resolve@1.9.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6"
    },
    "npm:browserify-aes@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.2": {
      "bn.js": "npm:bn.js@2.0.5",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify@4.2.3": {
      "JSONStream": "npm:JSONStream@0.8.4",
      "assert": "npm:assert@1.1.2",
      "browser-pack": "npm:browser-pack@2.0.1",
      "browser-resolve": "npm:browser-resolve@1.9.0",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@2.3.4",
      "builtins": "npm:builtins@0.0.7",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commondir": "npm:commondir@0.0.1",
      "concat-stream": "npm:concat-stream@1.4.10",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@0.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "crypto-browserify": "npm:crypto-browserify@2.1.10",
      "deep-equal": "npm:deep-equal@0.2.2",
      "defined": "npm:defined@0.0.0",
      "deps-sort": "npm:deps-sort@0.1.2",
      "derequire": "npm:derequire@0.8.0",
      "domain-browser": "npm:domain-browser@1.1.4",
      "duplexer": "npm:duplexer@0.1.1",
      "events": "npm:events@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.2.11",
      "http-browserify": "npm:http-browserify@1.7.0",
      "https-browserify": "npm:https-browserify@0.0.0",
      "inherits": "npm:inherits@2.0.1",
      "insert-module-globals": "npm:insert-module-globals@6.0.0",
      "module-deps": "npm:module-deps@2.1.5",
      "os-browserify": "npm:os-browserify@0.1.2",
      "parents": "npm:parents@0.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.7.0",
      "punycode": "npm:punycode@1.2.4",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "resolve": "npm:resolve@0.7.4",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "shell-quote": "npm:shell-quote@0.0.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "stream-combiner": "npm:stream-combiner@0.0.4",
      "string_decoder": "npm:string_decoder@0.0.1",
      "subarg": "npm:subarg@0.0.1",
      "syntax-error": "npm:syntax-error@1.1.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@1.1.1",
      "timers-browserify": "npm:timers-browserify@1.4.1",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "umd": "npm:umd@2.1.0",
      "url": "npm:url@0.10.3",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:buffer@2.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@2.8.2": {
      "base64-js": "npm:base64-js@0.0.7",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:builtins@0.0.7": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combine-source-map@0.3.0": {
      "convert-source-map": "npm:convert-source-map@0.3.5",
      "inline-source-map": "npm:inline-source-map@0.3.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:combined-stream@0.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@0.0.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.0.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commondir@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:config-chain@1.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "ini": "npm:ini@1.3.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "proto-list": "npm:proto-list@1.2.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@0.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@0.9.16": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@0.2.2": {
      "boom": "npm:boom@0.4.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@2.1.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "ripemd160": "npm:ripemd160@0.2.0",
      "sha.js": "npm:sha.js@2.1.6"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "browserify-sign": "npm:browserify-sign@3.0.2",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:ctype@0.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:delayed-stream@0.0.5": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deps-sort@0.1.2": {
      "JSONStream": "npm:JSONStream@0.6.4",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:derequire@0.8.0": {
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "esrefactor": "npm:esrefactor@0.1.0",
      "estraverse": "npm:estraverse@1.5.1"
    },
    "npm:detective@3.1.0": {
      "escodegen": "npm:escodegen@1.1.0",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:dot-component@0.1.1": {
      "type-component": "npm:type-component@0.0.1"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.0.5",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:escodegen@1.1.0": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:escope@0.0.16": {
      "estraverse": "npm:estraverse@1.5.1"
    },
    "npm:esprima-fb@3001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esrefactor@0.1.0": {
      "escope": "npm:escope@0.0.16",
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@0.0.4"
    },
    "npm:eventemitter3@0.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:failing-code@0.1.0": {
      "failing-line": "npm:failing-line@0.1.0",
      "is-node": "npm:is-node@0.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:failing-line@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:forever-agent@0.5.2": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@0.1.4": {
      "async": "npm:async@0.9.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime": "npm:mime@1.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-extra@0.18.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "jsonfile": "npm:jsonfile@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rimraf": "npm:rimraf@2.4.0"
    },
    "npm:fusing@0.3.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "predefine": "npm:predefine@0.1.2"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.8",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@1.1.1": {
      "boom": "npm:boom@0.4.2",
      "cryptiles": "npm:cryptiles@0.2.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@0.9.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sntp": "npm:sntp@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@0.9.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:http-browserify@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@0.10.1": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:illuminati@0.0.5": {
      "argh": "npm:argh@0.1.3",
      "assume": "npm:assume@0.0.18",
      "backtrace": "npm:backtrace@0.0.1",
      "browserify": "npm:browserify@4.2.3",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "connected": "npm:connected@0.0.2",
      "convert-source-map": "npm:convert-source-map@0.3.5",
      "dot-component": "npm:dot-component@0.1.1",
      "eventemitter3": "npm:eventemitter3@0.1.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fusing": "npm:fusing@0.3.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "minimatch": "npm:minimatch@0.3.0",
      "mocha": "npm:mocha@1.20.1",
      "mocha-phantomjs": "npm:mocha-phantomjs@3.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "phantomjs": "npm:phantomjs@1.9.17",
      "pre-commit": "npm:pre-commit@0.0.11",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stack-mapper": "npm:stack-mapper@0.2.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inline-source-map@0.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "source-map": "npm:source-map@0.3.0"
    },
    "npm:insert-module-globals@6.0.0": {
      "JSONStream": "npm:JSONStream@0.7.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "concat-stream": "npm:concat-stream@1.4.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lexical-scope": "npm:lexical-scope@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "npm:process@0.6.0",
      "through": "npm:through@2.3.7",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:is-node@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jsonfile@2.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:jsonparse@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:kew@0.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lexical-scope@1.1.1": {
      "astw": "npm:astw@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.9.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-types@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime@1.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.6.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.8": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mocha-phantomjs@3.5.3": {
      "commander": "npm:commander@2.0.0",
      "mocha": "npm:mocha@1.20.1",
      "phantomjs": "npm:phantomjs@1.9.17",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mocha@1.20.1": {
      "css": "github:systemjs/plugin-css@0.1.12"
    },
    "npm:module-deps@2.1.5": {
      "JSONStream": "npm:JSONStream@0.7.4",
      "browser-resolve": "npm:browser-resolve@1.2.4",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.4.10",
      "detective": "npm:detective@3.1.0",
      "duplexer2": "npm:duplexer2@0.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimist": "npm:minimist@0.0.10",
      "parents": "npm:parents@0.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "resolve": "npm:resolve@0.6.3",
      "stream-combiner": "npm:stream-combiner@0.1.0",
      "subarg": "npm:subarg@0.0.1",
      "through2": "npm:through2@0.4.2"
    },
    "npm:node-uuid@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:nopt@3.0.2": {
      "abbrev": "npm:abbrev@1.0.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:npmconf@2.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "config-chain": "npm:config-chain@1.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ini": "npm:ini@1.3.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.2",
      "once": "npm:once@1.3.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "osenv": "npm:osenv@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "semver": "npm:semver@4.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "uid-number": "npm:uid-number@0.0.5",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:osenv@0.1.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pako@0.2.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parents@0.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parents@0.0.3": {
      "path-platform": "npm:path-platform@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.0.4",
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-platform@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:phantomjs@1.9.17": {
      "adm-zip": "npm:adm-zip@0.4.4",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-extra": "npm:fs-extra@0.18.4",
      "kew": "npm:kew@0.4.0",
      "npmconf": "npm:npmconf@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "progress": "npm:progress@1.1.8",
      "request": "npm:request@2.42.0",
      "request-progress": "npm:request-progress@0.3.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which": "npm:which@1.0.9"
    },
    "npm:pre-commit@0.0.11": {
      "which": "npm:which@1.0.9"
    },
    "npm:predefine@0.1.2": {
      "extendible": "npm:extendible@0.1.1"
    },
    "npm:prettify-error@0.1.1": {
      "failing-code": "npm:failing-code@0.1.0",
      "format-text": "npm:format-text@0.0.3",
      "left-pad": "npm:left-pad@0.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "style-format": "npm:style-format@0.0.0"
    },
    "npm:process@0.11.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:progress@1.1.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.2.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:qs@1.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:request-progress@0.3.1": {
      "throttleit": "npm:throttleit@0.0.2"
    },
    "npm:request@2.42.0": {
      "aws-sign2": "npm:aws-sign2@0.5.0",
      "bl": "npm:bl@0.9.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.6.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "forever-agent": "npm:forever-agent@0.5.2",
      "form-data": "npm:form-data@0.1.4",
      "hawk": "npm:hawk@1.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@0.10.1",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@1.0.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "node-uuid": "npm:node-uuid@1.4.3",
      "oauth-sign": "npm:oauth-sign@0.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@1.2.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.4",
      "tough-cookie": "npm:tough-cookie@2.0.0",
      "tunnel-agent": "npm:tunnel-agent@0.4.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:resolve@0.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@0.6.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@0.7.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rfile@1.0.0": {
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@0.3.1"
    },
    "npm:rimraf@2.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ruglify@1.0.0": {
      "rfile": "npm:rfile@1.0.0",
      "uglify-js": "npm:uglify-js@2.2.5"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.1.6": {
      "buffer": "npm:buffer@2.3.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sntp@0.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@0.9.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map-cjs@0.1.32": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.34": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.3.0": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stack-mapper@0.2.2": {
      "array-map": "npm:array-map@0.0.0",
      "foreach-shim": "npm:foreach-shim@0.1.1",
      "isarray": "npm:isarray@0.0.1",
      "source-map-cjs": "npm:source-map-cjs@0.1.32"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-combiner@0.0.4": {
      "duplexer": "npm:duplexer@0.1.1"
    },
    "npm:stream-combiner@0.1.0": {
      "duplexer": "npm:duplexer@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:string_decoder@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:style-format@0.0.0": {
      "ansi-codes": "npm:ansi-codes@0.0.2",
      "format-text": "npm:format-text@0.0.3"
    },
    "npm:subarg@0.0.1": {
      "minimist": "npm:minimist@0.0.10"
    },
    "npm:syntax-error@1.1.4": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.2.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.1"
    },
    "npm:tough-cookie@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:uglify-js@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:uglify-js@2.4.23": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.34",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "yargs": "npm:yargs@3.5.4"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid-number@0.0.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:umd@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rfile": "npm:rfile@1.0.0",
      "ruglify": "npm:ruglify@1.0.0",
      "through": "npm:through@2.3.7",
      "uglify-js": "npm:uglify-js@2.4.23"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:which@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:yargs@3.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.1.0",
      "decamelize": "npm:decamelize@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "window-size": "npm:window-size@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    }
  }
});

