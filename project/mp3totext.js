window.Modernizr = function(a, b, c) {
        function z(a) {
            j.cssText = a
        }

        function A(a, b) {
            return z(m.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {
                svg: "http://www.w3.org/2000/svg"
            },
            r = {},
            s = {},
            t = {},
            u = [],
            v = u.slice,
            w, x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
            return x.call(a, b)
        } : y = function(a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = v.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(v.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(v.call(arguments)))
                };
            return e
        }), r.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return z((a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(0, -a.length)), C(j.backgroundImage, "gradient")
        }, r.csstransforms = function() {
            return !!F("transform")
        }, r.csstransitions = function() {
            return F("transition")
        }, r.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
        }, r.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == q.svg
        }, r.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(l.call(b.createElementNS(q.svg, "clipPath")))
        };
        for (var G in r) y(r, G) && (w = G.toLowerCase(), e[w] = r[G](), u.push((e[w] ? "" : "no-") + w));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, z(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return D([a])
            }, e.testAllProps = F, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
document.querySelector(".expert-settings").onclick = function(e) {
    if (document.querySelector(".expert-settings").classList.contains("show-popup") && e.target === document.querySelector(".expert-settings img")) {
        document.querySelector(".expert-settings").classList.remove("show-popup");
    } else {
        document.querySelector(".expert-settings").classList.add("show-popup");
    }
}(function($, document, window) {
    $(document).ready(function() {
        $(".mobile-navigation").append($(".main-navigation .menu").clone());
        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });
    });
    $(window).load(function() {});
})(jQuery, document, window); < /script> <
script >
    var formats = ["mp3"];

function checkIfFormatIsAllowed(givenFormat) {
    var cur = givenFormat.toLowerCase();
    for (var i = 0; i < formats.length; i++) {
        if (cur.endsWith(formats[i])) {
            return true;
        }
    }
    return false;
}
var fileTypes = {};
var $form = $("#form-element");
console.log("FORM ELEMENT:", $form);
var $input = $("#file");
var elModal = document.querySelector(".links-modal");
var extension = "";
$input.on("change", function(ev) {
    var fileName = ev.target.value;
    extension = getExtension(fileName);
    console.log("EXTENSION:", extension);
    if (extension === "mp3" || extension === "MP3") $form.trigger("submit");
    else {
        $.ajax({
            cache: false,
            type: "post",
            url: "/log_extension.php?ext=" + extension,
        });
        showModal(extension);
    }
});
var elModalHeaderHtml1 = '<div style="text-align: left; padding-top:15px;">Files with the extension <b>';
var elModalHeaderHtml2 = "</b> are not supported by this converter! <b>Please choose a converter from the list below:</b></div>";
var footer = '<b>or</b><p style="text-align: left">see <a href="https://converter.app" onclick="hideModalAndSaveLog(window.event)" data-link="https://converter.app">https://converter.app</a> if none of the converters above fits your needs.</p>';
var elClose = document.querySelector("#close");
elClose.addEventListener("click", hideModal);

function getExtension(filename) {
    console.log("GET EXTENSION");
    var parts = filename.split(".");
    var ext = parts[parts.length - 1];
    var res = ext.toLowerCase();
    return res;
}

function createLinksHtml(fileType) {
    if (!fileTypes[fileType]) return;
    var linksHtml = fileTypes[fileType].map(function(type) {
        return ('<div onclick="hideModalAndSaveLog(window.event)"><a href="' + type.link + '" data-txt="' + type.txt + '" data-link="' + type.link + '">' + type.txt + "</a></div>");
    }).join("\n");
    return linksHtml;
}

function showModal(extension) {
    $("#overlay").fadeIn(300);
    elModal.innerHTML = createLinksHtml(extension) ? elModalHeaderHtml1 + extension + elModalHeaderHtml2 + createLinksHtml(extension) + footer : "<div>Sorry, " + extension + ' files are not supported by this converter!</div><p>Check the following.app to find a suitable converter: <a href="https://converter.app" onclick="hideModalAndSaveLog(window.event)" data-link="https://converter.app">https://converter.app</a></p>';
}

function hideModalAndSaveLog(e) {
    e.preventDefault();
    var link = e.target.dataset.link;
    var log = extension + ":" + e.target.dataset.txt + ":" + e.target.dataset.link;
    if (!link) {
        hideModal();
        return;
    }
    fetch("/modal-link-logger.php", {
        method: "POST",
        body: JSON.stringify({
            type: log
        }),
    }).then(function() {
        window.location.href = link;
    });
}

function hideModal() {
    $("#overlay").fadeOut(300);
    var elUploading = document.querySelector(".box__uploading");
    elUploading.style.display = "none";
    var elInput = document.querySelector(".box__input");
    elInput.style.visibility = "block";
    $("#form-element").removeClass("is-uploading");
}
'use strict';
var interval = '';

function start_display() {
    if (interval == "") {
        interval = window.setInterval("display()", 1000);
        $('#response').css('visibility', 'visible');
        $('#text').css('display', 'inline');
        $('.btn').css('display', 'none');
    } else {
        stop_display();
    }
}

function stop_display() {
    window.clearInterval(interval);
    interval = "";
    $('#response').css('visibility', 'hidden');
    $('#text').css('display', 'none');
}

function reset_form() {
    $('.box__uploading').css('display', 'none');
    $('.box').removeClass('is-error is-success');
    $('.box').removeClass('is-uploading');
    $("#form-element")[0].reset();
    $('.btn').css('display', 'none');
    $('box__input').css('display', 'block');
    $('#response').css('visibility', 'hidden');
    $('#text').css('display', 'none');
}

function display() {
    $.ajax({
        cache: false,
        type: 'get',
        url: displayScript + '?jobid=' + jobid,
        success: function(response) {
            var new_width = response.trim() + "%";
            $('#response div').css('width', new_width);
            $('#text').html(Math.round(response) + "%");
            if (response == "drm-error") {
                stop_display();
                alert('Sorry! Cannot convert this file since it is equipped with a DRM lock. Please contact the vendor of the file for instructions to remove it!');
                $('#text').html('<font color=red><B>Sorry! Cannot convert this file since it is equipped with a DRM lock.</B></font> <BR>Please contact the vendor of the file for instructions to remove it!');
            } else if (response.trim() == '100') {
                stop_display();
                localStorage.setItem('jobId', jobid);
                var target = 'https://converter.app/mp3-to-text/result.php?lang=en';
                window.location.href = target;
            }
        }
    });
};

function checkFileExtension(fileName) {
    extension = getExtension(fileName);
    if (checkIfFormatIsAllowed(extension)) return true;
    else {
        $.ajax({
            cache: false,
            type: "post",
            url: "/log_extension.php?ext=" + extension,
        });
        showModal(extension);
        return false;
    }
}(function($, window, document, undefined) {
    var isAdvancedUpload = function() {
        var div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();
    $('.restart_new').on('click', function(e) {
        e.preventDefault();
        $('.box').removeClass('is-error is-success');
        $("#form-element")[0].reset();
        stop_display();
    });
    $('.box').each(function() {
        var $form = $(this),
            $input = $form.find('input[type="file"]'),
            $label = $form.find('label'),
            $errorMsg = $form.find('.box__error span'),
            $restart = $form.find('.box__restart'),
            droppedFiles = false,
            showFiles = function(files) {
                ;
            };
        $form.append('<input type="hidden" name="ajax" value="1" />');
        if (isAdvancedUpload) {
            $form.addClass('has-advanced-upload').on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }).on('dragover dragenter', function() {
                $form.addClass('is-dragover');
            }).on('dragleave dragend drop', function() {
                $form.removeClass('is-dragover');
            }).on('drop', function(e) {
                droppedFiles = e.originalEvent.dataTransfer.files;
                let result = true;
                for (let i = 0; i < droppedFiles.length; i++) {
                    const file = droppedFiles[i];
                    result = result && checkFileExtension(file.name);
                    if (!result) {
                        break;
                    }
                }
                if (result) {
                    $input.get(0).files = droppedFiles;
                    showFiles(droppedFiles);
                    $form.trigger('submit');
                }
            });
        }
        $form.on('submit', function(e) {
            if ($form.hasClass('is-uploading')) return false;
            $form.addClass('is-uploading').removeClass('is-error');
            if (isAdvancedUpload) {
                e.preventDefault();
                var progress = document.querySelector('.box__uploading');
                var xhr = new XMLHttpRequest();
                if (!(xhr && ('upload' in xhr) && ('onprogress' in xhr.upload)) || !window.FormData) {
                    return;
                }
                xhr.upload.addEventListener('loadstart', function(event) {
                    progress.style.display = 'block';
                }, false);
                xhr.upload.addEventListener('progress', function(event) {
                    var percent = (100 * event.loaded / event.total);
                    progress.innerHTML = '<b>Uploading: ' + percent.toFixed(2) + '%</b>';
                }, false);
                xhr.upload.addEventListener('load', function(event) {
                    progress.innerHTML = 'Completed, waiting for response...';
                }, false);
                xhr.upload.addEventListener('load', function(event) {
                    progress.innerHTML = '<b>Converting...</b><br><img src="images/loading.gif">';
                }, false);
                xhr.addEventListener('readystatechange', function(event) {
                    if (event.target.readyState == 4 && event.target.responseText) {
                        var resp = event.target.responseText;
                        console.log(resp);
                        var data = JSON.parse(resp);
                        $.ajax({
                            cache: false,
                            type: 'post',
                            url: processScript + '?jobid=' + data.jobid,
                            beforeSend: start_display()
                        });
                        jobid = data.jobid;
                    } else if (event.target.readyState == 4) {
                        throw new Error('Error in the response.');
                    }
                }, false);
                xhr.open(this.getAttribute('method'), this.getAttribute('action'), true);
                const formData = new FormData(this);
                if (document.querySelectorAll(".expert-settings select")[0].value !== "Auto") {
                    const options = {
                        speakerDetect: document.querySelectorAll(".expert-settings select")[0].value,
                    }
                    const blob = new Blob([JSON.stringify(options, null, 2)], {
                        type: 'application/json'
                    });
                    formData.append("options", blob, "options.json")
                }
                for (var pair of formData.entries()) {
                    console.log(pair[0]);
                }
                xhr.send(formData);
            } else {
                var iframeName = 'uploadiframe' + new Date().getTime(),
                    $iframe = $('<iframe name="' + iframeName + '" style="display: none;"></iframe>');
                $('body').append($iframe);
                $form.attr('target', iframeName);
                $iframe.one('load', function() {
                    var data = $.parseJSON($iframe.contents().find('body').text());
                    $form.removeClass('is-uploading').addClass(data.success == true ? 'is-success' : 'is-error').removeAttr('target');
                    if (!data.success) $errorMsg.text(data.error);
                    $iframe.remove();
                });
            }
        });
        $input.on('focus', function() {
            $input.addClass('has-focus');
        }).on('blur', function() {
            $input.removeClass('has-focus');
        });
    });
})(jQuery, window, document)