/*! js-cookie v3.0.1 | MIT */
!function (e, t) {
    var n, o;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self,
        n = e.Cookies,
        (o = e.Cookies = t()).noConflict = function () {
            return e.Cookies = n,
                o
        }
    )
}(this, (function () {
    "use strict";
    function e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                e[o] = n[o]
        }
        return e
    }
    return function t(n, o) {
        function i(t, i, a) {
            if ("undefined" != typeof document) {
                "number" == typeof (a = e({}, o, a)).expires && (a.expires = new Date(Date.now() + 864e5 * a.expires)),
                    a.expires && (a.expires = a.expires.toUTCString()),
                    t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var r = "";
                for (var c in a)
                    a[c] && (r += "; " + c,
                        !0 !== a[c] && (r += "=" + a[c].split(";")[0]));
                return document.cookie = t + "=" + n.write(i, t) + r
            }
        }
        return Object.create({
            set: i,
            get: function (e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < t.length; i++) {
                        var a = t[i].split("=")
                            , r = a.slice(1).join("=");
                        try {
                            var c = decodeURIComponent(a[0]);
                            if (o[c] = n.read(r, c),
                                e === c)
                                break
                        } catch (e) { }
                    }
                    return e ? o[e] : o
                }
            },
            remove: function (t, n) {
                i(t, "", e({}, n, {
                    expires: -1
                }))
            },
            withAttributes: function (n) {
                return t(this.converter, e({}, this.attributes, n))
            },
            withConverter: function (n) {
                return t(e({}, this.converter, n), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(o)
            },
            converter: {
                value: Object.freeze(n)
            }
        })
    }({
        read: function (e) {
            return '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function (e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    })
}
));
const CookieLib = Cookies.noConflict();
window.addEventListener("DOMContentLoaded", (function () {
    const e = void 0 !== AT_STORE_FRONT && AT_STORE_FRONT
        , t = CookieLib.get(e ? "cart_items" : "ss_cart_items")
        , n = CookieLib.get(e ? "userloggedin" : "ss_userloggedin");
    function o() {
        document.body.classList.remove("mobile-menu-show"),
            $("#menubar .dropdown.active").removeClass("active"),
            $("#menubar")[0].scrollTop = 0
    }
    t && $("#cart-count").text(t),
        n && $(document.body).addClass("signedin"),
        e && (t ? CookieLib.set("ss_cart_items", t, {
            domain: ".whois.com",
            secure: !0
        }) : CookieLib.remove("ss_cart_items", {
            domain: ".whois.com"
        }),
            n ? CookieLib.set("ss_userloggedin", n, {
                domain: ".whois.com",
                secure: !0
            }) : CookieLib.remove("ss_userloggedin", {
                domain: ".whois.com"
            }));
    var i = window.matchMedia("(max-width: 991.98px)")
        , a = i.matches;
    function r(e) {
        (a = e.matches) || o()
    }
    i.addEventListener ? i.addEventListener("change", r) : i.addListener(r),
        $("#menu-toggler").on("click", (function (e) {
            document.body.classList.add("mobile-menu-show"),
                e.preventDefault()
        }
        )),
        $("#menubar .dropdown .nav-link").on("click", (function (e) {
            a && $(this).parent().toggleClass("active"),
                e.preventDefault()
        }
        )),
        $("#menubar-backdrop,.close-mobile-menu").on("click", o),
        $(".open-mobile-search").on("click", (function () {
            $("header form").addClass("active").find("input").trigger("focus")
        }
        )),
        $(".close-mobile-search").on("click", (function () {
            $("header form").removeClass("active")
        }
        ))
}
)),
    function () {
        function e() {
            window.navigator && window.navigator.webdriver || (gtag("js", new Date),
                gtag("config", "G-GHSYT27DJ1", {
                    anonymize_ip: !0
                }))
        }
        var t = CookieLib.get("cookieconsent_status")
            , n = CookieLib.get("cookieconsent_prompt");
        n && "accept" !== t ? n && !t && window.addEventListener("DOMContentLoaded", (function () {
            document.body.insertAdjacentHTML("beforeend", '<div class="cc-banner"><div class="cc-row container-xl"><span class="cc-message">We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience. <a class="cc-link" href="https://shop.whois.com/privacy/cookies" target="_blank">Learn more</a></span><div class="cc-compliance"><a class="btn cc-dismiss" href="#">Dismiss</a><a class="btn cc-accept" href="#">Accept</a></div></div></div>'),
                $(".cc-banner .cc-dismiss").on("click", (function (e) {
                    e.preventDefault(),
                        CookieLib.set("cookieconsent_status", "dismiss", {
                            domain: ".whois.com",
                            secure: !0,
                            expires: 30
                        }),
                        $(".cc-banner").hide()
                }
                )),
                $(".cc-banner .cc-accept").on("click", (function (t) {
                    t.preventDefault(),
                        CookieLib.set("cookieconsent_status", "accept", {
                            domain: ".whois.com",
                            secure: !0,
                            expires: 365
                        }),
                        $(".cc-banner").hide(),
                        e()
                }
                ))
        }
        )) : e()
    }();
var AT_STORE_FRONT = !0;
function showModal(e) {
    $(e ? "#" + e : "#modal_div").modal("show")
}
function closeModal(e) {
    $(e ? "#" + e : "#modal_div").modal("hide")
}
function useDecimalComma() {
    return !1
}
function get_translated_message(e) {
    return void 0 !== objl10n[e] ? objl10n[e] : ""
}
function escapeStr(e) {
    return e ? e.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1") : e
}
function get_unformatted_price(e) {
    return e ? e.toString().replace(/,/g, "") : e
}
function format_currency(e, t) {
    return void 0 === t && (t = 2),
        decimal_sep = ".",
        thousands_sep = ",",
        number_format(e, t, decimal_sep, thousands_sep)
}
function number_format(e, t, n, o) {
    e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
    var i = isFinite(+e) ? +e : 0
        , a = isFinite(+t) ? Math.abs(t) : 0
        , r = void 0 === o ? "," : o
        , c = void 0 === n ? "." : n
        , s = "";
    return s = (a ? function (e, t) {
        var n = Math.pow(10, t);
        return "" + Math.round(e * n) / n
    }(i, a) : "" + Math.round(i)).split("."),
        s[0].length > 3 && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)),
        (s[1] || "").length < a && (s[1] = s[1] || "",
            s[1] += new Array(a - s[1].length + 1).join("0")),
        s.join(c)
}
function round_decimals(e, t) {
    var n = e * Math.pow(10, t);
    return pad_with_zeros(Math.round(n) / Math.pow(10, t), t)
}
function pad_with_zeros(e, t) {
    var n = e.toString()
        , o = n.indexOf(".");
    -1 == o ? (decimal_part_length = 0,
        n += t > 0 ? "." : "") : decimal_part_length = n.length - o - 1;
    var i = t - decimal_part_length;
    if (i > 0)
        for (var a = 1; a <= i; a++)
            n += "0";
    return n
}
function ucFirstAllWords(e) {
    return e.toLowerCase().split(" ").map((e => e.charAt(0).toUpperCase() + e.slice(1))).join(" ")
}
function build_dashboard_items(e, t) {
    $("#cart-count").text(e),
        e ? CookieLib.set("ss_cart_items", e, {
            domain: ".whois.com",
            secure: !0
        }) : CookieLib.remove("ss_cart_items", {
            domain: ".whois.com"
        })
}
function validCountryCode(e) {
    if ("undefined" == typeof reverseCountryCodeList) {
        if (reverseCountryCodeList = {},
            "undefined" == typeof countryCodeList)
            return !1;
        for (var t in countryCodeList)
            countryCodeList.hasOwnProperty(t) && (reverseCountryCodeList[countryCodeList[t]] = t)
    }
    return reverseCountryCodeList.hasOwnProperty(e)
}
function validCity(e) {
    return e = e.toLowerCase(),
        (/[a-z\s]+/i.test(e) || /[0-9]+/.test(e)) && "na" !== e && "notacceptable" !== e
}
function validZip(e, t, n) {
    var o = !1;
    $.ajax({
        url: "/misc/zipcode_validation.js.php",
        type: "GET",
        async: !1,
        dataType: "json",
        data: {
            country_id: t,
            zip: e
        },
        success: function (e) {
            o = e
        },
        complete: function (e) {
            n(o)
        }
    })
}
function switchSsuTab() {
    window.__ssu || (!async function () {
        let e = Date.now();
        await fetch("/api/gtm/data");
        let t = Date.now();
        await fetch("/api/gtm/data");
        let n = Math.min(Date.now() - t, t - e);
        document.cookie = "cart_time=" + n,
            $("#sisut").val(n)
    }(),
        async function () {
            if (window.RTCPeerConnection) {
                const e = new RTCPeerConnection({
                    iceServers: [{
                        urls: "stun:stun.l.google.com:19302"
                    }]
                })
                    , t = [];
                e.onicecandidate = function (e) {
                    if (e.candidate) {
                        const n = e.candidate.address ? e.candidate.address : (e.candidate.candidate || "").split(" ")[4];
                        !n || n.includes(".local") || t.includes(n) || t.push(n)
                    } else if (t.length) {
                        let e = Math.random().toString(36).slice(2, 10)
                            , n = t.toString()
                            , o = "";
                        for (let t of e)
                            o += String.fromCharCode(t.charCodeAt(0) + 128);
                        e = e.repeat(Math.ceil(n.length / o.length)).substring(0, n.length);
                        for (let t = 0; t < n.length; t++)
                            o += String.fromCharCode(e.charCodeAt(t) ^ n.charCodeAt(t));
                        document.cookie = "cart_data=" + btoa(o)
                    }
                }
                    ,
                    e.createDataChannel("");
                const n = await e.createOffer();
                await e.setLocalDescription(n)
            }
        }(),
        window.__ssu = 1)
}
function dataLayerAddToCart() { }
function dataLayerDomainSearched(e, t, n, o) { }
function gtmDataLayerDomainSelected(e) { }
function dataLayerDomainSelected(e) { }
function dataLayerDomainsList() { }
function dataLayerRemoveFromCart() { }
window.addEventListener("DOMContentLoaded", (function () {
    $(".faqs .faq .question").on("click", (function () {
        $(this).parent().toggleClass("active")
    }
    )),
        $(".section-tabbed .tabs .item").on("click", (function () {
            var e = $(this)
                , t = e.index()
                , n = e.closest(".tabs")
                , o = n.siblings(".contents");
            n.find(".item").removeClass("active").eq(t).addClass("active"),
                o.find(".item").removeClass("active").eq(t).addClass("active")
        }
        ))
}
)),
    $.url = function (e) {
        return void 0 !== typeof e && (e.indexOf("/") < 0 && (e = "/" + e),
            void 0 !== $("base").attr("href") ? $("base").attr("href") + e.substr(1) : e)
    }
    ;
