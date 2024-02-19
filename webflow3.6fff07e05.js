/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var j_ = Object.create;
    var rn = Object.defineProperty;
    var z_ = Object.getOwnPropertyDescriptor;
    var K_ = Object.getOwnPropertyNames;
    var Y_ = Object.getPrototypeOf,
        $_ = Object.prototype.hasOwnProperty;
    var de = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Le = (e, t) => {
            for (var r in t) rn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ss = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of K_(t)) !$_.call(e, i) && i !== r && rn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = z_(t, i)) || n.enumerable
                });
            return e
        };
    var ae = (e, t, r) => (r = e != null ? j_(Y_(e)) : {}, Ss(t || !e || !e.__esModule ? rn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        Je = e => Ss(rn({}, "__esModule", {
            value: !0
        }), e);
    var Rs = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = u.getPropertyValue("position"),
                        p = u.getPropertyValue("overflow"),
                        d = u.getPropertyValue("display");
                    (!f || f === "static") && (a.style.position = "relative"), p !== "hidden" && (a.style.overflow = "hidden"), (!d || d === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let p in f) u.getPropertyValue(p) !== f[p] && (a.style[p] = f[p])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let f = a[u].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else f === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Cs = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Ri = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, m) {
                var T = new V.Bare;
                return T.init(l, m)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(m) {
                    return "-" + m.toLowerCase()
                })
            }

            function n(l) {
                var m = parseInt(l.slice(1), 16),
                    T = m >> 16 & 255,
                    A = m >> 8 & 255,
                    b = 255 & m;
                return [T, A, b]
            }

            function i(l, m, T) {
                return "#" + (1 << 24 | l << 16 | m << 8 | T).toString(16).slice(1)
            }

            function o() {}

            function s(l, m) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof m + "] " + m)
            }

            function a(l, m, T) {
                f("Units do not match [" + l + "]: " + m + ", " + T)
            }

            function u(l, m, T) {
                if (m !== void 0 && (T = m), l === void 0) return T;
                var A = T;
                return Si.test(l) || !en.test(l) ? A = parseInt(l, 10) : en.test(l) && (A = 1e3 * parseFloat(l)), 0 > A && (A = 0), A === A ? A : T
            }

            function f(l) {
                se.debug && window && window.console.warn(l)
            }

            function p(l) {
                for (var m = -1, T = l ? l.length : 0, A = []; ++m < T;) {
                    var b = l[m];
                    b && A.push(b)
                }
                return A
            }
            var d = function(l, m, T) {
                    function A(te) {
                        return typeof te == "object"
                    }

                    function b(te) {
                        return typeof te == "function"
                    }

                    function x() {}

                    function Y(te, le) {
                        function H() {
                            var we = new re;
                            return b(we.init) && we.init.apply(we, arguments), we
                        }

                        function re() {}
                        le === T && (le = te, te = Object), H.Bare = re;
                        var ie, he = x[l] = te[l],
                            Ze = re[l] = H[l] = new x;
                        return Ze.constructor = H, H.mixin = function(we) {
                            return re[l] = H[l] = Y(H, we)[l], H
                        }, H.open = function(we) {
                            if (ie = {}, b(we) ? ie = we.call(H, Ze, he, H, te) : A(we) && (ie = we), A(ie))
                                for (var hr in ie) m.call(ie, hr) && (Ze[hr] = ie[hr]);
                            return b(Ze.init) || (Ze.init = te), H
                        }, H.open(le)
                    }
                    return Y
                }("prototype", {}.hasOwnProperty),
                h = {
                    ease: ["ease", function(l, m, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return m + T * (-2.75 * x * b + 11 * b * b + -15.5 * x + 8 * b + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, m, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return m + T * (-1 * x * b + 3 * b * b + -3 * x + 2 * b)
                    }],
                    "ease-out": ["ease-out", function(l, m, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return m + T * (.3 * x * b + -1.6 * b * b + 2.2 * x + -1.8 * b + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, m, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return m + T * (2 * x * b + -5 * b * b + 2 * x + 2 * b)
                    }],
                    linear: ["linear", function(l, m, T, A) {
                        return T * l / A + m
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, m, T, A) {
                        return T * (l /= A) * l + m
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, m, T, A) {
                        return -T * (l /= A) * (l - 2) + m
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, m, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l + m : -T / 2 * (--l * (l - 2) - 1) + m
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, m, T, A) {
                        return T * (l /= A) * l * l + m
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, m, T, A) {
                        return T * ((l = l / A - 1) * l * l + 1) + m
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, m, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l + m : T / 2 * ((l -= 2) * l * l + 2) + m
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, m, T, A) {
                        return T * (l /= A) * l * l * l + m
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, m, T, A) {
                        return -T * ((l = l / A - 1) * l * l * l - 1) + m
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, m, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l * l + m : -T / 2 * ((l -= 2) * l * l * l - 2) + m
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, m, T, A) {
                        return T * (l /= A) * l * l * l * l + m
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, m, T, A) {
                        return T * ((l = l / A - 1) * l * l * l * l + 1) + m
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, m, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l * l * l + m : T / 2 * ((l -= 2) * l * l * l * l + 2) + m
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, m, T, A) {
                        return -T * Math.cos(l / A * (Math.PI / 2)) + T + m
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, m, T, A) {
                        return T * Math.sin(l / A * (Math.PI / 2)) + m
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, m, T, A) {
                        return -T / 2 * (Math.cos(Math.PI * l / A) - 1) + m
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, m, T, A) {
                        return l === 0 ? m : T * Math.pow(2, 10 * (l / A - 1)) + m
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, m, T, A) {
                        return l === A ? m + T : T * (-Math.pow(2, -10 * l / A) + 1) + m
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, m, T, A) {
                        return l === 0 ? m : l === A ? m + T : (l /= A / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + m : T / 2 * (-Math.pow(2, -10 * --l) + 2) + m
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, m, T, A) {
                        return -T * (Math.sqrt(1 - (l /= A) * l) - 1) + m
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, m, T, A) {
                        return T * Math.sqrt(1 - (l = l / A - 1) * l) + m
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, m, T, A) {
                        return (l /= A / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + m : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + m
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, m, T, A, b) {
                        return b === void 0 && (b = 1.70158), T * (l /= A) * l * ((b + 1) * l - b) + m
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, m, T, A, b) {
                        return b === void 0 && (b = 1.70158), T * ((l = l / A - 1) * l * ((b + 1) * l + b) + 1) + m
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, m, T, A, b) {
                        return b === void 0 && (b = 1.70158), (l /= A / 2) < 1 ? T / 2 * l * l * (((b *= 1.525) + 1) * l - b) + m : T / 2 * ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) + m
                    }]
                },
                E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                y = document,
                _ = window,
                q = "bkwld-tram",
                O = /[\-\.0-9]/g,
                S = /[A-Z]/,
                w = "number",
                L = /^(rgb|#)/,
                P = /(em|cm|mm|in|pt|pc|px)$/,
                N = /(em|cm|mm|in|pt|pc|px|%)$/,
                B = /(deg|rad|turn)$/,
                j = "unitless",
                z = /(all|none) 0s ease 0s/,
                Q = /^(width|height)$/,
                U = " ",
                I = y.createElement("a"),
                v = ["Webkit", "Moz", "O", "ms"],
                R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                M = function(l) {
                    if (l in I.style) return {
                        dom: l,
                        css: l
                    };
                    var m, T, A = "",
                        b = l.split("-");
                    for (m = 0; m < b.length; m++) A += b[m].charAt(0).toUpperCase() + b[m].slice(1);
                    for (m = 0; m < v.length; m++)
                        if (T = v[m] + A, T in I.style) return {
                            dom: T,
                            css: R[m] + l
                        }
                },
                G = t.support = {
                    bind: Function.prototype.bind,
                    transform: M("transform"),
                    transition: M("transition"),
                    backface: M("backface-visibility"),
                    timing: M("transition-timing-function")
                };
            if (G.transition) {
                var Z = G.timing.dom;
                if (I.style[Z] = h["ease-in-back"][0], !I.style[Z])
                    for (var J in E) h[J][0] = E[J]
            }
            var D = t.frame = function() {
                    var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return l && G.bind ? l.bind(_) : function(m) {
                        _.setTimeout(m, 16)
                    }
                }(),
                X = t.now = function() {
                    var l = _.performance,
                        m = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return m && G.bind ? m.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                K = d(function(l) {
                    function m(ee, oe) {
                        var ge = p(("" + ee).split(U)),
                            ue = ge[0];
                        oe = oe || {};
                        var Ae = vr[ue];
                        if (!Ae) return f("Unsupported property: " + ue);
                        if (!oe.weak || !this.props[ue]) {
                            var Ve = Ae[0],
                                Ce = this.props[ue];
                            return Ce || (Ce = this.props[ue] = new Ve.Bare), Ce.init(this.$el, ge, Ae, oe), Ce
                        }
                    }

                    function T(ee, oe, ge) {
                        if (ee) {
                            var ue = typeof ee;
                            if (oe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ue == "number" && oe) return this.timer = new ne({
                                duration: ee,
                                context: this,
                                complete: x
                            }), void(this.active = !0);
                            if (ue == "string" && oe) {
                                switch (ee) {
                                    case "hide":
                                        H.call(this);
                                        break;
                                    case "stop":
                                        Y.call(this);
                                        break;
                                    case "redraw":
                                        re.call(this);
                                        break;
                                    default:
                                        m.call(this, ee, ge && ge[1])
                                }
                                return x.call(this)
                            }
                            if (ue == "function") return void ee.call(this, this);
                            if (ue == "object") {
                                var Ae = 0;
                                Ze.call(this, ee, function(ye, B_) {
                                    ye.span > Ae && (Ae = ye.span), ye.stop(), ye.animate(B_)
                                }, function(ye) {
                                    "wait" in ye && (Ae = u(ye.wait, 0))
                                }), he.call(this), Ae > 0 && (this.timer = new ne({
                                    duration: Ae,
                                    context: this
                                }), this.active = !0, oe && (this.timer.complete = x));
                                var Ve = this,
                                    Ce = !1,
                                    tn = {};
                                D(function() {
                                    Ze.call(Ve, ee, function(ye) {
                                        ye.active && (Ce = !0, tn[ye.name] = ye.nextStyle)
                                    }), Ce && Ve.$el.css(tn)
                                })
                            }
                        }
                    }

                    function A(ee) {
                        ee = u(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new ne({
                            duration: ee,
                            context: this,
                            complete: x
                        }), this.active = !0)
                    }

                    function b(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = x)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function x() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            T.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function Y(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var oe;
                        typeof ee == "string" ? (oe = {}, oe[ee] = 1) : oe = typeof ee == "object" && ee != null ? ee : this.props, Ze.call(this, oe, we), he.call(this)
                    }

                    function te(ee) {
                        Y.call(this, ee), Ze.call(this, ee, hr, X_)
                    }

                    function le(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function H() {
                        Y.call(this), this.el.style.display = "none"
                    }

                    function re() {
                        this.el.offsetHeight
                    }

                    function ie() {
                        Y.call(this), e.removeData(this.el, q), this.$el = this.el = null
                    }

                    function he() {
                        var ee, oe, ge = [];
                        this.upstream && ge.push(this.upstream);
                        for (ee in this.props) oe = this.props[ee], oe.active && ge.push(oe.string);
                        ge = ge.join(","), this.style !== ge && (this.style = ge, this.el.style[G.transition.dom] = ge)
                    }

                    function Ze(ee, oe, ge) {
                        var ue, Ae, Ve, Ce, tn = oe !== we,
                            ye = {};
                        for (ue in ee) Ve = ee[ue], ue in Qe ? (ye.transform || (ye.transform = {}), ye.transform[ue] = Ve) : (S.test(ue) && (ue = r(ue)), ue in vr ? ye[ue] = Ve : (Ce || (Ce = {}), Ce[ue] = Ve));
                        for (ue in ye) {
                            if (Ve = ye[ue], Ae = this.props[ue], !Ae) {
                                if (!tn) continue;
                                Ae = m.call(this, ue)
                            }
                            oe.call(this, Ae, Ve)
                        }
                        ge && Ce && ge.call(this, Ce)
                    }

                    function we(ee) {
                        ee.stop()
                    }

                    function hr(ee, oe) {
                        ee.set(oe)
                    }

                    function X_(ee) {
                        this.$el.css(ee)
                    }

                    function Ue(ee, oe) {
                        l[ee] = function() {
                            return this.children ? W_.call(this, oe, arguments) : (this.el && oe.apply(this, arguments), this)
                        }
                    }

                    function W_(ee, oe) {
                        var ge, ue = this.children.length;
                        for (ge = 0; ue > ge; ge++) ee.apply(this.children[ge], oe);
                        return this
                    }
                    l.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                            var oe = $e(this.el, "transition");
                            oe && !z.test(oe) && (this.upstream = oe)
                        }
                        G.backface && se.hideBackface && Ge(this.el, G.backface.css, "hidden")
                    }, Ue("add", m), Ue("start", T), Ue("wait", A), Ue("then", b), Ue("next", x), Ue("stop", Y), Ue("set", te), Ue("show", le), Ue("hide", H), Ue("redraw", re), Ue("destroy", ie)
                }),
                V = d(K, function(l) {
                    function m(T, A) {
                        var b = e.data(T, q) || e.data(T, q, new K.Bare);
                        return b.el || b.init(T), A ? b.start(A) : b
                    }
                    l.init = function(T, A) {
                        var b = e(T);
                        if (!b.length) return this;
                        if (b.length === 1) return m(b[0], A);
                        var x = [];
                        return b.each(function(Y, te) {
                            x.push(m(te, A))
                        }), this.children = x, this
                    }
                }),
                F = d(function(l) {
                    function m() {
                        var x = this.get();
                        this.update("auto");
                        var Y = this.get();
                        return this.update(x), Y
                    }

                    function T(x, Y, te) {
                        return Y !== void 0 && (te = Y), x in h ? x : te
                    }

                    function A(x) {
                        var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                        return (Y ? i(Y[1], Y[2], Y[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var b = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(x, Y, te, le) {
                        this.$el = x, this.el = x[0];
                        var H = Y[0];
                        te[2] && (H = te[2]), gr[H] && (H = gr[H]), this.name = H, this.type = te[1], this.duration = u(Y[1], this.duration, b.duration), this.ease = T(Y[2], this.ease, b.ease), this.delay = u(Y[3], this.delay, b.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = le.unit || this.unit || se.defaultUnit, this.angle = le.angle || this.angle || se.defaultAngle, se.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + U + this.duration + "ms" + (this.ease != "ease" ? U + h[this.ease][0] : "") + (this.delay ? U + this.delay + "ms" : ""))
                    }, l.set = function(x) {
                        x = this.convert(x, this.type), this.update(x), this.redraw()
                    }, l.transition = function(x) {
                        this.active = !0, x = this.convert(x, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), x == "auto" && (x = m.call(this))), this.nextStyle = x
                    }, l.fallback = function(x) {
                        var Y = this.el.style[this.name] || this.convert(this.get(), this.type);
                        x = this.convert(x, this.type), this.auto && (Y == "auto" && (Y = this.convert(this.get(), this.type)), x == "auto" && (x = m.call(this))), this.tween = new C({
                            from: Y,
                            to: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return $e(this.el, this.name)
                    }, l.update = function(x) {
                        Ge(this.el, this.name, x)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Ge(this.el, this.name, this.get()));
                        var x = this.tween;
                        x && x.context && x.destroy()
                    }, l.convert = function(x, Y) {
                        if (x == "auto" && this.auto) return x;
                        var te, le = typeof x == "number",
                            H = typeof x == "string";
                        switch (Y) {
                            case w:
                                if (le) return x;
                                if (H && x.replace(O, "") === "") return +x;
                                te = "number(unitless)";
                                break;
                            case L:
                                if (H) {
                                    if (x === "" && this.original) return this.original;
                                    if (Y.test(x)) return x.charAt(0) == "#" && x.length == 7 ? x : A(x)
                                }
                                te = "hex or rgb string";
                                break;
                            case P:
                                if (le) return x + this.unit;
                                if (H && Y.test(x)) return x;
                                te = "number(px) or string(unit)";
                                break;
                            case N:
                                if (le) return x + this.unit;
                                if (H && Y.test(x)) return x;
                                te = "number(px) or string(unit or %)";
                                break;
                            case B:
                                if (le) return x + this.angle;
                                if (H && Y.test(x)) return x;
                                te = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (le || H && N.test(x)) return x;
                                te = "number(unitless) or string(unit or %)"
                        }
                        return s(te, x), x
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                g = d(F, function(l, m) {
                    l.init = function() {
                        m.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
                    }
                }),
                k = d(F, function(l, m) {
                    l.init = function() {
                        m.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(T) {
                        this.$el[this.name](T)
                    }
                }),
                W = d(F, function(l, m) {
                    function T(A, b) {
                        var x, Y, te, le, H;
                        for (x in A) le = Qe[x], te = le[0], Y = le[1] || x, H = this.convert(A[x], te), b.call(this, Y, H, te)
                    }
                    l.init = function() {
                        m.init.apply(this, arguments), this.current || (this.current = {}, Qe.perspective && se.perspective && (this.current.perspective = se.perspective, Ge(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(A) {
                        T.call(this, A, function(b, x) {
                            this.current[b] = x
                        }), Ge(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(A) {
                        var b = this.values(A);
                        this.tween = new Ee({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var x, Y = {};
                        for (x in this.current) Y[x] = x in b ? b[x] : this.current[x];
                        this.active = !0, this.nextStyle = this.style(Y)
                    }, l.fallback = function(A) {
                        var b = this.values(A);
                        this.tween = new Ee({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        Ge(this.el, this.name, this.style(this.current))
                    }, l.style = function(A) {
                        var b, x = "";
                        for (b in A) x += b + "(" + A[b] + ") ";
                        return x
                    }, l.values = function(A) {
                        var b, x = {};
                        return T.call(this, A, function(Y, te, le) {
                            x[Y] = te, this.current[Y] === void 0 && (b = 0, ~Y.indexOf("scale") && (b = 1), this.current[Y] = this.convert(b, le))
                        }), x
                    }
                }),
                C = d(function(l) {
                    function m(H) {
                        te.push(H) === 1 && D(T)
                    }

                    function T() {
                        var H, re, ie, he = te.length;
                        if (he)
                            for (D(T), re = X(), H = he; H--;) ie = te[H], ie && ie.render(re)
                    }

                    function A(H) {
                        var re, ie = e.inArray(H, te);
                        ie >= 0 && (re = te.slice(ie + 1), te.length = ie, re.length && (te = te.concat(re)))
                    }

                    function b(H) {
                        return Math.round(H * le) / le
                    }

                    function x(H, re, ie) {
                        return i(H[0] + ie * (re[0] - H[0]), H[1] + ie * (re[1] - H[1]), H[2] + ie * (re[2] - H[2]))
                    }
                    var Y = {
                        ease: h.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(H) {
                        this.duration = H.duration || 0, this.delay = H.delay || 0;
                        var re = H.ease || Y.ease;
                        h[re] && (re = h[re][1]), typeof re != "function" && (re = Y.ease), this.ease = re, this.update = H.update || o, this.complete = H.complete || o, this.context = H.context || this, this.name = H.name;
                        var ie = H.from,
                            he = H.to;
                        ie === void 0 && (ie = Y.from), he === void 0 && (he = Y.to), this.unit = H.unit || "", typeof ie == "number" && typeof he == "number" ? (this.begin = ie, this.change = he - ie) : this.format(he, ie), this.value = this.begin + this.unit, this.start = X(), H.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = X()), this.active = !0, m(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, A(this))
                    }, l.render = function(H) {
                        var re, ie = H - this.start;
                        if (this.delay) {
                            if (ie <= this.delay) return;
                            ie -= this.delay
                        }
                        if (ie < this.duration) {
                            var he = this.ease(ie, 0, 1, this.duration);
                            return re = this.startRGB ? x(this.startRGB, this.endRGB, he) : b(this.begin + he * this.change), this.value = re + this.unit, void this.update.call(this.context, this.value)
                        }
                        re = this.endHex || this.begin + this.change, this.value = re + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(H, re) {
                        if (re += "", H += "", H.charAt(0) == "#") return this.startRGB = n(re), this.endRGB = n(H), this.endHex = H, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ie = re.replace(O, ""),
                                he = H.replace(O, "");
                            ie !== he && a("tween", re, H), this.unit = ie
                        }
                        re = parseFloat(re), H = parseFloat(H), this.begin = this.value = re, this.change = H - re
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var te = [],
                        le = 1e3
                }),
                ne = d(C, function(l) {
                    l.init = function(m) {
                        this.duration = m.duration || 0, this.complete = m.complete || o, this.context = m.context, this.play()
                    }, l.render = function(m) {
                        var T = m - this.start;
                        T < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Ee = d(C, function(l, m) {
                    l.init = function(T) {
                        this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
                        var A, b;
                        for (A in T.values) b = T.values[A], this.current[A] !== b && this.tweens.push(new C({
                            name: A,
                            from: this.current[A],
                            to: b,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(T) {
                        var A, b, x = this.tweens.length,
                            Y = !1;
                        for (A = x; A--;) b = this.tweens[A], b.context && (b.render(T), this.current[b.name] = b.value, Y = !0);
                        return Y ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (m.destroy.call(this), this.tweens) {
                            var T, A = this.tweens.length;
                            for (T = A; T--;) this.tweens[T].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                se = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !G.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!G.transition) return se.fallback = !0;
                se.agentTests.push("(" + l + ")");
                var m = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = m.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new C(l)
            }, t.delay = function(l, m, T) {
                return new ne({
                    complete: m,
                    duration: l,
                    context: T
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var Ge = e.style,
                $e = e.css,
                gr = {
                    transform: G.transform && G.transform.css
                },
                vr = {
                    color: [g, L],
                    background: [g, L, "background-color"],
                    "outline-color": [g, L],
                    "border-color": [g, L],
                    "border-top-color": [g, L],
                    "border-right-color": [g, L],
                    "border-bottom-color": [g, L],
                    "border-left-color": [g, L],
                    "border-width": [F, P],
                    "border-top-width": [F, P],
                    "border-right-width": [F, P],
                    "border-bottom-width": [F, P],
                    "border-left-width": [F, P],
                    "border-spacing": [F, P],
                    "letter-spacing": [F, P],
                    margin: [F, P],
                    "margin-top": [F, P],
                    "margin-right": [F, P],
                    "margin-bottom": [F, P],
                    "margin-left": [F, P],
                    padding: [F, P],
                    "padding-top": [F, P],
                    "padding-right": [F, P],
                    "padding-bottom": [F, P],
                    "padding-left": [F, P],
                    "outline-width": [F, P],
                    opacity: [F, w],
                    top: [F, N],
                    right: [F, N],
                    bottom: [F, N],
                    left: [F, N],
                    "font-size": [F, N],
                    "text-indent": [F, N],
                    "word-spacing": [F, N],
                    width: [F, N],
                    "min-width": [F, N],
                    "max-width": [F, N],
                    height: [F, N],
                    "min-height": [F, N],
                    "max-height": [F, N],
                    "line-height": [F, j],
                    "scroll-top": [k, w, "scrollTop"],
                    "scroll-left": [k, w, "scrollLeft"]
                },
                Qe = {};
            G.transform && (vr.transform = [W], Qe = {
                x: [N, "translateX"],
                y: [N, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }), G.transform && G.backface && (Qe.z = [N, "translateZ"], Qe.rotateZ = [B], Qe.scaleZ = [w], Qe.perspective = [P]);
            var Si = /ms/,
                en = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ns = c((kk, Ls) => {
        "use strict";
        var Q_ = window.$,
            Z_ = Ri() && Q_.tram;
        Ls.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                p = r.forEach,
                d = r.map,
                h = r.reduce,
                E = r.reduceRight,
                y = r.filter,
                _ = r.every,
                q = r.some,
                O = r.indexOf,
                S = r.lastIndexOf,
                w = Array.isArray,
                L = Object.keys,
                P = i.bind,
                N = e.each = e.forEach = function(v, R, M) {
                    if (v == null) return v;
                    if (p && v.forEach === p) v.forEach(R, M);
                    else if (v.length === +v.length) {
                        for (var G = 0, Z = v.length; G < Z; G++)
                            if (R.call(M, v[G], G, v) === t) return
                    } else
                        for (var J = e.keys(v), G = 0, Z = J.length; G < Z; G++)
                            if (R.call(M, v[J[G]], J[G], v) === t) return;
                    return v
                };
            e.map = e.collect = function(v, R, M) {
                var G = [];
                return v == null ? G : d && v.map === d ? v.map(R, M) : (N(v, function(Z, J, D) {
                    G.push(R.call(M, Z, J, D))
                }), G)
            }, e.find = e.detect = function(v, R, M) {
                var G;
                return B(v, function(Z, J, D) {
                    if (R.call(M, Z, J, D)) return G = Z, !0
                }), G
            }, e.filter = e.select = function(v, R, M) {
                var G = [];
                return v == null ? G : y && v.filter === y ? v.filter(R, M) : (N(v, function(Z, J, D) {
                    R.call(M, Z, J, D) && G.push(Z)
                }), G)
            };
            var B = e.some = e.any = function(v, R, M) {
                R || (R = e.identity);
                var G = !1;
                return v == null ? G : q && v.some === q ? v.some(R, M) : (N(v, function(Z, J, D) {
                    if (G || (G = R.call(M, Z, J, D))) return t
                }), !!G)
            };
            e.contains = e.include = function(v, R) {
                return v == null ? !1 : O && v.indexOf === O ? v.indexOf(R) != -1 : B(v, function(M) {
                    return M === R
                })
            }, e.delay = function(v, R) {
                var M = s.call(arguments, 2);
                return setTimeout(function() {
                    return v.apply(null, M)
                }, R)
            }, e.defer = function(v) {
                return e.delay.apply(e, [v, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(v) {
                var R, M, G;
                return function() {
                    R || (R = !0, M = arguments, G = this, Z_.frame(function() {
                        R = !1, v.apply(G, M)
                    }))
                }
            }, e.debounce = function(v, R, M) {
                var G, Z, J, D, X, K = function() {
                    var V = e.now() - D;
                    V < R ? G = setTimeout(K, R - V) : (G = null, M || (X = v.apply(J, Z), J = Z = null))
                };
                return function() {
                    J = this, Z = arguments, D = e.now();
                    var V = M && !G;
                    return G || (G = setTimeout(K, R)), V && (X = v.apply(J, Z), J = Z = null), X
                }
            }, e.defaults = function(v) {
                if (!e.isObject(v)) return v;
                for (var R = 1, M = arguments.length; R < M; R++) {
                    var G = arguments[R];
                    for (var Z in G) v[Z] === void 0 && (v[Z] = G[Z])
                }
                return v
            }, e.keys = function(v) {
                if (!e.isObject(v)) return [];
                if (L) return L(v);
                var R = [];
                for (var M in v) e.has(v, M) && R.push(M);
                return R
            }, e.has = function(v, R) {
                return f.call(v, R)
            }, e.isObject = function(v) {
                return v === Object(v)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                z = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Q = /\\|'|\r|\n|\u2028|\u2029/g,
                U = function(v) {
                    return "\\" + z[v]
                },
                I = /^\s*(\w|\$)+\s*$/;
            return e.template = function(v, R, M) {
                !R && M && (R = M), R = e.defaults({}, R, e.templateSettings);
                var G = RegExp([(R.escape || j).source, (R.interpolate || j).source, (R.evaluate || j).source].join("|") + "|$", "g"),
                    Z = 0,
                    J = "__p+='";
                v.replace(G, function(V, F, g, k, W) {
                    return J += v.slice(Z, W).replace(Q, U), Z = W + V.length, F ? J += `'+
((__t=(` + F + `))==null?'':_.escape(__t))+
'` : g ? J += `'+
((__t=(` + g + `))==null?'':__t)+
'` : k && (J += `';
` + k + `
__p+='`), V
                }), J += `';
`;
                var D = R.variable;
                if (D) {
                    if (!I.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else J = `with(obj||{}){
` + J + `}
`, D = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var X;
                try {
                    X = new Function(R.variable || "obj", "_", J)
                } catch (V) {
                    throw V.source = J, V
                }
                var K = function(V) {
                    return X.call(this, V, e)
                };
                return K.source = "function(" + D + `){
` + J + "}", K
            }, e
        }()
    });
    var Me = c((Hk, Vs) => {
        "use strict";
        var ce = {},
            Dt = {},
            Ft = [],
            Li = window.Webflow || [],
            vt = window.jQuery,
            He = vt(window),
            J_ = vt(document),
            et = vt.isFunction,
            ke = ce._ = Ns(),
            qs = ce.tram = Ri() && vt.tram,
            on = !1,
            Ni = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        ce.define = function(e, t, r) {
            Dt[e] && Ds(Dt[e]);
            var n = Dt[e] = t(vt, ke, r) || {};
            return Ms(n), n
        };
        ce.require = function(e) {
            return Dt[e]
        };

        function Ms(e) {
            ce.env() && (et(e.design) && He.on("__wf_design", e.design), et(e.preview) && He.on("__wf_preview", e.preview)), et(e.destroy) && He.on("__wf_destroy", e.destroy), e.ready && et(e.ready) && eb(e)
        }

        function eb(e) {
            if (on) {
                e.ready();
                return
            }
            ke.contains(Ft, e.ready) || Ft.push(e.ready)
        }

        function Ds(e) {
            et(e.design) && He.off("__wf_design", e.design), et(e.preview) && He.off("__wf_preview", e.preview), et(e.destroy) && He.off("__wf_destroy", e.destroy), e.ready && et(e.ready) && tb(e)
        }

        function tb(e) {
            Ft = ke.filter(Ft, function(t) {
                return t !== e.ready
            })
        }
        ce.push = function(e) {
            if (on) {
                et(e) && e();
                return
            }
            Li.push(e)
        };
        ce.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var nn = navigator.userAgent.toLowerCase(),
            Fs = ce.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            rb = ce.env.chrome = /chrome/.test(nn) && /Google/.test(navigator.vendor) && parseInt(nn.match(/chrome\/(\d+)\./)[1], 10),
            nb = ce.env.ios = /(ipod|iphone|ipad)/.test(nn);
        ce.env.safari = /safari/.test(nn) && !rb && !nb;
        var Ci;
        Fs && J_.on("touchstart mousedown", function(e) {
            Ci = e.target
        });
        ce.validClick = Fs ? function(e) {
            return e === Ci || vt.contains(e, Ci)
        } : function() {
            return !0
        };
        var Gs = "resize.webflow orientationchange.webflow load.webflow",
            ib = "scroll.webflow " + Gs;
        ce.resize = Pi(He, Gs);
        ce.scroll = Pi(He, ib);
        ce.redraw = Pi();

        function Pi(e, t) {
            var r = [],
                n = {};
            return n.up = ke.throttle(function(i) {
                ke.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ke.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ke.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ce.location = function(e) {
            window.location = e
        };
        ce.env() && (ce.location = function() {});
        ce.ready = function() {
            on = !0, Ni ? ob() : ke.each(Ft, Ps), ke.each(Li, Ps), ce.resize.up()
        };

        function Ps(e) {
            et(e) && e()
        }

        function ob() {
            Ni = !1, ke.each(Dt, Ms)
        }
        var Ot;
        ce.load = function(e) {
            Ot.then(e)
        };

        function Us() {
            Ot && (Ot.reject(), He.off("load", Ot.resolve)), Ot = new vt.Deferred, He.on("load", Ot.resolve)
        }
        ce.destroy = function(e) {
            e = e || {}, Ni = !0, He.triggerHandler("__wf_destroy"), e.domready != null && (on = e.domready), ke.each(Dt, Ds), ce.resize.off(), ce.scroll.off(), ce.redraw.off(), Ft = [], Li = [], Ot.state() === "pending" && Us()
        };
        vt(ce.ready);
        Us();
        Vs.exports = window.Webflow = ce
    });
    var Xs = c((Xk, Hs) => {
        "use strict";
        var ks = Me();
        ks.define("brand", Hs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var E = n.attr("data-wf-status"),
                    y = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && s.hostname !== y && (E = !0), E && !a && (f = f || d(), h(), setTimeout(h, 500), e(r).off(u, p).on(u, p))
            };

            function p() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }

          function d() {
    var E = e('<a class=""></a>').attr("href", ""),
        y = e("<img>").attr("src", "").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
        });
    return E.append(y), E[0];
}

            function h() {
                var E = i.children(o),
                    y = E.length && E.get(0) === f,
                    _ = ks.env("editor");
                if (y) {
                    _ && E.remove();
                    return
                }
                E.length && E.remove(), _ || i.append(f)
            }
            return t
        })
    });
    var Bs = c((Wk, Ws) => {
        "use strict";
        var qi = Me();
        qi.define("edit", Ws.exports = function(e, t, r) {
            if (r = r || {}, (qi.env("test") || qi.env("frame")) && !r.fixture && !ab()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, f = r.load || h,
                p = !1;
            try {
                p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            p ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(a, d).triggerHandler(a);

            function d() {
                u || /\?edit/.test(s.hash) && f()
            }

            function h() {
                u = !0, window.WebflowEditor = !0, i.off(a, d), S(function(L) {
                    e.ajax({
                        url: O("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(L)
                    })
                })
            }

            function E(L) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = L, y(q(P.bugReporterScriptPath), function() {
                        y(q(P.scriptPath), function() {
                            window.WebflowEditor(P)
                        })
                    })
                }
            }

            function y(L, P) {
                e.ajax({
                    type: "GET",
                    url: L,
                    dataType: "script",
                    cache: !0
                }).then(P, _)
            }

            function _(L, P, N) {
                throw console.error("Could not load editor script: " + P), N
            }

            function q(L) {
                return L.indexOf("//") >= 0 ? L : O("https://editor-api.webflow.com" + L)
            }

            function O(L) {
                return L.replace(/([^:])\/\//g, "$1/")
            }

            function S(L) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
                var N = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (w(P, N), L(!1)) : B.data === "WF_third_party_cookies_supported" && (w(P, N), L(!0))
                };
                P.onerror = function() {
                    w(P, N), L(!1)
                }, window.addEventListener("message", N, !1), window.document.body.appendChild(P)
            }

            function w(L, P) {
                window.removeEventListener("message", P, !1), L.remove()
            }
            return n
        });

        function ab() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var zs = c((Bk, js) => {
        "use strict";
        var sb = Me();
        sb.define("focus-visible", js.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList)
                }

                function u(w) {
                    var L = w.type,
                        P = w.tagName;
                    return !!(P === "INPUT" && s[L] && !w.readOnly || P === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }

                function f(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }

                function p(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }

                function d(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (a(r.activeElement) && f(r.activeElement), n = !0)
                }

                function h() {
                    n = !1
                }

                function E(w) {
                    a(w.target) && (n || u(w.target)) && f(w.target)
                }

                function y(w) {
                    a(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), p(w.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), q())
                }

                function q() {
                    document.addEventListener("mousemove", S), document.addEventListener("mousedown", S), document.addEventListener("mouseup", S), document.addEventListener("pointermove", S), document.addEventListener("pointerdown", S), document.addEventListener("pointerup", S), document.addEventListener("touchmove", S), document.addEventListener("touchstart", S), document.addEventListener("touchend", S)
                }

                function O() {
                    document.removeEventListener("mousemove", S), document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", S), document.removeEventListener("pointermove", S), document.removeEventListener("pointerdown", S), document.removeEventListener("pointerup", S), document.removeEventListener("touchmove", S), document.removeEventListener("touchstart", S), document.removeEventListener("touchend", S)
                }

                function S(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (n = !1, O())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", _, !0), q(), r.addEventListener("focus", E, !0), r.addEventListener("blur", y, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var $s = c((jk, Ys) => {
        "use strict";
        var Ks = Me();
        Ks.define("focus", Ys.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ks.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Js = c((zk, Zs) => {
        "use strict";
        var Mi = window.jQuery,
            tt = {},
            an = [],
            Qs = ".w-ix",
            sn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Mi(t).triggerHandler(tt.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Mi(t).triggerHandler(tt.types.OUTRO))
                }
            };
        tt.triggers = {};
        tt.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        tt.init = function() {
            for (var e = an.length, t = 0; t < e; t++) {
                var r = an[t];
                r[0](0, r[1])
            }
            an = [], Mi.extend(tt.triggers, sn)
        };
        tt.async = function() {
            for (var e in sn) {
                var t = sn[e];
                sn.hasOwnProperty(e) && (tt.triggers[e] = function(r, n) {
                    an.push([t, n])
                })
            }
        };
        tt.async();
        Zs.exports = tt
    });
    var cn = c((Kk, ru) => {
        "use strict";
        var Di = Js();

        function eu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var ub = window.jQuery,
            un = {},
            tu = ".w-ix",
            cb = {
                reset: function(e, t) {
                    Di.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Di.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Di.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE")
                }
            };
        un.triggers = {};
        un.types = {
            INTRO: "w-ix-intro" + tu,
            OUTRO: "w-ix-outro" + tu
        };
        ub.extend(un.triggers, cb);
        ru.exports = un
    });
    var nu = c((Yk, ut) => {
        function Fi(e) {
            return ut.exports = Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ut.exports.__esModule = !0, ut.exports.default = ut.exports, Fi(e)
        }
        ut.exports = Fi, ut.exports.__esModule = !0, ut.exports.default = ut.exports
    });
    var ln = c(($k, yr) => {
        var lb = nu().default;

        function iu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (iu = function(i) {
                return i ? r : t
            })(e)
        }

        function fb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || lb(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = iu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        yr.exports = fb, yr.exports.__esModule = !0, yr.exports.default = yr.exports
    });
    var ou = c((Qk, Er) => {
        function db(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Er.exports = db, Er.exports.__esModule = !0, Er.exports.default = Er.exports
    });
    var pe = c((Zk, au) => {
        var fn = function(e) {
            return e && e.Math == Math && e
        };
        au.exports = fn(typeof globalThis == "object" && globalThis) || fn(typeof window == "object" && window) || fn(typeof self == "object" && self) || fn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Gt = c((Jk, su) => {
        su.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var wt = c((eH, uu) => {
        var pb = Gt();
        uu.exports = !pb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var dn = c((tH, cu) => {
        var mr = Function.prototype.call;
        cu.exports = mr.bind ? mr.bind(mr) : function() {
            return mr.apply(mr, arguments)
        }
    });
    var pu = c(du => {
        "use strict";
        var lu = {}.propertyIsEnumerable,
            fu = Object.getOwnPropertyDescriptor,
            gb = fu && !lu.call({
                1: 2
            }, 1);
        du.f = gb ? function(t) {
            var r = fu(this, t);
            return !!r && r.enumerable
        } : lu
    });
    var Gi = c((nH, gu) => {
        gu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Xe = c((iH, hu) => {
        var vu = Function.prototype,
            Ui = vu.bind,
            Vi = vu.call,
            vb = Ui && Ui.bind(Vi);
        hu.exports = Ui ? function(e) {
            return e && vb(Vi, e)
        } : function(e) {
            return e && function() {
                return Vi.apply(e, arguments)
            }
        }
    });
    var mu = c((oH, Eu) => {
        var yu = Xe(),
            hb = yu({}.toString),
            yb = yu("".slice);
        Eu.exports = function(e) {
            return yb(hb(e), 8, -1)
        }
    });
    var bu = c((aH, _u) => {
        var Eb = pe(),
            mb = Xe(),
            _b = Gt(),
            bb = mu(),
            ki = Eb.Object,
            Tb = mb("".split);
        _u.exports = _b(function() {
            return !ki("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return bb(e) == "String" ? Tb(e, "") : ki(e)
        } : ki
    });
    var Hi = c((sH, Tu) => {
        var Ib = pe(),
            Ob = Ib.TypeError;
        Tu.exports = function(e) {
            if (e == null) throw Ob("Can't call method on " + e);
            return e
        }
    });
    var _r = c((uH, Iu) => {
        var wb = bu(),
            Ab = Hi();
        Iu.exports = function(e) {
            return wb(Ab(e))
        }
    });
    var rt = c((cH, Ou) => {
        Ou.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Ut = c((lH, wu) => {
        var xb = rt();
        wu.exports = function(e) {
            return typeof e == "object" ? e !== null : xb(e)
        }
    });
    var br = c((fH, Au) => {
        var Xi = pe(),
            Sb = rt(),
            Rb = function(e) {
                return Sb(e) ? e : void 0
            };
        Au.exports = function(e, t) {
            return arguments.length < 2 ? Rb(Xi[e]) : Xi[e] && Xi[e][t]
        }
    });
    var Su = c((dH, xu) => {
        var Cb = Xe();
        xu.exports = Cb({}.isPrototypeOf)
    });
    var Cu = c((pH, Ru) => {
        var Lb = br();
        Ru.exports = Lb("navigator", "userAgent") || ""
    });
    var Fu = c((gH, Du) => {
        var Mu = pe(),
            Wi = Cu(),
            Lu = Mu.process,
            Nu = Mu.Deno,
            Pu = Lu && Lu.versions || Nu && Nu.version,
            qu = Pu && Pu.v8,
            We, pn;
        qu && (We = qu.split("."), pn = We[0] > 0 && We[0] < 4 ? 1 : +(We[0] + We[1]));
        !pn && Wi && (We = Wi.match(/Edge\/(\d+)/), (!We || We[1] >= 74) && (We = Wi.match(/Chrome\/(\d+)/), We && (pn = +We[1])));
        Du.exports = pn
    });
    var Bi = c((vH, Uu) => {
        var Gu = Fu(),
            Nb = Gt();
        Uu.exports = !!Object.getOwnPropertySymbols && !Nb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41
        })
    });
    var ji = c((hH, Vu) => {
        var Pb = Bi();
        Vu.exports = Pb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var zi = c((yH, ku) => {
        var qb = pe(),
            Mb = br(),
            Db = rt(),
            Fb = Su(),
            Gb = ji(),
            Ub = qb.Object;
        ku.exports = Gb ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Mb("Symbol");
            return Db(t) && Fb(t.prototype, Ub(e))
        }
    });
    var Xu = c((EH, Hu) => {
        var Vb = pe(),
            kb = Vb.String;
        Hu.exports = function(e) {
            try {
                return kb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Bu = c((mH, Wu) => {
        var Hb = pe(),
            Xb = rt(),
            Wb = Xu(),
            Bb = Hb.TypeError;
        Wu.exports = function(e) {
            if (Xb(e)) return e;
            throw Bb(Wb(e) + " is not a function")
        }
    });
    var zu = c((_H, ju) => {
        var jb = Bu();
        ju.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : jb(r)
        }
    });
    var Yu = c((bH, Ku) => {
        var zb = pe(),
            Ki = dn(),
            Yi = rt(),
            $i = Ut(),
            Kb = zb.TypeError;
        Ku.exports = function(e, t) {
            var r, n;
            if (t === "string" && Yi(r = e.toString) && !$i(n = Ki(r, e)) || Yi(r = e.valueOf) && !$i(n = Ki(r, e)) || t !== "string" && Yi(r = e.toString) && !$i(n = Ki(r, e))) return n;
            throw Kb("Can't convert object to primitive value")
        }
    });
    var Qu = c((TH, $u) => {
        $u.exports = !1
    });
    var gn = c((IH, Ju) => {
        var Zu = pe(),
            Yb = Object.defineProperty;
        Ju.exports = function(e, t) {
            try {
                Yb(Zu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Zu[e] = t
            }
            return t
        }
    });
    var vn = c((OH, tc) => {
        var $b = pe(),
            Qb = gn(),
            ec = "__core-js_shared__",
            Zb = $b[ec] || Qb(ec, {});
        tc.exports = Zb
    });
    var Qi = c((wH, nc) => {
        var Jb = Qu(),
            rc = vn();
        (nc.exports = function(e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: Jb ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var oc = c((AH, ic) => {
        var eT = pe(),
            tT = Hi(),
            rT = eT.Object;
        ic.exports = function(e) {
            return rT(tT(e))
        }
    });
    var ht = c((xH, ac) => {
        var nT = Xe(),
            iT = oc(),
            oT = nT({}.hasOwnProperty);
        ac.exports = Object.hasOwn || function(t, r) {
            return oT(iT(t), r)
        }
    });
    var Zi = c((SH, sc) => {
        var aT = Xe(),
            sT = 0,
            uT = Math.random(),
            cT = aT(1.toString);
        sc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + cT(++sT + uT, 36)
        }
    });
    var Ji = c((RH, dc) => {
        var lT = pe(),
            fT = Qi(),
            uc = ht(),
            dT = Zi(),
            cc = Bi(),
            fc = ji(),
            Vt = fT("wks"),
            At = lT.Symbol,
            lc = At && At.for,
            pT = fc ? At : At && At.withoutSetter || dT;
        dc.exports = function(e) {
            if (!uc(Vt, e) || !(cc || typeof Vt[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(At, e) ? Vt[e] = At[e] : fc && lc ? Vt[e] = lc(t) : Vt[e] = pT(t)
            }
            return Vt[e]
        }
    });
    var hc = c((CH, vc) => {
        var gT = pe(),
            vT = dn(),
            pc = Ut(),
            gc = zi(),
            hT = zu(),
            yT = Yu(),
            ET = Ji(),
            mT = gT.TypeError,
            _T = ET("toPrimitive");
        vc.exports = function(e, t) {
            if (!pc(e) || gc(e)) return e;
            var r = hT(e, _T),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = vT(r, e, t), !pc(n) || gc(n)) return n;
                throw mT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), yT(e, t)
        }
    });
    var eo = c((LH, yc) => {
        var bT = hc(),
            TT = zi();
        yc.exports = function(e) {
            var t = bT(e, "string");
            return TT(t) ? t : t + ""
        }
    });
    var ro = c((NH, mc) => {
        var IT = pe(),
            Ec = Ut(),
            to = IT.document,
            OT = Ec(to) && Ec(to.createElement);
        mc.exports = function(e) {
            return OT ? to.createElement(e) : {}
        }
    });
    var no = c((PH, _c) => {
        var wT = wt(),
            AT = Gt(),
            xT = ro();
        _c.exports = !wT && !AT(function() {
            return Object.defineProperty(xT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var io = c(Tc => {
        var ST = wt(),
            RT = dn(),
            CT = pu(),
            LT = Gi(),
            NT = _r(),
            PT = eo(),
            qT = ht(),
            MT = no(),
            bc = Object.getOwnPropertyDescriptor;
        Tc.f = ST ? bc : function(t, r) {
            if (t = NT(t), r = PT(r), MT) try {
                return bc(t, r)
            } catch {}
            if (qT(t, r)) return LT(!RT(CT.f, t, r), t[r])
        }
    });
    var Tr = c((MH, Oc) => {
        var Ic = pe(),
            DT = Ut(),
            FT = Ic.String,
            GT = Ic.TypeError;
        Oc.exports = function(e) {
            if (DT(e)) return e;
            throw GT(FT(e) + " is not an object")
        }
    });
    var Ir = c(xc => {
        var UT = pe(),
            VT = wt(),
            kT = no(),
            wc = Tr(),
            HT = eo(),
            XT = UT.TypeError,
            Ac = Object.defineProperty;
        xc.f = VT ? Ac : function(t, r, n) {
            if (wc(t), r = HT(r), wc(n), kT) try {
                return Ac(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw XT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var hn = c((FH, Sc) => {
        var WT = wt(),
            BT = Ir(),
            jT = Gi();
        Sc.exports = WT ? function(e, t, r) {
            return BT.f(e, t, jT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var ao = c((GH, Rc) => {
        var zT = Xe(),
            KT = rt(),
            oo = vn(),
            YT = zT(Function.toString);
        KT(oo.inspectSource) || (oo.inspectSource = function(e) {
            return YT(e)
        });
        Rc.exports = oo.inspectSource
    });
    var Nc = c((UH, Lc) => {
        var $T = pe(),
            QT = rt(),
            ZT = ao(),
            Cc = $T.WeakMap;
        Lc.exports = QT(Cc) && /native code/.test(ZT(Cc))
    });
    var so = c((VH, qc) => {
        var JT = Qi(),
            eI = Zi(),
            Pc = JT("keys");
        qc.exports = function(e) {
            return Pc[e] || (Pc[e] = eI(e))
        }
    });
    var yn = c((kH, Mc) => {
        Mc.exports = {}
    });
    var kc = c((HH, Vc) => {
        var tI = Nc(),
            Uc = pe(),
            uo = Xe(),
            rI = Ut(),
            nI = hn(),
            co = ht(),
            lo = vn(),
            iI = so(),
            oI = yn(),
            Dc = "Object already initialized",
            po = Uc.TypeError,
            aI = Uc.WeakMap,
            En, Or, mn, sI = function(e) {
                return mn(e) ? Or(e) : En(e, {})
            },
            uI = function(e) {
                return function(t) {
                    var r;
                    if (!rI(t) || (r = Or(t)).type !== e) throw po("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        tI || lo.state ? (yt = lo.state || (lo.state = new aI), Fc = uo(yt.get), fo = uo(yt.has), Gc = uo(yt.set), En = function(e, t) {
            if (fo(yt, e)) throw new po(Dc);
            return t.facade = e, Gc(yt, e, t), t
        }, Or = function(e) {
            return Fc(yt, e) || {}
        }, mn = function(e) {
            return fo(yt, e)
        }) : (xt = iI("state"), oI[xt] = !0, En = function(e, t) {
            if (co(e, xt)) throw new po(Dc);
            return t.facade = e, nI(e, xt, t), t
        }, Or = function(e) {
            return co(e, xt) ? e[xt] : {}
        }, mn = function(e) {
            return co(e, xt)
        });
        var yt, Fc, fo, Gc, xt;
        Vc.exports = {
            set: En,
            get: Or,
            has: mn,
            enforce: sI,
            getterFor: uI
        }
    });
    var Wc = c((XH, Xc) => {
        var go = wt(),
            cI = ht(),
            Hc = Function.prototype,
            lI = go && Object.getOwnPropertyDescriptor,
            vo = cI(Hc, "name"),
            fI = vo && function() {}.name === "something",
            dI = vo && (!go || go && lI(Hc, "name").configurable);
        Xc.exports = {
            EXISTS: vo,
            PROPER: fI,
            CONFIGURABLE: dI
        }
    });
    var Yc = c((WH, Kc) => {
        var pI = pe(),
            Bc = rt(),
            gI = ht(),
            jc = hn(),
            vI = gn(),
            hI = ao(),
            zc = kc(),
            yI = Wc().CONFIGURABLE,
            EI = zc.get,
            mI = zc.enforce,
            _I = String(String).split("String");
        (Kc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (Bc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!gI(r, "name") || yI && r.name !== a) && jc(r, "name", a), u = mI(r), u.source || (u.source = _I.join(typeof a == "string" ? a : ""))), e === pI) {
                o ? e[t] = r : vI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : jc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Bc(this) && EI(this).source || hI(this)
        })
    });
    var ho = c((BH, $c) => {
        var bI = Math.ceil,
            TI = Math.floor;
        $c.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? TI : bI)(t)
        }
    });
    var Zc = c((jH, Qc) => {
        var II = ho(),
            OI = Math.max,
            wI = Math.min;
        Qc.exports = function(e, t) {
            var r = II(e);
            return r < 0 ? OI(r + t, 0) : wI(r, t)
        }
    });
    var el = c((zH, Jc) => {
        var AI = ho(),
            xI = Math.min;
        Jc.exports = function(e) {
            return e > 0 ? xI(AI(e), 9007199254740991) : 0
        }
    });
    var rl = c((KH, tl) => {
        var SI = el();
        tl.exports = function(e) {
            return SI(e.length)
        }
    });
    var yo = c((YH, il) => {
        var RI = _r(),
            CI = Zc(),
            LI = rl(),
            nl = function(e) {
                return function(t, r, n) {
                    var i = RI(t),
                        o = LI(i),
                        s = CI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        il.exports = {
            includes: nl(!0),
            indexOf: nl(!1)
        }
    });
    var mo = c(($H, al) => {
        var NI = Xe(),
            Eo = ht(),
            PI = _r(),
            qI = yo().indexOf,
            MI = yn(),
            ol = NI([].push);
        al.exports = function(e, t) {
            var r = PI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !Eo(MI, o) && Eo(r, o) && ol(i, o);
            for (; t.length > n;) Eo(r, o = t[n++]) && (~qI(i, o) || ol(i, o));
            return i
        }
    });
    var _n = c((QH, sl) => {
        sl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var cl = c(ul => {
        var DI = mo(),
            FI = _n(),
            GI = FI.concat("length", "prototype");
        ul.f = Object.getOwnPropertyNames || function(t) {
            return DI(t, GI)
        }
    });
    var fl = c(ll => {
        ll.f = Object.getOwnPropertySymbols
    });
    var pl = c((eX, dl) => {
        var UI = br(),
            VI = Xe(),
            kI = cl(),
            HI = fl(),
            XI = Tr(),
            WI = VI([].concat);
        dl.exports = UI("Reflect", "ownKeys") || function(t) {
            var r = kI.f(XI(t)),
                n = HI.f;
            return n ? WI(r, n(t)) : r
        }
    });
    var vl = c((tX, gl) => {
        var BI = ht(),
            jI = pl(),
            zI = io(),
            KI = Ir();
        gl.exports = function(e, t) {
            for (var r = jI(t), n = KI.f, i = zI.f, o = 0; o < r.length; o++) {
                var s = r[o];
                BI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var yl = c((rX, hl) => {
        var YI = Gt(),
            $I = rt(),
            QI = /#|\.prototype\./,
            wr = function(e, t) {
                var r = JI[ZI(e)];
                return r == tO ? !0 : r == eO ? !1 : $I(t) ? YI(t) : !!t
            },
            ZI = wr.normalize = function(e) {
                return String(e).replace(QI, ".").toLowerCase()
            },
            JI = wr.data = {},
            eO = wr.NATIVE = "N",
            tO = wr.POLYFILL = "P";
        hl.exports = wr
    });
    var ml = c((nX, El) => {
        var _o = pe(),
            rO = io().f,
            nO = hn(),
            iO = Yc(),
            oO = gn(),
            aO = vl(),
            sO = yl();
        El.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, f, p;
            if (n ? s = _o : i ? s = _o[r] || oO(r, {}) : s = (_o[r] || {}).prototype, s)
                for (a in t) {
                    if (f = t[a], e.noTargetGet ? (p = rO(s, a), u = p && p.value) : u = s[a], o = sO(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        aO(f, u)
                    }(e.sham || u && u.sham) && nO(f, "sham", !0), iO(s, a, f, e)
                }
        }
    });
    var bl = c((iX, _l) => {
        var uO = mo(),
            cO = _n();
        _l.exports = Object.keys || function(t) {
            return uO(t, cO)
        }
    });
    var Il = c((oX, Tl) => {
        var lO = wt(),
            fO = Ir(),
            dO = Tr(),
            pO = _r(),
            gO = bl();
        Tl.exports = lO ? Object.defineProperties : function(t, r) {
            dO(t);
            for (var n = pO(r), i = gO(r), o = i.length, s = 0, a; o > s;) fO.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var wl = c((aX, Ol) => {
        var vO = br();
        Ol.exports = vO("document", "documentElement")
    });
    var Pl = c((sX, Nl) => {
        var hO = Tr(),
            yO = Il(),
            Al = _n(),
            EO = yn(),
            mO = wl(),
            _O = ro(),
            bO = so(),
            xl = ">",
            Sl = "<",
            To = "prototype",
            Io = "script",
            Cl = bO("IE_PROTO"),
            bo = function() {},
            Ll = function(e) {
                return Sl + Io + xl + e + Sl + "/" + Io + xl
            },
            Rl = function(e) {
                e.write(Ll("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            TO = function() {
                var e = _O("iframe"),
                    t = "java" + Io + ":",
                    r;
                return e.style.display = "none", mO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ll("document.F=Object")), r.close(), r.F
            },
            bn, Tn = function() {
                try {
                    bn = new ActiveXObject("htmlfile")
                } catch {}
                Tn = typeof document < "u" ? document.domain && bn ? Rl(bn) : TO() : Rl(bn);
                for (var e = Al.length; e--;) delete Tn[To][Al[e]];
                return Tn()
            };
        EO[Cl] = !0;
        Nl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (bo[To] = hO(t), n = new bo, bo[To] = null, n[Cl] = t) : n = Tn(), r === void 0 ? n : yO(n, r)
        }
    });
    var Ml = c((uX, ql) => {
        var IO = Ji(),
            OO = Pl(),
            wO = Ir(),
            Oo = IO("unscopables"),
            wo = Array.prototype;
        wo[Oo] == null && wO.f(wo, Oo, {
            configurable: !0,
            value: OO(null)
        });
        ql.exports = function(e) {
            wo[Oo][e] = !0
        }
    });
    var Dl = c(() => {
        "use strict";
        var AO = ml(),
            xO = yo().includes,
            SO = Ml();
        AO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return xO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        SO("includes")
    });
    var Gl = c((fX, Fl) => {
        var RO = pe(),
            CO = Xe();
        Fl.exports = function(e, t) {
            return CO(RO[e].prototype[t])
        }
    });
    var Vl = c((dX, Ul) => {
        Dl();
        var LO = Gl();
        Ul.exports = LO("Array", "includes")
    });
    var Hl = c((pX, kl) => {
        var NO = Vl();
        kl.exports = NO
    });
    var Wl = c((gX, Xl) => {
        var PO = Hl();
        Xl.exports = PO
    });
    var Ao = c((vX, Bl) => {
        var qO = typeof global == "object" && global && global.Object === Object && global;
        Bl.exports = qO
    });
    var Be = c((hX, jl) => {
        var MO = Ao(),
            DO = typeof self == "object" && self && self.Object === Object && self,
            FO = MO || DO || Function("return this")();
        jl.exports = FO
    });
    var kt = c((yX, zl) => {
        var GO = Be(),
            UO = GO.Symbol;
        zl.exports = UO
    });
    var Ql = c((EX, $l) => {
        var Kl = kt(),
            Yl = Object.prototype,
            VO = Yl.hasOwnProperty,
            kO = Yl.toString,
            Ar = Kl ? Kl.toStringTag : void 0;

        function HO(e) {
            var t = VO.call(e, Ar),
                r = e[Ar];
            try {
                e[Ar] = void 0;
                var n = !0
            } catch {}
            var i = kO.call(e);
            return n && (t ? e[Ar] = r : delete e[Ar]), i
        }
        $l.exports = HO
    });
    var Jl = c((mX, Zl) => {
        var XO = Object.prototype,
            WO = XO.toString;

        function BO(e) {
            return WO.call(e)
        }
        Zl.exports = BO
    });
    var Et = c((_X, rf) => {
        var ef = kt(),
            jO = Ql(),
            zO = Jl(),
            KO = "[object Null]",
            YO = "[object Undefined]",
            tf = ef ? ef.toStringTag : void 0;

        function $O(e) {
            return e == null ? e === void 0 ? YO : KO : tf && tf in Object(e) ? jO(e) : zO(e)
        }
        rf.exports = $O
    });
    var xo = c((bX, nf) => {
        function QO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        nf.exports = QO
    });
    var So = c((TX, of ) => {
        var ZO = xo(),
            JO = ZO(Object.getPrototypeOf, Object); of .exports = JO
    });
    var ct = c((IX, af) => {
        function ew(e) {
            return e != null && typeof e == "object"
        }
        af.exports = ew
    });
    var Ro = c((OX, uf) => {
        var tw = Et(),
            rw = So(),
            nw = ct(),
            iw = "[object Object]",
            ow = Function.prototype,
            aw = Object.prototype,
            sf = ow.toString,
            sw = aw.hasOwnProperty,
            uw = sf.call(Object);

        function cw(e) {
            if (!nw(e) || tw(e) != iw) return !1;
            var t = rw(e);
            if (t === null) return !0;
            var r = sw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == uw
        }
        uf.exports = cw
    });
    var cf = c(Co => {
        "use strict";
        Object.defineProperty(Co, "__esModule", {
            value: !0
        });
        Co.default = lw;

        function lw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var lf = c((No, Lo) => {
        "use strict";
        Object.defineProperty(No, "__esModule", {
            value: !0
        });
        var fw = cf(),
            dw = pw(fw);

        function pw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ht;
        typeof self < "u" ? Ht = self : typeof window < "u" ? Ht = window : typeof global < "u" ? Ht = global : typeof Lo < "u" ? Ht = Lo : Ht = Function("return this")();
        var gw = (0, dw.default)(Ht);
        No.default = gw
    });
    var Po = c(xr => {
        "use strict";
        xr.__esModule = !0;
        xr.ActionTypes = void 0;
        xr.default = gf;
        var vw = Ro(),
            hw = pf(vw),
            yw = lf(),
            ff = pf(yw);

        function pf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var df = xr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function gf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(gf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function f() {
                a === s && (a = s.slice())
            }

            function p() {
                return o
            }

            function d(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var q = !0;
                return f(), a.push(_),
                    function() {
                        if (q) {
                            q = !1, f();
                            var S = a.indexOf(_);
                            a.splice(S, 1)
                        }
                    }
            }

            function h(_) {
                if (!(0, hw.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var q = s = a, O = 0; O < q.length; O++) q[O]();
                return _
            }

            function E(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, h({
                    type: df.INIT
                })
            }

            function y() {
                var _, q = d;
                return _ = {
                    subscribe: function(S) {
                        if (typeof S != "object") throw new TypeError("Expected the observer to be an object.");

                        function w() {
                            S.next && S.next(p())
                        }
                        w();
                        var L = q(w);
                        return {
                            unsubscribe: L
                        }
                    }
                }, _[ff.default] = function() {
                    return this
                }, _
            }
            return h({
                type: df.INIT
            }), n = {
                dispatch: h,
                subscribe: d,
                getState: p,
                replaceReducer: E
            }, n[ff.default] = y, n
        }
    });
    var Mo = c(qo => {
        "use strict";
        qo.__esModule = !0;
        qo.default = Ew;

        function Ew(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var yf = c(Do => {
        "use strict";
        Do.__esModule = !0;
        Do.default = Iw;
        var vf = Po(),
            mw = Ro(),
            SX = hf(mw),
            _w = Mo(),
            RX = hf(_w);

        function hf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function bw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Tw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: vf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + vf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Iw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                Tw(r)
            } catch (u) {
                a = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    p = arguments[1];
                if (a) throw a;
                if (!1) var d;
                for (var h = !1, E = {}, y = 0; y < o.length; y++) {
                    var _ = o[y],
                        q = r[_],
                        O = f[_],
                        S = q(O, p);
                    if (typeof S > "u") {
                        var w = bw(_, p);
                        throw new Error(w)
                    }
                    E[_] = S, h = h || S !== O
                }
                return h ? E : f
            }
        }
    });
    var mf = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = Ow;

        function Ef(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function Ow(e, t) {
            if (typeof e == "function") return Ef(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = Ef(s, t))
            }
            return n
        }
    });
    var Uo = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = ww;

        function ww() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var _f = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        var Aw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Vo.default = Cw;
        var xw = Uo(),
            Sw = Rw(xw);

        function Rw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Cw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        f = [],
                        p = {
                            getState: a.getState,
                            dispatch: function(h) {
                                return u(h)
                            }
                        };
                    return f = t.map(function(d) {
                        return d(p)
                    }), u = Sw.default.apply(void 0, f)(a.dispatch), Aw({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var ko = c(De => {
        "use strict";
        De.__esModule = !0;
        De.compose = De.applyMiddleware = De.bindActionCreators = De.combineReducers = De.createStore = void 0;
        var Lw = Po(),
            Nw = Xt(Lw),
            Pw = yf(),
            qw = Xt(Pw),
            Mw = mf(),
            Dw = Xt(Mw),
            Fw = _f(),
            Gw = Xt(Fw),
            Uw = Uo(),
            Vw = Xt(Uw),
            kw = Mo(),
            qX = Xt(kw);

        function Xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        De.createStore = Nw.default;
        De.combineReducers = qw.default;
        De.bindActionCreators = Dw.default;
        De.applyMiddleware = Gw.default;
        De.compose = Vw.default
    });
    var je, Ho, nt, Hw, Xw, Xo, Ww, bf = de(() => {
        "use strict";
        je = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Ho = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, nt = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Hw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, Xw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Xo = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Ww = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Fe, Bw, Wo = de(() => {
        "use strict";
        Fe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, Bw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var jw, Tf = de(() => {
        "use strict";
        jw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var zw, Kw, Yw, $w, Qw, Zw, Jw, Bo, If = de(() => {
        "use strict";
        Wo();
        ({
            TRANSFORM_MOVE: zw,
            TRANSFORM_SCALE: Kw,
            TRANSFORM_ROTATE: Yw,
            TRANSFORM_SKEW: $w,
            STYLE_SIZE: Qw,
            STYLE_FILTER: Zw,
            STYLE_FONT_VARIATION: Jw
        } = Fe), Bo = {
            [zw]: !0,
            [Kw]: !0,
            [Yw]: !0,
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0
        }
    });
    var me = {};
    Le(me, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => hA,
        IX2_ANIMATION_FRAME_CHANGED: () => lA,
        IX2_CLEAR_REQUESTED: () => sA,
        IX2_ELEMENT_STATE_CHANGED: () => vA,
        IX2_EVENT_LISTENER_ADDED: () => uA,
        IX2_EVENT_STATE_CHANGED: () => cA,
        IX2_INSTANCE_ADDED: () => dA,
        IX2_INSTANCE_REMOVED: () => gA,
        IX2_INSTANCE_STARTED: () => pA,
        IX2_MEDIA_QUERIES_DEFINED: () => EA,
        IX2_PARAMETER_CHANGED: () => fA,
        IX2_PLAYBACK_REQUESTED: () => oA,
        IX2_PREVIEW_REQUESTED: () => iA,
        IX2_RAW_DATA_IMPORTED: () => eA,
        IX2_SESSION_INITIALIZED: () => tA,
        IX2_SESSION_STARTED: () => rA,
        IX2_SESSION_STOPPED: () => nA,
        IX2_STOP_REQUESTED: () => aA,
        IX2_TEST_FRAME_RENDERED: () => mA,
        IX2_VIEWPORT_WIDTH_CHANGED: () => yA
    });
    var eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, yA, EA, mA, Of = de(() => {
        "use strict";
        eA = "IX2_RAW_DATA_IMPORTED", tA = "IX2_SESSION_INITIALIZED", rA = "IX2_SESSION_STARTED", nA = "IX2_SESSION_STOPPED", iA = "IX2_PREVIEW_REQUESTED", oA = "IX2_PLAYBACK_REQUESTED", aA = "IX2_STOP_REQUESTED", sA = "IX2_CLEAR_REQUESTED", uA = "IX2_EVENT_LISTENER_ADDED", cA = "IX2_EVENT_STATE_CHANGED", lA = "IX2_ANIMATION_FRAME_CHANGED", fA = "IX2_PARAMETER_CHANGED", dA = "IX2_INSTANCE_ADDED", pA = "IX2_INSTANCE_STARTED", gA = "IX2_INSTANCE_REMOVED", vA = "IX2_ELEMENT_STATE_CHANGED", hA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", yA = "IX2_VIEWPORT_WIDTH_CHANGED", EA = "IX2_MEDIA_QUERIES_DEFINED", mA = "IX2_TEST_FRAME_RENDERED"
    });
    var Oe = {};
    Le(Oe, {
        ABSTRACT_NODE: () => yx,
        AUTO: () => ax,
        BACKGROUND: () => ex,
        BACKGROUND_COLOR: () => JA,
        BAR_DELIMITER: () => cx,
        BORDER_COLOR: () => tx,
        BOUNDARY_SELECTOR: () => OA,
        CHILDREN: () => lx,
        COLON_DELIMITER: () => ux,
        COLOR: () => rx,
        COMMA_DELIMITER: () => sx,
        CONFIG_UNIT: () => NA,
        CONFIG_VALUE: () => SA,
        CONFIG_X_UNIT: () => RA,
        CONFIG_X_VALUE: () => wA,
        CONFIG_Y_UNIT: () => CA,
        CONFIG_Y_VALUE: () => AA,
        CONFIG_Z_UNIT: () => LA,
        CONFIG_Z_VALUE: () => xA,
        DISPLAY: () => nx,
        FILTER: () => YA,
        FLEX: () => ix,
        FONT_VARIATION_SETTINGS: () => $A,
        HEIGHT: () => ZA,
        HTML_ELEMENT: () => vx,
        IMMEDIATE_CHILDREN: () => fx,
        IX2_ID_DELIMITER: () => _A,
        OPACITY: () => KA,
        PARENT: () => px,
        PLAIN_OBJECT: () => hx,
        PRESERVE_3D: () => gx,
        RENDER_GENERAL: () => mx,
        RENDER_PLUGIN: () => bx,
        RENDER_STYLE: () => _x,
        RENDER_TRANSFORM: () => Ex,
        ROTATE_X: () => HA,
        ROTATE_Y: () => XA,
        ROTATE_Z: () => WA,
        SCALE_3D: () => kA,
        SCALE_X: () => GA,
        SCALE_Y: () => UA,
        SCALE_Z: () => VA,
        SIBLINGS: () => dx,
        SKEW: () => BA,
        SKEW_X: () => jA,
        SKEW_Y: () => zA,
        TRANSFORM: () => PA,
        TRANSLATE_3D: () => FA,
        TRANSLATE_X: () => qA,
        TRANSLATE_Y: () => MA,
        TRANSLATE_Z: () => DA,
        WF_PAGE: () => bA,
        WIDTH: () => QA,
        WILL_CHANGE: () => ox,
        W_MOD_IX: () => IA,
        W_MOD_JS: () => TA
    });
    var _A, bA, TA, IA, OA, wA, AA, xA, SA, RA, CA, LA, NA, PA, qA, MA, DA, FA, GA, UA, VA, kA, HA, XA, WA, BA, jA, zA, KA, YA, $A, QA, ZA, JA, ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, gx, vx, hx, yx, Ex, mx, _x, bx, wf = de(() => {
        "use strict";
        _A = "|", bA = "data-wf-page", TA = "w-mod-js", IA = "w-mod-ix", OA = ".w-dyn-item", wA = "xValue", AA = "yValue", xA = "zValue", SA = "value", RA = "xUnit", CA = "yUnit", LA = "zUnit", NA = "unit", PA = "transform", qA = "translateX", MA = "translateY", DA = "translateZ", FA = "translate3d", GA = "scaleX", UA = "scaleY", VA = "scaleZ", kA = "scale3d", HA = "rotateX", XA = "rotateY", WA = "rotateZ", BA = "skew", jA = "skewX", zA = "skewY", KA = "opacity", YA = "filter", $A = "font-variation-settings", QA = "width", ZA = "height", JA = "backgroundColor", ex = "background", tx = "borderColor", rx = "color", nx = "display", ix = "flex", ox = "willChange", ax = "AUTO", sx = ",", ux = ":", cx = "|", lx = "CHILDREN", fx = "IMMEDIATE_CHILDREN", dx = "SIBLINGS", px = "PARENT", gx = "preserve-3d", vx = "HTML_ELEMENT", hx = "PLAIN_OBJECT", yx = "ABSTRACT_NODE", Ex = "RENDER_TRANSFORM", mx = "RENDER_GENERAL", _x = "RENDER_STYLE", bx = "RENDER_PLUGIN"
    });
    var Af = {};
    Le(Af, {
        ActionAppliesTo: () => Bw,
        ActionTypeConsts: () => Fe,
        EventAppliesTo: () => Ho,
        EventBasedOn: () => nt,
        EventContinuousMouseAxes: () => Hw,
        EventLimitAffectedElements: () => Xw,
        EventTypeConsts: () => je,
        IX2EngineActionTypes: () => me,
        IX2EngineConstants: () => Oe,
        InteractionTypeConsts: () => jw,
        QuickEffectDirectionConsts: () => Ww,
        QuickEffectIds: () => Xo,
        ReducedMotionTypes: () => Bo
    });
    var Ne = de(() => {
        "use strict";
        bf();
        Wo();
        Tf();
        If();
        Of();
        wf()
    });
    var Tx, xf, Sf = de(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: Tx
        } = me), xf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Tx:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Wt = c(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        var Ix = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ve.clone = On;
        ve.addLast = Lf;
        ve.addFirst = Nf;
        ve.removeLast = Pf;
        ve.removeFirst = qf;
        ve.insert = Mf;
        ve.removeAt = Df;
        ve.replaceAt = Ff;
        ve.getIn = wn;
        ve.set = An;
        ve.setIn = xn;
        ve.update = Uf;
        ve.updateIn = Vf;
        ve.merge = kf;
        ve.mergeDeep = Hf;
        ve.mergeIn = Xf;
        ve.omit = Wf;
        ve.addDefaults = Bf;
        var Rf = "INVALID_ARGS";

        function Cf(e) {
            throw new Error(e)
        }

        function jo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Ox = {}.hasOwnProperty;

        function On(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Pe(e, t, r) {
            var n = r;
            n == null && Cf(Rf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var p = jo(f);
                    if (p.length)
                        for (var d = 0; d <= p.length; d++) {
                            var h = p[d];
                            if (!(e && n[h] !== void 0)) {
                                var E = f[h];
                                t && In(n[h]) && In(E) && (E = Pe(e, t, n[h], E)), !(E === void 0 || E === n[h]) && (i || (i = !0, n = On(n)), n[h] = E)
                            }
                        }
                }
            }
            return n
        }

        function In(e) {
            var t = typeof e > "u" ? "undefined" : Ix(e);
            return e != null && (t === "object" || t === "function")
        }

        function Lf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Nf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Pf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function qf(e) {
            return e.length ? e.slice(1) : e
        }

        function Mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Df(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ff(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function wn(e, t) {
            if (!Array.isArray(t) && Cf(Rf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function An(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = On(i);
            return o[t] = r, o
        }

        function Gf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Gf(s, t, r, n + 1)
            }
            return An(e, o, i)
        }

        function xn(e, t, r) {
            return t.length ? Gf(e, t, r, 0) : r
        }

        function Uf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return An(e, t, i)
        }

        function Vf(e, t, r) {
            var n = wn(e, t),
                i = r(n);
            return xn(e, t, i)
        }

        function kf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Pe(!1, !1, e, t, r, n, i, o)
        }

        function Hf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Pe(!1, !0, e, t, r, n, i, o)
        }

        function Xf(e, t, r, n, i, o, s) {
            var a = wn(e, t);
            a == null && (a = {});
            for (var u = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++) p[d - 7] = arguments[d];
            return p.length ? u = Pe.call.apply(Pe, [null, !1, !1, a, r, n, i, o, s].concat(p)) : u = Pe(!1, !1, a, r, n, i, o, s), xn(e, t, u)
        }

        function Wf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (Ox.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = jo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Bf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Pe(!0, !1, e, t, r, n, i, o)
        }
        var wx = {
            clone: On,
            addLast: Lf,
            addFirst: Nf,
            removeLast: Pf,
            removeFirst: qf,
            insert: Mf,
            removeAt: Df,
            replaceAt: Ff,
            getIn: wn,
            set: An,
            setIn: xn,
            update: Uf,
            updateIn: Vf,
            merge: kf,
            mergeDeep: Hf,
            mergeIn: Xf,
            omit: Wf,
            addDefaults: Bf
        };
        ve.default = wx
    });
    var zf, Ax, xx, Sx, Rx, Cx, jf, Kf, Yf = de(() => {
        "use strict";
        Ne();
        zf = ae(Wt()), {
            IX2_PREVIEW_REQUESTED: Ax,
            IX2_PLAYBACK_REQUESTED: xx,
            IX2_STOP_REQUESTED: Sx,
            IX2_CLEAR_REQUESTED: Rx
        } = me, Cx = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, jf = Object.create(null, {
            [Ax]: {
                value: "preview"
            },
            [xx]: {
                value: "playback"
            },
            [Sx]: {
                value: "stop"
            },
            [Rx]: {
                value: "clear"
            }
        }), Kf = (e = Cx, t) => {
            if (t.type in jf) {
                let r = [jf[t.type]];
                return (0, zf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var xe, Lx, Nx, Px, qx, Mx, Dx, Fx, Gx, Ux, Vx, $f, kx, Qf, Zf = de(() => {
        "use strict";
        Ne();
        xe = ae(Wt()), {
            IX2_SESSION_INITIALIZED: Lx,
            IX2_SESSION_STARTED: Nx,
            IX2_TEST_FRAME_RENDERED: Px,
            IX2_SESSION_STOPPED: qx,
            IX2_EVENT_LISTENER_ADDED: Mx,
            IX2_EVENT_STATE_CHANGED: Dx,
            IX2_ANIMATION_FRAME_CHANGED: Fx,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Gx,
            IX2_VIEWPORT_WIDTH_CHANGED: Ux,
            IX2_MEDIA_QUERIES_DEFINED: Vx
        } = me, $f = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, kx = 20, Qf = (e = $f, t) => {
            switch (t.type) {
                case Lx:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, xe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case Nx:
                    return (0, xe.set)(e, "active", !0);
                case Px:
                    {
                        let {
                            payload: {
                                step: r = kx
                            }
                        } = t;
                        return (0, xe.set)(e, "tick", e.tick + r)
                    }
                case qx:
                    return $f;
                case Fx:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, xe.set)(e, "tick", r)
                    }
                case Mx:
                    {
                        let r = (0, xe.addLast)(e.eventListeners, t.payload);
                        return (0, xe.set)(e, "eventListeners", r)
                    }
                case Dx:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, xe.setIn)(e, ["eventState", r], n)
                    }
                case Gx:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, xe.setIn)(e, ["playbackState", r], n)
                    }
                case Ux:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: f
                            } = n[s];
                            if (r >= u && r <= f) {
                                o = a;
                                break
                            }
                        }
                        return (0, xe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case Vx:
                    return (0, xe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var ed = c((ZX, Jf) => {
        function Hx() {
            this.__data__ = [], this.size = 0
        }
        Jf.exports = Hx
    });
    var Sn = c((JX, td) => {
        function Xx(e, t) {
            return e === t || e !== e && t !== t
        }
        td.exports = Xx
    });
    var Sr = c((eW, rd) => {
        var Wx = Sn();

        function Bx(e, t) {
            for (var r = e.length; r--;)
                if (Wx(e[r][0], t)) return r;
            return -1
        }
        rd.exports = Bx
    });
    var id = c((tW, nd) => {
        var jx = Sr(),
            zx = Array.prototype,
            Kx = zx.splice;

        function Yx(e) {
            var t = this.__data__,
                r = jx(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : Kx.call(t, r, 1), --this.size, !0
        }
        nd.exports = Yx
    });
    var ad = c((rW, od) => {
        var $x = Sr();

        function Qx(e) {
            var t = this.__data__,
                r = $x(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        od.exports = Qx
    });
    var ud = c((nW, sd) => {
        var Zx = Sr();

        function Jx(e) {
            return Zx(this.__data__, e) > -1
        }
        sd.exports = Jx
    });
    var ld = c((iW, cd) => {
        var eS = Sr();

        function tS(e, t) {
            var r = this.__data__,
                n = eS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        cd.exports = tS
    });
    var Rr = c((oW, fd) => {
        var rS = ed(),
            nS = id(),
            iS = ad(),
            oS = ud(),
            aS = ld();

        function Bt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Bt.prototype.clear = rS;
        Bt.prototype.delete = nS;
        Bt.prototype.get = iS;
        Bt.prototype.has = oS;
        Bt.prototype.set = aS;
        fd.exports = Bt
    });
    var pd = c((aW, dd) => {
        var sS = Rr();

        function uS() {
            this.__data__ = new sS, this.size = 0
        }
        dd.exports = uS
    });
    var vd = c((sW, gd) => {
        function cS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        gd.exports = cS
    });
    var yd = c((uW, hd) => {
        function lS(e) {
            return this.__data__.get(e)
        }
        hd.exports = lS
    });
    var md = c((cW, Ed) => {
        function fS(e) {
            return this.__data__.has(e)
        }
        Ed.exports = fS
    });
    var it = c((lW, _d) => {
        function dS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        _d.exports = dS
    });
    var zo = c((fW, bd) => {
        var pS = Et(),
            gS = it(),
            vS = "[object AsyncFunction]",
            hS = "[object Function]",
            yS = "[object GeneratorFunction]",
            ES = "[object Proxy]";

        function mS(e) {
            if (!gS(e)) return !1;
            var t = pS(e);
            return t == hS || t == yS || t == vS || t == ES
        }
        bd.exports = mS
    });
    var Id = c((dW, Td) => {
        var _S = Be(),
            bS = _S["__core-js_shared__"];
        Td.exports = bS
    });
    var Ad = c((pW, wd) => {
        var Ko = Id(),
            Od = function() {
                var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function TS(e) {
            return !!Od && Od in e
        }
        wd.exports = TS
    });
    var Yo = c((gW, xd) => {
        var IS = Function.prototype,
            OS = IS.toString;

        function wS(e) {
            if (e != null) {
                try {
                    return OS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        xd.exports = wS
    });
    var Rd = c((vW, Sd) => {
        var AS = zo(),
            xS = Ad(),
            SS = it(),
            RS = Yo(),
            CS = /[\\^$.*+?()[\]{}|]/g,
            LS = /^\[object .+?Constructor\]$/,
            NS = Function.prototype,
            PS = Object.prototype,
            qS = NS.toString,
            MS = PS.hasOwnProperty,
            DS = RegExp("^" + qS.call(MS).replace(CS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function FS(e) {
            if (!SS(e) || xS(e)) return !1;
            var t = AS(e) ? DS : LS;
            return t.test(RS(e))
        }
        Sd.exports = FS
    });
    var Ld = c((hW, Cd) => {
        function GS(e, t) {
            return e ? .[t]
        }
        Cd.exports = GS
    });
    var mt = c((yW, Nd) => {
        var US = Rd(),
            VS = Ld();

        function kS(e, t) {
            var r = VS(e, t);
            return US(r) ? r : void 0
        }
        Nd.exports = kS
    });
    var Rn = c((EW, Pd) => {
        var HS = mt(),
            XS = Be(),
            WS = HS(XS, "Map");
        Pd.exports = WS
    });
    var Cr = c((mW, qd) => {
        var BS = mt(),
            jS = BS(Object, "create");
        qd.exports = jS
    });
    var Fd = c((_W, Dd) => {
        var Md = Cr();

        function zS() {
            this.__data__ = Md ? Md(null) : {}, this.size = 0
        }
        Dd.exports = zS
    });
    var Ud = c((bW, Gd) => {
        function KS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Gd.exports = KS
    });
    var kd = c((TW, Vd) => {
        var YS = Cr(),
            $S = "__lodash_hash_undefined__",
            QS = Object.prototype,
            ZS = QS.hasOwnProperty;

        function JS(e) {
            var t = this.__data__;
            if (YS) {
                var r = t[e];
                return r === $S ? void 0 : r
            }
            return ZS.call(t, e) ? t[e] : void 0
        }
        Vd.exports = JS
    });
    var Xd = c((IW, Hd) => {
        var e0 = Cr(),
            t0 = Object.prototype,
            r0 = t0.hasOwnProperty;

        function n0(e) {
            var t = this.__data__;
            return e0 ? t[e] !== void 0 : r0.call(t, e)
        }
        Hd.exports = n0
    });
    var Bd = c((OW, Wd) => {
        var i0 = Cr(),
            o0 = "__lodash_hash_undefined__";

        function a0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = i0 && t === void 0 ? o0 : t, this
        }
        Wd.exports = a0
    });
    var zd = c((wW, jd) => {
        var s0 = Fd(),
            u0 = Ud(),
            c0 = kd(),
            l0 = Xd(),
            f0 = Bd();

        function jt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        jt.prototype.clear = s0;
        jt.prototype.delete = u0;
        jt.prototype.get = c0;
        jt.prototype.has = l0;
        jt.prototype.set = f0;
        jd.exports = jt
    });
    var $d = c((AW, Yd) => {
        var Kd = zd(),
            d0 = Rr(),
            p0 = Rn();

        function g0() {
            this.size = 0, this.__data__ = {
                hash: new Kd,
                map: new(p0 || d0),
                string: new Kd
            }
        }
        Yd.exports = g0
    });
    var Zd = c((xW, Qd) => {
        function v0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Qd.exports = v0
    });
    var Lr = c((SW, Jd) => {
        var h0 = Zd();

        function y0(e, t) {
            var r = e.__data__;
            return h0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Jd.exports = y0
    });
    var tp = c((RW, ep) => {
        var E0 = Lr();

        function m0(e) {
            var t = E0(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        ep.exports = m0
    });
    var np = c((CW, rp) => {
        var _0 = Lr();

        function b0(e) {
            return _0(this, e).get(e)
        }
        rp.exports = b0
    });
    var op = c((LW, ip) => {
        var T0 = Lr();

        function I0(e) {
            return T0(this, e).has(e)
        }
        ip.exports = I0
    });
    var sp = c((NW, ap) => {
        var O0 = Lr();

        function w0(e, t) {
            var r = O0(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        ap.exports = w0
    });
    var Cn = c((PW, up) => {
        var A0 = $d(),
            x0 = tp(),
            S0 = np(),
            R0 = op(),
            C0 = sp();

        function zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        zt.prototype.clear = A0;
        zt.prototype.delete = x0;
        zt.prototype.get = S0;
        zt.prototype.has = R0;
        zt.prototype.set = C0;
        up.exports = zt
    });
    var lp = c((qW, cp) => {
        var L0 = Rr(),
            N0 = Rn(),
            P0 = Cn(),
            q0 = 200;

        function M0(e, t) {
            var r = this.__data__;
            if (r instanceof L0) {
                var n = r.__data__;
                if (!N0 || n.length < q0 - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new P0(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        cp.exports = M0
    });
    var $o = c((MW, fp) => {
        var D0 = Rr(),
            F0 = pd(),
            G0 = vd(),
            U0 = yd(),
            V0 = md(),
            k0 = lp();

        function Kt(e) {
            var t = this.__data__ = new D0(e);
            this.size = t.size
        }
        Kt.prototype.clear = F0;
        Kt.prototype.delete = G0;
        Kt.prototype.get = U0;
        Kt.prototype.has = V0;
        Kt.prototype.set = k0;
        fp.exports = Kt
    });
    var pp = c((DW, dp) => {
        var H0 = "__lodash_hash_undefined__";

        function X0(e) {
            return this.__data__.set(e, H0), this
        }
        dp.exports = X0
    });
    var vp = c((FW, gp) => {
        function W0(e) {
            return this.__data__.has(e)
        }
        gp.exports = W0
    });
    var yp = c((GW, hp) => {
        var B0 = Cn(),
            j0 = pp(),
            z0 = vp();

        function Ln(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new B0; ++t < r;) this.add(e[t])
        }
        Ln.prototype.add = Ln.prototype.push = j0;
        Ln.prototype.has = z0;
        hp.exports = Ln
    });
    var mp = c((UW, Ep) => {
        function K0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Ep.exports = K0
    });
    var bp = c((VW, _p) => {
        function Y0(e, t) {
            return e.has(t)
        }
        _p.exports = Y0
    });
    var Qo = c((kW, Tp) => {
        var $0 = yp(),
            Q0 = mp(),
            Z0 = bp(),
            J0 = 1,
            eR = 2;

        function tR(e, t, r, n, i, o) {
            var s = r & J0,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = o.get(e),
                p = o.get(t);
            if (f && p) return f == t && p == e;
            var d = -1,
                h = !0,
                E = r & eR ? new $0 : void 0;
            for (o.set(e, t), o.set(t, e); ++d < a;) {
                var y = e[d],
                    _ = t[d];
                if (n) var q = s ? n(_, y, d, t, e, o) : n(y, _, d, e, t, o);
                if (q !== void 0) {
                    if (q) continue;
                    h = !1;
                    break
                }
                if (E) {
                    if (!Q0(t, function(O, S) {
                            if (!Z0(E, S) && (y === O || i(y, O, r, n, o))) return E.push(S)
                        })) {
                        h = !1;
                        break
                    }
                } else if (!(y === _ || i(y, _, r, n, o))) {
                    h = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), h
        }
        Tp.exports = tR
    });
    var Op = c((HW, Ip) => {
        var rR = Be(),
            nR = rR.Uint8Array;
        Ip.exports = nR
    });
    var Ap = c((XW, wp) => {
        function iR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        wp.exports = iR
    });
    var Sp = c((WW, xp) => {
        function oR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        xp.exports = oR
    });
    var Pp = c((BW, Np) => {
        var Rp = kt(),
            Cp = Op(),
            aR = Sn(),
            sR = Qo(),
            uR = Ap(),
            cR = Sp(),
            lR = 1,
            fR = 2,
            dR = "[object Boolean]",
            pR = "[object Date]",
            gR = "[object Error]",
            vR = "[object Map]",
            hR = "[object Number]",
            yR = "[object RegExp]",
            ER = "[object Set]",
            mR = "[object String]",
            _R = "[object Symbol]",
            bR = "[object ArrayBuffer]",
            TR = "[object DataView]",
            Lp = Rp ? Rp.prototype : void 0,
            Zo = Lp ? Lp.valueOf : void 0;

        function IR(e, t, r, n, i, o, s) {
            switch (r) {
                case TR:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case bR:
                    return !(e.byteLength != t.byteLength || !o(new Cp(e), new Cp(t)));
                case dR:
                case pR:
                case hR:
                    return aR(+e, +t);
                case gR:
                    return e.name == t.name && e.message == t.message;
                case yR:
                case mR:
                    return e == t + "";
                case vR:
                    var a = uR;
                case ER:
                    var u = n & lR;
                    if (a || (a = cR), e.size != t.size && !u) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    n |= fR, s.set(e, t);
                    var p = sR(a(e), a(t), n, i, o, s);
                    return s.delete(e), p;
                case _R:
                    if (Zo) return Zo.call(e) == Zo.call(t)
            }
            return !1
        }
        Np.exports = IR
    });
    var Nn = c((jW, qp) => {
        function OR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        qp.exports = OR
    });
    var be = c((zW, Mp) => {
        var wR = Array.isArray;
        Mp.exports = wR
    });
    var Jo = c((KW, Dp) => {
        var AR = Nn(),
            xR = be();

        function SR(e, t, r) {
            var n = t(e);
            return xR(e) ? n : AR(n, r(e))
        }
        Dp.exports = SR
    });
    var Gp = c((YW, Fp) => {
        function RR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Fp.exports = RR
    });
    var ea = c(($W, Up) => {
        function CR() {
            return []
        }
        Up.exports = CR
    });
    var ta = c((QW, kp) => {
        var LR = Gp(),
            NR = ea(),
            PR = Object.prototype,
            qR = PR.propertyIsEnumerable,
            Vp = Object.getOwnPropertySymbols,
            MR = Vp ? function(e) {
                return e == null ? [] : (e = Object(e), LR(Vp(e), function(t) {
                    return qR.call(e, t)
                }))
            } : NR;
        kp.exports = MR
    });
    var Xp = c((ZW, Hp) => {
        function DR(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Hp.exports = DR
    });
    var Bp = c((JW, Wp) => {
        var FR = Et(),
            GR = ct(),
            UR = "[object Arguments]";

        function VR(e) {
            return GR(e) && FR(e) == UR
        }
        Wp.exports = VR
    });
    var Nr = c((e5, Kp) => {
        var jp = Bp(),
            kR = ct(),
            zp = Object.prototype,
            HR = zp.hasOwnProperty,
            XR = zp.propertyIsEnumerable,
            WR = jp(function() {
                return arguments
            }()) ? jp : function(e) {
                return kR(e) && HR.call(e, "callee") && !XR.call(e, "callee")
            };
        Kp.exports = WR
    });
    var $p = c((t5, Yp) => {
        function BR() {
            return !1
        }
        Yp.exports = BR
    });
    var Pn = c((Pr, Yt) => {
        var jR = Be(),
            zR = $p(),
            Jp = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
            Qp = Jp && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
            KR = Qp && Qp.exports === Jp,
            Zp = KR ? jR.Buffer : void 0,
            YR = Zp ? Zp.isBuffer : void 0,
            $R = YR || zR;
        Yt.exports = $R
    });
    var qn = c((r5, eg) => {
        var QR = 9007199254740991,
            ZR = /^(?:0|[1-9]\d*)$/;

        function JR(e, t) {
            var r = typeof e;
            return t = t ? ? QR, !!t && (r == "number" || r != "symbol" && ZR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        eg.exports = JR
    });
    var Mn = c((n5, tg) => {
        var eC = 9007199254740991;

        function tC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eC
        }
        tg.exports = tC
    });
    var ng = c((i5, rg) => {
        var rC = Et(),
            nC = Mn(),
            iC = ct(),
            oC = "[object Arguments]",
            aC = "[object Array]",
            sC = "[object Boolean]",
            uC = "[object Date]",
            cC = "[object Error]",
            lC = "[object Function]",
            fC = "[object Map]",
            dC = "[object Number]",
            pC = "[object Object]",
            gC = "[object RegExp]",
            vC = "[object Set]",
            hC = "[object String]",
            yC = "[object WeakMap]",
            EC = "[object ArrayBuffer]",
            mC = "[object DataView]",
            _C = "[object Float32Array]",
            bC = "[object Float64Array]",
            TC = "[object Int8Array]",
            IC = "[object Int16Array]",
            OC = "[object Int32Array]",
            wC = "[object Uint8Array]",
            AC = "[object Uint8ClampedArray]",
            xC = "[object Uint16Array]",
            SC = "[object Uint32Array]",
            fe = {};
        fe[_C] = fe[bC] = fe[TC] = fe[IC] = fe[OC] = fe[wC] = fe[AC] = fe[xC] = fe[SC] = !0;
        fe[oC] = fe[aC] = fe[EC] = fe[sC] = fe[mC] = fe[uC] = fe[cC] = fe[lC] = fe[fC] = fe[dC] = fe[pC] = fe[gC] = fe[vC] = fe[hC] = fe[yC] = !1;

        function RC(e) {
            return iC(e) && nC(e.length) && !!fe[rC(e)]
        }
        rg.exports = RC
    });
    var og = c((o5, ig) => {
        function CC(e) {
            return function(t) {
                return e(t)
            }
        }
        ig.exports = CC
    });
    var sg = c((qr, $t) => {
        var LC = Ao(),
            ag = typeof qr == "object" && qr && !qr.nodeType && qr,
            Mr = ag && typeof $t == "object" && $t && !$t.nodeType && $t,
            NC = Mr && Mr.exports === ag,
            ra = NC && LC.process,
            PC = function() {
                try {
                    var e = Mr && Mr.require && Mr.require("util").types;
                    return e || ra && ra.binding && ra.binding("util")
                } catch {}
            }();
        $t.exports = PC
    });
    var Dn = c((a5, lg) => {
        var qC = ng(),
            MC = og(),
            ug = sg(),
            cg = ug && ug.isTypedArray,
            DC = cg ? MC(cg) : qC;
        lg.exports = DC
    });
    var na = c((s5, fg) => {
        var FC = Xp(),
            GC = Nr(),
            UC = be(),
            VC = Pn(),
            kC = qn(),
            HC = Dn(),
            XC = Object.prototype,
            WC = XC.hasOwnProperty;

        function BC(e, t) {
            var r = UC(e),
                n = !r && GC(e),
                i = !r && !n && VC(e),
                o = !r && !n && !i && HC(e),
                s = r || n || i || o,
                a = s ? FC(e.length, String) : [],
                u = a.length;
            for (var f in e)(t || WC.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || kC(f, u))) && a.push(f);
            return a
        }
        fg.exports = BC
    });
    var Fn = c((u5, dg) => {
        var jC = Object.prototype;

        function zC(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || jC;
            return e === r
        }
        dg.exports = zC
    });
    var gg = c((c5, pg) => {
        var KC = xo(),
            YC = KC(Object.keys, Object);
        pg.exports = YC
    });
    var Gn = c((l5, vg) => {
        var $C = Fn(),
            QC = gg(),
            ZC = Object.prototype,
            JC = ZC.hasOwnProperty;

        function eL(e) {
            if (!$C(e)) return QC(e);
            var t = [];
            for (var r in Object(e)) JC.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        vg.exports = eL
    });
    var St = c((f5, hg) => {
        var tL = zo(),
            rL = Mn();

        function nL(e) {
            return e != null && rL(e.length) && !tL(e)
        }
        hg.exports = nL
    });
    var Dr = c((d5, yg) => {
        var iL = na(),
            oL = Gn(),
            aL = St();

        function sL(e) {
            return aL(e) ? iL(e) : oL(e)
        }
        yg.exports = sL
    });
    var mg = c((p5, Eg) => {
        var uL = Jo(),
            cL = ta(),
            lL = Dr();

        function fL(e) {
            return uL(e, lL, cL)
        }
        Eg.exports = fL
    });
    var Tg = c((g5, bg) => {
        var _g = mg(),
            dL = 1,
            pL = Object.prototype,
            gL = pL.hasOwnProperty;

        function vL(e, t, r, n, i, o) {
            var s = r & dL,
                a = _g(e),
                u = a.length,
                f = _g(t),
                p = f.length;
            if (u != p && !s) return !1;
            for (var d = u; d--;) {
                var h = a[d];
                if (!(s ? h in t : gL.call(t, h))) return !1
            }
            var E = o.get(e),
                y = o.get(t);
            if (E && y) return E == t && y == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var q = s; ++d < u;) {
                h = a[d];
                var O = e[h],
                    S = t[h];
                if (n) var w = s ? n(S, O, h, t, e, o) : n(O, S, h, e, t, o);
                if (!(w === void 0 ? O === S || i(O, S, r, n, o) : w)) {
                    _ = !1;
                    break
                }
                q || (q = h == "constructor")
            }
            if (_ && !q) {
                var L = e.constructor,
                    P = t.constructor;
                L != P && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof P == "function" && P instanceof P) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        bg.exports = vL
    });
    var Og = c((v5, Ig) => {
        var hL = mt(),
            yL = Be(),
            EL = hL(yL, "DataView");
        Ig.exports = EL
    });
    var Ag = c((h5, wg) => {
        var mL = mt(),
            _L = Be(),
            bL = mL(_L, "Promise");
        wg.exports = bL
    });
    var Sg = c((y5, xg) => {
        var TL = mt(),
            IL = Be(),
            OL = TL(IL, "Set");
        xg.exports = OL
    });
    var ia = c((E5, Rg) => {
        var wL = mt(),
            AL = Be(),
            xL = wL(AL, "WeakMap");
        Rg.exports = xL
    });
    var Un = c((m5, Dg) => {
        var oa = Og(),
            aa = Rn(),
            sa = Ag(),
            ua = Sg(),
            ca = ia(),
            Mg = Et(),
            Qt = Yo(),
            Cg = "[object Map]",
            SL = "[object Object]",
            Lg = "[object Promise]",
            Ng = "[object Set]",
            Pg = "[object WeakMap]",
            qg = "[object DataView]",
            RL = Qt(oa),
            CL = Qt(aa),
            LL = Qt(sa),
            NL = Qt(ua),
            PL = Qt(ca),
            Rt = Mg;
        (oa && Rt(new oa(new ArrayBuffer(1))) != qg || aa && Rt(new aa) != Cg || sa && Rt(sa.resolve()) != Lg || ua && Rt(new ua) != Ng || ca && Rt(new ca) != Pg) && (Rt = function(e) {
            var t = Mg(e),
                r = t == SL ? e.constructor : void 0,
                n = r ? Qt(r) : "";
            if (n) switch (n) {
                case RL:
                    return qg;
                case CL:
                    return Cg;
                case LL:
                    return Lg;
                case NL:
                    return Ng;
                case PL:
                    return Pg
            }
            return t
        });
        Dg.exports = Rt
    });
    var Wg = c((_5, Xg) => {
        var la = $o(),
            qL = Qo(),
            ML = Pp(),
            DL = Tg(),
            Fg = Un(),
            Gg = be(),
            Ug = Pn(),
            FL = Dn(),
            GL = 1,
            Vg = "[object Arguments]",
            kg = "[object Array]",
            Vn = "[object Object]",
            UL = Object.prototype,
            Hg = UL.hasOwnProperty;

        function VL(e, t, r, n, i, o) {
            var s = Gg(e),
                a = Gg(t),
                u = s ? kg : Fg(e),
                f = a ? kg : Fg(t);
            u = u == Vg ? Vn : u, f = f == Vg ? Vn : f;
            var p = u == Vn,
                d = f == Vn,
                h = u == f;
            if (h && Ug(e)) {
                if (!Ug(t)) return !1;
                s = !0, p = !1
            }
            if (h && !p) return o || (o = new la), s || FL(e) ? qL(e, t, r, n, i, o) : ML(e, t, u, r, n, i, o);
            if (!(r & GL)) {
                var E = p && Hg.call(e, "__wrapped__"),
                    y = d && Hg.call(t, "__wrapped__");
                if (E || y) {
                    var _ = E ? e.value() : e,
                        q = y ? t.value() : t;
                    return o || (o = new la), i(_, q, r, n, o)
                }
            }
            return h ? (o || (o = new la), DL(e, t, r, n, i, o)) : !1
        }
        Xg.exports = VL
    });
    var fa = c((b5, zg) => {
        var kL = Wg(),
            Bg = ct();

        function jg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Bg(e) && !Bg(t) ? e !== e && t !== t : kL(e, t, r, n, jg, i)
        }
        zg.exports = jg
    });
    var Yg = c((T5, Kg) => {
        var HL = $o(),
            XL = fa(),
            WL = 1,
            BL = 2;

        function jL(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    f = e[u],
                    p = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var d = new HL;
                    if (n) var h = n(f, p, u, e, t, d);
                    if (!(h === void 0 ? XL(p, f, WL | BL, n, d) : h)) return !1
                }
            }
            return !0
        }
        Kg.exports = jL
    });
    var da = c((I5, $g) => {
        var zL = it();

        function KL(e) {
            return e === e && !zL(e)
        }
        $g.exports = KL
    });
    var Zg = c((O5, Qg) => {
        var YL = da(),
            $L = Dr();

        function QL(e) {
            for (var t = $L(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, YL(i)]
            }
            return t
        }
        Qg.exports = QL
    });
    var pa = c((w5, Jg) => {
        function ZL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Jg.exports = ZL
    });
    var tv = c((A5, ev) => {
        var JL = Yg(),
            eN = Zg(),
            tN = pa();

        function rN(e) {
            var t = eN(e);
            return t.length == 1 && t[0][2] ? tN(t[0][0], t[0][1]) : function(r) {
                return r === e || JL(r, e, t)
            }
        }
        ev.exports = rN
    });
    var Fr = c((x5, rv) => {
        var nN = Et(),
            iN = ct(),
            oN = "[object Symbol]";

        function aN(e) {
            return typeof e == "symbol" || iN(e) && nN(e) == oN
        }
        rv.exports = aN
    });
    var kn = c((S5, nv) => {
        var sN = be(),
            uN = Fr(),
            cN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            lN = /^\w*$/;

        function fN(e, t) {
            if (sN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || uN(e) ? !0 : lN.test(e) || !cN.test(e) || t != null && e in Object(t)
        }
        nv.exports = fN
    });
    var av = c((R5, ov) => {
        var iv = Cn(),
            dN = "Expected a function";

        function ga(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(dN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(ga.Cache || iv), r
        }
        ga.Cache = iv;
        ov.exports = ga
    });
    var uv = c((C5, sv) => {
        var pN = av(),
            gN = 500;

        function vN(e) {
            var t = pN(e, function(n) {
                    return r.size === gN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        sv.exports = vN
    });
    var lv = c((L5, cv) => {
        var hN = uv(),
            yN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            EN = /\\(\\)?/g,
            mN = hN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(yN, function(r, n, i, o) {
                    t.push(i ? o.replace(EN, "$1") : n || r)
                }), t
            });
        cv.exports = mN
    });
    var va = c((N5, fv) => {
        function _N(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        fv.exports = _N
    });
    var yv = c((P5, hv) => {
        var dv = kt(),
            bN = va(),
            TN = be(),
            IN = Fr(),
            ON = 1 / 0,
            pv = dv ? dv.prototype : void 0,
            gv = pv ? pv.toString : void 0;

        function vv(e) {
            if (typeof e == "string") return e;
            if (TN(e)) return bN(e, vv) + "";
            if (IN(e)) return gv ? gv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -ON ? "-0" : t
        }
        hv.exports = vv
    });
    var mv = c((q5, Ev) => {
        var wN = yv();

        function AN(e) {
            return e == null ? "" : wN(e)
        }
        Ev.exports = AN
    });
    var Gr = c((M5, _v) => {
        var xN = be(),
            SN = kn(),
            RN = lv(),
            CN = mv();

        function LN(e, t) {
            return xN(e) ? e : SN(e, t) ? [e] : RN(CN(e))
        }
        _v.exports = LN
    });
    var Zt = c((D5, bv) => {
        var NN = Fr(),
            PN = 1 / 0;

        function qN(e) {
            if (typeof e == "string" || NN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -PN ? "-0" : t
        }
        bv.exports = qN
    });
    var Hn = c((F5, Tv) => {
        var MN = Gr(),
            DN = Zt();

        function FN(e, t) {
            t = MN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[DN(t[r++])];
            return r && r == n ? e : void 0
        }
        Tv.exports = FN
    });
    var Xn = c((G5, Iv) => {
        var GN = Hn();

        function UN(e, t, r) {
            var n = e == null ? void 0 : GN(e, t);
            return n === void 0 ? r : n
        }
        Iv.exports = UN
    });
    var wv = c((U5, Ov) => {
        function VN(e, t) {
            return e != null && t in Object(e)
        }
        Ov.exports = VN
    });
    var xv = c((V5, Av) => {
        var kN = Gr(),
            HN = Nr(),
            XN = be(),
            WN = qn(),
            BN = Mn(),
            jN = Zt();

        function zN(e, t, r) {
            t = kN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = jN(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && BN(i) && WN(s, i) && (XN(e) || HN(e)))
        }
        Av.exports = zN
    });
    var Rv = c((k5, Sv) => {
        var KN = wv(),
            YN = xv();

        function $N(e, t) {
            return e != null && YN(e, t, KN)
        }
        Sv.exports = $N
    });
    var Lv = c((H5, Cv) => {
        var QN = fa(),
            ZN = Xn(),
            JN = Rv(),
            eP = kn(),
            tP = da(),
            rP = pa(),
            nP = Zt(),
            iP = 1,
            oP = 2;

        function aP(e, t) {
            return eP(e) && tP(t) ? rP(nP(e), t) : function(r) {
                var n = ZN(r, e);
                return n === void 0 && n === t ? JN(r, e) : QN(t, n, iP | oP)
            }
        }
        Cv.exports = aP
    });
    var Wn = c((X5, Nv) => {
        function sP(e) {
            return e
        }
        Nv.exports = sP
    });
    var ha = c((W5, Pv) => {
        function uP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Pv.exports = uP
    });
    var Mv = c((B5, qv) => {
        var cP = Hn();

        function lP(e) {
            return function(t) {
                return cP(t, e)
            }
        }
        qv.exports = lP
    });
    var Fv = c((j5, Dv) => {
        var fP = ha(),
            dP = Mv(),
            pP = kn(),
            gP = Zt();

        function vP(e) {
            return pP(e) ? fP(gP(e)) : dP(e)
        }
        Dv.exports = vP
    });
    var _t = c((z5, Gv) => {
        var hP = tv(),
            yP = Lv(),
            EP = Wn(),
            mP = be(),
            _P = Fv();

        function bP(e) {
            return typeof e == "function" ? e : e == null ? EP : typeof e == "object" ? mP(e) ? yP(e[0], e[1]) : hP(e) : _P(e)
        }
        Gv.exports = bP
    });
    var ya = c((K5, Uv) => {
        var TP = _t(),
            IP = St(),
            OP = Dr();

        function wP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!IP(t)) {
                    var o = TP(r, 3);
                    t = OP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Uv.exports = wP
    });
    var Ea = c((Y5, Vv) => {
        function AP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Vv.exports = AP
    });
    var Hv = c(($5, kv) => {
        var xP = /\s/;

        function SP(e) {
            for (var t = e.length; t-- && xP.test(e.charAt(t)););
            return t
        }
        kv.exports = SP
    });
    var Wv = c((Q5, Xv) => {
        var RP = Hv(),
            CP = /^\s+/;

        function LP(e) {
            return e && e.slice(0, RP(e) + 1).replace(CP, "")
        }
        Xv.exports = LP
    });
    var Bn = c((Z5, zv) => {
        var NP = Wv(),
            Bv = it(),
            PP = Fr(),
            jv = 0 / 0,
            qP = /^[-+]0x[0-9a-f]+$/i,
            MP = /^0b[01]+$/i,
            DP = /^0o[0-7]+$/i,
            FP = parseInt;

        function GP(e) {
            if (typeof e == "number") return e;
            if (PP(e)) return jv;
            if (Bv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Bv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = NP(e);
            var r = MP.test(e);
            return r || DP.test(e) ? FP(e.slice(2), r ? 2 : 8) : qP.test(e) ? jv : +e
        }
        zv.exports = GP
    });
    var $v = c((J5, Yv) => {
        var UP = Bn(),
            Kv = 1 / 0,
            VP = 17976931348623157e292;

        function kP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = UP(e), e === Kv || e === -Kv) {
                var t = e < 0 ? -1 : 1;
                return t * VP
            }
            return e === e ? e : 0
        }
        Yv.exports = kP
    });
    var ma = c((eB, Qv) => {
        var HP = $v();

        function XP(e) {
            var t = HP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Qv.exports = XP
    });
    var Jv = c((tB, Zv) => {
        var WP = Ea(),
            BP = _t(),
            jP = ma(),
            zP = Math.max;

        function KP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : jP(r);
            return i < 0 && (i = zP(n + i, 0)), WP(e, BP(t, 3), i)
        }
        Zv.exports = KP
    });
    var _a = c((rB, eh) => {
        var YP = ya(),
            $P = Jv(),
            QP = YP($P);
        eh.exports = QP
    });
    var nh = {};
    Le(nh, {
        ELEMENT_MATCHES: () => ZP,
        FLEX_PREFIXED: () => ba,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => bt,
        TRANSFORM_STYLE_PREFIXED: () => zn,
        withBrowser: () => jn
    });
    var rh, ze, jn, ZP, ba, bt, th, zn, Kn = de(() => {
        "use strict";
        rh = ae(_a()), ze = typeof window < "u", jn = (e, t) => ze ? e() : t, ZP = jn(() => (0, rh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), ba = jn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), bt = jn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), th = bt.split("transform")[0], zn = th ? th + "TransformStyle" : "transformStyle"
    });
    var Ta = c((nB, uh) => {
        var JP = 4,
            eq = .001,
            tq = 1e-7,
            rq = 10,
            Ur = 11,
            Yn = 1 / (Ur - 1),
            nq = typeof Float32Array == "function";

        function ih(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function oh(e, t) {
            return 3 * t - 6 * e
        }

        function ah(e) {
            return 3 * e
        }

        function $n(e, t, r) {
            return ((ih(t, r) * e + oh(t, r)) * e + ah(t)) * e
        }

        function sh(e, t, r) {
            return 3 * ih(t, r) * e * e + 2 * oh(t, r) * e + ah(t)
        }

        function iq(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = $n(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > tq && ++a < rq);
            return s
        }

        function oq(e, t, r, n) {
            for (var i = 0; i < JP; ++i) {
                var o = sh(t, r, n);
                if (o === 0) return t;
                var s = $n(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        uh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = nq ? new Float32Array(Ur) : new Array(Ur);
            if (t !== r || n !== i)
                for (var s = 0; s < Ur; ++s) o[s] = $n(s * Yn, t, n);

            function a(u) {
                for (var f = 0, p = 1, d = Ur - 1; p !== d && o[p] <= u; ++p) f += Yn;
                --p;
                var h = (u - o[p]) / (o[p + 1] - o[p]),
                    E = f + h * Yn,
                    y = sh(E, t, n);
                return y >= eq ? oq(u, E, t, n) : y === 0 ? E : iq(u, f, f + Yn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : $n(a(f), r, i)
            }
        }
    });
    var kr = {};
    Le(kr, {
        bounce: () => kq,
        bouncePast: () => Hq,
        ease: () => aq,
        easeIn: () => sq,
        easeInOut: () => cq,
        easeOut: () => uq,
        inBack: () => Nq,
        inCirc: () => Sq,
        inCubic: () => pq,
        inElastic: () => Mq,
        inExpo: () => wq,
        inOutBack: () => qq,
        inOutCirc: () => Cq,
        inOutCubic: () => vq,
        inOutElastic: () => Fq,
        inOutExpo: () => xq,
        inOutQuad: () => dq,
        inOutQuart: () => Eq,
        inOutQuint: () => bq,
        inOutSine: () => Oq,
        inQuad: () => lq,
        inQuart: () => hq,
        inQuint: () => mq,
        inSine: () => Tq,
        outBack: () => Pq,
        outBounce: () => Lq,
        outCirc: () => Rq,
        outCubic: () => gq,
        outElastic: () => Dq,
        outExpo: () => Aq,
        outQuad: () => fq,
        outQuart: () => yq,
        outQuint: () => _q,
        outSine: () => Iq,
        swingFrom: () => Uq,
        swingFromTo: () => Gq,
        swingTo: () => Vq
    });

    function lq(e) {
        return Math.pow(e, 2)
    }

    function fq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function dq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function pq(e) {
        return Math.pow(e, 3)
    }

    function gq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function vq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function hq(e) {
        return Math.pow(e, 4)
    }

    function yq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function mq(e) {
        return Math.pow(e, 5)
    }

    function _q(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function bq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Tq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Iq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Oq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function wq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Aq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function xq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Sq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Rq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Cq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Lq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Nq(e) {
        let t = lt;
        return e * e * ((t + 1) * e - t)
    }

    function Pq(e) {
        let t = lt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function qq(e) {
        let t = lt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Mq(e) {
        let t = lt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Dq(e) {
        let t = lt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Fq(e) {
        let t = lt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Gq(e) {
        let t = lt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Uq(e) {
        let t = lt;
        return e * e * ((t + 1) * e - t)
    }

    function Vq(e) {
        let t = lt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Hq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Vr, lt, aq, sq, uq, cq, Ia = de(() => {
        "use strict";
        Vr = ae(Ta()), lt = 1.70158, aq = (0, Vr.default)(.25, .1, .25, 1), sq = (0, Vr.default)(.42, 0, 1, 1), uq = (0, Vr.default)(0, 0, .58, 1), cq = (0, Vr.default)(.42, 0, .58, 1)
    });
    var lh = {};
    Le(lh, {
        applyEasing: () => Wq,
        createBezierEasing: () => Xq,
        optimizeFloat: () => Hr
    });

    function Hr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Xq(e) {
        return (0, ch.default)(...e)
    }

    function Wq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && kr[e] ? kr[e](t) : t)
    }
    var ch, Oa = de(() => {
        "use strict";
        Ia();
        ch = ae(Ta())
    });
    var ph = {};
    Le(ph, {
        createElementState: () => dh,
        ixElements: () => iM,
        mergeActionState: () => wa
    });

    function dh(e, t, r, n, i) {
        let o = r === Bq ? (0, Jt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Jt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function wa(e, t, r, n, i) {
        let o = aM(i);
        return (0, Jt.mergeIn)(e, [t, nM, r], n, o)
    }

    function aM(e) {
        let {
            config: t
        } = e;
        return oM.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var Jt, oB, Bq, aB, jq, zq, Kq, Yq, $q, Qq, Zq, Jq, eM, tM, rM, fh, nM, iM, oM, gh = de(() => {
        "use strict";
        Jt = ae(Wt());
        Ne();
        ({
            HTML_ELEMENT: oB,
            PLAIN_OBJECT: Bq,
            ABSTRACT_NODE: aB,
            CONFIG_X_VALUE: jq,
            CONFIG_Y_VALUE: zq,
            CONFIG_Z_VALUE: Kq,
            CONFIG_VALUE: Yq,
            CONFIG_X_UNIT: $q,
            CONFIG_Y_UNIT: Qq,
            CONFIG_Z_UNIT: Zq,
            CONFIG_UNIT: Jq
        } = Oe), {
            IX2_SESSION_STOPPED: eM,
            IX2_INSTANCE_ADDED: tM,
            IX2_ELEMENT_STATE_CHANGED: rM
        } = me, fh = {}, nM = "refState", iM = (e = fh, t = {}) => {
            switch (t.type) {
                case eM:
                    return fh;
                case tM:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, Jt.getIn)(u, [r, n]) !== n && (u = dh(u, n, s, r, o)),
                        wa(u, r, a, i, o)
                    }
                case rM:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return wa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        oM = [
            [jq, $q],
            [zq, Qq],
            [Kq, Zq],
            [Yq, Jq]
        ]
    });
    var vh = c(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        Te.renderPlugin = Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        var sM = e => e.value;
        Te.getPluginConfig = sM;
        var uM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Te.getPluginDuration = uM;
        var cM = e => e || {
            value: 0
        };
        Te.getPluginOrigin = cM;
        var lM = e => ({
            value: e.value
        });
        Te.getPluginDestination = lM;
        var fM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Te.createPluginInstance = fM;
        var dM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Te.renderPlugin = dM;
        var pM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Te.clearPlugin = pM
    });
    var yh = c(Ie => {
        "use strict";
        Object.defineProperty(Ie, "__esModule", {
            value: !0
        });
        Ie.renderPlugin = Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
        var gM = e => document.querySelector(`[data-w-id="${e}"]`),
            vM = () => window.Webflow.require("spline"),
            hM = (e, t) => e.filter(r => !t.includes(r)),
            yM = (e, t) => e.value[t];
        Ie.getPluginConfig = yM;
        var EM = () => null;
        Ie.getPluginDuration = EM;
        var hh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            mM = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = hM(n, o);
                    return s.length ? s.reduce((u, f) => (u[f] = hh[f], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = hh[s], o), {})
            };
        Ie.getPluginOrigin = mM;
        var _M = e => e.value;
        Ie.getPluginDestination = _M;
        var bM = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? gM(i) : null
        };
        Ie.createPluginInstance = bM;
        var TM = (e, t, r) => {
            let n = vM(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Ie.renderPlugin = TM;
        var IM = () => null;
        Ie.clearPlugin = IM
    });
    var mh = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        _e.getPluginOrigin = _e.getPluginDuration = _e.getPluginDestination = _e.getPluginConfig = _e.createPluginInstance = _e.clearPlugin = void 0;
        _e.normalizeColor = Eh;
        _e.renderPlugin = void 0;

        function Eh(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let s = o.substring(1);
                s.length === 3 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16)) : s.length === 6 && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let s = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (o.startsWith("rgb")) {
                let s = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (o.startsWith("hsla")) {
                let s = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let p = (1 - Math.abs(2 * f - 1)) * u,
                    d = p * (1 - Math.abs(a / 60 % 2 - 1)),
                    h = f - p / 2,
                    E, y, _;
                a >= 0 && a < 60 ? (E = p, y = d, _ = 0) : a >= 60 && a < 120 ? (E = d, y = p, _ = 0) : a >= 120 && a < 180 ? (E = 0, y = p, _ = d) : a >= 180 && a < 240 ? (E = 0, y = d, _ = p) : a >= 240 && a < 300 ? (E = d, y = 0, _ = p) : (E = p, y = 0, _ = d), t = Math.round((E + h) * 255), r = Math.round((y + h) * 255), n = Math.round((_ + h) * 255)
            } else if (o.startsWith("hsl")) {
                let s = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * f - 1)) * u,
                    d = p * (1 - Math.abs(a / 60 % 2 - 1)),
                    h = f - p / 2,
                    E, y, _;
                a >= 0 && a < 60 ? (E = p, y = d, _ = 0) : a >= 60 && a < 120 ? (E = d, y = p, _ = 0) : a >= 120 && a < 180 ? (E = 0, y = p, _ = d) : a >= 180 && a < 240 ? (E = 0, y = d, _ = p) : a >= 240 && a < 300 ? (E = d, y = 0, _ = p) : (E = p, y = 0, _ = d), t = Math.round((E + h) * 255), r = Math.round((y + h) * 255), n = Math.round((_ + h) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var OM = (e, t) => e.value[t];
        _e.getPluginConfig = OM;
        var wM = () => null;
        _e.getPluginDuration = wM;
        var AM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return Eh(i)
        };
        _e.getPluginOrigin = AM;
        var xM = e => e.value;
        _e.getPluginDestination = xM;
        var SM = () => null;
        _e.createPluginInstance = SM;
        var RM = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: f,
                    alpha: p
                } = o,
                d;
            s != null && (d = s + i), a != null && f != null && u != null && p != null && (d = `rgba(${a}, ${u}, ${f}, ${p})`), d != null && document.documentElement.style.setProperty(n, d)
        };
        _e.renderPlugin = RM;
        var CM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        _e.clearPlugin = CM
    });
    var _h = c(Qn => {
        "use strict";
        var xa = ln().default;
        Object.defineProperty(Qn, "__esModule", {
            value: !0
        });
        Qn.pluginMethodMap = void 0;
        var Aa = (Ne(), Je(Af)),
            LM = xa(vh()),
            NM = xa(yh()),
            PM = xa(mh()),
            lB = Qn.pluginMethodMap = new Map([
                [Aa.ActionTypeConsts.PLUGIN_LOTTIE, { ...LM
                }],
                [Aa.ActionTypeConsts.PLUGIN_SPLINE, { ...NM
                }],
                [Aa.ActionTypeConsts.PLUGIN_VARIABLE, { ...PM
                }]
            ])
    });
    var bh = {};
    Le(bh, {
        clearPlugin: () => Pa,
        createPluginInstance: () => MM,
        getPluginConfig: () => Ra,
        getPluginDestination: () => La,
        getPluginDuration: () => qM,
        getPluginOrigin: () => Ca,
        isPluginType: () => Ct,
        renderPlugin: () => Na
    });

    function Ct(e) {
        return Sa.pluginMethodMap.has(e)
    }
    var Sa, Lt, Ra, Ca, qM, La, MM, Na, Pa, qa = de(() => {
        "use strict";
        Kn();
        Sa = ae(_h());
        Lt = e => t => {
            if (!ze) return () => null;
            let r = Sa.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Ra = Lt("getPluginConfig"), Ca = Lt("getPluginOrigin"), qM = Lt("getPluginDuration"), La = Lt("getPluginDestination"), MM = Lt("createPluginInstance"), Na = Lt("renderPlugin"), Pa = Lt("clearPlugin")
    });
    var Ih = c((pB, Th) => {
        function DM(e, t) {
            return e == null || e !== e ? t : e
        }
        Th.exports = DM
    });
    var wh = c((gB, Oh) => {
        function FM(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Oh.exports = FM
    });
    var xh = c((vB, Ah) => {
        function GM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Ah.exports = GM
    });
    var Rh = c((hB, Sh) => {
        var UM = xh(),
            VM = UM();
        Sh.exports = VM
    });
    var Ma = c((yB, Ch) => {
        var kM = Rh(),
            HM = Dr();

        function XM(e, t) {
            return e && kM(e, t, HM)
        }
        Ch.exports = XM
    });
    var Nh = c((EB, Lh) => {
        var WM = St();

        function BM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!WM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Lh.exports = BM
    });
    var Da = c((mB, Ph) => {
        var jM = Ma(),
            zM = Nh(),
            KM = zM(jM);
        Ph.exports = KM
    });
    var Mh = c((_B, qh) => {
        function YM(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        qh.exports = YM
    });
    var Fh = c((bB, Dh) => {
        var $M = wh(),
            QM = Da(),
            ZM = _t(),
            JM = Mh(),
            e1 = be();

        function t1(e, t, r) {
            var n = e1(e) ? $M : JM,
                i = arguments.length < 3;
            return n(e, ZM(t, 4), r, i, QM)
        }
        Dh.exports = t1
    });
    var Uh = c((TB, Gh) => {
        var r1 = Ea(),
            n1 = _t(),
            i1 = ma(),
            o1 = Math.max,
            a1 = Math.min;

        function s1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = i1(r), i = r < 0 ? o1(n + i, 0) : a1(i, n - 1)), r1(e, n1(t, 3), i, !0)
        }
        Gh.exports = s1
    });
    var kh = c((IB, Vh) => {
        var u1 = ya(),
            c1 = Uh(),
            l1 = u1(c1);
        Vh.exports = l1
    });

    function Hh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function d1(e, t) {
        if (Hh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!f1.call(t, r[i]) || !Hh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var f1, Fa, Xh = de(() => {
        "use strict";
        f1 = Object.prototype.hasOwnProperty;
        Fa = d1
    });
    var ay = {};
    Le(ay, {
        cleanupHTMLElement: () => cD,
        clearAllStyles: () => uD,
        clearObjectCache: () => R1,
        getActionListProgress: () => fD,
        getAffectedElements: () => Ha,
        getComputedStyle: () => F1,
        getDestinationValues: () => W1,
        getElementId: () => P1,
        getInstanceId: () => L1,
        getInstanceOrigin: () => V1,
        getItemConfigByKey: () => X1,
        getMaxDurationItemIndex: () => oy,
        getNamespacedParameterId: () => gD,
        getRenderType: () => ry,
        getStyleProp: () => B1,
        mediaQueriesEqual: () => hD,
        observeStore: () => D1,
        reduceListToGroup: () => dD,
        reifyState: () => q1,
        renderHTMLElement: () => j1,
        shallowEqual: () => Fa,
        shouldAllowMediaQuery: () => vD,
        shouldNamespaceEventParameter: () => pD,
        stringifyTarget: () => yD
    });

    function R1() {
        Zn.clear()
    }

    function L1() {
        return "i" + C1++
    }

    function P1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + N1++
    }

    function q1({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ri.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function D1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = M1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                s();
                return
            }
            n(f, a) || (a = f, r(a, e))
        }
        return s
    }

    function jh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Ha({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((I, v) => I.concat(Ha({
            config: {
                target: v
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: p,
            matchSelector: d,
            elementContains: h,
            isSiblingNode: E
        } = i, {
            target: y
        } = e;
        if (!y) return [];
        let {
            id: _,
            objectId: q,
            selector: O,
            selectorGuids: S,
            appliesTo: w,
            useEventTarget: L
        } = jh(y);
        if (q) return [Zn.has(q) ? Zn.get(q) : Zn.set(q, {}).get(q)];
        if (w === Ho.PAGE) {
            let I = s(_);
            return I ? [I] : []
        }
        let N = (t ? .action ? .config ? .affectedElements ? ? {})[_ || O] || {},
            B = !!(N.id || N.selector),
            j, z, Q, U = t && a(jh(t.target));
        if (B ? (j = N.limitAffectedElements, z = U, Q = a(N)) : z = Q = a({
                id: _,
                selector: O,
                selectorGuids: S
            }), t && L) {
            let I = r && (Q || L === !0) ? [r] : u(U);
            if (Q) {
                if (L === A1) return u(Q).filter(v => I.some(R => h(v, R)));
                if (L === Wh) return u(Q).filter(v => I.some(R => h(R, v)));
                if (L === Bh) return u(Q).filter(v => I.some(R => E(R, v)))
            }
            return I
        }
        return z == null || Q == null ? [] : ze && n ? u(Q).filter(I => n.contains(I)) : j === Wh ? u(z, Q) : j === w1 ? f(u(z)).filter(d(Q)) : j === Bh ? p(u(z)).filter(d(Q)) : u(Q)
    }

    function F1({
        element: e,
        actionItem: t
    }) {
        if (!ze) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case ir:
            case or:
            case ar:
            case sr:
            case ii:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function V1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (Ct(s)) return Ca(s)(t[s], n);
        switch (n.actionTypeId) {
            case tr:
            case rr:
            case nr:
            case jr:
                return t[n.actionTypeId] || Xa[n.actionTypeId];
            case zr:
                return G1(t[n.actionTypeId], n.config.filters);
            case Kr:
                return U1(t[n.actionTypeId], n.config.fontVariations);
            case Jh:
                return {
                    value: (0, ft.default)(parseFloat(o(e, ei)), 1)
                };
            case ir:
                {
                    let a = o(e, ot),
                        u = o(e, at),
                        f, p;
                    return n.config.widthUnit === Tt ? f = zh.test(a) ? parseFloat(a) : parseFloat(r.width) : f = (0, ft.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === Tt ? p = zh.test(u) ? parseFloat(u) : parseFloat(r.height) : p = (0, ft.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: p
                    }
                }
            case or:
            case ar:
            case sr:
                return oD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ii:
                return {
                    value: (0, ft.default)(o(e, ti), r.display)
                };
            case S1:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function W1({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Ct(t.actionTypeId)) return La(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case tr:
            case rr:
            case nr:
            case jr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case ir:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!ze) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (s === Tt) {
                        let p = n(e, ot);
                        i(e, ot, ""), u = o(e, "offsetWidth"), i(e, ot, p)
                    }
                    if (a === Tt) {
                        let p = n(e, at);
                        i(e, at, ""), f = o(e, "offsetHeight"), i(e, at, p)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case or:
            case ar:
            case sr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case zr:
                return t.config.filters.reduce(k1, {});
            case Kr:
                return t.config.fontVariations.reduce(H1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function ry(e) {
        if (/^TRANSFORM_/.test(e)) return Qh;
        if (/^STYLE_/.test(e)) return Va;
        if (/^GENERAL_/.test(e)) return Ua;
        if (/^PLUGIN_/.test(e)) return Zh
    }

    function B1(e, t) {
        return e === Va ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function j1(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case Qh:
                return Q1(e, t, r, i, s);
            case Va:
                return aD(e, t, r, i, o, s);
            case Ua:
                return sD(e, i, s);
            case Zh:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (Ct(f)) return Na(f)(u, t, i)
                }
        }
    }

    function Q1(e, t, r, n, i) {
        let o = $1.map(a => {
                let u = Xa[a],
                    {
                        xValue: f = u.xValue,
                        yValue: p = u.yValue,
                        zValue: d = u.zValue,
                        xUnit: h = "",
                        yUnit: E = "",
                        zUnit: y = ""
                    } = t[a] || {};
                switch (a) {
                    case tr:
                        return `${v1}(${f}${h}, ${p}${E}, ${d}${y})`;
                    case rr:
                        return `${h1}(${f}${h}, ${p}${E}, ${d}${y})`;
                    case nr:
                        return `${y1}(${f}${h}) ${E1}(${p}${E}) ${m1}(${d}${y})`;
                    case jr:
                        return `${_1}(${f}${h}, ${p}${E})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Nt(e, bt, i), s(e, bt, o), eD(n, r) && s(e, zn, b1)
    }

    function Z1(e, t, r, n) {
        let i = (0, ri.default)(t, (s, a, u) => `${s} ${u}(${a}${Y1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Nt(e, Xr, n), o(e, Xr, i)
    }

    function J1(e, t, r, n) {
        let i = (0, ri.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Nt(e, Wr, n), o(e, Wr, i)
    }

    function eD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === tr && n !== void 0 || e === rr && n !== void 0 || e === nr && (t !== void 0 || r !== void 0)
    }

    function iD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function oD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = ka[t],
            o = n(e, i),
            s = rD.test(o) ? o : r[i],
            a = iD(nD, s).split(Br);
        return {
            rValue: (0, ft.default)(parseInt(a[0], 10), 255),
            gValue: (0, ft.default)(parseInt(a[1], 10), 255),
            bValue: (0, ft.default)(parseInt(a[2], 10), 255),
            aValue: (0, ft.default)(parseFloat(a[3]), 1)
        }
    }

    function aD(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case ir:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: p
                    } = r;f !== void 0 && (a === Tt && (a = "px"), Nt(e, ot, o), s(e, ot, f + a)),
                    p !== void 0 && (u === Tt && (u = "px"), Nt(e, at, o), s(e, at, p + u));
                    break
                }
            case zr:
                {
                    Z1(e, r, n.config, o);
                    break
                }
            case Kr:
                {
                    J1(e, r, n.config, o);
                    break
                }
            case or:
            case ar:
            case sr:
                {
                    let a = ka[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        p = Math.round(r.bValue),
                        d = r.aValue;Nt(e, a, o),
                    s(e, a, d >= 1 ? `rgb(${u},${f},${p})` : `rgba(${u},${f},${p},${d})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;Nt(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function sD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ii:
                {
                    let {
                        value: i
                    } = t.config;i === T1 && ze ? n(e, ti, ba) : n(e, ti, i);
                    return
                }
        }
    }

    function Nt(e, t, r) {
        if (!ze) return;
        let n = ty[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, er);
        if (!s) {
            o(e, er, n);
            return
        }
        let a = s.split(Br).map(ey);
        a.indexOf(n) === -1 && o(e, er, a.concat(n).join(Br))
    }

    function ny(e, t, r) {
        if (!ze) return;
        let n = ty[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, er);
        !s || s.indexOf(n) === -1 || o(e, er, s.split(Br).map(ey).filter(a => a !== n).join(Br))
    }

    function uD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                f = i[u];
            f && Kh({
                actionList: f,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Kh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Kh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Yh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Yh({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Yh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            Ct(o) ? a = u => Pa(o)(u, i) : a = iy({
                effect: lD,
                actionTypeId: o,
                elementApi: r
            }), Ha({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function cD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === ir) {
            let {
                config: s
            } = t;
            s.widthUnit === Tt && n(e, ot, ""), s.heightUnit === Tt && n(e, at, "")
        }
        i(e, er) && iy({
            effect: ny,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function lD(e, t, r) {
        let {
            setStyle: n
        } = r;
        ny(e, t, r), n(e, t, ""), t === bt && n(e, zn, "")
    }

    function oy(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function fD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: p
            } = u, d = p[oy(p)], {
                config: h,
                actionTypeId: E
            } = d;
            i.id === d.id && (a = s + o);
            let y = ry(E) === Ua ? 0 : h.duration;
            s += h.delay + y
        }), s > 0 ? Hr(a / s) : 0
    }

    function dD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, ni.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: f
            }) => f.some(s))
        }), (0, ni.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function pD(e, {
        basedOn: t
    }) {
        return e === je.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null) || e === je.MOUSE_MOVE && t === nt.ELEMENT
    }

    function gD(e, t) {
        return e + x1 + t
    }

    function vD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function hD(e, t) {
        return Fa(e && e.sort(), t && t.sort())
    }

    function yD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ga + r + Ga + n
    }
    var ft, ri, Jn, ni, p1, g1, v1, h1, y1, E1, m1, _1, b1, T1, ei, Xr, Wr, ot, at, $h, I1, O1, Wh, w1, Bh, A1, ti, er, Tt, Br, x1, Ga, Qh, Ua, Va, Zh, tr, rr, nr, jr, Jh, zr, Kr, ir, or, ar, sr, ii, S1, ey, ka, ty, Zn, C1, N1, M1, zh, G1, U1, k1, H1, X1, Xa, z1, K1, Y1, $1, tD, rD, nD, iy, sy = de(() => {
        "use strict";
        ft = ae(Ih()), ri = ae(Fh()), Jn = ae(kh()), ni = ae(Wt());
        Ne();
        Xh();
        Oa();
        qa();
        Kn();
        ({
            BACKGROUND: p1,
            TRANSFORM: g1,
            TRANSLATE_3D: v1,
            SCALE_3D: h1,
            ROTATE_X: y1,
            ROTATE_Y: E1,
            ROTATE_Z: m1,
            SKEW: _1,
            PRESERVE_3D: b1,
            FLEX: T1,
            OPACITY: ei,
            FILTER: Xr,
            FONT_VARIATION_SETTINGS: Wr,
            WIDTH: ot,
            HEIGHT: at,
            BACKGROUND_COLOR: $h,
            BORDER_COLOR: I1,
            COLOR: O1,
            CHILDREN: Wh,
            IMMEDIATE_CHILDREN: w1,
            SIBLINGS: Bh,
            PARENT: A1,
            DISPLAY: ti,
            WILL_CHANGE: er,
            AUTO: Tt,
            COMMA_DELIMITER: Br,
            COLON_DELIMITER: x1,
            BAR_DELIMITER: Ga,
            RENDER_TRANSFORM: Qh,
            RENDER_GENERAL: Ua,
            RENDER_STYLE: Va,
            RENDER_PLUGIN: Zh
        } = Oe), {
            TRANSFORM_MOVE: tr,
            TRANSFORM_SCALE: rr,
            TRANSFORM_ROTATE: nr,
            TRANSFORM_SKEW: jr,
            STYLE_OPACITY: Jh,
            STYLE_FILTER: zr,
            STYLE_FONT_VARIATION: Kr,
            STYLE_SIZE: ir,
            STYLE_BACKGROUND_COLOR: or,
            STYLE_BORDER: ar,
            STYLE_TEXT_COLOR: sr,
            GENERAL_DISPLAY: ii,
            OBJECT_VALUE: S1
        } = Fe, ey = e => e.trim(), ka = Object.freeze({
            [or]: $h,
            [ar]: I1,
            [sr]: O1
        }), ty = Object.freeze({
            [bt]: g1,
            [$h]: p1,
            [ei]: ei,
            [Xr]: Xr,
            [ot]: ot,
            [at]: at,
            [Wr]: Wr
        }), Zn = new Map;
        C1 = 1;
        N1 = 1;
        M1 = (e, t) => e === t;
        zh = /px/, G1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = z1[n.type]), r), e || {}), U1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = K1[n.type] || n.defaultValue || 0), r), e || {});
        k1 = (e, t) => (t && (e[t.type] = t.value || 0), e), H1 = (e, t) => (t && (e[t.type] = t.value || 0), e), X1 = (e, t, r) => {
            if (Ct(e)) return Ra(e)(r, t);
            switch (e) {
                case zr:
                    {
                        let n = (0, Jn.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Kr:
                    {
                        let n = (0, Jn.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Xa = {
            [tr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [rr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [nr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [jr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, z1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), K1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), Y1 = (e, t) => {
            let r = (0, Jn.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, $1 = Object.keys(Xa);
        tD = "\\(([^)]+)\\)", rD = /^rgb/, nD = RegExp(`rgba?${tD}`);
        iy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case tr:
                case rr:
                case nr:
                case jr:
                    e(n, bt, r);
                    break;
                case zr:
                    e(n, Xr, r);
                    break;
                case Kr:
                    e(n, Wr, r);
                    break;
                case Jh:
                    e(n, ei, r);
                    break;
                case ir:
                    e(n, ot, r), e(n, at, r);
                    break;
                case or:
                case ar:
                case sr:
                    e(n, ka[t], r);
                    break;
                case ii:
                    e(n, ti, r);
                    break
            }
        }
    });
    var Pt = c(Se => {
        "use strict";
        var ur = ln().default;
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.IX2VanillaUtils = Se.IX2VanillaPlugins = Se.IX2ElementsReducer = Se.IX2Easings = Se.IX2EasingUtils = Se.IX2BrowserSupport = void 0;
        var ED = ur((Kn(), Je(nh)));
        Se.IX2BrowserSupport = ED;
        var mD = ur((Ia(), Je(kr)));
        Se.IX2Easings = mD;
        var _D = ur((Oa(), Je(lh)));
        Se.IX2EasingUtils = _D;
        var bD = ur((gh(), Je(ph)));
        Se.IX2ElementsReducer = bD;
        var TD = ur((qa(), Je(bh)));
        Se.IX2VanillaPlugins = TD;
        var ID = ur((sy(), Je(ay)));
        Se.IX2VanillaUtils = ID
    });
    var ai, dt, OD, wD, AD, xD, SD, RD, oi, uy, CD, LD, Wa, ND, PD, qD, MD, cy, ly = de(() => {
        "use strict";
        Ne();
        ai = ae(Pt()), dt = ae(Wt()), {
            IX2_RAW_DATA_IMPORTED: OD,
            IX2_SESSION_STOPPED: wD,
            IX2_INSTANCE_ADDED: AD,
            IX2_INSTANCE_STARTED: xD,
            IX2_INSTANCE_REMOVED: SD,
            IX2_ANIMATION_FRAME_CHANGED: RD
        } = me, {
            optimizeFloat: oi,
            applyEasing: uy,
            createBezierEasing: CD
        } = ai.IX2EasingUtils, {
            RENDER_GENERAL: LD
        } = Oe, {
            getItemConfigByKey: Wa,
            getRenderType: ND,
            getStyleProp: PD
        } = ai.IX2VanillaUtils, qD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: p,
                skipToValue: d
            } = e, {
                parameters: h
            } = t.payload, E = Math.max(1 - s, .01), y = h[n];
            y == null && (E = 1, y = a);
            let _ = Math.max(y, 0) || 0,
                q = oi(_ - r),
                O = p ? d : oi(r + q * E),
                S = O * 100;
            if (O === r && e.current) return e;
            let w, L, P, N;
            for (let j = 0, {
                    length: z
                } = i; j < z; j++) {
                let {
                    keyframe: Q,
                    actionItems: U
                } = i[j];
                if (j === 0 && (w = U[0]), S >= Q) {
                    w = U[0];
                    let I = i[j + 1],
                        v = I && S !== Q;
                    L = v ? I.actionItems[0] : null, v && (P = Q / 100, N = (I.keyframe - Q) / 100)
                }
            }
            let B = {};
            if (w && !L)
                for (let j = 0, {
                        length: z
                    } = o; j < z; j++) {
                    let Q = o[j];
                    B[Q] = Wa(u, Q, w.config)
                } else if (w && L && P !== void 0 && N !== void 0) {
                    let j = (O - P) / N,
                        z = w.config.easing,
                        Q = uy(z, j, f);
                    for (let U = 0, {
                            length: I
                        } = o; U < I; U++) {
                        let v = o[U],
                            R = Wa(u, v, w.config),
                            Z = (Wa(u, v, L.config) - R) * Q + R;
                        B[v] = Z
                    }
                }
            return (0, dt.merge)(e, {
                position: O,
                current: B
            })
        }, MD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: f,
                destinationKeys: p,
                pluginDuration: d,
                instanceDelay: h,
                customEasingFn: E,
                skipMotion: y
            } = e, _ = u.config.easing, {
                duration: q,
                delay: O
            } = u.config;
            d != null && (q = d), O = h ? ? O, s === LD ? q = 0 : (o || y) && (q = O = 0);
            let {
                now: S
            } = t.payload;
            if (r && n) {
                let w = S - (i + O);
                if (a) {
                    let j = S - i,
                        z = q + O,
                        Q = oi(Math.min(Math.max(0, j / z), 1));
                    e = (0, dt.set)(e, "verboseTimeElapsed", z * Q)
                }
                if (w < 0) return e;
                let L = oi(Math.min(Math.max(0, w / q), 1)),
                    P = uy(_, L, E),
                    N = {},
                    B = null;
                return p.length && (B = p.reduce((j, z) => {
                    let Q = f[z],
                        U = parseFloat(n[z]) || 0,
                        v = (parseFloat(Q) - U) * P + U;
                    return j[z] = v, j
                }, {})), N.current = B, N.position = L, L === 1 && (N.active = !1, N.complete = !0), (0, dt.merge)(e, N)
            }
            return e
        }, cy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case OD:
                    return t.payload.ixInstances || Object.freeze({});
                case wD:
                    return Object.freeze({});
                case AD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: p,
                            origin: d,
                            destination: h,
                            immediate: E,
                            verbose: y,
                            continuous: _,
                            parameterId: q,
                            actionGroups: O,
                            smoothing: S,
                            restingValue: w,
                            pluginInstance: L,
                            pluginDuration: P,
                            instanceDelay: N,
                            skipMotion: B,
                            skipToValue: j
                        } = t.payload,
                        {
                            actionTypeId: z
                        } = i,
                        Q = ND(z),
                        U = PD(Q, z),
                        I = Object.keys(h).filter(R => h[R] != null && typeof h[R] != "string"),
                        {
                            easing: v
                        } = i.config;
                        return (0, dt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: d,
                            destination: h,
                            destinationKeys: I,
                            immediate: E,
                            verbose: y,
                            current: null,
                            actionItem: i,
                            actionTypeId: z,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            renderType: Q,
                            isCarrier: p,
                            styleProp: U,
                            continuous: _,
                            parameterId: q,
                            actionGroups: O,
                            smoothing: S,
                            restingValue: w,
                            pluginInstance: L,
                            pluginDuration: P,
                            instanceDelay: N,
                            skipMotion: B,
                            skipToValue: j,
                            customEasingFn: Array.isArray(v) && v.length === 4 ? CD(v) : void 0
                        })
                    }
                case xD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, dt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case SD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case RD:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? qD : MD;
                            r = (0, dt.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var DD, FD, GD, fy, dy = de(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: DD,
            IX2_SESSION_STOPPED: FD,
            IX2_PARAMETER_CHANGED: GD
        } = me), fy = (e = {}, t) => {
            switch (t.type) {
                case DD:
                    return t.payload.ixParameters || {};
                case FD:
                    return {};
                case GD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var vy = {};
    Le(vy, {
        default: () => VD
    });
    var py, gy, UD, VD, hy = de(() => {
        "use strict";
        py = ae(ko());
        Sf();
        Yf();
        Zf();
        gy = ae(Pt());
        ly();
        dy();
        ({
            ixElements: UD
        } = gy.IX2ElementsReducer), VD = (0, py.combineReducers)({
            ixData: xf,
            ixRequest: Kf,
            ixSession: Qf,
            ixElements: UD,
            ixInstances: cy,
            ixParameters: fy
        })
    });
    var Ey = c((VB, yy) => {
        var kD = Et(),
            HD = be(),
            XD = ct(),
            WD = "[object String]";

        function BD(e) {
            return typeof e == "string" || !HD(e) && XD(e) && kD(e) == WD
        }
        yy.exports = BD
    });
    var _y = c((kB, my) => {
        var jD = ha(),
            zD = jD("length");
        my.exports = zD
    });
    var Ty = c((HB, by) => {
        var KD = "\\ud800-\\udfff",
            YD = "\\u0300-\\u036f",
            $D = "\\ufe20-\\ufe2f",
            QD = "\\u20d0-\\u20ff",
            ZD = YD + $D + QD,
            JD = "\\ufe0e\\ufe0f",
            eF = "\\u200d",
            tF = RegExp("[" + eF + KD + ZD + JD + "]");

        function rF(e) {
            return tF.test(e)
        }
        by.exports = rF
    });
    var Ly = c((XB, Cy) => {
        var Oy = "\\ud800-\\udfff",
            nF = "\\u0300-\\u036f",
            iF = "\\ufe20-\\ufe2f",
            oF = "\\u20d0-\\u20ff",
            aF = nF + iF + oF,
            sF = "\\ufe0e\\ufe0f",
            uF = "[" + Oy + "]",
            Ba = "[" + aF + "]",
            ja = "\\ud83c[\\udffb-\\udfff]",
            cF = "(?:" + Ba + "|" + ja + ")",
            wy = "[^" + Oy + "]",
            Ay = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            xy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            lF = "\\u200d",
            Sy = cF + "?",
            Ry = "[" + sF + "]?",
            fF = "(?:" + lF + "(?:" + [wy, Ay, xy].join("|") + ")" + Ry + Sy + ")*",
            dF = Ry + Sy + fF,
            pF = "(?:" + [wy + Ba + "?", Ba, Ay, xy, uF].join("|") + ")",
            Iy = RegExp(ja + "(?=" + ja + ")|" + pF + dF, "g");

        function gF(e) {
            for (var t = Iy.lastIndex = 0; Iy.test(e);) ++t;
            return t
        }
        Cy.exports = gF
    });
    var Py = c((WB, Ny) => {
        var vF = _y(),
            hF = Ty(),
            yF = Ly();

        function EF(e) {
            return hF(e) ? yF(e) : vF(e)
        }
        Ny.exports = EF
    });
    var My = c((BB, qy) => {
        var mF = Gn(),
            _F = Un(),
            bF = St(),
            TF = Ey(),
            IF = Py(),
            OF = "[object Map]",
            wF = "[object Set]";

        function AF(e) {
            if (e == null) return 0;
            if (bF(e)) return TF(e) ? IF(e) : e.length;
            var t = _F(e);
            return t == OF || t == wF ? e.size : mF(e).length
        }
        qy.exports = AF
    });
    var Fy = c((jB, Dy) => {
        var xF = "Expected a function";

        function SF(e) {
            if (typeof e != "function") throw new TypeError(xF);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Dy.exports = SF
    });
    var za = c((zB, Gy) => {
        var RF = mt(),
            CF = function() {
                try {
                    var e = RF(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Gy.exports = CF
    });
    var Ka = c((KB, Vy) => {
        var Uy = za();

        function LF(e, t, r) {
            t == "__proto__" && Uy ? Uy(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Vy.exports = LF
    });
    var Hy = c((YB, ky) => {
        var NF = Ka(),
            PF = Sn(),
            qF = Object.prototype,
            MF = qF.hasOwnProperty;

        function DF(e, t, r) {
            var n = e[t];
            (!(MF.call(e, t) && PF(n, r)) || r === void 0 && !(t in e)) && NF(e, t, r)
        }
        ky.exports = DF
    });
    var By = c(($B, Wy) => {
        var FF = Hy(),
            GF = Gr(),
            UF = qn(),
            Xy = it(),
            VF = Zt();

        function kF(e, t, r, n) {
            if (!Xy(e)) return e;
            t = GF(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = VF(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var p = a[u];
                    f = n ? n(p, u, a) : void 0, f === void 0 && (f = Xy(p) ? p : UF(t[i + 1]) ? [] : {})
                }
                FF(a, u, f), a = a[u]
            }
            return e
        }
        Wy.exports = kF
    });
    var zy = c((QB, jy) => {
        var HF = Hn(),
            XF = By(),
            WF = Gr();

        function BF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = HF(e, s);
                r(a, s) && XF(o, WF(s, e), a)
            }
            return o
        }
        jy.exports = BF
    });
    var Yy = c((ZB, Ky) => {
        var jF = Nn(),
            zF = So(),
            KF = ta(),
            YF = ea(),
            $F = Object.getOwnPropertySymbols,
            QF = $F ? function(e) {
                for (var t = []; e;) jF(t, KF(e)), e = zF(e);
                return t
            } : YF;
        Ky.exports = QF
    });
    var Qy = c((JB, $y) => {
        function ZF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        $y.exports = ZF
    });
    var Jy = c((ej, Zy) => {
        var JF = it(),
            e2 = Fn(),
            t2 = Qy(),
            r2 = Object.prototype,
            n2 = r2.hasOwnProperty;

        function i2(e) {
            if (!JF(e)) return t2(e);
            var t = e2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !n2.call(e, n)) || r.push(n);
            return r
        }
        Zy.exports = i2
    });
    var tE = c((tj, eE) => {
        var o2 = na(),
            a2 = Jy(),
            s2 = St();

        function u2(e) {
            return s2(e) ? o2(e, !0) : a2(e)
        }
        eE.exports = u2
    });
    var nE = c((rj, rE) => {
        var c2 = Jo(),
            l2 = Yy(),
            f2 = tE();

        function d2(e) {
            return c2(e, f2, l2)
        }
        rE.exports = d2
    });
    var oE = c((nj, iE) => {
        var p2 = va(),
            g2 = _t(),
            v2 = zy(),
            h2 = nE();

        function y2(e, t) {
            if (e == null) return {};
            var r = p2(h2(e), function(n) {
                return [n]
            });
            return t = g2(t), v2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        iE.exports = y2
    });
    var sE = c((ij, aE) => {
        var E2 = _t(),
            m2 = Fy(),
            _2 = oE();

        function b2(e, t) {
            return _2(e, m2(E2(t)))
        }
        aE.exports = b2
    });
    var cE = c((oj, uE) => {
        var T2 = Gn(),
            I2 = Un(),
            O2 = Nr(),
            w2 = be(),
            A2 = St(),
            x2 = Pn(),
            S2 = Fn(),
            R2 = Dn(),
            C2 = "[object Map]",
            L2 = "[object Set]",
            N2 = Object.prototype,
            P2 = N2.hasOwnProperty;

        function q2(e) {
            if (e == null) return !0;
            if (A2(e) && (w2(e) || typeof e == "string" || typeof e.splice == "function" || x2(e) || R2(e) || O2(e))) return !e.length;
            var t = I2(e);
            if (t == C2 || t == L2) return !e.size;
            if (S2(e)) return !T2(e).length;
            for (var r in e)
                if (P2.call(e, r)) return !1;
            return !0
        }
        uE.exports = q2
    });
    var fE = c((aj, lE) => {
        var M2 = Ka(),
            D2 = Ma(),
            F2 = _t();

        function G2(e, t) {
            var r = {};
            return t = F2(t, 3), D2(e, function(n, i, o) {
                M2(r, i, t(n, i, o))
            }), r
        }
        lE.exports = G2
    });
    var pE = c((sj, dE) => {
        function U2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        dE.exports = U2
    });
    var vE = c((uj, gE) => {
        var V2 = Wn();

        function k2(e) {
            return typeof e == "function" ? e : V2
        }
        gE.exports = k2
    });
    var yE = c((cj, hE) => {
        var H2 = pE(),
            X2 = Da(),
            W2 = vE(),
            B2 = be();

        function j2(e, t) {
            var r = B2(e) ? H2 : X2;
            return r(e, W2(t))
        }
        hE.exports = j2
    });
    var mE = c((lj, EE) => {
        var z2 = Be(),
            K2 = function() {
                return z2.Date.now()
            };
        EE.exports = K2
    });
    var TE = c((fj, bE) => {
        var Y2 = it(),
            Ya = mE(),
            _E = Bn(),
            $2 = "Expected a function",
            Q2 = Math.max,
            Z2 = Math.min;

        function J2(e, t, r) {
            var n, i, o, s, a, u, f = 0,
                p = !1,
                d = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError($2);
            t = _E(t) || 0, Y2(r) && (p = !!r.leading, d = "maxWait" in r, o = d ? Q2(_E(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

            function E(N) {
                var B = n,
                    j = i;
                return n = i = void 0, f = N, s = e.apply(j, B), s
            }

            function y(N) {
                return f = N, a = setTimeout(O, t), p ? E(N) : s
            }

            function _(N) {
                var B = N - u,
                    j = N - f,
                    z = t - B;
                return d ? Z2(z, o - j) : z
            }

            function q(N) {
                var B = N - u,
                    j = N - f;
                return u === void 0 || B >= t || B < 0 || d && j >= o
            }

            function O() {
                var N = Ya();
                if (q(N)) return S(N);
                a = setTimeout(O, _(N))
            }

            function S(N) {
                return a = void 0, h && n ? E(N) : (n = i = void 0, s)
            }

            function w() {
                a !== void 0 && clearTimeout(a), f = 0, n = u = i = a = void 0
            }

            function L() {
                return a === void 0 ? s : S(Ya())
            }

            function P() {
                var N = Ya(),
                    B = q(N);
                if (n = arguments, i = this, u = N, B) {
                    if (a === void 0) return y(u);
                    if (d) return clearTimeout(a), a = setTimeout(O, t), E(u)
                }
                return a === void 0 && (a = setTimeout(O, t)), s
            }
            return P.cancel = w, P.flush = L, P
        }
        bE.exports = J2
    });
    var OE = c((dj, IE) => {
        var eG = TE(),
            tG = it(),
            rG = "Expected a function";

        function nG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(rG);
            return tG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), eG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        IE.exports = nG
    });
    var AE = {};
    Le(AE, {
        actionListPlaybackChanged: () => lr,
        animationFrameChanged: () => ui,
        clearRequested: () => SG,
        elementStateChanged: () => ns,
        eventListenerAdded: () => si,
        eventStateChanged: () => es,
        instanceAdded: () => ts,
        instanceRemoved: () => rs,
        instanceStarted: () => ci,
        mediaQueriesDefined: () => os,
        parameterChanged: () => cr,
        playbackRequested: () => AG,
        previewRequested: () => wG,
        rawDataImported: () => $a,
        sessionInitialized: () => Qa,
        sessionStarted: () => Za,
        sessionStopped: () => Ja,
        stopRequested: () => xG,
        testFrameRendered: () => RG,
        viewportWidthChanged: () => is
    });
    var wE, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, vG, hG, yG, EG, mG, _G, bG, TG, IG, OG, $a, Qa, Za, Ja, wG, AG, xG, SG, si, RG, es, ui, cr, ts, ci, rs, ns, lr, is, os, li = de(() => {
        "use strict";
        Ne();
        wE = ae(Pt()), {
            IX2_RAW_DATA_IMPORTED: iG,
            IX2_SESSION_INITIALIZED: oG,
            IX2_SESSION_STARTED: aG,
            IX2_SESSION_STOPPED: sG,
            IX2_PREVIEW_REQUESTED: uG,
            IX2_PLAYBACK_REQUESTED: cG,
            IX2_STOP_REQUESTED: lG,
            IX2_CLEAR_REQUESTED: fG,
            IX2_EVENT_LISTENER_ADDED: dG,
            IX2_TEST_FRAME_RENDERED: pG,
            IX2_EVENT_STATE_CHANGED: gG,
            IX2_ANIMATION_FRAME_CHANGED: vG,
            IX2_PARAMETER_CHANGED: hG,
            IX2_INSTANCE_ADDED: yG,
            IX2_INSTANCE_STARTED: EG,
            IX2_INSTANCE_REMOVED: mG,
            IX2_ELEMENT_STATE_CHANGED: _G,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: bG,
            IX2_VIEWPORT_WIDTH_CHANGED: TG,
            IX2_MEDIA_QUERIES_DEFINED: IG
        } = me, {
            reifyState: OG
        } = wE.IX2VanillaUtils, $a = e => ({
            type: iG,
            payload: { ...OG(e)
            }
        }), Qa = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: oG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Za = () => ({
            type: aG
        }), Ja = () => ({
            type: sG
        }), wG = ({
            rawData: e,
            defer: t
        }) => ({
            type: uG,
            payload: {
                defer: t,
                rawData: e
            }
        }), AG = ({
            actionTypeId: e = Fe.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: cG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), xG = e => ({
            type: lG,
            payload: {
                actionListId: e
            }
        }), SG = () => ({
            type: fG
        }), si = (e, t) => ({
            type: dG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), RG = (e = 1) => ({
            type: pG,
            payload: {
                step: e
            }
        }), es = (e, t) => ({
            type: gG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), ui = (e, t) => ({
            type: vG,
            payload: {
                now: e,
                parameters: t
            }
        }), cr = (e, t) => ({
            type: hG,
            payload: {
                key: e,
                value: t
            }
        }), ts = e => ({
            type: yG,
            payload: { ...e
            }
        }), ci = (e, t) => ({
            type: EG,
            payload: {
                instanceId: e,
                time: t
            }
        }), rs = e => ({
            type: mG,
            payload: {
                instanceId: e
            }
        }), ns = (e, t, r, n) => ({
            type: _G,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), lr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: bG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), is = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: TG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), os = () => ({
            type: IG
        })
    });
    var Re = {};
    Le(Re, {
        elementContains: () => us,
        getChildElements: () => UG,
        getClosestElement: () => Yr,
        getProperty: () => qG,
        getQuerySelector: () => ss,
        getRefType: () => cs,
        getSiblingElements: () => VG,
        getStyle: () => PG,
        getValidDocument: () => DG,
        isSiblingNode: () => GG,
        matchSelector: () => MG,
        queryDocument: () => FG,
        setStyle: () => NG
    });

    function NG(e, t, r) {
        e.style[t] = r
    }

    function PG(e, t) {
        return e.style[t]
    }

    function qG(e, t) {
        return e[t]
    }

    function MG(e) {
        return t => t[as](e)
    }

    function ss({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(xE) !== -1) {
                let n = e.split(xE),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(RE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function DG(e) {
        return e == null || e === document.documentElement.getAttribute(RE) ? document : null
    }

    function FG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function us(e, t) {
        return e.contains(t)
    }

    function GG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function UG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function VG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function cs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? CG : LG : null
    }
    var SE, as, xE, CG, LG, RE, Yr, CE = de(() => {
        "use strict";
        SE = ae(Pt());
        Ne();
        ({
            ELEMENT_MATCHES: as
        } = SE.IX2BrowserSupport), {
            IX2_ID_DELIMITER: xE,
            HTML_ELEMENT: CG,
            PLAIN_OBJECT: LG,
            WF_PAGE: RE
        } = Oe;
        Yr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[as] && r[as](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ls = c((vj, NE) => {
        var kG = it(),
            LE = Object.create,
            HG = function() {
                function e() {}
                return function(t) {
                    if (!kG(t)) return {};
                    if (LE) return LE(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        NE.exports = HG
    });
    var fi = c((hj, PE) => {
        function XG() {}
        PE.exports = XG
    });
    var pi = c((yj, qE) => {
        var WG = ls(),
            BG = fi();

        function di(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        di.prototype = WG(BG.prototype);
        di.prototype.constructor = di;
        qE.exports = di
    });
    var GE = c((Ej, FE) => {
        var ME = kt(),
            jG = Nr(),
            zG = be(),
            DE = ME ? ME.isConcatSpreadable : void 0;

        function KG(e) {
            return zG(e) || jG(e) || !!(DE && e && e[DE])
        }
        FE.exports = KG
    });
    var kE = c((mj, VE) => {
        var YG = Nn(),
            $G = GE();

        function UE(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = $G), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? UE(a, t - 1, r, n, i) : YG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        VE.exports = UE
    });
    var XE = c((_j, HE) => {
        var QG = kE();

        function ZG(e) {
            var t = e == null ? 0 : e.length;
            return t ? QG(e, 1) : []
        }
        HE.exports = ZG
    });
    var BE = c((bj, WE) => {
        function JG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        WE.exports = JG
    });
    var KE = c((Tj, zE) => {
        var eU = BE(),
            jE = Math.max;

        function tU(e, t, r) {
            return t = jE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = jE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), eU(e, this, a)
                }
        }
        zE.exports = tU
    });
    var $E = c((Ij, YE) => {
        function rU(e) {
            return function() {
                return e
            }
        }
        YE.exports = rU
    });
    var JE = c((Oj, ZE) => {
        var nU = $E(),
            QE = za(),
            iU = Wn(),
            oU = QE ? function(e, t) {
                return QE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: nU(t),
                    writable: !0
                })
            } : iU;
        ZE.exports = oU
    });
    var tm = c((wj, em) => {
        var aU = 800,
            sU = 16,
            uU = Date.now;

        function cU(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = uU(),
                    i = sU - (n - r);
                if (r = n, i > 0) {
                    if (++t >= aU) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        em.exports = cU
    });
    var nm = c((Aj, rm) => {
        var lU = JE(),
            fU = tm(),
            dU = fU(lU);
        rm.exports = dU
    });
    var om = c((xj, im) => {
        var pU = XE(),
            gU = KE(),
            vU = nm();

        function hU(e) {
            return vU(gU(e, void 0, pU), e + "")
        }
        im.exports = hU
    });
    var um = c((Sj, sm) => {
        var am = ia(),
            yU = am && new am;
        sm.exports = yU
    });
    var lm = c((Rj, cm) => {
        function EU() {}
        cm.exports = EU
    });
    var fs = c((Cj, dm) => {
        var fm = um(),
            mU = lm(),
            _U = fm ? function(e) {
                return fm.get(e)
            } : mU;
        dm.exports = _U
    });
    var gm = c((Lj, pm) => {
        var bU = {};
        pm.exports = bU
    });
    var ds = c((Nj, hm) => {
        var vm = gm(),
            TU = Object.prototype,
            IU = TU.hasOwnProperty;

        function OU(e) {
            for (var t = e.name + "", r = vm[t], n = IU.call(vm, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        hm.exports = OU
    });
    var vi = c((Pj, ym) => {
        var wU = ls(),
            AU = fi(),
            xU = 4294967295;

        function gi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = xU, this.__views__ = []
        }
        gi.prototype = wU(AU.prototype);
        gi.prototype.constructor = gi;
        ym.exports = gi
    });
    var mm = c((qj, Em) => {
        function SU(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        Em.exports = SU
    });
    var bm = c((Mj, _m) => {
        var RU = vi(),
            CU = pi(),
            LU = mm();

        function NU(e) {
            if (e instanceof RU) return e.clone();
            var t = new CU(e.__wrapped__, e.__chain__);
            return t.__actions__ = LU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        _m.exports = NU
    });
    var Om = c((Dj, Im) => {
        var PU = vi(),
            Tm = pi(),
            qU = fi(),
            MU = be(),
            DU = ct(),
            FU = bm(),
            GU = Object.prototype,
            UU = GU.hasOwnProperty;

        function hi(e) {
            if (DU(e) && !MU(e) && !(e instanceof PU)) {
                if (e instanceof Tm) return e;
                if (UU.call(e, "__wrapped__")) return FU(e)
            }
            return new Tm(e)
        }
        hi.prototype = qU.prototype;
        hi.prototype.constructor = hi;
        Im.exports = hi
    });
    var Am = c((Fj, wm) => {
        var VU = vi(),
            kU = fs(),
            HU = ds(),
            XU = Om();

        function WU(e) {
            var t = HU(e),
                r = XU[t];
            if (typeof r != "function" || !(t in VU.prototype)) return !1;
            if (e === r) return !0;
            var n = kU(r);
            return !!n && e === n[0]
        }
        wm.exports = WU
    });
    var Cm = c((Gj, Rm) => {
        var xm = pi(),
            BU = om(),
            jU = fs(),
            ps = ds(),
            zU = be(),
            Sm = Am(),
            KU = "Expected a function",
            YU = 8,
            $U = 32,
            QU = 128,
            ZU = 256;

        function JU(e) {
            return BU(function(t) {
                var r = t.length,
                    n = r,
                    i = xm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(KU);
                    if (i && !s && ps(o) == "wrapper") var s = new xm([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = ps(o),
                        u = a == "wrapper" ? jU(o) : void 0;
                    u && Sm(u[0]) && u[1] == (QU | YU | $U | ZU) && !u[4].length && u[9] == 1 ? s = s[ps(u[0])].apply(s, u[3]) : s = o.length == 1 && Sm(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var f = arguments,
                        p = f[0];
                    if (s && f.length == 1 && zU(p)) return s.plant(p).value();
                    for (var d = 0, h = r ? t[d].apply(this, f) : p; ++d < r;) h = t[d].call(this, h);
                    return h
                }
            })
        }
        Rm.exports = JU
    });
    var Nm = c((Uj, Lm) => {
        var eV = Cm(),
            tV = eV();
        Lm.exports = tV
    });
    var qm = c((Vj, Pm) => {
        function rV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Pm.exports = rV
    });
    var Dm = c((kj, Mm) => {
        var nV = qm(),
            gs = Bn();

        function iV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = gs(r), r = r === r ? r : 0), t !== void 0 && (t = gs(t), t = t === t ? t : 0), nV(gs(e), t, r)
        }
        Mm.exports = iV
    });
    var Bm, jm, zm, Km, oV, aV, sV, uV, cV, lV, fV, dV, pV, gV, vV, hV, yV, EV, mV, Ym, $m, _V, bV, TV, Qm, IV, OV, Zm, wV, vs, Jm, Fm, Gm, e_, Qr, AV, st, t_, xV, qe, Ke, Zr, r_, hs, Um, ys, SV, $r, RV, CV, LV, n_, Vm, NV, km, PV, qV, MV, Hm, yi, Ei, Xm, Wm, i_, o_ = de(() => {
        "use strict";
        Bm = ae(Nm()), jm = ae(Xn()), zm = ae(Dm());
        Ne();
        Es();
        li();
        Km = ae(Pt()), {
            MOUSE_CLICK: oV,
            MOUSE_SECOND_CLICK: aV,
            MOUSE_DOWN: sV,
            MOUSE_UP: uV,
            MOUSE_OVER: cV,
            MOUSE_OUT: lV,
            DROPDOWN_CLOSE: fV,
            DROPDOWN_OPEN: dV,
            SLIDER_ACTIVE: pV,
            SLIDER_INACTIVE: gV,
            TAB_ACTIVE: vV,
            TAB_INACTIVE: hV,
            NAVBAR_CLOSE: yV,
            NAVBAR_OPEN: EV,
            MOUSE_MOVE: mV,
            PAGE_SCROLL_DOWN: Ym,
            SCROLL_INTO_VIEW: $m,
            SCROLL_OUT_OF_VIEW: _V,
            PAGE_SCROLL_UP: bV,
            SCROLLING_IN_VIEW: TV,
            PAGE_FINISH: Qm,
            ECOMMERCE_CART_CLOSE: IV,
            ECOMMERCE_CART_OPEN: OV,
            PAGE_START: Zm,
            PAGE_SCROLL: wV
        } = je, vs = "COMPONENT_ACTIVE", Jm = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Fm
        } = Oe, {
            getNamespacedParameterId: Gm
        } = Km.IX2VanillaUtils, e_ = e => t => typeof t == "object" && e(t) ? !0 : t, Qr = e_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), AV = e_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), st = (0, Bm.default)([Qr, AV]), t_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !SV[i.eventTypeId]) return i
            }
            return null
        }, xV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!t_(e, n)
        }, qe = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, f = t_(e, u);
            return f && fr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Fm + n.split(Fm)[1],
                actionListId: (0, jm.default)(f, "action.config.actionListId")
            }), fr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), Jr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Zr = {
            handler: Ke(st, qe)
        }, r_ = { ...Zr,
            types: [vs, Jm].join(" ")
        }, hs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Um = "mouseover mouseout", ys = {
            types: hs
        }, SV = {
            PAGE_START: Zm,
            PAGE_FINISH: Qm
        }, $r = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, zm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), RV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), CV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, LV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = $r(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return RV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, n_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [vs, Jm].indexOf(n) !== -1 ? n === vs : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Vm = e => (t, r) => {
            let n = {
                elementHovered: CV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, NV = e => (t, r) => {
            let n = { ...r,
                elementVisible: LV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, km = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = $r(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = s, p = f === "PX", d = i - o, h = Number((n / d).toFixed(2));
            if (r && r.percentTop === h) return r;
            let E = (p ? u : o * (u || 0) / 100) / d,
                y, _, q = 0;
            r && (y = h > r.percentTop, _ = r.scrollingDown !== y, q = _ ? h : r.anchorTop);
            let O = a === Ym ? h >= q + E : h <= q - E,
                S = { ...r,
                    percentTop: h,
                    inBounds: O,
                    anchorTop: q,
                    scrollingDown: y
                };
            return r && O && (_ || S.inBounds !== r.inBounds) && e(t, S) || S
        }, PV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, qV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, MV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Hm = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, yi = (e = !0) => ({ ...r_,
            handler: Ke(e ? st : Qr, n_((t, r) => r.isActive ? Zr.handler(t, r) : r))
        }), Ei = (e = !0) => ({ ...r_,
            handler: Ke(e ? st : Qr, n_((t, r) => r.isActive ? r : Zr.handler(t, r)))
        }), Xm = { ...ys,
            handler: NV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === $m === r ? (qe(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Wm = .05, i_ = {
            [pV]: yi(),
            [gV]: Ei(),
            [dV]: yi(),
            [fV]: Ei(),
            [EV]: yi(!1),
            [yV]: Ei(!1),
            [vV]: yi(),
            [hV]: Ei(),
            [OV]: {
                types: "ecommerce-cart-open",
                handler: Ke(st, qe)
            },
            [IV]: {
                types: "ecommerce-cart-close",
                handler: Ke(st, qe)
            },
            [oV]: {
                types: "click",
                handler: Ke(st, Hm((e, {
                    clickCount: t
                }) => {
                    xV(e) ? t === 1 && qe(e) : qe(e)
                }))
            },
            [aV]: {
                types: "click",
                handler: Ke(st, Hm((e, {
                    clickCount: t
                }) => {
                    t === 2 && qe(e)
                }))
            },
            [sV]: { ...Zr,
                types: "mousedown"
            },
            [uV]: { ...Zr,
                types: "mouseup"
            },
            [cV]: {
                types: Um,
                handler: Ke(st, Vm((e, t) => {
                    t.elementHovered && qe(e)
                }))
            },
            [lV]: {
                types: Um,
                handler: Ke(st, Vm((e, t) => {
                    t.elementHovered || qe(e)
                }))
            },
            [mV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: p = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: h = o.clientY,
                        pageX: E = o.pageX,
                        pageY: y = o.pageY
                    } = n, _ = a === "X_AXIS", q = n.type === "mouseout", O = p / 100, S = u, w = !1;
                    switch (s) {
                        case nt.VIEWPORT:
                            {
                                O = _ ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case nt.PAGE:
                            {
                                let {
                                    scrollLeft: L,
                                    scrollTop: P,
                                    scrollWidth: N,
                                    scrollHeight: B
                                } = $r();O = _ ? Math.min(L + E, N) / N : Math.min(P + y, B) / B;
                                break
                            }
                        case nt.ELEMENT:
                        default:
                            {
                                S = Gm(i, u);
                                let L = n.type.indexOf("mouse") === 0;
                                if (L && st({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let P = t.getBoundingClientRect(),
                                    {
                                        left: N,
                                        top: B,
                                        width: j,
                                        height: z
                                    } = P;
                                if (!L && !PV({
                                        left: d,
                                        top: h
                                    }, P)) break;w = !0,
                                O = _ ? (d - N) / j : (h - B) / z;
                                break
                            }
                    }
                    return q && (O > 1 - Wm || O < Wm) && (O = Math.round(O)), (s !== nt.ELEMENT || w || w !== o.elementHovered) && (O = f ? 1 - O : O, e.dispatch(cr(S, O))), {
                        elementHovered: w,
                        clientX: d,
                        clientY: h,
                        pageX: E,
                        pageY: y
                    }
                }
            },
            [wV]: {
                types: hs,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = $r(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(cr(r, a))
                }
            },
            [TV]: {
                types: hs,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: f
                    } = $r(), {
                        basedOn: p,
                        selectedAxis: d,
                        continuousParameterGroupId: h,
                        startsEntering: E,
                        startsExiting: y,
                        addEndOffset: _,
                        addStartOffset: q,
                        addOffsetValue: O = 0,
                        endOffsetValue: S = 0
                    } = r, w = d === "X_AXIS";
                    if (p === nt.VIEWPORT) {
                        let L = w ? o / a : s / u;
                        return L !== i.scrollPercent && t.dispatch(cr(h, L)), {
                            scrollPercent: L
                        }
                    } else {
                        let L = Gm(n, h),
                            P = e.getBoundingClientRect(),
                            N = (q ? O : 0) / 100,
                            B = (_ ? S : 0) / 100;
                        N = E ? N : 1 - N, B = y ? B : 1 - B;
                        let j = P.top + Math.min(P.height * N, f),
                            Q = P.top + P.height * B - j,
                            U = Math.min(f + Q, u),
                            v = Math.min(Math.max(0, f - j), U) / U;
                        return v !== i.scrollPercent && t.dispatch(cr(L, v)), {
                            scrollPercent: v
                        }
                    }
                }
            },
            [$m]: Xm,
            [_V]: Xm,
            [Ym]: { ...ys,
                handler: km((e, t) => {
                    t.scrollingDown && qe(e)
                })
            },
            [bV]: { ...ys,
                handler: km((e, t) => {
                    t.scrollingDown || qe(e)
                })
            },
            [Qm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Qr, qV(qe))
            },
            [Zm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Qr, MV(qe))
            }
        }
    });
    var T_ = {};
    Le(T_, {
        observeRequests: () => tk,
        startActionGroup: () => Jr,
        startEngine: () => Oi,
        stopActionGroup: () => fr,
        stopAllActionGroups: () => m_,
        stopEngine: () => wi
    });

    function tk(e) {
        qt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: ik
        }), qt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: ok
        }), qt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: ak
        }), qt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: sk
        })
    }

    function rk(e) {
        qt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                wi(e), v_({
                    store: e,
                    elementApi: Re
                }), Oi({
                    store: e,
                    allowEvents: !0
                }), h_()
            }
        })
    }

    function nk(e, t) {
        let r = qt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function ik({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Oi({
                store: r,
                rawData: e,
                allowEvents: !0
            }), h_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function h_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function ok(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: p
        } = e;
        if (n && i && p && a) {
            let d = p.actionLists[n];
            d && (p = WV({
                actionList: d,
                actionItemId: i,
                rawData: p
            }))
        }
        if (Oi({
                store: t,
                rawData: p,
                allowEvents: s,
                testManual: u
            }), n && r === Fe.GENERAL_START_ACTION || ms(r)) {
            fr({
                store: t,
                actionListId: n
            }), E_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = Jr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: f
            });
            f && d && t.dispatch(lr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function ak({
        actionListId: e
    }, t) {
        e ? fr({
            store: t,
            actionListId: e
        }) : m_({
            store: t
        }), wi(t)
    }

    function sk(e, t) {
        wi(t), v_({
            store: t,
            elementApi: Re
        })
    }

    function Oi({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch($a(t)), i.active || (e.dispatch(Qa({
            hasBoundaryNodes: !!document.querySelector(_i),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (pk(e), uk(), e.getState().ixSession.hasDefinedMediaQueries && rk(e)), e.dispatch(Za()), ck(e, n))
    }

    function uk() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`)
    }

    function ck(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(ui(n, o)), t ? nk(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function wi(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(lk), KV(), e.dispatch(Ja())
        }
    }

    function lk({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function fk({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: p
        } = e.getState(), {
            events: d
        } = f, h = d[n], {
            eventTypeId: E
        } = h, y = {}, _ = {}, q = [], {
            continuousActionGroups: O
        } = s, {
            id: S
        } = s;
        BV(E, i) && (S = jV(t, S));
        let w = p.hasBoundaryNodes && r ? Yr(r, _i) : null;
        O.forEach(L => {
            let {
                keyframe: P,
                actionItems: N
            } = L;
            N.forEach(B => {
                let {
                    actionTypeId: j
                } = B, {
                    target: z
                } = B.config;
                if (!z) return;
                let Q = z.boundaryMode ? w : null,
                    U = YV(z) + _s + j;
                if (_[U] = dk(_[U], P, B), !y[U]) {
                    y[U] = !0;
                    let {
                        config: I
                    } = B;
                    bi({
                        config: I,
                        event: h,
                        eventTarget: r,
                        elementRoot: Q,
                        elementApi: Re
                    }).forEach(v => {
                        q.push({
                            element: v,
                            key: U
                        })
                    })
                }
            })
        }), q.forEach(({
            element: L,
            key: P
        }) => {
            let N = _[P],
                B = (0, pt.default)(N, "[0].actionItems[0]", {}),
                {
                    actionTypeId: j
                } = B,
                z = Ii(j) ? Ts(j)(L, B) : null,
                Q = bs({
                    element: L,
                    actionItem: B,
                    elementApi: Re
                }, z);
            Is({
                store: e,
                element: L,
                eventId: n,
                actionListId: o,
                actionItem: B,
                destination: Q,
                continuous: !0,
                parameterId: S,
                actionGroups: N,
                smoothing: a,
                restingValue: u,
                pluginInstance: z
            })
        })
    }

    function dk(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function pk(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        y_(e), (0, dr.default)(r, (i, o) => {
            let s = i_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            mk({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && vk(e)
    }

    function vk(e) {
        let t = () => {
            y_(e)
        };
        gk.forEach(r => {
            window.addEventListener(r, t), e.dispatch(si(window, [r, t]))
        }), t()
    }

    function y_(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(is({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function mk({
        logic: e,
        store: t,
        events: r
    }) {
        _k(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = hk(r, Ek);
        if (!(0, c_.default)(a)) return;
        (0, dr.default)(a, (d, h) => {
            let E = r[h],
                {
                    action: y,
                    id: _,
                    mediaQueries: q = o.mediaQueryKeys
                } = E,
                {
                    actionListId: O
                } = y.config;
            $V(q, o.mediaQueryKeys) || t.dispatch(os()), y.actionTypeId === Fe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(w => {
                let {
                    continuousParameterGroupId: L
                } = w, P = (0, pt.default)(s, `${O}.continuousParameterGroups`, []), N = (0, u_.default)(P, ({
                    id: z
                }) => z === L), B = (w.smoothing || 0) / 100, j = (w.restingState || 0) / 100;
                N && d.forEach((z, Q) => {
                    let U = _ + _s + Q;
                    fk({
                        store: t,
                        eventStateKey: U,
                        eventTarget: z,
                        eventId: _,
                        eventConfig: w,
                        actionListId: O,
                        parameterGroup: N,
                        smoothing: B,
                        restingValue: j
                    })
                })
            }), (y.actionTypeId === Fe.GENERAL_START_ACTION || ms(y.actionTypeId)) && E_({
                store: t,
                actionListId: O,
                eventId: _
            })
        });
        let u = d => {
                let {
                    ixSession: h
                } = t.getState();
                yk(a, (E, y, _) => {
                    let q = r[y],
                        O = h.eventState[_],
                        {
                            action: S,
                            mediaQueries: w = o.mediaQueryKeys
                        } = q;
                    if (!Ti(w, h.mediaQueryKey)) return;
                    let L = (P = {}) => {
                        let N = i({
                            store: t,
                            element: E,
                            event: q,
                            eventConfig: P,
                            nativeEvent: d,
                            eventStateKey: _
                        }, O);
                        QV(N, O) || t.dispatch(es(_, N))
                    };
                    S.actionTypeId === Fe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(L) : L()
                })
            },
            f = (0, p_.default)(u, ek),
            p = ({
                target: d = document,
                types: h,
                throttle: E
            }) => {
                h.split(" ").filter(Boolean).forEach(y => {
                    let _ = E ? f : u;
                    d.addEventListener(y, _), t.dispatch(si(d, [y, _]))
                })
            };
        Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
    }

    function _k(e) {
        if (!JV) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = ss(o);
            t[s] || (i === je.MOUSE_CLICK || i === je.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function E_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, pt.default)(u, "actionItemGroups[0].actionItems", []),
                p = (0, pt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ti(p, i.mediaQueryKey)) return;
            f.forEach(d => {
                let {
                    config: h,
                    actionTypeId: E
                } = d, y = h ? .target ? .useEventTarget === !0 && h ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : h, _ = bi({
                    config: y,
                    event: a,
                    elementApi: Re
                }), q = Ii(E);
                _.forEach(O => {
                    let S = q ? Ts(E)(O, d) : null;
                    Is({
                        destination: bs({
                            element: O,
                            actionItem: d,
                            elementApi: Re
                        }, S),
                        immediate: !0,
                        store: e,
                        element: O,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: S
                    })
                })
            })
        }
    }

    function m_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, dr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Os(r, e), i && e.dispatch(lr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function fr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? Yr(r, _i) : null;
        (0, dr.default)(o, u => {
            let f = (0, pt.default)(u, "actionItem.config.target.boundaryMode"),
                p = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && p) {
                if (a && f && !us(a, u.element)) return;
                Os(u, e), u.verbose && e.dispatch(lr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Jr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: p
        } = u, d = p[t] || {}, {
            mediaQueries: h = u.mediaQueryKeys
        } = d, E = (0, pt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: y,
            useFirstGroupAsInitialState: _
        } = E;
        if (!y || !y.length) return !1;
        o >= y.length && (0, pt.default)(d, "config.loop") && (o = 0), o === 0 && _ && o++;
        let O = (o === 0 || o === 1 && _) && ms(d.action ? .actionTypeId) ? d.config.delay : void 0,
            S = (0, pt.default)(y, [o, "actionItems"], []);
        if (!S.length || !Ti(h, f.mediaQueryKey)) return !1;
        let w = f.hasBoundaryNodes && r ? Yr(r, _i) : null,
            L = kV(S),
            P = !1;
        return S.forEach((N, B) => {
            let {
                config: j,
                actionTypeId: z
            } = N, Q = Ii(z), {
                target: U
            } = j;
            if (!U) return;
            let I = U.boundaryMode ? w : null;
            bi({
                config: j,
                event: d,
                eventTarget: r,
                elementRoot: I,
                elementApi: Re
            }).forEach((R, M) => {
                let G = Q ? Ts(z)(R, N) : null,
                    Z = Q ? ZV(z)(R, N) : null;
                P = !0;
                let J = L === B && M === 0,
                    D = HV({
                        element: R,
                        actionItem: N
                    }),
                    X = bs({
                        element: R,
                        actionItem: N,
                        elementApi: Re
                    }, G);
                Is({
                    store: e,
                    element: R,
                    actionItem: N,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: D,
                    destination: X,
                    immediate: s,
                    verbose: a,
                    pluginInstance: G,
                    pluginDuration: Z,
                    instanceDelay: O
                })
            })
        }), P
    }

    function Is(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: f,
            eventId: p
        } = n, d = !u, h = UV(), {
            ixElements: E,
            ixSession: y,
            ixData: _
        } = t.getState(), q = GV(E, i), {
            refState: O
        } = E[q] || {}, S = cs(i), w = y.reducedMotion && Bo[o.actionTypeId], L;
        if (w && u) switch (_.events[p] ? .eventTypeId) {
            case je.MOUSE_MOVE:
            case je.MOUSE_MOVE_IN_VIEWPORT:
                L = f;
                break;
            default:
                L = .5;
                break
        }
        let P = XV(i, O, r, o, Re, a);
        if (t.dispatch(ts({
                instanceId: h,
                elementId: q,
                origin: P,
                refType: S,
                skipMotion: w,
                skipToValue: L,
                ...n
            })), __(document.body, "ix2-animation-started", h), s) {
            bk(t, h);
            return
        }
        qt({
            store: t,
            select: ({
                ixInstances: N
            }) => N[h],
            onChange: b_
        }), d && t.dispatch(ci(h, y.tick))
    }

    function Os(e, t) {
        __(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === g_ && zV(o, n, Re), t.dispatch(rs(e.id))
    }

    function __(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function bk(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        b_(n[t], e)
    }

    function b_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: f,
            groupIndex: p,
            eventId: d,
            eventTarget: h,
            eventStateKey: E,
            actionListId: y,
            isCarrier: _,
            styleProp: q,
            verbose: O,
            pluginInstance: S
        } = e, {
            ixData: w,
            ixSession: L
        } = t.getState(), {
            events: P
        } = w, N = P[d] || {}, {
            mediaQueries: B = w.mediaQueryKeys
        } = N;
        if (Ti(B, L.mediaQueryKey) && (n || r || i)) {
            if (f || u === FV && i) {
                t.dispatch(ns(o, a, f, s));
                let {
                    ixElements: j
                } = t.getState(), {
                    ref: z,
                    refType: Q,
                    refState: U
                } = j[o] || {}, I = U && U[a];
                (Q === g_ || Ii(a)) && VV(z, U, I, d, s, q, Re, u, S)
            }
            if (i) {
                if (_) {
                    let j = Jr({
                        store: t,
                        eventId: d,
                        eventTarget: h,
                        eventStateKey: E,
                        actionListId: y,
                        groupIndex: p + 1,
                        verbose: O
                    });
                    O && !j && t.dispatch(lr({
                        actionListId: y,
                        isPlaying: !1
                    }))
                }
                Os(e, t)
            }
        }
    }
    var u_, pt, c_, l_, f_, d_, dr, p_, mi, DV, ms, _s, _i, g_, FV, a_, bi, GV, bs, qt, UV, VV, v_, kV, HV, XV, WV, BV, jV, Ti, zV, KV, YV, $V, QV, Ii, Ts, ZV, s_, JV, ek, gk, hk, yk, Ek, Es = de(() => {
        "use strict";
        u_ = ae(_a()), pt = ae(Xn()), c_ = ae(My()), l_ = ae(sE()), f_ = ae(cE()), d_ = ae(fE()), dr = ae(yE()), p_ = ae(OE());
        Ne();
        mi = ae(Pt());
        li();
        CE();
        o_();
        DV = Object.keys(Xo), ms = e => DV.includes(e), {
            COLON_DELIMITER: _s,
            BOUNDARY_SELECTOR: _i,
            HTML_ELEMENT: g_,
            RENDER_GENERAL: FV,
            W_MOD_IX: a_
        } = Oe, {
            getAffectedElements: bi,
            getElementId: GV,
            getDestinationValues: bs,
            observeStore: qt,
            getInstanceId: UV,
            renderHTMLElement: VV,
            clearAllStyles: v_,
            getMaxDurationItemIndex: kV,
            getComputedStyle: HV,
            getInstanceOrigin: XV,
            reduceListToGroup: WV,
            shouldNamespaceEventParameter: BV,
            getNamespacedParameterId: jV,
            shouldAllowMediaQuery: Ti,
            cleanupHTMLElement: zV,
            clearObjectCache: KV,
            stringifyTarget: YV,
            mediaQueriesEqual: $V,
            shallowEqual: QV
        } = mi.IX2VanillaUtils, {
            isPluginType: Ii,
            createPluginInstance: Ts,
            getPluginDuration: ZV
        } = mi.IX2VanillaPlugins, s_ = navigator.userAgent, JV = s_.match(/iPad/i) || s_.match(/iPhone/), ek = 12;
        gk = ["resize", "orientationchange"];
        hk = (e, t) => (0, l_.default)((0, d_.default)(e, t), f_.default), yk = (e, t) => {
            (0, dr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + _s + o;
                    t(i, n, s)
                })
            })
        }, Ek = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return bi({
                config: t,
                elementApi: Re
            })
        }
    });
    var O_ = c(gt => {
        "use strict";
        var Tk = ln().default,
            Ik = ou().default;
        Object.defineProperty(gt, "__esModule", {
            value: !0
        });
        gt.actions = void 0;
        gt.destroy = I_;
        gt.init = Sk;
        gt.setEnv = xk;
        gt.store = void 0;
        Wl();
        var Ok = ko(),
            wk = Ik((hy(), Je(vy))),
            ws = (Es(), Je(T_)),
            Ak = Tk((li(), Je(AE)));
        gt.actions = Ak;
        var As = gt.store = (0, Ok.createStore)(wk.default);

        function xk(e) {
            e() && (0, ws.observeRequests)(As)
        }

        function Sk(e) {
            I_(), (0, ws.startEngine)({
                store: As,
                rawData: e,
                allowEvents: !0
            })
        }

        function I_() {
            (0, ws.stopEngine)(As)
        }
    });
    var S_ = c(($j, x_) => {
        "use strict";
        var w_ = Me(),
            A_ = O_();
        A_.setEnv(w_.env);
        w_.define("ix2", x_.exports = function() {
            return A_
        })
    });
    var C_ = c((Qj, R_) => {
        "use strict";
        var pr = Me();
        pr.define("links", R_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = pr.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                p = /\/$/,
                d, h;
            r.ready = r.design = r.preview = E;

            function E() {
                i = o && pr.env("design"), h = pr.env("slug") || s.pathname || "", pr.scroll.off(_), d = [];
                for (var O = document.links, S = 0; S < O.length; ++S) y(O[S]);
                d.length && (pr.scroll.on(_), _())
            }

            function y(O) {
                var S = i && O.getAttribute("href-disabled") || O.getAttribute("href");
                if (a.href = S, !(S.indexOf(":") >= 0)) {
                    var w = e(O);
                    if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                        var L = e(a.hash);
                        L.length && d.push({
                            link: w,
                            sec: L,
                            active: !1
                        });
                        return
                    }
                    if (!(S === "#" || S === "")) {
                        var P = a.href === s.href || S === h || f.test(S) && p.test(h);
                        q(w, u, P)
                    }
                }
            }

            function _() {
                var O = n.scrollTop(),
                    S = n.height();
                t.each(d, function(w) {
                    var L = w.link,
                        P = w.sec,
                        N = P.offset().top,
                        B = P.outerHeight(),
                        j = S * .5,
                        z = P.is(":visible") && N + B - j >= O && N + j <= O + S;
                    w.active !== z && (w.active = z, q(L, u, z))
                })
            }

            function q(O, S, w) {
                var L = O.hasClass(S);
                w && L || !w && !L || (w ? O.addClass(S) : O.removeClass(S))
            }
            return r
        })
    });
    var N_ = c((Zj, L_) => {
        "use strict";
        var Ai = Me();
        Ai.define("scroll", L_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = y() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(I) {
                    window.setTimeout(I, 15)
                },
                u = Ai.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                p = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
                h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                E = document.createElement("style");
            E.appendChild(document.createTextNode(h));

            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function q(I) {
                return _.test(I.hash) && I.host + I.pathname === r.host + r.pathname
            }
            let O = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function S() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || O.matches
            }

            function w(I, v) {
                var R;
                switch (v) {
                    case "add":
                        R = I.attr("tabindex"), R ? I.attr("data-wf-tabindex-swap", R) : I.attr("tabindex", "-1");
                        break;
                    case "remove":
                        R = I.attr("data-wf-tabindex-swap"), R ? (I.attr("tabindex", R), I.removeAttr("data-wf-tabindex-swap")) : I.removeAttr("tabindex");
                        break
                }
                I.toggleClass("wf-force-outline-none", v === "add")
            }

            function L(I) {
                var v = I.currentTarget;
                if (!(Ai.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
                    var R = q(v) ? v.hash : "";
                    if (R !== "") {
                        var M = e(R);
                        M.length && (I && (I.preventDefault(), I.stopPropagation()), P(R, I), window.setTimeout(function() {
                            N(M, function() {
                                w(M, "add"), M.get(0).focus({
                                    preventScroll: !0
                                }), w(M, "remove")
                            })
                        }, I ? 0 : 300))
                    }
                }
            }

            function P(I) {
                if (r.hash !== I && n && n.pushState && !(Ai.env.chrome && r.protocol === "file:")) {
                    var v = n.state && n.state.hash;
                    v !== I && n.pushState({
                        hash: I
                    }, "", I)
                }
            }

            function N(I, v) {
                var R = i.scrollTop(),
                    M = B(I);
                if (R !== M) {
                    var G = j(I, R, M),
                        Z = Date.now(),
                        J = function() {
                            var D = Date.now() - Z;
                            window.scroll(0, z(R, M, D, G)), D <= G ? a(J) : typeof v == "function" && v()
                        };
                    a(J)
                }
            }

            function B(I) {
                var v = e(f),
                    R = v.css("position") === "fixed" ? v.outerHeight() : 0,
                    M = I.offset().top - R;
                if (I.data("scroll") === "mid") {
                    var G = i.height() - R,
                        Z = I.outerHeight();
                    Z < G && (M -= Math.round((G - Z) / 2))
                }
                return M
            }

            function j(I, v, R) {
                if (S()) return 0;
                var M = 1;
                return s.add(I).each(function(G, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (M = J)
                }), (472.143 * Math.log(Math.abs(v - R) + 125) - 2e3) * M
            }

            function z(I, v, R, M) {
                return R > M ? v : I + (v - I) * Q(R / M)
            }

            function Q(I) {
                return I < .5 ? 4 * I * I * I : (I - 1) * (2 * I - 2) * (2 * I - 2) + 1
            }

            function U() {
                var {
                    WF_CLICK_EMPTY: I,
                    WF_CLICK_SCROLL: v
                } = t;
                o.on(v, d, L), o.on(I, p, function(R) {
                    R.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: U
            }
        })
    });
    var q_ = c((Jj, P_) => {
        "use strict";
        var Rk = Me();
        Rk.define("touch", P_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, p;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", y, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", y, !1);

                function d(q) {
                    var O = q.touches;
                    O && O.length > 1 || (s = !0, O ? (a = !0, f = O[0].clientX) : f = q.clientX, p = f)
                }

                function h(q) {
                    if (s) {
                        if (a && q.type === "mousemove") {
                            q.preventDefault(), q.stopPropagation();
                            return
                        }
                        var O = q.touches,
                            S = O ? O[0].clientX : q.clientX,
                            w = S - p;
                        p = S, Math.abs(w) > u && r && String(r()) === "" && (i("swipe", q, {
                            direction: w > 0 ? "right" : "left"
                        }), y())
                    }
                }

                function E(q) {
                    if (s && (s = !1, a && q.type === "mouseup")) {
                        q.preventDefault(), q.stopPropagation(), a = !1;
                        return
                    }
                }

                function y() {
                    s = !1
                }

                function _() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", y, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", y, !1), o = null
                }
                this.destroy = _
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var F_ = c((ez, D_) => {
        "use strict";
        var Mt = Me(),
            Ck = cn(),
            Ye = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            M_ = !0,
            Lk = /^#[a-zA-Z0-9\-_]+$/;
        Mt.define("dropdown", D_.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Mt.env(),
                o = !1,
                s, a = Mt.env.touch,
                u = ".w-dropdown",
                f = "w--open",
                p = Ck.triggers,
                d = 900,
                h = "focusout" + u,
                E = "keydown" + u,
                y = "mouseenter" + u,
                _ = "mousemove" + u,
                q = "mouseleave" + u,
                O = (a ? "click" : "mouseup") + u,
                S = "w-close" + u,
                w = "setting" + u,
                L = e(document),
                P;
            n.ready = N, n.design = function() {
                o && v(), o = !1, N()
            }, n.preview = function() {
                o = !0, N()
            };

            function N() {
                s = i && Mt.env("design"), P = L.find(u), P.each(B)
            }

            function B(g, k) {
                var W = e(k),
                    C = e.data(k, u);
                C || (C = e.data(k, u, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), C.toggle = C.el.children(".w-dropdown-toggle"), C.list = C.el.children(".w-dropdown-list"), C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)"), C.complete = G(C), C.mouseLeave = J(C), C.mouseUpOutside = M(C), C.mouseMoveOutside = D(C), j(C);
                var ne = C.toggle.attr("id"),
                    Ee = C.list.attr("id");
                ne || (ne = "w-dropdown-toggle-" + g), Ee || (Ee = "w-dropdown-list-" + g), C.toggle.attr("id", ne), C.toggle.attr("aria-controls", Ee), C.toggle.attr("aria-haspopup", "menu"), C.toggle.attr("aria-expanded", "false"), C.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), C.toggle.prop("tagName") !== "BUTTON" && (C.toggle.attr("role", "button"), C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")), C.list.attr("id", Ee), C.list.attr("aria-labelledby", ne), C.links.each(function(Ge, $e) {
                    $e.hasAttribute("tabindex") || $e.setAttribute("tabindex", "0"), Lk.test($e.hash) && $e.addEventListener("click", I.bind(null, C))
                }), C.el.off(u), C.toggle.off(u), C.nav && C.nav.off(u);
                var se = Q(C, M_);
                s && C.el.on(w, z(C)), s || (i && (C.hovering = !1, I(C)), C.config.hover && C.toggle.on(y, Z(C)), C.el.on(S, se), C.el.on(E, X(C)), C.el.on(h, F(C)), C.toggle.on(O, se), C.toggle.on(E, V(C)), C.nav = C.el.closest(".w-nav"), C.nav.on(S, se))
            }

            function j(g) {
                var k = Number(g.el.css("z-index"));
                g.manageZ = k === d || k === d + 1, g.config = {
                    hover: g.el.attr("data-hover") === "true" && !a,
                    delay: g.el.attr("data-delay")
                }
            }

            function z(g) {
                return function(k, W) {
                    W = W || {}, j(g), W.open === !0 && U(g, !0), W.open === !1 && I(g, {
                        immediate: !0
                    })
                }
            }

            function Q(g, k) {
                return r(function(W) {
                    if (g.open || W && W.type === "w-close") return I(g, {
                        forceClose: k
                    });
                    U(g)
                })
            }

            function U(g) {
                if (!g.open) {
                    R(g), g.open = !0, g.list.addClass(f), g.toggle.addClass(f), g.toggle.attr("aria-expanded", "true"), p.intro(0, g.el[0]), Mt.redraw.up(), g.manageZ && g.el.css("z-index", d + 1);
                    var k = Mt.env("editor");
                    s || L.on(O, g.mouseUpOutside), g.hovering && !k && g.el.on(q, g.mouseLeave), g.hovering && k && L.on(_, g.mouseMoveOutside), window.clearTimeout(g.delayId)
                }
            }

            function I(g, {
                immediate: k,
                forceClose: W
            } = {}) {
                if (g.open && !(g.config.hover && g.hovering && !W)) {
                    g.toggle.attr("aria-expanded", "false"), g.open = !1;
                    var C = g.config;
                    if (p.outro(0, g.el[0]), L.off(O, g.mouseUpOutside), L.off(_, g.mouseMoveOutside), g.el.off(q, g.mouseLeave), window.clearTimeout(g.delayId), !C.delay || k) return g.complete();
                    g.delayId = window.setTimeout(g.complete, C.delay)
                }
            }

            function v() {
                L.find(u).each(function(g, k) {
                    e(k).triggerHandler(S)
                })
            }

            function R(g) {
                var k = g.el[0];
                P.each(function(W, C) {
                    var ne = e(C);
                    ne.is(k) || ne.has(k).length || ne.triggerHandler(S)
                })
            }

            function M(g) {
                return g.mouseUpOutside && L.off(O, g.mouseUpOutside), r(function(k) {
                    if (g.open) {
                        var W = e(k.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var C = e.inArray(g.el[0], W.parents(u)) === -1,
                                ne = Mt.env("editor");
                            if (C) {
                                if (ne) {
                                    var Ee = W.parents().length === 1 && W.parents("svg").length === 1,
                                        se = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (Ee || se) return
                                }
                                I(g)
                            }
                        }
                    }
                })
            }

            function G(g) {
                return function() {
                    g.list.removeClass(f), g.toggle.removeClass(f), g.manageZ && g.el.css("z-index", "")
                }
            }

            function Z(g) {
                return function() {
                    g.hovering = !0, U(g)
                }
            }

            function J(g) {
                return function() {
                    g.hovering = !1, g.links.is(":focus") || I(g)
                }
            }

            function D(g) {
                return r(function(k) {
                    if (g.open) {
                        var W = e(k.target),
                            C = e.inArray(g.el[0], W.parents(u)) === -1;
                        if (C) {
                            var ne = W.parents(".w-editor-bem-EditorHoverControls").length,
                                Ee = W.parents(".w-editor-bem-RTToolbar").length,
                                se = e(".w-editor-bem-EditorOverlay"),
                                Ge = se.find(".w-editor-edit-outline").length || se.find(".w-editor-bem-RTToolbar").length;
                            if (ne || Ee || Ge) return;
                            g.hovering = !1, I(g)
                        }
                    }
                })
            }

            function X(g) {
                return function(k) {
                    if (!(s || !g.open)) switch (g.selectedIdx = g.links.index(document.activeElement), k.keyCode) {
                        case Ye.HOME:
                            return g.open ? (g.selectedIdx = 0, K(g), k.preventDefault()) : void 0;
                        case Ye.END:
                            return g.open ? (g.selectedIdx = g.links.length - 1, K(g), k.preventDefault()) : void 0;
                        case Ye.ESCAPE:
                            return I(g), g.toggle.focus(), k.stopPropagation();
                        case Ye.ARROW_RIGHT:
                        case Ye.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), K(g), k.preventDefault();
                        case Ye.ARROW_LEFT:
                        case Ye.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), K(g), k.preventDefault()
                    }
                }
            }

            function K(g) {
                g.links[g.selectedIdx] && g.links[g.selectedIdx].focus()
            }

            function V(g) {
                var k = Q(g, M_);
                return function(W) {
                    if (!s) {
                        if (!g.open) switch (W.keyCode) {
                            case Ye.ARROW_UP:
                            case Ye.ARROW_DOWN:
                                return W.stopPropagation()
                        }
                        switch (W.keyCode) {
                            case Ye.SPACE:
                            case Ye.ENTER:
                                return k(), W.stopPropagation(), W.preventDefault()
                        }
                    }
                }
            }

            function F(g) {
                return r(function(k) {
                    var {
                        relatedTarget: W,
                        target: C
                    } = k, ne = g.el[0], Ee = ne.contains(W) || ne.contains(C);
                    return Ee || I(g), k.stopPropagation()
                })
            }
            return n
        })
    });
    var G_ = c(xs => {
        "use strict";
        Object.defineProperty(xs, "__esModule", {
            value: !0
        });
        xs.default = Nk;

        function Nk(e, t, r, n, i, o, s, a, u, f, p, d, h) {
            return function(E) {
                e(E);
                var y = E.form,
                    _ = {
                        name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                        pageId: y.attr("data-wf-page-id") || "",
                        elementId: y.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                        trackingCookies: n()
                    };
                let q = y.attr("data-wf-flow");
                q && (_.wfFlow = q), i(E);
                var O = o(y, _.fields);
                if (O) return s(O);
                if (_.fileUploads = a(y), u(E), !f) {
                    p(E);
                    return
                }
                d.ajax({
                    url: h,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(S) {
                    S && S.code === 200 && (E.success = !0), p(E)
                }).fail(function() {
                    p(E)
                })
            }
        }
    });
    var V_ = c((rz, U_) => {
        "use strict";
        var xi = Me();
        xi.define("forms", U_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, f = /e(-)?mail/i,
                p = /^\S+@\S+$/,
                d = window.alert,
                h = xi.env(),
                E, y, _, q = /list-manage[1-9]?.com/i,
                O = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                S(), !h && !E && L()
            };

            function S() {
                u = e("html").attr("data-wf-site"), y = "https://webflow.com/api/v1/form/" + u, s && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${y}/signFile`, i = e(a + " form"), i.length && i.each(w)
            }

            function w(D, X) {
                var K = e(X),
                    V = e.data(X, a);
                V || (V = e.data(X, a, {
                    form: K
                })), P(V);
                var F = K.closest("div.w-form");
                V.done = F.find("> .w-form-done"), V.fail = F.find("> .w-form-fail"), V.fileUploads = F.find(".w-file-upload"), V.fileUploads.each(function(W) {
                    G(W, V)
                });
                var g = V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
                V.done.attr("aria-label") || V.form.attr("aria-label", g), V.done.attr("tabindex", "-1"), V.done.attr("role", "region"), V.done.attr("aria-label") || V.done.attr("aria-label", g + " success"), V.fail.attr("tabindex", "-1"), V.fail.attr("role", "region"), V.fail.attr("aria-label") || V.fail.attr("aria-label", g + " failure");
                var k = V.action = K.attr("action");
                if (V.handler = null, V.redirect = K.attr("data-redirect"), q.test(k)) {
                    V.handler = v;
                    return
                }
                if (!k) {
                    if (u) {
                        V.handler = (() => {
                            let W = G_().default;
                            return W(P, o, xi, Q, M, B, d, j, N, u, R, e, y)
                        })();
                        return
                    }
                    O()
                }
            }

            function L() {
                E = !0, n.on("submit", a + " form", function(W) {
                    var C = e.data(this, a);
                    C.handler && (C.evt = W, C.handler(C))
                });
                let D = ".w-checkbox-input",
                    X = ".w-radio-input",
                    K = "w--redirected-checked",
                    V = "w--redirected-focus",
                    F = "w--redirected-focus-visible",
                    g = ":focus-visible, [data-wf-focus-visible]",
                    k = [
                        ["checkbox", D],
                        ["radio", X]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + D + ")", W => {
                    e(W.target).siblings(D).toggleClass(K)
                }), n.on("change", a + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${D})`).map((ne, Ee) => e(Ee).siblings(X).removeClass(K));
                    let C = e(W.target);
                    C.hasClass("w-radio-input") || C.siblings(X).addClass(K)
                }), k.forEach(([W, C]) => {
                    n.on("focus", a + ` form input[type="${W}"]:not(` + C + ")", ne => {
                        e(ne.target).siblings(C).addClass(V), e(ne.target).filter(g).siblings(C).addClass(F)
                    }), n.on("blur", a + ` form input[type="${W}"]:not(` + C + ")", ne => {
                        e(ne.target).siblings(C).removeClass(`${V} ${F}`)
                    })
                })
            }

            function P(D) {
                var X = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, X.prop("disabled", !1), D.label && X.val(D.label)
            }

            function N(D) {
                var X = D.btn,
                    K = D.wait;
                X.prop("disabled", !0), K && (D.label = X.val(), X.val(K))
            }

            function B(D, X) {
                var K = null;
                return X = X || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function(V, F) {
                    var g = e(F),
                        k = g.attr("type"),
                        W = g.attr("data-name") || g.attr("name") || "Field " + (V + 1),
                        C = g.val();
                    if (k === "checkbox") C = g.is(":checked");
                    else if (k === "radio") {
                        if (X[W] === null || typeof X[W] == "string") return;
                        C = D.find('input[name="' + g.attr("name") + '"]:checked').val() || null
                    }
                    typeof C == "string" && (C = e.trim(C)), X[W] = C, K = K || U(g, k, W, C)
                }), K
            }

            function j(D) {
                var X = {};
                return D.find(':input[type="file"]').each(function(K, V) {
                    var F = e(V),
                        g = F.attr("data-name") || F.attr("name") || "File " + (K + 1),
                        k = F.attr("data-value");
                    typeof k == "string" && (k = e.trim(k)), X[g] = k
                }), X
            }
            let z = {
                _mkto_trk: "marketo"
            };

            function Q() {
                return document.cookie.split("; ").reduce(function(X, K) {
                    let V = K.split("="),
                        F = V[0];
                    if (F in z) {
                        let g = z[F],
                            k = V.slice(1).join("=");
                        X[g] = k
                    }
                    return X
                }, {})
            }

            function U(D, X, K, V) {
                var F = null;
                return X === "password" ? F = "Passwords cannot be submitted." : D.attr("required") ? V ? f.test(D.attr("type")) && (p.test(V) || (F = "Please enter a valid email address for: " + K)) : F = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !V && (F = "Please confirm you\u2019re not a robot."), F
            }

            function I(D) {
                M(D), R(D)
            }

            function v(D) {
                P(D);
                var X = D.form,
                    K = {};
                if (/^https/.test(o.href) && !/^https/.test(D.action)) {
                    X.attr("method", "post");
                    return
                }
                M(D);
                var V = B(X, K);
                if (V) return d(V);
                N(D);
                var F;
                t.each(K, function(C, ne) {
                    f.test(ne) && (K.EMAIL = C), /^((full[ _-]?)?name)$/i.test(ne) && (F = C), /^(first[ _-]?name)$/i.test(ne) && (K.FNAME = C), /^(last[ _-]?name)$/i.test(ne) && (K.LNAME = C)
                }), F && !K.FNAME && (F = F.split(" "), K.FNAME = F[0], K.LNAME = K.LNAME || F[1]);
                var g = D.action.replace("/post?", "/post-json?") + "&c=?",
                    k = g.indexOf("u=") + 2;
                k = g.substring(k, g.indexOf("&", k));
                var W = g.indexOf("id=") + 3;
                W = g.substring(W, g.indexOf("&", W)), K["b_" + k + "_" + W] = "", e.ajax({
                    url: g,
                    data: K,
                    dataType: "jsonp"
                }).done(function(C) {
                    D.success = C.result === "success" || /already/.test(C.msg), D.success || console.info("MailChimp error: " + C.msg), R(D)
                }).fail(function() {
                    R(D)
                })
            }

            function R(D) {
                var X = D.form,
                    K = D.redirect,
                    V = D.success;
                if (V && K) {
                    xi.location(K);
                    return
                }
                D.done.toggle(V), D.fail.toggle(!V), V ? D.done.focus() : D.fail.focus(), X.toggle(!V), P(D)
            }

            function M(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function G(D, X) {
                if (!X.fileUploads || !X.fileUploads[D]) return;
                var K, V = e(X.fileUploads[D]),
                    F = V.find("> .w-file-upload-default"),
                    g = V.find("> .w-file-upload-uploading"),
                    k = V.find("> .w-file-upload-success"),
                    W = V.find("> .w-file-upload-error"),
                    C = F.find(".w-file-upload-input"),
                    ne = F.find(".w-file-upload-label"),
                    Ee = ne.children(),
                    se = W.find(".w-file-upload-error-msg"),
                    Ge = k.find(".w-file-upload-file"),
                    $e = k.find(".w-file-remove-link"),
                    gr = Ge.find(".w-file-upload-file-name"),
                    vr = se.attr("data-w-size-error"),
                    Qe = se.attr("data-w-type-error"),
                    Si = se.attr("data-w-generic-error");
                if (h || ne.on("click keydown", function(b) {
                        b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(), C.click())
                    }), ne.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), $e.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) C.on("click", function(b) {
                    b.preventDefault()
                }), ne.on("click", function(b) {
                    b.preventDefault()
                }), Ee.on("click", function(b) {
                    b.preventDefault()
                });
                else {
                    $e.on("click keydown", function(b) {
                        if (b.type === "keydown") {
                            if (b.which !== 13 && b.which !== 32) return;
                            b.preventDefault()
                        }
                        C.removeAttr("data-value"), C.val(""), gr.html(""), F.toggle(!0), k.toggle(!1), ne.focus()
                    }), C.on("change", function(b) {
                        K = b.target && b.target.files && b.target.files[0], K && (F.toggle(!1), W.toggle(!1), g.toggle(!0), g.focus(), gr.text(K.name), A() || N(X), X.fileUploads[D].uploading = !0, Z(K, m))
                    });
                    var en = ne.outerHeight();
                    C.height(en), C.width(1)
                }

                function l(b) {
                    var x = b.responseJSON && b.responseJSON.msg,
                        Y = Si;
                    typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? Y = Qe : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (Y = vr), se.text(Y), C.removeAttr("data-value"), C.val(""), g.toggle(!1), F.toggle(!0), W.toggle(!0), W.focus(), X.fileUploads[D].uploading = !1, A() || P(X)
                }

                function m(b, x) {
                    if (b) return l(b);
                    var Y = x.fileName,
                        te = x.postData,
                        le = x.fileId,
                        H = x.s3Url;
                    C.attr("data-value", le), J(H, te, K, Y, T)
                }

                function T(b) {
                    if (b) return l(b);
                    g.toggle(!1), k.css("display", "inline-block"), k.focus(), X.fileUploads[D].uploading = !1, A() || P(X)
                }

                function A() {
                    var b = X.fileUploads && X.fileUploads.toArray() || [];
                    return b.some(function(x) {
                        return x.uploading
                    })
                }
            }

            function Z(D, X) {
                var K = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${K}`,
                    crossDomain: !0
                }).done(function(V) {
                    X(null, V)
                }).fail(function(V) {
                    X(V)
                })
            }

            function J(D, X, K, V, F) {
                var g = new FormData;
                for (var k in X) g.append(k, X[k]);
                g.append("file", K, V), e.ajax({
                    type: "POST",
                    url: D,
                    data: g,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    F(null)
                }).fail(function(W) {
                    F(W)
                })
            }
            return r
        })
    });
    var H_ = c((nz, k_) => {
        "use strict";
        var It = Me(),
            Pk = cn();
        It.define("tabs", k_.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, s = It.env,
                a = s.safari,
                u = s(),
                f = "data-w-tab",
                p = "data-w-pane",
                d = ".w-tabs",
                h = "w--current",
                E = "w--tab-active",
                y = Pk.triggers,
                _ = !1;
            t.ready = t.design = t.preview = q, t.redraw = function() {
                _ = !0, q(), _ = !1
            }, t.destroy = function() {
                i = n.find(d), i.length && (i.each(w), O())
            };

            function q() {
                o = u && It.env("design"), i = n.find(d), i.length && (i.each(L), It.env("preview") && !_ && i.each(w), O(), S())
            }

            function O() {
                It.redraw.off(t.redraw)
            }

            function S() {
                It.redraw.on(t.redraw)
            }

            function w(U, I) {
                var v = e.data(I, d);
                v && (v.links && v.links.each(y.reset), v.panes && v.panes.each(y.reset))
            }

            function L(U, I) {
                var v = d.substr(1) + "-" + U,
                    R = e(I),
                    M = e.data(I, d);
                if (M || (M = e.data(I, d, {
                        el: R,
                        config: {}
                    })), M.current = null, M.tabIdentifier = v + "-" + f, M.paneIdentifier = v + "-" + p, M.menu = R.children(".w-tab-menu"), M.links = M.menu.children(".w-tab-link"), M.content = R.children(".w-tab-content"), M.panes = M.content.children(".w-tab-pane"), M.el.off(d), M.links.off(d), M.menu.attr("role", "tablist"), M.links.attr("tabindex", "-1"), P(M), !o) {
                    M.links.on("click" + d, B(M)), M.links.on("keydown" + d, j(M));
                    var G = M.links.filter("." + h),
                        Z = G.attr(f);
                    Z && z(M, {
                        tab: Z,
                        immediate: !0
                    })
                }
            }

            function P(U) {
                var I = {};
                I.easing = U.el.attr("data-easing") || "ease";
                var v = parseInt(U.el.attr("data-duration-in"), 10);
                v = I.intro = v === v ? v : 0;
                var R = parseInt(U.el.attr("data-duration-out"), 10);
                R = I.outro = R === R ? R : 0, I.immediate = !v && !R, U.config = I
            }

            function N(U) {
                var I = U.current;
                return Array.prototype.findIndex.call(U.links, v => v.getAttribute(f) === I, null)
            }

            function B(U) {
                return function(I) {
                    I.preventDefault();
                    var v = I.currentTarget.getAttribute(f);
                    v && z(U, {
                        tab: v
                    })
                }
            }

            function j(U) {
                return function(I) {
                    var v = N(U),
                        R = I.key,
                        M = {
                            ArrowLeft: v - 1,
                            ArrowUp: v - 1,
                            ArrowRight: v + 1,
                            ArrowDown: v + 1,
                            End: U.links.length - 1,
                            Home: 0
                        };
                    if (R in M) {
                        I.preventDefault();
                        var G = M[R];
                        G === -1 && (G = U.links.length - 1), G === U.links.length && (G = 0);
                        var Z = U.links[G],
                            J = Z.getAttribute(f);
                        J && z(U, {
                            tab: J
                        })
                    }
                }
            }

            function z(U, I) {
                I = I || {};
                var v = U.config,
                    R = v.easing,
                    M = I.tab;
                if (M !== U.current) {
                    U.current = M;
                    var G;
                    U.links.each(function(F, g) {
                        var k = e(g);
                        if (I.immediate || v.immediate) {
                            var W = U.panes[F];
                            g.id || (g.id = U.tabIdentifier + "-" + F), W.id || (W.id = U.paneIdentifier + "-" + F), g.href = "#" + W.id, g.setAttribute("role", "tab"), g.setAttribute("aria-controls", W.id), g.setAttribute("aria-selected", "false"), W.setAttribute("role", "tabpanel"), W.setAttribute("aria-labelledby", g.id)
                        }
                        g.getAttribute(f) === M ? (G = g, k.addClass(h).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(y.intro)) : k.hasClass(h) && k.removeClass(h).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(y.outro)
                    });
                    var Z = [],
                        J = [];
                    U.panes.each(function(F, g) {
                        var k = e(g);
                        g.getAttribute(f) === M ? Z.push(g) : k.hasClass(E) && J.push(g)
                    });
                    var D = e(Z),
                        X = e(J);
                    if (I.immediate || v.immediate) {
                        D.addClass(E).each(y.intro), X.removeClass(E), _ || It.redraw.up();
                        return
                    } else {
                        var K = window.scrollX,
                            V = window.scrollY;
                        G.focus(), window.scrollTo(K, V)
                    }
                    X.length && v.outro ? (X.each(y.outro), r(X).add("opacity " + v.outro + "ms " + R, {
                        fallback: a
                    }).start({
                        opacity: 0
                    }).then(() => Q(v, X, D))) : Q(v, X, D)
                }
            }

            function Q(U, I, v) {
                if (I.removeClass(E).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), v.addClass(E).each(y.intro), It.redraw.up(), !U.intro) return r(v).set({
                    opacity: 1
                });
                r(v).set({
                    opacity: 0
                }).redraw().add("opacity " + U.intro + "ms " + U.easing, {
                    fallback: a
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Rs();
    Cs();
    Xs();
    Bs();
    zs();
    $s();
    cn();
    S_();
    C_();
    N_();
    q_();
    F_();
    V_();
    H_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea827",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea827",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676538105739
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537946340
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea80c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea80c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537948567
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea81e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537946340
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea827",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea827",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676538105739
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea803",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea803",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676534496870
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea815",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea815",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537947982
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea803",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea803",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676534496870
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea815",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea815",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537947982
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea80c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e4456cf36f56d909724f21|43f9af70-693b-8a25-f7e9-3d569f2ea80c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676537948567
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".big-text_section",
                "originalId": "64e444bae911b3d3a74c9a70|c2521e37-49fc-a1f8-a5d8-281125ace49e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".big-text_section",
                "originalId": "64e444bae911b3d3a74c9a70|c2521e37-49fc-a1f8-a5d8-281125ace49e",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692694292759
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|faea86de-ec62-6c20-f356-a066ac002eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|faea86de-ec62-6c20-f356-a066ac002eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692873884904
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|faea86de-ec62-6c20-f356-a066ac002eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|faea86de-ec62-6c20-f356-a066ac002eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692873884904
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|1d0a9059-9475-9bce-e129-88f3c3182a4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|1d0a9059-9475-9bce-e129-88f3c3182a4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875778562
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|1d0a9059-9475-9bce-e129-88f3c3182a4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|1d0a9059-9475-9bce-e129-88f3c3182a4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875778562
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|7ba167eb-5ff7-74cb-7d2c-269a6ae3c8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|7ba167eb-5ff7-74cb-7d2c-269a6ae3c8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875785812
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|7ba167eb-5ff7-74cb-7d2c-269a6ae3c8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|7ba167eb-5ff7-74cb-7d2c-269a6ae3c8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875785812
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|db8f68c5-e01d-0686-4e70-d71c8fd179dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|db8f68c5-e01d-0686-4e70-d71c8fd179dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875786429
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|db8f68c5-e01d-0686-4e70-d71c8fd179dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|db8f68c5-e01d-0686-4e70-d71c8fd179dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692875786429
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693066947626
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|097f44e4-a637-c467-5c78-10f9c24d20e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|097f44e4-a637-c467-5c78-10f9c24d20e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373661771
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|097f44e4-a637-c467-5c78-10f9c24d20e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|097f44e4-a637-c467-5c78-10f9c24d20e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373661772
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|e901b21d-1bbe-ef27-d573-8c4b6c11ebd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|e901b21d-1bbe-ef27-d573-8c4b6c11ebd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373729737
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|e901b21d-1bbe-ef27-d573-8c4b6c11ebd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|e901b21d-1bbe-ef27-d573-8c4b6c11ebd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373729738
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|698fa9e4-b8a4-000d-cc0b-878783bbb2c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|698fa9e4-b8a4-000d-cc0b-878783bbb2c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373786870
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|698fa9e4-b8a4-000d-cc0b-878783bbb2c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|698fa9e4-b8a4-000d-cc0b-878783bbb2c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373786871
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|06577208-b4ce-b113-63ec-013fc527522f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|06577208-b4ce-b113-63ec-013fc527522f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373813093
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|06577208-b4ce-b113-63ec-013fc527522f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|06577208-b4ce-b113-63ec-013fc527522f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693373813093
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|7ad4a572-34c1-a748-c89b-b36a4254dded",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|7ad4a572-34c1-a748-c89b-b36a4254dded",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693381412156
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|7ad4a572-34c1-a748-c89b-b36a4254dded",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|7ad4a572-34c1-a748-c89b-b36a4254dded",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693381412156
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64eb8e9a19b3764ab925a50e|54cde8ae-7964-2eda-c0e0-8884a7e1f583",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8e9a19b3764ab925a50e|54cde8ae-7964-2eda-c0e0-8884a7e1f583",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693391089983
        },
        "e-42": {
            "id": "e-42",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|0b86ee7a-ebfb-b3f6-7338-f7093e6cf845",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|0b86ee7a-ebfb-b3f6-7338-f7093e6cf845",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1557234190062
        },
        "e-43": {
            "id": "e-43",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|0b86ee7a-ebfb-b3f6-7338-f7093e6cf845",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|0b86ee7a-ebfb-b3f6-7338-f7093e6cf845",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1557234190064
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|788852a8-b0be-52c6-47d8-582ff30a7742",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|788852a8-b0be-52c6-47d8-582ff30a7742",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693401905764
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|788852a8-b0be-52c6-47d8-582ff30a7742",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|788852a8-b0be-52c6-47d8-582ff30a7742",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693401905764
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|de7b3356-c80f-6e41-e447-d8becab405c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|de7b3356-c80f-6e41-e447-d8becab405c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693401906898
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|de7b3356-c80f-6e41-e447-d8becab405c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|de7b3356-c80f-6e41-e447-d8becab405c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693401906898
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|21c41087-4099-ae61-af78-04bf909c0c56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|21c41087-4099-ae61-af78-04bf909c0c56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693460517864
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|21c41087-4099-ae61-af78-04bf909c0c56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|21c41087-4099-ae61-af78-04bf909c0c56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693460517865
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|dad10712-f855-4cd7-85a3-a9f5faf27de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|dad10712-f855-4cd7-85a3-a9f5faf27de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693460954754
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|dad10712-f855-4cd7-85a3-a9f5faf27de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|dad10712-f855-4cd7-85a3-a9f5faf27de4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693460954754
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|4e8f4a27-9203-eb76-9e63-579314ecb1e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|4e8f4a27-9203-eb76-9e63-579314ecb1e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461118251
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|4e8f4a27-9203-eb76-9e63-579314ecb1e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|4e8f4a27-9203-eb76-9e63-579314ecb1e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461118252
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|d90b509a-db7c-78d9-4394-2416eebb33d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|d90b509a-db7c-78d9-4394-2416eebb33d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461306773
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|d90b509a-db7c-78d9-4394-2416eebb33d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|d90b509a-db7c-78d9-4394-2416eebb33d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461306773
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "322fdcdb-b3d0-d3c8-5a0b-efaa161fe1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "322fdcdb-b3d0-d3c8-5a0b-efaa161fe1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461580519
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "322fdcdb-b3d0-d3c8-5a0b-efaa161fe1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "322fdcdb-b3d0-d3c8-5a0b-efaa161fe1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693461580520
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "15d8bb18-e367-6acb-5077-872eb1589765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "15d8bb18-e367-6acb-5077-872eb1589765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693471625754
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e8f36c3e2ab664078324d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e8f36c3e2ab664078324d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693472161809
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8e9a19b3764ab925a50e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8e9a19b3764ab925a50e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693472745042
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686061363599
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686061363599
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693477626967
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693477626967
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693477627462
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693477627462
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-42-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693730025509
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|bd48c12d-5d8a-3022-499e-4c8d8856c821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|bd48c12d-5d8a-3022-499e-4c8d8856c821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693732142315
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|1c8c6ca5-1cac-d432-22a8-d77792447112",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|1c8c6ca5-1cac-d432-22a8-d77792447112",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693737327236
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|93be2abc-93cf-2cea-7a7f-835accad7395",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|93be2abc-93cf-2cea-7a7f-835accad7395",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693737327775
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|877e0747-c70a-61df-1765-80275d77b43d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|877e0747-c70a-61df-1765-80275d77b43d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693737328429
        },
        "e-87": {
            "id": "e-87",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {
                        "64f4aab6bfb0eee685bae249|cb52ffbb-8c83-5caf-d80f-bee1fa359a57": {
                            "id": "64e444bae911b3d3a74c9a70|02537129-bc6e-f14d-6f0f-ca5d0b9bfc0d"
                        }
                    },
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|02537129-bc6e-f14d-6f0f-ca5d0b9bfc0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|02537129-bc6e-f14d-6f0f-ca5d0b9bfc0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1511905791421
        },
        "e-88": {
            "id": "e-88",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70|02537129-bc6e-f14d-6f0f-ca5d0b9bfc0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70|02537129-bc6e-f14d-6f0f-ca5d0b9bfc0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1511905791421
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link.mob",
                "originalId": "11f123dd-1fe7-53c3-2311-332eb77760a2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link.mob",
                "originalId": "11f123dd-1fe7-53c3-2311-332eb77760a2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693759098668
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link.mob",
                "originalId": "11f123dd-1fe7-53c3-2311-332eb77760a2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link.mob",
                "originalId": "11f123dd-1fe7-53c3-2311-332eb77760a2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693759098708
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64eb8e9a19b3764ab925a50e|f8b71a5c-8a69-de42-e71b-1ab543c7706e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8e9a19b3764ab925a50e|f8b71a5c-8a69-de42-e71b-1ab543c7706e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693923226243
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|fe1b6238-755e-40a9-34d2-3338baaeb6ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|fe1b6238-755e-40a9-34d2-3338baaeb6ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693926220317
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64eb8eb16f778a04b8c2dba5|fe1b6238-755e-40a9-34d2-3338baaeb6ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64eb8eb16f778a04b8c2dba5|fe1b6238-755e-40a9-34d2-3338baaeb6ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693926220318
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|0263feb0-163a-92e9-84d2-dc10c0ad4b97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|0263feb0-163a-92e9-84d2-dc10c0ad4b97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693927668117
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|0263feb0-163a-92e9-84d2-dc10c0ad4b97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|0263feb0-163a-92e9-84d2-dc10c0ad4b97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693927668117
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|aa658ea4-f954-e888-6294-ae07f9c974be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|aa658ea4-f954-e888-6294-ae07f9c974be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693928196710
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|aa658ea4-f954-e888-6294-ae07f9c974be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|aa658ea4-f954-e888-6294-ae07f9c974be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693928196710
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|a42c0b6d-aca6-1038-106b-855b9ed68306",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|a42c0b6d-aca6-1038-106b-855b9ed68306",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693928197362
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e710bd588b7012d7199f13|a42c0b6d-aca6-1038-106b-855b9ed68306",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e710bd588b7012d7199f13|a42c0b6d-aca6-1038-106b-855b9ed68306",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693928197362
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "490fd429-180a-0a63-77ba-c61ab37943aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "490fd429-180a-0a63-77ba-c61ab37943aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671101710825
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "490fd429-180a-0a63-77ba-c61ab37943ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "490fd429-180a-0a63-77ba-c61ab37943ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671095380158
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-2",
                "originalId": "0a373c68-19d2-7b08-5e6d-dcf9435908f0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-2",
                "originalId": "0a373c68-19d2-7b08-5e6d-dcf9435908f0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671097817428
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0a373c68-19d2-7b08-5e6d-dcf943590903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0a373c68-19d2-7b08-5e6d-dcf943590903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671100277888
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64e8f36c3e2ab664078324d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e8f36c3e2ab664078324d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-52-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1693939614750
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693992092613
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".trigger",
                "originalId": "64e444bae911b3d3a74c9a70|4de470bc-bc92-fb14-efe9-c7574cf29c0e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".trigger",
                "originalId": "64e444bae911b3d3a74c9a70|4de470bc-bc92-fb14-efe9-c7574cf29c0e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1655152395673
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e444bae911b3d3a74c9a70",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693995310080
        }
    },
    "actionLists": {
        "a-2": {
            "id": "a-2",
            "title": "accordian-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062e5"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062d3"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd606306"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1676536476711
        },
        "a": {
            "id": "a",
            "title": "accordian-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062e5"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd606306"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062d3"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062e5"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".close-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062d3"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-icon",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd606306"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1676534506738
        },
        "a-3": {
            "id": "a-3",
            "title": "big-text-animation",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".big-text-fill-wrap",
                                "selectorGuids": ["c7e2fefa-8175-d261-9bb0-7afd117b4853"]
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".big-text-fill-wrap",
                                "selectorGuids": ["c7e2fefa-8175-d261-9bb0-7afd117b4853"]
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1692694328125
        },
        "a-4": {
            "id": "a-4",
            "title": "Shop Hover Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692873889634
        },
        "a-5": {
            "id": "a-5",
            "title": "Shop Hover Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692873889634
        },
        "a-6": {
            "id": "a-6",
            "title": "nav-bar",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "15d8bb18-e367-6acb-5077-872eb1589765"
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 3,
                    "actionItems": [{
                        "id": "a-6-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "15d8bb18-e367-6acb-5077-872eb1589765"
                            },
                            "globalSwatchId": "207513b5",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "15d8bb18-e367-6acb-5077-872eb1589765"
                            },
                            "globalSwatchId": "207513b5",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1693066954764
        },
        "a-7": {
            "id": "a-7",
            "title": "projects-card-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._2",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "039df025-3050-6608-41ba-4f8204a92249"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|58968594-63b6-c35b-9a49-b8c934c39660"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|a45e269b-691a-93eb-fa8f-8b1e5b0ea5ef"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._2",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "039df025-3050-6608-41ba-4f8204a92249"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|a45e269b-691a-93eb-fa8f-8b1e5b0ea5ef"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|a45e269b-691a-93eb-fa8f-8b1e5b0ea5ef"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|58968594-63b6-c35b-9a49-b8c934c39660"
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71a"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4818"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fb"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693151560429
        },
        "a-8": {
            "id": "a-8",
            "title": "projects-card-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._2",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "039df025-3050-6608-41ba-4f8204a92249"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|a45e269b-691a-93eb-fa8f-8b1e5b0ea5ef"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|58968594-63b6-c35b-9a49-b8c934c39660"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693151560429
        },
        "a-9": {
            "id": "a-9",
            "title": "projects-card-open 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71a"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "xValue": -60,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71a"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|58968594-63b6-c35b-9a49-b8c934c39660"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4818"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fb"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693151560429
        },
        "a-10": {
            "id": "a-10",
            "title": "projects-card-close 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._3",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "6226ecf4-ecab-1097-91ed-b1bc65840e3d"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|a45e269b-691a-93eb-fa8f-8b1e5b0ea5ef"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|58968594-63b6-c35b-9a49-b8c934c39660"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693151560429
        },
        "a-11": {
            "id": "a-11",
            "title": "projects-card-open 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4818"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4819"
                        },
                        "xValue": -60,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4818"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-11-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4819"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693151560429
        },
        "a-15": {
            "id": "a-15",
            "title": "projects-card-close 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4819"
                        },
                        "xValue": -60,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|91293a02-44f1-86ce-7ca8-8d96da22c71b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|495de187-e702-1001-93a4-3af9978a4818"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693151560429
        },
        "a-13": {
            "id": "a-13",
            "title": "projects-card-open 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fb"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "xValue": -60,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627"]
                        },
                        "xValue": -108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": -108,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fb"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-13-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693151560429
        },
        "a-16": {
            "id": "a-16",
            "title": "projects-card-close 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".projects-grid-wrapper",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".projects-grid-wrapper._4",
                            "selectorGuids": ["88f1ec24-b88b-aeab-b82a-41ee0b795627", "7fe6081b-f451-e569-fb18-788c32b0d201"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "xValue": -60,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "64e444bae911b3d3a74c9a70|0ecf650b-5efa-7768-b4b5-f7b7214312fb"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693151560429
        },
        "a-17": {
            "id": "a-17",
            "title": "team-card-hover-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuad",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693381256034
        },
        "a-18": {
            "id": "a-18",
            "title": "team-card-hover-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuad",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693381256034
        },
        "a-19": {
            "id": "a-19",
            "title": "hammer-animation",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 200,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-19-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 29,
                    "actionItems": [{
                        "id": "a-19-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 33,
                    "actionItems": [{
                        "id": "a-19-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": -26,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }, {
                        "id": "a-19-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 13,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 41,
                    "actionItems": [{
                        "id": "a-19-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": -8,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-19-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 10,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-19-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": -15,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }, {
                        "id": "a-19-n-15",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 7,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 82,
                    "actionItems": [{
                        "id": "a-19-n-12",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-19-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 0,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1693391098869
        },
        "a-22": {
            "id": "a-22",
            "title": "Accordion IN 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion__bar-vert",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee4"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion__bar-vert",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1557234196121
        },
        "a-23": {
            "id": "a-23",
            "title": "Accordion OUT 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion__bar-vert",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee4"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1557234196121
        },
        "a-20": {
            "id": "a-20",
            "title": "Accordion IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion__bar-vert",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee4"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1557234196121
        },
        "a-21": {
            "id": "a-21",
            "title": "Accordion OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion__bar-vert",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion__content-wrap",
                            "selectorGuids": ["f164f722-2cee-aed1-7c86-cdb7ab8eeee6"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1557234196121
        },
        "a-24": {
            "id": "a-24",
            "title": "home-cta-hover-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "xValue": 0,
                        "yValue": -20,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "widthValue": 10,
                        "heightValue": 10,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "widthValue": 14,
                        "heightValue": 14,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "xValue": -15,
                        "yValue": -28,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "zValue": -10,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693460528417
        },
        "a-25": {
            "id": "a-25",
            "title": "home-cta-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "xValue": 0,
                        "yValue": -20,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cta-image.ar",
                            "selectorGuids": ["8075cf79-523e-b6ad-09f8-d4fd118dee53", "bb9ad318-309f-32c0-caee-fe5935e59866"]
                        },
                        "widthValue": 10,
                        "heightValue": 10,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693460528417
        },
        "a-26": {
            "id": "a-26",
            "title": "video-button-hover-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".video-image.img",
                            "selectorGuids": ["26fa6ecd-b60d-e569-e042-ca89e95d1670", "b7660c0a-0310-3a17-86e0-2f41a7794952"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".video-image.img",
                            "selectorGuids": ["26fa6ecd-b60d-e569-e042-ca89e95d1670", "b7660c0a-0310-3a17-86e0-2f41a7794952"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693461129104
        },
        "a-27": {
            "id": "a-27",
            "title": "video-button-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".video-image.img",
                            "selectorGuids": ["26fa6ecd-b60d-e569-e042-ca89e95d1670", "b7660c0a-0310-3a17-86e0-2f41a7794952"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693461129104
        },
        "a-28": {
            "id": "a-28",
            "title": "community-button-hover-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".community-image",
                            "selectorGuids": ["f1b7e988-867c-688e-b521-ecd493ecbc25"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "selector": ".community-image",
                            "selectorGuids": ["f1b7e988-867c-688e-b521-ecd493ecbc25"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693461587638
        },
        "a-29": {
            "id": "a-29",
            "title": "community-button-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "selector": ".community-image",
                            "selectorGuids": ["f1b7e988-867c-688e-b521-ecd493ecbc25"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693461587638
        },
        "a-31": {
            "id": "a-31",
            "title": "lightsaber-page-load 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc0"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc0"
                        },
                        "xValue": -6,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc1"
                        },
                        "zValue": -25,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcbd"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcbd"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcbd"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 1500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc0"
                        },
                        "xValue": 200,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc1"
                        },
                        "zValue": 15,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcc0"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e8f36c3e2ab664078324d1|93a77cc0-b08a-c517-e0d6-52d569bbbcbd"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693463825358
        },
        "a-30": {
            "id": "a-30",
            "title": "lightsaber-page-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|00d465a8-6758-9bfd-ac4b-9e2c8f748bfe"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|00d465a8-6758-9bfd-ac4b-9e2c8f748bfe"
                        },
                        "xValue": -6,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|8e66c569-1aa3-0327-5efa-a5efd1080dbb"
                        },
                        "zValue": -25,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|c72bb571-d2a0-b633-3259-c7bf8a94a736"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|c72bb571-d2a0-b633-3259-c7bf8a94a736"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|00d465a8-6758-9bfd-ac4b-9e2c8f748bfe"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 1500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|00d465a8-6758-9bfd-ac4b-9e2c8f748bfe"
                        },
                        "xValue": 200,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|8e66c569-1aa3-0327-5efa-a5efd1080dbb"
                        },
                        "zValue": 15,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|c72bb571-d2a0-b633-3259-c7bf8a94a736"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64eb8e9a19b3764ab925a50e|c72bb571-d2a0-b633-3259-c7bf8a94a736"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693463825358
        },
        "a-33": {
            "id": "a-33",
            "title": "Info-accordion-1-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|f5fca0f3-359b-f1c2-5ee2-91389d092496"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-accordion",
                            "selectorGuids": ["f8154772-5802-8d4f-2d6a-af63ff935948"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-size-h4.info",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062d9", "7a464b12-617f-49da-7e14-6ddb8170430b"]
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-yellow-line",
                            "selectorGuids": ["16e4e17b-d296-9333-824b-cc9869c05389"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-content-wrap",
                            "selectorGuids": ["e685402e-4225-810c-d76e-84b6022ffbb7"]
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1686058431904
        },
        "a-32": {
            "id": "a-32",
            "title": "Info-accordion-1-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|f5fca0f3-359b-f1c2-5ee2-91389d092496"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-accordion",
                            "selectorGuids": ["f8154772-5802-8d4f-2d6a-af63ff935948"]
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-size-h4.info",
                            "selectorGuids": ["cb85d6b1-a43d-a027-7c8d-833ecd6062d9", "7a464b12-617f-49da-7e14-6ddb8170430b"]
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-32-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-yellow-line",
                            "selectorGuids": ["16e4e17b-d296-9333-824b-cc9869c05389"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-32-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".info-content-wrap",
                            "selectorGuids": ["e685402e-4225-810c-d76e-84b6022ffbb7"]
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686058431904
        },
        "a-39": {
            "id": "a-39",
            "title": "Info-accordion-3-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._3",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "c1b8f06c-eab9-223d-68a9-f8bb3f76e542"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-39-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99d"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-39-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99b"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-39-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99c"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._3",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "c1b8f06c-eab9-223d-68a9-f8bb3f76e542"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99f"
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-39-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99d"
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99b"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-39-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99c"
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|50c479c6-8d2c-b18b-6069-f2b1450f3dfc"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddc"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-39-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|a1cab5b3-4402-f6a8-3ed7-d7e624aa038d"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-39-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0de0"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686058431904
        },
        "a-40": {
            "id": "a-40",
            "title": "Info-accordion-3-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._3",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "c1b8f06c-eab9-223d-68a9-f8bb3f76e542"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-40-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-40-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99d"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-40-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99b"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-40-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|0cf8080e-6fa2-d930-da8a-fb497db4a99c"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-40-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|50c479c6-8d2c-b18b-6069-f2b1450f3dfc"
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-40-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddc"
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-40-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|a1cab5b3-4402-f6a8-3ed7-d7e624aa038d"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-40-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0de0"
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1686058431904
        },
        "a-34": {
            "id": "a-34",
            "title": "Info-accordion-2-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._2",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "3d03e989-55b3-0c69-a081-0ad3f7734edf"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c9"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c7"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c5"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c6"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._2",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "3d03e989-55b3-0c69-a081-0ad3f7734edf"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c9"
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c7"
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c5"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c6"
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|50c479c6-8d2c-b18b-6069-f2b1450f3dfc"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-11",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddc"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-34-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|a1cab5b3-4402-f6a8-3ed7-d7e624aa038d"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0de0"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686058431904
        },
        "a-38": {
            "id": "a-38",
            "title": "Info-accordion-2-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 700,
                        "target": {
                            "selector": ".info-image-wrap._2",
                            "selectorGuids": ["0534a05e-26af-fd8f-17b8-a318183d82bc", "3d03e989-55b3-0c69-a081-0ad3f7734edf"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c9"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c7"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c5"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64e710bd588b7012d7199f13|a5227a33-60b8-4611-b6d8-94d4925ad6c6"
                        },
                        "xValue": -2.25,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|50c479c6-8d2c-b18b-6069-f2b1450f3dfc"
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0ddc"
                        },
                        "globalSwatchId": "965d4cf6",
                        "rValue": 255,
                        "bValue": 0,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-38-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|a1cab5b3-4402-f6a8-3ed7-d7e624aa038d"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e710bd588b7012d7199f13|2290da91-207d-c558-f867-d779d75c0de0"
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1686058431904
        },
        "a-42": {
            "id": "a-42",
            "title": "Hide timeline at the top",
            "continuousParameterGroups": [{
                "id": "a-42-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-42-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64eb8eb16f778a04b8c2dba5|f59c8f36-e8f2-6dfd-075b-636b0d3a8a4d"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-42-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64eb8eb16f778a04b8c2dba5|f59c8f36-e8f2-6dfd-075b-636b0d3a8a4d"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1693730037579
        },
        "a-41": {
            "id": "a-41",
            "title": "Timeline Animation",
            "continuousParameterGroups": [{
                "id": "a-41-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-41-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076a5"]
                            },
                            "globalSwatchId": "f9a208f1",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-41-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076ac"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076b9"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-10",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_date-text",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076bc"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-41-n-12",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_date-text",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076bc"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-41-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "inCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076a5"]
                            },
                            "globalSwatchId": "965d4cf6",
                            "rValue": 255,
                            "bValue": 0,
                            "gValue": 229,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-41-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "inCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076ac"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "inCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076b9"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-9",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "inCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_date-text",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076bc"]
                            },
                            "globalSwatchId": "965d4cf6",
                            "rValue": 255,
                            "bValue": 0,
                            "gValue": 229,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-41-n-11",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": [0.55, 0.055, 0.675, 0.19],
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_date-text",
                                "selectorGuids": ["9a25577c-9da0-47d7-5560-dbf2a08076bc"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-41-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline-vector-line.yellow",
                                "selectorGuids": ["23bb1312-0f61-75df-1cfb-85134a681131", "ee45ee67-97f7-c753-1f06-759a3339a61a"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-41-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "outQuart",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline-vector-line.yellow",
                                "selectorGuids": ["23bb1312-0f61-75df-1cfb-85134a681131", "ee45ee67-97f7-c753-1f06-759a3339a61a"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-43": {
            "id": "a-43",
            "title": "Show Tabs",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".shop-menu",
                            "selectorGuids": ["1587be33-a516-16d4-267e-a6f2ac31903f"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1511900465514
        },
        "a-44": {
            "id": "a-44",
            "title": "Close Tabs",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".shop-menu",
                            "selectorGuids": ["1587be33-a516-16d4-267e-a6f2ac31903f"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1511900465514
        },
        "a-45": {
            "id": "a-45",
            "title": "mobile-menu-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".nav-layout.mob",
                            "selectorGuids": ["4fc4f500-09d3-7de5-5d9c-a17fa0ea136b", "53d48897-41d4-fecc-3931-d0477e5d181a"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "11f123dd-1fe7-53c3-2311-332eb77760a1"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693758904360
        },
        "a-46": {
            "id": "a-46",
            "title": "hammer-animation mobile",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 200,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-46-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 14,
                    "actionItems": [{
                        "id": "a-46-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-46-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 33,
                    "actionItems": [{
                        "id": "a-46-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": -26,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }, {
                        "id": "a-46-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 13,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 41,
                    "actionItems": [{
                        "id": "a-46-n-9",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": -8,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-46-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 10,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-46-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": -15,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }, {
                        "id": "a-46-n-12",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 7,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 82,
                    "actionItems": [{
                        "id": "a-46-n-13",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-46-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "xValue": 0,
                            "zValue": null,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "px"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-46-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hammer-image-ar",
                                "selectorGuids": ["54c1ff03-4458-4a2a-d368-20d54b979d34"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1693391098869
        },
        "a-47": {
            "id": "a-47",
            "title": "team-info-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-47-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-arrow-icon",
                            "selectorGuids": ["c24e5f8a-a57f-b43d-8bae-c7c56ebf5508"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-47-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-47-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-arrow-icon",
                            "selectorGuids": ["c24e5f8a-a57f-b43d-8bae-c7c56ebf5508"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-47-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693926229435
        },
        "a-48": {
            "id": "a-48",
            "title": "team-info-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-arrow-icon",
                            "selectorGuids": ["c24e5f8a-a57f-b43d-8bae-c7c56ebf5508"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".team-card-hover",
                            "selectorGuids": ["7580e954-bca0-d45c-866a-7969db5bb6a6"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693926229435
        },
        "a-49": {
            "id": "a-49",
            "title": "menu-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "selector": ".hamburger-line._2",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd723"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "widthValue": 300,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-49-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "490fd429-180a-0a63-77ba-c61ab37943aa"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1671102008495
        },
        "a-50": {
            "id": "a-50",
            "title": "menu-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hamburger-line._2",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd723"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "yValue": -14,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".x-button-wrap",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd720"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1671095396906
        },
        "a-51": {
            "id": "a-51",
            "title": "menu-close-from-link",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "widthValue": 300,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".mobile-menu",
                            "selectorGuids": ["d9e6ca23-7a04-9190-7060-e2ac320e57fa"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hamburger-line._1",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd725"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-51-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hamburger-line._2",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd723"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hamburger-line._3",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd71c", "5a1f133b-27cf-02f0-9776-95689e9dd724"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".x-button-wrap",
                            "selectorGuids": ["5a1f133b-27cf-02f0-9776-95689e9dd720"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1671097913164
        },
        "a-52": {
            "id": "a-52",
            "title": "nav-bar 2",
            "continuousParameterGroups": [{
                "id": "a-52-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-52-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "490fd429-180a-0a63-77ba-c61ab37943a7"
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 3,
                    "actionItems": [{
                        "id": "a-52-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "490fd429-180a-0a63-77ba-c61ab37943a7"
                            },
                            "globalSwatchId": "207513b5",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-52-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "490fd429-180a-0a63-77ba-c61ab37943a7"
                            },
                            "globalSwatchId": "207513b5",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1693066954764
        },
        "a-53": {
            "id": "a-53",
            "title": "page-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bf87bd1b-c39e-fd0c-3389-d5bbda9e9f6d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|c2521e37-49fc-a1f8-a5d8-281125ace49e"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5a65df9-dbc8-7903-dae4-e16cdc7da769"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|84768f25-cd3b-a371-a53c-00aad18b7aa2"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|94ac9461-60f3-9ad8-ad62-34e0e7061226"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bdf5adbe-a11b-226b-e3af-b743b46b162d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "57631653-4bce-3e18-9aa5-cc1d4b55c2e3"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bf87bd1b-c39e-fd0c-3389-d5bbda9e9f6d"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|c2521e37-49fc-a1f8-a5d8-281125ace49e"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5a65df9-dbc8-7903-dae4-e16cdc7da769"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-18",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|84768f25-cd3b-a371-a53c-00aad18b7aa2"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-20",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|94ac9461-60f3-9ad8-ad62-34e0e7061226"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-21",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bdf5adbe-a11b-226b-e3af-b743b46b162d"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-22",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "57631653-4bce-3e18-9aa5-cc1d4b55c2e3"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693992102749
        },
        "a-54": {
            "id": "a-54",
            "title": "Hide Loader",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".loader_top",
                            "selectorGuids": ["e16dae89-70d7-a55a-ecd5-145cc8d87de9"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "inQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".loader_bottom",
                            "selectorGuids": ["e16dae89-70d7-a55a-ecd5-145cc8d87dea"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "inQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".loader_bottom",
                            "selectorGuids": ["e16dae89-70d7-a55a-ecd5-145cc8d87dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".loader-2",
                            "selectorGuids": ["e16dae89-70d7-a55a-ecd5-145cc8d87def"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader-2",
                            "selectorGuids": ["e16dae89-70d7-a55a-ecd5-145cc8d87def"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1655152400757
        },
        "a-55": {
            "id": "a-55",
            "title": "page-load-mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-55-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bf87bd1b-c39e-fd0c-3389-d5bbda9e9f6d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|12f23b70-d70a-850c-b492-3c131e63fc6c"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5a65df9-dbc8-7903-dae4-e16cdc7da769"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5466bc1-505a-7b95-a84c-f622503084a4"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|94ac9461-60f3-9ad8-ad62-34e0e7061226"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bdf5adbe-a11b-226b-e3af-b743b46b162d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "57631653-4bce-3e18-9aa5-cc1d4b55c2e3"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|79e4e95d-4f1a-9311-a973-6e3f828992d9"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-55-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bf87bd1b-c39e-fd0c-3389-d5bbda9e9f6d"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|12f23b70-d70a-850c-b492-3c131e63fc6c"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5a65df9-dbc8-7903-dae4-e16cdc7da769"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-18",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|d5466bc1-505a-7b95-a84c-f622503084a4"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-20",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|94ac9461-60f3-9ad8-ad62-34e0e7061226"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-21",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64e444bae911b3d3a74c9a70|bdf5adbe-a11b-226b-e3af-b743b46b162d"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n-22",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "57631653-4bce-3e18-9aa5-cc1d4b55c2e3"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693992102749
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
