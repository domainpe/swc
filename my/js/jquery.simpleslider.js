!function (e) {
    "use strict";
    e.fn.simpleSlider = function (t) {
        var n = [];
        return this.each((function () {
            this.simpleSlider || (this.simpleSlider = function (t, n) {
                var a = e(t)
                    , o = e('<div class="ss-container"/>')
                    , i = e('<div class="ss-viewport"/>')
                    , s = a.children()
                    , r = s.length
                    , u = a.width()
                    , l = u
                    , c = null
                    , v = null
                    , p = 0
                    , d = null
                    , f = !1
                    , h = !1
                    , g = !1
                    , w = null
                    , m = null
                    , y = 0
                    , x = {
                        gap: 0,
                        move: 1,
                        view: 1,
                        speed: 300
                    }
                    , b = e.extend({}, {
                        auto: !0,
                        autoInterval: 5e3,
                        autoPause: !0,
                        autoReverse: !1,
                        lazy: !0,
                        loop: !0,
                        nav: !0,
                        pager: !0,
                        touch: !0
                    }, x, n)
                    , k = e.extend({}, b);
                function M(t) {
                    k.lazy && !t.data("lazyloaded") && (t.find("img").each((function (t, n) {
                        var a = e(n)
                            , o = a.attr("data-src");
                        o && a.attr("src", o)
                    }
                    )),
                        t.data("lazyloaded", !0))
                }
                function T(e) {
                    if (r > k.view) {
                        var t = p + (e ? 1 : -1) * k.move;
                        if (k.loop || t >= 0 && t < r) {
                            h = !0;
                            for (var n = (l + k.gap) * k.move * (e ? -1 : 1), a = e ? k.view * (l + k.gap) : -(l + k.gap), o = (p + (e ? k.view : -1)) % r, u = 0; u < k.move; u++) {
                                o = o < 0 ? r - 1 : o == r ? 0 : o;
                                var c = s.eq(o);
                                M(c),
                                    c.css({
                                        left: a,
                                        display: "block"
                                    }),
                                    o += e ? 1 : -1,
                                    a += (l + k.gap) * (e ? 1 : -1)
                            }
                            p = t >= r ? t - r : t < 0 ? r + t : t,
                                i.css({
                                    transform: "translateX(" + n + "px)",
                                    "transition-duration": k.speed + "ms"
                                })
                        }
                    }
                }
                function q(t) {
                    if (r > 1 && t >= 0 && t < r) {
                        var n = (p = t) + k.view
                            , a = 0;
                        n >= r && (a = n % r,
                            n = r),
                            i.css({
                                transform: "",
                                "transition-duration": ""
                            }),
                            s.each((function (t) {
                                var o = e(this)
                                    , i = null;
                                t >= p && t < n ? i = (t - p) * (l + k.gap) : t >= 0 && t < a && (i = (r - p + t) * (l + k.gap)),
                                    null !== i ? (M(o),
                                        o.css({
                                            left: i,
                                            display: "block"
                                        })) : o.css("display", "none"),
                                    v && (t === p ? v.eq(t).addClass("ss-active") : v.eq(t).removeClass("ss-active"))
                            }
                            )),
                            h = !1
                    }
                }
                function z() {
                    y = 1,
                        T(!0)
                }
                function I() {
                    y = 1,
                        T(!1)
                }
                function S() {
                    f = !1,
                        d || (d = setInterval((function () {
                            f || h || g || y || (T(!k.autoReverse),
                                !k.loop && (!k.autoReverse && p === r - 1 || k.autoReverse && 0 === p) && E()),
                                y = y > 0 ? y - 1 : 0
                        }
                        ), k.autoInterval))
                }
                function E() {
                    f = !0,
                        d && (clearInterval(d),
                            d = null)
                }
                function R() {
                    if (k.responsive) {
                        k = e.extend({}, b);
                        var t = e(window).width()
                            , n = null;
                        for (var i in k.responsive)
                            (i = parseInt(i)) <= t && (null === n || i > n) && (n = i);
                        if (null !== n) {
                            var r = k.responsive[n];
                            for (var c in x)
                                c in r && (k[c] = r[c])
                        }
                    }
                    k.view = Math.max(k.view, 1),
                        k.gap = k.view > 1 ? Math.max(k.gap, 0) : 0,
                        k.move = Math.min(Math.max(k.move, 1), k.view),
                        u = a.width(),
                        l = k.view > 1 ? (u - (k.view - 1) * k.gap) / k.view : u,
                        o.css("height", s.eq(p).outerHeight()),
                        s.css("width", l),
                        q(p)
                }
                function X() { }
                return function () {
                    if (o.css({
                        position: "relative",
                        overflow: "hidden"
                    }).append(i).appendTo(a),
                        s.detach().appendTo(i),
                        s.css({
                            position: "absolute",
                            top: 0,
                            left: 0
                        }),
                        i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", (function () {
                            h && q(p)
                        }
                        )),
                        k.pager) {
                        c = e('<div class="ss-pager"></div>');
                        for (var t = "", n = 0; n < r; n++)
                            t += '<button class="ss-pager-btn' + (n === p ? " ss-active" : "") + '">' + (n + 1) + "</button>";
                        c.on("click", (function (t) {
                            y = 1,
                                q(e(t.target).index())
                        }
                        )),
                            c.append(t),
                            v = c.children(),
                            o.after(c)
                    }
                    if (k.nav) {
                        var d = e('<button class="ss-nav-prev">prev</button>')
                            , f = e('<button class="ss-nav-next">next</button>');
                        o.after(f),
                            o.after(d),
                            d.on("click", (function () {
                                I()
                            }
                            )),
                            f.on("click", (function () {
                                z()
                            }
                            ))
                    }
                    k.touch && "undefined" != typeof TouchEvent && (i.on("touchstart", (function (e) {
                        if (r > 1 && !g && 1 === e.touches.length) {
                            h && (h = !1,
                                q(p));
                            var t = e.touches[0];
                            g = !0,
                                w = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                m = null
                        }
                    }
                    )),
                        i.on("touchmove", (function (e) {
                            if (g && 1 === e.touches.length) {
                                var t = e.touches[0]
                                    , n = t.pageX - w.x
                                    , a = t.pageY - w.y;
                                if (Math.abs(n) > Math.abs(a)) {
                                    m = {
                                        x: n,
                                        y: a
                                    };
                                    var o = p + (n < 0 ? k.view : -1);
                                    if (k.loop || o >= 0 && o < r) {
                                        o = (r + o % r) % r;
                                        var c = s.eq(o)
                                            , v = n < 0 ? u + k.gap : -(l + k.gap);
                                        M(c),
                                            c.css({
                                                left: v,
                                                display: "block"
                                            }),
                                            i.css("transform", "translateX(" + n + "px)")
                                    }
                                }
                            }
                        }
                        )),
                        i.on("touchend", (function (e) {
                            g && m && (Math.abs(m.x) > 30 ? T(m.x < 0) : q(p),
                                y = 1,
                                g = !1)
                        }
                        ))),
                        k.auto && r > 1 && (S(),
                            k.autoPause && i.on("mouseenter mouseleave", (function (e) {
                                switch (e.type) {
                                    case "mouseenter":
                                    case "mouseover":
                                        E();
                                        break;
                                    case "mouseleave":
                                    case "mouseout":
                                        E(),
                                            S()
                                }
                            }
                            ))),
                        e(window).on("resize", R),
                        R()
                }(),
                    X.prototype = {
                        get count() {
                            return r
                        },
                        get index() {
                            return p
                        }
                    },
                    X.prototype.next = z,
                    X.prototype.play = S,
                    X.prototype.pause = E,
                    X.prototype.prev = I,
                    new X
            }(this, t),
                n.push(this.simpleSlider))
        }
        )),
            1 === n.length ? n[0] : n
    }
}(window.jQuery || window.cash);
