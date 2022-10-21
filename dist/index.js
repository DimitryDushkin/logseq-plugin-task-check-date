var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4e23"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4e23"] = parcelRequire;
}
parcelRequire.register("acyZD", function(module, exports) {
/*! For license information please see lsplugin.user.js.LICENSE.txt */ !function(e, t) {
    module.exports = t();
}(self, ()=>(()=>{
        var e = {
            227: (e, t, n)=>{
                var r = n(155);
                t.formatArgs = function(t) {
                    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                    const n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    let r = 0, o = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (e)=>{
                        "%%" !== e && (r++, "%c" === e && (o = r));
                    }), t.splice(o, 0, n);
                }, t.save = function(e) {
                    try {
                        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
                    } catch (e1) {}
                }, t.load = function() {
                    let e;
                    try {
                        e = t.storage.getItem("debug");
                    } catch (e1) {}
                    return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
                }, t.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
                }, t.storage = function() {
                    try {
                        return localStorage;
                    } catch (e) {}
                }(), t.destroy = (()=>{
                    let e = !1;
                    return ()=>{
                        e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                    };
                })(), t.colors = [
                    "#0000CC",
                    "#0000FF",
                    "#0033CC",
                    "#0033FF",
                    "#0066CC",
                    "#0066FF",
                    "#0099CC",
                    "#0099FF",
                    "#00CC00",
                    "#00CC33",
                    "#00CC66",
                    "#00CC99",
                    "#00CCCC",
                    "#00CCFF",
                    "#3300CC",
                    "#3300FF",
                    "#3333CC",
                    "#3333FF",
                    "#3366CC",
                    "#3366FF",
                    "#3399CC",
                    "#3399FF",
                    "#33CC00",
                    "#33CC33",
                    "#33CC66",
                    "#33CC99",
                    "#33CCCC",
                    "#33CCFF",
                    "#6600CC",
                    "#6600FF",
                    "#6633CC",
                    "#6633FF",
                    "#66CC00",
                    "#66CC33",
                    "#9900CC",
                    "#9900FF",
                    "#9933CC",
                    "#9933FF",
                    "#99CC00",
                    "#99CC33",
                    "#CC0000",
                    "#CC0033",
                    "#CC0066",
                    "#CC0099",
                    "#CC00CC",
                    "#CC00FF",
                    "#CC3300",
                    "#CC3333",
                    "#CC3366",
                    "#CC3399",
                    "#CC33CC",
                    "#CC33FF",
                    "#CC6600",
                    "#CC6633",
                    "#CC9900",
                    "#CC9933",
                    "#CCCC00",
                    "#CCCC33",
                    "#FF0000",
                    "#FF0033",
                    "#FF0066",
                    "#FF0099",
                    "#FF00CC",
                    "#FF00FF",
                    "#FF3300",
                    "#FF3333",
                    "#FF3366",
                    "#FF3399",
                    "#FF33CC",
                    "#FF33FF",
                    "#FF6600",
                    "#FF6633",
                    "#FF9900",
                    "#FF9933",
                    "#FFCC00",
                    "#FFCC33"
                ], t.log = console.debug || console.log || (()=>{}), e.exports = n(447)(t);
                const { formatters: o  } = e.exports;
                o.j = function(e) {
                    try {
                        return JSON.stringify(e);
                    } catch (e1) {
                        return "[UnexpectedJSONParseError]: " + e1.message;
                    }
                };
            },
            447: (e, t, n)=>{
                e.exports = function(e) {
                    function t(e) {
                        let n, o, i, s = null;
                        function a(...e) {
                            if (!a.enabled) return;
                            const r = a, o = Number(new Date), i = o - (n || o);
                            r.diff = i, r.prev = n, r.curr = o, n = o, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                            let s = 0;
                            e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o)=>{
                                if ("%%" === n) return "%";
                                s++;
                                const i = t.formatters[o];
                                if ("function" == typeof i) {
                                    const t1 = e[s];
                                    n = i.call(r, t1), e.splice(s, 1), s--;
                                }
                                return n;
                            }), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e);
                        }
                        return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: ()=>null !== s ? s : (o !== t.namespaces && (o = t.namespaces, i = t.enabled(e)), i),
                            set: (e)=>{
                                s = e;
                            }
                        }), "function" == typeof t.init && t.init(a), a;
                    }
                    function r(e, n) {
                        const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
                        return r.log = this.log, r;
                    }
                    function o(e) {
                        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
                    }
                    return t.debug = t, t.default = t, t.coerce = function(e) {
                        return e instanceof Error ? e.stack || e.message : e;
                    }, t.disable = function() {
                        const e = [
                            ...t.names.map(o),
                            ...t.skips.map(o).map((e)=>"-" + e)
                        ].join(",");
                        return t.enable(""), e;
                    }, t.enable = function(e) {
                        let n;
                        t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                        const r = ("string" == typeof e ? e : "").split(/[\s,]+/), o = r.length;
                        for(n = 0; n < o; n++)r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                    }, t.enabled = function(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        let n, r;
                        for(n = 0, r = t.skips.length; n < r; n++)if (t.skips[n].test(e)) return !1;
                        for(n = 0, r = t.names.length; n < r; n++)if (t.names[n].test(e)) return !0;
                        return !1;
                    }, t.humanize = n(824), t.destroy = function() {
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                    }, Object.keys(e).forEach((n)=>{
                        t[n] = e[n];
                    }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                        let n = 0;
                        for(let t1 = 0; t1 < e.length; t1++)n = (n << 5) - n + e.charCodeAt(t1), n |= 0;
                        return t.colors[Math.abs(n) % t.colors.length];
                    }, t.enable(t.load()), t;
                };
            },
            856: function(e) {
                e.exports = function() {
                    "use strict";
                    function e(t) {
                        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, e(t);
                    }
                    function t(e, n) {
                        return t = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e;
                        }, t(e, n);
                    }
                    function n() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function r(e, o, i) {
                        return r = n() ? Reflect.construct : function(e, n, r) {
                            var o = [
                                null
                            ];
                            o.push.apply(o, n);
                            var i = new (Function.bind.apply(e, o));
                            return r && t(i, r.prototype), i;
                        }, r.apply(null, arguments);
                    }
                    function o(e) {
                        return function(e) {
                            if (Array.isArray(e)) return i(e);
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return i(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                        return r;
                    }
                    var s = Object.hasOwnProperty, a = Object.setPrototypeOf, c = Object.isFrozen, l = Object.getPrototypeOf, u = Object.getOwnPropertyDescriptor, p = Object.freeze, f = Object.seal, h = Object.create, d = "undefined" != typeof Reflect && Reflect, m = d.apply, g = d.construct;
                    m || (m = function(e, t, n) {
                        return e.apply(t, n);
                    }), p || (p = function(e) {
                        return e;
                    }), f || (f = function(e) {
                        return e;
                    }), g || (g = function(e, t) {
                        return r(e, o(t));
                    });
                    var y, b = T(Array.prototype.forEach), v = T(Array.prototype.pop), _ = T(Array.prototype.push), w = T(String.prototype.toLowerCase), x = T(String.prototype.match), C = T(String.prototype.replace), S = T(String.prototype.indexOf), O = T(String.prototype.trim), A = T(RegExp.prototype.test), E = (y = TypeError, function() {
                        for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
                        return g(y, t);
                    });
                    function T(e) {
                        return function(t) {
                            for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)r[o - 1] = arguments[o];
                            return m(e, t, r);
                        };
                    }
                    function k(e, t) {
                        a && a(e, null);
                        for(var n = t.length; n--;){
                            var r = t[n];
                            if ("string" == typeof r) {
                                var o = w(r);
                                o !== r && (c(t) || (t[n] = o), r = o);
                            }
                            e[r] = !0;
                        }
                        return e;
                    }
                    function j(e) {
                        var t, n = h(null);
                        for(t in e)m(s, e, [
                            t
                        ]) && (n[t] = e[t]);
                        return n;
                    }
                    function I(e, t) {
                        for(; null !== e;){
                            var n = u(e, t);
                            if (n) {
                                if (n.get) return T(n.get);
                                if ("function" == typeof n.value) return T(n.value);
                            }
                            e = l(e);
                        }
                        return function(e) {
                            return console.warn("fallback value for", e), null;
                        };
                    }
                    var F = p([
                        "a",
                        "abbr",
                        "acronym",
                        "address",
                        "area",
                        "article",
                        "aside",
                        "audio",
                        "b",
                        "bdi",
                        "bdo",
                        "big",
                        "blink",
                        "blockquote",
                        "body",
                        "br",
                        "button",
                        "canvas",
                        "caption",
                        "center",
                        "cite",
                        "code",
                        "col",
                        "colgroup",
                        "content",
                        "data",
                        "datalist",
                        "dd",
                        "decorator",
                        "del",
                        "details",
                        "dfn",
                        "dialog",
                        "dir",
                        "div",
                        "dl",
                        "dt",
                        "element",
                        "em",
                        "fieldset",
                        "figcaption",
                        "figure",
                        "font",
                        "footer",
                        "form",
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "head",
                        "header",
                        "hgroup",
                        "hr",
                        "html",
                        "i",
                        "img",
                        "input",
                        "ins",
                        "kbd",
                        "label",
                        "legend",
                        "li",
                        "main",
                        "map",
                        "mark",
                        "marquee",
                        "menu",
                        "menuitem",
                        "meter",
                        "nav",
                        "nobr",
                        "ol",
                        "optgroup",
                        "option",
                        "output",
                        "p",
                        "picture",
                        "pre",
                        "progress",
                        "q",
                        "rp",
                        "rt",
                        "ruby",
                        "s",
                        "samp",
                        "section",
                        "select",
                        "shadow",
                        "small",
                        "source",
                        "spacer",
                        "span",
                        "strike",
                        "strong",
                        "style",
                        "sub",
                        "summary",
                        "sup",
                        "table",
                        "tbody",
                        "td",
                        "template",
                        "textarea",
                        "tfoot",
                        "th",
                        "thead",
                        "time",
                        "tr",
                        "track",
                        "tt",
                        "u",
                        "ul",
                        "var",
                        "video",
                        "wbr"
                    ]), L = p([
                        "svg",
                        "a",
                        "altglyph",
                        "altglyphdef",
                        "altglyphitem",
                        "animatecolor",
                        "animatemotion",
                        "animatetransform",
                        "circle",
                        "clippath",
                        "defs",
                        "desc",
                        "ellipse",
                        "filter",
                        "font",
                        "g",
                        "glyph",
                        "glyphref",
                        "hkern",
                        "image",
                        "line",
                        "lineargradient",
                        "marker",
                        "mask",
                        "metadata",
                        "mpath",
                        "path",
                        "pattern",
                        "polygon",
                        "polyline",
                        "radialgradient",
                        "rect",
                        "stop",
                        "style",
                        "switch",
                        "symbol",
                        "text",
                        "textpath",
                        "title",
                        "tref",
                        "tspan",
                        "view",
                        "vkern"
                    ]), N = p([
                        "feBlend",
                        "feColorMatrix",
                        "feComponentTransfer",
                        "feComposite",
                        "feConvolveMatrix",
                        "feDiffuseLighting",
                        "feDisplacementMap",
                        "feDistantLight",
                        "feFlood",
                        "feFuncA",
                        "feFuncB",
                        "feFuncG",
                        "feFuncR",
                        "feGaussianBlur",
                        "feImage",
                        "feMerge",
                        "feMergeNode",
                        "feMorphology",
                        "feOffset",
                        "fePointLight",
                        "feSpecularLighting",
                        "feSpotLight",
                        "feTile",
                        "feTurbulence"
                    ]), M = p([
                        "animate",
                        "color-profile",
                        "cursor",
                        "discard",
                        "fedropshadow",
                        "font-face",
                        "font-face-format",
                        "font-face-name",
                        "font-face-src",
                        "font-face-uri",
                        "foreignobject",
                        "hatch",
                        "hatchpath",
                        "mesh",
                        "meshgradient",
                        "meshpatch",
                        "meshrow",
                        "missing-glyph",
                        "script",
                        "set",
                        "solidcolor",
                        "unknown",
                        "use"
                    ]), R = p([
                        "math",
                        "menclose",
                        "merror",
                        "mfenced",
                        "mfrac",
                        "mglyph",
                        "mi",
                        "mlabeledtr",
                        "mmultiscripts",
                        "mn",
                        "mo",
                        "mover",
                        "mpadded",
                        "mphantom",
                        "mroot",
                        "mrow",
                        "ms",
                        "mspace",
                        "msqrt",
                        "mstyle",
                        "msub",
                        "msup",
                        "msubsup",
                        "mtable",
                        "mtd",
                        "mtext",
                        "mtr",
                        "munder",
                        "munderover"
                    ]), D = p([
                        "maction",
                        "maligngroup",
                        "malignmark",
                        "mlongdiv",
                        "mscarries",
                        "mscarry",
                        "msgroup",
                        "mstack",
                        "msline",
                        "msrow",
                        "semantics",
                        "annotation",
                        "annotation-xml",
                        "mprescripts",
                        "none"
                    ]), P = p([
                        "#text"
                    ]), U = p([
                        "accept",
                        "action",
                        "align",
                        "alt",
                        "autocapitalize",
                        "autocomplete",
                        "autopictureinpicture",
                        "autoplay",
                        "background",
                        "bgcolor",
                        "border",
                        "capture",
                        "cellpadding",
                        "cellspacing",
                        "checked",
                        "cite",
                        "class",
                        "clear",
                        "color",
                        "cols",
                        "colspan",
                        "controls",
                        "controlslist",
                        "coords",
                        "crossorigin",
                        "datetime",
                        "decoding",
                        "default",
                        "dir",
                        "disabled",
                        "disablepictureinpicture",
                        "disableremoteplayback",
                        "download",
                        "draggable",
                        "enctype",
                        "enterkeyhint",
                        "face",
                        "for",
                        "headers",
                        "height",
                        "hidden",
                        "high",
                        "href",
                        "hreflang",
                        "id",
                        "inputmode",
                        "integrity",
                        "ismap",
                        "kind",
                        "label",
                        "lang",
                        "list",
                        "loading",
                        "loop",
                        "low",
                        "max",
                        "maxlength",
                        "media",
                        "method",
                        "min",
                        "minlength",
                        "multiple",
                        "muted",
                        "name",
                        "nonce",
                        "noshade",
                        "novalidate",
                        "nowrap",
                        "open",
                        "optimum",
                        "pattern",
                        "placeholder",
                        "playsinline",
                        "poster",
                        "preload",
                        "pubdate",
                        "radiogroup",
                        "readonly",
                        "rel",
                        "required",
                        "rev",
                        "reversed",
                        "role",
                        "rows",
                        "rowspan",
                        "spellcheck",
                        "scope",
                        "selected",
                        "shape",
                        "size",
                        "sizes",
                        "span",
                        "srclang",
                        "start",
                        "src",
                        "srcset",
                        "step",
                        "style",
                        "summary",
                        "tabindex",
                        "title",
                        "translate",
                        "type",
                        "usemap",
                        "valign",
                        "value",
                        "width",
                        "xmlns",
                        "slot"
                    ]), z = p([
                        "accent-height",
                        "accumulate",
                        "additive",
                        "alignment-baseline",
                        "ascent",
                        "attributename",
                        "attributetype",
                        "azimuth",
                        "basefrequency",
                        "baseline-shift",
                        "begin",
                        "bias",
                        "by",
                        "class",
                        "clip",
                        "clippathunits",
                        "clip-path",
                        "clip-rule",
                        "color",
                        "color-interpolation",
                        "color-interpolation-filters",
                        "color-profile",
                        "color-rendering",
                        "cx",
                        "cy",
                        "d",
                        "dx",
                        "dy",
                        "diffuseconstant",
                        "direction",
                        "display",
                        "divisor",
                        "dur",
                        "edgemode",
                        "elevation",
                        "end",
                        "fill",
                        "fill-opacity",
                        "fill-rule",
                        "filter",
                        "filterunits",
                        "flood-color",
                        "flood-opacity",
                        "font-family",
                        "font-size",
                        "font-size-adjust",
                        "font-stretch",
                        "font-style",
                        "font-variant",
                        "font-weight",
                        "fx",
                        "fy",
                        "g1",
                        "g2",
                        "glyph-name",
                        "glyphref",
                        "gradientunits",
                        "gradienttransform",
                        "height",
                        "href",
                        "id",
                        "image-rendering",
                        "in",
                        "in2",
                        "k",
                        "k1",
                        "k2",
                        "k3",
                        "k4",
                        "kerning",
                        "keypoints",
                        "keysplines",
                        "keytimes",
                        "lang",
                        "lengthadjust",
                        "letter-spacing",
                        "kernelmatrix",
                        "kernelunitlength",
                        "lighting-color",
                        "local",
                        "marker-end",
                        "marker-mid",
                        "marker-start",
                        "markerheight",
                        "markerunits",
                        "markerwidth",
                        "maskcontentunits",
                        "maskunits",
                        "max",
                        "mask",
                        "media",
                        "method",
                        "mode",
                        "min",
                        "name",
                        "numoctaves",
                        "offset",
                        "operator",
                        "opacity",
                        "order",
                        "orient",
                        "orientation",
                        "origin",
                        "overflow",
                        "paint-order",
                        "path",
                        "pathlength",
                        "patterncontentunits",
                        "patterntransform",
                        "patternunits",
                        "points",
                        "preservealpha",
                        "preserveaspectratio",
                        "primitiveunits",
                        "r",
                        "rx",
                        "ry",
                        "radius",
                        "refx",
                        "refy",
                        "repeatcount",
                        "repeatdur",
                        "restart",
                        "result",
                        "rotate",
                        "scale",
                        "seed",
                        "shape-rendering",
                        "specularconstant",
                        "specularexponent",
                        "spreadmethod",
                        "startoffset",
                        "stddeviation",
                        "stitchtiles",
                        "stop-color",
                        "stop-opacity",
                        "stroke-dasharray",
                        "stroke-dashoffset",
                        "stroke-linecap",
                        "stroke-linejoin",
                        "stroke-miterlimit",
                        "stroke-opacity",
                        "stroke",
                        "stroke-width",
                        "style",
                        "surfacescale",
                        "systemlanguage",
                        "tabindex",
                        "targetx",
                        "targety",
                        "transform",
                        "transform-origin",
                        "text-anchor",
                        "text-decoration",
                        "text-rendering",
                        "textlength",
                        "type",
                        "u1",
                        "u2",
                        "unicode",
                        "values",
                        "viewbox",
                        "visibility",
                        "version",
                        "vert-adv-y",
                        "vert-origin-x",
                        "vert-origin-y",
                        "width",
                        "word-spacing",
                        "wrap",
                        "writing-mode",
                        "xchannelselector",
                        "ychannelselector",
                        "x",
                        "x1",
                        "x2",
                        "xmlns",
                        "y",
                        "y1",
                        "y2",
                        "z",
                        "zoomandpan"
                    ]), $ = p([
                        "accent",
                        "accentunder",
                        "align",
                        "bevelled",
                        "close",
                        "columnsalign",
                        "columnlines",
                        "columnspan",
                        "denomalign",
                        "depth",
                        "dir",
                        "display",
                        "displaystyle",
                        "encoding",
                        "fence",
                        "frame",
                        "height",
                        "href",
                        "id",
                        "largeop",
                        "length",
                        "linethickness",
                        "lspace",
                        "lquote",
                        "mathbackground",
                        "mathcolor",
                        "mathsize",
                        "mathvariant",
                        "maxsize",
                        "minsize",
                        "movablelimits",
                        "notation",
                        "numalign",
                        "open",
                        "rowalign",
                        "rowlines",
                        "rowspacing",
                        "rowspan",
                        "rspace",
                        "rquote",
                        "scriptlevel",
                        "scriptminsize",
                        "scriptsizemultiplier",
                        "selection",
                        "separator",
                        "separators",
                        "stretchy",
                        "subscriptshift",
                        "supscriptshift",
                        "symmetric",
                        "voffset",
                        "width",
                        "xmlns"
                    ]), H = p([
                        "xlink:href",
                        "xml:id",
                        "xlink:title",
                        "xml:space",
                        "xmlns:xlink"
                    ]), B = f(/\{\{[\w\W]*|[\w\W]*\}\}/gm), q = f(/<%[\w\W]*|[\w\W]*%>/gm), W = f(/^data-[\-\w.\u00B7-\uFFFF]/), G = f(/^aria-[\-\w]+$/), J = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Z = f(/^(?:\w+script|data):/i), K = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), V = f(/^html$/i), Y = function() {
                        return "undefined" == typeof window ? null : window;
                    }, X = function(t, n) {
                        if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                        var r = null, o = "data-tt-policy-suffix";
                        n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                        var i = "dompurify" + (r ? "#" + r : "");
                        try {
                            return t.createPolicy(i, {
                                createHTML: function(e) {
                                    return e;
                                }
                            });
                        } catch (e1) {
                            return console.warn("TrustedTypes policy " + i + " could not be created."), null;
                        }
                    };
                    return function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y(), r = function(e) {
                            return t(e);
                        };
                        if (r.version = "2.3.8", r.removed = [], !n || !n.document || 9 !== n.document.nodeType) return r.isSupported = !1, r;
                        var i = n.document, s = n.document, a = n.DocumentFragment, c = n.HTMLTemplateElement, l = n.Node, u = n.Element, f = n.NodeFilter, h = n.NamedNodeMap, d = void 0 === h ? n.NamedNodeMap || n.MozNamedAttrMap : h, m = n.HTMLFormElement, g = n.DOMParser, y = n.trustedTypes, T = u.prototype, Q = I(T, "cloneNode"), ee = I(T, "nextSibling"), te = I(T, "childNodes"), ne = I(T, "parentNode");
                        if ("function" == typeof c) {
                            var re = s.createElement("template");
                            re.content && re.content.ownerDocument && (s = re.content.ownerDocument);
                        }
                        var oe = X(y, i), ie = oe ? oe.createHTML("") : "", se = s, ae = se.implementation, ce = se.createNodeIterator, le = se.createDocumentFragment, ue = se.getElementsByTagName, pe = i.importNode, fe = {};
                        try {
                            fe = j(s).documentMode ? s.documentMode : {};
                        } catch (e1) {}
                        var he = {};
                        r.isSupported = "function" == typeof ne && ae && void 0 !== ae.createHTMLDocument && 9 !== fe;
                        var de, me, ge = B, ye = q, be = W, ve = G, _e = Z, we = K, xe = J, Ce = null, Se = k({}, [].concat(o(F), o(L), o(N), o(R), o(P))), Oe = null, Ae = k({}, [].concat(o(U), o(z), o($), o(H))), Ee = Object.seal(Object.create(null, {
                            tagNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            attributeNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            allowCustomizedBuiltInElements: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: !1
                            }
                        })), Te = null, ke = null, je = !0, Ie = !0, Fe = !1, Le = !1, Ne = !1, Me = !1, Re = !1, De = !1, Pe = !1, Ue = !1, ze = !0, $e = !0, He = !1, Be = {}, qe = null, We = k({}, [
                            "annotation-xml",
                            "audio",
                            "colgroup",
                            "desc",
                            "foreignobject",
                            "head",
                            "iframe",
                            "math",
                            "mi",
                            "mn",
                            "mo",
                            "ms",
                            "mtext",
                            "noembed",
                            "noframes",
                            "noscript",
                            "plaintext",
                            "script",
                            "style",
                            "svg",
                            "template",
                            "thead",
                            "title",
                            "video",
                            "xmp"
                        ]), Ge = null, Je = k({}, [
                            "audio",
                            "video",
                            "img",
                            "source",
                            "image",
                            "track"
                        ]), Ze = null, Ke = k({}, [
                            "alt",
                            "class",
                            "for",
                            "id",
                            "label",
                            "name",
                            "pattern",
                            "placeholder",
                            "role",
                            "summary",
                            "title",
                            "value",
                            "style",
                            "xmlns"
                        ]), Ve = "http://www.w3.org/1998/Math/MathML", Ye = "http://www.w3.org/2000/svg", Xe = "http://www.w3.org/1999/xhtml", Qe = Xe, et = !1, tt = [
                            "application/xhtml+xml",
                            "text/html"
                        ], nt = "text/html", rt = null, ot = s.createElement("form"), it = function(e) {
                            return e instanceof RegExp || e instanceof Function;
                        }, st = function(t) {
                            rt && rt === t || (t && "object" === e(t) || (t = {}), t = j(t), Ce = "ALLOWED_TAGS" in t ? k({}, t.ALLOWED_TAGS) : Se, Oe = "ALLOWED_ATTR" in t ? k({}, t.ALLOWED_ATTR) : Ae, Ze = "ADD_URI_SAFE_ATTR" in t ? k(j(Ke), t.ADD_URI_SAFE_ATTR) : Ke, Ge = "ADD_DATA_URI_TAGS" in t ? k(j(Je), t.ADD_DATA_URI_TAGS) : Je, qe = "FORBID_CONTENTS" in t ? k({}, t.FORBID_CONTENTS) : We, Te = "FORBID_TAGS" in t ? k({}, t.FORBID_TAGS) : {}, ke = "FORBID_ATTR" in t ? k({}, t.FORBID_ATTR) : {}, Be = "USE_PROFILES" in t && t.USE_PROFILES, je = !1 !== t.ALLOW_ARIA_ATTR, Ie = !1 !== t.ALLOW_DATA_ATTR, Fe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Le = t.SAFE_FOR_TEMPLATES || !1, Ne = t.WHOLE_DOCUMENT || !1, De = t.RETURN_DOM || !1, Pe = t.RETURN_DOM_FRAGMENT || !1, Ue = t.RETURN_TRUSTED_TYPE || !1, Re = t.FORCE_BODY || !1, ze = !1 !== t.SANITIZE_DOM, $e = !1 !== t.KEEP_CONTENT, He = t.IN_PLACE || !1, xe = t.ALLOWED_URI_REGEXP || xe, Qe = t.NAMESPACE || Xe, t.CUSTOM_ELEMENT_HANDLING && it(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ee.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && it(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ee.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ee.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), de = de = -1 === tt.indexOf(t.PARSER_MEDIA_TYPE) ? nt : t.PARSER_MEDIA_TYPE, me = "application/xhtml+xml" === de ? function(e) {
                                return e;
                            } : w, Le && (Ie = !1), Pe && (De = !0), Be && (Ce = k({}, o(P)), Oe = [], !0 === Be.html && (k(Ce, F), k(Oe, U)), !0 === Be.svg && (k(Ce, L), k(Oe, z), k(Oe, H)), !0 === Be.svgFilters && (k(Ce, N), k(Oe, z), k(Oe, H)), !0 === Be.mathMl && (k(Ce, R), k(Oe, $), k(Oe, H))), t.ADD_TAGS && (Ce === Se && (Ce = j(Ce)), k(Ce, t.ADD_TAGS)), t.ADD_ATTR && (Oe === Ae && (Oe = j(Oe)), k(Oe, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && k(Ze, t.ADD_URI_SAFE_ATTR), t.FORBID_CONTENTS && (qe === We && (qe = j(qe)), k(qe, t.FORBID_CONTENTS)), $e && (Ce["#text"] = !0), Ne && k(Ce, [
                                "html",
                                "head",
                                "body"
                            ]), Ce.table && (k(Ce, [
                                "tbody"
                            ]), delete Te.tbody), p && p(t), rt = t);
                        }, at = k({}, [
                            "mi",
                            "mo",
                            "mn",
                            "ms",
                            "mtext"
                        ]), ct = k({}, [
                            "foreignobject",
                            "desc",
                            "title",
                            "annotation-xml"
                        ]), lt = k({}, [
                            "title",
                            "style",
                            "font",
                            "a",
                            "script"
                        ]), ut = k({}, L);
                        k(ut, N), k(ut, M);
                        var pt = k({}, R);
                        k(pt, D);
                        var ft = function(e) {
                            var t = ne(e);
                            t && t.tagName || (t = {
                                namespaceURI: Xe,
                                tagName: "template"
                            });
                            var n = w(e.tagName), r = w(t.tagName);
                            return e.namespaceURI === Ye ? t.namespaceURI === Xe ? "svg" === n : t.namespaceURI === Ve ? "svg" === n && ("annotation-xml" === r || at[r]) : Boolean(ut[n]) : e.namespaceURI === Ve ? t.namespaceURI === Xe ? "math" === n : t.namespaceURI === Ye ? "math" === n && ct[r] : Boolean(pt[n]) : e.namespaceURI === Xe && !(t.namespaceURI === Ye && !ct[r]) && !(t.namespaceURI === Ve && !at[r]) && !pt[n] && (lt[n] || !ut[n]);
                        }, ht = function(e) {
                            _(r.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e);
                            } catch (t) {
                                try {
                                    e.outerHTML = ie;
                                } catch (t1) {
                                    e.remove();
                                }
                            }
                        }, dt = function(e, t) {
                            try {
                                _(r.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                });
                            } catch (e1) {
                                _(r.removed, {
                                    attribute: null,
                                    from: t
                                });
                            }
                            if (t.removeAttribute(e), "is" === e && !Oe[e]) {
                                if (De || Pe) try {
                                    ht(t);
                                } catch (e2) {}
                                else try {
                                    t.setAttribute(e, "");
                                } catch (e3) {}
                            }
                        }, mt = function(e) {
                            var t, n;
                            if (Re) e = "<remove></remove>" + e;
                            else {
                                var r = x(e, /^[\r\n\t ]+/);
                                n = r && r[0];
                            }
                            "application/xhtml+xml" === de && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            var o = oe ? oe.createHTML(e) : e;
                            if (Qe === Xe) try {
                                t = (new g).parseFromString(o, de);
                            } catch (e1) {}
                            if (!t || !t.documentElement) {
                                t = ae.createDocument(Qe, "template", null);
                                try {
                                    t.documentElement.innerHTML = et ? "" : o;
                                } catch (e2) {}
                            }
                            var i = t.body || t.documentElement;
                            return e && n && i.insertBefore(s.createTextNode(n), i.childNodes[0] || null), Qe === Xe ? ue.call(t, Ne ? "html" : "body")[0] : Ne ? t.documentElement : i;
                        }, gt = function(e) {
                            return ce.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, null, !1);
                        }, yt = function(e) {
                            return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof d) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore);
                        }, bt = function(t) {
                            return "object" === e(l) ? t instanceof l : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
                        }, vt = function(e, t, n) {
                            he[e] && b(he[e], function(e) {
                                e.call(r, t, n, rt);
                            });
                        }, _t = function(e) {
                            var t;
                            if (vt("beforeSanitizeElements", e, null), yt(e)) return ht(e), !0;
                            if (A(/[\u0080-\uFFFF]/, e.nodeName)) return ht(e), !0;
                            var n = me(e.nodeName);
                            if (vt("uponSanitizeElement", e, {
                                tagName: n,
                                allowedTags: Ce
                            }), e.hasChildNodes() && !bt(e.firstElementChild) && (!bt(e.content) || !bt(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent)) return ht(e), !0;
                            if ("select" === n && A(/<template/i, e.innerHTML)) return ht(e), !0;
                            if (!Ce[n] || Te[n]) {
                                if (!Te[n] && xt(n)) {
                                    if (Ee.tagNameCheck instanceof RegExp && A(Ee.tagNameCheck, n)) return !1;
                                    if (Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n)) return !1;
                                }
                                if ($e && !qe[n]) {
                                    var o = ne(e) || e.parentNode, i = te(e) || e.childNodes;
                                    if (i && o) for(var s = i.length - 1; s >= 0; --s)o.insertBefore(Q(i[s], !0), ee(e));
                                }
                                return ht(e), !0;
                            }
                            return e instanceof u && !ft(e) ? (ht(e), !0) : "noscript" !== n && "noembed" !== n || !A(/<\/no(script|embed)/i, e.innerHTML) ? (Le && 3 === e.nodeType && (t = e.textContent, t = C(t, ge, " "), t = C(t, ye, " "), e.textContent !== t && (_(r.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), vt("afterSanitizeElements", e, null), !1) : (ht(e), !0);
                        }, wt = function(e, t, n) {
                            if (ze && ("id" === t || "name" === t) && (n in s || n in ot)) return !1;
                            if (Ie && !ke[t] && A(be, t)) ;
                            else if (je && A(ve, t)) ;
                            else if (!Oe[t] || ke[t]) {
                                if (!(xt(e) && (Ee.tagNameCheck instanceof RegExp && A(Ee.tagNameCheck, e) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(e)) && (Ee.attributeNameCheck instanceof RegExp && A(Ee.attributeNameCheck, t) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(t)) || "is" === t && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && A(Ee.tagNameCheck, n) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n)))) return !1;
                            } else if (Ze[t]) ;
                            else if (A(xe, C(n, we, ""))) ;
                            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== S(n, "data:") || !Ge[e]) {
                                if (Fe && !A(_e, C(n, we, ""))) ;
                                else if (n) return !1;
                            }
                            return !0;
                        }, xt = function(e) {
                            return e.indexOf("-") > 0;
                        }, Ct = function(e) {
                            var t, n, o, i;
                            vt("beforeSanitizeAttributes", e, null);
                            var s = e.attributes;
                            if (s) {
                                var a = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: Oe
                                };
                                for(i = s.length; i--;){
                                    var c = t = s[i], l = c.name, u = c.namespaceURI;
                                    if (n = "value" === l ? t.value : O(t.value), o = me(l), a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, vt("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr && (dt(l, e), a.keepAttr)) {
                                        if (A(/\/>/i, n)) dt(l, e);
                                        else {
                                            Le && (n = C(n, ge, " "), n = C(n, ye, " "));
                                            var p = me(e.nodeName);
                                            if (wt(p, o, n)) try {
                                                u ? e.setAttributeNS(u, l, n) : e.setAttribute(l, n), v(r.removed);
                                            } catch (e1) {}
                                        }
                                    }
                                }
                                vt("afterSanitizeAttributes", e, null);
                            }
                        }, St = function e(t) {
                            var n, r = gt(t);
                            for(vt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();)vt("uponSanitizeShadowNode", n, null), _t(n) || (n.content instanceof a && e(n.content), Ct(n));
                            vt("afterSanitizeShadowDOM", t, null);
                        };
                        return r.sanitize = function(t, o) {
                            var s, c, u, p, f;
                            if ((et = !t) && (t = "<!-->"), "string" != typeof t && !bt(t)) {
                                if ("function" != typeof t.toString) throw E("toString is not a function");
                                if ("string" != typeof (t = t.toString())) throw E("dirty is not a string, aborting");
                            }
                            if (!r.isSupported) {
                                if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                                    if ("string" == typeof t) return n.toStaticHTML(t);
                                    if (bt(t)) return n.toStaticHTML(t.outerHTML);
                                }
                                return t;
                            }
                            if (Me || st(o), r.removed = [], "string" == typeof t && (He = !1), He) {
                                if (t.nodeName) {
                                    var h = me(t.nodeName);
                                    if (!Ce[h] || Te[h]) throw E("root node is forbidden and cannot be sanitized in-place");
                                }
                            } else if (t instanceof l) 1 === (c = (s = mt("<!---->")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === c.nodeName || "HTML" === c.nodeName ? s = c : s.appendChild(c);
                            else {
                                if (!De && !Le && !Ne && -1 === t.indexOf("<")) return oe && Ue ? oe.createHTML(t) : t;
                                if (!(s = mt(t))) return De ? null : Ue ? ie : "";
                            }
                            s && Re && ht(s.firstChild);
                            for(var d = gt(He ? t : s); u = d.nextNode();)3 === u.nodeType && u === p || _t(u) || (u.content instanceof a && St(u.content), Ct(u), p = u);
                            if (p = null, He) return t;
                            if (De) {
                                if (Pe) for(f = le.call(s.ownerDocument); s.firstChild;)f.appendChild(s.firstChild);
                                else f = s;
                                return Oe.shadowroot && (f = pe.call(i, f, !0)), f;
                            }
                            var m = Ne ? s.outerHTML : s.innerHTML;
                            return Ne && Ce["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && A(V, s.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + s.ownerDocument.doctype.name + ">\n" + m), Le && (m = C(m, ge, " "), m = C(m, ye, " ")), oe && Ue ? oe.createHTML(m) : m;
                        }, r.setConfig = function(e) {
                            st(e), Me = !0;
                        }, r.clearConfig = function() {
                            rt = null, Me = !1;
                        }, r.isValidAttribute = function(e, t, n) {
                            rt || st({});
                            var r = me(e), o = me(t);
                            return wt(r, o, n);
                        }, r.addHook = function(e, t) {
                            "function" == typeof t && (he[e] = he[e] || [], _(he[e], t));
                        }, r.removeHook = function(e) {
                            if (he[e]) return v(he[e]);
                        }, r.removeHooks = function(e) {
                            he[e] && (he[e] = []);
                        }, r.removeAllHooks = function() {
                            he = {};
                        }, r;
                    }();
                }();
            },
            729: (e)=>{
                "use strict";
                var t = Object.prototype.hasOwnProperty, n = "~";
                function r() {}
                function o(e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1;
                }
                function i(e, t, r, i, s) {
                    if ("function" != typeof r) throw new TypeError("The listener must be a function");
                    var a = new o(r, i || e, s), c = n ? n + t : t;
                    return e._events[c] ? e._events[c].fn ? e._events[c] = [
                        e._events[c],
                        a
                    ] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e;
                }
                function s(e, t) {
                    0 == --e._eventsCount ? e._events = new r : delete e._events[t];
                }
                function a() {
                    this._events = new r, this._eventsCount = 0;
                }
                Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), a.prototype.eventNames = function() {
                    var e, r, o = [];
                    if (0 === this._eventsCount) return o;
                    for(r in e = this._events)t.call(e, r) && o.push(n ? r.slice(1) : r);
                    return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
                }, a.prototype.listeners = function(e) {
                    var t = n ? n + e : e, r = this._events[t];
                    if (!r) return [];
                    if (r.fn) return [
                        r.fn
                    ];
                    for(var o = 0, i = r.length, s = new Array(i); o < i; o++)s[o] = r[o].fn;
                    return s;
                }, a.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e, r = this._events[t];
                    return r ? r.fn ? 1 : r.length : 0;
                }, a.prototype.emit = function(e, t, r, o, i, s) {
                    var a = n ? n + e : e;
                    if (!this._events[a]) return !1;
                    var c, l, u = this._events[a], p = arguments.length;
                    if (u.fn) {
                        switch(u.once && this.removeListener(e, u.fn, void 0, !0), p){
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, r), !0;
                            case 4:
                                return u.fn.call(u.context, t, r, o), !0;
                            case 5:
                                return u.fn.call(u.context, t, r, o, i), !0;
                            case 6:
                                return u.fn.call(u.context, t, r, o, i, s), !0;
                        }
                        for(l = 1, c = new Array(p - 1); l < p; l++)c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c);
                    } else {
                        var f, h = u.length;
                        for(l = 0; l < h; l++)switch(u[l].once && this.removeListener(e, u[l].fn, void 0, !0), p){
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, r);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, r, o);
                                break;
                            default:
                                if (!c) for(f = 1, c = new Array(p - 1); f < p; f++)c[f - 1] = arguments[f];
                                u[l].fn.apply(u[l].context, c);
                        }
                    }
                    return !0;
                }, a.prototype.on = function(e, t, n) {
                    return i(this, e, t, n, !1);
                }, a.prototype.once = function(e, t, n) {
                    return i(this, e, t, n, !0);
                }, a.prototype.removeListener = function(e, t, r, o) {
                    var i = n ? n + e : e;
                    if (!this._events[i]) return this;
                    if (!t) return s(this, i), this;
                    var a = this._events[i];
                    if (a.fn) a.fn !== t || o && !a.once || r && a.context !== r || s(this, i);
                    else {
                        for(var c = 0, l = [], u = a.length; c < u; c++)(a[c].fn !== t || o && !a[c].once || r && a[c].context !== r) && l.push(a[c]);
                        l.length ? this._events[i] = 1 === l.length ? l[0] : l : s(this, i);
                    }
                    return this;
                }, a.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new r, this._eventsCount = 0), this;
                }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a;
            },
            824: (e)=>{
                var t = 1e3, n = 60 * t, r = 60 * n, o = 24 * r;
                function i(e, t, n, r) {
                    var o = t >= 1.5 * n;
                    return Math.round(e / n) + " " + r + (o ? "s" : "");
                }
                e.exports = function(e, s) {
                    s = s || {};
                    var a, c, l = typeof e;
                    if ("string" === l && e.length > 0) return function(e) {
                        if (!((e = String(e)).length > 100)) {
                            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (i) {
                                var s = parseFloat(i[1]);
                                switch((i[2] || "ms").toLowerCase()){
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * s;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * s;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return s * o;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return s * r;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return s * n;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return s * t;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return s;
                                    default:
                                        return;
                                }
                            }
                        }
                    }(e);
                    if ("number" === l && isFinite(e)) return s.long ? (a = e, (c = Math.abs(a)) >= o ? i(a, c, o, "day") : c >= r ? i(a, c, r, "hour") : c >= n ? i(a, c, n, "minute") : c >= t ? i(a, c, t, "second") : a + " ms") : function(e) {
                        var i = Math.abs(e);
                        return i >= o ? Math.round(e / o) + "d" : i >= r ? Math.round(e / r) + "h" : i >= n ? Math.round(e / n) + "m" : i >= t ? Math.round(e / t) + "s" : e + "ms";
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
                };
            },
            520: (e, t, n)=>{
                "use strict";
                var r = n(155), o = "win32" === r.platform, i = n(539);
                function s(e, t) {
                    for(var n = [], r = 0; r < e.length; r++){
                        var o = e[r];
                        o && "." !== o && (".." === o ? n.length && ".." !== n[n.length - 1] ? n.pop() : t && n.push("..") : n.push(o));
                    }
                    return n;
                }
                function a(e) {
                    for(var t = e.length - 1, n = 0; n <= t && !e[n]; n++);
                    for(var r = t; r >= 0 && !e[r]; r--);
                    return 0 === n && r === t ? e : n > r ? [] : e.slice(n, r + 1);
                }
                var c = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, l = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, u = {};
                function p(e) {
                    var t = c.exec(e), n = (t[1] || "") + (t[2] || ""), r = t[3] || "", o = l.exec(r);
                    return [
                        n,
                        o[1],
                        o[2],
                        o[3]
                    ];
                }
                function f(e) {
                    var t = c.exec(e), n = t[1] || "", r = !!n && ":" !== n[1];
                    return {
                        device: n,
                        isUnc: r,
                        isAbsolute: r || !!t[2],
                        tail: t[3]
                    };
                }
                function h(e) {
                    return "\\\\" + e.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
                }
                u.resolve = function() {
                    for(var e = "", t = "", n = !1, o = arguments.length - 1; o >= -1; o--){
                        var a;
                        if (o >= 0 ? a = arguments[o] : e ? (a = r.env["=" + e]) && a.substr(0, 3).toLowerCase() === e.toLowerCase() + "\\" || (a = e + "\\") : a = r.cwd(), !i.isString(a)) throw new TypeError("Arguments to path.resolve must be strings");
                        if (a) {
                            var c = f(a), l = c.device, u = c.isUnc, p = c.isAbsolute, d = c.tail;
                            if ((!l || !e || l.toLowerCase() === e.toLowerCase()) && (e || (e = l), n || (t = d + "\\" + t, n = p), e && n)) break;
                        }
                    }
                    return u && (e = h(e)), e + (n ? "\\" : "") + (t = s(t.split(/[\\\/]+/), !n).join("\\")) || ".";
                }, u.normalize = function(e) {
                    var t = f(e), n = t.device, r = t.isUnc, o = t.isAbsolute, i = t.tail, a = /[\\\/]$/.test(i);
                    return (i = s(i.split(/[\\\/]+/), !o).join("\\")) || o || (i = "."), i && a && (i += "\\"), r && (n = h(n)), n + (o ? "\\" : "") + i;
                }, u.isAbsolute = function(e) {
                    return f(e).isAbsolute;
                }, u.join = function() {
                    for(var e = [], t = 0; t < arguments.length; t++){
                        var n = arguments[t];
                        if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                        n && e.push(n);
                    }
                    var r = e.join("\\");
                    return /^[\\\/]{2}[^\\\/]/.test(e[0]) || (r = r.replace(/^[\\\/]{2,}/, "\\")), u.normalize(r);
                }, u.relative = function(e, t) {
                    e = u.resolve(e), t = u.resolve(t);
                    for(var n = e.toLowerCase(), r = t.toLowerCase(), o = a(t.split("\\")), i = a(n.split("\\")), s = a(r.split("\\")), c = Math.min(i.length, s.length), l = c, p = 0; p < c; p++)if (i[p] !== s[p]) {
                        l = p;
                        break;
                    }
                    if (0 == l) return t;
                    var f = [];
                    for(p = l; p < i.length; p++)f.push("..");
                    return (f = f.concat(o.slice(l))).join("\\");
                }, u._makeLong = function(e) {
                    if (!i.isString(e)) return e;
                    if (!e) return "";
                    var t = u.resolve(e);
                    return /^[a-zA-Z]\:\\/.test(t) ? "\\\\?\\" + t : /^\\\\[^?.]/.test(t) ? "\\\\?\\UNC\\" + t.substring(2) : e;
                }, u.dirname = function(e) {
                    var t = p(e), n = t[0], r = t[1];
                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                }, u.basename = function(e, t) {
                    var n = p(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                }, u.extname = function(e) {
                    return p(e)[3];
                }, u.format = function(e) {
                    if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                    var t = e.root || "";
                    if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                    var n = e.dir, r = e.base || "";
                    return n ? n[n.length - 1] === u.sep ? n + r : n + u.sep + r : r;
                }, u.parse = function(e) {
                    if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                    var t = p(e);
                    if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                    return {
                        root: t[0],
                        dir: t[0] + t[1].slice(0, -1),
                        base: t[2],
                        ext: t[3],
                        name: t[2].slice(0, t[2].length - t[3].length)
                    };
                }, u.sep = "\\", u.delimiter = ";";
                var d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, m = {};
                function g(e) {
                    return d.exec(e).slice(1);
                }
                m.resolve = function() {
                    for(var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--){
                        var o = n >= 0 ? arguments[n] : r.cwd();
                        if (!i.isString(o)) throw new TypeError("Arguments to path.resolve must be strings");
                        o && (e = o + "/" + e, t = "/" === o[0]);
                    }
                    return (t ? "/" : "") + (e = s(e.split("/"), !t).join("/")) || ".";
                }, m.normalize = function(e) {
                    var t = m.isAbsolute(e), n = e && "/" === e[e.length - 1];
                    return (e = s(e.split("/"), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
                }, m.isAbsolute = function(e) {
                    return "/" === e.charAt(0);
                }, m.join = function() {
                    for(var e = "", t = 0; t < arguments.length; t++){
                        var n = arguments[t];
                        if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                        n && (e += e ? "/" + n : n);
                    }
                    return m.normalize(e);
                }, m.relative = function(e, t) {
                    e = m.resolve(e).substr(1), t = m.resolve(t).substr(1);
                    for(var n = a(e.split("/")), r = a(t.split("/")), o = Math.min(n.length, r.length), i = o, s = 0; s < o; s++)if (n[s] !== r[s]) {
                        i = s;
                        break;
                    }
                    var c = [];
                    for(s = i; s < n.length; s++)c.push("..");
                    return (c = c.concat(r.slice(i))).join("/");
                }, m._makeLong = function(e) {
                    return e;
                }, m.dirname = function(e) {
                    var t = g(e), n = t[0], r = t[1];
                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                }, m.basename = function(e, t) {
                    var n = g(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                }, m.extname = function(e) {
                    return g(e)[3];
                }, m.format = function(e) {
                    if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                    var t = e.root || "";
                    if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                    return (e.dir ? e.dir + m.sep : "") + (e.base || "");
                }, m.parse = function(e) {
                    if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                    var t = g(e);
                    if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                    return t[1] = t[1] || "", t[2] = t[2] || "", t[3] = t[3] || "", {
                        root: t[0],
                        dir: t[0] + t[1].slice(0, -1),
                        base: t[2],
                        ext: t[3],
                        name: t[2].slice(0, t[2].length - t[3].length)
                    };
                }, m.sep = "/", m.delimiter = ":", e.exports = o ? u : m, e.exports.posix = m, e.exports.win32 = u;
            },
            155: (e)=>{
                var t, n, r = e.exports = {};
                function o() {
                    throw new Error("setTimeout has not been defined");
                }
                function i() {
                    throw new Error("clearTimeout has not been defined");
                }
                function s(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0);
                    } catch (n) {
                        try {
                            return t.call(null, e, 0);
                        } catch (n1) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                !function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o;
                    } catch (e) {
                        t = o;
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i;
                    } catch (e1) {
                        n = i;
                    }
                }();
                var a, c = [], l = !1, u = -1;
                function p() {
                    l && a && (l = !1, a.length ? c = a.concat(c) : u = -1, c.length && f());
                }
                function f() {
                    if (!l) {
                        var e = s(p);
                        l = !0;
                        for(var t = c.length; t;){
                            for(a = c, c = []; ++u < t;)a && a[u].run();
                            u = -1, t = c.length;
                        }
                        a = null, l = !1, function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e);
                            } catch (t) {
                                try {
                                    return n.call(null, e);
                                } catch (t1) {
                                    return n.call(this, e);
                                }
                            }
                        }(e);
                    }
                }
                function h(e, t) {
                    this.fun = e, this.array = t;
                }
                function d() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                    c.push(new h(e, t)), 1 !== c.length || l || s(f);
                }, h.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function(e) {
                    return [];
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported");
                }, r.cwd = function() {
                    return "/";
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported");
                }, r.umask = function() {
                    return 0;
                };
            },
            496: (e)=>{
                "function" == typeof Object.create ? e.exports = function(e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                } : e.exports = function(e, t) {
                    e.super_ = t;
                    var n = function() {};
                    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
                };
            },
            384: (e)=>{
                e.exports = function(e) {
                    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
                };
            },
            539: (e, t, n)=>{
                var r = n(155), o = /%[sdj%]/g;
                t.format = function(e) {
                    if (!y(e)) {
                        for(var t = [], n = 0; n < arguments.length; n++)t.push(a(arguments[n]));
                        return t.join(" ");
                    }
                    n = 1;
                    for(var r = arguments, i = r.length, s = String(e).replace(o, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= i) return e;
                        switch(e){
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++]);
                                } catch (e1) {
                                    return "[Circular]";
                                }
                            default:
                                return e;
                        }
                    }), c = r[n]; n < i; c = r[++n])m(c) || !_(c) ? s += " " + c : s += " " + a(c);
                    return s;
                }, t.deprecate = function(e, o) {
                    if (b(n.g.process)) return function() {
                        return t.deprecate(e, o).apply(this, arguments);
                    };
                    if (!0 === r.noDeprecation) return e;
                    var i = !1;
                    return function() {
                        if (!i) {
                            if (r.throwDeprecation) throw new Error(o);
                            r.traceDeprecation ? console.trace(o) : console.error(o), i = !0;
                        }
                        return e.apply(this, arguments);
                    };
                };
                var i, s = {};
                function a(e, n) {
                    var r = {
                        seen: [],
                        stylize: l
                    };
                    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && t._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), u(r, e, r.depth);
                }
                function c(e, t) {
                    var n = a.styles[t];
                    return n ? "\x1b[" + a.colors[n][0] + "m" + e + "\x1b[" + a.colors[n][1] + "m" : e;
                }
                function l(e, t) {
                    return e;
                }
                function u(e, n, r) {
                    if (e.customInspect && n && C(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                        var o = n.inspect(r, e);
                        return y(o) || (o = u(e, o, r)), o;
                    }
                    var i = function(e, t) {
                        if (b(t)) return e.stylize("undefined", "undefined");
                        if (y(t)) {
                            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(n, "string");
                        }
                        return g(t) ? e.stylize("" + t, "number") : d(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0;
                    }(e, n);
                    if (i) return i;
                    var s = Object.keys(n), a = function(e) {
                        var t = {};
                        return e.forEach(function(e, n) {
                            t[e] = !0;
                        }), t;
                    }(s);
                    if (e.showHidden && (s = Object.getOwnPropertyNames(n)), x(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return p(n);
                    if (0 === s.length) {
                        if (C(n)) {
                            var c = n.name ? ": " + n.name : "";
                            return e.stylize("[Function" + c + "]", "special");
                        }
                        if (v(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                        if (w(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                        if (x(n)) return p(n);
                    }
                    var l, _ = "", S = !1, O = [
                        "{",
                        "}"
                    ];
                    return h(n) && (S = !0, O = [
                        "[",
                        "]"
                    ]), C(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), v(n) && (_ = " " + RegExp.prototype.toString.call(n)), w(n) && (_ = " " + Date.prototype.toUTCString.call(n)), x(n) && (_ = " " + p(n)), 0 !== s.length || S && 0 != n.length ? r < 0 ? v(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), l = S ? function(e, t, n, r, o) {
                        for(var i = [], s = 0, a = t.length; s < a; ++s)T(t, String(s)) ? i.push(f(e, t, n, r, String(s), !0)) : i.push("");
                        return o.forEach(function(o) {
                            o.match(/^\d+$/) || i.push(f(e, t, n, r, o, !0));
                        }), i;
                    }(e, n, r, a, s) : s.map(function(t) {
                        return f(e, n, r, a, t, S);
                    }), e.seen.pop(), function(e, t, n) {
                        return e.reduce(function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                        }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
                    }(l, _, O)) : O[0] + _ + O[1];
                }
                function p(e) {
                    return "[" + Error.prototype.toString.call(e) + "]";
                }
                function f(e, t, n, r, o, i) {
                    var s, a, c;
                    if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), T(r, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = m(n) ? u(e, c.value, null) : u(e, c.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map(function(e) {
                        return "  " + e;
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                        return "   " + e;
                    }).join("\n")) : a = e.stylize("[Circular]", "special")), b(s)) {
                        if (i && o.match(/^\d+$/)) return a;
                        (s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"));
                    }
                    return s + ": " + a;
                }
                function h(e) {
                    return Array.isArray(e);
                }
                function d(e) {
                    return "boolean" == typeof e;
                }
                function m(e) {
                    return null === e;
                }
                function g(e) {
                    return "number" == typeof e;
                }
                function y(e) {
                    return "string" == typeof e;
                }
                function b(e) {
                    return void 0 === e;
                }
                function v(e) {
                    return _(e) && "[object RegExp]" === S(e);
                }
                function _(e) {
                    return "object" == typeof e && null !== e;
                }
                function w(e) {
                    return _(e) && "[object Date]" === S(e);
                }
                function x(e) {
                    return _(e) && ("[object Error]" === S(e) || e instanceof Error);
                }
                function C(e) {
                    return "function" == typeof e;
                }
                function S(e) {
                    return Object.prototype.toString.call(e);
                }
                function O(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10);
                }
                t.debuglog = function(e) {
                    if (b(i) && (i = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !s[e]) {
                        if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
                            var n = r.pid;
                            s[e] = function() {
                                var r = t.format.apply(t, arguments);
                                console.error("%s %d: %s", e, n, r);
                            };
                        } else s[e] = function() {};
                    }
                    return s[e];
                }, t.inspect = a, a.colors = {
                    bold: [
                        1,
                        22
                    ],
                    italic: [
                        3,
                        23
                    ],
                    underline: [
                        4,
                        24
                    ],
                    inverse: [
                        7,
                        27
                    ],
                    white: [
                        37,
                        39
                    ],
                    grey: [
                        90,
                        39
                    ],
                    black: [
                        30,
                        39
                    ],
                    blue: [
                        34,
                        39
                    ],
                    cyan: [
                        36,
                        39
                    ],
                    green: [
                        32,
                        39
                    ],
                    magenta: [
                        35,
                        39
                    ],
                    red: [
                        31,
                        39
                    ],
                    yellow: [
                        33,
                        39
                    ]
                }, a.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, t.isArray = h, t.isBoolean = d, t.isNull = m, t.isNullOrUndefined = function(e) {
                    return null == e;
                }, t.isNumber = g, t.isString = y, t.isSymbol = function(e) {
                    return "symbol" == typeof e;
                }, t.isUndefined = b, t.isRegExp = v, t.isObject = _, t.isDate = w, t.isError = x, t.isFunction = C, t.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
                }, t.isBuffer = n(384);
                var A = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ];
                function E() {
                    var e = new Date, t = [
                        O(e.getHours()),
                        O(e.getMinutes()),
                        O(e.getSeconds())
                    ].join(":");
                    return [
                        e.getDate(),
                        A[e.getMonth()],
                        t
                    ].join(" ");
                }
                function T(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                t.log = function() {
                    console.log("%s - %s", E(), t.format.apply(t, arguments));
                }, t.inherits = n(496), t._extend = function(e, t) {
                    if (!t || !_(t)) return e;
                    for(var n = Object.keys(t), r = n.length; r--;)e[n[r]] = t[n[r]];
                    return e;
                };
            }
        }, t = {};
        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var i = t[r] = {
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), n.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var r = {};
        return (()=>{
            "use strict";
            n.r(r), n.d(r, {
                LSPluginUser: ()=>Jt,
                setupPluginUserInstance: ()=>Zt
            });
            var e = n(520);
            n(856);
            const t = function(e, t) {
                return e === t || e != e && t != t;
            }, o = function(e, n) {
                for(var r = e.length; r--;)if (t(e[r][0], n)) return r;
                return -1;
            };
            var i = Array.prototype.splice;
            function s(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            s.prototype.clear = function() {
                this.__data__ = [], this.size = 0;
            }, s.prototype.delete = function(e) {
                var t = this.__data__, n = o(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
            }, s.prototype.get = function(e) {
                var t = this.__data__, n = o(t, e);
                return n < 0 ? void 0 : t[n][1];
            }, s.prototype.has = function(e) {
                return o(this.__data__, e) > -1;
            }, s.prototype.set = function(e, t) {
                var n = this.__data__, r = o(n, e);
                return r < 0 ? (++this.size, n.push([
                    e,
                    t
                ])) : n[r][1] = t, this;
            };
            const a = s, c = "object" == typeof $parcel$global && $parcel$global && $parcel$global.Object === Object && $parcel$global;
            var l = "object" == typeof self && self && self.Object === Object && self;
            const u = c || l || Function("return this")(), p = u.Symbol;
            var f = Object.prototype, h = f.hasOwnProperty, d = f.toString, m = p ? p.toStringTag : void 0;
            var g = Object.prototype.toString;
            var y = p ? p.toStringTag : void 0;
            const b = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : y && y in Object(e) ? function(e) {
                    var t = h.call(e, m), n = e[m];
                    try {
                        e[m] = void 0;
                        var r = !0;
                    } catch (e1) {}
                    var o = d.call(e);
                    return r && (t ? e[m] = n : delete e[m]), o;
                }(e) : function(e) {
                    return g.call(e);
                }(e);
            }, v = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
            }, _ = function(e) {
                if (!v(e)) return !1;
                var t = b(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
            }, w = u["__core-js_shared__"];
            var x, C = (x = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "")) ? "Symbol(src)_1." + x : "";
            var S = Function.prototype.toString;
            var O = /^\[object .+?Constructor\]$/, A = Function.prototype, E = Object.prototype, T = A.toString, k = E.hasOwnProperty, j = RegExp("^" + T.call(k).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const I = function(e) {
                var t;
                return !(!v(e) || (t = e, C && C in t)) && (_(e) ? j : O).test(function(e) {
                    if (null != e) {
                        try {
                            return S.call(e);
                        } catch (e1) {}
                        try {
                            return e + "";
                        } catch (e2) {}
                    }
                    return "";
                }(e));
            }, F = function(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t];
                }(e, t);
                return I(n) ? n : void 0;
            }, L = F(u, "Map"), N = F(Object, "create");
            var M = Object.prototype.hasOwnProperty;
            var R = Object.prototype.hasOwnProperty;
            function D(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            D.prototype.clear = function() {
                this.__data__ = N ? N(null) : {}, this.size = 0;
            }, D.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t;
            }, D.prototype.get = function(e) {
                var t = this.__data__;
                if (N) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return M.call(t, e) ? t[e] : void 0;
            }, D.prototype.has = function(e) {
                var t = this.__data__;
                return N ? void 0 !== t[e] : R.call(t, e);
            }, D.prototype.set = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = N && void 0 === t ? "__lodash_hash_undefined__" : t, this;
            };
            const P = D, U = function(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            };
            function z(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            z.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new P,
                    map: new (L || a),
                    string: new P
                };
            }, z.prototype.delete = function(e) {
                var t = U(this, e).delete(e);
                return this.size -= t ? 1 : 0, t;
            }, z.prototype.get = function(e) {
                return U(this, e).get(e);
            }, z.prototype.has = function(e) {
                return U(this, e).has(e);
            }, z.prototype.set = function(e, t) {
                var n = U(this, e), r = n.size;
                return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
            };
            const $ = z;
            function H(e) {
                var t = this.__data__ = new a(e);
                this.size = t.size;
            }
            H.prototype.clear = function() {
                this.__data__ = new a, this.size = 0;
            }, H.prototype.delete = function(e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n;
            }, H.prototype.get = function(e) {
                return this.__data__.get(e);
            }, H.prototype.has = function(e) {
                return this.__data__.has(e);
            }, H.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof a) {
                    var r = n.__data__;
                    if (!L || r.length < 199) return r.push([
                        e,
                        t
                    ]), this.size = ++n.size, this;
                    n = this.__data__ = new $(r);
                }
                return n.set(e, t), this.size = n.size, this;
            };
            const B = H, q = function() {
                try {
                    var e = F(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch (e1) {}
            }(), W = function(e, t, n) {
                "__proto__" == t && q ? q(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n;
            }, G = function(e, n, r) {
                (void 0 !== r && !t(e[n], r) || void 0 === r && !(n in e)) && W(e, n, r);
            }, J = function(e, t, n) {
                for(var r = -1, o = Object(e), i = n(e), s = i.length; s--;){
                    var a = i[++r];
                    if (!1 === t(o[a], a, o)) break;
                }
                return e;
            };
            var Z = exports && !exports.nodeType && exports, K = Z && true && module && !module.nodeType && module, V = K && K.exports === Z ? u.Buffer : void 0, Y = V ? V.allocUnsafe : void 0;
            const X = u.Uint8Array, Q = function(e, t) {
                var n, r, o = t ? (n = e.buffer, r = new n.constructor(n.byteLength), new X(r).set(new X(n)), r) : e.buffer;
                return new e.constructor(o, e.byteOffset, e.length);
            };
            var ee = Object.create;
            const te = function() {
                function e() {}
                return function(t) {
                    if (!v(t)) return {};
                    if (ee) return ee(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n;
                };
            }(), ne = (re = Object.getPrototypeOf, oe = Object, function(e) {
                return re(oe(e));
            });
            var re, oe, ie = Object.prototype;
            const se = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || ie);
            }, ae = function(e) {
                return null != e && "object" == typeof e;
            }, ce = function(e) {
                return ae(e) && "[object Arguments]" == b(e);
            };
            var le = Object.prototype, ue = le.hasOwnProperty, pe = le.propertyIsEnumerable;
            const fe = ce(function() {
                return arguments;
            }()) ? ce : function(e) {
                return ae(e) && ue.call(e, "callee") && !pe.call(e, "callee");
            }, he = Array.isArray, de = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
            }, me = function(e) {
                return null != e && de(e.length) && !_(e);
            };
            var ge = exports && !exports.nodeType && exports, ye = ge && true && module && !module.nodeType && module, be = ye && ye.exports === ge ? u.Buffer : void 0;
            const ve = (be ? be.isBuffer : void 0) || function() {
                return !1;
            };
            var _e = Function.prototype, we = Object.prototype, xe = _e.toString, Ce = we.hasOwnProperty, Se = xe.call(Object);
            var Oe = {};
            Oe["[object Float32Array]"] = Oe["[object Float64Array]"] = Oe["[object Int8Array]"] = Oe["[object Int16Array]"] = Oe["[object Int32Array]"] = Oe["[object Uint8Array]"] = Oe["[object Uint8ClampedArray]"] = Oe["[object Uint16Array]"] = Oe["[object Uint32Array]"] = !0, Oe["[object Arguments]"] = Oe["[object Array]"] = Oe["[object ArrayBuffer]"] = Oe["[object Boolean]"] = Oe["[object DataView]"] = Oe["[object Date]"] = Oe["[object Error]"] = Oe["[object Function]"] = Oe["[object Map]"] = Oe["[object Number]"] = Oe["[object Object]"] = Oe["[object RegExp]"] = Oe["[object Set]"] = Oe["[object String]"] = Oe["[object WeakMap]"] = !1;
            var Ae = exports && !exports.nodeType && exports, Ee = Ae && true && module && !module.nodeType && module, Te = Ee && Ee.exports === Ae && c.process, ke = function() {
                try {
                    return Ee && Ee.require && Ee.require("util").types || Te && Te.binding && Te.binding("util");
                } catch (e) {}
            }(), je = ke && ke.isTypedArray;
            const Ie = je ? function(e) {
                return function(t) {
                    return e(t);
                };
            }(je) : function(e) {
                return ae(e) && de(e.length) && !!Oe[b(e)];
            }, Fe = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
            };
            var Le = Object.prototype.hasOwnProperty;
            const Ne = function(e, n, r) {
                var o = e[n];
                Le.call(e, n) && t(o, r) && (void 0 !== r || n in e) || W(e, n, r);
            };
            var Me = /^(?:0|[1-9]\d*)$/;
            const Re = function(e, t) {
                var n = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Me.test(e)) && e > -1 && e % 1 == 0 && e < t;
            };
            var De = Object.prototype.hasOwnProperty;
            const Pe = function(e, t) {
                var n = he(e), r = !n && fe(e), o = !n && !r && ve(e), i = !n && !r && !o && Ie(e), s = n || r || o || i, a = s ? function(e, t) {
                    for(var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
                    return r;
                }(e.length, String) : [], c = a.length;
                for(var l in e)!t && !De.call(e, l) || s && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Re(l, c)) || a.push(l);
                return a;
            };
            var Ue = Object.prototype.hasOwnProperty;
            const ze = function(e) {
                if (!v(e)) return function(e) {
                    var t = [];
                    if (null != e) for(var n in Object(e))t.push(n);
                    return t;
                }(e);
                var t = se(e), n = [];
                for(var r in e)("constructor" != r || !t && Ue.call(e, r)) && n.push(r);
                return n;
            }, $e = function(e) {
                return me(e) ? Pe(e, !0) : ze(e);
            }, He = function(e) {
                return function(e, t, n, r) {
                    var o = !n;
                    n || (n = {});
                    for(var i = -1, s = t.length; ++i < s;){
                        var a = t[i], c = r ? r(n[a], e[a], a, n, e) : void 0;
                        void 0 === c && (c = e[a]), o ? W(n, a, c) : Ne(n, a, c);
                    }
                    return n;
                }(e, $e(e));
            }, Be = function(e, t, n, r, o, i, s) {
                var a, c = Fe(e, n), l = Fe(t, n), u = s.get(l);
                if (u) G(e, n, u);
                else {
                    var p = i ? i(c, l, n + "", e, t, s) : void 0, f = void 0 === p;
                    if (f) {
                        var h = he(l), d = !h && ve(l), m = !h && !d && Ie(l);
                        p = l, h || d || m ? he(c) ? p = c : ae(a = c) && me(a) ? p = function(e, t) {
                            var n = -1, r = e.length;
                            for(t || (t = Array(r)); ++n < r;)t[n] = e[n];
                            return t;
                        }(c) : d ? (f = !1, p = function(e, t) {
                            if (t) return e.slice();
                            var n = e.length, r = Y ? Y(n) : new e.constructor(n);
                            return e.copy(r), r;
                        }(l, !0)) : m ? (f = !1, p = Q(l, !0)) : p = [] : function(e) {
                            if (!ae(e) || "[object Object]" != b(e)) return !1;
                            var t = ne(e);
                            if (null === t) return !0;
                            var n = Ce.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && xe.call(n) == Se;
                        }(l) || fe(l) ? (p = c, fe(c) ? p = He(c) : v(c) && !_(c) || (p = function(e) {
                            return "function" != typeof e.constructor || se(e) ? {} : te(ne(e));
                        }(l))) : f = !1;
                    }
                    f && (s.set(l, p), o(p, l, r, i, s), s.delete(l)), G(e, n, p);
                }
            }, qe = function e(t, n, r, o, i) {
                t !== n && J(n, function(s, a) {
                    if (i || (i = new B), v(s)) Be(t, n, a, r, e, o, i);
                    else {
                        var c = o ? o(Fe(t, a), s, a + "", t, n, i) : void 0;
                        void 0 === c && (c = s), G(t, a, c);
                    }
                }, $e);
            }, We = function(e) {
                return e;
            }, Ge = function(e, t, n) {
                switch(n.length){
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
            };
            var Je = Math.max;
            const Ze = q ? function(e, t) {
                var n;
                return q(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (n = t, function() {
                        return n;
                    }),
                    writable: !0
                });
            } : We;
            var Ke = Date.now;
            const Ve = function(e) {
                var t = 0, n = 0;
                return function() {
                    var r = Ke(), o = 16 - (r - n);
                    if (n = r, o > 0) {
                        if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(void 0, arguments);
                };
            }(Ze), Ye = function(e, t) {
                return Ve(function(e, t, n) {
                    return t = Je(void 0 === t ? e.length - 1 : t, 0), function() {
                        for(var r = arguments, o = -1, i = Je(r.length - t, 0), s = Array(i); ++o < i;)s[o] = r[t + o];
                        o = -1;
                        for(var a = Array(t + 1); ++o < t;)a[o] = r[o];
                        return a[t] = n(s), Ge(e, this, a);
                    };
                }(e, t, We), e + "");
            }, Xe = (Qe = function(e, t, n) {
                qe(e, t, n);
            }, Ye(function(e, n) {
                var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
                for(i = Qe.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && function(e, n, r) {
                    if (!v(r)) return !1;
                    var o = typeof n;
                    return !!("number" == o ? me(r) && Re(n, r.length) : "string" == o && (n in r)) && t(r[n], e);
                }(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), e = Object(e); ++r < o;){
                    var a = n[r];
                    a && Qe(e, a, r);
                }
                return e;
            }));
            var Qe, et = function() {
                return et = Object.assign || function(e) {
                    for(var t, n = 1, r = arguments.length; n < r; n++)for(var o in t = arguments[n])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }, et.apply(this, arguments);
            };
            function tt(e) {
                return e.toLowerCase();
            }
            Object.create, Object.create;
            var nt = [
                /([a-z0-9])([A-Z])/g,
                /([A-Z])([A-Z][a-z])/g
            ], rt = /[^A-Z0-9]+/gi;
            function ot(e, t, n) {
                return t instanceof RegExp ? e.replace(t, n) : t.reduce(function(e, t) {
                    return e.replace(t, n);
                }, e);
            }
            const it = "win32" === navigator.platform.toLowerCase() ? e.win32 : e.posix, st = function(e, t) {
                return void 0 === t && (t = {}), function(e, t) {
                    return void 0 === t && (t = {}), function(e, t) {
                        void 0 === t && (t = {});
                        for(var n = t.splitRegexp, r = void 0 === n ? nt : n, o = t.stripRegexp, i = void 0 === o ? rt : o, s = t.transform, a = void 0 === s ? tt : s, c = t.delimiter, l = void 0 === c ? " " : c, u = ot(ot(e, r, "$1\0$2"), i, "\0"), p = 0, f = u.length; "\0" === u.charAt(p);)p++;
                        for(; "\0" === u.charAt(f - 1);)f--;
                        return u.slice(p, f).split("\0").map(a).join(l);
                    }(e, et({
                        delimiter: "."
                    }, t));
                }(e, et({
                    delimiter: "_"
                }, t));
            }, at = Xe;
            function ct(e, t) {
                let n, r, o = !1;
                const i = (t)=>(n)=>{
                        e && clearTimeout(e), t(n), o = !0;
                    }, s = new Promise((o, s)=>{
                    n = i(o), r = i(s), e && (e = setTimeout(()=>r(new Error(`[deferred timeout] ${t}`)), e));
                });
                return {
                    created: Date.now(),
                    setTag: (e)=>t = e,
                    resolve: n,
                    reject: r,
                    promise: s,
                    get settled () {
                        return o;
                    }
                };
            }
            const lt = new Map;
            window.__injectedUIEffects = lt;
            var ut = n(227), pt = n.n(ut);
            const ft = "application/x-postmate-v1+json";
            let ht = 0;
            const dt = {
                handshake: 1,
                "handshake-reply": 1,
                call: 1,
                emit: 1,
                reply: 1,
                request: 1
            }, mt = (e, t)=>!("string" == typeof t && e.origin !== t || !e.data || "object" == typeof e.data && !("postmate" in e.data) || e.data.type !== ft || !dt[e.data.postmate]);
            class gt {
                parent;
                frame;
                child;
                events = {};
                childOrigin;
                listener;
                constructor(e){
                    this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.listener = (e)=>{
                        if (!mt(e, this.childOrigin)) return !1;
                        const { data: t , name: n  } = ((e || {}).data || {}).value || {};
                        "emit" === e.data.postmate && n in this.events && this.events[n].forEach((e)=>{
                            e.call(this, t);
                        });
                    }, this.parent.addEventListener("message", this.listener, !1);
                }
                get(e) {
                    return new Promise((t)=>{
                        const n = ++ht, r = (e)=>{
                            e.data.uid === n && "reply" === e.data.postmate && (this.parent.removeEventListener("message", r, !1), t(e.data.value));
                        };
                        this.parent.addEventListener("message", r, !1), this.child.postMessage({
                            postmate: "request",
                            type: ft,
                            property: e,
                            uid: n
                        }, this.childOrigin);
                    });
                }
                call(e, t) {
                    this.child.postMessage({
                        postmate: "call",
                        type: ft,
                        property: e,
                        data: t
                    }, this.childOrigin);
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = []), this.events[e].push(t);
                }
                destroy() {
                    window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame);
                }
            }
            class yt {
                model;
                parent;
                parentOrigin;
                child;
                constructor(e){
                    this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (e)=>{
                        if (!mt(e, this.parentOrigin)) return;
                        const { property: t , uid: n , data: r  } = e.data;
                        "call" !== e.data.postmate ? ((e, t)=>{
                            const n = "function" == typeof e[t] ? e[t]() : e[t];
                            return Promise.resolve(n);
                        })(this.model, t).then((r)=>{
                            e.source.postMessage({
                                property: t,
                                postmate: "reply",
                                type: ft,
                                uid: n,
                                value: r
                            }, e.origin);
                        }) : t in this.model && "function" == typeof this.model[t] && this.model[t](r);
                    });
                }
                emit(e, t) {
                    this.parent.postMessage({
                        postmate: "emit",
                        type: ft,
                        value: {
                            name: e,
                            data: t
                        }
                    }, this.parentOrigin);
                }
            }
            class bt {
                static debug = !1;
                container;
                parent;
                frame;
                child;
                childOrigin;
                url;
                model;
                static Model;
                constructor(e){
                    this.container = e.container, this.url = e.url, this.parent = window, this.frame = document.createElement("iframe"), e.id && (this.frame.id = e.id), e.name && (this.frame.name = e.name), this.frame.classList.add.apply(this.frame.classList, e.classListArray || []), this.container.appendChild(this.frame), this.child = this.frame.contentWindow, this.model = e.model || {};
                }
                sendHandshake(e) {
                    const t = ((e)=>{
                        const t = document.createElement("a");
                        t.href = e;
                        const n = t.protocol.length > 4 ? t.protocol : window.location.protocol, r = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                        return t.origin || `${n}//${r}`;
                    })(e = e || this.url);
                    let n, r = 0;
                    return new Promise((o, i)=>{
                        const s = (e)=>!!mt(e, t) && ("handshake-reply" === e.data.postmate ? (clearInterval(n), this.parent.removeEventListener("message", s, !1), this.childOrigin = e.origin, o(new gt(this))) : i("Failed handshake"));
                        this.parent.addEventListener("message", s, !1);
                        const a = ()=>{
                            r++, this.child.postMessage({
                                postmate: "handshake",
                                type: ft,
                                model: this.model
                            }, t), 5 === r && clearInterval(n);
                        };
                        this.frame.addEventListener("load", ()=>{
                            a(), n = setInterval(a, 500);
                        }), this.frame.src = e;
                    });
                }
                destroy() {
                    this.frame.parentNode.removeChild(this.frame);
                }
            }
            class vt {
                child;
                model;
                parent;
                parentOrigin;
                constructor(e){
                    this.child = window, this.model = e, this.parent = this.child.parent;
                }
                sendHandshakeReply() {
                    return new Promise((e, t)=>{
                        const n = (r)=>{
                            if (r.data.postmate) {
                                if ("handshake" === r.data.postmate) {
                                    this.child.removeEventListener("message", n, !1), r.source.postMessage({
                                        postmate: "handshake-reply",
                                        type: ft
                                    }, r.origin), this.parentOrigin = r.origin;
                                    const t1 = r.data.model;
                                    return t1 && Object.keys(t1).forEach((e)=>{
                                        this.model[e] = t1[e];
                                    }), e(new yt(this));
                                }
                                return t("Handshake Reply Failed");
                            }
                        };
                        this.child.addEventListener("message", n, !1);
                    });
                }
            }
            var _t = n(729), wt = n.n(_t);
            const { importHTML: xt , createSandboxContainer: Ct  } = window.QSandbox || {};
            function St(e, t) {
                return e.startsWith("http") ? fetch(e, t) : (e = e.replace("file://", ""), new Promise(async (t, n)=>{
                    try {
                        const n1 = await window.apis.doAction([
                            "readFile",
                            e
                        ]);
                        t({
                            text: ()=>n1
                        });
                    } catch (e1) {
                        console.error(e1), n(e1);
                    }
                }));
            }
            class Ot extends wt() {
                _pluginLocal;
                _frame;
                _root;
                _loaded = !1;
                _unmountFns = [];
                constructor(e){
                    super(), this._pluginLocal = e, e._dispose(()=>{
                        this._unmount();
                    });
                }
                async load() {
                    const { name: e , entry: t  } = this._pluginLocal.options;
                    if (this.loaded || !t) return;
                    const { template: n , execScripts: r  } = await xt(t, {
                        fetch: St
                    });
                    this._mount(n, document.body);
                    const o = Ct(e, {
                        elementGetter: ()=>this._root?.firstChild
                    }).instance.proxy;
                    o.__shadow_mode__ = !0, o.LSPluginLocal = this._pluginLocal, o.LSPluginShadow = this, o.LSPluginUser = o.logseq = new Jt(this._pluginLocal.toJSON(), this._pluginLocal.caller);
                    const i = await r(o, !0);
                    this._unmountFns.push(i.unmount), this._loaded = !0;
                }
                _mount(e, t) {
                    const n = this._frame = document.createElement("div");
                    n.classList.add("lsp-shadow-sandbox"), n.id = this._pluginLocal.id, this._root = n.attachShadow({
                        mode: "open"
                    }), this._root.innerHTML = `<div>${e}</div>`, t.appendChild(n), this.emit("mounted");
                }
                _unmount() {
                    for (const e of this._unmountFns)e && e.call(null);
                }
                destroy() {
                    this.frame?.parentNode?.removeChild(this.frame);
                }
                get loaded() {
                    return this._loaded;
                }
                get document() {
                    return this._root?.firstChild;
                }
                get frame() {
                    return this._frame;
                }
            }
            const At = pt()("LSPlugin:caller"), Et = "#await#response#", Tt = "#lspmsg#error#", kt = (e)=>`#lspmsg#${e}`;
            class jt extends wt() {
                _pluginLocal;
                _connected = !1;
                _parent;
                _child;
                _shadow;
                _status;
                _userModel = {};
                _call;
                _callUserModel;
                _debugTag = "";
                constructor(e){
                    super(), this._pluginLocal = e, e && (this._debugTag = e.debugTag);
                }
                async connectToChild() {
                    if (this._connected) return;
                    const { shadow: e  } = this._pluginLocal;
                    e ? await this._setupShadowSandbox() : await this._setupIframeSandbox();
                }
                async connectToParent(e = {}) {
                    if (this._connected) return;
                    const t = this, n = null != this._pluginLocal;
                    let r = 0, o = 0;
                    const i = new Map, s = ct(6e4), a = this._extendUserModel({
                        "#lspmsg#ready#": async (e)=>{
                            a[kt(e?.pid)] = ({ type: e , payload: n  })=>{
                                At(`[host (_call) -> *user] ${this._debugTag}`, e, n), t.emit(e, n);
                            }, await s.resolve();
                        },
                        "#lspmsg#beforeunload#": async (e)=>{
                            const n = ct(1e4);
                            t.emit("beforeunload", Object.assign({
                                actor: n
                            }, e)), await n.promise;
                        },
                        "#lspmsg#settings#": async ({ type: e , payload: n  })=>{
                            t.emit("settings:changed", n);
                        },
                        "#lspmsg#": async ({ ns: e , type: n , payload: r  })=>{
                            At(`[host (async) -> *user] ${this._debugTag} ns=${e} type=${n}`, r), e && e.startsWith("hook") ? t.emit(`${e}:${n}`, r) : t.emit(n, r);
                        },
                        "#lspmsg#reply#": ({ _sync: e , result: t  })=>{
                            if (At(`[sync host -> *user] #${e}`, t), i.has(e)) {
                                const n = i.get(e);
                                n && (t?.hasOwnProperty(Tt) ? n.reject(t[Tt]) : n.resolve(t), i.delete(e));
                            }
                        },
                        ...e
                    });
                    if (n) return await s.promise, JSON.parse(JSON.stringify(this._pluginLocal?.toJSON()));
                    const c = new vt(a).sendHandshakeReply();
                    return this._status = "pending", await c.then((e)=>{
                        this._child = e, this._connected = !0, this._call = async (t, n = {}, r)=>{
                            if (r) {
                                const e1 = ++o;
                                i.set(e1, r), n._sync = e1, r.setTag(`async call #${e1}`), At(`async call #${e1}`);
                            }
                            return e.emit(kt(a.baseInfo.id), {
                                type: t,
                                payload: n
                            }), r?.promise;
                        }, this._callUserModel = async (e, t)=>{
                            try {
                                a[e](t);
                            } catch (t1) {
                                At(`[model method] #${e} not existed`);
                            }
                        }, r = setInterval(()=>{
                            if (i.size > 100) for (const [e, t] of i)t.settled && i.delete(e);
                        }, 18e5);
                    }).finally(()=>{
                        this._status = void 0;
                    }), await s.promise, a.baseInfo;
                }
                async call(e, t = {}) {
                    return this._call?.call(this, e, t);
                }
                async callAsync(e, t = {}) {
                    const n = ct(1e4);
                    return this._call?.call(this, e, t, n);
                }
                async callUserModel(e, t = {}) {
                    return this._callUserModel?.call(this, e, t);
                }
                async _setupIframeSandbox() {
                    const e = this._pluginLocal, t = e.id, n = `${t}_lsp_main`, r = new URL(e.options.entry);
                    r.searchParams.set("__v__", e.options.version);
                    const o = document.querySelector(`#${n}`);
                    o && o.parentElement.removeChild(o);
                    const i = document.createElement("div");
                    i.classList.add("lsp-iframe-sandbox-container"), i.id = n, i.dataset.pid = t;
                    try {
                        const e1 = (await this._pluginLocal._loadLayoutsData())?.$$0;
                        if (e1) {
                            i.dataset.inited_layout = "true";
                            const { width: t1 , height: n1 , left: r1 , top: o1  } = e1;
                            Object.assign(i.style, {
                                width: t1 + "px",
                                height: n1 + "px",
                                left: r1 + "px",
                                top: o1 + "px"
                            });
                        }
                    } catch (e2) {
                        console.error("[Restore Layout Error]", e2);
                    }
                    document.body.appendChild(i);
                    const s = new bt({
                        id: t + "_iframe",
                        container: i,
                        url: r.href,
                        classListArray: [
                            "lsp-iframe-sandbox"
                        ],
                        model: {
                            baseInfo: JSON.parse(JSON.stringify(e.toJSON()))
                        }
                    });
                    let a, c = s.sendHandshake();
                    return this._status = "pending", new Promise((t, n)=>{
                        a = setTimeout(()=>{
                            n(new Error("handshake Timeout")), s.destroy();
                        }, 4e3), c.then((n)=>{
                            this._parent = n, this._connected = !0, this.emit("connected"), n.on(kt(e.id), ({ type: e , payload: t  })=>{
                                At("[user -> *host] ", e, t), this._pluginLocal?.emit(e, t || {});
                            }), this._call = async (...t)=>{
                                await n.call(kt(e.id), {
                                    type: t[0],
                                    payload: Object.assign(t[1] || {}, {
                                        $$pid: e.id
                                    })
                                });
                            }, this._callUserModel = async (e, t)=>{
                                if (e.startsWith(Et)) return await n.get(e.replace(Et, ""));
                                n.call(e, t);
                            }, t(null);
                        }).catch((e)=>{
                            n(e);
                        }).finally(()=>{
                            clearTimeout(a);
                        });
                    }).catch((e)=>{
                        throw At("[iframe sandbox] error", e), e;
                    }).finally(()=>{
                        this._status = void 0;
                    });
                }
                async _setupShadowSandbox() {
                    const e = this._pluginLocal, t = this._shadow = new Ot(e);
                    try {
                        this._status = "pending", await t.load(), this._connected = !0, this.emit("connected"), this._call = async (t, n = {}, r)=>(r && (n.actor = r), this._pluginLocal?.emit(t, Object.assign(n, {
                                $$pid: e.id
                            })), r?.promise), this._callUserModel = async (...e)=>{
                            let t = e[0];
                            t?.startsWith(Et) && (t = t.replace(Et, ""));
                            const n = e[1] || {}, r = this._userModel[t];
                            "function" == typeof r && await r.call(null, n);
                        };
                    } catch (e1) {
                        throw At("[shadow sandbox] error", e1), e1;
                    } finally{
                        this._status = void 0;
                    }
                }
                _extendUserModel(e) {
                    return Object.assign(this._userModel, e);
                }
                _getSandboxIframeContainer() {
                    return this._parent?.frame.parentNode;
                }
                _getSandboxShadowContainer() {
                    return this._shadow?.frame.parentNode;
                }
                _getSandboxIframeRoot() {
                    return this._parent?.frame;
                }
                _getSandboxShadowRoot() {
                    return this._shadow?.frame;
                }
                set debugTag(e) {
                    this._debugTag = e;
                }
                async destroy() {
                    let e = null;
                    this._parent && (e = this._getSandboxIframeContainer(), await this._parent.destroy()), this._shadow && (e = this._getSandboxShadowContainer(), this._shadow.destroy()), e?.parentNode.removeChild(e);
                }
            }
            class It {
                ctx;
                opts;
                constructor(e, t){
                    this.ctx = e, this.opts = t;
                }
                get ctxId() {
                    return this.ctx.baseInfo.id;
                }
                setItem(e, t) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "write-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e,
                            t,
                            this.opts?.assets
                        ]
                    });
                }
                getItem(e) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "read-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e,
                            this.opts?.assets
                        ]
                    });
                }
                removeItem(e) {
                    return this.ctx.caller.call("api:call", {
                        method: "unlink-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e,
                            this.opts?.assets
                        ]
                    });
                }
                allKeys() {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "list-plugin-storage-files",
                        args: [
                            this.ctxId,
                            this.opts?.assets
                        ]
                    });
                }
                clear() {
                    return this.ctx.caller.call("api:call", {
                        method: "clear-plugin-storage-files",
                        args: [
                            this.ctxId,
                            this.opts?.assets
                        ]
                    });
                }
                hasItem(e) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "exist-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e,
                            this.opts?.assets
                        ]
                    });
                }
            }
            class Ft {
                ctx;
                constructor(e){
                    this.ctx = e;
                }
                get React() {
                    return this.ensureHostScope().React;
                }
                get ReactDOM() {
                    return this.ensureHostScope().ReactDOM;
                }
                get pluginLocal() {
                    return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id);
                }
                invokeExperMethod(e, ...t) {
                    const n = this.ensureHostScope();
                    return e = st(e)?.toLowerCase(), n.logseq.api["exper_" + e]?.apply(n, t);
                }
                async loadScripts(...e) {
                    (e = e.map((e)=>e?.startsWith("http") ? e : this.ctx.resolveResourceFullUrl(e))).unshift(this.ctx.baseInfo.id), await this.invokeExperMethod("loadScripts", ...e);
                }
                registerFencedCodeRenderer(e, t) {
                    return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id, e, t);
                }
                registerExtensionsEnhancer(e, t) {
                    const n = this.ensureHostScope();
                    return "katex" === e && n.katex && t(n.katex).catch(console.error), n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id, e, t);
                }
                ensureHostScope() {
                    if (window === top) throw new Error("Can not access host scope!");
                    return top;
                }
            }
            const Lt = (e)=>`task_callback_${e}`;
            class Nt {
                _client;
                _requestId;
                _requestOptions;
                _promise;
                _aborted = !1;
                constructor(e, t, n = {}){
                    this._client = e, this._requestId = t, this._requestOptions = n, this._promise = new Promise((e, t)=>{
                        if (!this._requestId) return t(null);
                        this._client.once(Lt(this._requestId), (n)=>{
                            n && n instanceof Error ? t(n) : e(n);
                        });
                    });
                    const { success: r , fail: o , final: i  } = this._requestOptions;
                    this._promise.then((e)=>{
                        r?.(e);
                    }).catch((e)=>{
                        o?.(e);
                    }).finally(()=>{
                        i?.();
                    });
                }
                abort() {
                    this._requestOptions.abortable && !this._aborted && (this._client.ctx._execCallableAPI("http_request_abort", this._requestId), this._aborted = !0);
                }
                get promise() {
                    return this._promise;
                }
                get client() {
                    return this._client;
                }
                get requestId() {
                    return this._requestId;
                }
            }
            class Mt extends _t.EventEmitter {
                _ctx;
                constructor(e){
                    super(), this._ctx = e, this.ctx.caller.on("#lsp#request#callback", (e)=>{
                        const t = e?.requestId;
                        t && this.emit(Lt(t), e?.payload);
                    });
                }
                static createRequestTask(e, t, n) {
                    return new Nt(e, t, n);
                }
                async _request(e) {
                    const t = this.ctx.baseInfo.id, { success: n , fail: r , final: o , ...i } = e, s = this.ctx.Experiments.invokeExperMethod("request", t, i), a = Mt.createRequestTask(this.ctx.Request, s, e);
                    return i.abortable ? a : a.promise;
                }
                get ctx() {
                    return this._ctx;
                }
            }
            const Rt = Symbol.for("proxy-continue"), Dt = pt()("LSPlugin:user");
            function Pt(e, t, n) {
                if ("function" != typeof n) return !1;
                const { key: r , label: o , desc: i , palette: s , keybinding: a , extras: c  } = t, l = `SimpleCommandHook${r}${++$t}`;
                this.Editor["on" + l](n), this.caller?.call("api:call", {
                    method: "register-plugin-simple-command",
                    args: [
                        this.baseInfo.id,
                        [
                            {
                                key: r,
                                label: o,
                                type: e,
                                desc: i,
                                keybinding: a,
                                extras: c
                            },
                            [
                                "editor/hook",
                                l
                            ]
                        ],
                        s
                    ]
                });
            }
            let Ut = null;
            const zt = {
                async getInfo (e) {
                    return Ut || (Ut = await this._execCallableAPIAsync("get-app-info")), "string" == typeof e ? Ut[e] : Ut;
                },
                registerCommand: Pt,
                registerCommandPalette (e, t) {
                    const { key: n , label: r , keybinding: o  } = e;
                    return Pt.call(this, "$palette$", {
                        key: n,
                        label: r,
                        palette: !0,
                        keybinding: o
                    }, t);
                },
                registerCommandShortcut (e, t) {
                    const { binding: n  } = e, r = "$shortcut$", o = r + st(n);
                    return Pt.call(this, r, {
                        key: o,
                        palette: !1,
                        keybinding: e
                    }, t);
                },
                registerUIItem (e, t) {
                    const n = this.baseInfo.id;
                    this.caller?.call("api:call", {
                        method: "register-plugin-ui-item",
                        args: [
                            n,
                            e,
                            t
                        ]
                    });
                },
                registerPageMenuItem (e, t) {
                    if ("function" != typeof t) return !1;
                    const n = e + "_" + this.baseInfo.id, r = e;
                    Pt.call(this, "page-menu-item", {
                        key: n,
                        label: r
                    }, t);
                },
                setFullScreen (e) {
                    const t = (...e)=>this._callWin("setFullScreen", ...e);
                    "toggle" === e ? this._callWin("isFullScreen").then((e)=>{
                        e ? t() : t(!0);
                    }) : e ? t(!0) : t();
                }
            };
            let $t = 0;
            const Ht = {
                newBlockUUID () {
                    return this._execCallableAPIAsync("new_block_uuid");
                },
                registerSlashCommand (e, t) {
                    Dt("Register slash command #", this.baseInfo.id, e, t), "function" == typeof t && (t = [
                        [
                            "editor/clear-current-slash",
                            !1
                        ],
                        [
                            "editor/restore-saved-cursor"
                        ],
                        [
                            "editor/hook",
                            t
                        ]
                    ]), t = t.map((e)=>{
                        const [t, ...n] = e;
                        if ("editor/hook" === t) {
                            let r = n[0], o = ()=>{
                                this.caller?.callUserModel(r);
                            };
                            "function" == typeof r && (o = r);
                            const i = `SlashCommandHook${t}${++$t}`;
                            e[1] = i, this.Editor["on" + i](o);
                        }
                        return e;
                    }), this.caller?.call("api:call", {
                        method: "register-plugin-slash-command",
                        args: [
                            this.baseInfo.id,
                            [
                                e,
                                t
                            ]
                        ]
                    });
                },
                registerBlockContextMenuItem (e, t) {
                    if ("function" != typeof t) return !1;
                    const n = e + "_" + this.baseInfo.id;
                    Pt.call(this, "block-context-menu-item", {
                        key: n,
                        label: e
                    }, t);
                },
                registerHighlightContextMenuItem (e, t, n) {
                    if ("function" != typeof t) return !1;
                    const r = e + "_" + this.baseInfo.id;
                    Pt.call(this, "highlight-context-menu-item", {
                        key: r,
                        label: e,
                        extras: n
                    }, t);
                },
                scrollToBlockInPage (e, t, n) {
                    const r = "block-content-" + t;
                    n?.replaceState ? this.App.replaceState("page", {
                        name: e
                    }, {
                        anchor: r
                    }) : this.App.pushState("page", {
                        name: e
                    }, {
                        anchor: r
                    });
                }
            }, Bt = {
                onBlockChanged (e, t) {
                    const n = this.baseInfo.id, r = `hook:db:${st(`block:${e}`)}`, o = ({ block: n , txData: r , txMeta: o  })=>{
                        n.uuid === e && t(n, r, o);
                    };
                    return this.caller.on(r, o), this.App._installPluginHook(n, r), ()=>{
                        this.caller.off(r, o), this.App._uninstallPluginHook(n, r);
                    };
                }
            }, qt = {}, Wt = {}, Gt = {
                makeSandboxStorage () {
                    return new It(this, {
                        assets: !0
                    });
                }
            };
            class Jt extends wt() {
                _baseInfo;
                _caller;
                _version = "0.0.10";
                _debugTag = "";
                _settingsSchema;
                _connected = !1;
                _ui = new Map;
                _mFileStorage;
                _mRequest;
                _mExperiments;
                _beforeunloadCallback;
                constructor(e, t){
                    super(), this._baseInfo = e, this._caller = t, t.on("sys:ui:visible", (e)=>{
                        e?.toggle && this.toggleMainUI();
                    }), t.on("settings:changed", (e)=>{
                        const t = Object.assign({}, this.settings), n = Object.assign(this._baseInfo.settings, e);
                        this.emit("settings:changed", {
                            ...n
                        }, t);
                    }), t.on("beforeunload", async (e)=>{
                        const { actor: n , ...r } = e, o = this._beforeunloadCallback;
                        try {
                            o && await o(r), n?.resolve(null);
                        } catch (e1) {
                            console.debug(`${t.debugTag} [beforeunload] `, e1), n?.reject(e1);
                        }
                    });
                }
                async ready(e, t) {
                    if (!this._connected) try {
                        "function" == typeof e && (t = e, e = {});
                        let n = await this._caller.connectToParent(e);
                        this._connected = !0, n = at(this._baseInfo, n), this._settingsSchema && (n.settings = function(e, t) {
                            const n = (t || []).reduce((e, t)=>("default" in t && (e[t.key] = t.default), e), {});
                            return Object.assign(n, e);
                        }(n.settings, this._settingsSchema), await this.useSettingsSchema(this._settingsSchema)), n?.id && (this._debugTag = this._caller.debugTag = `#${n.id} [${n.name}]`);
                        try {
                            await this._execCallableAPIAsync("setSDKMetadata", {
                                version: this._version
                            });
                        } catch (e1) {
                            console.warn(e1);
                        }
                        t && t.call(this, n);
                    } catch (e2) {
                        console.error(`${this._debugTag} [Ready Error]`, e2);
                    }
                }
                ensureConnected() {
                    if (!this._connected) throw new Error("not connected");
                }
                beforeunload(e) {
                    "function" == typeof e && (this._beforeunloadCallback = e);
                }
                provideModel(e) {
                    return this.caller._extendUserModel(e), this;
                }
                provideTheme(e) {
                    return this.caller.call("provider:theme", e), this;
                }
                provideStyle(e) {
                    return this.caller.call("provider:style", e), this;
                }
                provideUI(e) {
                    return this.caller.call("provider:ui", e), this;
                }
                useSettingsSchema(e) {
                    return this.connected && this.caller.call("settings:schema", {
                        schema: e,
                        isSync: !0
                    }), this._settingsSchema = e, this;
                }
                updateSettings(e) {
                    this.caller.call("settings:update", e);
                }
                onSettingsChanged(e) {
                    const t = "settings:changed";
                    return this.on(t, e), ()=>this.off(t, e);
                }
                showSettingsUI() {
                    this.caller.call("settings:visible:changed", {
                        visible: !0
                    });
                }
                hideSettingsUI() {
                    this.caller.call("settings:visible:changed", {
                        visible: !1
                    });
                }
                setMainUIAttrs(e) {
                    this.caller.call("main-ui:attrs", e);
                }
                setMainUIInlineStyle(e) {
                    this.caller.call("main-ui:style", e);
                }
                hideMainUI(e) {
                    const t = {
                        key: 0,
                        visible: !1,
                        cursor: e?.restoreEditingCursor
                    };
                    this.caller.call("main-ui:visible", t), this.emit("ui:visible:changed", t), this._ui.set(t.key, t);
                }
                showMainUI(e) {
                    const t = {
                        key: 0,
                        visible: !0,
                        autoFocus: e?.autoFocus
                    };
                    this.caller.call("main-ui:visible", t), this.emit("ui:visible:changed", t), this._ui.set(t.key, t);
                }
                toggleMainUI() {
                    const e = this._ui.get(0);
                    e && e.visible ? this.hideMainUI() : this.showMainUI();
                }
                get version() {
                    return this._version;
                }
                get isMainUIVisible() {
                    const e = this._ui.get(0);
                    return Boolean(e && e.visible);
                }
                get connected() {
                    return this._connected;
                }
                get baseInfo() {
                    return this._baseInfo;
                }
                get settings() {
                    return this.baseInfo?.settings;
                }
                get caller() {
                    return this._caller;
                }
                resolveResourceFullUrl(e) {
                    if (this.ensureConnected(), e) return e = e.replace(/^[.\\/]+/, ""), function(e, ...t) {
                        try {
                            const n = new URL(e);
                            if (!n.origin) throw new Error(null);
                            const r = it.join(e.substr(n.origin.length), ...t);
                            return n.origin + r;
                        } catch (n1) {
                            return it.join(e, ...t);
                        }
                    }(this._baseInfo.lsr, e);
                }
                _makeUserProxy(e, t) {
                    const n = this, r = this.caller;
                    return new Proxy(e, {
                        get (e, o, i) {
                            const s = e[o];
                            return function(...e) {
                                if (s) {
                                    const r1 = s.apply(n, e.concat(t));
                                    if (r1 !== Rt) return r1;
                                }
                                if (t) {
                                    const i = o.toString().match(/^(once|off|on)/i);
                                    if (null != i) {
                                        const o1 = i[0].toLowerCase(), s1 = i.input.slice(o1.length), a = "off" === o1, c = n.baseInfo.id, l = `hook:${t}:${st(s1)}`, u = e[0];
                                        r[o1](l, u);
                                        const p = ()=>{
                                            r.off(l, u), r.listenerCount(l) || n.App._uninstallPluginHook(c, l);
                                        };
                                        return a ? void p() : (n.App._installPluginHook(c, l), p);
                                    }
                                }
                                let i1 = o;
                                return [
                                    "git",
                                    "ui",
                                    "assets"
                                ].includes(t) && (i1 = t + "_" + i1), r.callAsync("api:call", {
                                    tag: t,
                                    method: i1,
                                    args: e
                                });
                            };
                        }
                    });
                }
                _execCallableAPIAsync(e, ...t) {
                    return this._caller.callAsync("api:call", {
                        method: e,
                        args: t
                    });
                }
                _execCallableAPI(e, ...t) {
                    this._caller.call("api:call", {
                        method: e,
                        args: t
                    });
                }
                _callWin(...e) {
                    return this._execCallableAPIAsync("_callMainWin", ...e);
                }
                get App() {
                    return this._makeUserProxy(zt, "app");
                }
                get Editor() {
                    return this._makeUserProxy(Ht, "editor");
                }
                get DB() {
                    return this._makeUserProxy(Bt, "db");
                }
                get Git() {
                    return this._makeUserProxy(qt, "git");
                }
                get UI() {
                    return this._makeUserProxy(Wt, "ui");
                }
                get Assets() {
                    return this._makeUserProxy(Gt, "assets");
                }
                get FileStorage() {
                    let e = this._mFileStorage;
                    return e || (e = this._mFileStorage = new It(this)), e;
                }
                get Request() {
                    let e = this._mRequest;
                    return e || (e = this._mRequest = new Mt(this)), e;
                }
                get Experiments() {
                    let e = this._mExperiments;
                    return e || (e = this._mExperiments = new Ft(this)), e;
                }
            }
            function Zt(e, t) {
                return new Jt(e, t);
            }
            if (null == window.__LSP__HOST__) {
                const e1 = new jt(null);
                window.logseq = Zt({}, e1);
            }
        })(), r;
    })());

});

parcelRequire("acyZD");
var $a39fab71d1a3f418$var$y = function(y) {
    return y + (y > 0 ? [
        "th",
        "st",
        "nd",
        "rd"
    ][y > 3 && y < 21 || y % 10 > 3 ? 0 : y % 10] : "");
}, $a39fab71d1a3f418$export$e2b71c32630c1aac = function(e, n) {
    var t = e.getFullYear(), r = e.toString().substring(4, 7), u = e.getMonth() + 1, M = e.getDate(), d = e.toLocaleString("default", {
        month: "long"
    });
    if ("MMM do yyyy" === n) return "[[" + r + " " + $a39fab71d1a3f418$var$y(M) + ", " + t + "]]";
    if (n.includes("yyyy") && (n.includes("MM") || n.includes("MMM")) && n.includes("dd") && (n.includes("EEEE") || n.includes("EEE") || n.includes("E"))) {
        var i = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ], a = {
            yyyy: t,
            dd: ("0" + M).slice(-2),
            MM: ("0" + u).slice(-2),
            MMMM: d,
            EEEE: i[e.getDay()],
            EEE: i[e.getDay()].substring(0, 3),
            E: i[e.getDay()].substring(0, 1)
        };
        return "[[" + n.replace(/yyyy|dd|MM|EEEE|EEE|E/gi, function(y) {
            return a[y];
        }) + "]]";
    }
    if ("do MMMM yyyy" === n || "MMMM do, yyyy" === n) {
        var s = {
            yyyy: t,
            do: $a39fab71d1a3f418$var$y(M),
            MMMM: d
        };
        return "[[" + n.replace(/yyyy|do|MMMM/gi, function(y) {
            return s[y];
        }) + "]]";
    }
    if (n.includes("yyyy") && n.includes("MM") && n.includes("dd")) {
        var l = {
            yyyy: t,
            dd: ("0" + M).slice(-2),
            MM: ("0" + u).slice(-2)
        };
        return "[[" + n.replace(/yyyy|dd|MM/gi, function(y) {
            return l[y];
        }) + "]]";
    }
    return "[[" + r + " " + $a39fab71d1a3f418$var$y(M) + ", " + t + "]]";
}, $a39fab71d1a3f418$export$8637516d21336ea9 = function(e, n) {
    var t = e.getFullYear(), r = e.toString().substring(4, 7), u = e.getMonth() + 1, M = e.getDate(), d = e.toLocaleString("default", {
        month: "long"
    });
    if ("MMM do yyyy" === n) return r + " " + $a39fab71d1a3f418$var$y(M) + ", " + t;
    if (n.includes("yyyy") && n.includes("MM") && n.includes("dd") && (n.includes("EEEE") || n.includes("EEE") || n.includes("E"))) {
        var i = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ], a = {
            yyyy: t,
            dd: ("0" + M).slice(-2),
            MM: ("0" + u).slice(-2),
            EEEE: i[e.getDay()],
            EEE: i[e.getDay()].substring(0, 3),
            E: i[e.getDay()].substring(0, 1)
        };
        return "" + n.replace(/yyyy|dd|MM|EEEE|EEE|E/gi, function(y) {
            return a[y];
        });
    }
    if ("do MMMM yyyy" === n || "MMMM do, yyyy" === n) {
        var s = {
            yyyy: t,
            do: $a39fab71d1a3f418$var$y(M),
            MMMM: d
        };
        return "" + n.replace(/yyyy|do|MMMM/gi, function(y) {
            return s[y];
        });
    }
    if (n.includes("yyyy") && n.includes("MM") && n.includes("dd")) {
        var l = {
            yyyy: t,
            dd: ("0" + M).slice(-2),
            MM: ("0" + u).slice(-2)
        };
        return "" + n.replace(/yyyy|dd|MM/gi, function(y) {
            return l[y];
        });
    }
    return "MMMM do, yyyy" === n ? e.toLocaleString("default", {
        month: "long"
    }) + " " + $a39fab71d1a3f418$var$y(M) + ", " + t : "do MMM yyyy" === n ? $a39fab71d1a3f418$var$y(M) + " " + r + " " + t : r + " " + $a39fab71d1a3f418$var$y(M) + ", " + t;
}, $a39fab71d1a3f418$export$9a907ad46f33f892 = function(y) {
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][y.getDay()];
}, $a39fab71d1a3f418$export$a936be8b93495fbf = function(y) {
    return y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate() + " " + $a39fab71d1a3f418$export$9a907ad46f33f892(y).substring(0, 3);
}, $a39fab71d1a3f418$export$f98eabfcd40ac5a7 = function(y) {
    return y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate() + " " + $a39fab71d1a3f418$export$9a907ad46f33f892(y).substring(0, 3) + " " + y.toTimeString().substring(0, 5);
}, $a39fab71d1a3f418$export$2d783977762d002 = function(y) {
    return [
        y.getFullYear(),
        ("0" + (y.getMonth() + 1)).slice(-2),
        ("0" + y.getDate()).slice(-2)
    ].join("-") + "T" + y.toTimeString().substring(0, 5);
}, $a39fab71d1a3f418$export$c17574aee125fc6f = function(y) {
    return [
        y.getFullYear(),
        ("0" + (y.getMonth() + 1)).slice(-2),
        ("0" + y.getDate()).slice(-2)
    ].join("");
};


const $7ab9bdf24f4d1255$var$TASK_MARKERS = new Set([
    "DONE",
    "NOW",
    "LATER"
]);
function $7ab9bdf24f4d1255$var$main() {
    logseq.DB.onChanged(async (e)=>{
        const taskBlock = e.blocks.find((block)=>$7ab9bdf24f4d1255$var$TASK_MARKERS.has(block.marker));
        if (!taskBlock) return;
        const hasCompletedProperty = taskBlock.properties.completed;
        if (taskBlock.marker === "DONE") {
            if (hasCompletedProperty) return;
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const datePage = (0, $a39fab71d1a3f418$export$e2b71c32630c1aac)(new Date, preferredDateFormat);
            logseq.Editor.upsertBlockProperty(taskBlock.uuid, "completed", datePage);
        } else logseq.Editor.removeBlockProperty(taskBlock.uuid, "completed");
    });
}
logseq.ready($7ab9bdf24f4d1255$var$main).catch(console.error);


//# sourceMappingURL=index.js.map
