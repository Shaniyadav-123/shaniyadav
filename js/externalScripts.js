// function externalScriptEnabled() {
//   // return process.env.NODE_ENV === "production";
//   return true;
// }
// if (this.externalScriptEnabled()) {
//   this.startGoogleAnalytics();
//   this.startFacebookEvents();
// }

// function startGoogleAnalytics() {
//   const snippetText = `
//        // Google tag manager
//        (function (w, d, s, l, i) {
//          w[l] = w[l] || [];
//          w[l].push({
//            "gtm.start": new Date().getTime(),
//            event: "gtm.js",
//          });
//          var f = d.getElementsByTagName(s)[0],
//            j = d.createElement(s),
//            dl = l != "dataLayer" ? "&l=" + l : "";
//          j.async = true;
//          j.defer = true;
//          j.type = "text/javascript";
//          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//          f.parentNode.insertBefore(j, f);
//        })(window, document, "script", "dataLayer", "GTM-TKCQPGW");
//        //Google tag manager
//        `;
// }

// if (this.externalScriptEnabled()) {
//   document.addEventListener("DOMContentLoaded", function () {
//     var poptin_single_page_app = true;
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     s.defer = true;
//     s.src = "https://cdn.popt.in/pixel.js?id=1c09e55cb9e4d";
//     s.id = "pixel-script-poptin";
//     s.rel = "preload";
//     document.body.appendChild(s);
//   });
// }
// //Hotjar Tracking Code for https://www.policyadvisor.com
// if (this.externalScriptEnabled()) {
//   (function (h, o, t, j, a, r) {
//     h.hj =
//       h.hj ||
//       function () {
//         (h.hj.q = h.hj.q || []).push(arguments);
//       };
//     h._hjSettings = { hjid: 1268115, hjsv: 6 };
//     a = o.getElementsByTagName("head")[0];
//     r = o.createElement("script");
//     r.async = 1;
//     r.defer = 1;
//     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
// }

// function startFacebookEvents() {
//   //FB Events
//   const snippet = `!(function (f, b, e, v, n, t, s) {
//          if (f.fbq) return;
//          n = f.fbq = function () {
//            n.callMethod
//              ? n.callMethod.apply(n, arguments)
//              : n.queue.push(arguments);
//          };
//          if (!f._fbq) f._fbq = n;
//          n.push = n;
//          n.loaded = !0;
//          n.version = "2.0";
//          n.queue = [];
//          t = b.createElement(e);
//          t.async = !0;
//          t.defer = true;
//          t.src = v;
//          s = b.getElementsByTagName(e)[0];
//          s.parentNode.insertBefore(t, s);
//        })(
//          window,
//          document,
//          "script",
//          "https://connect.facebook.net/en_US/fbevents.js"
//        );
//        // eslint-disable-next-line no-undef
//        fbq("init", "783175242063304");
//        // eslint-disable-next-line no-undef
//        fbq("track", "PageView");
//        // FB Events`;
// }
// //   (window.heap = window.heap || []),
// //     (window.heap.load = function (e, t) {
// //       (window.heap.appid = e), (window.heap.config = t = t || {});
// //       var r = t.forceSSL || "https:" === document.location.protocol,
// //         a = document.createElement("script");
// //       (a.type = "text/javascript"),
// //         (a.async = !0),
// //         (a.defer = 1),
// //         (a.src =
// //           (r ? "https:" : "http:") +
// //           "//cdn.heapanalytics.com/js/heap-" +
// //           e +
// //           ".js");
// //       var n = document.getElementsByTagName("script")[0];
// //       n.parentNode.insertBefore(a, n);
// //       for (
// //         var o = function (e) {
// //           return function () {
// //             window.heap.push(
// //               [e].concat(Array.prototype.slice.call(arguments, 0))
// //             );
// //           };
// //         },
// //         p = [
// //           "addEventProperties",
// //           "addUserProperties",
// //           "clearEventProperties",
// //           "identify",
// //           "resetIdentity",
// //           "removeEventProperty",
// //           "setEventProperties",
// //           "track",
// //           "unsetEventProperty",
// //         ],
// //         c = 0;
// //         c < p.length;
// //         c++
// //       )
// //         window.heap[p[c]] = o(p[c]);
// //     });
// //   let heap_code = this.externalScriptEnabled()
// //     ? "2540474820"
// //     : "3043140583";
// //   window.heap.load(heap_code);

// function addSalesIq() {
//   (function () {
//     $zoho.salesiq = $zoho.salesiq || {
//       widgetcode: `c9f58d8de25c914125a64779f888ed6265f82a973baa4c2e21e1c6e980b8b341`,
//       values: {},
//       ready: function () {},
//     };
//     var d = document;
//     let s = d.createElement("script");
//     s.type = "text/javascript";
//     s.id = "zsiqscript";
//     s.defer = true;
//     s.src = "https://salesiq.zoho.com/widget";
//     var t = d.getElementsByTagName("script")[0];
//     t.parentNode.insertBefore(s, t);
//   })();
// }
// this.addSalesIq();
