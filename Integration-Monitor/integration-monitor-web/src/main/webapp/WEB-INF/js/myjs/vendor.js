! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var a in n)("object" == typeof exports ? exports : e)[a] = n[a] } }(this, function() {
    return function(e) {
        function t(n) {
            if (a[n]) return a[n].exports;
            var r = a[n] = { exports: {}, id: n, loaded: !1 };
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
        var n = window.webpackJsonp;
        window.webpackJsonp = function(i, s) {
            for (var o, d, u = 0, l = []; u < i.length; u++) d = i[u], r[d] && l.push.apply(l, r[d]), r[d] = 0;
            for (o in s) e[o] = s[o];
            for (n && n(i, s); l.length;) l.shift().call(null, t);
            return s[0] ? (a[0] = 0, t(0)) : void 0 };
        var a = {},
            r = { 5: 0 };
        return t.e = function(e, n) {
            if (0 === r[e]) return n.call(null, t);
            if (void 0 !== r[e]) r[e].push(n);
            else { r[e] = [n];
                var a = document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = t.p + "" + e + "." + ({ 0: "account", 1: "groups", 2: "message", 3: "product", 4: "profile" }[e] || e) + ".js", a.appendChild(i) } }, t.m = e, t.c = a, t.p = "", t(0) }([function(e, t, n) { n(1), n(11), n(7), n(2), n(8), n(9), n(10), e.exports = n(95) }, function(e, t, n) {
        var a, r;
        /*!
         * jQuery JavaScript Library v1.11.3
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-04-28T16:19Z
         */
        ! function(t, n) { "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e) } : n(t) }("undefined" != typeof window ? window : this, function(n, i) {
            function s(e) {
                var t = "length" in e && e.length,
                    n = de.type(e);
                return "function" === n || de.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e }

            function o(e, t, n) {
                if (de.isFunction(t)) return de.grep(e, function(e, a) {
                    return !!t.call(e, a, e) !== n });
                if (t.nodeType) return de.grep(e, function(e) {
                    return e === t !== n });
                if ("string" == typeof t) {
                    if (pe.test(t)) return de.filter(t, e, n);
                    t = de.filter(t, e) }
                return de.grep(e, function(e) {
                    return de.inArray(e, t) >= 0 !== n }) }

            function d(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
                return e }

            function u(e) {
                var t = ke[e] = {};
                return de.each(e.match(De) || [], function(e, n) { t[n] = !0 }), t }

            function l() { ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", c, !1), n.removeEventListener("load", c, !1)) : (ge.detachEvent("onreadystatechange", c), n.detachEvent("onload", c)) }

            function c() {
                (ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (l(), de.ready()) }

            function f(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var a = "data-" + t.replace(Se, "-$1").toLowerCase();
                    if (n = e.getAttribute(a), "string" == typeof n) {
                        try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? de.parseJSON(n) : n } catch (r) {}
                        de.data(e, t, n) } else n = void 0 }
                return n }

            function h(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !de.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0 }

            function m(e, t, n, a) {
                if (de.acceptData(e)) {
                    var r, i, s = de.expando,
                        o = e.nodeType,
                        d = o ? de.cache : e,
                        u = o ? e[s] : e[s] && s;
                    if (u && d[u] && (a || d[u].data) || void 0 !== n || "string" != typeof t) return u || (u = o ? e[s] = Z.pop() || de.guid++ : s), d[u] || (d[u] = o ? {} : { toJSON: de.noop }), ("object" == typeof t || "function" == typeof t) && (a ? d[u] = de.extend(d[u], t) : d[u].data = de.extend(d[u].data, t)), i = d[u], a || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[de.camelCase(t)] = n), "string" == typeof t ? (r = i[t], null == r && (r = i[de.camelCase(t)])) : r = i, r } }

            function _(e, t, n) {
                if (de.acceptData(e)) {
                    var a, r, i = e.nodeType,
                        s = i ? de.cache : e,
                        o = i ? e[de.expando] : de.expando;
                    if (s[o]) {
                        if (t && (a = n ? s[o] : s[o].data)) { de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in a ? t = [t] : (t = de.camelCase(t), t = t in a ? [t] : t.split(" ")), r = t.length;
                            for (; r--;) delete a[t[r]];
                            if (n ? !h(a) : !de.isEmptyObject(a)) return }(n || (delete s[o].data, h(s[o]))) && (i ? de.cleanData([e], !0) : se.deleteExpando || s != s.window ? delete s[o] : s[o] = null) } } }

            function p() {
                return !0 }

            function y() {
                return !1 }

            function g() {
                try {
                    return ge.activeElement } catch (e) {} }

            function v(e) {
                var t = Ne.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n }

            function M(e, t) {
                var n, a, r = 0,
                    i = typeof e.getElementsByTagName !== be ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== be ? e.querySelectorAll(t || "*") : void 0;
                if (!i)
                    for (i = [], n = e.childNodes || e; null != (a = n[r]); r++) !t || de.nodeName(a, t) ? i.push(a) : de.merge(i, M(a, t));
                return void 0 === t || t && de.nodeName(e, t) ? de.merge([e], i) : i }

            function L(e) { Ae.test(e.type) && (e.defaultChecked = e.checked) }

            function Y(e, t) {
                return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

            function D(e) {
                return e.type = (null !== de.find.attr(e, "type")) + "/" + e.type, e }

            function k(e) {
                var t = Ke.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e }

            function w(e, t) {
                for (var n, a = 0; null != (n = e[a]); a++) de._data(n, "globalEval", !t || de._data(t[a], "globalEval")) }

            function T(e, t) {
                if (1 === t.nodeType && de.hasData(e)) {
                    var n, a, r, i = de._data(e),
                        s = de._data(t, i),
                        o = i.events;
                    if (o) { delete s.handle, s.events = {};
                        for (n in o)
                            for (a = 0, r = o[n].length; r > a; a++) de.event.add(t, n, o[n][a]) }
                    s.data && (s.data = de.extend({}, s.data)) } }

            function b(e, t) {
                var n, a, r;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !se.noCloneEvent && t[de.expando]) { r = de._data(t);
                        for (a in r.events) de.removeEvent(t, a, r.handle);
                        t.removeAttribute(de.expando) } "script" === n && t.text !== e.text ? (D(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), se.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } }

            function x(e, t) {
                var a, r = de(t.createElement(e)).appendTo(t.body),
                    i = n.getDefaultComputedStyle && (a = n.getDefaultComputedStyle(r[0])) ? a.display : de.css(r[0], "display");
                return r.detach(), i }

            function S(e) {
                var t = ge,
                    n = at[e];
                return n || (n = x(e, t), "none" !== n && n || (nt = (nt || de("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (nt[0].contentWindow || nt[0].contentDocument).document, t.write(), t.close(), n = x(e, t), nt.detach()), at[e] = n), n }

            function j(e, t) {
                return { get: function() {
                        var n = e();
                        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments) } } }

            function E(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), a = t, r = pt.length; r--;)
                    if (t = pt[r] + n, t in e) return t;
                return a }

            function F(e, t) {
                for (var n, a, r, i = [], s = 0, o = e.length; o > s; s++) a = e[s], a.style && (i[s] = de._data(a, "olddisplay"), n = a.style.display, t ? (i[s] || "none" !== n || (a.style.display = ""), "" === a.style.display && Fe(a) && (i[s] = de._data(a, "olddisplay", S(a.nodeName)))) : (r = Fe(a), (n && "none" !== n || !r) && de._data(a, "olddisplay", r ? n : de.css(a, "display"))));
                for (s = 0; o > s; s++) a = e[s], a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? i[s] || "" : "none"));
                return e }

            function C(e, t, n) {
                var a = ft.exec(t);
                return a ? Math.max(0, a[1] - (n || 0)) + (a[2] || "px") : t }

            function A(e, t, n, a, r) {
                for (var i = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += de.css(e, n + Ee[i], !0, r)), a ? ("content" === n && (s -= de.css(e, "padding" + Ee[i], !0, r)), "margin" !== n && (s -= de.css(e, "border" + Ee[i] + "Width", !0, r))) : (s += de.css(e, "padding" + Ee[i], !0, r), "padding" !== n && (s += de.css(e, "border" + Ee[i] + "Width", !0, r)));
                return s }

            function P(e, t, n) {
                var a = !0,
                    r = "width" === t ? e.offsetWidth : e.offsetHeight,
                    i = rt(e),
                    s = se.boxSizing && "border-box" === de.css(e, "boxSizing", !1, i);
                if (0 >= r || null == r) {
                    if (r = it(e, t, i), (0 > r || null == r) && (r = e.style[t]), ot.test(r)) return r;
                    a = s && (se.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0 }
                return r + A(e, t, n || (s ? "border" : "content"), a, i) + "px" }

            function H(e, t, n, a, r) {
                return new H.prototype.init(e, t, n, a, r) }

            function W() {
                return setTimeout(function() { yt = void 0 }), yt = de.now() }

            function O(e, t) {
                var n, a = { height: e },
                    r = 0;
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ee[r], a["margin" + n] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a }

            function z(e, t, n) {
                for (var a, r = (Dt[t] || []).concat(Dt["*"]), i = 0, s = r.length; s > i; i++)
                    if (a = r[i].call(n, t, e)) return a }

            function N(e, t, n) {
                var a, r, i, s, o, d, u, l, c = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && Fe(e),
                    _ = de._data(e, "fxshow");
                n.queue || (o = de._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, d = o.empty.fire, o.empty.fire = function() { o.unqueued || d() }), o.unqueued++, c.always(function() { c.always(function() { o.unqueued--, de.queue(e, "fx").length || o.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = de.css(e, "display"), l = "none" === u ? de._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === l && "none" === de.css(e, "float") && (se.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", se.shrinkWrapBlocks() || c.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] }));
                for (a in t)
                    if (r = t[a], vt.exec(r)) {
                        if (delete t[a], i = i || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !_ || void 0 === _[a]) continue;
                            m = !0 }
                        f[a] = _ && _[a] || de.style(e, a) } else u = void 0;
                if (de.isEmptyObject(f)) "inline" === ("none" === u ? S(e.nodeName) : u) && (h.display = u);
                else { _ ? "hidden" in _ && (m = _.hidden) : _ = de._data(e, "fxshow", {}), i && (_.hidden = !m), m ? de(e).show() : c.done(function() { de(e).hide() }), c.done(function() {
                        var t;
                        de._removeData(e, "fxshow");
                        for (t in f) de.style(e, t, f[t]) });
                    for (a in f) s = z(m ? _[a] : 0, a, c), a in _ || (_[a] = s.start, m && (s.end = s.start, s.start = "width" === a || "height" === a ? 1 : 0)) } }

            function I(e, t) {
                var n, a, r, i, s;
                for (n in e)
                    if (a = de.camelCase(n), r = t[a], i = e[n], de.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== a && (e[a] = i, delete e[n]), s = de.cssHooks[a], s && "expand" in s) { i = s.expand(i), delete e[a];
                        for (n in i) n in e || (e[n] = i[n], t[n] = r) } else t[a] = r }

            function R(e, t, n) {
                var a, r, i = 0,
                    s = Yt.length,
                    o = de.Deferred().always(function() { delete d.elem }),
                    d = function() {
                        if (r) return !1;
                        for (var t = yt || W(), n = Math.max(0, u.startTime + u.duration - t), a = n / u.duration || 0, i = 1 - a, s = 0, d = u.tweens.length; d > s; s++) u.tweens[s].run(i);
                        return o.notifyWith(e, [u, i, n]), 1 > i && d ? n : (o.resolveWith(e, [u]), !1) },
                    u = o.promise({ elem: e, props: de.extend({}, t), opts: de.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: yt || W(), duration: n.duration, tweens: [], createTween: function(t, n) {
                            var a = de.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(a), a }, stop: function(t) {
                            var n = 0,
                                a = t ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; a > n; n++) u.tweens[n].run(1);
                            return t ? o.resolveWith(e, [u, t]) : o.rejectWith(e, [u, t]), this } }),
                    l = u.props;
                for (I(l, u.opts.specialEasing); s > i; i++)
                    if (a = Yt[i].call(u, e, l, u.opts)) return a;
                return de.map(l, z, u), de.isFunction(u.opts.start) && u.opts.start.call(e, u), de.fx.timer(de.extend(d, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

            function B(e) {
                return function(t, n) { "string" != typeof t && (n = t, t = "*");
                    var a, r = 0,
                        i = t.toLowerCase().match(De) || [];
                    if (de.isFunction(n))
                        for (; a = i[r++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n) } }

            function U(e, t, n, a) {
                function r(o) {
                    var d;
                    return i[o] = !0, de.each(e[o] || [], function(e, o) {
                        var u = o(t, n, a);
                        return "string" != typeof u || s || i[u] ? s ? !(d = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1) }), d }
                var i = {},
                    s = e === Jt;
                return r(t.dataTypes[0]) || !i["*"] && r("*") }

            function q(e, t) {
                var n, a, r = de.ajaxSettings.flatOptions || {};
                for (a in t) void 0 !== t[a] && ((r[a] ? e : n || (n = {}))[a] = t[a]);
                return n && de.extend(!0, e, n), e }

            function $(e, t, n) {
                for (var a, r, i, s, o = e.contents, d = e.dataTypes;
                    "*" === d[0];) d.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (s in o)
                        if (o[s] && o[s].test(r)) { d.unshift(s);
                            break }
                if (d[0] in n) i = d[0];
                else {
                    for (s in n) {
                        if (!d[0] || e.converters[s + " " + d[0]]) { i = s;
                            break }
                        a || (a = s) }
                    i = i || a }
                return i ? (i !== d[0] && d.unshift(i), n[i]) : void 0 }

            function J(e, t, n, a) {
                var r, i, s, o, d, u = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                for (i = l.shift(); i;)
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t), !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = i, i = l.shift())
                        if ("*" === i) i = d;
                        else if ("*" !== d && d !== i) {
                    if (s = u[d + " " + i] || u["* " + i], !s)
                        for (r in u)
                            if (o = r.split(" "), o[1] === i && (s = u[d + " " + o[0]] || u["* " + o[0]])) { s === !0 ? s = u[r] : u[r] !== !0 && (i = o[0], l.unshift(o[1]));
                                break }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else try { t = s(t) } catch (c) {
                            return { state: "parsererror", error: s ? c : "No conversion from " + d + " to " + i } } }
                return { state: "success", data: t } }

            function V(e, t, n, a) {
                var r;
                if (de.isArray(t)) de.each(t, function(t, r) { n || Kt.test(e) ? a(e, r) : V(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, a) });
                else if (n || "object" !== de.type(t)) a(e, t);
                else
                    for (r in t) V(e + "[" + r + "]", t[r], n, a) }

            function G() {
                try {
                    return new n.XMLHttpRequest } catch (e) {} }

            function X() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

            function K(e) {
                return de.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
            var Z = [],
                Q = Z.slice,
                ee = Z.concat,
                te = Z.push,
                ne = Z.indexOf,
                ae = {},
                re = ae.toString,
                ie = ae.hasOwnProperty,
                se = {},
                oe = "1.11.3",
                de = function(e, t) {
                    return new de.fn.init(e, t) },
                ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                le = /^-ms-/,
                ce = /-([\da-z])/gi,
                fe = function(e, t) {
                    return t.toUpperCase() };
            de.fn = de.prototype = { jquery: oe, constructor: de, selector: "", length: 0, toArray: function() {
                    return Q.call(this) }, get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this) }, pushStack: function(e) {
                    var t = de.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t }, each: function(e, t) {
                    return de.each(this, e, t) }, map: function(e) {
                    return this.pushStack(de.map(this, function(t, n) {
                        return e.call(t, n, t) })) }, slice: function() {
                    return this.pushStack(Q.apply(this, arguments)) }, first: function() {
                    return this.eq(0) }, last: function() {
                    return this.eq(-1) }, eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() {
                    return this.prevObject || this.constructor(null) }, push: te, sort: Z.sort, splice: Z.splice }, de.extend = de.fn.extend = function() {
                var e, t, n, a, r, i, s = arguments[0] || {},
                    o = 1,
                    d = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || de.isFunction(s) || (s = {}), o === d && (s = this, o--); d > o; o++)
                    if (null != (r = arguments[o]))
                        for (a in r) e = s[a], n = r[a], s !== n && (u && n && (de.isPlainObject(n) || (t = de.isArray(n))) ? (t ? (t = !1, i = e && de.isArray(e) ? e : []) : i = e && de.isPlainObject(e) ? e : {}, s[a] = de.extend(u, i, n)) : void 0 !== n && (s[a] = n));
                return s }, de.extend({ expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
                    throw new Error(e) }, noop: function() {}, isFunction: function(e) {
                    return "function" === de.type(e) }, isArray: Array.isArray || function(e) {
                    return "array" === de.type(e) }, isWindow: function(e) {
                    return null != e && e == e.window }, isNumeric: function(e) {
                    return !de.isArray(e) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0 }, isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                        return !1 }
                    if (se.ownLast)
                        for (t in e) return ie.call(e, t);
                    for (t in e);
                    return void 0 === t || ie.call(e, t) }, type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[re.call(e)] || "object" : typeof e }, globalEval: function(e) { e && de.trim(e) && (n.execScript || function(e) { n.eval.call(n, e) })(e) }, camelCase: function(e) {
                    return e.replace(le, "ms-").replace(ce, fe) }, nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, n) {
                    var a, r = 0,
                        i = e.length,
                        o = s(e);
                    if (n) {
                        if (o)
                            for (; i > r && (a = t.apply(e[r], n), a !== !1); r++);
                        else
                            for (r in e)
                                if (a = t.apply(e[r], n), a === !1) break } else if (o)
                        for (; i > r && (a = t.call(e[r], r, e[r]), a !== !1); r++);
                    else
                        for (r in e)
                            if (a = t.call(e[r], r, e[r]), a === !1) break; return e }, trim: function(e) {
                    return null == e ? "" : (e + "").replace(ue, "") }, makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (s(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n }, inArray: function(e, t, n) {
                    var a;
                    if (t) {
                        if (ne) return ne.call(t, e, n);
                        for (a = t.length, n = n ? 0 > n ? Math.max(0, a + n) : n : 0; a > n; n++)
                            if (n in t && t[n] === e) return n }
                    return -1 }, merge: function(e, t) {
                    for (var n = +t.length, a = 0, r = e.length; n > a;) e[r++] = t[a++];
                    if (n !== n)
                        for (; void 0 !== t[a];) e[r++] = t[a++];
                    return e.length = r, e }, grep: function(e, t, n) {
                    for (var a, r = [], i = 0, s = e.length, o = !n; s > i; i++) a = !t(e[i], i), a !== o && r.push(e[i]);
                    return r }, map: function(e, t, n) {
                    var a, r = 0,
                        i = e.length,
                        o = s(e),
                        d = [];
                    if (o)
                        for (; i > r; r++) a = t(e[r], r, n), null != a && d.push(a);
                    else
                        for (r in e) a = t(e[r], r, n), null != a && d.push(a);
                    return ee.apply([], d) }, guid: 1, proxy: function(e, t) {
                    var n, a, r;
                    return "string" == typeof t && (r = e[t], t = e, e = r), de.isFunction(e) ? (n = Q.call(arguments, 2), a = function() {
                        return e.apply(t || this, n.concat(Q.call(arguments))) }, a.guid = e.guid = e.guid || de.guid++, a) : void 0 }, now: function() {
                    return +new Date }, support: se }), de.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { ae["[object " + t + "]"] = t.toLowerCase() });
            var he =
                /*!
                 * Sizzle CSS Selector Engine v2.2.0-pre
                 * http://sizzlejs.com/
                 *
                 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2014-12-16
                 */
                function(e) {
                    function t(e, t, n, a) {
                        var r, i, s, o, d, u, c, h, m, _;
                        if ((t ? t.ownerDocument || t : N) !== F && E(t), t = t || F, n = n || [], o = t.nodeType, "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return n;
                        if (!a && A) {
                            if (11 !== o && (r = ge.exec(e)))
                                if (s = r[1]) {
                                    if (9 === o) {
                                        if (i = t.getElementById(s), !i || !i.parentNode) return n;
                                        if (i.id === s) return n.push(i), n } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(s)) && O(t, i) && i.id === s) return n.push(i), n } else {
                                    if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                    if ((s = r[3]) && L.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n }
                            if (L.qsa && (!P || !P.test(e))) {
                                if (h = c = z, m = t, _ = 1 !== o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                                    for (u = w(e), (c = t.getAttribute("id")) ? h = c.replace(Me, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", d = u.length; d--;) u[d] = h + f(u[d]);
                                    m = ve.test(e) && l(t.parentNode) || t, _ = u.join(",") }
                                if (_) try {
                                    return Z.apply(n, m.querySelectorAll(_)), n } catch (p) {} finally { c || t.removeAttribute("id") } } }
                        return b(e.replace(de, "$1"), t, n, a) }

                    function n() {
                        function e(n, a) {
                            return t.push(n + " ") > Y.cacheLength && delete e[t.shift()], e[n + " "] = a }
                        var t = [];
                        return e }

                    function a(e) {
                        return e[z] = !0, e }

                    function r(e) {
                        var t = F.createElement("div");
                        try {
                            return !!e(t) } catch (n) {
                            return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                    function i(e, t) {
                        for (var n = e.split("|"), a = e.length; a--;) Y.attrHandle[n[a]] = t }

                    function s(e, t) {
                        var n = t && e,
                            a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                        if (a) return a;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1 }

                    function o(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e } }

                    function d(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e } }

                    function u(e) {
                        return a(function(t) {
                            return t = +t, a(function(n, a) {
                                for (var r, i = e([], n.length, t), s = i.length; s--;) n[r = i[s]] && (n[r] = !(a[r] = n[r])) }) }) }

                    function l(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e }

                    function c() {}

                    function f(e) {
                        for (var t = 0, n = e.length, a = ""; n > t; t++) a += e[t].value;
                        return a }

                    function h(e, t, n) {
                        var a = t.dir,
                            r = n && "parentNode" === a,
                            i = R++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[a];)
                                if (1 === t.nodeType || r) return e(t, n, i) } : function(t, n, s) {
                            var o, d, u = [I, i];
                            if (s) {
                                for (; t = t[a];)
                                    if ((1 === t.nodeType || r) && e(t, n, s)) return !0 } else
                                for (; t = t[a];)
                                    if (1 === t.nodeType || r) {
                                        if (d = t[z] || (t[z] = {}), (o = d[a]) && o[0] === I && o[1] === i) return u[2] = o[2];
                                        if (d[a] = u, u[2] = e(t, n, s)) return !0 } } }

                    function m(e) {
                        return e.length > 1 ? function(t, n, a) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, a)) return !1;
                            return !0 } : e[0] }

                    function _(e, n, a) {
                        for (var r = 0, i = n.length; i > r; r++) t(e, n[r], a);
                        return a }

                    function p(e, t, n, a, r) {
                        for (var i, s = [], o = 0, d = e.length, u = null != t; d > o; o++)(i = e[o]) && (!n || n(i, a, r)) && (s.push(i), u && t.push(o));
                        return s }

                    function y(e, t, n, r, i, s) {
                        return r && !r[z] && (r = y(r)), i && !i[z] && (i = y(i, s)), a(function(a, s, o, d) {
                            var u, l, c, f = [],
                                h = [],
                                m = s.length,
                                y = a || _(t || "*", o.nodeType ? [o] : o, []),
                                g = !e || !a && t ? y : p(y, f, e, o, d),
                                v = n ? i || (a ? e : m || r) ? [] : s : g;
                            if (n && n(g, v, o, d), r)
                                for (u = p(v, h), r(u, [], o, d), l = u.length; l--;)(c = u[l]) && (v[h[l]] = !(g[h[l]] = c));
                            if (a) {
                                if (i || e) {
                                    if (i) {
                                        for (u = [], l = v.length; l--;)(c = v[l]) && u.push(g[l] = c);
                                        i(null, v = [], u, d) }
                                    for (l = v.length; l--;)(c = v[l]) && (u = i ? ee(a, c) : f[l]) > -1 && (a[u] = !(s[u] = c)) } } else v = p(v === s ? v.splice(m, v.length) : v), i ? i(null, s, v, d) : Z.apply(s, v) }) }

                    function g(e) {
                        for (var t, n, a, r = e.length, i = Y.relative[e[0].type], s = i || Y.relative[" "], o = i ? 1 : 0, d = h(function(e) {
                                return e === t }, s, !0), u = h(function(e) {
                                return ee(t, e) > -1 }, s, !0), l = [function(e, n, a) {
                                var r = !i && (a || n !== x) || ((t = n).nodeType ? d(e, n, a) : u(e, n, a));
                                return t = null, r }]; r > o; o++)
                            if (n = Y.relative[e[o].type]) l = [h(m(l), n)];
                            else {
                                if (n = Y.filter[e[o].type].apply(null, e[o].matches), n[z]) {
                                    for (a = ++o; r > a && !Y.relative[e[a].type]; a++);
                                    return y(o > 1 && m(l), o > 1 && f(e.slice(0, o - 1).concat({ value: " " === e[o - 2].type ? "*" : "" })).replace(de, "$1"), n, a > o && g(e.slice(o, a)), r > a && g(e = e.slice(a)), r > a && f(e)) }
                                l.push(n) }
                        return m(l) }

                    function v(e, n) {
                        var r = n.length > 0,
                            i = e.length > 0,
                            s = function(a, s, o, d, u) {
                                var l, c, f, h = 0,
                                    m = "0",
                                    _ = a && [],
                                    y = [],
                                    g = x,
                                    v = a || i && Y.find.TAG("*", u),
                                    M = I += null == g ? 1 : Math.random() || .1,
                                    L = v.length;
                                for (u && (x = s !== F && s); m !== L && null != (l = v[m]); m++) {
                                    if (i && l) {
                                        for (c = 0; f = e[c++];)
                                            if (f(l, s, o)) { d.push(l);
                                                break }
                                        u && (I = M) }
                                    r && ((l = !f && l) && h--, a && _.push(l)) }
                                if (h += m, r && m !== h) {
                                    for (c = 0; f = n[c++];) f(_, y, s, o);
                                    if (a) {
                                        if (h > 0)
                                            for (; m--;) _[m] || y[m] || (y[m] = X.call(d));
                                        y = p(y) }
                                    Z.apply(d, y), u && !a && y.length > 0 && h + n.length > 1 && t.uniqueSort(d) }
                                return u && (I = M, x = g), _ };
                        return r ? a(s) : s }
                    var M, L, Y, D, k, w, T, b, x, S, j, E, F, C, A, P, H, W, O, z = "sizzle" + 1 * new Date,
                        N = e.document,
                        I = 0,
                        R = 0,
                        B = n(),
                        U = n(),
                        q = n(),
                        $ = function(e, t) {
                            return e === t && (j = !0), 0 },
                        J = 1 << 31,
                        V = {}.hasOwnProperty,
                        G = [],
                        X = G.pop,
                        K = G.push,
                        Z = G.push,
                        Q = G.slice,
                        ee = function(e, t) {
                            for (var n = 0, a = e.length; a > n; n++)
                                if (e[n] === t) return n;
                            return -1 },
                        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        ne = "[\\x20\\t\\r\\n\\f]",
                        ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        re = ae.replace("w", "w#"),
                        ie = "\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                        se = ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                        oe = new RegExp(ne + "+", "g"),
                        de = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                        ue = new RegExp("^" + ne + "*," + ne + "*"),
                        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                        fe = new RegExp(se),
                        he = new RegExp("^" + re + "$"),
                        me = { ID: new RegExp("^#(" + ae + ")"), CLASS: new RegExp("^\\.(" + ae + ")"), TAG: new RegExp("^(" + ae.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + se), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                        _e = /^(?:input|select|textarea|button)$/i,
                        pe = /^h\d$/i,
                        ye = /^[^{]+\{\s*\[native \w/,
                        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ve = /[+~]/,
                        Me = /'|\\/g,
                        Le = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                        Ye = function(e, t, n) {
                            var a = "0x" + t - 65536;
                            return a !== a || n ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320) },
                        De = function() { E() };
                    try { Z.apply(G = Q.call(N.childNodes), N.childNodes), G[N.childNodes.length].nodeType } catch (ke) { Z = { apply: G.length ? function(e, t) { K.apply(e, Q.call(t)) } : function(e, t) {
                                for (var n = e.length, a = 0; e[n++] = t[a++];);
                                e.length = n - 1 } } }
                    L = t.support = {}, k = t.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return t ? "HTML" !== t.nodeName : !1 }, E = t.setDocument = function(e) {
                        var t, n, a = e ? e.ownerDocument || e : N;
                        return a !== F && 9 === a.nodeType && a.documentElement ? (F = a, C = a.documentElement, n = a.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", De, !1) : n.attachEvent && n.attachEvent("onunload", De)), A = !k(a), L.attributes = r(function(e) {
                            return e.className = "i", !e.getAttribute("className") }), L.getElementsByTagName = r(function(e) {
                            return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length }), L.getElementsByClassName = ye.test(a.getElementsByClassName), L.getById = r(function(e) {
                            return C.appendChild(e).id = z, !a.getElementsByName || !a.getElementsByName(z).length }), L.getById ? (Y.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && A) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : [] } }, Y.filter.ID = function(e) {
                            var t = e.replace(Le, Ye);
                            return function(e) {
                                return e.getAttribute("id") === t } }) : (delete Y.find.ID, Y.filter.ID = function(e) {
                            var t = e.replace(Le, Ye);
                            return function(e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t } }), Y.find.TAG = L.getElementsByTagName ? function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : L.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                            var n, a = [],
                                r = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[r++];) 1 === n.nodeType && a.push(n);
                                return a }
                            return i }, Y.find.CLASS = L.getElementsByClassName && function(e, t) {
                            return A ? t.getElementsByClassName(e) : void 0 }, H = [], P = [], (L.qsa = ye.test(a.querySelectorAll)) && (r(function(e) { C.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || P.push(".#.+[+~]") }), r(function(e) {
                            var t = a.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:") })), (L.matchesSelector = ye.test(W = C.matches || C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && r(function(e) { L.disconnectedMatch = W.call(e, "div"), W.call(e, "[s!='']:x"), H.push("!=", se) }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), t = ye.test(C.compareDocumentPosition), O = t || ye.test(C.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                a = t && t.parentNode;
                            return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))) } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1 }, $ = t ? function(e, t) {
                            if (e === t) return j = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !L.sortDetached && t.compareDocumentPosition(e) === n ? e === a || e.ownerDocument === N && O(N, e) ? -1 : t === a || t.ownerDocument === N && O(N, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                            if (e === t) return j = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                d = [e],
                                u = [t];
                            if (!i || !o) return e === a ? -1 : t === a ? 1 : i ? -1 : o ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                            if (i === o) return s(e, t);
                            for (n = e; n = n.parentNode;) d.unshift(n);
                            for (n = t; n = n.parentNode;) u.unshift(n);
                            for (; d[r] === u[r];) r++;
                            return r ? s(d[r], u[r]) : d[r] === N ? -1 : u[r] === N ? 1 : 0 }, a) : F }, t.matches = function(e, n) {
                        return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                        if ((e.ownerDocument || e) !== F && E(e), n = n.replace(ce, "='$1']"), L.matchesSelector && A && (!H || !H.test(n)) && (!P || !P.test(n))) try {
                            var a = W.call(e, n);
                            if (a || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a } catch (r) {}
                        return t(n, F, null, [e]).length > 0 }, t.contains = function(e, t) {
                        return (e.ownerDocument || e) !== F && E(e), O(e, t) }, t.attr = function(e, t) {
                        (e.ownerDocument || e) !== F && E(e);
                        var n = Y.attrHandle[t.toLowerCase()],
                            a = n && V.call(Y.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
                        return void 0 !== a ? a : L.attributes || !A ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null }, t.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                        var t, n = [],
                            a = 0,
                            r = 0;
                        if (j = !L.detectDuplicates, S = !L.sortStable && e.slice(0), e.sort($), j) {
                            for (; t = e[r++];) t === e[r] && (a = n.push(r));
                            for (; a--;) e.splice(n[a], 1) }
                        return S = null, e }, D = t.getText = function(e) {
                        var t, n = "",
                            a = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += D(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                            for (; t = e[a++];) n += D(t);
                        return n }, Y = t.selectors = { cacheLength: 50, createPseudo: a, match: me, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                                return e[1] = e[1].replace(Le, Ye), e[3] = (e[3] || e[4] || e[5] || "").replace(Le, Ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return me.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = w(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                                var t = e.replace(Le, Ye).toLowerCase();
                                return "*" === e ? function() {
                                    return !0 } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                                var t = B[e + " "];
                                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, a) {
                                return function(r) {
                                    var i = t.attr(r, e);
                                    return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && i.indexOf(a) > -1 : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(a) > -1 : "|=" === n ? i === a || i.slice(0, a.length + 1) === a + "-" : !1) : !0 } }, CHILD: function(e, t, n, a, r) {
                                var i = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    o = "of-type" === t;
                                return 1 === a && 0 === r ? function(e) {
                                    return !!e.parentNode } : function(t, n, d) {
                                    var u, l, c, f, h, m, _ = i !== s ? "nextSibling" : "previousSibling",
                                        p = t.parentNode,
                                        y = o && t.nodeName.toLowerCase(),
                                        g = !d && !o;
                                    if (p) {
                                        if (i) {
                                            for (; _;) {
                                                for (c = t; c = c[_];)
                                                    if (o ? c.nodeName.toLowerCase() === y : 1 === c.nodeType) return !1;
                                                m = _ = "only" === e && !m && "nextSibling" }
                                            return !0 }
                                        if (m = [s ? p.firstChild : p.lastChild], s && g) {
                                            for (l = p[z] || (p[z] = {}), u = l[e] || [], h = u[0] === I && u[1], f = u[0] === I && u[2], c = h && p.childNodes[h]; c = ++h && c && c[_] || (f = h = 0) || m.pop();)
                                                if (1 === c.nodeType && ++f && c === t) { l[e] = [I, h, f];
                                                    break } } else if (g && (u = (t[z] || (t[z] = {}))[e]) && u[0] === I) f = u[1];
                                        else
                                            for (;
                                                (c = ++h && c && c[_] || (f = h = 0) || m.pop()) && ((o ? c.nodeName.toLowerCase() !== y : 1 !== c.nodeType) || !++f || (g && ((c[z] || (c[z] = {}))[e] = [I, f]), c !== t)););
                                        return f -= r, f === a || f % a === 0 && f / a >= 0 } } }, PSEUDO: function(e, n) {
                                var r, i = Y.pseudos[e] || Y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return i[z] ? i(n) : i.length > 1 ? (r = [e, e, "", n], Y.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                                    for (var a, r = i(e, n), s = r.length; s--;) a = ee(e, r[s]), e[a] = !(t[a] = r[s]) }) : function(e) {
                                    return i(e, 0, r) }) : i } }, pseudos: { not: a(function(e) {
                                var t = [],
                                    n = [],
                                    r = T(e.replace(de, "$1"));
                                return r[z] ? a(function(e, t, n, a) {
                                    for (var i, s = r(e, null, a, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i)) }) : function(e, a, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop() } }), has: a(function(e) {
                                return function(n) {
                                    return t(e, n).length > 0 } }), contains: a(function(e) {
                                return e = e.replace(Le, Ye),
                                    function(t) {
                                        return (t.textContent || t.innerText || D(t)).indexOf(e) > -1 } }), lang: a(function(e) {
                                return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Le, Ye).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do
                                            if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                        while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1 } }), target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id }, root: function(e) {
                                return e === C }, focus: function(e) {
                                return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                                return e.disabled === !1 }, disabled: function(e) {
                                return e.disabled === !0 }, checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0 }, parent: function(e) {
                                return !Y.pseudos.empty(e) }, header: function(e) {
                                return pe.test(e.nodeName) }, input: function(e) {
                                return _e.test(e.nodeName) }, button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: u(function() {
                                return [0] }), last: u(function(e, t) {
                                return [t - 1] }), eq: u(function(e, t, n) {
                                return [0 > n ? n + t : n] }), even: u(function(e, t) {
                                for (var n = 0; t > n; n += 2) e.push(n);
                                return e }), odd: u(function(e, t) {
                                for (var n = 1; t > n; n += 2) e.push(n);
                                return e }), lt: u(function(e, t, n) {
                                for (var a = 0 > n ? n + t : n; --a >= 0;) e.push(a);
                                return e }), gt: u(function(e, t, n) {
                                for (var a = 0 > n ? n + t : n; ++a < t;) e.push(a);
                                return e }) } }, Y.pseudos.nth = Y.pseudos.eq;
                    for (M in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Y.pseudos[M] = o(M);
                    for (M in { submit: !0, reset: !0 }) Y.pseudos[M] = d(M);
                    return c.prototype = Y.filters = Y.pseudos, Y.setFilters = new c, w = t.tokenize = function(e, n) {
                        var a, r, i, s, o, d, u, l = U[e + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (o = e, d = [], u = Y.preFilter; o;) {
                            (!a || (r = ue.exec(o))) && (r && (o = o.slice(r[0].length) || o), d.push(i = [])), a = !1, (r = le.exec(o)) && (a = r.shift(), i.push({ value: a, type: r[0].replace(de, " ") }), o = o.slice(a.length));
                            for (s in Y.filter) !(r = me[s].exec(o)) || u[s] && !(r = u[s](r)) || (a = r.shift(), i.push({ value: a, type: s, matches: r }), o = o.slice(a.length));
                            if (!a) break }
                        return n ? o.length : o ? t.error(e) : U(e, d).slice(0) }, T = t.compile = function(e, t) {
                        var n, a = [],
                            r = [],
                            i = q[e + " "];
                        if (!i) {
                            for (t || (t = w(e)), n = t.length; n--;) i = g(t[n]), i[z] ? a.push(i) : r.push(i);
                            i = q(e, v(r, a)), i.selector = e }
                        return i }, b = t.select = function(e, t, n, a) {
                        var r, i, s, o, d, u = "function" == typeof e && e,
                            c = !a && w(e = u.selector || e);
                        if (n = n || [], 1 === c.length) {
                            if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && L.getById && 9 === t.nodeType && A && Y.relative[i[1].type]) {
                                if (t = (Y.find.ID(s.matches[0].replace(Le, Ye), t) || [])[0], !t) return n;
                                u && (t = t.parentNode), e = e.slice(i.shift().value.length) }
                            for (r = me.needsContext.test(e) ? 0 : i.length; r-- && (s = i[r], !Y.relative[o = s.type]);)
                                if ((d = Y.find[o]) && (a = d(s.matches[0].replace(Le, Ye), ve.test(i[0].type) && l(t.parentNode) || t))) {
                                    if (i.splice(r, 1), e = a.length && f(i), !e) return Z.apply(n, a), n;
                                    break } }
                        return (u || T(e, c))(a, t, !A, n, ve.test(e) && l(t.parentNode) || t), n }, L.sortStable = z.split("").sort($).join("") === z, L.detectDuplicates = !!j, E(), L.sortDetached = r(function(e) {
                        return 1 & e.compareDocumentPosition(F.createElement("div")) }), r(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || i("type|href|height|width", function(e, t, n) {
                        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), L.attributes && r(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || i("value", function(e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), r(function(e) {
                        return null == e.getAttribute("disabled") }) || i(te, function(e, t, n) {
                        var a;
                        return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null }), t }(n);
            de.find = he, de.expr = he.selectors, de.expr[":"] = de.expr.pseudos, de.unique = he.uniqueSort, de.text = he.getText, de.isXMLDoc = he.isXML, de.contains = he.contains;
            var me = de.expr.match.needsContext,
                _e = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                pe = /^.[^:#\[\.,]*$/;
            de.filter = function(e, t, n) {
                var a = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? de.find.matchesSelector(a, e) ? [a] : [] : de.find.matches(e, de.grep(t, function(e) {
                    return 1 === e.nodeType })) }, de.fn.extend({ find: function(e) {
                    var t, n = [],
                        a = this,
                        r = a.length;
                    if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (de.contains(a[t], this)) return !0 }));
                    for (t = 0; r > t; t++) de.find(e, a[t], n);
                    return n = this.pushStack(r > 1 ? de.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
                    return this.pushStack(o(this, e || [], !1)) }, not: function(e) {
                    return this.pushStack(o(this, e || [], !0)) }, is: function(e) {
                    return !!o(this, "string" == typeof e && me.test(e) ? de(e) : e || [], !1).length } });
            var ye, ge = n.document,
                ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                Me = de.fn.init = function(e, t) {
                    var n, a;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ve.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ye).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ge, !0)), _e.test(n[1]) && de.isPlainObject(t))
                                for (n in t) de.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this }
                        if (a = ge.getElementById(n[2]), a && a.parentNode) {
                            if (a.id !== n[2]) return ye.find(e);
                            this.length = 1, this[0] = a }
                        return this.context = ge, this.selector = e, this }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? "undefined" != typeof ye.ready ? ye.ready(e) : e(de) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this)) };
            Me.prototype = de.fn, ye = de(ge);
            var Le = /^(?:parents|prev(?:Until|All))/,
                Ye = { children: !0, contents: !0, next: !0, prev: !0 };
            de.extend({ dir: function(e, t, n) {
                    for (var a = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !de(r).is(n));) 1 === r.nodeType && a.push(r), r = r[t];
                    return a }, sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n } }), de.fn.extend({ has: function(e) {
                    var t, n = de(e, this),
                        a = n.length;
                    return this.filter(function() {
                        for (t = 0; a > t; t++)
                            if (de.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
                    for (var n, a = 0, r = this.length, i = [], s = me.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; r > a; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) { i.push(n);
                                break }
                    return this.pushStack(i.length > 1 ? de.unique(i) : i) }, index: function(e) {
                    return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
                    return this.pushStack(de.unique(de.merge(this.get(), de(e, t)))) }, addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), de.each({ parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
                    return de.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
                    return de.dir(e, "parentNode", n) }, next: function(e) {
                    return d(e, "nextSibling") }, prev: function(e) {
                    return d(e, "previousSibling") }, nextAll: function(e) {
                    return de.dir(e, "nextSibling") }, prevAll: function(e) {
                    return de.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
                    return de.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                    return de.dir(e, "previousSibling", n) }, siblings: function(e) {
                    return de.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
                    return de.sibling(e.firstChild) }, contents: function(e) {
                    return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : de.merge([], e.childNodes) } }, function(e, t) { de.fn[e] = function(n, a) {
                    var r = de.map(this, t, n);
                    return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = de.filter(a, r)), this.length > 1 && (Ye[e] || (r = de.unique(r)), Le.test(e) && (r = r.reverse())), this.pushStack(r) } });
            var De = /\S+/g,
                ke = {};
            de.Callbacks = function(e) { e = "string" == typeof e ? ke[e] || u(e) : de.extend({}, e);
                var t, n, a, r, i, s, o = [],
                    d = !e.once && [],
                    l = function(u) {
                        for (n = e.memory && u, a = !0, i = s || 0, s = 0, r = o.length, t = !0; o && r > i; i++)
                            if (o[i].apply(u[0], u[1]) === !1 && e.stopOnFalse) { n = !1;
                                break }
                        t = !1, o && (d ? d.length && l(d.shift()) : n ? o = [] : c.disable()) },
                    c = { add: function() {
                            if (o) {
                                var a = o.length;! function i(t) { de.each(t, function(t, n) {
                                        var a = de.type(n); "function" === a ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== a && i(n) }) }(arguments), t ? r = o.length : n && (s = a, l(n)) }
                            return this }, remove: function() {
                            return o && de.each(arguments, function(e, n) {
                                for (var a;
                                    (a = de.inArray(n, o, a)) > -1;) o.splice(a, 1), t && (r >= a && r--, i >= a && i--) }), this }, has: function(e) {
                            return e ? de.inArray(e, o) > -1 : !(!o || !o.length) }, empty: function() {
                            return o = [], r = 0, this }, disable: function() {
                            return o = d = n = void 0, this }, disabled: function() {
                            return !o }, lock: function() {
                            return d = void 0, n || c.disable(), this }, locked: function() {
                            return !d }, fireWith: function(e, n) {
                            return !o || a && !d || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? d.push(n) : l(n)), this }, fire: function() {
                            return c.fireWith(this, arguments), this }, fired: function() {
                            return !!a } };
                return c }, de.extend({ Deferred: function(e) {
                    var t = [
                            ["resolve", "done", de.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", de.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", de.Callbacks("memory")]
                        ],
                        n = "pending",
                        a = { state: function() {
                                return n }, always: function() {
                                return r.done(arguments).fail(arguments), this }, then: function() {
                                var e = arguments;
                                return de.Deferred(function(n) { de.each(t, function(t, i) {
                                        var s = de.isFunction(e[t]) && e[t];
                                        r[i[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            e && de.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === a ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                                return null != e ? de.extend(e, a) : a } },
                        r = {};
                    return a.pipe = a.then, de.each(t, function(e, i) {
                        var s = i[2],
                            o = i[3];
                        a[i[1]] = s.add, o && s.add(function() { n = o }, t[1 ^ e][2].disable, t[2][2].lock), r[i[0]] = function() {
                            return r[i[0] + "With"](this === r ? a : this, arguments), this }, r[i[0] + "With"] = s.fireWith }), a.promise(r), e && e.call(r, r), r }, when: function(e) {
                    var t, n, a, r = 0,
                        i = Q.call(arguments),
                        s = i.length,
                        o = 1 !== s || e && de.isFunction(e.promise) ? s : 0,
                        d = 1 === o ? e : de.Deferred(),
                        u = function(e, n, a) {
                            return function(r) { n[e] = this, a[e] = arguments.length > 1 ? Q.call(arguments) : r, a === t ? d.notifyWith(n, a) : --o || d.resolveWith(n, a) } };
                    if (s > 1)
                        for (t = new Array(s), n = new Array(s), a = new Array(s); s > r; r++) i[r] && de.isFunction(i[r].promise) ? i[r].promise().done(u(r, a, i)).fail(d.reject).progress(u(r, n, t)) : --o;
                    return o || d.resolveWith(a, i), d.promise() } });
            var we;
            de.fn.ready = function(e) {
                return de.ready.promise().done(e), this }, de.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? de.readyWait++ : de.ready(!0) }, ready: function(e) {
                    if (e === !0 ? !--de.readyWait : !de.isReady) {
                        if (!ge.body) return setTimeout(de.ready);
                        de.isReady = !0, e !== !0 && --de.readyWait > 0 || (we.resolveWith(ge, [de]), de.fn.triggerHandler && (de(ge).triggerHandler("ready"), de(ge).off("ready"))) } } }), de.ready.promise = function(e) {
                if (!we)
                    if (we = de.Deferred(), "complete" === ge.readyState) setTimeout(de.ready);
                    else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", c, !1), n.addEventListener("load", c, !1);
                else { ge.attachEvent("onreadystatechange", c), n.attachEvent("onload", c);
                    var t = !1;
                    try { t = null == n.frameElement && ge.documentElement } catch (a) {}
                    t && t.doScroll && ! function r() {
                        if (!de.isReady) {
                            try { t.doScroll("left") } catch (e) {
                                return setTimeout(r, 50) }
                            l(), de.ready() } }() }
                return we.promise(e) };
            var Te, be = "undefined";
            for (Te in de(se)) break;
            se.ownLast = "0" !== Te, se.inlineBlockNeedsLayout = !1, de(function() {
                    var e, t, n, a;
                    n = ge.getElementsByTagName("body")[0], n && n.style && (t = ge.createElement("div"), a = ge.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), typeof t.style.zoom !== be && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", se.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(a)) }),
                function() {
                    var e = ge.createElement("div");
                    if (null == se.deleteExpando) { se.deleteExpando = !0;
                        try { delete e.test } catch (t) { se.deleteExpando = !1 } }
                    e = null }(), de.acceptData = function(e) {
                    var t = de.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t };
            var xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Se = /([A-Z])/g;
            de.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
                    return e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando], !!e && !h(e) }, data: function(e, t, n) {
                    return m(e, t, n) }, removeData: function(e, t) {
                    return _(e, t) }, _data: function(e, t, n) {
                    return m(e, t, n, !0) }, _removeData: function(e, t) {
                    return _(e, t, !0) } }), de.fn.extend({ data: function(e, t) {
                    var n, a, r, i = this[0],
                        s = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = de.data(i), 1 === i.nodeType && !de._data(i, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && (a = s[n].name, 0 === a.indexOf("data-") && (a = de.camelCase(a.slice(5)), f(i, a, r[a])));
                            de._data(i, "parsedAttrs", !0) }
                        return r }
                    return "object" == typeof e ? this.each(function() { de.data(this, e) }) : arguments.length > 1 ? this.each(function() { de.data(this, e, t) }) : i ? f(i, e, de.data(i, e)) : void 0 }, removeData: function(e) {
                    return this.each(function() { de.removeData(this, e) }) } }), de.extend({ queue: function(e, t, n) {
                    var a;
                    return e ? (t = (t || "fx") + "queue", a = de._data(e, t), n && (!a || de.isArray(n) ? a = de._data(e, t, de.makeArray(n)) : a.push(n)), a || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
                    var n = de.queue(e, t),
                        a = n.length,
                        r = n.shift(),
                        i = de._queueHooks(e, t),
                        s = function() { de.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, s, i)), !a && i && i.empty.fire() }, _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return de._data(e, n) || de._data(e, n, { empty: de.Callbacks("once memory").add(function() { de._removeData(e, t + "queue"), de._removeData(e, n) }) }) } }), de.fn.extend({ queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = de.queue(this, e, t);
                        de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e) }) }, dequeue: function(e) {
                    return this.each(function() { de.dequeue(this, e) }) }, clearQueue: function(e) {
                    return this.queue(e || "fx", []) }, promise: function(e, t) {
                    var n, a = 1,
                        r = de.Deferred(),
                        i = this,
                        s = this.length,
                        o = function() {--a || r.resolveWith(i, [i]) };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = de._data(i[s], e + "queueHooks"), n && n.empty && (a++, n.empty.add(o));
                    return o(), r.promise(t) } });
            var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ee = ["Top", "Right", "Bottom", "Left"],
                Fe = function(e, t) {
                    return e = t || e, "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e) },
                Ce = de.access = function(e, t, n, a, r, i, s) {
                    var o = 0,
                        d = e.length,
                        u = null == n;
                    if ("object" === de.type(n)) { r = !0;
                        for (o in n) de.access(e, t, o, n[o], !0, i, s) } else if (void 0 !== a && (r = !0, de.isFunction(a) || (s = !0), u && (s ? (t.call(e, a), t = null) : (u = t, t = function(e, t, n) {
                            return u.call(de(e), n) })), t))
                        for (; d > o; o++) t(e[o], n, s ? a : a.call(e[o], o, t(e[o], n)));
                    return r ? e : u ? t.call(e) : d ? t(e[0], n) : i },
                Ae = /^(?:checkbox|radio)$/i;
            ! function() {
                var e = ge.createElement("input"),
                    t = ge.createElement("div"),
                    n = ge.createDocumentFragment();
                if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", se.leadingWhitespace = 3 === t.firstChild.nodeType, se.tbody = !t.getElementsByTagName("tbody").length, se.htmlSerialize = !!t.getElementsByTagName("link").length, se.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), se.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, se.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { se.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == se.deleteExpando) { se.deleteExpando = !0;
                    try { delete t.test } catch (a) { se.deleteExpando = !1 } } }(),
            function() {
                var e, t, a = ge.createElement("div");
                for (e in { submit: !0, change: !0, focusin: !0 }) t = "on" + e, (se[e + "Bubbles"] = t in n) || (a.setAttribute(t, "t"), se[e + "Bubbles"] = a.attributes[t].expando === !1);
                a = null }();
            var Pe = /^(?:input|select|textarea)$/i,
                He = /^key/,
                We = /^(?:mouse|pointer|contextmenu)|click/,
                Oe = /^(?:focusinfocus|focusoutblur)$/,
                ze = /^([^.]*)(?:\.(.+)|)$/;
            de.event = {
                global: {},
                add: function(e, t, n, a, r) {
                    var i, s, o, d, u, l, c, f, h, m, _, p = de._data(e);
                    if (p) {
                        for (n.handler && (d = n, n = d.handler, r = d.selector), n.guid || (n.guid = de.guid++), (s = p.events) || (s = p.events = {}), (l = p.handle) || (l = p.handle = function(e) {
                                return typeof de === be || e && de.event.triggered === e.type ? void 0 : de.event.dispatch.apply(l.elem, arguments) }, l.elem = e), t = (t || "").match(De) || [""], o = t.length; o--;) i = ze.exec(t[o]) || [], h = _ = i[1], m = (i[2] || "").split(".").sort(), h && (u = de.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = de.event.special[h] || {}, c = de.extend({ type: h, origType: _, data: a, handler: n, guid: n.guid, selector: r, needsContext: r && de.expr.match.needsContext.test(r), namespace: m.join(".") }, d), (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, a, m, l) !== !1 || (e.addEventListener ? e.addEventListener(h, l, !1) : e.attachEvent && e.attachEvent("on" + h, l))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), de.event.global[h] = !0);
                        e = null } },
                remove: function(e, t, n, a, r) {
                    var i, s, o, d, u, l, c, f, h, m, _, p = de.hasData(e) && de._data(e);
                    if (p && (l = p.events)) {
                        for (t = (t || "").match(De) || [""], u = t.length; u--;)
                            if (o = ze.exec(t[u]) || [], h = _ = o[1], m = (o[2] || "").split(".").sort(), h) {
                                for (c = de.event.special[h] || {}, h = (a ? c.delegateType : c.bindType) || h, f = l[h] || [], o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    d = i = f.length; i--;) s = f[i], !r && _ !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || a && a !== s.selector && ("**" !== a || !s.selector) || (f.splice(i, 1), s.selector && f.delegateCount--, c.remove && c.remove.call(e, s));
                                d && !f.length && (c.teardown && c.teardown.call(e, m, p.handle) !== !1 || de.removeEvent(e, h, p.handle), delete l[h])
                            } else
                                for (h in l) de.event.remove(e, h + t[u], n, a, !0);
                        de.isEmptyObject(l) && (delete p.handle, de._removeData(e, "events"))
                    }
                },
                trigger: function(e, t, a, r) {
                    var i, s, o, d, u, l, c, f = [a || ge],
                        h = ie.call(e, "type") ? e.type : e,
                        m = ie.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = l = a = a || ge, 3 !== a.nodeType && 8 !== a.nodeType && !Oe.test(h + de.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[de.expando] ? e : new de.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), t = null == t ? [e] : de.makeArray(t, [e]), u = de.event.special[h] || {}, r || !u.trigger || u.trigger.apply(a, t) !== !1)) {
                        if (!r && !u.noBubble && !de.isWindow(a)) {
                            for (d = u.delegateType || h, Oe.test(d + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), l = o;
                            l === (a.ownerDocument || ge) && f.push(l.defaultView || l.parentWindow || n) }
                        for (c = 0;
                            (o = f[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? d : u.bindType || h, i = (de._data(o, "events") || {})[e.type] && de._data(o, "handle"), i && i.apply(o, t), i = s && o[s], i && i.apply && de.acceptData(o) && (e.result = i.apply(o, t), e.result === !1 && e.preventDefault());
                        if (e.type = h, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), t) === !1) && de.acceptData(a) && s && a[h] && !de.isWindow(a)) { l = a[s], l && (a[s] = null), de.event.triggered = h;
                            try { a[h]() } catch (_) {}
                            de.event.triggered = void 0, l && (a[s] = l) }
                        return e.result } },
                dispatch: function(e) { e = de.event.fix(e);
                    var t, n, a, r, i, s = [],
                        o = Q.call(arguments),
                        d = (de._data(this, "events") || {})[e.type] || [],
                        u = de.event.special[e.type] || {};
                    if (o[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (s = de.event.handlers.call(this, e, d), t = 0;
                            (r = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = r.elem, i = 0;
                                (a = r.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, n = ((de.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result } },
                handlers: function(e, t) {
                    var n, a, r, i, s = [],
                        o = t.delegateCount,
                        d = e.target;
                    if (o && d.nodeType && (!e.button || "click" !== e.type))
                        for (; d != this; d = d.parentNode || this)
                            if (1 === d.nodeType && (d.disabled !== !0 || "click" !== e.type)) {
                                for (r = [], i = 0; o > i; i++) a = t[i], n = a.selector + " ", void 0 === r[n] && (r[n] = a.needsContext ? de(n, this).index(d) >= 0 : de.find(n, this, null, [d]).length), r[n] && r.push(a);
                                r.length && s.push({ elem: d, handlers: r }) }
                    return o < t.length && s.push({ elem: this, handlers: t.slice(o) }), s },
                fix: function(e) {
                    if (e[de.expando]) return e;
                    var t, n, a, r = e.type,
                        i = e,
                        s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = We.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), a = s.props ? this.props.concat(s.props) : this.props, e = new de.Event(i), t = a.length; t--;) n = a[t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || ge), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, i) : e },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
                mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                        var n, a, r, i = t.button,
                            s = t.fromElement;
                        return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || ge, r = a.documentElement, n = a.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e } },
                special: { load: { noBubble: !0 }, focus: { trigger: function() {
                            if (this !== g() && this.focus) try {
                                return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                            return this === g() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                            return de.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) {
                            return de.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
                simulate: function(e, t, n, a) {
                    var r = de.extend(new de.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                    a ? de.event.trigger(r, null, t) : de.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault() }
            }, de.removeEvent = ge.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
                var a = "on" + t;
                e.detachEvent && (typeof e[a] === be && (e[a] = null), e.detachEvent(a, n)) }, de.Event = function(e, t) {
                return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : y) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), void(this[de.expando] = !0)) : new de.Event(e, t) }, de.Event.prototype = { isDefaultPrevented: y, isPropagationStopped: y, isImmediatePropagationStopped: y, preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, de.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { de.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                        var n, a = this,
                            r = e.relatedTarget,
                            i = e.handleObj;
                        return (!r || r !== a && !de.contains(a, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n } } }), se.submitBubbles || (de.event.special.submit = { setup: function() {
                    return de.nodeName(this, "form") ? !1 : void de.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = de.nodeName(t, "input") || de.nodeName(t, "button") ? t.form : void 0;
                        n && !de._data(n, "submitBubbles") && (de.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), de._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
                    return de.nodeName(this, "form") ? !1 : void de.event.remove(this, "._submit") } }), se.changeBubbles || (de.event.special.change = { setup: function() {
                    return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (de.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), de.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), de.event.simulate("change", this, e, !0) })), !1) : void de.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Pe.test(t.nodeName) && !de._data(t, "changeBubbles") && (de.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e, !0) }), de._data(t, "changeBubbles", !0)) }) }, handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
                    return de.event.remove(this, "._change"), !Pe.test(this.nodeName) } }), se.focusinBubbles || de.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = function(e) { de.event.simulate(t, e.target, de.event.fix(e), !0) };
                de.event.special[t] = { setup: function() {
                        var a = this.ownerDocument || this,
                            r = de._data(a, t);
                        r || a.addEventListener(e, n, !0), de._data(a, t, (r || 0) + 1) }, teardown: function() {
                        var a = this.ownerDocument || this,
                            r = de._data(a, t) - 1;
                        r ? de._data(a, t, r) : (a.removeEventListener(e, n, !0), de._removeData(a, t)) } } }), de.fn.extend({ on: function(e, t, n, a, r) {
                    var i, s;
                    if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0);
                        for (i in e) this.on(i, t, n, e[i], r);
                        return this }
                    if (null == n && null == a ? (a = t, n = t = void 0) : null == a && ("string" == typeof t ? (a = n, n = void 0) : (a = n, n = t, t = void 0)), a === !1) a = y;
                    else if (!a) return this;
                    return 1 === r && (s = a, a = function(e) {
                        return de().off(e), s.apply(this, arguments) }, a.guid = s.guid || (s.guid = de.guid++)), this.each(function() { de.event.add(this, e, a, n, t) }) }, one: function(e, t, n, a) {
                    return this.on(e, t, n, a, 1) }, off: function(e, t, n) {
                    var a, r;
                    if (e && e.preventDefault && e.handleObj) return a = e.handleObj, de(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = y), this.each(function() { de.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
                    return this.each(function() { de.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? de.event.trigger(e, t, n, !0) : void 0 } });
            var Ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Ie = / jQuery\d+="(?:null|\d+)"/g,
                Re = new RegExp("<(?:" + Ne + ")[\\s/>]", "i"),
                Be = /^\s+/,
                Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                qe = /<([\w:]+)/,
                $e = /<tbody/i,
                Je = /<|&#?\w+;/,
                Ve = /<(?:script|style|link)/i,
                Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Xe = /^$|\/(?:java|ecma)script/i,
                Ke = /^true\/(.*)/,
                Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Qe = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: se.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
                et = v(ge),
                tt = et.appendChild(ge.createElement("div"));
            Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, de.extend({ clone: function(e, t, n) {
                    var a, r, i, s, o, d = de.contains(e.ownerDocument, e);
                    if (se.html5Clone || de.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(i = tt.firstChild)), !(se.noCloneEvent && se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                        for (a = M(i), o = M(e), s = 0; null != (r = o[s]); ++s) a[s] && b(r, a[s]);
                    if (t)
                        if (n)
                            for (o = o || M(e), a = a || M(i), s = 0; null != (r = o[s]); s++) T(r, a[s]);
                        else T(e, i);
                    return a = M(i, "script"), a.length > 0 && w(a, !d && M(e, "script")), a = o = r = null, i }, buildFragment: function(e, t, n, a) {
                    for (var r, i, s, o, d, u, l, c = e.length, f = v(t), h = [], m = 0; c > m; m++)
                        if (i = e[m], i || 0 === i)
                            if ("object" === de.type(i)) de.merge(h, i.nodeType ? [i] : i);
                            else if (Je.test(i)) {
                        for (o = o || f.appendChild(t.createElement("div")), d = (qe.exec(i) || ["", ""])[1].toLowerCase(), l = Qe[d] || Qe._default, o.innerHTML = l[1] + i.replace(Ue, "<$1></$2>") + l[2], r = l[0]; r--;) o = o.lastChild;
                        if (!se.leadingWhitespace && Be.test(i) && h.push(t.createTextNode(Be.exec(i)[0])), !se.tbody)
                            for (i = "table" !== d || $e.test(i) ? "<table>" !== l[1] || $e.test(i) ? 0 : o : o.firstChild, r = i && i.childNodes.length; r--;) de.nodeName(u = i.childNodes[r], "tbody") && !u.childNodes.length && i.removeChild(u);
                        for (de.merge(h, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                        o = f.lastChild } else h.push(t.createTextNode(i));
                    for (o && f.removeChild(o), se.appendChecked || de.grep(M(h, "input"), L), m = 0; i = h[m++];)
                        if ((!a || -1 === de.inArray(i, a)) && (s = de.contains(i.ownerDocument, i), o = M(f.appendChild(i), "script"), s && w(o), n))
                            for (r = 0; i = o[r++];) Xe.test(i.type || "") && n.push(i);
                    return o = null, f }, cleanData: function(e, t) {
                    for (var n, a, r, i, s = 0, o = de.expando, d = de.cache, u = se.deleteExpando, l = de.event.special; null != (n = e[s]); s++)
                        if ((t || de.acceptData(n)) && (r = n[o], i = r && d[r])) {
                            if (i.events)
                                for (a in i.events) l[a] ? de.event.remove(n, a) : de.removeEvent(n, a, i.handle);
                            d[r] && (delete d[r], u ? delete n[o] : typeof n.removeAttribute !== be ? n.removeAttribute(o) : n[o] = null, Z.push(r)) } } }), de.fn.extend({ text: function(e) {
                    return Ce(this, function(e) {
                        return void 0 === e ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Y(this, e);
                            t.appendChild(e) } }) }, prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Y(this, e);
                            t.insertBefore(e, t.firstChild) } }) }, before: function() {
                    return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
                    return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) {
                    for (var n, a = e ? de.filter(e, this) : this, r = 0; null != (n = a[r]); r++) t || 1 !== n.nodeType || de.cleanData(M(n)), n.parentNode && (t && de.contains(n.ownerDocument, n) && w(M(n, "script")), n.parentNode.removeChild(n));
                    return this }, empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && de.cleanData(M(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && de.nodeName(e, "select") && (e.options.length = 0) }
                    return this }, clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return de.clone(this, e, t) }) }, html: function(e) {
                    return Ce(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            a = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                        if ("string" == typeof e && !Ve.test(e) && (se.htmlSerialize || !Re.test(e)) && (se.leadingWhitespace || !Be.test(e)) && !Qe[(qe.exec(e) || ["", ""])[1].toLowerCase()]) { e = e.replace(Ue, "<$1></$2>");
                            try {
                                for (; a > n; n++) t = this[n] || {}, 1 === t.nodeType && (de.cleanData(M(t, !1)), t.innerHTML = e);
                                t = 0 } catch (r) {} }
                        t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) { e = this.parentNode, de.cleanData(M(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() }, detach: function(e) {
                    return this.remove(e, !0) }, domManip: function(e, t) { e = ee.apply([], e);
                    var n, a, r, i, s, o, d = 0,
                        u = this.length,
                        l = this,
                        c = u - 1,
                        f = e[0],
                        h = de.isFunction(f);
                    if (h || u > 1 && "string" == typeof f && !se.checkClone && Ge.test(f)) return this.each(function(n) {
                        var a = l.eq(n);
                        h && (e[0] = f.call(this, n, a.html())), a.domManip(e, t) });
                    if (u && (o = de.buildFragment(e, this[0].ownerDocument, !1, this), n = o.firstChild, 1 === o.childNodes.length && (o = n), n)) {
                        for (i = de.map(M(o, "script"), D), r = i.length; u > d; d++) a = o, d !== c && (a = de.clone(a, !0, !0), r && de.merge(i, M(a, "script"))), t.call(this[d], a, d);
                        if (r)
                            for (s = i[i.length - 1].ownerDocument, de.map(i, k), d = 0; r > d; d++) a = i[d], Xe.test(a.type || "") && !de._data(a, "globalEval") && de.contains(s, a) && (a.src ? de._evalUrl && de._evalUrl(a.src) : de.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Ze, "")));
                        o = n = null }
                    return this } }), de.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { de.fn[e] = function(e) {
                    for (var n, a = 0, r = [], i = de(e), s = i.length - 1; s >= a; a++) n = a === s ? this : this.clone(!0), de(i[a])[t](n), te.apply(r, n.get());
                    return this.pushStack(r) } });
            var nt, at = {};
            ! function() {
                var e;
                se.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, a;
                    return n = ge.getElementsByTagName("body")[0], n && n.style ? (t = ge.createElement("div"), a = ge.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), typeof t.style.zoom !== be && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ge.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(a), e) : void 0 } }();
            var rt, it, st = /^margin/,
                ot = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
                dt = /^(top|right|bottom|left)$/;
            n.getComputedStyle ? (rt = function(e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null) }, it = function(e, t, n) {
                    var a, r, i, s, o = e.style;
                    return n = n || rt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || de.contains(e.ownerDocument, e) || (s = de.style(e, t)), ot.test(s) && st.test(t) && (a = o.width, r = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = a, o.minWidth = r, o.maxWidth = i)), void 0 === s ? s : s + "" }) : ge.documentElement.currentStyle && (rt = function(e) {
                    return e.currentStyle }, it = function(e, t, n) {
                    var a, r, i, s, o = e.style;
                    return n = n || rt(e), s = n ? n[t] : void 0, null == s && o && o[t] && (s = o[t]), ot.test(s) && !dt.test(t) && (a = o.left, r = e.runtimeStyle, i = r && r.left, i && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = a, i && (r.left = i)), void 0 === s ? s : s + "" || "auto" }),
                function() {
                    function e() {
                        var e, t, a, r;
                        t = ge.getElementsByTagName("body")[0], t && t.style && (e = ge.createElement("div"), a = ge.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(a).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = s = !1, d = !0, n.getComputedStyle && (i = "1%" !== (n.getComputedStyle(e, null) || {}).top, s = "4px" === (n.getComputedStyle(e, null) || { width: "4px" }).width, r = e.appendChild(ge.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", d = !parseFloat((n.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === r[0].offsetHeight, o && (r[0].style.display = "", r[1].style.display = "none", o = 0 === r[0].offsetHeight), t.removeChild(a)) }
                    var t, a, r, i, s, o, d;
                    t = ge.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], a = r && r.style, a && (a.cssText = "float:left;opacity:.5", se.opacity = "0.5" === a.opacity, se.cssFloat = !!a.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === t.style.backgroundClip, se.boxSizing = "" === a.boxSizing || "" === a.MozBoxSizing || "" === a.WebkitBoxSizing, de.extend(se, { reliableHiddenOffsets: function() {
                            return null == o && e(), o }, boxSizingReliable: function() {
                            return null == s && e(), s }, pixelPosition: function() {
                            return null == i && e(), i }, reliableMarginRight: function() {
                            return null == d && e(), d } })) }(), de.swap = function(e, t, n, a) {
                    var r, i, s = {};
                    for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                    r = n.apply(e, a || []);
                    for (i in t) e.style[i] = s[i];
                    return r };
            var ut = /alpha\([^)]*\)/i,
                lt = /opacity\s*=\s*([^)]*)/,
                ct = /^(none|table(?!-c[ea]).+)/,
                ft = new RegExp("^(" + je + ")(.*)$", "i"),
                ht = new RegExp("^([+-])=(" + je + ")", "i"),
                mt = { position: "absolute", visibility: "hidden", display: "block" },
                _t = { letterSpacing: "0", fontWeight: "400" },
                pt = ["Webkit", "O", "Moz", "ms"];
            de.extend({ cssHooks: { opacity: { get: function(e, t) {
                            if (t) {
                                var n = it(e, "opacity");
                                return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": se.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, a) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, i, s, o = de.camelCase(t),
                            d = e.style;
                        if (t = de.cssProps[o] || (de.cssProps[o] = E(d, o)), s = de.cssHooks[t] || de.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, a)) ? r : d[t];
                        if (i = typeof n, "string" === i && (r = ht.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(de.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || de.cssNumber[o] || (n += "px"), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, a))))) try { d[t] = n } catch (u) {} } }, css: function(e, t, n, a) {
                    var r, i, s, o = de.camelCase(t);
                    return t = de.cssProps[o] || (de.cssProps[o] = E(e.style, o)), s = de.cssHooks[t] || de.cssHooks[o], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = it(e, t, a)), "normal" === i && t in _t && (i = _t[t]), "" === n || n ? (r = parseFloat(i), n === !0 || de.isNumeric(r) ? r || 0 : i) : i } }), de.each(["height", "width"], function(e, t) { de.cssHooks[t] = { get: function(e, n, a) {
                        return n ? ct.test(de.css(e, "display")) && 0 === e.offsetWidth ? de.swap(e, mt, function() {
                            return P(e, t, a) }) : P(e, t, a) : void 0 }, set: function(e, n, a) {
                        var r = a && rt(e);
                        return C(e, n, a ? A(e, t, a, se.boxSizing && "border-box" === de.css(e, "boxSizing", !1, r), r) : 0) } } }), se.opacity || (de.cssHooks.opacity = { get: function(e, t) {
                    return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
                    var n = e.style,
                        a = e.currentStyle,
                        r = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        i = a && a.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === de.trim(i.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || a && !a.filter) || (n.filter = ut.test(i) ? i.replace(ut, r) : i + " " + r) } }), de.cssHooks.marginRight = j(se.reliableMarginRight, function(e, t) {
                return t ? de.swap(e, { display: "inline-block" }, it, [e, "marginRight"]) : void 0 }), de.each({ margin: "", padding: "", border: "Width" }, function(e, t) { de.cssHooks[e + t] = { expand: function(n) {
                        for (var a = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++) r[e + Ee[a] + t] = i[a] || i[a - 2] || i[0];
                        return r } }, st.test(e) || (de.cssHooks[e + t].set = C) }), de.fn.extend({ css: function(e, t) {
                    return Ce(this, function(e, t, n) {
                        var a, r, i = {},
                            s = 0;
                        if (de.isArray(t)) {
                            for (a = rt(e), r = t.length; r > s; s++) i[t[s]] = de.css(e, t[s], !1, a);
                            return i }
                        return void 0 !== n ? de.style(e, t, n) : de.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
                    return F(this, !0) }, hide: function() {
                    return F(this) }, toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Fe(this) ? de(this).show() : de(this).hide() }) } }), de.Tween = H, H.prototype = { constructor: H, init: function(e, t, n, a, r, i) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (de.cssNumber[n] ? "" : "px") }, cur: function() {
                    var e = H.propHooks[this.prop];
                    return e && e.get ? e.get(this) : H.propHooks._default.get(this) }, run: function(e) {
                    var t, n = H.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { de.fx.step[e.prop] ? de.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[de.cssProps[e.prop]] || de.cssHooks[e.prop]) ? de.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, de.easing = { linear: function(e) {
                    return e }, swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2 } }, de.fx = H.prototype.init, de.fx.step = {};
            var yt, gt, vt = /^(?:toggle|show|hide)$/,
                Mt = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
                Lt = /queueHooks$/,
                Yt = [N],
                Dt = { "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            a = n.cur(),
                            r = Mt.exec(t),
                            i = r && r[3] || (de.cssNumber[e] ? "" : "px"),
                            s = (de.cssNumber[e] || "px" !== i && +a) && Mt.exec(de.css(n.elem, e)),
                            o = 1,
                            d = 20;
                        if (s && s[3] !== i) { i = i || s[3], r = r || [], s = +a || 1;
                            do o = o || ".5", s /= o, de.style(n.elem, e, s + i); while (o !== (o = n.cur() / a) && 1 !== o && --d) }
                        return r && (s = n.start = +s || +a || 0, n.unit = i, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n }] };
            de.Animation = de.extend(R, { tweener: function(e, t) { de.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        for (var n, a = 0, r = e.length; r > a; a++) n = e[a], Dt[n] = Dt[n] || [], Dt[n].unshift(t) }, prefilter: function(e, t) { t ? Yt.unshift(e) : Yt.push(e) } }), de.speed = function(e, t, n) {
                    var a = e && "object" == typeof e ? de.extend({}, e) : { complete: n || !n && t || de.isFunction(e) && e, duration: e, easing: n && t || t && !de.isFunction(t) && t };
                    return a.duration = de.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in de.fx.speeds ? de.fx.speeds[a.duration] : de.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function() { de.isFunction(a.old) && a.old.call(this), a.queue && de.dequeue(this, a.queue) }, a }, de.fn.extend({ fadeTo: function(e, t, n, a) {
                        return this.filter(Fe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, a) }, animate: function(e, t, n, a) {
                        var r = de.isEmptyObject(e),
                            i = de.speed(t, n, a),
                            s = function() {
                                var t = R(this, de.extend({}, e), i);
                                (r || de._data(this, "finish")) && t.stop(!0) };
                        return s.finish = s, r || i.queue === !1 ? this.each(s) : this.queue(i.queue, s) }, stop: function(e, t, n) {
                        var a = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n) };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                i = de.timers,
                                s = de._data(this);
                            if (r) s[r] && s[r].stop && a(s[r]);
                            else
                                for (r in s) s[r] && s[r].stop && Lt.test(r) && a(s[r]);
                            for (r = i.length; r--;) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), t = !1, i.splice(r, 1));
                            (t || !n) && de.dequeue(this, e) }) }, finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = de._data(this),
                                a = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                i = de.timers,
                                s = a ? a.length : 0;
                            for (n.finish = !0, de.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; s > t; t++) a[t] && a[t].finish && a[t].finish.call(this);
                            delete n.finish }) } }), de.each(["toggle", "show", "hide"], function(e, t) {
                    var n = de.fn[t];
                    de.fn[t] = function(e, a, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, a, r) } }), de.each({ slideDown: O("show"), slideUp: O("hide"), slideToggle: O("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { de.fn[e] = function(e, n, a) {
                        return this.animate(t, e, n, a) } }), de.timers = [], de.fx.tick = function() {
                    var e, t = de.timers,
                        n = 0;
                    for (yt = de.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                    t.length || de.fx.stop(), yt = void 0 }, de.fx.timer = function(e) { de.timers.push(e), e() ? de.fx.start() : de.timers.pop() }, de.fx.interval = 13, de.fx.start = function() { gt || (gt = setInterval(de.fx.tick, de.fx.interval)) }, de.fx.stop = function() { clearInterval(gt), gt = null }, de.fx.speeds = { slow: 600, fast: 200, _default: 400 }, de.fn.delay = function(e, t) {
                    return e = de.fx ? de.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var a = setTimeout(t, e);
                        n.stop = function() { clearTimeout(a) } }) },
                function() {
                    var e, t, n, a, r;
                    t = ge.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = t.getElementsByTagName("a")[0], n = ge.createElement("select"), r = n.appendChild(ge.createElement("option")), e = t.getElementsByTagName("input")[0], a.style.cssText = "top:1px", se.getSetAttribute = "t" !== t.className, se.style = /top/.test(a.getAttribute("style")), se.hrefNormalized = "/a" === a.getAttribute("href"), se.checkOn = !!e.value, se.optSelected = r.selected, se.enctype = !!ge.createElement("form").enctype, n.disabled = !0, se.optDisabled = !r.disabled, e = ge.createElement("input"), e.setAttribute("value", ""), se.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), se.radioValue = "t" === e.value }();
            var kt = /\r/g;
            de.fn.extend({ val: function(e) {
                    var t, n, a, r = this[0]; {
                        if (arguments.length) return a = de.isFunction(e), this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = a ? e.call(this, n, de(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : de.isArray(r) && (r = de.map(r, function(e) {
                                return null == e ? "" : e + "" })), t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) });
                        if (r) return t = de.valHooks[r.type] || de.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n) } } }), de.extend({ valHooks: { option: { get: function(e) {
                            var t = de.find.attr(e, "value");
                            return null != t ? t : de.trim(de.text(e)) } }, select: { get: function(e) {
                            for (var t, n, a = e.options, r = e.selectedIndex, i = "select-one" === e.type || 0 > r, s = i ? null : [], o = i ? r + 1 : a.length, d = 0 > r ? o : i ? r : 0; o > d; d++)
                                if (n = a[d], (n.selected || d === r) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = de(n).val(), i) return t;
                                    s.push(t) }
                            return s }, set: function(e, t) {
                            for (var n, a, r = e.options, i = de.makeArray(t), s = r.length; s--;)
                                if (a = r[s], de.inArray(de.valHooks.option.get(a), i) >= 0) try { a.selected = n = !0 } catch (o) { a.scrollHeight } else a.selected = !1;
                            return n || (e.selectedIndex = -1), r } } } }), de.each(["radio", "checkbox"], function() { de.valHooks[this] = { set: function(e, t) {
                        return de.isArray(t) ? e.checked = de.inArray(de(e).val(), t) >= 0 : void 0 } }, se.checkOn || (de.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value }) });
            var wt, Tt, bt = de.expr.attrHandle,
                xt = /^(?:checked|selected)$/i,
                St = se.getSetAttribute,
                jt = se.input;
            de.fn.extend({ attr: function(e, t) {
                    return Ce(this, de.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                    return this.each(function() { de.removeAttr(this, e) }) } }), de.extend({ attr: function(e, t, n) {
                    var a, r, i = e.nodeType;
                    if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === be ? de.prop(e, t, n) : (1 === i && de.isXMLDoc(e) || (t = t.toLowerCase(), a = de.attrHooks[t] || (de.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? a && "get" in a && null !== (r = a.get(e, t)) ? r : (r = de.find.attr(e, t), null == r ? void 0 : r) : null !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void de.removeAttr(e, t)) }, removeAttr: function(e, t) {
                    var n, a, r = 0,
                        i = t && t.match(De);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) a = de.propFix[n] || n, de.expr.match.bool.test(n) ? jt && St || !xt.test(n) ? e[a] = !1 : e[de.camelCase("default-" + n)] = e[a] = !1 : de.attr(e, n, ""), e.removeAttribute(St ? n : a) }, attrHooks: { type: { set: function(e, t) {
                            if (!se.radioValue && "radio" === t && de.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t } } } } }), Tt = { set: function(e, t, n) {
                    return t === !1 ? de.removeAttr(e, n) : jt && St || !xt.test(n) ? e.setAttribute(!St && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0, n } }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = bt[t] || de.find.attr;
                bt[t] = jt && St || !xt.test(t) ? function(e, t, a) {
                    var r, i;
                    return a || (i = bt[t], bt[t] = r, r = null != n(e, t, a) ? t.toLowerCase() : null, bt[t] = i), r } : function(e, t, n) {
                    return n ? void 0 : e[de.camelCase("default-" + t)] ? t.toLowerCase() : null } }), jt && St || (de.attrHooks.value = { set: function(e, t, n) {
                    return de.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n) } }), St || (wt = { set: function(e, t, n) {
                    var a = e.getAttributeNode(n);
                    return a || e.setAttributeNode(a = e.ownerDocument.createAttribute(n)), a.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, bt.id = bt.name = bt.coords = function(e, t, n) {
                var a;
                return n ? void 0 : (a = e.getAttributeNode(t)) && "" !== a.value ? a.value : null }, de.valHooks.button = { get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0 }, set: wt.set }, de.attrHooks.contenteditable = { set: function(e, t, n) { wt.set(e, "" === t ? !1 : t, n) } }, de.each(["width", "height"], function(e, t) { de.attrHooks[t] = { set: function(e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), se.style || (de.attrHooks.style = { get: function(e) {
                    return e.style.cssText || void 0 }, set: function(e, t) {
                    return e.style.cssText = t + "" } });
            var Et = /^(?:input|select|textarea|button|object)$/i,
                Ft = /^(?:a|area)$/i;
            de.fn.extend({ prop: function(e, t) {
                    return Ce(this, de.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                    return e = de.propFix[e] || e, this.each(function() {
                        try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), de.extend({
                propFix: { "for": "htmlFor", "class": "className" },
                prop: function(e, t, n) {
                    var a, r, i, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return i = 1 !== s || !de.isXMLDoc(e), i && (t = de.propFix[t] || t, r = de.propHooks[t]),
                        void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
                },
                propHooks: { tabIndex: { get: function(e) {
                            var t = de.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Et.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1 } } }
            }), se.hrefNormalized || de.each(["href", "src"], function(e, t) { de.propHooks[t] = { get: function(e) {
                        return e.getAttribute(t, 4) } } }), se.optSelected || (de.propHooks.selected = { get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { de.propFix[this.toLowerCase()] = this }), se.enctype || (de.propFix.enctype = "encoding");
            var Ct = /[\t\r\n\f]/g;
            de.fn.extend({ addClass: function(e) {
                    var t, n, a, r, i, s, o = 0,
                        d = this.length,
                        u = "string" == typeof e && e;
                    if (de.isFunction(e)) return this.each(function(t) { de(this).addClass(e.call(this, t, this.className)) });
                    if (u)
                        for (t = (e || "").match(De) || []; d > o; o++)
                            if (n = this[o], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : " ")) {
                                for (i = 0; r = t[i++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                                s = de.trim(a), n.className !== s && (n.className = s) }
                    return this }, removeClass: function(e) {
                    var t, n, a, r, i, s, o = 0,
                        d = this.length,
                        u = 0 === arguments.length || "string" == typeof e && e;
                    if (de.isFunction(e)) return this.each(function(t) { de(this).removeClass(e.call(this, t, this.className)) });
                    if (u)
                        for (t = (e || "").match(De) || []; d > o; o++)
                            if (n = this[o], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : "")) {
                                for (i = 0; r = t[i++];)
                                    for (; a.indexOf(" " + r + " ") >= 0;) a = a.replace(" " + r + " ", " ");
                                s = e ? de.trim(a) : "", n.className !== s && (n.className = s) }
                    return this }, toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) { de(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                        if ("string" === n)
                            for (var t, a = 0, r = de(this), i = e.match(De) || []; t = i[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else(n === be || "boolean" === n) && (this.className && de._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : de._data(this, "__className__") || "") }) }, hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, a = this.length; a > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ct, " ").indexOf(t) >= 0) return !0;
                    return !1 } }), de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { de.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), de.fn.extend({ hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) {
                    return this.on(e, null, t, n) }, unbind: function(e, t) {
                    return this.off(e, null, t) }, delegate: function(e, t, n, a) {
                    return this.on(t, e, n, a) }, undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
            var At = de.now(),
                Pt = /\?/,
                Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            de.parseJSON = function(e) {
                if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
                var t, a = null,
                    r = de.trim(e + "");
                return r && !de.trim(r.replace(Ht, function(e, n, r, i) {
                    return t && n && (a = 0), 0 === a ? e : (t = r || n, a += !i - !r, "") })) ? Function("return " + r)() : de.error("Invalid JSON: " + e) }, de.parseXML = function(e) {
                var t, a;
                if (!e || "string" != typeof e) return null;
                try { n.DOMParser ? (a = new DOMParser, t = a.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) } catch (r) { t = void 0 }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + e), t };
            var Wt, Ot, zt = /#.*$/,
                Nt = /([?&])_=[^&]*/,
                It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Bt = /^(?:GET|HEAD)$/,
                Ut = /^\/\//,
                qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                $t = {},
                Jt = {},
                Vt = "*/".concat("*");
            try { Ot = location.href } catch (Gt) { Ot = ge.createElement("a"), Ot.href = "", Ot = Ot.href }
            Wt = qt.exec(Ot.toLowerCase()) || [], de.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ot, type: "GET", isLocal: Rt.test(Wt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Vt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": de.parseJSON, "text xml": de.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
                    return t ? q(q(e, de.ajaxSettings), t) : q(de.ajaxSettings, e) }, ajaxPrefilter: B($t), ajaxTransport: B(Jt), ajax: function(e, t) {
                    function n(e, t, n, a) {
                        var r, l, y, g, M, Y = t;
                        2 !== v && (v = 2, o && clearTimeout(o), u = void 0, s = a || "", L.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (g = $(c, L, n)), g = J(c, g, L, r), r ? (c.ifModified && (M = L.getResponseHeader("Last-Modified"), M && (de.lastModified[i] = M), M = L.getResponseHeader("etag"), M && (de.etag[i] = M)), 204 === e || "HEAD" === c.type ? Y = "nocontent" : 304 === e ? Y = "notmodified" : (Y = g.state, l = g.data, y = g.error, r = !y)) : (y = Y, (e || !Y) && (Y = "error", 0 > e && (e = 0))), L.status = e, L.statusText = (t || Y) + "", r ? m.resolveWith(f, [l, Y, L]) : m.rejectWith(f, [L, Y, y]), L.statusCode(p), p = void 0, d && h.trigger(r ? "ajaxSuccess" : "ajaxError", [L, c, r ? l : y]), _.fireWith(f, [L, Y]), d && (h.trigger("ajaxComplete", [L, c]), --de.active || de.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var a, r, i, s, o, d, u, l, c = de.ajaxSetup({}, t),
                        f = c.context || c,
                        h = c.context && (f.nodeType || f.jquery) ? de(f) : de.event,
                        m = de.Deferred(),
                        _ = de.Callbacks("once memory"),
                        p = c.statusCode || {},
                        y = {},
                        g = {},
                        v = 0,
                        M = "canceled",
                        L = { readyState: 0, getResponseHeader: function(e) {
                                var t;
                                if (2 === v) {
                                    if (!l)
                                        for (l = {}; t = It.exec(s);) l[t[1].toLowerCase()] = t[2];
                                    t = l[e.toLowerCase()] }
                                return null == t ? null : t }, getAllResponseHeaders: function() {
                                return 2 === v ? s : null }, setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return v || (e = g[n] = g[n] || e, y[e] = t), this }, overrideMimeType: function(e) {
                                return v || (c.mimeType = e), this }, statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > v)
                                        for (t in e) p[t] = [p[t], e[t]];
                                    else L.always(e[L.status]);
                                return this }, abort: function(e) {
                                var t = e || M;
                                return u && u.abort(t), n(0, t), this } };
                    if (m.promise(L).complete = _.add, L.success = L.done, L.error = L.fail, c.url = ((e || c.url || Ot) + "").replace(zt, "").replace(Ut, Wt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = de.trim(c.dataType || "*").toLowerCase().match(De) || [""], null == c.crossDomain && (a = qt.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Wt[1] && a[2] === Wt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Wt[3] || ("http:" === Wt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = de.param(c.data, c.traditional)), U($t, c, t, L), 2 === v) return L;
                    d = de.event && c.global, d && 0 === de.active++ && de.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Bt.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (Pt.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Nt.test(i) ? i.replace(Nt, "$1_=" + At++) : i + (Pt.test(i) ? "&" : "?") + "_=" + At++)), c.ifModified && (de.lastModified[i] && L.setRequestHeader("If-Modified-Since", de.lastModified[i]), de.etag[i] && L.setRequestHeader("If-None-Match", de.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && L.setRequestHeader("Content-Type", c.contentType), L.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : c.accepts["*"]);
                    for (r in c.headers) L.setRequestHeader(r, c.headers[r]);
                    if (c.beforeSend && (c.beforeSend.call(f, L, c) === !1 || 2 === v)) return L.abort();
                    M = "abort";
                    for (r in { success: 1, error: 1, complete: 1 }) L[r](c[r]);
                    if (u = U(Jt, c, t, L)) { L.readyState = 1, d && h.trigger("ajaxSend", [L, c]), c.async && c.timeout > 0 && (o = setTimeout(function() { L.abort("timeout") }, c.timeout));
                        try { v = 1, u.send(y, n) } catch (Y) {
                            if (!(2 > v)) throw Y;
                            n(-1, Y) } } else n(-1, "No Transport");
                    return L }, getJSON: function(e, t, n) {
                    return de.get(e, t, n, "json") }, getScript: function(e, t) {
                    return de.get(e, void 0, t, "script") } }), de.each(["get", "post"], function(e, t) { de[t] = function(e, n, a, r) {
                    return de.isFunction(n) && (r = r || a, a = n, n = void 0), de.ajax({ url: e, type: t, dataType: r, data: n, success: a }) } }), de._evalUrl = function(e) {
                return de.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, de.fn.extend({ wrapAll: function(e) {
                    if (de.isFunction(e)) return this.each(function(t) { de(this).wrapAll(e.call(this, t)) });
                    if (this[0]) {
                        var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e }).append(this) }
                    return this }, wrapInner: function(e) {
                    return de.isFunction(e) ? this.each(function(t) { de(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                        var t = de(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
                    var t = de.isFunction(e);
                    return this.each(function(n) { de(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
                    return this.parent().each(function() { de.nodeName(this, "body") || de(this).replaceWith(this.childNodes) }).end() } }), de.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !se.reliableHiddenOffsets() && "none" === (e.style && e.style.display || de.css(e, "display")) }, de.expr.filters.visible = function(e) {
                return !de.expr.filters.hidden(e) };
            var Xt = /%20/g,
                Kt = /\[\]$/,
                Zt = /\r?\n/g,
                Qt = /^(?:submit|button|image|reset|file)$/i,
                en = /^(?:input|select|textarea|keygen)/i;
            de.param = function(e, t) {
                var n, a = [],
                    r = function(e, t) { t = de.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
                if (void 0 === t && (t = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() { r(this.name, this.value) });
                else
                    for (n in e) V(n, e[n], t, r);
                return a.join("&").replace(Xt, "+") }, de.fn.extend({ serialize: function() {
                    return de.param(this.serializeArray()) }, serializeArray: function() {
                    return this.map(function() {
                        var e = de.prop(this, "elements");
                        return e ? de.makeArray(e) : this }).filter(function() {
                        var e = this.type;
                        return this.name && !de(this).is(":disabled") && en.test(this.nodeName) && !Qt.test(e) && (this.checked || !Ae.test(e)) }).map(function(e, t) {
                        var n = de(this).val();
                        return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                            return { name: t.name, value: e.replace(Zt, "\r\n") } }) : { name: t.name, value: n.replace(Zt, "\r\n") } }).get() } }), de.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && G() || X() } : G;
            var tn = 0,
                nn = {},
                an = de.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function() {
                for (var e in nn) nn[e](void 0, !0) }), se.cors = !!an && "withCredentials" in an, an = se.ajax = !!an, an && de.ajaxTransport(function(e) {
                if (!e.crossDomain || se.cors) {
                    var t;
                    return { send: function(n, a) {
                            var r, i = e.xhr(),
                                s = ++tn;
                            if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (r in e.xhrFields) i[r] = e.xhrFields[r];
                            e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (r in n) void 0 !== n[r] && i.setRequestHeader(r, n[r] + "");
                            i.send(e.hasContent && e.data || null), t = function(n, r) {
                                var o, d, u;
                                if (t && (r || 4 === i.readyState))
                                    if (delete nn[s], t = void 0, i.onreadystatechange = de.noop, r) 4 !== i.readyState && i.abort();
                                    else { u = {}, o = i.status, "string" == typeof i.responseText && (u.text = i.responseText);
                                        try { d = i.statusText } catch (l) { d = "" }
                                        o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404 }
                                u && a(o, d, u, i.getAllResponseHeaders()) }, e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = nn[s] = t : t() }, abort: function() { t && t(void 0, !0) } } } }), de.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
                        return de.globalEval(e), e } } }), de.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), de.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = ge.head || de("head")[0] || ge.documentElement;
                    return { send: function(a, r) { t = ge.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
            var rn = [],
                sn = /(=)\?(?=&|$)|\?\?/;
            de.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                    var e = rn.pop() || de.expando + "_" + At++;
                    return this[e] = !0, e } }), de.ajaxPrefilter("json jsonp", function(e, t, a) {
                var r, i, s, o = e.jsonp !== !1 && (sn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && sn.test(e.data) && "data");
                return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = de.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(sn, "$1" + r) : e.jsonp !== !1 && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return s || de.error(r + " was not called"), s[0] }, e.dataTypes[0] = "json", i = n[r], n[r] = function() { s = arguments }, a.always(function() { n[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rn.push(r)), s && de.isFunction(i) && i(s[0]), s = i = void 0 }), "script") : void 0 }), de.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || ge;
                var a = _e.exec(e),
                    r = !n && [];
                return a ? [t.createElement(a[1])] : (a = de.buildFragment([e], t, r), r && r.length && de(r).remove(), de.merge([], a.childNodes)) };
            var on = de.fn.load;
            de.fn.load = function(e, t, n) {
                if ("string" != typeof e && on) return on.apply(this, arguments);
                var a, r, i, s = this,
                    o = e.indexOf(" ");
                return o >= 0 && (a = de.trim(e.slice(o, e.length)), e = e.slice(0, o)), de.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && de.ajax({ url: e, type: i, dataType: "html", data: t }).done(function(e) { r = arguments, s.html(a ? de("<div>").append(de.parseHTML(e)).find(a) : e) }).complete(n && function(e, t) { s.each(n, r || [e.responseText, t, e]) }), this }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { de.fn[t] = function(e) {
                    return this.on(t, e) } }), de.expr.filters.animated = function(e) {
                return de.grep(de.timers, function(t) {
                    return e === t.elem }).length };
            var dn = n.document.documentElement;
            de.offset = { setOffset: function(e, t, n) {
                    var a, r, i, s, o, d, u, l = de.css(e, "position"),
                        c = de(e),
                        f = {}; "static" === l && (e.style.position = "relative"), o = c.offset(), i = de.css(e, "top"), d = de.css(e, "left"), u = ("absolute" === l || "fixed" === l) && de.inArray("auto", [i, d]) > -1, u ? (a = c.position(), s = a.top, r = a.left) : (s = parseFloat(i) || 0, r = parseFloat(d) || 0), de.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (f.top = t.top - o.top + s), null != t.left && (f.left = t.left - o.left + r), "using" in t ? t.using.call(e, f) : c.css(f) } }, de.fn.extend({ offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) { de.offset.setOffset(this, e, t) });
                    var t, n, a = { top: 0, left: 0 },
                        r = this[0],
                        i = r && r.ownerDocument;
                    if (i) return t = i.documentElement, de.contains(t, r) ? (typeof r.getBoundingClientRect !== be && (a = r.getBoundingClientRect()), n = K(i), { top: a.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: a.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : a }, position: function() {
                    if (this[0]) {
                        var e, t, n = { top: 0, left: 0 },
                            a = this[0];
                        return "fixed" === de.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()), n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - de.css(a, "marginTop", !0), left: t.left - n.left - de.css(a, "marginLeft", !0) } } }, offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || dn; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");) e = e.offsetParent;
                        return e || dn }) } }), de.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var n = /Y/.test(t);
                de.fn[e] = function(a) {
                    return Ce(this, function(e, a, r) {
                        var i = K(e);
                        return void 0 === r ? i ? t in i ? i[t] : i.document.documentElement[a] : e[a] : void(i ? i.scrollTo(n ? de(i).scrollLeft() : r, n ? r : de(i).scrollTop()) : e[a] = r) }, e, a, arguments.length, null) } }), de.each(["top", "left"], function(e, t) { de.cssHooks[t] = j(se.pixelPosition, function(e, n) {
                    return n ? (n = it(e, t), ot.test(n) ? de(e).position()[t] + "px" : n) : void 0 }) }), de.each({ Height: "height", Width: "width" }, function(e, t) { de.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, a) { de.fn[a] = function(a, r) {
                        var i = arguments.length && (n || "boolean" != typeof a),
                            s = n || (a === !0 || r === !0 ? "margin" : "border");
                        return Ce(this, function(t, n, a) {
                            var r;
                            return de.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? de.css(t, n, s) : de.style(t, n, a, s) }, t, i ? a : void 0, i, null) } }) }), de.fn.size = function() {
                return this.length }, de.fn.andSelf = de.fn.addBack, a = [], r = function() {
                return de }.apply(t, a), !(void 0 !== r && (e.exports = r));
            var un = n.jQuery,
                ln = n.$;
            return de.noConflict = function(e) {
                return n.$ === de && (n.$ = ln), e && n.jQuery === de && (n.jQuery = un), de }, typeof i === be && (n.jQuery = n.$ = de), de
        })
    }, function(e, t, n) {! function(t) { "use strict";
            var a, r = t.Base64,
                i = "2.1.9";
            if ("undefined" != typeof e && e.exports) try { a = n(3).Buffer } catch (s) {}
            var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                d = function(e) {
                    for (var t = {}, n = 0, a = e.length; a > n; n++) t[e.charAt(n)] = n;
                    return t }(o),
                u = String.fromCharCode,
                l = function(e) {
                    if (e.length < 2) {
                        var t = e.charCodeAt(0);
                        return 128 > t ? e : 2048 > t ? u(192 | t >>> 6) + u(128 | 63 & t) : u(224 | t >>> 12 & 15) + u(128 | t >>> 6 & 63) + u(128 | 63 & t) }
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return u(240 | t >>> 18 & 7) + u(128 | t >>> 12 & 63) + u(128 | t >>> 6 & 63) + u(128 | 63 & t) },
                c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                f = function(e) {
                    return e.replace(c, l) },
                h = function(e) {
                    var t = [0, 2, 1][e.length % 3],
                        n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                        a = [o.charAt(n >>> 18), o.charAt(n >>> 12 & 63), t >= 2 ? "=" : o.charAt(n >>> 6 & 63), t >= 1 ? "=" : o.charAt(63 & n)];
                    return a.join("") },
                m = t.btoa ? function(e) {
                    return t.btoa(e) } : function(e) {
                    return e.replace(/[\s\S]{1,3}/g, h) },
                _ = a ? function(e) {
                    return (e.constructor === a.constructor ? e : new a(e)).toString("base64") } : function(e) {
                    return m(f(e)) },
                p = function(e, t) {
                    return t ? _(String(e)).replace(/[+\/]/g, function(e) {
                        return "+" == e ? "-" : "_" }).replace(/=/g, "") : _(String(e)) },
                y = function(e) {
                    return p(e, !0) },
                g = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
                v = function(e) {
                    switch (e.length) {
                        case 4:
                            var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                                n = t - 65536;
                            return u((n >>> 10) + 55296) + u((1023 & n) + 56320);
                        case 3:
                            return u((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                        default:
                            return u((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1)) } },
                M = function(e) {
                    return e.replace(g, v) },
                L = function(e) {
                    var t = e.length,
                        n = t % 4,
                        a = (t > 0 ? d[e.charAt(0)] << 18 : 0) | (t > 1 ? d[e.charAt(1)] << 12 : 0) | (t > 2 ? d[e.charAt(2)] << 6 : 0) | (t > 3 ? d[e.charAt(3)] : 0),
                        r = [u(a >>> 16), u(a >>> 8 & 255), u(255 & a)];
                    return r.length -= [0, 0, 2, 1][n], r.join("") },
                Y = t.atob ? function(e) {
                    return t.atob(e) } : function(e) {
                    return e.replace(/[\s\S]{1,4}/g, L) },
                D = a ? function(e) {
                    return (e.constructor === a.constructor ? e : new a(e, "base64")).toString() } : function(e) {
                    return M(Y(e)) },
                k = function(e) {
                    return D(String(e).replace(/[-_]/g, function(e) {
                        return "-" == e ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                w = function() {
                    var e = t.Base64;
                    return t.Base64 = r, e };
            if (t.Base64 = { VERSION: i, atob: Y, btoa: m, fromBase64: k, toBase64: p, utob: f, encode: p, encodeURI: y, btou: M, decode: k, noConflict: w }, "function" == typeof Object.defineProperty) {
                var T = function(e) {
                    return { value: e, enumerable: !1, writable: !0, configurable: !0 } };
                t.Base64.extendString = function() { Object.defineProperty(String.prototype, "fromBase64", T(function() {
                        return k(this) })), Object.defineProperty(String.prototype, "toBase64", T(function(e) {
                        return p(this, e) })), Object.defineProperty(String.prototype, "toBase64URI", T(function() {
                        return p(this, !0) })) } }
            t.Meteor && (Base64 = t.Base64) }(this) }, function(e, t, n) {
        (function(e, a) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            "use strict";

            function r() {
                function e() {}
                try {
                    var t = new Uint8Array(1);
                    return t.foo = function() {
                        return 42 }, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (n) {
                    return !1 } }

            function i() {
                return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function e(t) {
                return this instanceof e ? (e.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? s(this, t) : "string" == typeof t ? o(this, t, arguments.length > 1 ? arguments[1] : "utf8") : d(this, t)) : arguments.length > 1 ? new e(t, arguments[1]) : new e(t) }

            function s(t, n) {
                if (t = _(t, 0 > n ? 0 : 0 | p(n)), !e.TYPED_ARRAY_SUPPORT)
                    for (var a = 0; n > a; a++) t[a] = 0;
                return t }

            function o(e, t, n) {
                ("string" != typeof n || "" === n) && (n = "utf8");
                var a = 0 | g(t, n);
                return e = _(e, a), e.write(t, n), e }

            function d(t, n) {
                if (e.isBuffer(n)) return u(t, n);
                if (X(n)) return l(t, n);
                if (null == n) throw new TypeError("must start with number, buffer, array or string");
                if ("undefined" != typeof ArrayBuffer) {
                    if (n.buffer instanceof ArrayBuffer) return c(t, n);
                    if (n instanceof ArrayBuffer) return f(t, n) }
                return n.length ? h(t, n) : m(t, n) }

            function u(e, t) {
                var n = 0 | p(t.length);
                return e = _(e, n), t.copy(e, 0, 0, n), e }

            function l(e, t) {
                var n = 0 | p(t.length);
                e = _(e, n);
                for (var a = 0; n > a; a += 1) e[a] = 255 & t[a];
                return e }

            function c(e, t) {
                var n = 0 | p(t.length);
                e = _(e, n);
                for (var a = 0; n > a; a += 1) e[a] = 255 & t[a];
                return e }

            function f(t, n) {
                return e.TYPED_ARRAY_SUPPORT ? (n.byteLength, t = e._augment(new Uint8Array(n))) : t = c(t, new Uint8Array(n)), t }

            function h(e, t) {
                var n = 0 | p(t.length);
                e = _(e, n);
                for (var a = 0; n > a; a += 1) e[a] = 255 & t[a];
                return e }

            function m(e, t) {
                var n, a = 0; "Buffer" === t.type && X(t.data) && (n = t.data, a = 0 | p(n.length)), e = _(e, a);
                for (var r = 0; a > r; r += 1) e[r] = 255 & n[r];
                return e }

            function _(t, n) { e.TYPED_ARRAY_SUPPORT ? (t = e._augment(new Uint8Array(n)), t.__proto__ = e.prototype) : (t.length = n, t._isBuffer = !0);
                var a = 0 !== n && n <= e.poolSize >>> 1;
                return a && (t.parent = K), t }

            function p(e) {
                if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                return 0 | e }

            function y(t, n) {
                if (!(this instanceof y)) return new y(t, n);
                var a = new e(t, n);
                return delete a.parent, a }

            function g(e, t) { "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var a = !1;;) switch (t) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return B(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return $(e).length;
                    default:
                        if (a) return B(e).length;
                        t = ("" + t).toLowerCase(), a = !0 } }

            function v(e, t, n) {
                var a = !1;
                if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), 0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";
                for (;;) switch (e) {
                    case "hex":
                        return E(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, t, n);
                    case "ascii":
                        return S(this, t, n);
                    case "binary":
                        return j(this, t, n);
                    case "base64":
                        return T(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return F(this, t, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), a = !0 } }

            function M(e, t, n, a) { n = Number(n) || 0;
                var r = e.length - n;
                a ? (a = Number(a), a > r && (a = r)) : a = r;
                var i = t.length;
                if (i % 2 !== 0) throw new Error("Invalid hex string");
                a > i / 2 && (a = i / 2);
                for (var s = 0; a > s; s++) {
                    var o = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(o)) throw new Error("Invalid hex string");
                    e[n + s] = o }
                return s }

            function L(e, t, n, a) {
                return J(B(t, e.length - n), e, n, a) }

            function Y(e, t, n, a) {
                return J(U(t), e, n, a) }

            function D(e, t, n, a) {
                return Y(e, t, n, a) }

            function k(e, t, n, a) {
                return J($(t), e, n, a) }

            function w(e, t, n, a) {
                return J(q(t, e.length - n), e, n, a) }

            function T(e, t, n) {
                return 0 === t && n === e.length ? V.fromByteArray(e) : V.fromByteArray(e.slice(t, n)) }

            function b(e, t, n) { n = Math.min(e.length, n);
                for (var a = [], r = t; n > r;) {
                    var i = e[r],
                        s = null,
                        o = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n >= r + o) {
                        var d, u, l, c;
                        switch (o) {
                            case 1:
                                128 > i && (s = i);
                                break;
                            case 2:
                                d = e[r + 1], 128 === (192 & d) && (c = (31 & i) << 6 | 63 & d, c > 127 && (s = c));
                                break;
                            case 3:
                                d = e[r + 1], u = e[r + 2], 128 === (192 & d) && 128 === (192 & u) && (c = (15 & i) << 12 | (63 & d) << 6 | 63 & u, c > 2047 && (55296 > c || c > 57343) && (s = c));
                                break;
                            case 4:
                                d = e[r + 1], u = e[r + 2], l = e[r + 3], 128 === (192 & d) && 128 === (192 & u) && 128 === (192 & l) && (c = (15 & i) << 18 | (63 & d) << 12 | (63 & u) << 6 | 63 & l, c > 65535 && 1114112 > c && (s = c)) } }
                    null === s ? (s = 65533, o = 1) : s > 65535 && (s -= 65536, a.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), a.push(s), r += o }
                return x(a) }

            function x(e) {
                var t = e.length;
                if (Z >= t) return String.fromCharCode.apply(String, e);
                for (var n = "", a = 0; t > a;) n += String.fromCharCode.apply(String, e.slice(a, a += Z));
                return n }

            function S(e, t, n) {
                var a = "";
                n = Math.min(e.length, n);
                for (var r = t; n > r; r++) a += String.fromCharCode(127 & e[r]);
                return a }

            function j(e, t, n) {
                var a = "";
                n = Math.min(e.length, n);
                for (var r = t; n > r; r++) a += String.fromCharCode(e[r]);
                return a }

            function E(e, t, n) {
                var a = e.length;
                (!t || 0 > t) && (t = 0), (!n || 0 > n || n > a) && (n = a);
                for (var r = "", i = t; n > i; i++) r += R(e[i]);
                return r }

            function F(e, t, n) {
                for (var a = e.slice(t, n), r = "", i = 0; i < a.length; i += 2) r += String.fromCharCode(a[i] + 256 * a[i + 1]);
                return r }

            function C(e, t, n) {
                if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

            function A(t, n, a, r, i, s) {
                if (!e.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
                if (n > i || s > n) throw new RangeError("value is out of bounds");
                if (a + r > t.length) throw new RangeError("index out of range") }

            function P(e, t, n, a) { 0 > t && (t = 65535 + t + 1);
                for (var r = 0, i = Math.min(e.length - n, 2); i > r; r++) e[n + r] = (t & 255 << 8 * (a ? r : 1 - r)) >>> 8 * (a ? r : 1 - r) }

            function H(e, t, n, a) { 0 > t && (t = 4294967295 + t + 1);
                for (var r = 0, i = Math.min(e.length - n, 4); i > r; r++) e[n + r] = t >>> 8 * (a ? r : 3 - r) & 255 }

            function W(e, t, n, a, r, i) {
                if (t > r || i > t) throw new RangeError("value is out of bounds");
                if (n + a > e.length) throw new RangeError("index out of range");
                if (0 > n) throw new RangeError("index out of range") }

            function O(e, t, n, a, r) {
                return r || W(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), G.write(e, t, n, a, 23, 4), n + 4 }

            function z(e, t, n, a, r) {
                return r || W(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), G.write(e, t, n, a, 52, 8), n + 8 }

            function N(e) {
                if (e = I(e).replace(ee, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e }

            function I(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }

            function R(e) {
                return 16 > e ? "0" + e.toString(16) : e.toString(16) }

            function B(e, t) { t = t || 1 / 0;
                for (var n, a = e.length, r = null, i = [], s = 0; a > s; s++) {
                    if (n = e.charCodeAt(s), n > 55295 && 57344 > n) {
                        if (!r) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue }
                            if (s + 1 === a) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue }
                            r = n;
                            continue }
                        if (56320 > n) {
                            (t -= 3) > -1 && i.push(239, 191, 189), r = n;
                            continue }
                        n = (r - 55296 << 10 | n - 56320) + 65536 } else r && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (r = null, 128 > n) {
                        if ((t -= 1) < 0) break;
                        i.push(n) } else if (2048 > n) {
                        if ((t -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128) } else if (65536 > n) {
                        if ((t -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else {
                        if (!(1114112 > n)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } }
                return i }

            function U(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t }

            function q(e, t) {
                for (var n, a, r, i = [], s = 0; s < e.length && !((t -= 2) < 0); s++) n = e.charCodeAt(s), a = n >> 8, r = n % 256, i.push(r), i.push(a);
                return i }

            function $(e) {
                return V.toByteArray(N(e)) }

            function J(e, t, n, a) {
                for (var r = 0; a > r && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
                return r }
            var V = n(4),
                G = n(5),
                X = n(6);
            t.Buffer = e, t.SlowBuffer = y, t.INSPECT_MAX_BYTES = 50, e.poolSize = 8192;
            var K = {};
            e.TYPED_ARRAY_SUPPORT = void 0 !== a.TYPED_ARRAY_SUPPORT ? a.TYPED_ARRAY_SUPPORT : r(), e.TYPED_ARRAY_SUPPORT ? (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array) : (e.prototype.length = void 0, e.prototype.parent = void 0), e.isBuffer = function(e) {
                return !(null == e || !e._isBuffer) }, e.compare = function(t, n) {
                if (!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var a = t.length, r = n.length, i = 0, s = Math.min(a, r); s > i && t[i] === n[i];) ++i;
                return i !== s && (a = t[i], r = n[i]), r > a ? -1 : a > r ? 1 : 0 }, e.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, e.concat = function(t, n) {
                if (!X(t)) throw new TypeError("list argument must be an Array of Buffers.");
                if (0 === t.length) return new e(0);
                var a;
                if (void 0 === n)
                    for (n = 0, a = 0; a < t.length; a++) n += t[a].length;
                var r = new e(n),
                    i = 0;
                for (a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.copy(r, i), i += s.length }
                return r }, e.byteLength = g, e.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : v.apply(this, arguments) }, e.prototype.equals = function(t) {
                if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t ? !0 : 0 === e.compare(this, t) }, e.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">" }, e.prototype.compare = function(t) {
                if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t ? 0 : e.compare(this, t) }, e.prototype.indexOf = function(t, n) {
                function a(e, t, n) {
                    for (var a = -1, r = 0; n + r < e.length; r++)
                        if (e[n + r] === t[-1 === a ? 0 : r - a]) {
                            if (-1 === a && (a = r), r - a + 1 === t.length) return n + a } else a = -1;
                    return -1 }
                if (n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n >>= 0, 0 === this.length) return -1;
                if (n >= this.length) return -1;
                if (0 > n && (n = Math.max(this.length + n, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, n);
                if (e.isBuffer(t)) return a(this, t, n);
                if ("number" == typeof t) return e.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, n) : a(this, [t], n);
                throw new TypeError("val must be string, number or Buffer") }, e.prototype.get = function(e) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e) }, e.prototype.set = function(e, t) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t) }, e.prototype.write = function(e, t, n, a) {
                if (void 0 === t) a = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) a = t, n = this.length, t = 0;
                else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === a && (a = "utf8")) : (a = n, n = void 0);
                else {
                    var r = a;
                    a = t, t = 0 | n, n = r }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
                a || (a = "utf8");
                for (var s = !1;;) switch (a) {
                    case "hex":
                        return M(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return L(this, e, t, n);
                    case "ascii":
                        return Y(this, e, t, n);
                    case "binary":
                        return D(this, e, t, n);
                    case "base64":
                        return k(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return w(this, e, t, n);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + a);
                        a = ("" + a).toLowerCase(), s = !0 } }, e.prototype.toJSON = function() {
                return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
            var Z = 4096;
            e.prototype.slice = function(t, n) {
                var a = this.length;
                t = ~~t, n = void 0 === n ? a : ~~n, 0 > t ? (t += a, 0 > t && (t = 0)) : t > a && (t = a), 0 > n ? (n += a, 0 > n && (n = 0)) : n > a && (n = a), t > n && (n = t);
                var r;
                if (e.TYPED_ARRAY_SUPPORT) r = e._augment(this.subarray(t, n));
                else {
                    var i = n - t;
                    r = new e(i, void 0);
                    for (var s = 0; i > s; s++) r[s] = this[s + t] }
                return r.length && (r.parent = this.parent || this), r }, e.prototype.readUIntLE = function(e, t, n) { e = 0 | e, t = 0 | t, n || C(e, t, this.length);
                for (var a = this[e], r = 1, i = 0; ++i < t && (r *= 256);) a += this[e + i] * r;
                return a }, e.prototype.readUIntBE = function(e, t, n) { e = 0 | e, t = 0 | t, n || C(e, t, this.length);
                for (var a = this[e + --t], r = 1; t > 0 && (r *= 256);) a += this[e + --t] * r;
                return a }, e.prototype.readUInt8 = function(e, t) {
                return t || C(e, 1, this.length), this[e] }, e.prototype.readUInt16LE = function(e, t) {
                return t || C(e, 2, this.length), this[e] | this[e + 1] << 8 }, e.prototype.readUInt16BE = function(e, t) {
                return t || C(e, 2, this.length), this[e] << 8 | this[e + 1] }, e.prototype.readUInt32LE = function(e, t) {
                return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, e.prototype.readUInt32BE = function(e, t) {
                return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, e.prototype.readIntLE = function(e, t, n) { e = 0 | e, t = 0 | t, n || C(e, t, this.length);
                for (var a = this[e], r = 1, i = 0; ++i < t && (r *= 256);) a += this[e + i] * r;
                return r *= 128, a >= r && (a -= Math.pow(2, 8 * t)), a }, e.prototype.readIntBE = function(e, t, n) { e = 0 | e, t = 0 | t, n || C(e, t, this.length);
                for (var a = t, r = 1, i = this[e + --a]; a > 0 && (r *= 256);) i += this[e + --a] * r;
                return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i }, e.prototype.readInt8 = function(e, t) {
                return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, e.prototype.readInt16LE = function(e, t) { t || C(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n }, e.prototype.readInt16BE = function(e, t) { t || C(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n }, e.prototype.readInt32LE = function(e, t) {
                return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, e.prototype.readInt32BE = function(e, t) {
                return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, e.prototype.readFloatLE = function(e, t) {
                return t || C(e, 4, this.length), G.read(this, e, !0, 23, 4) }, e.prototype.readFloatBE = function(e, t) {
                return t || C(e, 4, this.length), G.read(this, e, !1, 23, 4) }, e.prototype.readDoubleLE = function(e, t) {
                return t || C(e, 8, this.length), G.read(this, e, !0, 52, 8) }, e.prototype.readDoubleBE = function(e, t) {
                return t || C(e, 8, this.length), G.read(this, e, !1, 52, 8) }, e.prototype.writeUIntLE = function(e, t, n, a) { e = +e, t = 0 | t, n = 0 | n, a || A(this, e, t, n, Math.pow(2, 8 * n), 0);
                var r = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < n && (r *= 256);) this[t + i] = e / r & 255;
                return t + n }, e.prototype.writeUIntBE = function(e, t, n, a) { e = +e, t = 0 | t, n = 0 | n, a || A(this, e, t, n, Math.pow(2, 8 * n), 0);
                var r = n - 1,
                    i = 1;
                for (this[t + r] = 255 & e; --r >= 0 && (i *= 256);) this[t + r] = e / i & 255;
                return t + n }, e.prototype.writeUInt8 = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1 }, e.prototype.writeUInt16LE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : P(this, t, n, !0), n + 2 }, e.prototype.writeUInt16BE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : P(this, t, n, !1), n + 2 }, e.prototype.writeUInt32LE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : H(this, t, n, !0), n + 4 }, e.prototype.writeUInt32BE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : H(this, t, n, !1), n + 4 }, e.prototype.writeIntLE = function(e, t, n, a) {
                if (e = +e, t = 0 | t, !a) {
                    var r = Math.pow(2, 8 * n - 1);
                    A(this, e, t, n, r - 1, -r) }
                var i = 0,
                    s = 1,
                    o = 0 > e ? 1 : 0;
                for (this[t] = 255 & e; ++i < n && (s *= 256);) this[t + i] = (e / s >> 0) - o & 255;
                return t + n }, e.prototype.writeIntBE = function(e, t, n, a) {
                if (e = +e, t = 0 | t, !a) {
                    var r = Math.pow(2, 8 * n - 1);
                    A(this, e, t, n, r - 1, -r) }
                var i = n - 1,
                    s = 1,
                    o = 0 > e ? 1 : 0;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = (e / s >> 0) - o & 255;
                return t + n }, e.prototype.writeInt8 = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[n] = 255 & t, n + 1 }, e.prototype.writeInt16LE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : P(this, t, n, !0), n + 2 }, e.prototype.writeInt16BE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : P(this, t, n, !1), n + 2 }, e.prototype.writeInt32LE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : H(this, t, n, !0), n + 4 }, e.prototype.writeInt32BE = function(t, n, a) {
                return t = +t, n = 0 | n, a || A(this, t, n, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : H(this, t, n, !1), n + 4 }, e.prototype.writeFloatLE = function(e, t, n) {
                return O(this, e, t, !0, n) }, e.prototype.writeFloatBE = function(e, t, n) {
                return O(this, e, t, !1, n) }, e.prototype.writeDoubleLE = function(e, t, n) {
                return z(this, e, t, !0, n) }, e.prototype.writeDoubleBE = function(e, t, n) {
                return z(this, e, t, !1, n) }, e.prototype.copy = function(t, n, a, r) {
                if (a || (a = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && a > r && (r = a), r === a) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (0 > n) throw new RangeError("targetStart out of bounds");
                if (0 > a || a >= this.length) throw new RangeError("sourceStart out of bounds");
                if (0 > r) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - n < r - a && (r = t.length - n + a);
                var i, s = r - a;
                if (this === t && n > a && r > n)
                    for (i = s - 1; i >= 0; i--) t[i + n] = this[i + a];
                else if (1e3 > s || !e.TYPED_ARRAY_SUPPORT)
                    for (i = 0; s > i; i++) t[i + n] = this[i + a];
                else t._set(this.subarray(a, a + s), n);
                return s }, e.prototype.fill = function(e, t, n) {
                if (e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");
                if (n !== t && 0 !== this.length) {
                    if (0 > t || t >= this.length) throw new RangeError("start out of bounds");
                    if (0 > n || n > this.length) throw new RangeError("end out of bounds");
                    var a;
                    if ("number" == typeof e)
                        for (a = t; n > a; a++) this[a] = e;
                    else {
                        var r = B(e.toString()),
                            i = r.length;
                        for (a = t; n > a; a++) this[a] = r[a % i] }
                    return this } }, e.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (e.TYPED_ARRAY_SUPPORT) return new e(this).buffer;
                    for (var t = new Uint8Array(this.length), n = 0, a = t.length; a > n; n += 1) t[n] = this[n];
                    return t.buffer }
                throw new TypeError("Buffer.toArrayBuffer not supported in this browser") };
            var Q = e.prototype;
            e._augment = function(t) {
                return t.constructor = e, t._isBuffer = !0, t._set = t.set, t.get = Q.get, t.set = Q.set, t.write = Q.write, t.toString = Q.toString, t.toLocaleString = Q.toString, t.toJSON = Q.toJSON, t.equals = Q.equals, t.compare = Q.compare, t.indexOf = Q.indexOf, t.copy = Q.copy, t.slice = Q.slice, t.readUIntLE = Q.readUIntLE, t.readUIntBE = Q.readUIntBE, t.readUInt8 = Q.readUInt8, t.readUInt16LE = Q.readUInt16LE, t.readUInt16BE = Q.readUInt16BE, t.readUInt32LE = Q.readUInt32LE, t.readUInt32BE = Q.readUInt32BE, t.readIntLE = Q.readIntLE, t.readIntBE = Q.readIntBE, t.readInt8 = Q.readInt8, t.readInt16LE = Q.readInt16LE, t.readInt16BE = Q.readInt16BE, t.readInt32LE = Q.readInt32LE, t.readInt32BE = Q.readInt32BE, t.readFloatLE = Q.readFloatLE, t.readFloatBE = Q.readFloatBE, t.readDoubleLE = Q.readDoubleLE, t.readDoubleBE = Q.readDoubleBE, t.writeUInt8 = Q.writeUInt8, t.writeUIntLE = Q.writeUIntLE, t.writeUIntBE = Q.writeUIntBE, t.writeUInt16LE = Q.writeUInt16LE, t.writeUInt16BE = Q.writeUInt16BE, t.writeUInt32LE = Q.writeUInt32LE, t.writeUInt32BE = Q.writeUInt32BE, t.writeIntLE = Q.writeIntLE, t.writeIntBE = Q.writeIntBE, t.writeInt8 = Q.writeInt8, t.writeInt16LE = Q.writeInt16LE, t.writeInt16BE = Q.writeInt16BE, t.writeInt32LE = Q.writeInt32LE, t.writeInt32BE = Q.writeInt32BE, t.writeFloatLE = Q.writeFloatLE, t.writeFloatBE = Q.writeFloatBE, t.writeDoubleLE = Q.writeDoubleLE, t.writeDoubleBE = Q.writeDoubleBE, t.fill = Q.fill, t.inspect = Q.inspect, t.toArrayBuffer = Q.toArrayBuffer, t };
            var ee = /[^+\/0-9A-Za-z-_]/g
        }).call(t, n(3).Buffer, function() {
            return this }())
    }, function(e, t, n) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";! function(e) { "use strict";

            function t(e) {
                var t = e.charCodeAt(0);
                return t === s || t === c ? 62 : t === o || t === f ? 63 : d > t ? -1 : d + 10 > t ? t - d + 26 + 26 : l + 26 > t ? t - l : u + 26 > t ? t - u + 26 : void 0 }

            function n(e) {
                function n(e) { u[c++] = e }
                var a, r, s, o, d, u;
                if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var l = e.length;
                d = "=" === e.charAt(l - 2) ? 2 : "=" === e.charAt(l - 1) ? 1 : 0, u = new i(3 * e.length / 4 - d), s = d > 0 ? e.length - 4 : e.length;
                var c = 0;
                for (a = 0, r = 0; s > a; a += 4, r += 3) o = t(e.charAt(a)) << 18 | t(e.charAt(a + 1)) << 12 | t(e.charAt(a + 2)) << 6 | t(e.charAt(a + 3)), n((16711680 & o) >> 16), n((65280 & o) >> 8), n(255 & o);
                return 2 === d ? (o = t(e.charAt(a)) << 2 | t(e.charAt(a + 1)) >> 4, n(255 & o)) : 1 === d && (o = t(e.charAt(a)) << 10 | t(e.charAt(a + 1)) << 4 | t(e.charAt(a + 2)) >> 2, n(o >> 8 & 255), n(255 & o)), u }

            function r(e) {
                function t(e) {
                    return a.charAt(e) }

                function n(e) {
                    return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e) }
                var r, i, s, o = e.length % 3,
                    d = "";
                for (r = 0, s = e.length - o; s > r; r += 3) i = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], d += n(i);
                switch (o) {
                    case 1:
                        i = e[e.length - 1], d += t(i >> 2), d += t(i << 4 & 63), d += "==";
                        break;
                    case 2:
                        i = (e[e.length - 2] << 8) + e[e.length - 1], d += t(i >> 10), d += t(i >> 4 & 63), d += t(i << 2 & 63), d += "=" }
                return d }
            var i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                s = "+".charCodeAt(0),
                o = "/".charCodeAt(0),
                d = "0".charCodeAt(0),
                u = "a".charCodeAt(0),
                l = "A".charCodeAt(0),
                c = "-".charCodeAt(0),
                f = "_".charCodeAt(0);
            e.toByteArray = n, e.fromByteArray = r }(t) }, function(e, t) { t.read = function(e, t, n, a, r) {
            var i, s, o = 8 * r - a - 1,
                d = (1 << o) - 1,
                u = d >> 1,
                l = -7,
                c = n ? r - 1 : 0,
                f = n ? -1 : 1,
                h = e[t + c];
            for (c += f, i = h & (1 << -l) - 1, h >>= -l, l += o; l > 0; i = 256 * i + e[t + c], c += f, l -= 8);
            for (s = i & (1 << -l) - 1, i >>= -l, l += a; l > 0; s = 256 * s + e[t + c], c += f, l -= 8);
            if (0 === i) i = 1 - u;
            else {
                if (i === d) return s ? NaN : (h ? -1 : 1) * (1 / 0);
                s += Math.pow(2, a), i -= u }
            return (h ? -1 : 1) * s * Math.pow(2, i - a) }, t.write = function(e, t, n, a, r, i) {
            var s, o, d, u = 8 * i - r - 1,
                l = (1 << u) - 1,
                c = l >> 1,
                f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = a ? 0 : i - 1,
                m = a ? 1 : -1,
                _ = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -s)) < 1 && (s--, d *= 2), t += s + c >= 1 ? f / d : f * Math.pow(2, 1 - c), t * d >= 2 && (s++, d /= 2), s + c >= l ? (o = 0, s = l) : s + c >= 1 ? (o = (t * d - 1) * Math.pow(2, r), s += c) : (o = t * Math.pow(2, c - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + h] = 255 & o, h += m, o /= 256, r -= 8);
            for (s = s << r | o, u += r; u > 0; e[n + h] = 255 & s, h += m, s /= 256, u -= 8);
            e[n + h - m] |= 128 * _ } }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e) } }, function(e, t, n) {
        (function(e) {
            /*!
             * jQuery Validation Plugin 1.11.1
             *
             * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
             * http://docs.jquery.com/Plugins/Validation
             *
             * Copyright 2013 Jörn Zaefferer
             * Released under the MIT license:
             *   http://www.opensource.org/licenses/mit-license.php
             */
            ! function(e) { e.extend(e.fn, { validate: function(t) {
                        if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                        var n = e.data(this[0], "validator");
                        return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) { n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0) }), this.submit(function(t) {
                            function a() {
                                var a;
                                if (n.settings.submitHandler) { n.submitButton && (a = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm));
                                    var r = n.settings.submitHandler.call(n, n.currentForm, t);
                                    return n.submitButton && a.remove(), !!r }
                                return !0 }
                            return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, a()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : a() : (n.focusInvalid(), !1) })), n) }, valid: function() {
                        if (e(this[0]).is("form")) return this.validate().form();
                        var t = !0,
                            n = e(this[0].form).validate();
                        return this.each(function() { t = t && n.element(this) }), t }, removeAttrs: function(t) {
                        var n = {},
                            a = this;
                        return e.each(t.split(/\s/), function(e, t) { n[t] = a.attr(t), a.removeAttr(t) }), n }, rules: function(t, n) {
                        var a = this[0];
                        if (t) {
                            var r = e.data(a.form, "validator").settings,
                                i = r.rules,
                                s = e.validator.staticRules(a);
                            switch (t) {
                                case "add":
                                    e.extend(s, e.validator.normalizeRule(n)), delete s.messages, i[a.name] = s, n.messages && (r.messages[a.name] = e.extend(r.messages[a.name], n.messages));
                                    break;
                                case "remove":
                                    if (!n) return delete i[a.name], s;
                                    var o = {};
                                    return e.each(n.split(/\s/), function(e, t) { o[t] = s[t], delete s[t] }), o } }
                        var d = e.validator.normalizeRules(e.extend({}, e.validator.classRules(a), e.validator.attributeRules(a), e.validator.dataRules(a), e.validator.staticRules(a)), a);
                        if (d.required) {
                            var u = d.required;
                            delete d.required, d = e.extend({ required: u }, d) }
                        return d } }), e.extend(e.expr[":"], { blank: function(t) {
                        return !e.trim("" + e(t).val()) }, filled: function(t) {
                        return !!e.trim("" + e(t).val()) }, unchecked: function(t) {
                        return !e(t).prop("checked") } }), e.validator = function(t, n) { this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init() }, e.validator.format = function(t, n) {
                    return 1 === arguments.length ? function() {
                        var n = e.makeArray(arguments);
                        return n.unshift(t), e.validator.format.apply(this, n) } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) { t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                            return n }) }), t) }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(e, t) { this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide()) }, onfocusout: function(e, t) { this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e) }, onkeyup: function(e, t) {
                            (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e) }, onclick: function(e, t) { e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode) }, highlight: function(t, n, a) { "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(a) : e(t).addClass(n).removeClass(a) }, unhighlight: function(t, n, a) { "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(a) : e(t).removeClass(n).addClass(a) } }, setDefaults: function(t) { e.extend(e.validator.defaults, t) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function() {
                            function t(t) {
                                var n = e.data(this[0].form, "validator"),
                                    a = "on" + t.type.replace(/^validate/, "");
                                n.settings[a] && n.settings[a].call(n, this[0], t) }
                            this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                            var n = this.groups = {};
                            e.each(this.settings.groups, function(t, a) { "string" == typeof a && (a = a.split(/\s/)), e.each(a, function(e, a) { n[a] = t }) });
                            var a = this.settings.rules;
                            e.each(a, function(t, n) { a[t] = e.validator.normalizeRule(n) }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler) }, form: function() {
                            return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm();
                            for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                            return this.valid() }, element: function(t) { t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                            var n = this.check(t) !== !1;
                            return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n }, showErrors: function(t) {
                            if (t) { e.extend(this.errorMap, t), this.errorList = [];
                                for (var n in t) this.errorList.push({ message: t[n], element: this.findByName(n)[0] });
                                this.successList = e.grep(this.successList, function(e) {
                                    return !(e.name in t) }) }
                            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue") }, numberOfInvalids: function() {
                            return this.objectLength(this.invalid) }, objectLength: function(e) {
                            var t = 0;
                            for (var n in e) t++;
                            return t }, hideErrors: function() { this.addWrapper(this.toHide).hide() }, valid: function() {
                            return 0 === this.size() }, size: function() {
                            return this.errorList.length }, focusInvalid: function() {
                            if (this.settings.focusInvalid) try { e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (t) {} }, findLastActive: function() {
                            var t = this.lastActive;
                            return t && 1 === e.grep(this.errorList, function(e) {
                                return e.element.name === t.name }).length && t }, elements: function() {
                            var t = this,
                                n = {};
                            return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                                return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0) }) }, clean: function(t) {
                            return e(t)[0] }, errors: function() {
                            var t = this.settings.errorClass.replace(" ", ".");
                            return e(this.settings.errorElement + "." + t, this.errorContext) }, reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(e) { this.reset(), this.toHide = this.errorsFor(e) }, elementValue: function(t) {
                            var n = e(t).attr("type"),
                                a = e(t).val();
                            return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof a ? a.replace(/\r/g, "") : a }, check: function(t) { t = this.validationTargetFor(this.clean(t));
                            var n, a = e(t).rules(),
                                r = !1,
                                i = this.elementValue(t);
                            for (var s in a) {
                                var o = { method: s, parameters: a[s] };
                                try {
                                    if (n = e.validator.methods[s].call(this, i, t, o.parameters), "dependency-mismatch" === n) { r = !0;
                                        continue }
                                    if (r = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                                    if (!n) return this.formatAndAdd(t, o), !1 } catch (d) {
                                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", d), d } }
                            return r ? void 0 : (this.objectLength(a) && this.successList.push(t), !0) }, customDataMessage: function(t, n) {
                            return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase()) }, customMessage: function(e, t) {
                            var n = this.settings.messages[e];
                            return n && (n.constructor === String ? n : n[t]) }, findDefined: function() {
                            for (var e = 0; e < arguments.length; e++)
                                if (void 0 !== arguments[e]) return arguments[e] }, defaultMessage: function(t, n) {
                            return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>") }, formatAndAdd: function(t, n) {
                            var a = this.defaultMessage(t, n.method),
                                r = /\$?\{(\d+)\}/g; "function" == typeof a ? a = a.call(this, n.parameters, t) : r.test(a) && (a = e.validator.format(a.replace(r, "{$1}"), n.parameters)), this.errorList.push({ message: a, element: t }), this.errorMap[t.name] = a, this.submitted[t.name] = a }, addWrapper: function(e) {
                            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e }, defaultShowErrors: function() {
                            var e, t;
                            for (e = 0; this.errorList[e]; e++) {
                                var n = this.errorList[e];
                                this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message) }
                            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                                for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                            if (this.settings.unhighlight)
                                for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() {
                            return this.currentElements.not(this.invalidElements()) }, invalidElements: function() {
                            return e(this.errorList).map(function() {
                                return this.element }) }, showLabel: function(t, n) {
                            var a = this.errorsFor(t);
                            a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(a).length || (this.settings.errorPlacement ? this.settings.errorPlacement(a, e(t)) : a.insertAfter(t))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a) }, errorsFor: function(t) {
                            var n = this.idOrName(t);
                            return this.errors().filter(function() {
                                return e(this).attr("for") === n }) }, idOrName: function(e) {
                            return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name) }, validationTargetFor: function(e) {
                            return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e }, checkable: function(e) {
                            return /radio|checkbox/i.test(e.type) }, findByName: function(t) {
                            return e(this.currentForm).find("[name='" + t + "']") }, getLength: function(t, n) {
                            switch (n.nodeName.toLowerCase()) {
                                case "select":
                                    return e("option:selected", n).length;
                                case "input":
                                    if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length }
                            return t.length }, depend: function(e, t) {
                            return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0 }, dependTypes: { "boolean": function(e, t) {
                                return e }, string: function(t, n) {
                                return !!e(t, n.form).length }, "function": function(e, t) {
                                return e(t) } }, optional: function(t) {
                            var n = this.elementValue(t);
                            return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch" }, startRequest: function(e) { this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0) }, stopRequest: function(t, n) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(t) {
                            return e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") }) } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function(t, n) { t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t) }, classRules: function(t) {
                        var n = {},
                            a = e(t).attr("class");
                        return a && e.each(a.split(" "), function() { this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]) }), n }, attributeRules: function(t) {
                        var n = {},
                            a = e(t),
                            r = a[0].getAttribute("type");
                        for (var i in e.validator.methods) {
                            var s; "required" === i ? (s = a.get(0).getAttribute(i), "" === s && (s = !0), s = !!s) : s = a.attr(i), /min|max/.test(i) && (null === r || /number|range|text/.test(r)) && (s = Number(s)), s ? n[i] = s : r === i && "range" !== r && (n[i] = !0) }
                        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n }, dataRules: function(t) {
                        var n, a, r = {},
                            i = e(t);
                        for (n in e.validator.methods) a = i.data("rule-" + n.toLowerCase()), void 0 !== a && (r[n] = a);
                        return r }, staticRules: function(t) {
                        var n = {},
                            a = e.data(t.form, "validator");
                        return a.settings.rules && (n = e.validator.normalizeRule(a.settings.rules[t.name]) || {}), n }, normalizeRules: function(t, n) {
                        return e.each(t, function(a, r) {
                            if (r === !1) return void delete t[a];
                            if (r.param || r.depends) {
                                var i = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        i = !!e(r.depends, n.form).length;
                                        break;
                                    case "function":
                                        i = r.depends.call(n, n) }
                                i ? t[a] = void 0 !== r.param ? r.param : !0 : delete t[a] } }), e.each(t, function(a, r) { t[a] = e.isFunction(r) ? r(n) : r }), e.each(["minlength", "maxlength"], function() { t[this] && (t[this] = Number(t[this])) }), e.each(["rangelength", "range"], function() {
                            var n;
                            t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])])) }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t }, normalizeRule: function(t) {
                        if ("string" == typeof t) {
                            var n = {};
                            e.each(t.split(/\s/), function() { n[this] = !0 }), t = n }
                        return t }, addMethod: function(t, n, a) { e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== a ? a : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t)) }, methods: { required: function(t, n, a) {
                            if (!this.depend(a, n)) return "dependency-mismatch";
                            if ("select" === n.nodeName.toLowerCase()) {
                                var r = e(n).val();
                                return r && r.length > 0 }
                            return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0 }, email: function(e, t) {
                            return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e) }, url: function(e, t) {
                            return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e) }, date: function(e, t) {
                            return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString()) }, dateISO: function(e, t) {
                            return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e) }, number: function(e, t) {
                            return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e) }, digits: function(e, t) {
                            return this.optional(t) || /^\d+$/.test(e) }, creditcard: function(e, t) {
                            if (this.optional(t)) return "dependency-mismatch";
                            if (/[^0-9 \-]+/.test(e)) return !1;
                            var n = 0,
                                a = 0,
                                r = !1;
                            e = e.replace(/\D/g, "");
                            for (var i = e.length - 1; i >= 0; i--) {
                                var s = e.charAt(i);
                                a = parseInt(s, 10), r && (a *= 2) > 9 && (a -= 9), n += a, r = !r }
                            return n % 10 === 0 }, minlength: function(t, n, a) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                            return this.optional(n) || r >= a }, maxlength: function(t, n, a) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                            return this.optional(n) || a >= r }, rangelength: function(t, n, a) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                            return this.optional(n) || r >= a[0] && r <= a[1] }, min: function(e, t, n) {
                            return this.optional(t) || e >= n }, max: function(e, t, n) {
                            return this.optional(t) || n >= e }, range: function(e, t, n) {
                            return this.optional(t) || e >= n[0] && e <= n[1] }, equalTo: function(t, n, a) {
                            var r = e(a);
                            return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() { e(n).valid() }), t === r.val() }, remote: function(t, n, a) {
                            if (this.optional(n)) return "dependency-mismatch";
                            var r = this.previousValue(n);
                            if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, a = "string" == typeof a && { url: a } || a, r.old === t) return r.valid;
                            r.old = t;
                            var i = this;
                            this.startRequest(n);
                            var s = {};
                            return s[n.name] = t, e.ajax(e.extend(!0, { url: a, mode: "abort", port: "validate" + n.name, dataType: "json", data: s, success: function(a) { i.settings.messages[n.name].remote = r.originalMessage;
                                    var s = a === !0 || "true" === a;
                                    if (s) {
                                        var o = i.formSubmitted;
                                        i.prepareElement(n), i.formSubmitted = o, i.successList.push(n), delete i.invalid[n.name], i.showErrors() } else {
                                        var d = {},
                                            u = a || i.defaultMessage(n, "remote");
                                        d[n.name] = r.message = e.isFunction(u) ? u(t) : u, i.invalid[n.name] = !0, i.showErrors(d) }
                                    r.valid = s, i.stopRequest(n, s) } }, a)), "pending" } } }), e.format = e.validator.format }(e),
            function(e) {
                var t = {};
                if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, a) {
                    var r = e.port; "abort" === e.mode && (t[r] && t[r].abort(), t[r] = a) });
                else {
                    var n = e.ajax;
                    e.ajax = function(a) {
                        var r = ("mode" in a ? a : e.ajaxSettings).mode,
                            i = ("port" in a ? a : e.ajaxSettings).port;
                        return "abort" === r ? (t[i] && t[i].abort(), t[i] = n.apply(this, arguments), t[i]) : n.apply(this, arguments) } } }(e),
            function(e) { e.extend(e.fn, { validateDelegate: function(t, n, a) {
                        return this.bind(n, function(n) {
                            var r = e(n.target);
                            return r.is(t) ? a.apply(r, arguments) : void 0 }) } }) }(e)
        }).call(t, n(1))
    }, function(e, t, n) {
        var a, r, i;
        /*!
         * jQuery Form Plugin
         * version: 3.50.0-2014.02.05
         * Requires jQuery v1.5 or later
         * Copyright (c) 2013 M. Alsup
         * Examples and documentation at: http://malsup.com/jquery/form/
         * Project repository: https://github.com/malsup/form
         * Dual licensed under the MIT and GPL licenses.
         * https://github.com/malsup/form#copyright-and-license
         */
        ! function(s) { "use strict";
            r = [n(1)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) { "use strict";

            function t(t) {
                var n = t.data;
                t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n)) }

            function n(t) {
                var n = t.target,
                    a = e(n);
                if (!a.is("[type=submit],[type=image]")) {
                    var r = a.closest("[type=submit]");
                    if (0 === r.length) return;
                    n = r[0] }
                var i = this;
                if (i.clk = n, "image" == n.type)
                    if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
                    else if ("function" == typeof e.fn.offset) {
                    var s = a.offset();
                    i.clk_x = t.pageX - s.left, i.clk_y = t.pageY - s.top } else i.clk_x = t.pageX - n.offsetLeft, i.clk_y = t.pageY - n.offsetTop;
                setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100) }

            function a() {
                if (e.fn.ajaxSubmit.debug) {
                    var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                    window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t) } }
            var r = {};
            r.fileapi = void 0 !== e("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
            var i = !!e.fn.prop;
            e.fn.attr2 = function() {
                if (!i) return this.attr.apply(this, arguments);
                var e = this.prop.apply(this, arguments);
                return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
                function n(n) {
                    var a, r, i = e.param(n, t.traditional).split("&"),
                        s = i.length,
                        o = [];
                    for (a = 0; s > a; a++) i[a] = i[a].replace(/\+/g, " "), r = i[a].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                    return o }

                function s(a) {
                    for (var r = new FormData, i = 0; i < a.length; i++) r.append(a[i].name, a[i].value);
                    if (t.extraData) {
                        var s = n(t.extraData);
                        for (i = 0; i < s.length; i++) s[i] && r.append(s[i][0], s[i][1]) }
                    t.data = null;
                    var o = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: d || "POST" });
                    t.uploadProgress && (o.xhr = function() {
                        var n = e.ajaxSettings.xhr();
                        return n.upload && n.upload.addEventListener("progress", function(e) {
                            var n = 0,
                                a = e.loaded || e.position,
                                r = e.total;
                            e.lengthComputable && (n = Math.ceil(a / r * 100)), t.uploadProgress(e, a, r, n) }, !1), n }), o.data = null;
                    var u = o.beforeSend;
                    return o.beforeSend = function(e, n) { t.formData ? n.data = t.formData : n.data = r, u && u.call(this, e, n) }, e.ajax(o) }

                function o(n) {
                    function r(e) {
                        var t = null;
                        try { e.contentWindow && (t = e.contentWindow.document) } catch (n) { a("cannot get iframe.contentWindow document: " + n) }
                        if (t) return t;
                        try { t = e.contentDocument ? e.contentDocument : e.document } catch (n) { a("cannot get iframe.contentDocument: " + n), t = e.document }
                        return t }

                    function s() {
                        function t() {
                            try {
                                var e = r(y).readyState;
                                a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50) } catch (n) { a("Server abort: ", n, " (", n.name, ")"), o(T), Y && clearTimeout(Y), Y = void 0 } }
                        var n = c.attr2("target"),
                            i = c.attr2("action"),
                            s = "multipart/form-data",
                            u = c.attr("enctype") || c.attr("encoding") || s;
                        D.setAttribute("target", m), (!d || /post/i.test(d)) && D.setAttribute("method", "POST"), i != f.url && D.setAttribute("action", f.url), f.skipEncodingOverride || d && !/post/i.test(d) || c.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), f.timeout && (Y = setTimeout(function() { L = !0, o(w) }, f.timeout));
                        var l = [];
                        try {
                            if (f.extraData)
                                for (var h in f.extraData) f.extraData.hasOwnProperty(h) && (e.isPlainObject(f.extraData[h]) && f.extraData[h].hasOwnProperty("name") && f.extraData[h].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + f.extraData[h].name + '">').val(f.extraData[h].value).appendTo(D)[0]) : l.push(e('<input type="hidden" name="' + h + '">').val(f.extraData[h]).appendTo(D)[0]));
                            f.iframeTarget || p.appendTo("body"), y.attachEvent ? y.attachEvent("onload", o) : y.addEventListener("load", o, !1), setTimeout(t, 15);
                            try { D.submit() } catch (_) {
                                var g = document.createElement("form").submit;
                                g.apply(D) } } finally { D.setAttribute("action", i), D.setAttribute("enctype", u), n ? D.setAttribute("target", n) : c.removeAttr("target"), e(l).remove() } }

                    function o(t) {
                        if (!g.aborted && !E) {
                            if (j = r(y), j || (a("cannot access response document"), t = T), t === w && g) return g.abort("timeout"), void k.reject(g, "timeout");
                            if (t == T && g) return g.abort("server abort"), void k.reject(g, "error", "server abort");
                            if (j && j.location.href != f.iframeSrc || L) { y.detachEvent ? y.detachEvent("onload", o) : y.removeEventListener("load", o, !1);
                                var n, i = "success";
                                try {
                                    if (L) throw "timeout";
                                    var s = "xml" == f.dataType || j.XMLDocument || e.isXMLDoc(j);
                                    if (a("isXml=" + s), !s && window.opera && (null === j.body || !j.body.innerHTML) && --F) return a("requeing onLoad callback, DOM not available"), void setTimeout(o, 250);
                                    var d = j.body ? j.body : j.documentElement;
                                    g.responseText = d ? d.innerHTML : null, g.responseXML = j.XMLDocument ? j.XMLDocument : j, s && (f.dataType = "xml"), g.getResponseHeader = function(e) {
                                        var t = { "content-type": f.dataType };
                                        return t[e.toLowerCase()] }, d && (g.status = Number(d.getAttribute("status")) || g.status, g.statusText = d.getAttribute("statusText") || g.statusText);
                                    var u = (f.dataType || "").toLowerCase(),
                                        l = /(json|script|text)/.test(u);
                                    if (l || f.textarea) {
                                        var c = j.getElementsByTagName("textarea")[0];
                                        if (c) g.responseText = c.value, g.status = Number(c.getAttribute("status")) || g.status, g.statusText = c.getAttribute("statusText") || g.statusText;
                                        else if (l) {
                                            var m = j.getElementsByTagName("pre")[0],
                                                _ = j.getElementsByTagName("body")[0];
                                            m ? g.responseText = m.textContent ? m.textContent : m.innerText : _ && (g.responseText = _.textContent ? _.textContent : _.innerText) } } else "xml" == u && !g.responseXML && g.responseText && (g.responseXML = C(g.responseText));
                                    try { S = P(g, u, f) } catch (v) { i = "parsererror", g.error = n = v || i } } catch (v) { a("error caught: ", v), i = "error", g.error = n = v || i }
                                g.aborted && (a("upload aborted"), i = null), g.status && (i = g.status >= 200 && g.status < 300 || 304 === g.status ? "success" : "error"), "success" === i ? (f.success && f.success.call(f.context, S, "success", g), k.resolve(g.responseText, "success", g), h && e.event.trigger("ajaxSuccess", [g, f])) : i && (void 0 === n && (n = g.statusText), f.error && f.error.call(f.context, g, i, n), k.reject(g, "error", n), h && e.event.trigger("ajaxError", [g, f, n])), h && e.event.trigger("ajaxComplete", [g, f]), h && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, g, i), E = !0, f.timeout && clearTimeout(Y), setTimeout(function() { f.iframeTarget ? p.attr("src", f.iframeSrc) : p.remove(), g.responseXML = null }, 100) } } }
                    var u, l, f, h, m, p, y, g, v, M, L, Y, D = c[0],
                        k = e.Deferred();
                    if (k.abort = function(e) { g.abort(e) }, n)
                        for (l = 0; l < _.length; l++) u = e(_[l]), i ? u.prop("disabled", !1) : u.removeAttr("disabled");
                    if (f = e.extend(!0, {}, e.ajaxSettings, t), f.context = f.context || f, m = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (p = e(f.iframeTarget), M = p.attr2("name"), M ? m = M : p.attr2("name", m)) : (p = e('<iframe name="' + m + '" src="' + f.iframeSrc + '" />'), p.css({ position: "absolute", top: "-1000px", left: "-1000px" })), y = p[0], g = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(t) {
                                var n = "timeout" === t ? "timeout" : "aborted";
                                a("aborting upload... " + n), this.aborted = 1;
                                try { y.contentWindow.document.execCommand && y.contentWindow.document.execCommand("Stop") } catch (r) {}
                                p.attr("src", f.iframeSrc), g.error = n, f.error && f.error.call(f.context, g, n, t), h && e.event.trigger("ajaxError", [g, f, n]), f.complete && f.complete.call(f.context, g, n) } }, h = f.global, h && 0 === e.active++ && e.event.trigger("ajaxStart"), h && e.event.trigger("ajaxSend", [g, f]), f.beforeSend && f.beforeSend.call(f.context, g, f) === !1) return f.global && e.active--, k.reject(), k;
                    if (g.aborted) return k.reject(), k;
                    v = D.clk, v && (M = v.name, M && !v.disabled && (f.extraData = f.extraData || {}, f.extraData[M] = v.value, "image" == v.type && (f.extraData[M + ".x"] = D.clk_x, f.extraData[M + ".y"] = D.clk_y)));
                    var w = 1,
                        T = 2,
                        b = e("meta[name=csrf-token]").attr("content"),
                        x = e("meta[name=csrf-param]").attr("content");
                    x && b && (f.extraData = f.extraData || {}, f.extraData[x] = b), f.forceSync ? s() : setTimeout(s, 10);
                    var S, j, E, F = 50,
                        C = e.parseXML || function(e, t) {
                            return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                        A = e.parseJSON || function(e) {
                            return window.eval("(" + e + ")") },
                        P = function(t, n, a) {
                            var r = t.getResponseHeader("content-type") || "",
                                i = "xml" === n || !n && r.indexOf("xml") >= 0,
                                s = i ? t.responseXML : t.responseText;
                            return i && "parsererror" === s.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (s = a.dataFilter(s, n)), "string" == typeof s && ("json" === n || !n && r.indexOf("json") >= 0 ? s = A(s) : ("script" === n || !n && r.indexOf("javascript") >= 0) && e.globalEval(s)), s };
                    return k }
                if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
                var d, u, l, c = this; "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), d = t.type || this.attr2("method"), u = t.url || this.attr2("action"), l = "string" == typeof u ? e.trim(u) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: d || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);
                var f = {};
                if (this.trigger("form-pre-serialize", [this, t, f]), f.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
                if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
                var h = t.traditional;
                void 0 === h && (h = e.ajaxSettings.traditional);
                var m, _ = [],
                    p = this.formToArray(t.semantic, _);
                if (t.data && (t.extraData = t.data, m = e.param(t.data, h)), t.beforeSubmit && t.beforeSubmit(p, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
                if (this.trigger("form-submit-validate", [p, this, t, f]), f.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
                var y = e.param(p, h);
                m && (y = y ? y + "&" + m : m), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + y, t.data = null) : t.data = y;
                var g = [];
                if (t.resetForm && g.push(function() { c.resetForm() }), t.clearForm && g.push(function() { c.clearForm(t.includeHidden) }), !t.dataType && t.target) {
                    var v = t.success || function() {};
                    g.push(function(n) {
                        var a = t.replaceTarget ? "replaceWith" : "html";
                        e(t.target)[a](n).each(v, arguments) }) } else t.success && g.push(t.success);
                if (t.success = function(e, n, a) {
                        for (var r = t.context || this, i = 0, s = g.length; s > i; i++) g[i].apply(r, [e, n, a || c, c]) }, t.error) {
                    var M = t.error;
                    t.error = function(e, n, a) {
                        var r = t.context || this;
                        M.apply(r, [e, n, a, c]) } }
                if (t.complete) {
                    var L = t.complete;
                    t.complete = function(e, n) {
                        var a = t.context || this;
                        L.apply(a, [e, n, c]) } }
                var Y = e("input[type=file]:enabled", this).filter(function() {
                        return "" !== e(this).val() }),
                    D = Y.length > 0,
                    k = "multipart/form-data",
                    w = c.attr("enctype") == k || c.attr("encoding") == k,
                    T = r.fileapi && r.formdata;
                a("fileAPI :" + T);
                var b, x = (D || w) && !T;
                t.iframe !== !1 && (t.iframe || x) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { b = o(p) }) : b = o(p) : b = (D || w) && T ? s(p) : e.ajax(t), c.removeData("jqxhr").data("jqxhr", b);
                for (var S = 0; S < _.length; S++) _[S] = null;
                return this.trigger("form-submit-notify", [this, t]), this }, e.fn.ajaxForm = function(r) {
                if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
                    var i = { s: this.selector, c: this.context };
                    return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(r) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) }
                return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, n) }, e.fn.ajaxFormUnbind = function() {
                return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, n) {
                var a = [];
                if (0 === this.length) return a;
                var i, s = this[0],
                    o = this.attr("id"),
                    d = t ? s.getElementsByTagName("*") : s.elements;
                if (d && !/MSIE [678]/.test(navigator.userAgent) && (d = e(d).get()), o && (i = e(":input[form=" + o + "]").get(), i.length && (d = (d || []).concat(i))), !d || !d.length) return a;
                var u, l, c, f, h, m, _;
                for (u = 0, m = d.length; m > u; u++)
                    if (h = d[u], c = h.name, c && !h.disabled)
                        if (t && s.clk && "image" == h.type) s.clk == h && (a.push({ name: c, value: e(h).val(), type: h.type }), a.push({ name: c + ".x", value: s.clk_x }, { name: c + ".y", value: s.clk_y }));
                        else if (f = e.fieldValue(h, !0), f && f.constructor == Array)
                    for (n && n.push(h), l = 0, _ = f.length; _ > l; l++) a.push({ name: c, value: f[l] });
                else if (r.fileapi && "file" == h.type) { n && n.push(h);
                    var p = h.files;
                    if (p.length)
                        for (l = 0; l < p.length; l++) a.push({ name: c, value: p[l], type: h.type });
                    else a.push({ name: c, value: "", type: h.type }) } else null !== f && "undefined" != typeof f && (n && n.push(h), a.push({ name: c, value: f, type: h.type, required: h.required }));
                if (!t && s.clk) {
                    var y = e(s.clk),
                        g = y[0];
                    c = g.name, c && !g.disabled && "image" == g.type && (a.push({ name: c, value: y.val() }), a.push({ name: c + ".x", value: s.clk_x }, { name: c + ".y", value: s.clk_y })) }
                return a }, e.fn.formSerialize = function(t) {
                return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) {
                var n = [];
                return this.each(function() {
                    var a = this.name;
                    if (a) {
                        var r = e.fieldValue(this, t);
                        if (r && r.constructor == Array)
                            for (var i = 0, s = r.length; s > i; i++) n.push({ name: a, value: r[i] });
                        else null !== r && "undefined" != typeof r && n.push({ name: this.name, value: r }) } }), e.param(n) }, e.fn.fieldValue = function(t) {
                for (var n = [], a = 0, r = this.length; r > a; a++) {
                    var i = this[a],
                        s = e.fieldValue(i, t);
                    null === s || "undefined" == typeof s || s.constructor == Array && !s.length || (s.constructor == Array ? e.merge(n, s) : n.push(s)) }
                return n }, e.fieldValue = function(t, n) {
                var a = t.name,
                    r = t.type,
                    i = t.tagName.toLowerCase();
                if (void 0 === n && (n = !0), n && (!a || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
                if ("select" == i) {
                    var s = t.selectedIndex;
                    if (0 > s) return null;
                    for (var o = [], d = t.options, u = "select-one" == r, l = u ? s + 1 : d.length, c = u ? s : 0; l > c; c++) {
                        var f = d[c];
                        if (f.selected) {
                            var h = f.value;
                            if (h || (h = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), u) return h;
                            o.push(h) } }
                    return o }
                return e(t).val() }, e.fn.clearForm = function(t) {
                return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) {
                var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                return this.each(function() {
                    var a = this.type,
                        r = this.tagName.toLowerCase();
                    n.test(a) || "textarea" == r ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "") }) }, e.fn.resetForm = function() {
                return this.each(function() {
                    ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset() }) }, e.fn.enable = function(e) {
                return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) {
                return void 0 === t && (t = !0), this.each(function() {
                    var n = this.type;
                    if ("checkbox" == n || "radio" == n) this.checked = t;
                    else if ("option" == this.tagName.toLowerCase()) {
                        var a = e(this).parent("select");
                        t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t } }) }, e.fn.ajaxSubmit.debug = !1 })
    }, function(e, t, n) {
        var a, r, i;
        /*!
         * jQuery Cookie Plugin v1.4.1
         * https://github.com/carhartl/jquery-cookie
         *
         * Copyright 2013 Klaus Hartl
         * Released under the MIT license
         */
        ! function(s) { r = [n(1)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e) {
                return o.raw ? e : encodeURIComponent(e) }

            function n(e) {
                return o.raw ? e : decodeURIComponent(e) }

            function a(e) {
                return t(o.json ? JSON.stringify(e) : String(e)) }

            function r(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(s, " ")), o.json ? JSON.parse(e) : e } catch (t) {} }

            function i(t, n) {
                var a = o.raw ? t : r(t);
                return e.isFunction(n) ? n(a) : a }
            var s = /\+/g,
                o = e.cookie = function(r, s, d) {
                    if (void 0 !== s && !e.isFunction(s)) {
                        if (d = e.extend({}, o.defaults, d), "number" == typeof d.expires) {
                            var u = d.expires,
                                l = d.expires = new Date;
                            l.setTime(+l + 864e5 * u) }
                        return document.cookie = [t(r), "=", a(s), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("") }
                    for (var c = r ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0, m = f.length; m > h; h++) {
                        var _ = f[h].split("="),
                            p = n(_.shift()),
                            y = _.join("=");
                        if (r && r === p) { c = i(y, s);
                            break }
                        r || void 0 === (y = i(y)) || (c[p] = y) }
                    return c };
            o.defaults = {}, e.removeCookie = function(t, n) {
                return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) } })
    }, function(e, t, n) {
        (function(e) { e.validator.addMethod("qqValid", function(e, t) {
                return /^(\d{5,12})?$/.test(e) || this.optional(t) }, ""), e.validator.addMethod("telphoneValid", function(e, t) {
                return /^1[3|4|5|7|8][0-9]\d{8}$/.test(e) || this.optional(t) }, ""), e.validator.addMethod("emailValid", function(e, t) {
                var n = ["163.com", "vip.163.com", "126.com", "qq.com", "vip.qq.com", "foxmail.com", "gmail.com", "sohu.com", "tom.com", "vip.sina.com", "sina.com.cn", "sina.com", "yahoo.com.cn", "yahoo.cn", "yeah.net", "21cn.com", "hotmail.com", "sogou.com", "188.com", "139.com", "189.cn", "wo.com.cn"],
                    a = !0,
                    r = e.split("@")[1];
                return r ? (r = r.toLowerCase(), n.forEach(function(e) { e === r && (a = !1) }), a || this.optional(t)) : this.optional(t) }, ""), e.validator.addMethod("notEqualTo", function(t, n, a) {
                var r = e(a);
                return this.settings.onfocusout && r.unbind(".validate-notequalTo").bind("blur.validate-notequalTo", function() { e(n).valid() }), t ? t !== r.val() : !0 }, ""), e.validator.addMethod("telphoneCodeValid", function(t, n) {
                var a = e("#select-code").find("option:selected").val();
                return 1 == a ? /^1[3|4|5|7|8][0-9]\d{8}$/.test(t) || this.optional(n) : 2 == a ? /^[0-9]\d{7}$/.test(t) || this.optional(n) : 3 == a ? /^[0-9]\d{9}$/.test(t) || this.optional(n) : void 0 }, ""), e.validator.addMethod("regexPassword", function(e, t) {
                return this.optional(t) || /^(?=.*[0-9])(?=.*[A-Za-z]).{6,16}$/.test(e) }, "密码必须包含英文字母、数字"), e.validator.addMethod("companySizeValid", function(e, t) {
                return /^[1-9](\d{1,4})?$/.test(e) || this.optional(t) }, "请输入5位以内不小于1的整数") }).call(t, n(1)) }, function(e, t, n) {
        var a;
        (function(e, r) { //! moment.js
            //! version : 2.9.0
            //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
            //! license : MIT
            //! momentjs.com
            (function(i) {
                function s(e, t, n) {
                    switch (arguments.length) {
                        case 2:
                            return null != e ? e : t;
                        case 3:
                            return null != e ? e : null != t ? t : n;
                        default:
                            throw new Error("Implement me") } }

                function o(e, t) {
                    return Fe.call(e, t) }

                function d() {
                    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } }

                function u(e) { Te.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

                function l(e, t) {
                    var n = !0;
                    return v(function() {
                        return n && (u(e), n = !1), t.apply(this, arguments) }, t) }

                function c(e, t) { Dt[e] || (u(t), Dt[e] = !0) }

                function f(e, t) {
                    return function(n) {
                        return Y(e.call(this, n), t) } }

                function h(e, t) {
                    return function(n) {
                        return this.localeData().ordinal(e.call(this, n), t) } }

                function m(e, t) {
                    var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        i = e.clone().add(r, "months");
                    return 0 > t - i ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) }

                function _(e, t, n) {
                    var a;
                    return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && 12 > t && (t += 12), a || 12 !== t || (t = 0), t) : t }

                function p() {}

                function y(e, t) { t !== !1 && O(e), M(this, e), this._d = new Date(+e._d), wt === !1 && (wt = !0, Te.updateOffset(this), wt = !1) }

                function g(e) {
                    var t = E(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._milliseconds = +l + 1e3 * u + 6e4 * d + 36e5 * o, this._days = +s + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = Te.localeData(), this._bubble() }

                function v(e, t) {
                    for (var n in t) o(t, n) && (e[n] = t[n]);
                    return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e }

                function M(e, t) {
                    var n, a, r;
                    if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Ie.length > 0)
                        for (n in Ie) a = Ie[n], r = t[a], "undefined" != typeof r && (e[a] = r);
                    return e }

                function L(e) {
                    return 0 > e ? Math.ceil(e) : Math.floor(e) }

                function Y(e, t, n) {
                    for (var a = "" + Math.abs(e), r = e >= 0; a.length < t;) a = "0" + a;
                    return (r ? n ? "+" : "" : "-") + a }

                function D(e, t) {
                    var n = { milliseconds: 0, months: 0 };
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

                function k(e, t) {
                    var n;
                    return t = B(t, e), e.isBefore(t) ? n = D(e, t) : (n = D(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n }

                function w(e, t) {
                    return function(n, a) {
                        var r, i;
                        return null === a || isNaN(+a) || (c(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Te.duration(n, a), T(this, r, e), this } }

                function T(e, t, n, a) {
                    var r = t._milliseconds,
                        i = t._days,
                        s = t._months;
                    a = null == a ? !0 : a, r && e._d.setTime(+e._d + r * n), i && Me(e, "Date", ve(e, "Date") + i * n), s && ge(e, ve(e, "Month") + s * n), a && Te.updateOffset(e, i || s) }

                function b(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) }

                function x(e) {
                    return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date }

                function S(e, t, n) {
                    var a, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (a = 0; r > a; a++)(n && e[a] !== t[a] || !n && C(e[a]) !== C(t[a])) && s++;
                    return s + i }

                function j(e) {
                    if (e) {
                        var t = e.toLowerCase().replace(/(.)s$/, "$1");
                        e = pt[e] || yt[t] || t }
                    return e }

                function E(e) {
                    var t, n, a = {};
                    for (n in e) o(e, n) && (t = j(n), t && (a[t] = e[n]));
                    return a }

                function F(e) {
                    var t, n;
                    if (0 === e.indexOf("week")) t = 7, n = "day";
                    else {
                        if (0 !== e.indexOf("month")) return;
                        t = 12, n = "month" }
                    Te[e] = function(a, r) {
                        var s, o, d = Te._locale[e],
                            u = [];
                        if ("number" == typeof a && (r = a, a = i), o = function(e) {
                                var t = Te().utc().set(n, e);
                                return d.call(Te._locale, t, a || "") }, null != r) return o(r);
                        for (s = 0; t > s; s++) u.push(o(s));
                        return u } }

                function C(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n }

                function A(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate() }

                function P(e, t, n) {
                    return me(Te([e, 11, 31 + t - n]), t, n).week }

                function H(e) {
                    return W(e) ? 366 : 365 }

                function W(e) {
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }

                function O(e) {
                    var t;
                    e._a && -2 === e._pf.overflow && (t = e._a[Ae] < 0 || e._a[Ae] > 11 ? Ae : e._a[Pe] < 1 || e._a[Pe] > A(e._a[Ce], e._a[Ae]) ? Pe : e._a[He] < 0 || e._a[He] > 24 || 24 === e._a[He] && (0 !== e._a[We] || 0 !== e._a[Oe] || 0 !== e._a[ze]) ? He : e._a[We] < 0 || e._a[We] > 59 ? We : e._a[Oe] < 0 || e._a[Oe] > 59 ? Oe : e._a[ze] < 0 || e._a[ze] > 999 ? ze : -1, e._pf._overflowDayOfYear && (Ce > t || t > Pe) && (t = Pe), e._pf.overflow = t) }

                function z(e) {
                    return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === i)), e._isValid }

                function N(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e }

                function I(e) {
                    for (var t, n, a, r, i = 0; i < e.length;) {
                        for (r = N(e[i]).split("-"), t = r.length, n = N(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                            if (a = R(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && S(r, n, !0) >= t - 1) break;
                            t-- }
                        i++ }
                    return null }

                function R(e) {
                    var t = null;
                    if (!Ne[e] && Re) try { t = Te.locale(), n(13)("./" + e), Te.locale(t) } catch (a) {}
                    return Ne[e] }

                function B(e, t) {
                    var n, a;
                    return t._isUTC ? (n = t.clone(), a = (Te.isMoment(e) || x(e) ? +e : +Te(e)) - +n, n._d.setTime(+n._d + a), Te.updateOffset(n, !1), n) : Te(e).local() }

                function U(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

                function q(e) {
                    var t, n, a = e.match($e);
                    for (t = 0, n = a.length; n > t; t++) Yt[a[t]] ? a[t] = Yt[a[t]] : a[t] = U(a[t]);
                    return function(r) {
                        var i = "";
                        for (t = 0; n > t; t++) i += a[t] instanceof Function ? a[t].call(r, e) : a[t];
                        return i } }

                function $(e, t) {
                    return e.isValid() ? (t = J(t, e.localeData()), gt[t] || (gt[t] = q(t)), gt[t](e)) : e.localeData().invalidDate() }

                function J(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e }
                    var a = 5;
                    for (Je.lastIndex = 0; a >= 0 && Je.test(e);) e = e.replace(Je, n), Je.lastIndex = 0, a -= 1;
                    return e }

                function V(e, t) {
                    var n, a = t._strict;
                    switch (e) {
                        case "Q":
                            return rt;
                        case "DDDD":
                            return st;
                        case "YYYY":
                        case "GGGG":
                        case "gggg":
                            return a ? ot : Xe;
                        case "Y":
                        case "G":
                        case "g":
                            return ut;
                        case "YYYYYY":
                        case "YYYYY":
                        case "GGGGG":
                        case "ggggg":
                            return a ? dt : Ke;
                        case "S":
                            if (a) return rt;
                        case "SS":
                            if (a) return it;
                        case "SSS":
                            if (a) return st;
                        case "DDD":
                            return Ge;
                        case "MMM":
                        case "MMMM":
                        case "dd":
                        case "ddd":
                        case "dddd":
                            return Qe;
                        case "a":
                        case "A":
                            return t._locale._meridiemParse;
                        case "x":
                            return nt;
                        case "X":
                            return at;
                        case "Z":
                        case "ZZ":
                            return et;
                        case "T":
                            return tt;
                        case "SSSS":
                            return Ze;
                        case "MM":
                        case "DD":
                        case "YY":
                        case "GG":
                        case "gg":
                        case "HH":
                        case "hh":
                        case "mm":
                        case "ss":
                        case "ww":
                        case "WW":
                            return a ? it : Ve;
                        case "M":
                        case "D":
                        case "d":
                        case "H":
                        case "h":
                        case "m":
                        case "s":
                        case "w":
                        case "W":
                        case "e":
                        case "E":
                            return Ve;
                        case "Do":
                            return a ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                        default:
                            return n = new RegExp(ae(ne(e.replace("\\", "")), "i")) } }

                function G(e) { e = e || "";
                    var t = e.match(et) || [],
                        n = t[t.length - 1] || [],
                        a = (n + "").match(mt) || ["-", 0, 0],
                        r = +(60 * a[1]) + C(a[2]);
                    return "+" === a[0] ? r : -r }

                function X(e, t, n) {
                    var a, r = n._a;
                    switch (e) {
                        case "Q":
                            null != t && (r[Ae] = 3 * (C(t) - 1));
                            break;
                        case "M":
                        case "MM":
                            null != t && (r[Ae] = C(t) - 1);
                            break;
                        case "MMM":
                        case "MMMM":
                            a = n._locale.monthsParse(t, e, n._strict), null != a ? r[Ae] = a : n._pf.invalidMonth = t;
                            break;
                        case "D":
                        case "DD":
                            null != t && (r[Pe] = C(t));
                            break;
                        case "Do":
                            null != t && (r[Pe] = C(parseInt(t.match(/\d{1,2}/)[0], 10)));
                            break;
                        case "DDD":
                        case "DDDD":
                            null != t && (n._dayOfYear = C(t));
                            break;
                        case "YY":
                            r[Ce] = Te.parseTwoDigitYear(t);
                            break;
                        case "YYYY":
                        case "YYYYY":
                        case "YYYYYY":
                            r[Ce] = C(t);
                            break;
                        case "a":
                        case "A":
                            n._meridiem = t;
                            break;
                        case "h":
                        case "hh":
                            n._pf.bigHour = !0;
                        case "H":
                        case "HH":
                            r[He] = C(t);
                            break;
                        case "m":
                        case "mm":
                            r[We] = C(t);
                            break;
                        case "s":
                        case "ss":
                            r[Oe] = C(t);
                            break;
                        case "S":
                        case "SS":
                        case "SSS":
                        case "SSSS":
                            r[ze] = C(1e3 * ("0." + t));
                            break;
                        case "x":
                            n._d = new Date(C(t));
                            break;
                        case "X":
                            n._d = new Date(1e3 * parseFloat(t));
                            break;
                        case "Z":
                        case "ZZ":
                            n._useUTC = !0, n._tzm = G(t);
                            break;
                        case "dd":
                        case "ddd":
                        case "dddd":
                            a = n._locale.weekdaysParse(t), null != a ? (n._w = n._w || {}, n._w.d = a) : n._pf.invalidWeekday = t;
                            break;
                        case "w":
                        case "ww":
                        case "W":
                        case "WW":
                        case "d":
                        case "e":
                        case "E":
                            e = e.substr(0, 1);
                        case "gggg":
                        case "GGGG":
                        case "GGGGG":
                            e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = C(t));
                            break;
                        case "gg":
                        case "GG":
                            n._w = n._w || {}, n._w[e] = Te.parseTwoDigitYear(t) } }

                function K(e) {
                    var t, n, a, r, i, o, d;
                    t = e._w, null != t.GG || null != t.W || null != t.E ? (i = 1, o = 4, n = s(t.GG, e._a[Ce], me(Te(), 1, 4).year), a = s(t.W, 1), r = s(t.E, 1)) : (i = e._locale._week.dow, o = e._locale._week.doy, n = s(t.gg, e._a[Ce], me(Te(), i, o).year), a = s(t.w, 1), null != t.d ? (r = t.d, i > r && ++a) : r = null != t.e ? t.e + i : i), d = _e(n, a, r, o, i), e._a[Ce] = d.year, e._dayOfYear = d.dayOfYear }

                function Z(e) {
                    var t, n, a, r, i = [];
                    if (!e._d) {
                        for (a = ee(e), e._w && null == e._a[Pe] && null == e._a[Ae] && K(e), e._dayOfYear && (r = s(e._a[Ce], a[Ce]), e._dayOfYear > H(r) && (e._pf._overflowDayOfYear = !0), n = le(r, 0, e._dayOfYear), e._a[Ae] = n.getUTCMonth(), e._a[Pe] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
                        for (; 7 > t; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[He] && 0 === e._a[We] && 0 === e._a[Oe] && 0 === e._a[ze] && (e._nextDay = !0, e._a[He] = 0), e._d = (e._useUTC ? le : ue).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[He] = 24) } }

                function Q(e) {
                    var t;
                    e._d || (t = E(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], Z(e)) }

                function ee(e) {
                    var t = new Date;
                    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }

                function te(e) {
                    if (e._f === Te.ISO_8601) return void ie(e);
                    e._a = [], e._pf.empty = !0;
                    var t, n, a, r, s, o = "" + e._i,
                        d = o.length,
                        u = 0;
                    for (a = J(e._f, e._locale).match($e) || [], t = 0; t < a.length; t++) r = a[t], n = (o.match(V(r, e)) || [])[0], n && (s = o.substr(0, o.indexOf(n)), s.length > 0 && e._pf.unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), u += n.length), Yt[r] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(r), X(r, n, e)) : e._strict && !n && e._pf.unusedTokens.push(r);
                    e._pf.charsLeftOver = d - u, o.length > 0 && e._pf.unusedInput.push(o), e._pf.bigHour === !0 && e._a[He] <= 12 && (e._pf.bigHour = i), e._a[He] = _(e._locale, e._a[He], e._meridiem), Z(e), O(e) }

                function ne(e) {
                    return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                        return t || n || a || r }) }

                function ae(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

                function re(e) {
                    var t, n, a, r, i;
                    if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) i = 0, t = M({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = d(), t._f = e._f[r], te(t), z(t) && (i += t._pf.charsLeftOver, i += 10 * t._pf.unusedTokens.length, t._pf.score = i, (null == a || a > i) && (a = i, n = t));
                    v(e, n || t) }

                function ie(e) {
                    var t, n, a = e._i,
                        r = lt.exec(a);
                    if (r) {
                        for (e._pf.iso = !0, t = 0, n = ft.length; n > t; t++)
                            if (ft[t][1].exec(a)) { e._f = ft[t][0] + (r[6] || " ");
                                break }
                        for (t = 0, n = ht.length; n > t; t++)
                            if (ht[t][1].exec(a)) { e._f += ht[t][0];
                                break }
                        a.match(et) && (e._f += "Z"), te(e) } else e._isValid = !1 }

                function se(e) { ie(e), e._isValid === !1 && (delete e._isValid, Te.createFromInputFallback(e)) }

                function oe(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a }

                function de(e) {
                    var t, n = e._i;
                    n === i ? e._d = new Date : x(n) ? e._d = new Date(+n) : null !== (t = Be.exec(n)) ? e._d = new Date(+t[1]) : "string" == typeof n ? se(e) : b(n) ? (e._a = oe(n.slice(0), function(e) {
                        return parseInt(e, 10) }), Z(e)) : "object" == typeof n ? Q(e) : "number" == typeof n ? e._d = new Date(n) : Te.createFromInputFallback(e) }

                function ue(e, t, n, a, r, i, s) {
                    var o = new Date(e, t, n, a, r, i, s);
                    return 1970 > e && o.setFullYear(e), o }

                function le(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return 1970 > e && t.setUTCFullYear(e), t }

                function ce(e, t) {
                    if ("string" == typeof e)
                        if (isNaN(e)) {
                            if (e = t.weekdaysParse(e), "number" != typeof e) return null } else e = parseInt(e, 10);
                    return e }

                function fe(e, t, n, a, r) {
                    return r.relativeTime(t || 1, !!n, e, a) }

                function he(e, t, n) {
                    var a = Te.duration(e).abs(),
                        r = Ee(a.as("s")),
                        i = Ee(a.as("m")),
                        s = Ee(a.as("h")),
                        o = Ee(a.as("d")),
                        d = Ee(a.as("M")),
                        u = Ee(a.as("y")),
                        l = r < vt.s && ["s", r] || 1 === i && ["m"] || i < vt.m && ["mm", i] || 1 === s && ["h"] || s < vt.h && ["hh", s] || 1 === o && ["d"] || o < vt.d && ["dd", o] || 1 === d && ["M"] || d < vt.M && ["MM", d] || 1 === u && ["y"] || ["yy", u];
                    return l[2] = t, l[3] = +e > 0, l[4] = n, fe.apply({}, l) }

                function me(e, t, n) {
                    var a, r = n - t,
                        i = n - e.day();
                    return i > r && (i -= 7), r - 7 > i && (i += 7), a = Te(e).add(i, "d"), { week: Math.ceil(a.dayOfYear() / 7), year: a.year() } }

                function _e(e, t, n, a, r) {
                    var i, s, o = le(e, 0, 1).getUTCDay();
                    return o = 0 === o ? 7 : o, n = null != n ? n : r, i = r - o + (o > a ? 7 : 0) - (r > o ? 7 : 0), s = 7 * (t - 1) + (n - r) + i + 1, { year: s > 0 ? e : e - 1, dayOfYear: s > 0 ? s : H(e - 1) + s } }

                function pe(e) {
                    var t, n = e._i,
                        a = e._f;
                    return e._locale = e._locale || Te.localeData(e._l), null === n || a === i && "" === n ? Te.invalid({ nullInput: !0 }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), Te.isMoment(n) ? new y(n, !0) : (a ? b(a) ? re(e) : te(e) : de(e), t = new y(e), t._nextDay && (t.add(1, "d"), t._nextDay = i), t)) }

                function ye(e, t) {
                    var n, a;
                    if (1 === t.length && b(t[0]) && (t = t[0]), !t.length) return Te();
                    for (n = t[0], a = 1; a < t.length; ++a) t[a][e](n) && (n = t[a]);
                    return n }

                function ge(e, t) {
                    var n;
                    return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), A(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e) }

                function ve(e, t) {
                    return e._d["get" + (e._isUTC ? "UTC" : "") + t]() }

                function Me(e, t, n) {
                    return "Month" === t ? ge(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n) }

                function Le(e, t) {
                    return function(n) {
                        return null != n ? (Me(this, e, n), Te.updateOffset(this, t), this) : ve(this, e) } }

                function Ye(e) {
                    return 400 * e / 146097 }

                function De(e) {
                    return 146097 * e / 400 }

                function ke(e) { Te.duration.fn[e] = function() {
                        return this._data[e] } }

                function we(e) { "undefined" == typeof ender && (be = je.moment, e ? je.moment = l("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", Te) : je.moment = Te) }
                for (var Te, be, xe, Se = "2.9.0", je = "undefined" == typeof e || "undefined" != typeof window && window !== e.window ? this : e, Ee = Math.round, Fe = Object.prototype.hasOwnProperty, Ce = 0, Ae = 1, Pe = 2, He = 3, We = 4, Oe = 5, ze = 6, Ne = {}, Ie = [], Re = "undefined" != typeof r && r && r.exports, Be = /^\/?Date\((\-?\d+)/i, Ue = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, $e = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ve = /\d\d?/, Ge = /\d{1,3}/, Xe = /\d{1,4}/, Ke = /[+\-]?\d{1,6}/, Ze = /\d+/, Qe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, et = /Z|[\+\-]\d\d:?\d\d/gi, tt = /T/i, nt = /[\+\-]?\d+/, at = /[\+\-]?\d+(\.\d{1,3})?/, rt = /\d/, it = /\d\d/, st = /\d{3}/, ot = /\d{4}/, dt = /[+-]?\d{6}/, ut = /[+-]?\d+/, lt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ct = "YYYY-MM-DDTHH:mm:ssZ", ft = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                        ["YYYY-DDD", /\d{4}-\d{3}/]
                    ], ht = [
                        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                        ["HH:mm", /(T| )\d\d:\d\d/],
                        ["HH", /(T| )\d\d/]
                    ], mt = /([\+\-]|\d\d)/gi, _t = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), pt = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, yt = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, gt = {}, vt = { s: 45, m: 45, h: 22, d: 26, M: 11 }, Mt = "DDD w W M D d".split(" "), Lt = "M D H h m s w W".split(" "), Yt = { M: function() {
                            return this.month() + 1 }, MMM: function(e) {
                            return this.localeData().monthsShort(this, e) }, MMMM: function(e) {
                            return this.localeData().months(this, e) }, D: function() {
                            return this.date() }, DDD: function() {
                            return this.dayOfYear() }, d: function() {
                            return this.day() }, dd: function(e) {
                            return this.localeData().weekdaysMin(this, e) }, ddd: function(e) {
                            return this.localeData().weekdaysShort(this, e) }, dddd: function(e) {
                            return this.localeData().weekdays(this, e) }, w: function() {
                            return this.week() }, W: function() {
                            return this.isoWeek() }, YY: function() {
                            return Y(this.year() % 100, 2) }, YYYY: function() {
                            return Y(this.year(), 4) }, YYYYY: function() {
                            return Y(this.year(), 5) }, YYYYYY: function() {
                            var e = this.year(),
                                t = e >= 0 ? "+" : "-";
                            return t + Y(Math.abs(e), 6) }, gg: function() {
                            return Y(this.weekYear() % 100, 2) }, gggg: function() {
                            return Y(this.weekYear(), 4) }, ggggg: function() {
                            return Y(this.weekYear(), 5) }, GG: function() {
                            return Y(this.isoWeekYear() % 100, 2) }, GGGG: function() {
                            return Y(this.isoWeekYear(), 4) }, GGGGG: function() {
                            return Y(this.isoWeekYear(), 5) }, e: function() {
                            return this.weekday() }, E: function() {
                            return this.isoWeekday() }, a: function() {
                            return this.localeData().meridiem(this.hours(), this.minutes(), !0) }, A: function() {
                            return this.localeData().meridiem(this.hours(), this.minutes(), !1) }, H: function() {
                            return this.hours() }, h: function() {
                            return this.hours() % 12 || 12 }, m: function() {
                            return this.minutes() }, s: function() {
                            return this.seconds() }, S: function() {
                            return C(this.milliseconds() / 100) }, SS: function() {
                            return Y(C(this.milliseconds() / 10), 2) }, SSS: function() {
                            return Y(this.milliseconds(), 3) }, SSSS: function() {
                            return Y(this.milliseconds(), 3) }, Z: function() {
                            var e = this.utcOffset(),
                                t = "+";
                            return 0 > e && (e = -e, t = "-"), t + Y(C(e / 60), 2) + ":" + Y(C(e) % 60, 2) }, ZZ: function() {
                            var e = this.utcOffset(),
                                t = "+";
                            return 0 > e && (e = -e, t = "-"), t + Y(C(e / 60), 2) + Y(C(e) % 60, 2) }, z: function() {
                            return this.zoneAbbr() }, zz: function() {
                            return this.zoneName() }, x: function() {
                            return this.valueOf() }, X: function() {
                            return this.unix() }, Q: function() {
                            return this.quarter() } }, Dt = {}, kt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], wt = !1; Mt.length;) xe = Mt.pop(), Yt[xe + "o"] = h(Yt[xe], xe);
                for (; Lt.length;) xe = Lt.pop(), Yt[xe + xe] = f(Yt[xe], 2);
                Yt.DDDD = f(Yt.DDD, 3), v(p.prototype, { set: function(e) {
                        var t, n;
                        for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
                        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source) }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function(e) {
                        return this._months[e.month()] }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function(e) {
                        return this._monthsShort[e.month()] }, monthsParse: function(e, t, n) {
                        var a, r, i;
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; 12 > a; a++) {
                            if (r = Te.utc([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                            if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                            if (!n && this._monthsParse[a].test(e)) return a } }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function(e) {
                        return this._weekdays[e.day()] }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function(e) {
                        return this._weekdaysShort[e.day()] }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function(e) {
                        return this._weekdaysMin[e.day()] }, weekdaysParse: function(e) {
                        var t, n, a;
                        for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                            if (this._weekdaysParse[t] || (n = Te([2e3, 1]).day(t), a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(a.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t }, _longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" }, longDateFormat: function(e) {
                        var t = this._longDateFormat[e];
                        return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                            return e.slice(1) }), this._longDateFormat[e] = t), t }, isPM: function(e) {
                        return "p" === (e + "").toLowerCase().charAt(0) }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function(e, t, n) {
                        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, calendar: function(e, t, n) {
                        var a = this._calendar[e];
                        return "function" == typeof a ? a.apply(t, [n]) : a }, _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, relativeTime: function(e, t, n, a) {
                        var r = this._relativeTime[n];
                        return "function" == typeof r ? r(e, t, n, a) : r.replace(/%d/i, e) }, pastFuture: function(e, t) {
                        var n = this._relativeTime[e > 0 ? "future" : "past"];
                        return "function" == typeof n ? n(t) : n.replace(/%s/i, t) }, ordinal: function(e) {
                        return this._ordinal.replace("%d", e) }, _ordinal: "%d", _ordinalParse: /\d{1,2}/, preparse: function(e) {
                        return e }, postformat: function(e) {
                        return e }, week: function(e) {
                        return me(e, this._week.dow, this._week.doy).week }, _week: { dow: 0, doy: 6 }, firstDayOfWeek: function() {
                        return this._week.dow }, firstDayOfYear: function() {
                        return this._week.doy }, _invalidDate: "Invalid date", invalidDate: function() {
                        return this._invalidDate } }), Te = function(e, t, n, a) {
                    var r;
                    return "boolean" == typeof n && (a = n, n = i), r = {}, r._isAMomentObject = !0, r._i = e, r._f = t, r._l = n, r._strict = a, r._isUTC = !1, r._pf = d(), pe(r) }, Te.suppressDeprecationWarnings = !1, Te.createFromInputFallback = l("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), Te.min = function() {
                    var e = [].slice.call(arguments, 0);
                    return ye("isBefore", e) }, Te.max = function() {
                    var e = [].slice.call(arguments, 0);
                    return ye("isAfter", e) }, Te.utc = function(e, t, n, a) {
                    var r;
                    return "boolean" == typeof n && (a = n, n = i), r = {}, r._isAMomentObject = !0, r._useUTC = !0, r._isUTC = !0, r._l = n, r._i = e, r._f = t, r._strict = a, r._pf = d(), pe(r).utc() }, Te.unix = function(e) {
                    return Te(1e3 * e) }, Te.duration = function(e, t) {
                    var n, a, r, i, s = e,
                        d = null;
                    return Te.isDuration(e) ? s = { ms: e._milliseconds, d: e._days, M: e._months } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (d = Ue.exec(e)) ? (n = "-" === d[1] ? -1 : 1, s = { y: 0, d: C(d[Pe]) * n, h: C(d[He]) * n, m: C(d[We]) * n, s: C(d[Oe]) * n, ms: C(d[ze]) * n }) : (d = qe.exec(e)) ? (n = "-" === d[1] ? -1 : 1, r = function(e) {
                        var t = e && parseFloat(e.replace(",", "."));
                        return (isNaN(t) ? 0 : t) * n }, s = { y: r(d[2]), M: r(d[3]), d: r(d[4]), h: r(d[5]), m: r(d[6]), s: r(d[7]), w: r(d[8]) }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (i = k(Te(s.from), Te(s.to)), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new g(s), Te.isDuration(e) && o(e, "_locale") && (a._locale = e._locale), a }, Te.version = Se, Te.defaultFormat = ct, Te.ISO_8601 = function() {}, Te.momentProperties = Ie, Te.updateOffset = function() {}, Te.relativeTimeThreshold = function(e, t) {
                    return vt[e] === i ? !1 : t === i ? vt[e] : (vt[e] = t, !0) }, Te.lang = l("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
                    return Te.locale(e, t) }), Te.locale = function(e, t) {
                    var n;
                    return e && (n = "undefined" != typeof t ? Te.defineLocale(e, t) : Te.localeData(e), n && (Te.duration._locale = Te._locale = n)), Te._locale._abbr }, Te.defineLocale = function(e, t) {
                    return null !== t ? (t.abbr = e, Ne[e] || (Ne[e] = new p), Ne[e].set(t), Te.locale(e), Ne[e]) : (delete Ne[e], null) }, Te.langData = l("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
                    return Te.localeData(e) }), Te.localeData = function(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Te._locale;
                    if (!b(e)) {
                        if (t = R(e)) return t;
                        e = [e] }
                    return I(e) }, Te.isMoment = function(e) {
                    return e instanceof y || null != e && o(e, "_isAMomentObject") }, Te.isDuration = function(e) {
                    return e instanceof g };
                for (xe = kt.length - 1; xe >= 0; --xe) F(kt[xe]);
                Te.normalizeUnits = function(e) {
                    return j(e) }, Te.invalid = function(e) {
                    var t = Te.utc(NaN);
                    return null != e ? v(t._pf, e) : t._pf.userInvalidated = !0, t }, Te.parseZone = function() {
                    return Te.apply(null, arguments).parseZone() }, Te.parseTwoDigitYear = function(e) {
                    return C(e) + (C(e) > 68 ? 1900 : 2e3) }, Te.isDate = x, v(Te.fn = y.prototype, { clone: function() {
                        return Te(this) }, valueOf: function() {
                        return +this._d - 6e4 * (this._offset || 0) }, unix: function() {
                        return Math.floor(+this / 1e3) }, toString: function() {
                        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, toDate: function() {
                        return this._offset ? new Date(+this) : this._d }, toISOString: function() {
                        var e = Te(this).utc();
                        return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : $(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : $(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, toArray: function() {
                        var e = this;
                        return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()] }, isValid: function() {
                        return z(this) }, isDSTShifted: function() {
                        return this._a ? this.isValid() && S(this._a, (this._isUTC ? Te.utc(this._a) : Te(this._a)).toArray()) > 0 : !1 }, parsingFlags: function() {
                        return v({}, this._pf) }, invalidAt: function() {
                        return this._pf.overflow }, utc: function(e) {
                        return this.utcOffset(0, e) }, local: function(e) {
                        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(this._dateUtcOffset(), "m")), this }, format: function(e) {
                        var t = $(this, e || Te.defaultFormat);
                        return this.localeData().postformat(t) }, add: w(1, "add"), subtract: w(-1, "subtract"), diff: function(e, t, n) {
                        var a, r, i = B(e, this),
                            s = 6e4 * (i.utcOffset() - this.utcOffset());
                        return t = j(t), "year" === t || "month" === t || "quarter" === t ? (r = m(this, i), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (a = this - i, r = "second" === t ? a / 1e3 : "minute" === t ? a / 6e4 : "hour" === t ? a / 36e5 : "day" === t ? (a - s) / 864e5 : "week" === t ? (a - s) / 6048e5 : a), n ? r : L(r) }, from: function(e, t) {
                        return Te.duration({ to: this, from: e }).locale(this.locale()).humanize(!t) }, fromNow: function(e) {
                        return this.from(Te(), e) }, calendar: function(e) {
                        var t = e || Te(),
                            n = B(t, this).startOf("day"),
                            a = this.diff(n, "days", !0),
                            r = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
                        return this.format(this.localeData().calendar(r, this, Te(t))) }, isLeapYear: function() {
                        return W(this.year()) }, isDST: function() {
                        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, day: function(e) {
                        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                        return null != e ? (e = ce(e, this.localeData()), this.add(e - t, "d")) : t }, month: Le("Month", !0), startOf: function(e) {
                        switch (e = j(e)) {
                            case "year":
                                this.month(0);
                            case "quarter":
                            case "month":
                                this.date(1);
                            case "week":
                            case "isoWeek":
                            case "day":
                                this.hours(0);
                            case "hour":
                                this.minutes(0);
                            case "minute":
                                this.seconds(0);
                            case "second":
                                this.milliseconds(0) }
                        return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this }, endOf: function(e) {
                        return e = j(e), e === i || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms") }, isAfter: function(e, t) {
                        var n;
                        return t = j("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Te.isMoment(e) ? e : Te(e), +this > +e) : (n = Te.isMoment(e) ? +e : +Te(e), n < +this.clone().startOf(t)) }, isBefore: function(e, t) {
                        var n;
                        return t = j("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Te.isMoment(e) ? e : Te(e), +e > +this) : (n = Te.isMoment(e) ? +e : +Te(e), +this.clone().endOf(t) < n) }, isBetween: function(e, t, n) {
                        return this.isAfter(e, n) && this.isBefore(t, n) }, isSame: function(e, t) {
                        var n;
                        return t = j(t || "millisecond"), "millisecond" === t ? (e = Te.isMoment(e) ? e : Te(e), +this === +e) : (n = +Te(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t)) }, min: l("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
                        return e = Te.apply(null, arguments), this > e ? this : e }), max: l("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
                        return e = Te.apply(null, arguments), e > this ? this : e }), zone: l("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
                        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), utcOffset: function(e, t) {
                        var n, a = this._offset || 0;
                        return null != e ? ("string" == typeof e && (e = G(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateUtcOffset()), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), a !== e && (!t || this._changeInProgress ? T(this, Te.duration(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, Te.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : this._dateUtcOffset() }, isLocal: function() {
                        return !this._isUTC }, isUtcOffset: function() {
                        return this._isUTC }, isUtc: function() {
                        return this._isUTC && 0 === this._offset }, zoneAbbr: function() {
                        return this._isUTC ? "UTC" : "" }, zoneName: function() {
                        return this._isUTC ? "Coordinated Universal Time" : "" }, parseZone: function() {
                        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(G(this._i)), this }, hasAlignedHourOffset: function(e) {
                        return e = e ? Te(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0 }, daysInMonth: function() {
                        return A(this.year(), this.month()) }, dayOfYear: function(e) {
                        var t = Ee((Te(this).startOf("day") - Te(this).startOf("year")) / 864e5) + 1;
                        return null == e ? t : this.add(e - t, "d") }, quarter: function(e) {
                        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, weekYear: function(e) {
                        var t = me(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                        return null == e ? t : this.add(e - t, "y") }, isoWeekYear: function(e) {
                        var t = me(this, 1, 4).year;
                        return null == e ? t : this.add(e - t, "y") }, week: function(e) {
                        var t = this.localeData().week(this);
                        return null == e ? t : this.add(7 * (e - t), "d") }, isoWeek: function(e) {
                        var t = me(this, 1, 4).week;
                        return null == e ? t : this.add(7 * (e - t), "d") }, weekday: function(e) {
                        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                        return null == e ? t : this.add(e - t, "d") }, isoWeekday: function(e) {
                        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) }, isoWeeksInYear: function() {
                        return P(this.year(), 1, 4) }, weeksInYear: function() {
                        var e = this.localeData()._week;
                        return P(this.year(), e.dow, e.doy) }, get: function(e) {
                        return e = j(e), this[e]() }, set: function(e, t) {
                        var n;
                        if ("object" == typeof e)
                            for (n in e) this.set(n, e[n]);
                        else e = j(e), "function" == typeof this[e] && this[e](t);
                        return this }, locale: function(e) {
                        var t;
                        return e === i ? this._locale._abbr : (t = Te.localeData(e), null != t && (this._locale = t), this) }, lang: l("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                        return e === i ? this.localeData() : this.locale(e) }), localeData: function() {
                        return this._locale }, _dateUtcOffset: function() {
                        return 15 * -Math.round(this._d.getTimezoneOffset() / 15) } }), Te.fn.millisecond = Te.fn.milliseconds = Le("Milliseconds", !1), Te.fn.second = Te.fn.seconds = Le("Seconds", !1), Te.fn.minute = Te.fn.minutes = Le("Minutes", !1), Te.fn.hour = Te.fn.hours = Le("Hours", !0), Te.fn.date = Le("Date", !0), Te.fn.dates = l("dates accessor is deprecated. Use date instead.", Le("Date", !0)), Te.fn.year = Le("FullYear", !0), Te.fn.years = l("years accessor is deprecated. Use year instead.", Le("FullYear", !0)), Te.fn.days = Te.fn.day, Te.fn.months = Te.fn.month, Te.fn.weeks = Te.fn.week, Te.fn.isoWeeks = Te.fn.isoWeek, Te.fn.quarters = Te.fn.quarter, Te.fn.toJSON = Te.fn.toISOString, Te.fn.isUTC = Te.fn.isUtc, v(Te.duration.fn = g.prototype, {
                    _bubble: function() {
                        var e, t, n, a = this._milliseconds,
                            r = this._days,
                            i = this._months,
                            s = this._data,
                            o = 0;
                        s.milliseconds = a % 1e3, e = L(a / 1e3), s.seconds = e % 60, t = L(e / 60), s.minutes = t % 60, n = L(t / 60), s.hours = n % 24, r += L(n / 24), o = L(Ye(r)), r -= L(De(o)), i += L(r / 30), r %= 30, o += L(i / 12), i %= 12, s.days = r, s.months = i, s.years = o },
                    abs: function() {
                        return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this },
                    weeks: function() {
                        return L(this.days() / 7) },
                    valueOf: function() {
                        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12);
                    },
                    humanize: function(e) {
                        var t = he(this, !e, this.localeData());
                        return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t) },
                    add: function(e, t) {
                        var n = Te.duration(e, t);
                        return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this },
                    subtract: function(e, t) {
                        var n = Te.duration(e, t);
                        return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this },
                    get: function(e) {
                        return e = j(e), this[e.toLowerCase() + "s"]() },
                    as: function(e) {
                        var t, n;
                        if (e = j(e), "month" === e || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * Ye(t), "month" === e ? n : n / 12;
                        switch (t = this._days + Math.round(De(this._months / 12)), e) {
                            case "week":
                                return t / 7 + this._milliseconds / 6048e5;
                            case "day":
                                return t + this._milliseconds / 864e5;
                            case "hour":
                                return 24 * t + this._milliseconds / 36e5;
                            case "minute":
                                return 24 * t * 60 + this._milliseconds / 6e4;
                            case "second":
                                return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                            case "millisecond":
                                return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                            default:
                                throw new Error("Unknown unit " + e) } },
                    lang: Te.fn.lang,
                    locale: Te.fn.locale,
                    toIsoString: l("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                        return this.toISOString() }),
                    toISOString: function() {
                        var e = Math.abs(this.years()),
                            t = Math.abs(this.months()),
                            n = Math.abs(this.days()),
                            a = Math.abs(this.hours()),
                            r = Math.abs(this.minutes()),
                            i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (a || r || i ? "T" : "") + (a ? a + "H" : "") + (r ? r + "M" : "") + (i ? i + "S" : "") : "P0D" },
                    localeData: function() {
                        return this._locale },
                    toJSON: function() {
                        return this.toISOString() }
                }), Te.duration.fn.toString = Te.duration.fn.toISOString;
                for (xe in _t) o(_t, xe) && ke(xe.toLowerCase());
                Te.duration.fn.asMilliseconds = function() {
                    return this.as("ms") }, Te.duration.fn.asSeconds = function() {
                    return this.as("s") }, Te.duration.fn.asMinutes = function() {
                    return this.as("m") }, Te.duration.fn.asHours = function() {
                    return this.as("h") }, Te.duration.fn.asDays = function() {
                    return this.as("d") }, Te.duration.fn.asWeeks = function() {
                    return this.as("weeks") }, Te.duration.fn.asMonths = function() {
                    return this.as("M") }, Te.duration.fn.asYears = function() {
                    return this.as("y") }, Te.locale("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === C(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + n } }), Re ? r.exports = Te : (a = function(e, t, n) {
                    return n.config && n.config() && n.config().noGlobal === !0 && (je.moment = be), Te }.call(t, n, t, r), !(a !== i && (r.exports = a)), we(!0))
            }).call(this)
        }).call(t, function() {
            return this }(), n(12)(e))
    }, function(e, t) { e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e } }, function(e, t, n) {
        function a(e) {
            return n(r(e)) }

        function r(e) {
            return i[e] || function() {
                throw new Error("Cannot find module '" + e + "'.") }() }
        var i = { "./af": 14, "./af.js": 14, "./ar": 15, "./ar-ma": 16, "./ar-ma.js": 16, "./ar-sa": 17, "./ar-sa.js": 17, "./ar-tn": 18, "./ar-tn.js": 18, "./ar.js": 15, "./az": 19, "./az.js": 19, "./be": 20, "./be.js": 20, "./bg": 21, "./bg.js": 21, "./bn": 22, "./bn.js": 22, "./bo": 23, "./bo.js": 23, "./br": 24, "./br.js": 24, "./bs": 25, "./bs.js": 25, "./ca": 26, "./ca.js": 26, "./cs": 27, "./cs.js": 27, "./cv": 28, "./cv.js": 28, "./cy": 29, "./cy.js": 29, "./da": 30, "./da.js": 30, "./de": 31, "./de-at": 32, "./de-at.js": 32, "./de.js": 31, "./el": 33, "./el.js": 33, "./en-au": 34, "./en-au.js": 34, "./en-ca": 35, "./en-ca.js": 35, "./en-gb": 36, "./en-gb.js": 36, "./eo": 37, "./eo.js": 37, "./es": 38, "./es.js": 38, "./et": 39, "./et.js": 39, "./eu": 40, "./eu.js": 40, "./fa": 41, "./fa.js": 41, "./fi": 42, "./fi.js": 42, "./fo": 43, "./fo.js": 43, "./fr": 44, "./fr-ca": 45, "./fr-ca.js": 45, "./fr.js": 44, "./fy": 46, "./fy.js": 46, "./gl": 47, "./gl.js": 47, "./he": 48, "./he.js": 48, "./hi": 49, "./hi.js": 49, "./hr": 50, "./hr.js": 50, "./hu": 51, "./hu.js": 51, "./hy-am": 52, "./hy-am.js": 52, "./id": 53, "./id.js": 53, "./is": 54, "./is.js": 54, "./it": 55, "./it.js": 55, "./ja": 56, "./ja.js": 56, "./ka": 57, "./ka.js": 57, "./km": 58, "./km.js": 58, "./ko": 59, "./ko.js": 59, "./lb": 60, "./lb.js": 60, "./lt": 61, "./lt.js": 61, "./lv": 62, "./lv.js": 62, "./mk": 63, "./mk.js": 63, "./ml": 64, "./ml.js": 64, "./mr": 65, "./mr.js": 65, "./ms-my": 66, "./ms-my.js": 66, "./my": 67, "./my.js": 67, "./nb": 68, "./nb.js": 68, "./ne": 69, "./ne.js": 69, "./nl": 70, "./nl.js": 70, "./nn": 71, "./nn.js": 71, "./pl": 72, "./pl.js": 72, "./pt": 73, "./pt-br": 74, "./pt-br.js": 74, "./pt.js": 73, "./ro": 75, "./ro.js": 75, "./ru": 76, "./ru.js": 76, "./sk": 77, "./sk.js": 77, "./sl": 78, "./sl.js": 78, "./sq": 79, "./sq.js": 79, "./sr": 80, "./sr-cyrl": 81, "./sr-cyrl.js": 81, "./sr.js": 80, "./sv": 82, "./sv.js": 82, "./ta": 83, "./ta.js": 83, "./th": 84, "./th.js": 84, "./tl-ph": 85, "./tl-ph.js": 85, "./tr": 86, "./tr.js": 86, "./tzm": 87, "./tzm-latn": 88, "./tzm-latn.js": 88, "./tzm.js": 87, "./uk": 89, "./uk.js": 89, "./uz": 90, "./uz.js": 90, "./vi": 91, "./vi.js": 91, "./zh-cn": 92, "./zh-cn.js": 92, "./zh-tw": 93, "./zh-tw.js": 93 };
        a.keys = function() {
            return Object.keys(i) }, a.resolve = r, e.exports = a, a.id = 13 }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) {
                    return /^nm$/i.test(e) }, meridiem: function(e, t, n) {
                    return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
                a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5 },
                r = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
                i = function(e) {
                    return function(t, n, i, s) {
                        var o = a(t),
                            d = r[e][a(t)];
                        return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t) } },
                s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            return e.defineLocale("ar", { months: s, monthsShort: s, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function(e) {
                    return "م" === e }, meridiem: function(e, t, n) {
                    return 12 > e ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: i("s"), m: i("m"), mm: i("m"), h: i("h"), hh: i("h"), d: i("d"), dd: i("d"), M: i("M"), MM: i("M"), y: i("y"), yy: i("y") }, preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e] }).replace(/،/g, ",") }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };
            return e.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function(e) {
                    return "م" === e }, meridiem: function(e, t, n) {
                    return 12 > e ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e] }).replace(/،/g, ",") }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };
            return e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam" }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r]) }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2] }

            function n(e, n, a) {
                var r = { mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" };
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e) }

            function a(e, t) {
                var n = { nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"), accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_") },
                    a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function r(e, t) {
                var n = { nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_") },
                    a = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                return n[a][e.day()] }
            return e.defineLocale("be", { months: a, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: r, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function() {
                        return "[У] dddd [ў] LT" }, lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT" } }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: n, mm: n, h: n, hh: n, d: "дзень", dd: n, M: "месяц", MM: n, y: "год", yy: n }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function(e) {
                    return /^(дня|вечара)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара" }, ordinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e } }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
                n = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };
            return e.defineLocale("bn", { months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"), weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কএক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/, isPM: function(e) {
                    return /^(দুপুর|বিকেল|রাত)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "রাত" : 10 > e ? "শকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকেল" : "রাত" }, week: { dow: 0, doy: 6 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
                n = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };
            return e.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, isPM: function(e) {
                    return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = { mm: "munutenn", MM: "miz", dd: "devezh" };
                return e + " " + r(a[n], e) }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz" } }

            function a(e) {
                return e > 9 ? a(e % 10) : e }

            function r(e, t) {
                return 2 === t ? i(e) : e }

            function i(e) {
                var t = { m: "v", b: "v", d: "z" };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }
            return e.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY LT", LLLL: "dddd, D [a viz] MMMM YYYY LT" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: n }, ordinalParse: /\d{1,2}(añ|vet)/, ordinal: function(e) {
                    var t = 1 === e ? "añ" : "vet";
                    return e + t }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } }
            return e.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ca", { months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return ("w" === t || "W" === t) && (n = "a"), e + n }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e) {
                return e > 1 && 5 > e && 1 !== ~~(e / 10) }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return n || r ? "den" : "dnem";
                    case "dd":
                        return n || r ? i + (t(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return n || r ? "měsíc" : "měsícem";
                    case "MM":
                        return n || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return n || r ? "rok" : "rokem";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "let") : i + "lety" } }
            var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", { months: a, monthsShort: r, monthsParse: function(e, t) {
                    var n, a = [];
                    for (n = 0; 12 > n; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return a }(a, r), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT" } }, lastDay: "[včera v] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("cv", { months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"), monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]", LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT", LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ĕнер] LT [сехетре]", nextWeek: "[Çитес] dddd LT [сехетре]", lastWeek: "[Иртнĕ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /çул$/i.exec(e) ? "тан" : "ран";
                        return e + t }, past: "%s каялла", s: "пĕр-ик çеккунт", m: "пĕр минут", mm: "%d минут", h: "пĕр сехет", hh: "%d сехет", d: "пĕр кун", dd: "%d кун", M: "пĕр уйăх", MM: "%d уйăх", y: "пĕр çул", yy: "%d çул" }, ordinalParse: /\d{1,2}-мĕш/, ordinal: "%d-мĕш", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) {
                    var t = e,
                        n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd [d.] D. MMMM YYYY LT" }, calendar: { sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I går kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };
                return t ? r[n][0] : r[n][1] }
            return e.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;
        ! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };
                return t ? r[n][0] : r[n][1] }
            return e.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) })
    }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function(e, t) {
                    return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ" }, isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0] }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT" } }, sameElse: "L" }, calendar: function(e, t) {
                    var n = this._calendarEl[e],
                        a = t && t.hours();
                    return "function" == typeof n && (n = n.apply(t)), n.replace("{}", a % 12 === 1 ? "στη" : "στις") }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, ordinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY LT", LLLL: "dddd, D MMMM, YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY LT", LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "je %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, ordinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) {
                    return /-MMM-/.test(a) ? n[e.month()] : t[e.month()] }, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                var r = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] };
                return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1] }
            return e.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d päeva", M: t, MM: t, y: t, yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] LT", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] LT", llll: "ddd, YYYY[ko] MMM D[a] LT" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
                n = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };
            return e.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function(e) {
                    return /بعد از ظهر/.test(e) }, meridiem: function(e, t, n) {
                    return 12 > e ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چندین ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return n[e] }).replace(/،/g, ",") }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }).replace(/,/g, "،") }, ordinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, a, r) {
                var i = "";
                switch (a) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        i = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        i = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        i = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        i = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        i = r ? "vuoden" : "vuotta" }
                return i = n(e, r) + " " + i }

            function n(e, t) {
                return 10 > e ? t ? r[e] : a[e] : e }
            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
            return e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] LT", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] LT", llll: "ddd, Do MMM YYYY, [klo] LT" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function(e) {
                    return e + (1 === e ? "er" : "") }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function(e) {
                    return e + (1 === e ? "er" : "") } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, a) {
                    return /-MMM-/.test(a) ? n[e.month()] : t[e.month()] }, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("gl", { months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"), weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) {
                        return "uns segundos" === e ? "nuns segundos" : "en " + e }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY LT", LLLL: "dddd, D [ב]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות" }, d: "יום", dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים" }, M: "חודש", MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים" }, y: "שנה", yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים" } } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
            return e.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } }
            return e.defineLocale("hr", { months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                var r = e;
                switch (n) {
                    case "s":
                        return a || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case "mm":
                        return r + (a || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (a || t ? " óra" : " órája");
                    case "hh":
                        return r + (a || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case "dd":
                        return r + (a || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (a || t ? " hónap" : " hónapja");
                    case "MM":
                        return r + (a || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (a || t ? " év" : " éve");
                    case "yy":
                        return r + (a || t ? " év" : " éve") }
                return "" }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]" }
            var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT" }, meridiemParse: /de|du/i, isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, n) {
                    return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() {
                        return n.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() {
                        return n.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t) {
                var n = { nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"), accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_") },
                    a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function n(e, t) {
                var n = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
                return n[e.month()] }

            function a(e, t) {
                var n = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
                return n[e.day()] }
            return e.defineLocale("hy-am", { months: t, monthsShort: n, weekdays: a, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., LT", LLLL: "dddd, D MMMM YYYY թ., LT" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function() {
                        return "dddd [օրը ժամը] LT" }, lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e) }, meridiem: function(e) {
                    return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան" }, ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e } }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;
        ! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e) {
                return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0 }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? i + (n || r ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                    case "hh":
                        return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                    case "d":
                        return n ? "dagur" : r ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dögum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : r ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                    case "y":
                        return n || r ? "ár" : "ári";
                    case "yy":
                        return t(e) ? i + (n || r ? "ár" : "árum") : i + (n || r ? "ár" : "ári") } }
            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT" },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: n, m: n, mm: n, h: "klukkustund", hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: { dow: 1, doy: 4 }
            })
        })
    }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "Ah時m分", LTS: "LTs秒", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日LT", LLLL: "YYYY年M月D日LT dddd" }, meridiemParse: /午前|午後/i, isPM: function(e) {
                    return "午後" === e }, meridiem: function(e, t, n) {
                    return 12 > e ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t) {
                var n = { nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") },
                    a = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function n(e, t) {
                var n = { nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_") },
                    a = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
                return n[a][e.day()] }
            return e.defineLocale("ka", { months: t, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: n, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში" }, past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("km", { months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[ថ្ងៃនៈ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h시 m분", LTS: "A h시 m분 s초", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 LT", LLLL: "YYYY년 MMMM D일 dddd LT" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇초", ss: "%d초", m: "일분", mm: "%d분", h: "한시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한달", MM: "%d달", y: "일년", yy: "%d년" }, ordinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function(e) {
                    return "오후" === e }, meridiem: function(e, t, n) {
                    return 12 > e ? "오전" : "오후" } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                var r = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };
                return t ? r[n][0] : r[n][1] }

            function n(e) {
                var t = e.substr(0, e.indexOf(" "));
                return r(t) ? "a " + e : "an " + e }

            function a(e) {
                var t = e.substr(0, e.indexOf(" "));
                return r(t) ? "viru " + e : "virun " + e }

            function r(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (0 > e) return !0;
                if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
                if (100 > e) {
                    var t = e % 10,
                        n = e / 10;
                    return r(0 === t ? n : t) }
                if (1e4 > e) {
                    for (; e >= 10;) e /= 10;
                    return r(e) }
                return e /= 1e3, r(e) }
            return e.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: n, past: a, s: "e puer Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d Méint", y: t, yy: "%d Joer" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes" }

            function n(e, t, n, a) {
                return t ? r(n)[0] : a ? r(n)[1] : r(n)[2] }

            function a(e) {
                return e % 10 === 0 || e > 10 && 20 > e }

            function r(e) {
                return o[e].split("_") }

            function i(e, t, i, s) {
                var o = e + " ";
                return 1 === e ? o + n(e, t, i[0], s) : t ? o + (a(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (a(e) ? r(i)[1] : r(i)[2]) }

            function s(e, t) {
                var n = -1 === t.indexOf("dddd HH:mm"),
                    a = d[e.day()];
                return n ? a : a.substring(0, a.length - 2) + "į" }
            var o = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" },
                d = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
            return e.defineLocale("lt", { months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: s, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], LT [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], LT [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: t, m: n, mm: i, h: n, hh: i, d: n, dd: i, M: n, MM: i, y: n, yy: i }, ordinalParse: /\d{1,2}-oji/, ordinal: function(e) {
                    return e + "-oji" }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = e.split("_");
                return n ? t % 10 === 1 && 11 !== t ? a[2] : a[3] : t % 10 === 1 && 11 !== t ? a[0] : a[1] }

            function n(e, n, r) {
                return e + " " + t(a[r], e, n) }
            var a = { mm: "minūti_minūtes_minūte_minūtes", hh: "stundu_stundas_stunda_stundas", dd: "dienu_dienas_diena_dienas", MM: "mēnesi_mēnešus_mēnesis_mēneši", yy: "gadu_gadus_gads_gadi" };
            return e.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, LT", LLLL: "YYYY. [gada] D. MMMM, dddd, LT" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "%s vēlāk", past: "%s agrāk", s: "dažas sekundes", m: "minūti", mm: n, h: "stundu", hh: n, d: "dienu", dd: n, M: "mēnesi", MM: n, y: "gadu", yy: n }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Во изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Во изминатиот] dddd [во] LT" } }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, isPM: function(e) {
                    return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി" } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
            return e.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s नंतर", past: "%s पूर्वी", s: "सेकंद", m: "एक मिनिट", mm: "%d मिनिटे", h: "एक तास", hh: "%d तास", d: "एक दिवस", dd: "%d दिवस", M: "एक महिना", MM: "%d महिने", y: "एक वर्ष", yy: "%d वर्षे" }, preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
                n = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };
            return e.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "H.mm", LTS: "LT.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd D. MMMM YYYY [kl.] LT" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
            return e.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"), longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e] }) }, postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e] }) }, meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "राती" === t ? 3 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "बेलुका" === t || "साँझ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    return 3 > e ? "राती" : 10 > e ? "बिहान" : 15 > e ? "दिउँसो" : 18 > e ? "बेलुका" : 20 > e ? "साँझ" : "राती" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोली] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडी", s: "केही समय", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) {
                    return /-MMM-/.test(a) ? n[e.month()] : t[e.month()] }, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e) {
                return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1 }

            function n(e, n, a) {
                var r = e + " ";
                switch (a) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return r + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return r + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (t(e) ? "lata" : "lat") } }
            var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", { months: function(e, t) {
                    return /D MMMM/.test(t) ? r[e.month()] : a[e.month()] }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"), weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: n, mm: n, h: n, hh: n, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: n, y: "rok", yy: n }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("pt", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("pt-br", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] LT", LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº" }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
                    r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (r = " de "), e + r + a[n] }
            return e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: t, h: "o oră", hh: t, d: "o zi", dd: t, M: "o lună", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2] }

            function n(e, n, a) {
                var r = { mm: n ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" };
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e) }

            function a(e, t) {
                var n = { nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_") },
                    a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function r(e, t) {
                var n = { nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_") },
                    a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function i(e, t) {
                var n = { nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_") },
                    a = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                return n[a][e.day()] }
            return e.defineLocale("ru", { months: a, monthsShort: r, weekdays: i, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i], longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function() {
                        return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT" }, lastWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: n, mm: n, h: "час", hh: n, d: "день", dd: n, M: "месяц", MM: n, y: "год", yy: n }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function(e) {
                    return /^(дня|вечера)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера" }, ordinalParse: /\d{1,2}-(й|го|я)/, ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e } }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;
        ! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e) {
                return e > 1 && 5 > e }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : r ? "minútu" : "minútou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return n || r ? "deň" : "dňom";
                    case "dd":
                        return n || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return n || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return n || r ? "rok" : "rokom";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi" } }
            var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: a,
                monthsShort: r,
                monthsParse: function(e, t) {
                    var n, a = [];
                    for (n = 0; 12 > n; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return a;
                }(a, r),
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" },
                calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT" } }, lastDay: "[včera o] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT" } }, sameElse: "L" },
                relativeTime: { future: "za %s", past: "pred %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: { dow: 1, doy: 4 }
            })
        })
    }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return a += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                    case "dd":
                        return a += 1 === e ? "dan" : "dni";
                    case "MM":
                        return a += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                    case "yy":
                        return a += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let" } }
            return e.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT" } }, lastDay: "[včeraj ob] LT", lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[prejšnja] dddd [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "%s nazaj", s: "nekaj sekund", m: t, mm: t, h: t, hh: t, d: "en dan", dd: t, M: "en mesec", MM: t, y: "eno leto", yy: t }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), meridiemParse: /PD|MD/, isPM: function(e) {
                    return "M" === e.charAt(0) }, meridiem: function(e, t, n) {
                    return 12 > e ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2] }, translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
            return e.defineLocale("sr", { months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."], weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."], weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function() {
                        var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2] }, translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
            return e.defineLocale("sr-cyrl", { months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."], weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."], weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT" } }, lastDay: "[јуче у] LT", lastWeek: function() {
                        var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return e[this.day()] }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "дан", dd: t.translate, M: "месец", MM: t.translate, y: "годину", yy: t.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "dddd LT", lastWeek: "[Förra] dddd[en] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}(e|a)/, ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                    return e + n }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, ordinalParse: /\d{1,2}வது/, ordinal: function(e) {
                    return e + "வது" }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function(e, t, n) {
                    return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்" }, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"), weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), longDateFormat: { LT: "H นาฬิกา m นาที", LTS: "LT s วินาที", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา LT", LLLL: "วันddddที่ D MMMM YYYY เวลา LT" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function(e) {
                    return "หลังเที่ยง" === e }, meridiem: function(e, t, n) {
                    return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM DD, YYYY LT" }, calendar: { sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, ordinalParse: /\d{1,2}/, ordinal: function(e) {
                    return e }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };
            return e.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function(e) {
                    if (0 === e) return e + "'ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r]) }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2] }

            function n(e, n, a) {
                var r = { mm: "хвилина_хвилини_хвилин", hh: "година_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" };
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e) }

            function a(e, t) {
                var n = { nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_") },
                    a = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
                return n[a][e.month()] }

            function r(e, t) {
                var n = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") },
                    a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[a][e.day()] }

            function i(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT" } }
            return e.defineLocale("uk", { months: a, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: r, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., LT", LLLL: "dddd, D MMMM YYYY р., LT" }, calendar: { sameDay: i("[Сьогодні "), nextDay: i("[Завтра "), lastDay: i("[Вчора "), nextWeek: i("[У] dddd ["), lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return i("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return i("[Минулого] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: n, mm: n, h: "годину", hh: n, d: "день", dd: n, M: "місяць", MM: n, y: "рік", yy: n }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function(e) {
                    return /^(дня|вечора)$/.test(e) }, meridiem: function(e, t, n) {
                    return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора" }, ordinalParse: /\d{1,2}-(й|го)/, ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e } }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("uz", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "D MMMM YYYY, dddd LT" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY LT", LLLL: "dddd, D MMMM [năm] YYYY LT", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, ordinalParse: /\d{1,2}/, ordinal: function(e) {
                    return e }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah点mm", LTS: "Ah点m分s秒", L: "YYYY-MM-DD", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY-MM-DD", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上" }, calendar: { sameDay: function() {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT" }, nextDay: function() {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT" }, lastDay: function() {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT" }, nextWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm" }, lastWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm" }, sameElse: "LL" }, ordinalParse: /\d{1,2}(日|月|周)/, ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e } }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1分钟", mm: "%d分钟", h: "1小时", hh: "%d小时", d: "1天", dd: "%d天", M: "1个月", MM: "%d个月", y: "1年", yy: "%d年" }, week: { dow: 1, doy: 4 } }) }) }, function(e, t, n) {
        var a, r, i;! function(s) { r = [n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e) {
            return e.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah點mm", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /早上|上午|中午|下午|晚上/, meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, ordinalParse: /\d{1,2}(日|月|週)/, ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d分鐘", h: "一小時", hh: "%d小時", d: "一天", dd: "%d天", M: "一個月", MM: "%d個月", y: "一年", yy: "%d年" } }) }) }, , function(e, t, n) {
        var a, r, i;
        (function(s) {
            ! function(s) { r = [n(1), n(11)], a = s, i = "function" == typeof a ? a.apply(t, r) : a, !(void 0 !== i && (e.exports = i)) }(function(e, t) {
                e.dateRangePickerLanguages = {
                    "default": { selected: "Selected:", day: "Day", days: "Days", apply: "Close", "week-1": "mo", "week-2": "tu", "week-3": "we", "week-4": "th", "week-5": "fr", "week-6": "sa", "week-7": "su", "week-number": "W", "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], shortcuts: "Shortcuts", "custom-values": "Custom Values", past: "Past", following: "Following", previous: "Previous", "prev-week": "Week", "prev-month": "Month", "prev-year": "Year", next: "Next", "next-week": "Week", "next-month": "Month", "next-year": "Year", "less-than": "Date range should not be more than %d days", "more-than": "Date range should not be less than %d days", "default-more": "Please select a date range longer than %d days", "default-single": "Please select a date", "default-less": "Please select a date range less than %d days", "default-range": "Please select a date range between %d and %d days", "default-default": "Please select a date range", time: "Time", hour: "Hour", minute: "Minute" },
                    az: { selected: "Seçildi:", day: " gün", days: " gün", apply: "tətbiq", "week-1": "1", "week-2": "2", "week-3": "3", "week-4": "4", "week-5": "5", "week-6": "6", "week-7": "7", "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"], shortcuts: "Qısayollar", past: "Keçmiş", following: "Növbəti", previous: "&nbsp;&nbsp;&nbsp;", "prev-week": "Öncəki həftə", "prev-month": "Öncəki ay", "prev-year": "Öncəki il", next: "&nbsp;&nbsp;&nbsp;", "next-week": "Növbəti həftə", "next-month": "Növbəti ay", "next-year": "Növbəti il", "less-than": "Tarix aralığı %d gündən çox olmamalıdır", "more-than": "Tarix aralığı %d gündən az olmamalıdır", "default-more": "%d gündən çox bir tarix seçin", "default-single": "Tarix seçin", "default-less": "%d gündən az bir tarix seçin", "default-range": "%d və %d gün aralığında tarixlər seçin", "default-default": "Tarix aralığı seçin" },
                    cn: { selected: "已选择:", day: "天", days: "天", apply: "确定", "week-1": "一", "week-2": "二", "week-3": "三", "week-4": "四", "week-5": "五", "week-6": "六", "week-7": "日", "week-number": "周", "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], shortcuts: "快捷选择", past: "过去", following: "将来", previous: "&nbsp;&nbsp;&nbsp;", "prev-week": "上周", "prev-month": "上个月", "prev-year": "去年", next: "&nbsp;&nbsp;&nbsp;", "next-week": "下周", "next-month": "下个月", "next-year": "明年", "less-than": "所选日期范围不能大于%d天", "more-than": "所选日期范围不能小于%d天", "default-more": "请选择大于%d天的日期范围", "default-less": "请选择小于%d天的日期范围", "default-range": "请选择%d天到%d天的日期范围", "default-single": "请选择一个日期", "default-default": "请选择一个日期范围", time: "时间", hour: "小时", minute: "分钟" },
                    cz: { selected: "Vybráno:", day: "Den", days: "Dny", apply: "Zavřít", "week-1": "po", "week-2": "út", "week-3": "st", "week-4": "čt", "week-5": "pá", "week-6": "so", "week-7": "ne", "month-name": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"], shortcuts: "Zkratky", past: "po", following: "následující", previous: "předchozí", "prev-week": "týden", "prev-month": "měsíc", "prev-year": "rok", next: "další", "next-week": "týden", "next-month": "měsíc", "next-year": "rok", "less-than": "Rozsah data by neměl být větší než %d dnů", "more-than": "Rozsah data by neměl být menší než %d dnů", "default-more": "Prosím zvolte rozsah data větší než %d dnů", "default-single": "Prosím zvolte datum", "default-less": "Prosím zvolte rozsah data menší než %d dnů", "default-range": "Prosím zvolte rozsah data mezi %d a %d dny", "default-default": "Prosím zvolte rozsah data" },
                    de: { selected: "Auswahl:", day: "Tag", days: "Tage", apply: "Schließen", "week-1": "mo", "week-2": "di", "week-3": "mi", "week-4": "do", "week-5": "fr", "week-6": "sa", "week-7": "so", "month-name": ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"], shortcuts: "Schnellwahl", past: "Vorherige", following: "Folgende", previous: "Vorherige", "prev-week": "Woche", "prev-month": "Monat", "prev-year": "Jahr", next: "Nächste", "next-week": "Woche", "next-month": "Monat", "next-year": "Jahr", "less-than": "Datumsbereich darf nicht größer sein als %d Tage", "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage", "default-more": "Bitte mindestens %d Tage auswählen", "default-single": "Bitte ein Datum auswählen", "default-less": "Bitte weniger als %d Tage auswählen", "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen", "default-default": "Bitte ein Start- und Enddatum auswählen", Time: "Zeit", hour: "Stunde", minute: "Minute" },
                    es: { selected: "Seleccionado:", day: "Dia", days: "Dias", apply: "Cerrar", "week-1": "lu", "week-2": "ma", "week-3": "mi", "week-4": "ju", "week-5": "vi", "week-6": "sa", "week-7": "do", "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], shortcuts: "Accesos directos", past: "Pasado", following: "Siguiente", previous: "Anterior", "prev-week": "Semana", "prev-month": "Mes", "prev-year": "Año", next: "Siguiente", "next-week": "Semana", "next-month": "Mes", "next-year": "Año", "less-than": "El rango no deberia ser mayor de %d dias", "more-than": "El rango no deberia ser menor de %d dias", "default-more": "Por favor selecciona un rango mayor a %d dias", "default-single": "Por favor selecciona un dia", "default-less": "Por favor selecciona un rango menor a %d dias", "default-range": "Por favor selecciona un rango entre %d y %d dias", "default-default": "Por favor selecciona un rango de fechas." },
                    fr: { selected: "Sélection:", day: "Jour", days: "Jours", apply: "Fermer", "week-1": "lu", "week-2": "ma", "week-3": "me", "week-4": "je", "week-5": "ve", "week-6": "sa", "week-7": "di", "month-name": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], shortcuts: "Raccourcis", past: "Passé", following: "Suivant", previous: "Précédent", "prev-week": "Semaine", "prev-month": "Mois", "prev-year": "Année", next: "Suivant", "next-week": "Semaine", "next-month": "Mois", "next-year": "Année", "less-than": "L'intervalle ne doit pas être supérieure à %d jours", "more-than": "L'intervalle ne doit pas être inférieure à %d jours", "default-more": "Merci de choisir une intervalle supérieure à %d jours", "default-single": "Merci de choisir une date", "default-less": "Merci de choisir une intervalle inférieure %d jours", "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours", "default-default": "Merci de choisir une date" },
                    hu: { selected: "Kiválasztva:", day: "Nap", days: "Nap", apply: "Ok", "week-1": "h", "week-2": "k", "week-3": "sz", "week-4": "cs", "week-5": "p", "week-6": "sz", "week-7": "v", "month-name": ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"], shortcuts: "Gyorsválasztó", past: "Múlt", following: "Következő", previous: "Előző", "prev-week": "Hét", "prev-month": "Hónap", "prev-year": "Év", next: "Következő", "next-week": "Hét", "next-month": "Hónap", "next-year": "Év", "less-than": "A kiválasztás nem lehet több %d napnál", "more-than": "A kiválasztás nem lehet több %d napnál", "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap", "default-single": "Válassz egy napot", "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap", "default-range": "Válassz ki egy %d - %d nap hosszú időszakot", "default-default": "Válassz ki egy időszakot" },
                    it: {
                        selected: "Selezionati:",
                        day: "Giorno",
                        days: "Giorni",
                        apply: "Chiudi",
                        "week-1": "lu",
                        "week-2": "ma",
                        "week-3": "me",
                        "week-4": "gi",
                        "week-5": "ve",
                        "week-6": "sa",
                        "week-7": "do",
                        "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
                        shortcuts: "Scorciatoie",
                        past: "Scorso",
                        following: "Successivo",
                        previous: "Precedente",
                        "prev-week": "Settimana",
                        "prev-month": "Mese",
                        "prev-year": "Anno",
                        next: "Prossimo",
                        "next-week": "Settimana",
                        "next-month": "Mese",
                        "next-year": "Anno",
                        "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
                        "more-than": "L'intervallo non dev'essere minore di %d giorni",
                        "default-more": "Seleziona un intervallo maggiore di %d giorni",
                        "default-single": "Seleziona una data",
                        "default-less": "Seleziona un intervallo minore di %d giorni",
                        "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
                        "default-default": "Seleziona un intervallo di date"
                    },
                    no: { selected: "Valgt:", day: "Dag", days: "Dager", apply: "Lukk", "week-1": "ma", "week-2": "ti", "week-3": "on", "week-4": "to", "week-5": "fr", "week-6": "lø", "week-7": "sø", "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], shortcuts: "Snarveier", "custom-values": "Egendefinerte Verdier", past: "Over", following: "Følger", previous: "Forrige", "prev-week": "Uke", "prev-month": "Måned", "prev-year": "År", next: "Neste", "next-week": "Uke", "next-month": "Måned", "next-year": "År", "less-than": "Datoperioden skal ikkje være lengre enn %d dager", "more-than": "Datoperioden skal ikkje være kortere enn %d dager", "default-more": "Vennligst velg ein datoperiode lengre enn %d dager", "default-single": "Vennligst velg ein dato", "default-less": "Vennligst velg ein datoperiode mindre enn %d dager", "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager", "default-default": "Vennligst velg ein datoperiode", time: "Tid", hour: "Time", minute: "Minutter" },
                    nl: { selected: "Geselecteerd:", day: "Dag", days: "Dagen", apply: "Ok", "week-1": "ma", "week-2": "di", "week-3": "wo", "week-4": "do", "week-5": "vr", "week-6": "za", "week-7": "zo", "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "october", "november", "december"], shortcuts: "Snelkoppelingen", "custom-values": "Aangepaste waarden", past: "Verleden", following: "Komend", previous: "Vorige", "prev-week": "Week", "prev-month": "Maand", "prev-year": "Jaar", next: "Volgende", "next-week": "Week", "next-month": "Maand", "next-year": "Jaar", "less-than": "Interval moet langer dan %d dagen zijn", "more-than": "Interval mag niet minder dan %d dagen zijn", "default-more": "Selecteer een interval langer dan %dagen", "default-single": "Selecteer een datum", "default-less": "Selecteer een interval minder dan %d dagen", "default-range": "Selecteer een interval tussen %d en %d dagen", "default-default": "Selecteer een interval", time: "Tijd", hour: "Uur", minute: "Minuut" },
                    ru: { selected: "Выбрано:", day: "День", days: "Дней", apply: "Закрыть", "week-1": "пн", "week-2": "вт", "week-3": "ср", "week-4": "чт", "week-5": "пт", "week-6": "сб", "week-7": "вс", "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], shortcuts: "Быстрый выбор", past: "Прошедшие", following: "Следующие", previous: "&nbsp;&nbsp;&nbsp;", "prev-week": "Неделя", "prev-month": "Месяц", "prev-year": "Год", next: "&nbsp;&nbsp;&nbsp;", "next-week": "Неделя", "next-month": "Месяц", "next-year": "Год", "less-than": "Диапазон не может быть больше %d дней", "more-than": "Диапазон не может быть меньше %d дней", "default-more": "Пожалуйста выберите диапазон больше %d дней", "default-single": "Пожалуйста выберите дату", "default-less": "Пожалуйста выберите диапазон меньше %d дней", "default-range": "Пожалуйста выберите диапазон между %d и %d днями", "default-default": "Пожалуйста выберите диапазон" },
                    pl: { selected: "Wybrany:", day: "Dzień", days: "Dni", apply: "Zamknij", "week-1": "pon", "week-2": "wt", "week-3": "śr", "week-4": "czw", "week-5": "pt", "week-6": "so", "week-7": "nd", "month-name": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"], shortcuts: "Skróty", "custom-values": "Niestandardowe wartości", past: "Przeszłe", following: "Następne", previous: "Poprzednie", "prev-week": "tydzień", "prev-month": "miesiąc", "prev-year": "rok", next: "Następny", "next-week": "tydzień", "next-month": "miesiąc", "next-year": "rok", "less-than": "Okres nie powinien być dłuższy niż %d dni", "more-than": "Okres nie powinien być krótszy niż  %d ni", "default-more": "Wybierz okres dłuższy niż %d dni", "default-single": "Wybierz datę", "default-less": "Wybierz okres krótszy niż %d dni", "default-range": "Wybierz okres trwający od %d do %d dni", "default-default": "Wybierz okres", time: "Czas", hour: "Godzina", minute: "Minuta" }
                }, e.fn.dateRangePicker = function(n) {
                    function a(t, n) {
                        return n.contains(t.target) || t.target == n || void 0 != n.childNodes && e.inArray(t.target, n.childNodes) >= 0 }

                    function r() {
                        function r(t) {
                            var a = e(t).parents("table").hasClass("month2"),
                                r = a ? n.month2 : n.month1;
                            r = z(r), !n.singleMonth && !n.singleDate && !a && W(r, n.month2) >= 0 || q(r) || (E(r, a ? "month2" : "month1"), P()) }

                        function s(e) {
                            var t = z(n.month1),
                                a = z(n.month2);
                            q(a) || !n.singleDate && W(t, a) >= 0 || (E(t, "month1"), E(a, "month2"), j()) }

                        function o(t) {
                            var a = e(t).parents("table").hasClass("month2"),
                                r = a ? n.month2 : n.month1;
                            r = N(r), a && W(r, n.month1) <= 0 || q(r) || (E(r, a ? "month2" : "month1"), P()) }

                        function d(e) {
                            var t = N(n.month1),
                                a = N(n.month2);
                            q(t) || !n.singleDate && W(a, t) <= 0 || (E(a, "month2"), E(t, "month1"), j()) }
                        var u = this;
                        if (e(this).data("date-picker-opened")) return void H();
                        e(this).data("date-picker-opened", !0), te = R().hide(), te.append('<div class="date-range-length-tip"></div>'), te.delegate(".day", "mouseleave", function() { te.find(".date-range-length-tip").hide() }), e(n.container).append(te), n.inline ? te.addClass("inline-wrapper") : i(), n.alwaysOpen && te.find(".apply-btn").hide();
                        var c = n.defaultTime ? n.defaultTime : new Date;
                        n.lookBehind ? (n.startDate && W(c, n.startDate) < 0 && (c = z(t(n.startDate).toDate())), n.endDate && W(c, n.endDate) > 0 && (c = t(n.endDate).toDate()), E(N(c), "month1"), E(c, "month2")) : (n.startDate && W(c, n.startDate) < 0 && (c = t(n.startDate).toDate()), n.endDate && W(z(c), n.endDate) > 0 && (c = N(t(n.endDate).toDate())), E(c, "month1"), E(z(c), "month2")), n.singleDate && (n.startDate && W(c, n.startDate) < 0 && (c = t(n.startDate).toDate()), n.endDate && W(c, n.endDate) > 0 && (c = t(n.endDate).toDate()), E(c, "month1")), n.time.enabled && (n.startDate && n.endDate || n.start && n.end ? (F(t(n.start || n.startDate).toDate(), "time1"), F(t(n.end || n.endDate).toDate(), "time2")) : (F(c, "time1"), F(c, "time2")));
                        var f = "";
                        f = ee(n.singleDate ? "default-single" : n.minDays && n.maxDays ? "default-range" : n.minDays ? "default-more" : n.maxDays ? "default-less" : "default-default"), te.find(".default-top").html(f.replace(/\%d/, n.minDays).replace(/\%d/, n.maxDays)), n.singleMonth ? te.addClass("single-month") : te.addClass("two-months"), setTimeout(function() { l(), re = !0 }, 0), te.click(function(e) { e.stopPropagation() }), e(document).bind("click.datepicker", function(e) { a(e, u[0]) || te.is(":visible") && H() }), te.find(".next").click(function() { n.stickyMonths ? s(this) : r(this) }), te.find(".prev").click(function() { n.stickyMonths ? d(this) : o(this) }), te.delegate(".day", "click", function(t) { g(e(this)) }), te.delegate(".day", "mouseenter", function(t) { Y(e(this)) }), te.delegate(".week-number", "click", function(t) { v(e(this)) }), te.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function(e) {
                            return e.preventDefault(), !1 }), te.find(".apply-btn").click(function() { H();
                            var t = A(new Date(n.start)) + n.separator + A(new Date(n.end));
                            e(u).trigger("datepicker-apply", { value: t, date1: new Date(n.start), date2: new Date(n.end) }) }), te.find("[custom]").click(function() {
                            var t = e(this).attr("custom");
                            n.start = !1, n.end = !1, te.find(".day.checked").removeClass("checked"), n.setValue.call(se, t), w(), T(!0), j(), n.autoClose && H() }), te.find("[shortcut]").click(function() {
                            var t = e(this).attr("shortcut"),
                                a = new Date,
                                r = !1;
                            if (-1 != t.indexOf("day")) {
                                var i = parseInt(t.split(",", 2)[1], 10);
                                r = new Date((new Date).getTime() + 864e5 * i), a = new Date(a.getTime() + 864e5 * (i > 0 ? 1 : -1)) } else if (-1 != t.indexOf("week")) {
                                var s = -1 != t.indexOf("prev,") ? -1 : 1;
                                if (1 == s) var o = "monday" == n.startOfWeek ? 1 : 0;
                                else var o = "monday" == n.startOfWeek ? 0 : 6;
                                for (a = new Date(a.getTime() - 864e5); a.getDay() != o;) a = new Date(a.getTime() + 864e5 * s);
                                r = new Date(a.getTime() + 864e5 * s * 6) } else if (-1 != t.indexOf("month")) {
                                var s = -1 != t.indexOf("prev,") ? -1 : 1;
                                r = 1 == s ? z(a) : N(a), r.setDate(1), a = z(r), a.setDate(1), a = new Date(a.getTime() - 864e5) } else if (-1 != t.indexOf("year")) {
                                var s = -1 != t.indexOf("prev,") ? -1 : 1;
                                r = new Date, r.setFullYear(a.getFullYear() + s), r.setMonth(0), r.setDate(1), a.setFullYear(a.getFullYear() + s), a.setMonth(11), a.setDate(31) } else if ("custom" == t) {
                                var d = e(this).html();
                                if (n.customShortcuts && n.customShortcuts.length > 0)
                                    for (var u = 0; u < n.customShortcuts.length; u++) {
                                        var l = n.customShortcuts[u];
                                        if (l.name == d) {
                                            var c = [];
                                            c = l.dates.call(), c && 2 == c.length && (r = c[0], a = c[1]), c && 1 == c.length && (movetodate = c[0], E(movetodate, "month1"), E(z(movetodate), "month2"), P());
                                            break } } }
                            r && a && (x(r, a), w()) }), te.find(".time1 input[type=range]").bind("change mousemove", function(t) {
                            var n = t.target,
                                a = "hour" == n.name ? e(n).val().replace(/^(\d{1})$/, "0$1") : void 0,
                                r = "minute" == n.name ? e(n).val().replace(/^(\d{1})$/, "0$1") : void 0;
                            m("time1", a, r) }), te.find(".time2 input[type=range]").bind("change mousemove", function(t) {
                            var n = t.target,
                                a = "hour" == n.name ? e(n).val().replace(/^(\d{1})$/, "0$1") : void 0,
                                r = "minute" == n.name ? e(n).val().replace(/^(\d{1})$/, "0$1") : void 0;
                            m("time2", a, r) }) }

                    function i() {
                        if (!n.inline) {
                            var t = e(ie).offset();
                            if ("relative" == e(n.container).css("position")) {
                                var a = e(n.container).offset();
                                te.css({ top: t.top - a.top + e(ie).outerHeight() + 4, left: t.left - a.left }) } else t.left < 460 ? te.css({ top: t.top + e(ie).outerHeight() + parseInt(e("body").css("border-top") || 0, 10), left: t.left }) : te.css({ top: t.top + e(ie).outerHeight() + parseInt(e("body").css("border-top") || 0, 10), left: t.left + e(ie).width() - te.width() - 16 }) } }

                    function o() {
                        return te }

                    function d(t) { i(), u(), te.slideDown(t, function() { e(ie).trigger("datepicker-opened", { relatedTarget: te }) }), e(ie).trigger("datepicker-open", { relatedTarget: te }), P(), l() }

                    function u() {
                        var e = n.getValue.call(se),
                            a = e ? e.split(n.separator) : "";
                        if (a && (1 == a.length && n.singleDate || a.length >= 2)) {
                            var r = n.format;
                            r.match(/Do/) && (r = r.replace(/Do/, "D"), a[0] = a[0].replace(/(\d+)(th|nd|st)/, "$1"), a.length >= 2 && (a[1] = a[1].replace(/(\d+)(th|nd|st)/, "$1"))), re = !1, a.length >= 2 ? x(t(a[0], r, t.locale(n.language)).toDate(), t(a[1], r, t.locale(n.language)).toDate()) : 1 == a.length && n.singleDate && S(t(a[0], r, t.locale(n.language)).toDate()), re = !0 } }

                    function l() {
                        var e = te.find(".gap").css("margin-left");
                        e && (e = parseInt(e));
                        var t = te.find(".month1").width(),
                            n = te.find(".gap").width() + (e ? 2 * e : 0),
                            a = te.find(".month2").width();
                        te.find(".month-wrapper").width(t + n + a) }

                    function c(e, n) { te.find("." + e + " input[type=range].hour-range").val(t(n).hours()), te.find("." + e + " input[type=range].minute-range").val(t(n).minutes()), m(e, t(n).format("HH"), t(n).format("mm")) }

                    function f(e, a) { n[e] = parseInt(t(parseInt(a)).startOf("day").add(t(n[e + "Time"]).format("HH"), "h").add(t(n[e + "Time"]).format("mm"), "m").valueOf()) }

                    function h() { c("time1", n.start), c("time2", n.end) }

                    function m(e, a, r) {
                        function i(e, t) {
                            var i = t.format("HH"),
                                s = t.format("mm");
                            n[e] = t.startOf("day").add(a || i, "h").add(r || s, "m").valueOf() }
                        switch (a && te.find("." + e + " .hour-val").text(a), r && te.find("." + e + " .minute-val").text(r), e) {
                            case "time1":
                                n.start && i("start", t(n.start)), i("startTime", t(n.startTime || t().valueOf()));
                                break;
                            case "time2":
                                n.end && i("end", t(n.end)), i("endTime", t(n.endTime || t().valueOf())) }
                        w(), T(), j() }

                    function _() { n.start = !1, n.end = !1, te.find(".day.checked").removeClass("checked"), te.find(".day.last-date-selected").removeClass("last-date-selected"), te.find(".day.first-date-selected").removeClass("first-date-selected"), n.setValue.call(se, ""), w(), T(), j() }

                    function p(e) {
                        var a = e;
                        return "week-range" === n.batchMode ? a = "monday" === n.startOfWeek ? t(parseInt(e)).startOf("isoweek").valueOf() : t(parseInt(e)).startOf("week").valueOf() : "month-range" === n.batchMode && (a = t(parseInt(e)).startOf("month").valueOf()), a }

                    function y(e) {
                        var a = e;
                        return "week-range" === n.batchMode ? a = "monday" === n.startOfWeek ? t(parseInt(e)).endOf("isoweek").valueOf() : t(parseInt(e)).endOf("week").valueOf() : "month" === n.batchMode && (a = t(parseInt(e)).endOf("month").valueOf()), a }

                    function g(a) {
                        if (!a.hasClass("invalid")) {
                            var r = a.attr("time");
                            if (a.addClass("checked"), n.singleDate ? (n.start = r, n.end = !1) : "week" === n.batchMode ? "monday" === n.startOfWeek ? (n.start = t(parseInt(r)).startOf("isoweek").valueOf(), n.end = t(parseInt(r)).endOf("isoweek").valueOf()) : (n.end = t(parseInt(r)).endOf("week").valueOf(), n.start = t(parseInt(r)).startOf("week").valueOf()) : "workweek" === n.batchMode ? (n.start = t(parseInt(r)).day(1).valueOf(), n.end = t(parseInt(r)).day(5).valueOf()) : "weekend" === n.batchMode ? (n.start = t(parseInt(r)).day(6).valueOf(), n.end = t(parseInt(r)).day(7).valueOf()) : "month" === n.batchMode ? (n.start = t(parseInt(r)).startOf("month").valueOf(), n.end = t(parseInt(r)).endOf("month").valueOf()) : n.start && n.end || !n.start && !n.end ? (n.start = p(r), n.end = !1) : n.start && (n.end = y(r), n.time.enabled && f("end", n.end)), n.time.enabled && (n.start && f("start", n.start), n.end && f("end", n.end)), !n.singleDate && n.start && n.end && n.start > n.end) {
                                var i = n.end;
                                n.end = y(n.start), n.start = p(i), n.time.enabled && n.swapTime && h() }
                            n.start = parseInt(n.start), n.end = parseInt(n.end), D(), n.start && !n.end && (e(ie).trigger("datepicker-first-date-selected", { date1: new Date(n.start) }), Y(a)), L(r), w(), T(), j(), k() } }

                    function v(e) {
                        var a = parseInt(e.attr("data-start-time"), 10);
                        if (n.startWeek) { te.find(".week-number-selected").removeClass("week-number-selected");
                            var r = new Date(a < n.startWeek ? a : n.startWeek),
                                i = new Date(a < n.startWeek ? n.startWeek : a);
                            n.startWeek = !1, n.start = t(r).day("monday" == n.startOfWeek ? 1 : 0).toDate(), n.end = t(i).day("monday" == n.startOfWeek ? 7 : 6).toDate() } else { n.startWeek = a, e.addClass("week-number-selected");
                            var r = new Date(a);
                            n.start = t(r).day("monday" == n.startOfWeek ? 1 : 0).toDate(), n.end = t(r).day("monday" == n.startOfWeek ? 7 : 6).toDate() }
                        L(), w(), T(), j(), k() }

                    function M(e) {
                        if (e = parseInt(e, 10), n.startDate && O(e, n.startDate) < 0) return !1;
                        if (n.endDate && O(e, n.endDate) > 0) return !1;
                        if (n.start && !n.end && !n.singleDate) {
                            if (n.maxDays > 0 && b(e, n.start) > n.maxDays) return !1;
                            if (n.minDays > 0 && b(e, n.start) < n.minDays) return !1;
                            if (n.selectForward && e < n.start) return !1;
                            if (n.selectBackward && e > n.start) return !1;
                            if (n.beforeShowDay && "function" == typeof n.beforeShowDay) {
                                for (var t = !0, a = e; b(a, n.start) > 1;) {
                                    var r = n.beforeShowDay(new Date(a));
                                    if (!r[0]) { t = !1;
                                        break }
                                    a > n.start && (a -= 864e5), a < n.start && (a += 864e5) }
                                if (!t) return !1 } }
                        return !0 }

                    function L() {
                        return te.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), n.start && !n.end && te.find(".day.toMonth.valid").each(function() {
                            var t = parseInt(e(this).attr("time"), 10);
                            M(t) ? e(this).addClass("valid tmp").removeClass("invalid") : e(this).addClass("invalid tmp").removeClass("valid") }), !0 }

                    function Y(t) {
                        var a = parseInt(t.attr("time")),
                            r = "";
                        if (t.hasClass("has-tooltip") && t.attr("data-tooltip")) r = '<span style="white-space:nowrap">' + t.attr("data-tooltip") + "</span>";
                        else if (!t.hasClass("invalid"))
                            if (n.singleDate) te.find(".day.hovering").removeClass("hovering"), t.addClass("hovering");
                            else if (te.find(".day").each(function() {
                                var t = parseInt(e(this).attr("time"));
                                n.start, n.end;
                                t == a ? e(this).addClass("hovering") : e(this).removeClass("hovering"), n.start && !n.end && (n.start < t && a >= t || n.start > t && t >= a) ? e(this).addClass("hovering") : e(this).removeClass("hovering") }), n.start && !n.end) {
                            var i = b(a, n.start);
                            n.hoveringTooltip && ("function" == typeof n.hoveringTooltip ? r = n.hoveringTooltip(i, n.start, a) : n.hoveringTooltip === !0 && i > 1 && (r = i + " " + ee("days"))) }
                        if (r) {
                            var s = t.offset(),
                                o = te.offset(),
                                d = s.left - o.left,
                                u = s.top - o.top;
                            d += t.width() / 2;
                            var l = te.find(".date-range-length-tip"),
                                c = l.css({ visibility: "hidden", display: "none" }).html(r).width(),
                                f = l.height();
                            d -= c / 2, u -= f, setTimeout(function() { l.css({ left: d, top: u, display: "block", visibility: "visible" }) }, 10) } else te.find(".date-range-length-tip").hide() }

                    function D() { te.find(".day.hovering").removeClass("hovering"), te.find(".date-range-length-tip").hide() }

                    function k() { n.singleDate === !0 ? re && n.start && n.autoClose && H() : re && n.start && n.end && n.autoClose && H() }

                    function w() {
                        var e = Math.ceil((n.end - n.start) / 864e5) + 1;
                        n.singleDate ? n.start && !n.end ? te.find(".drp_top-bar").removeClass("error").addClass("normal") : te.find(".drp_top-bar").removeClass("error").removeClass("normal") : n.maxDays && e > n.maxDays ? (n.start = !1, n.end = !1, te.find(".day").removeClass("checked"), te.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ee("less-than").replace("%d", n.maxDays))) : n.minDays && e < n.minDays ? (n.start = !1, n.end = !1, te.find(".day").removeClass("checked"), te.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ee("more-than").replace("%d", n.minDays))) : n.start || n.end ? te.find(".drp_top-bar").removeClass("error").addClass("normal") : te.find(".drp_top-bar").removeClass("error").removeClass("normal"), n.singleDate && n.start && !n.end || !n.singleDate && n.start && n.end ? te.find(".apply-btn").removeClass("disabled") : te.find(".apply-btn").addClass("disabled"), n.batchMode && (n.start && n.startDate && O(n.start, n.startDate) < 0 || n.end && n.endDate && O(n.end, n.endDate) > 0) && (n.start = !1, n.end = !1, te.find(".day").removeClass("checked")) }

                    function T(t, a) {
                        if (te.find(".start-day").html("..."), te.find(".end-day").html("..."), te.find(".selected-days").hide(), n.start && te.find(".start-day").html(A(new Date(parseInt(n.start)))), n.end && te.find(".end-day").html(A(new Date(parseInt(n.end)))), n.start && n.singleDate) { te.find(".apply-btn").removeClass("disabled");
                            var r = A(new Date(n.start));
                            n.setValue.call(se, r, A(new Date(n.start)), A(new Date(n.end))), re && !a && e(ie).trigger("datepicker-change", { value: r, date1: new Date(n.start) }) } else if (n.start && n.end) { te.find(".selected-days").show().find(".selected-days-num").html(b(n.end, n.start)), te.find(".apply-btn").removeClass("disabled");
                            var r = A(new Date(n.start)) + n.separator + A(new Date(n.end));
                            n.setValue.call(se, r, A(new Date(n.start)), A(new Date(n.end))), re && !a && e(ie).trigger("datepicker-change", { value: r, date1: new Date(n.start), date2: new Date(n.end) }) } else t ? te.find(".apply-btn").removeClass("disabled") : te.find(".apply-btn").addClass("disabled") }

                    function b(e, t) {
                        return Math.abs(G(e) - G(t)) + 1 }

                    function x(e, t, a) {
                        if (e.getTime() > t.getTime()) {
                            var r = t;
                            t = e, e = r, r = null }
                        var i = !0;
                        return n.startDate && O(e, n.startDate) < 0 && (i = !1), n.endDate && O(t, n.endDate) > 0 && (i = !1), i ? (n.start = e.getTime(), n.end = t.getTime(), n.time.enabled && (c("time1", e), c("time2", t)), (n.stickyMonths || O(e, t) > 0 && 0 == W(e, t)) && (n.lookBehind ? e = N(t) : t = z(e)), n.stickyMonths && W(t, n.endDate) > 0 && (e = N(e), t = N(t)), n.stickyMonths || 0 == W(e, t) && (n.lookBehind ? e = N(t) : t = z(e)), E(e, "month1"), E(t, "month2"), P(), w(), T(!1, a), void k()) : (E(n.startDate, "month1"), E(z(n.startDate), "month2"), void P()) }

                    function S(e) {
                        var t = !0;
                        return n.startDate && O(e, n.startDate) < 0 && (t = !1), n.endDate && O(e, n.endDate) > 0 && (t = !1), t ? (n.start = e.getTime(), n.time.enabled && c("time1", e), E(e, "month1"), P(), T(), void k()) : void E(n.startDate, "month1") }

                    function j() {
                        (n.start || n.end) && (te.find(".day").each(function() {
                            var a = parseInt(e(this).attr("time")),
                                r = n.start,
                                i = n.end;
                            n.time.enabled && (a = t(a).startOf("day").valueOf(), r = t(r || t().valueOf()).startOf("day").valueOf(), i = t(i || t().valueOf()).startOf("day").valueOf()), n.start && n.end && i >= a && a >= r || n.start && !n.end && t(r).format("YYYY-MM-DD") == t(a).format("YYYY-MM-DD") ? e(this).addClass("checked") : e(this).removeClass("checked"), n.start && t(r).format("YYYY-MM-DD") == t(a).format("YYYY-MM-DD") ? e(this).addClass("first-date-selected") : e(this).removeClass("first-date-selected"), n.end && t(i).format("YYYY-MM-DD") == t(a).format("YYYY-MM-DD") ? e(this).addClass("last-date-selected") : e(this).removeClass("last-date-selected") }), te.find(".week-number").each(function() { e(this).attr("data-start-time") == n.startWeek && e(this).addClass("week-number-selected") })) }

                    function E(e, a) { e = t(e).toDate();
                        var r = C(e.getMonth());
                        te.find("." + a + " .month-name").html(r + " " + e.getFullYear()), te.find("." + a + " tbody").html(K(e)), n[a] = e, L() }

                    function F(e, t) { te.find("." + t).append(I()), c(t, e) }

                    function C(e) {
                        return ee("month-name")[e] }

                    function A(e) {
                        return t(e).format(n.format) }

                    function P() { j();
                        var e = parseInt(t(n.month1).format("YYYYMM")),
                            a = parseInt(t(n.month2).format("YYYYMM")),
                            r = Math.abs(e - a),
                            i = r > 1 && 89 != r;
                        i ? te.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : te.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
                        var s = te.find("table.month1").height(),
                            o = te.find("table.month2").height();
                        te.find(".gap").height(Math.max(s, o) + 10) }

                    function H() { n.alwaysOpen || (e(te).slideUp(n.duration, function() { e(ie).data("date-picker-opened", !1), e(ie).trigger("datepicker-closed", { relatedTarget: te }) }), e(ie).trigger("datepicker-close", { relatedTarget: te })) }

                    function W(e, n) {
                        var a = parseInt(t(e).format("YYYYMM")) - parseInt(t(n).format("YYYYMM"));
                        return a > 0 ? 1 : 0 == a ? 0 : -1 }

                    function O(e, n) {
                        var a = parseInt(t(e).format("YYYYMMDD")) - parseInt(t(n).format("YYYYMMDD"));
                        return a > 0 ? 1 : 0 == a ? 0 : -1 }

                    function z(e) {
                        return t(e).add(1, "months").toDate() }

                    function N(e) {
                        return t(e).add(-1, "months").toDate() }

                    function I() {
                        return "<div>							<span>" + ee("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span>						</div>						<div class="hour">							<label>' + ee("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label>						</div>						<div class="minute">							<label>' + ee("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label>						</div>' }

                    function R() {
                        var t = '<div class="date-picker-wrapper';
                        n.extraClass && (t += " " + n.extraClass + " "), n.singleDate && (t += " single-date "), n.showShortcuts || (t += " no-shortcuts "), n.showTopbar || (t += " no-topbar "), n.customTopBar && (t += " custom-topbar "), t += '">', n.showTopbar && (t += '<div class="drp_top-bar">', n.customTopBar ? ("function" == typeof n.customTopBar && (n.customTopBar = n.customTopBar()), t += '<div class="custom-top">' + n.customTopBar + "</div>") : (t += '<div class="normal-top">								<span style="color:#333">' + ee("selected") + ' </span> <b class="start-day">...</b>', n.singleDate || (t += ' <span class="separator-day">' + n.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + ee("days") + ")</i>"), t += "</div>", t += '<div class="error-top">error</div>							<div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + B() + '" value="' + ee("apply") + '" />', t += "</div>");
                        var a = n.showWeekNumbers ? 6 : 5;
                        if (t += '<div class="month-wrapper"><table class="month1" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;"><span class="prev">&lt;</span></th><th colspan="' + a + '" class="month-name"></th><th style="width:27px;">' + (n.singleDate || !n.stickyMonths ? '<span class="next">&gt;</span>' : "") + '</th></tr><tr class="week-name">' + U() + "</thead><tbody></tbody></table>", J() && (t += '<div class="gap">' + $() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;">' + (n.stickyMonths ? "" : '<span class="prev">&lt;</span>') + '</th><th colspan="' + a + '" class="month-name"></th><th style="width:27px;"><span class="next">&gt;</span></th></tr><tr class="week-name">' + U() + "</thead><tbody></tbody></table>"), t += '<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>', n.singleDate || (t += '<div class="time2"></div>'), t += '</div><div style="clear:both;height:0;font-size:0;"></div></div>', t += '<div class="footer">', n.showShortcuts) { t += '<div class="shortcuts"><b>' + ee("shortcuts") + "</b>";
                            var r = n.shortcuts;
                            if (r) {
                                if (r["prev-days"] && r["prev-days"].length > 0) { t += '&nbsp;<span class="prev-days">' + ee("past");
                                    for (var i = 0; i < r["prev-days"].length; i++) {
                                        var s = r["prev-days"][i];
                                        s += ee(r["prev-days"][i] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,-' + r["prev-days"][i] + '">' + s + "</a>" }
                                    t += "</span>" }
                                if (r["next-days"] && r["next-days"].length > 0) { t += '&nbsp;<span class="next-days">' + ee("following");
                                    for (var i = 0; i < r["next-days"].length; i++) {
                                        var s = r["next-days"][i];
                                        s += ee(r["next-days"][i] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,' + r["next-days"][i] + '">' + s + "</a>" }
                                    t += "</span>" }
                                if (r.prev && r.prev.length > 0) { t += '&nbsp;<span class="prev-buttons">' + ee("previous");
                                    for (var i = 0; i < r.prev.length; i++) {
                                        var s = ee("prev-" + r.prev[i]);
                                        t += ' <a href="javascript:;" shortcut="prev,' + r.prev[i] + '">' + s + "</a>" }
                                    t += "</span>" }
                                if (r.next && r.next.length > 0) { t += '&nbsp;<span class="next-buttons">' + ee("next");
                                    for (var i = 0; i < r.next.length; i++) {
                                        var s = ee("next-" + r.next[i]);
                                        t += ' <a href="javascript:;" shortcut="next,' + r.next[i] + '">' + s + "</a>" }
                                    t += "</span>" } }
                            if (n.customShortcuts)
                                for (var i = 0; i < n.customShortcuts.length; i++) {
                                    var o = n.customShortcuts[i];
                                    t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + o.name + "</a></span>" }
                            t += "</div>" }
                        if (n.showCustomValues && (t += '<div class="customValues"><b>' + (n.customValueLabel || ee("custom-values")) + "</b>", n.customValues))
                            for (var i = 0; i < n.customValues.length; i++) {
                                var d = n.customValues[i];
                                t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + d.value + '">' + d.name + "</a></span>" }
                        return t += "</div></div>", e(t) }

                    function B() {
                        var e = "";
                        return n.autoClose === !0 && (e += " hide"), "" !== n.applyBtnClass && (e += " " + n.applyBtnClass), e }

                    function U() {
                        var e = n.showWeekNumbers ? "<th>" + ee("week-number") + "</th>" : "";
                        return "monday" == n.startOfWeek ? e + "<th>" + ee("week-1") + "</th>						<th>" + ee("week-2") + "</th>						<th>" + ee("week-3") + "</th>						<th>" + ee("week-4") + "</th>						<th>" + ee("week-5") + "</th>						<th>" + ee("week-6") + "</th>						<th>" + ee("week-7") + "</th>" : e + "<th>" + ee("week-7") + "</th>						<th>" + ee("week-1") + "</th>						<th>" + ee("week-2") + "</th>						<th>" + ee("week-3") + "</th>						<th>" + ee("week-4") + "</th>						<th>" + ee("week-5") + "</th>						<th>" + ee("week-6") + "</th>" }

                    function q(e) {
                        var e = t(e);
                        return n.startDate && e.endOf("month").isBefore(n.startDate) ? !0 : n.endDate && e.startOf("month").isAfter(n.endDate) ? !0 : !1 }

                    function $() {
                        for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; 20 > t; t++) e.push('<div class="gap-line">						<div class="gap-1"></div>						<div class="gap-2"></div>						<div class="gap-3"></div>					</div>');
                        return e.push("</div>"), e.join("") }

                    function J() {
                        return !n.singleDate && !n.singleMonth }

                    function V(e, t, n) {
                        var a = s.extend(!0, {}, e);
                        s.each(t, function(e, t) {
                            var r = t(n);
                            for (var i in r) a.hasOwnProperty(i) ? a[i] += r[i] : a[i] = r[i] });
                        var r = "";
                        for (var i in a) a.hasOwnProperty(i) && (r += i + '="' + a[i] + '" ');
                        return r }

                    function G(e) {
                        return Math.floor(X(e) / 864e5) }

                    function X(e) {
                        return t.isMoment(e) && (e = e.toDate().getTime()), "object" == typeof e && e.getTime && (e = e.getTime()), "string" != typeof e || e.match(/\d{13}/) || (e = t(e, n.format).toDate().getTime()), e = parseInt(e, 10) - 60 * (new Date).getTimezoneOffset() * 1e3 }

                    function K(e) {
                        var a = [];
                        e.setDate(1);
                        var r = (new Date(e.getTime() - 864e5), new Date),
                            i = e.getDay();
                        if (0 == i && "monday" == n.startOfWeek && (i = 7), i > 0)
                            for (var s = i; s > 0; s--) {
                                var o = new Date(e.getTime() - 864e5 * s),
                                    d = M(o.getTime());
                                n.startDate && O(o, n.startDate) < 0 && (d = !1), n.endDate && O(o, n.endDate) > 0 && (d = !1), a.push({ date: o, type: "lastMonth", day: o.getDate(), time: o.getTime(), valid: d }) }
                        for (var u = e.getMonth(), s = 0; 40 > s; s++) {
                            var l = t(e).add(s, "days").toDate(),
                                d = M(l.getTime());
                            n.startDate && O(l, n.startDate) < 0 && (d = !1), n.endDate && O(l, n.endDate) > 0 && (d = !1), a.push({ date: l, type: l.getMonth() == u ? "toMonth" : "nextMonth", day: l.getDate(), time: l.getTime(), valid: d }) }
                        for (var c = [], f = 0; 6 > f && "nextMonth" != a[7 * f].type; f++) { c.push("<tr>");
                            for (var o = 0; 7 > o; o++) {
                                var h = "monday" == n.startOfWeek ? o + 1 : o,
                                    l = a[7 * f + h],
                                    m = t(l.time).format("L") == t(r).format("L");
                                if (l.extraClass = "", l.tooltip = "", l.valid && n.beforeShowDay && "function" == typeof n.beforeShowDay) {
                                    var _ = n.beforeShowDay(t(l.time).toDate());
                                    l.valid = _[0], l.extraClass = _[1] || "", l.tooltip = _[2] || "", "" != l.tooltip && (l.extraClass += " has-tooltip ") }
                                var p = { time: l.time, "data-tooltip": l.tooltip, "class": "day " + l.type + " " + l.extraClass + " " + (l.valid ? "valid" : "invalid") + " " + (m ? "real-today" : "") };
                                0 == o && n.showWeekNumbers && c.push('<td><div class="week-number" data-start-time="' + l.time + '">' + n.getWeekNumber(l.date) + "</div></td>"), c.push("<td " + V({}, n.dayTdAttrs, l) + "><div " + V(p, n.dayDivAttrs, l) + ">" + Z(l.time, l.day) + "</div></td>") }
                            c.push("</tr>") }
                        return c.join("") }

                    function Z(e, t) {
                        return n.showDateFilter && "function" == typeof n.showDateFilter ? n.showDateFilter(e, t) : t }

                    function Q() {
                        if ("auto" == n.language) {
                            var t = navigator.language ? navigator.language : navigator.browserLanguage;
                            if (!t) return e.dateRangePickerLanguages["default"];
                            var t = t.toLowerCase();
                            for (var a in e.dateRangePickerLanguages)
                                if (-1 != t.indexOf(a)) return e.dateRangePickerLanguages[a];
                            return e.dateRangePickerLanguages["default"] }
                        return n.language && n.language in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[n.language] : e.dateRangePickerLanguages["default"] }

                    function ee(t) {
                        var n = t.toLowerCase(),
                            a = t in ae ? ae[t] : n in ae ? ae[n] : null,
                            r = e.dateRangePickerLanguages["default"];
                        return null == a && (a = t in r ? r[t] : n in r ? r[n] : ""), a }
                    n || (n = {}), n = e.extend(!0, { autoClose: !1, format: "YYYY-MM-DD", separator: " to ", language: "auto", startOfWeek: "sunday", getValue: function() {
                            return e(this).val() }, setValue: function(t) { e(this).attr("readonly") || e(this).is(":disabled") || t == e(this).val() || e(this).val(t) }, startDate: !1, endDate: !1, time: { enabled: !1 }, minDays: 0, maxDays: 0, showShortcuts: !1, shortcuts: {}, customShortcuts: [], inline: !1, container: "body", alwaysOpen: !1, singleDate: !1, lookBehind: !1, batchMode: !1, duration: 200, stickyMonths: !1, dayDivAttrs: [], dayTdAttrs: [], selectForward: !1, selectBackward: !1, applyBtnClass: "", singleMonth: "auto", hoveringTooltip: function(e, t, n) {
                            return e > 1 ? e + " " + ee("days") : "" }, showTopbar: !0, swapTime: !1, showWeekNumbers: !1, getWeekNumber: function(e) {
                            return t(e).format("w") } }, n), n.start = !1, n.end = !1, n.startWeek = !1, n.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, n.isTouchDevice && (n.hoveringTooltip = !1), "auto" == n.singleMonth && (n.singleMonth = e(window).width() < 480), n.singleMonth && (n.stickyMonths = !1), n.singleDate && (n.singleMonth = !0), n.showTopbar || (n.autoClose = !0), n.startDate && "string" == typeof n.startDate && (n.startDate = t(n.startDate, n.format).toDate()), n.endDate && "string" == typeof n.endDate && (n.endDate = t(n.endDate, n.format).toDate());
                    var te, ne, ae = Q(),
                        re = !1,
                        ie = this,
                        se = e(ie).get(0);
                    return e(this).unbind(".datepicker").bind("click.datepicker", function(e) {
                        var t = te.is(":visible");
                        t || d(n.duration) }).bind("change.datepicker", function(e) { u() }).bind("keyup.datepicker", function() {
                        try { clearTimeout(ne) } catch (e) {}
                        ne = setTimeout(function() { u() }, 2e3) }), r.call(this), n.alwaysOpen && d(0), e(this).data("dateRangePicker", { setDateRange: function(e, a, r) { "string" == typeof e && "string" == typeof a && (e = t(e, n.format).toDate(), a = t(a, n.format).toDate()), x(e, a, r) }, clear: _, close: H, open: d, getDatePicker: o, destroy: function() { e(ie).unbind(".datepicker"), e(ie).data("dateRangePicker", ""), e(ie).data("date-picker-opened", null), te.remove(), e(window).unbind("resize.datepicker", i), e(document).unbind("click.datepicker", H) } }), e(window).bind("resize.datepicker", i), this }
            })
        }).call(t, n(1))
    }])
});