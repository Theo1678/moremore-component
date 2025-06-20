import { defineComponent as A, createElementBlock as o, openBlock as s, createElementVNode as l, ref as w, computed as _, onMounted as ue, onUnmounted as de, watch as K, createBlock as G, createCommentVNode as C, normalizeClass as $, normalizeStyle as z, Fragment as N, renderList as j, renderSlot as Z, createTextVNode as V, toDisplayString as k, createVNode as pe, withCtx as ve, withModifiers as q } from "vue";
const fe = {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, me = ["fill"], ge = /* @__PURE__ */ A({
  __name: "IcArrowLeft",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(h) {
    return (y, c) => (s(), o("svg", fe, [
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.7714 4.56268C17.1501 5.06762 17.0477 5.78396 16.5428 6.16266L8.61905 12.1055L16.5428 18.0483C17.0477 18.427 17.1501 19.1433 16.7714 19.6483C16.3927 20.1532 15.6763 20.2555 15.1714 19.8768L6.0286 13.0197C5.74082 12.8039 5.57146 12.4652 5.57146 12.1055C5.57146 11.7458 5.74082 11.407 6.0286 11.1912L15.1714 4.33411C15.6763 3.9554 16.3927 4.05773 16.7714 4.56268Z",
        fill: y.color
      }, null, 8, me)
    ]));
  }
}), he = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, we = ["fill"], ye = /* @__PURE__ */ A({
  __name: "IcArrowRight",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(h) {
    return (y, c) => (s(), o("svg", he, [
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.89514 19.6483C6.51643 19.1433 6.61877 18.427 7.12371 18.0483L15.0475 12.1055L7.12371 6.16266C6.61877 5.78395 6.51643 5.06762 6.89514 4.56268C7.27385 4.05773 7.99019 3.9554 8.49513 4.3341L17.6379 11.1912C17.9257 11.407 18.095 11.7457 18.095 12.1055C18.095 12.4652 17.9257 12.8039 17.6379 13.0197L8.49513 19.8768C7.99019 20.2555 7.27385 20.1532 6.89514 19.6483Z",
        fill: y.color
      }, null, 8, we)
    ]));
  }
}), xe = ["onClick"], be = /* @__PURE__ */ A({
  __name: "Swiper",
  props: {
    items: { default: () => [] },
    multiple: { type: Boolean },
    slidesPerView: { default: 1 },
    spaceBetween: { default: 0 },
    centeredSlides: { type: Boolean, default: !1 },
    loop: { type: Boolean, default: !1 },
    showNavigation: { type: Boolean, default: !0 },
    showPagination: { type: Boolean, default: !0 },
    showScrollbar: { type: Boolean, default: !1 },
    autoplay: { type: [Object, Boolean], default: !1 },
    allowTouchMove: { type: Boolean, default: !0 },
    touchRatio: { default: 1 },
    threshold: { default: 10 },
    speed: { default: 300 },
    easing: { default: "ease-out" },
    initialSlide: { default: 0 },
    keyName: { default: null },
    breakpoints: { default: () => ({}) }
  },
  emits: ["slideChange", "reachBeginning", "reachEnd", "touchStart", "touchMove", "touchEnd", "transitionStart", "transitionEnd"],
  setup(h, { expose: y, emit: c }) {
    const e = h, p = c, T = w(null), B = w(null), I = w(null), x = w(null), n = w(e.initialSlide), f = w(!1), b = w(!1), M = w({ x: 0, y: 0 }), u = w({ x: 0, y: 0 }), d = w(0), r = w(null), a = _(() => e.loop ? e.items.length - 1 : Math.max(0, e.items.length - e.slidesPerView)), v = _(() => Math.floor(n.value / e.slidesPerView)), m = _(() => {
      const t = Math.ceil(e.items.length / e.slidesPerView);
      return Array.from({ length: t }, (i, g) => g);
    }), E = _(() => (console.log("showPrevButton", e.loop, n.value, a.value), e.loop || n.value > 0)), U = _(() => (console.log("showNextButton", e.loop, n.value, a.value), e.loop || n.value < a.value)), W = _(() => B.value ? (B.value.clientWidth - (e.slidesPerView - 1) * e.spaceBetween) / e.slidesPerView : 0), Q = _(() => ({
      overflow: "hidden",
      position: "relative"
    })), ee = _(() => {
      const t = -(n.value * (W.value + e.spaceBetween)) + d.value;
      return {
        display: "flex",
        transition: f.value && !b.value ? `transform ${e.speed}ms ${e.easing}` : "none",
        transform: `translateX(${t}px)`,
        gap: `${e.spaceBetween}px`
      };
    }), te = _(() => {
      if (!e.items.length) return { width: "0%", left: "0%" };
      const t = n.value / a.value, i = e.slidesPerView / e.items.length * 100, g = t * (100 - i);
      return {
        width: `${i}%`,
        left: `${g}%`,
        transition: f.value ? `all ${e.speed}ms ${e.easing}` : "none"
      };
    }), le = _(() => ({
      "swiper-pagination-horizontal": !0,
      "swiper-pagination-bullets": !0
    })), se = (t, i) => e.keyName && t[e.keyName] ? t[e.keyName] : i, ae = (t) => ({}), oe = (t) => ({
      width: `${W.value}px`,
      flexShrink: 0
    }), P = (t, i = e.speed) => {
      if (f.value && !b.value) return;
      const g = Math.max(0, Math.min(t, a.value));
      g !== n.value && (f.value = !0, p("transitionStart", { index: g }), n.value = g, setTimeout(() => {
        f.value = !1, p("transitionEnd", { index: g }), p("slideChange", { index: g, item: e.items[g] }), g === 0 && p("reachBeginning"), g === a.value && p("reachEnd");
      }, i));
    }, L = () => {
      e.loop && n.value === a.value ? P(0) : P(n.value + 1);
    }, X = () => {
      e.loop && n.value === 0 ? P(a.value) : P(n.value - 1);
    }, ne = (t) => {
      e.allowTouchMove && (b.value = !0, M.value = { x: t.clientX, y: t.clientY }, u.value = { x: t.clientX, y: t.clientY }, document.addEventListener("mousemove", R), document.addEventListener("mouseup", D), p("touchStart", t));
    }, R = (t) => {
      if (!b.value) return;
      u.value = { x: t.clientX, y: t.clientY };
      const i = (u.value.x - M.value.x) * e.touchRatio;
      d.value = i, p("touchMove", t);
    }, D = (t) => {
      if (!b.value) return;
      const i = u.value.x - M.value.x;
      Math.abs(i) > e.threshold && (i > 0 ? X() : L()), b.value = !1, d.value = 0, document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", D), p("touchEnd", t);
    }, re = (t) => {
      if (!e.allowTouchMove) return;
      b.value = !0;
      const i = t.touches[0];
      M.value = { x: i.clientX, y: i.clientY }, u.value = { x: i.clientX, y: i.clientY }, p("touchStart", t);
    }, ie = (t) => {
      if (!b.value) return;
      const i = t.touches[0];
      u.value = { x: i.clientX, y: i.clientY };
      const g = (u.value.x - M.value.x) * e.touchRatio;
      d.value = g, p("touchMove", t);
    }, ce = (t) => {
      if (!b.value) return;
      const i = u.value.x - M.value.x;
      Math.abs(i) > e.threshold && (i > 0 ? X() : L()), b.value = !1, d.value = 0, p("touchEnd", t);
    }, Y = () => {
      if (!e.autoplay) return;
      const t = typeof e.autoplay == "object" && e.autoplay.delay || 3e3;
      r.value = setInterval(() => {
        L();
      }, t);
    }, O = () => {
      r.value && (clearInterval(r.value), r.value = null);
    };
    return ue(() => {
      e.autoplay && Y();
    }), de(() => {
      O(), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", D);
    }), K(
      () => e.autoplay,
      (t) => {
        t ? Y() : O();
      }
    ), y({
      slideTo: P,
      slideToNext: L,
      slideToPrev: X,
      currentIndex: _(() => n.value),
      isTransitioning: _(() => f.value)
    }), (t, i) => (s(), o("div", {
      class: "swiper-container",
      ref_key: "swiperContainer",
      ref: T
    }, [
      t.showNavigation ? (s(), G(ge, {
        key: 0,
        onClick: X,
        class: $(["swiper-button-prev", {
          "type-multiple": t.multiple,
          "swiper-button-disabled": n.value === 0,
          "swiper-button-hidden": !E.value
        }])
      }, null, 8, ["class"])) : C("", !0),
      l("div", {
        class: "swiper-wrapper",
        ref_key: "swiperWrapper",
        ref: B,
        onMousedown: ne,
        onTouchstart: re,
        onTouchmove: ie,
        onTouchend: ce,
        style: z(Q.value)
      }, [
        l("div", {
          class: "swiper-track",
          ref_key: "swiperTrack",
          ref: I,
          style: z(ee.value)
        }, [
          (s(!0), o(N, null, j(t.items, (g, S) => (s(), o("div", {
            key: se(g, S),
            class: $(["swiper-slide", {
              "swiper-slide-active": S === n.value,
              "swiper-slide-prev": S === n.value - 1,
              "swiper-slide-next": S === n.value + 1,
              ...ae()
            }]),
            style: z(oe())
          }, [
            Z(t.$slots, "default", {
              item: g,
              index: S,
              isActive: S === n.value
            }, () => [
              V(k(g), 1)
            ], !0)
          ], 6))), 128))
        ], 4)
      ], 36),
      t.showNavigation ? (s(), G(ye, {
        key: 1,
        onClick: L,
        class: $(["swiper-button-next", {
          "type-multiple": t.multiple,
          "swiper-button-disabled": n.value === a.value,
          "swiper-button-hidden": !U.value
        }])
      }, null, 8, ["class"])) : C("", !0),
      t.showPagination ? (s(), o("div", {
        key: 2,
        class: $(["swiper-pagination", le.value])
      }, [
        (s(!0), o(N, null, j(m.value, (g, S) => (s(), o("button", {
          key: S,
          onClick: (vt) => P(S * t.slidesPerView),
          class: $(["swiper-pagination-bullet", {
            "swiper-pagination-bullet-active": S === v.value
          }])
        }, [
          Z(t.$slots, "pagination-bullet", {
            index: S,
            isActive: S === v.value
          }, () => [
            i[0] || (i[0] = l("span", { class: "swiper-bullet-dot" }, null, -1))
          ], !0)
        ], 10, xe))), 128))
      ], 2)) : C("", !0),
      t.showScrollbar ? (s(), o("div", {
        key: 3,
        class: "swiper-scrollbar",
        ref_key: "scrollbar",
        ref: x
      }, [
        l("div", {
          class: "swiper-scrollbar-drag",
          style: z(te.value)
        }, null, 4)
      ], 512)) : C("", !0)
    ], 512));
  }
}), H = (h, y) => {
  const c = h.__vccOpts || h;
  for (const [e, p] of y)
    c[e] = p;
  return c;
}, J = /* @__PURE__ */ H(be, [["__scopeId", "data-v-e001d7ae"]]), _e = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start" }, ke = { class: "w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col" }, Ce = ["onClick"], $e = { class: "flex items-center gap-4 h-full" }, Se = { class: "w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden" }, Be = ["src", "alt", "onError"], Me = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-1"
}, Ee = { class: "flex-1 min-w-0 text-left flex flex-col justify-center" }, Te = { class: "flex items-center justify-between gap-3 mb-2" }, Ie = { class: "font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2" }, Pe = { class: "text-xs font-medium text-gray-800" }, Ve = {
  key: 0,
  class: "font-pretendard text-[15px] font-normal leading-[22px] text-gray-500 my-2 line-clamp-2"
}, Ne = {
  key: 1,
  class: "break-words whitespace-normal font-pretendard text-[13px] font-normal leading-[20px] text-blue-500"
}, je = { class: "w-full py-6 px-5 mt-auto" }, Le = ["onClick"], Ae = { class: "w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden" }, Xe = ["src", "alt"], ze = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, Re = { class: "font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center" }, De = /* @__PURE__ */ A({
  __name: "AdminCreateCards",
  props: {
    shops: { default: () => [] },
    itemsPerRow: { default: 3 },
    maxItems: { default: 6 }
  },
  emits: ["shop-click", "participant-click"],
  setup(h, { emit: y }) {
    const c = h, e = y, p = w(/* @__PURE__ */ new Set()), T = w(c.maxItems), B = _(() => c.shops.slice(0, T.value)), I = (u) => {
      e("shop-click", u);
    }, x = (u) => {
      e("participant-click", u);
    }, n = (u) => {
      const d = "flex items-center gap-2 px-2 py-1 rounded-md";
      switch (u) {
        case "blue":
          return `${d}`;
        case "green":
          return `${d}`;
        case "yellow":
          return `${d}`;
        case "gray":
        default:
          return `${d}`;
      }
    }, f = (u) => {
      const d = "w-2 h-2 rounded-full";
      switch (u) {
        case "yellow":
          return `${d} bg-yellow-400`;
        case "gray":
        default:
          return `${d} bg-gray-400`;
      }
    }, b = (u) => {
      p.value.add(u);
    }, M = (u) => u.image && !p.value.has(u.id);
    return (u, d) => (s(), o("div", _e, [
      (s(!0), o(N, null, j(B.value, (r) => (s(), o("div", {
        key: r.id,
        class: "cursor-pointer transition-transform hover:scale-105 h-full max-w-[380px]"
      }, [
        l("div", ke, [
          l("div", {
            class: "p-3 cursor-pointer flex-grow",
            onClick: (a) => I(r)
          }, [
            l("div", $e, [
              l("div", Se, [
                M(r) ? (s(), o("img", {
                  key: 0,
                  src: r.image,
                  alt: r.title,
                  onError: (a) => b(r.id),
                  class: "w-full h-full object-cover"
                }, null, 40, Be)) : (s(), o("div", Me, d[0] || (d[0] = [
                  l("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                    l("svg", {
                      class: "w-4 h-4 text-gray-500",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      l("path", {
                        "fill-rule": "evenodd",
                        d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                        "clip-rule": "evenodd"
                      })
                    ])
                  ], -1),
                  l("span", { class: "text-xs text-gray-500 text-center leading-tight" }, [
                    V(" 대표이미지"),
                    l("br"),
                    V("등록 필요 ")
                  ], -1)
                ])))
              ]),
              l("div", Ee, [
                l("div", Te, [
                  l("h2", Ie, k(r.title), 1),
                  r.badge ? (s(), o("div", {
                    key: 0,
                    class: $([n(r.badgeColor), "flex-shrink-0"])
                  }, [
                    l("div", {
                      class: $(f(r.badgeColor))
                    }, null, 2),
                    l("span", Pe, k(r.badge), 1)
                  ], 2)) : C("", !0)
                ]),
                r.description ? (s(), o("p", Ve, k(r.description), 1)) : C("", !0),
                r.period ? (s(), o("p", Ne, k(r.period), 1)) : C("", !0)
              ])
            ])
          ], 8, Ce),
          d[3] || (d[3] = l("div", { class: "border-t border-gray-200" }, null, -1)),
          l("div", je, [
            d[2] || (d[2] = l("h3", { class: "text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2" }, " 참여작가 ", -1)),
            r.participants && r.participants.length > 0 ? (s(), o("div", {
              key: 0,
              class: $(r.participants.length > 4 ? "px-8" : "")
            }, [
              pe(J, {
                items: r.participants,
                multiple: !0,
                slidesPerView: 4,
                spaceBetween: 8,
                "show-pagination": !1,
                showNavigation: r.participants.length > 4
              }, {
                default: ve(({ item: a }) => [
                  l("div", {
                    class: "w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity",
                    onClick: q((v) => x(a), ["stop"])
                  }, [
                    l("div", Ae, [
                      a.avatar ? (s(), o("img", {
                        key: 0,
                        src: a.avatar,
                        alt: a.name,
                        class: "w-full h-full object-cover"
                      }, null, 8, Xe)) : (s(), o("div", ze, d[1] || (d[1] = [
                        l("svg", {
                          class: "w-8 h-8 text-gray-400",
                          fill: "currentColor",
                          viewBox: "0 0 20 20"
                        }, [
                          l("path", {
                            "fill-rule": "evenodd",
                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                            "clip-rule": "evenodd"
                          })
                        ], -1)
                      ])))
                    ]),
                    l("span", Re, k(a.name), 1)
                  ], 8, Le)
                ]),
                _: 2
              }, 1032, ["items", "showNavigation"])
            ], 2)) : C("", !0)
          ])
        ])
      ]))), 128))
    ]));
  }
}), He = { class: "w-full" }, Ue = ["onClick"], We = { class: "relative aspect-[4/3] rounded-lg border border-gray-200" }, Ye = ["src", "alt", "onError"], Oe = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-2"
}, Ge = { class: "p-3 text-left" }, Ze = {
  key: 0,
  class: "mb-2"
}, Fe = { class: "text-sm font-bold text-gray-900 mb-2 line-clamp-1" }, Ke = {
  key: 1,
  class: "text-xs text-gray-600 mb-3 line-clamp-3"
}, qe = {
  key: 2,
  class: "text-xs mb-3"
}, Je = {
  key: 3,
  class: "text-xs text-blue-500 mb-3 line-clamp-2"
}, Qe = {
  key: 4,
  class: "flex items-center justify-center gap-2"
}, et = ["onClick"], tt = { class: "w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0" }, lt = ["src", "alt"], st = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, at = { class: "text-xs text-black-700 truncate" }, ot = /* @__PURE__ */ A({
  __name: "UserCreateCards",
  props: {
    shops: { default: () => [] },
    itemsPerRow: { default: 4 },
    maxItems: { default: 8 }
  },
  emits: ["shop-click", "participant-click"],
  setup(h, { emit: y }) {
    const c = h, e = y, p = w(!1), T = w(null), B = w(/* @__PURE__ */ new Set()), I = w(c.maxItems), x = _(() => c.shops.slice(0, I.value)), n = (a) => {
      T.value = a, p.value = !0, e("shop-click", a);
    }, f = (a) => {
      e("participant-click", a);
    }, b = (a) => {
      const v = "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium";
      switch (a) {
        case "blue":
          return `${v} bg-blue-100 text-blue-800`;
        case "yellow":
          return `${v} bg-yellow-100 text-yellow-800`;
        case "gray":
        default:
          return `${v} bg-gray-100 text-gray-800`;
      }
    }, M = (a) => {
      const v = "w-1.5 h-1.5 rounded-full";
      switch (a) {
        case "blue":
          return `${v} bg-blue-400`;
        case "yellow":
          return `${v} bg-yellow-400`;
        case "gray":
        default:
          return `${v} bg-gray-400`;
      }
    }, u = (a) => {
      B.value.add(a);
    }, d = (a) => a.image && !B.value.has(a.id), r = _(() => {
      const a = c.itemsPerRow;
      let v = "grid grid-cols-1";
      return a >= 2 && (v += " md:grid-cols-2"), a >= 3 && (v += " lg:grid-cols-3"), a >= 4 && (v += " xl:grid-cols-4"), a >= 5 && (v += " 2xl:grid-cols-5"), a >= 6 && (v += " 2xl:grid-cols-6"), `${v} gap-8`;
    });
    return (a, v) => (s(), o("div", He, [
      l("div", {
        class: $(r.value)
      }, [
        (s(!0), o(N, null, j(x.value, (m) => (s(), o("div", {
          key: m.id,
          class: "bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
          onClick: (E) => n(m)
        }, [
          l("div", We, [
            d(m) ? (s(), o("img", {
              key: 0,
              src: m.image,
              alt: m.title,
              onError: (E) => u(m.id),
              class: "w-full h-full object-cover"
            }, null, 40, Ye)) : (s(), o("div", Oe, v[0] || (v[0] = [
              l("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                l("svg", {
                  class: "w-4 h-4 text-gray-500",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  l("path", {
                    "fill-rule": "evenodd",
                    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    "clip-rule": "evenodd"
                  })
                ])
              ], -1),
              l("span", { class: "text-xs text-gray-500 text-center" }, [
                V(" 대표이미지"),
                l("br"),
                V("등록 필요 ")
              ], -1)
            ])))
          ]),
          l("div", Ge, [
            m.badge ? (s(), o("div", Ze, [
              l("div", {
                class: $(b(m.badgeColor))
              }, [
                l("div", {
                  class: $(M(m.badgeColor))
                }, null, 2),
                V(" " + k(m.badge), 1)
              ], 2)
            ])) : C("", !0),
            l("h3", Fe, k(m.title), 1),
            m.description ? (s(), o("p", Ke, k(m.description), 1)) : C("", !0),
            m.period ? (s(), o("p", qe, k(m.period), 1)) : C("", !0),
            m.hashtags ? (s(), o("p", Je, k(m.hashtags), 1)) : C("", !0),
            m.participants && m.participants.length > 0 ? (s(), o("div", Qe, [
              (s(!0), o(N, null, j(m.participants, (E) => (s(), o("div", {
                key: E.id,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5",
                onClick: q((U) => f(E), ["stop"])
              }, [
                l("div", tt, [
                  E.avatar ? (s(), o("img", {
                    key: 0,
                    src: E.avatar,
                    alt: E.name,
                    class: "w-full h-full object-cover"
                  }, null, 8, lt)) : (s(), o("div", st, v[1] || (v[1] = [
                    l("svg", {
                      class: "w-2.5 h-2.5 text-gray-400",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      l("path", {
                        "fill-rule": "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])))
                ]),
                l("span", at, k(E.name), 1)
              ], 8, et))), 128))
            ])) : C("", !0)
          ])
        ], 8, Ue))), 128))
      ], 2)
    ]));
  }
}), nt = /* @__PURE__ */ H(ot, [["__scopeId", "data-v-8a83f4f8"]]), rt = { class: "w-full" }, it = { class: "flex items-stretch gap-4 px-5 flex-wrap" }, ct = ["onClick"], ut = {
  __name: "TabGroup",
  props: {
    tabs: {
      type: Array,
      default: () => [
        { id: "all", label: "전체" },
        { id: "person", label: "인물" },
        { id: "animal", label: "동물" },
        { id: "object", label: "사물" },
        { id: "plant", label: "식물" },
        { id: "food", label: "음식" },
        { id: "background", label: "배경 모조지" },
        { id: "cute", label: "귀여운" },
        { id: "kitsch", label: "키치" },
        { id: "emotional", label: "감성" }
      ]
    },
    modelValue: {
      type: [String, Number],
      default: "all"
    },
    variant: {
      type: String,
      default: "default",
      // 'default' | 'compact'
      validator: (h) => ["default", "compact"].includes(h)
    }
  },
  emits: ["update:modelValue", "tab-change"],
  setup(h, { emit: y }) {
    const c = h, e = y, p = w(c.modelValue), T = (x) => {
      p.value = x.id, e("update:modelValue", x.id), e("tab-change", x);
    }, B = (x) => {
      const n = p.value === x.id, f = "flex items-center justify-center px-3 py-3 rounded-xl border transition-all duration-200 cursor-pointer";
      return n ? `${f} bg-pink-100 border-pink-400 border-2` : `${f} bg-white border-gray-300 border hover:border-gray-400 hover:bg-gray-50`;
    }, I = (x) => {
      const n = p.value === x.id, f = "text-sm font-bold text-center whitespace-nowrap";
      return n ? `${f} text-pink-500` : `${f} text-gray-700`;
    };
    return K(
      () => c.modelValue,
      (x) => {
        p.value = x;
      }
    ), (x, n) => (s(), o("div", rt, [
      l("div", it, [
        (s(!0), o(N, null, j(h.tabs, (f) => (s(), o("button", {
          key: f.id,
          class: $(B(f)),
          onClick: (b) => T(f),
          type: "button"
        }, [
          l("span", {
            class: $(I(f))
          }, k(f.label), 3)
        ], 10, ct))), 128))
      ])
    ]));
  }
}, dt = /* @__PURE__ */ H(ut, [["__scopeId", "data-v-861c3166"]]), F = [De, nt, dt, J], pt = {
  install(h, y = {}) {
    F.forEach((c) => {
      const e = c.__name || c.name || "UnnamedComponent";
      h.component(e, c);
    }), y.prefix && F.forEach((c) => {
      const e = c.__name || c.name || "UnnamedComponent";
      h.component(`${y.prefix}${e}`, c);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(pt);
export {
  De as AdminCreateCards,
  J as Swiper,
  dt as TabGroup,
  nt as UserCreateCards,
  pt as default
};
