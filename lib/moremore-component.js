import { defineComponent as X, createElementBlock as a, openBlock as o, createElementVNode as t, ref as m, computed as k, Fragment as L, renderList as V, createTextVNode as A, createCommentVNode as C, toDisplayString as $, normalizeClass as S, withModifiers as D, createVNode as F, watch as Q, onMounted as fe, onUnmounted as ve, createBlock as K, normalizeStyle as U, renderSlot as q } from "vue";
const pe = {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ge = ["fill"], ee = /* @__PURE__ */ X({
  __name: "IcArrowLeft",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(h) {
    return (w, u) => (o(), a("svg", pe, [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.7714 4.56268C17.1501 5.06762 17.0477 5.78396 16.5428 6.16266L8.61905 12.1055L16.5428 18.0483C17.0477 18.427 17.1501 19.1433 16.7714 19.6483C16.3927 20.1532 15.6763 20.2555 15.1714 19.8768L6.0286 13.0197C5.74082 12.8039 5.57146 12.4652 5.57146 12.1055C5.57146 11.7458 5.74082 11.407 6.0286 11.1912L15.1714 4.33411C15.6763 3.9554 16.3927 4.05773 16.7714 4.56268Z",
        fill: w.color
      }, null, 8, ge)
    ]));
  }
}), me = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, he = ["fill"], te = /* @__PURE__ */ X({
  __name: "IcArrowRight",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(h) {
    return (w, u) => (o(), a("svg", me, [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.89514 19.6483C6.51643 19.1433 6.61877 18.427 7.12371 18.0483L15.0475 12.1055L7.12371 6.16266C6.61877 5.78395 6.51643 5.06762 6.89514 4.56268C7.27385 4.05773 7.99019 3.9554 8.49513 4.3341L17.6379 11.1912C17.9257 11.407 18.095 11.7457 18.095 12.1055C18.095 12.4652 17.9257 12.8039 17.6379 13.0197L8.49513 19.8768C7.99019 20.2555 7.27385 20.1532 6.89514 19.6483Z",
        fill: w.color
      }, null, 8, he)
    ]));
  }
}), ye = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start" }, we = { class: "w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col" }, xe = ["onClick"], be = { class: "flex items-center gap-4 h-full" }, _e = { class: "w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden" }, ke = ["src", "alt", "onError"], Ce = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-1"
}, $e = { class: "flex-1 min-w-0 text-left flex flex-col justify-center" }, Se = { class: "flex items-center justify-between gap-3 mb-2" }, Me = { class: "font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2" }, Be = { class: "text-xs font-medium text-gray-800" }, Te = {
  key: 0,
  class: "font-pretendard text-[15px] font-normal leading-[22px] text-gray-500 my-2 line-clamp-2"
}, Ee = {
  key: 1,
  class: "break-words whitespace-normal font-pretendard text-[13px] font-normal leading-[20px] text-blue-500"
}, Ie = { class: "py-6 px-5 mt-auto" }, je = { class: "relative flex items-center justify-center" }, Pe = ["onClick"], Le = { class: "w-[calc(100%-52px)]" }, Ve = { class: "flex items-center justify-center" }, Ne = ["onClick"], Ae = { class: "w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden" }, ze = ["src", "alt"], Xe = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, Re = { class: "font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center" }, We = ["onClick"], Ue = /* @__PURE__ */ X({
  __name: "AdminCreateCards",
  props: {
    shops: { default: () => [] },
    itemsPerRow: { default: 3 },
    maxItems: { default: 6 }
  },
  emits: ["shop-click", "participant-click"],
  setup(h, { emit: w }) {
    const u = h, e = w, v = m(/* @__PURE__ */ new Set()), j = m(u.maxItems), B = k(() => u.shops.slice(0, j.value)), P = (s) => {
      e("shop-click", s);
    }, x = (s) => {
      e("participant-click", s);
    }, c = (s) => {
      const n = "flex items-center gap-2 px-2 py-1 rounded-md";
      switch (s) {
        case "blue":
          return `${n}`;
        case "green":
          return `${n}`;
        case "yellow":
          return `${n}`;
        case "gray":
        default:
          return `${n}`;
      }
    }, p = (s) => {
      const n = "w-2 h-2 rounded-full";
      switch (s) {
        case "yellow":
          return `${n} bg-yellow-400`;
        case "gray":
        default:
          return `${n} bg-gray-400`;
      }
    }, b = (s) => {
      v.value.add(s);
    }, T = (s) => s.image && !v.value.has(s.id), _ = m({}), E = (s, n) => {
      n && (_.value[s] = n);
    }, I = (s, n) => {
      const r = _.value[s];
      if (r) {
        const R = r.scrollLeft + (n === "left" ? -74 : 74);
        r.scrollTo({
          left: R,
          behavior: "smooth"
        });
      }
    }, i = (s) => {
      const n = _.value[s];
      return n && n.scrollLeft > 0;
    }, f = (s) => {
      const n = _.value[s];
      return n ? n && n.scrollLeft < n.scrollWidth - n.clientWidth - 1 : !1;
    };
    return (s, n) => (o(), a("div", ye, [
      (o(!0), a(L, null, V(B.value, (r) => (o(), a("div", {
        key: r.id,
        class: "cursor-pointer transition-transform hover:scale-105 h-full max-w-[380px]"
      }, [
        t("div", we, [
          t("div", {
            class: "p-3 cursor-pointer flex-grow",
            onClick: (y) => P(r)
          }, [
            t("div", be, [
              t("div", _e, [
                T(r) ? (o(), a("img", {
                  key: 0,
                  src: r.image,
                  alt: r.title,
                  onError: (y) => b(r.id),
                  class: "w-full h-full object-cover"
                }, null, 40, ke)) : (o(), a("div", Ce, n[1] || (n[1] = [
                  t("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                    t("svg", {
                      class: "w-4 h-4 text-gray-500",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      t("path", {
                        "fill-rule": "evenodd",
                        d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                        "clip-rule": "evenodd"
                      })
                    ])
                  ], -1),
                  t("span", { class: "text-xs text-gray-500 text-center leading-tight" }, [
                    A(" 대표이미지"),
                    t("br"),
                    A("등록 필요 ")
                  ], -1)
                ])))
              ]),
              t("div", $e, [
                t("div", Se, [
                  t("h2", Me, $(r.title), 1),
                  r.badge ? (o(), a("div", {
                    key: 0,
                    class: S([c(r.badgeColor), "flex-shrink-0"])
                  }, [
                    t("div", {
                      class: S(p(r.badgeColor))
                    }, null, 2),
                    t("span", Be, $(r.badge), 1)
                  ], 2)) : C("", !0)
                ]),
                r.description ? (o(), a("p", Te, $(r.description), 1)) : C("", !0),
                r.period ? (o(), a("p", Ee, $(r.period), 1)) : C("", !0)
              ])
            ])
          ], 8, xe),
          n[4] || (n[4] = t("div", { class: "border-t border-gray-200" }, null, -1)),
          t("div", Ie, [
            n[3] || (n[3] = t("h3", { class: "text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2" }, " 참여작가 ", -1)),
            t("div", je, [
              r.participants && r.participants.length >= 5 && i(r.id) ? (o(), a("button", {
                key: 0,
                onClick: D((y) => I(r.id, "left"), ["stop"]),
                class: "absolute no-background left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 focus:outline-none hover:border-none focus:ring-0"
              }, [
                F(ee)
              ], 8, Pe)) : C("", !0),
              t("div", Le, [
                t("div", Ve, [
                  t("div", {
                    ref_for: !0,
                    ref: (y) => E(r.id, y),
                    class: S(
                      r.participants && r.participants.length >= 5 ? "flex items-center  gap-2 overflow-x-auto scrollbar-hide px-0" : "flex items-center justify-center gap-auto"
                    ),
                    onScroll: n[0] || (n[0] = (y) => s.$forceUpdate())
                  }, [
                    (o(!0), a(L, null, V(r.participants, (y) => (o(), a("div", {
                      key: y.id,
                      class: "w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0",
                      onClick: D((R) => x(y), ["stop"])
                    }, [
                      t("div", Ae, [
                        y.avatar ? (o(), a("img", {
                          key: 0,
                          src: y.avatar,
                          alt: y.name,
                          class: "w-full h-full object-cover"
                        }, null, 8, ze)) : (o(), a("div", Xe, n[2] || (n[2] = [
                          t("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20"
                          }, [
                            t("path", {
                              "fill-rule": "evenodd",
                              d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                              "clip-rule": "evenodd"
                            })
                          ], -1)
                        ])))
                      ]),
                      t("span", Re, $(y.name), 1)
                    ], 8, Ne))), 128))
                  ], 34)
                ])
              ]),
              r.participants && r.participants.length >= 5 && f(r.id) ? (o(), a("button", {
                key: 1,
                onClick: D((y) => I(r.id, "right"), ["stop"]),
                class: "absolute no-background right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 -right-5 focus:outline-none hover:border-none focus:ring-0"
              }, [
                F(te)
              ], 8, We)) : C("", !0)
            ])
          ])
        ])
      ]))), 128))
    ]));
  }
}), H = (h, w) => {
  const u = h.__vccOpts || h;
  for (const [e, v] of w)
    u[e] = v;
  return u;
}, De = /* @__PURE__ */ H(Ue, [["__scopeId", "data-v-dd30e1d3"]]), He = { class: "w-full" }, Ye = ["onClick"], Oe = { class: "relative aspect-[4/3] rounded-lg border border-gray-200" }, Ge = ["src", "alt", "onError"], Ze = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-2"
}, Fe = { class: "p-3 text-left" }, Ke = {
  key: 0,
  class: "mb-2"
}, qe = { class: "text-sm font-bold text-gray-900 mb-2 line-clamp-1" }, Je = {
  key: 1,
  class: "text-xs text-gray-600 mb-3 line-clamp-3"
}, Qe = {
  key: 2,
  class: "text-xs mb-3"
}, et = {
  key: 3,
  class: "text-xs text-blue-500 mb-3 line-clamp-2"
}, tt = {
  key: 4,
  class: "flex items-center justify-center gap-2"
}, lt = ["onClick"], st = { class: "w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0" }, nt = ["src", "alt"], ot = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, at = { class: "text-xs text-black-700 truncate" }, rt = /* @__PURE__ */ X({
  __name: "UserCreateCards",
  props: {
    shops: { default: () => [] },
    itemsPerRow: { default: 4 },
    maxItems: { default: 8 }
  },
  emits: ["shop-click", "participant-click"],
  setup(h, { emit: w }) {
    const u = h, e = w, v = m(!1), j = m(null), B = m(/* @__PURE__ */ new Set()), P = m(u.maxItems), x = k(() => u.shops.slice(0, P.value)), c = (i) => {
      j.value = i, v.value = !0, e("shop-click", i);
    }, p = (i) => {
      e("participant-click", i);
    }, b = (i) => {
      const f = "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium";
      switch (i) {
        case "blue":
          return `${f} bg-blue-100 text-blue-800`;
        case "yellow":
          return `${f} bg-yellow-100 text-yellow-800`;
        case "gray":
        default:
          return `${f} bg-gray-100 text-gray-800`;
      }
    }, T = (i) => {
      const f = "w-1.5 h-1.5 rounded-full";
      switch (i) {
        case "blue":
          return `${f} bg-blue-400`;
        case "yellow":
          return `${f} bg-yellow-400`;
        case "gray":
        default:
          return `${f} bg-gray-400`;
      }
    }, _ = (i) => {
      B.value.add(i);
    }, E = (i) => i.image && !B.value.has(i.id), I = k(() => {
      const i = u.itemsPerRow;
      let f = "grid grid-cols-1";
      return i >= 2 && (f += " md:grid-cols-2"), i >= 3 && (f += " lg:grid-cols-3"), i >= 4 && (f += " xl:grid-cols-4"), i >= 5 && (f += " 2xl:grid-cols-5"), i >= 6 && (f += " 2xl:grid-cols-6"), `${f} gap-8`;
    });
    return (i, f) => (o(), a("div", He, [
      t("div", {
        class: S(I.value)
      }, [
        (o(!0), a(L, null, V(x.value, (s) => (o(), a("div", {
          key: s.id,
          class: "bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
          onClick: (n) => c(s)
        }, [
          t("div", Oe, [
            E(s) ? (o(), a("img", {
              key: 0,
              src: s.image,
              alt: s.title,
              onError: (n) => _(s.id),
              class: "w-full h-full object-cover"
            }, null, 40, Ge)) : (o(), a("div", Ze, f[0] || (f[0] = [
              t("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                t("svg", {
                  class: "w-4 h-4 text-gray-500",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  t("path", {
                    "fill-rule": "evenodd",
                    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    "clip-rule": "evenodd"
                  })
                ])
              ], -1),
              t("span", { class: "text-xs text-gray-500 text-center" }, [
                A(" 대표이미지"),
                t("br"),
                A("등록 필요 ")
              ], -1)
            ])))
          ]),
          t("div", Fe, [
            s.badge ? (o(), a("div", Ke, [
              t("div", {
                class: S(b(s.badgeColor))
              }, [
                t("div", {
                  class: S(T(s.badgeColor))
                }, null, 2),
                A(" " + $(s.badge), 1)
              ], 2)
            ])) : C("", !0),
            t("h3", qe, $(s.title), 1),
            s.description ? (o(), a("p", Je, $(s.description), 1)) : C("", !0),
            s.period ? (o(), a("p", Qe, $(s.period), 1)) : C("", !0),
            s.hashtags ? (o(), a("p", et, $(s.hashtags), 1)) : C("", !0),
            s.participants && s.participants.length > 0 ? (o(), a("div", tt, [
              (o(!0), a(L, null, V(s.participants, (n) => (o(), a("div", {
                key: n.id,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5",
                onClick: D((r) => p(n), ["stop"])
              }, [
                t("div", st, [
                  n.avatar ? (o(), a("img", {
                    key: 0,
                    src: n.avatar,
                    alt: n.name,
                    class: "w-full h-full object-cover"
                  }, null, 8, nt)) : (o(), a("div", ot, f[1] || (f[1] = [
                    t("svg", {
                      class: "w-2.5 h-2.5 text-gray-400",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      t("path", {
                        "fill-rule": "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])))
                ]),
                t("span", at, $(n.name), 1)
              ], 8, lt))), 128))
            ])) : C("", !0)
          ])
        ], 8, Ye))), 128))
      ], 2)
    ]));
  }
}), it = /* @__PURE__ */ H(rt, [["__scopeId", "data-v-8a83f4f8"]]), ct = { class: "w-full" }, dt = { class: "flex items-stretch gap-4 px-5 flex-wrap" }, ut = ["onClick"], ft = {
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
  setup(h, { emit: w }) {
    const u = h, e = w, v = m(u.modelValue), j = (x) => {
      v.value = x.id, e("update:modelValue", x.id), e("tab-change", x);
    }, B = (x) => {
      const c = v.value === x.id, p = "flex items-center justify-center px-3 py-3 rounded-xl border transition-all duration-200 cursor-pointer";
      return c ? `${p} bg-pink-100 border-pink-400 border-2` : `${p} bg-white border-gray-300 border hover:border-gray-400 hover:bg-gray-50`;
    }, P = (x) => {
      const c = v.value === x.id, p = "text-sm font-bold text-center whitespace-nowrap";
      return c ? `${p} text-pink-500` : `${p} text-gray-700`;
    };
    return Q(
      () => u.modelValue,
      (x) => {
        v.value = x;
      }
    ), (x, c) => (o(), a("div", ct, [
      t("div", dt, [
        (o(!0), a(L, null, V(h.tabs, (p) => (o(), a("button", {
          key: p.id,
          class: S(B(p)),
          onClick: (b) => j(p),
          type: "button"
        }, [
          t("span", {
            class: S(P(p))
          }, $(p.label), 3)
        ], 10, ut))), 128))
      ])
    ]));
  }
}, vt = /* @__PURE__ */ H(ft, [["__scopeId", "data-v-861c3166"]]), pt = ["onClick"], gt = /* @__PURE__ */ X({
  __name: "Swiper",
  props: {
    items: { default: () => [] },
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
  setup(h, { expose: w, emit: u }) {
    const e = h, v = u, j = m(null), B = m(null), P = m(null), x = m(null), c = m(e.initialSlide), p = m(!1), b = m(!1), T = m({ x: 0, y: 0 }), _ = m({ x: 0, y: 0 }), E = m(0), I = m(null), i = k(() => e.loop ? e.items.length - 1 : Math.max(0, e.items.length - e.slidesPerView)), f = k(() => Math.floor(c.value / e.slidesPerView)), s = k(() => {
      const l = Math.ceil(e.items.length / e.slidesPerView);
      return Array.from({ length: l }, (d, g) => g);
    }), n = k(() => e.loop || c.value > 0), r = k(() => e.loop || c.value < i.value), y = k(() => B.value ? (B.value.clientWidth - (e.slidesPerView - 1) * e.spaceBetween) / e.slidesPerView : 0), R = k(() => ({
      overflow: "hidden",
      position: "relative"
    })), le = k(() => {
      const l = -(c.value * (y.value + e.spaceBetween)) + E.value;
      return {
        display: "flex",
        transition: p.value && !b.value ? `transform ${e.speed}ms ${e.easing}` : "none",
        transform: `translateX(${l}px)`,
        gap: `${e.spaceBetween}px`
      };
    }), se = k(() => {
      if (!e.items.length) return { width: "0%", left: "0%" };
      const l = c.value / i.value, d = e.slidesPerView / e.items.length * 100, g = l * (100 - d);
      return {
        width: `${d}%`,
        left: `${g}%`,
        transition: p.value ? `all ${e.speed}ms ${e.easing}` : "none"
      };
    }), ne = k(() => ({
      "swiper-pagination-horizontal": !0,
      "swiper-pagination-bullets": !0
    })), oe = (l, d) => e.keyName && l[e.keyName] ? l[e.keyName] : d, ae = (l) => ({}), re = (l) => ({
      width: `${y.value}px`,
      flexShrink: 0
    }), N = (l, d = e.speed) => {
      if (p.value && !b.value) return;
      const g = Math.max(0, Math.min(l, i.value));
      g !== c.value && (p.value = !0, v("transitionStart", { index: g }), c.value = g, setTimeout(() => {
        p.value = !1, v("transitionEnd", { index: g }), v("slideChange", { index: g, item: e.items[g] }), g === 0 && v("reachBeginning"), g === i.value && v("reachEnd");
      }, d));
    }, z = () => {
      e.loop && c.value === i.value ? N(0) : N(c.value + 1);
    }, W = () => {
      e.loop && c.value === 0 ? N(i.value) : N(c.value - 1);
    }, ie = (l) => {
      e.allowTouchMove && (b.value = !0, T.value = { x: l.clientX, y: l.clientY }, _.value = { x: l.clientX, y: l.clientY }, document.addEventListener("mousemove", Y), document.addEventListener("mouseup", O), v("touchStart", l));
    }, Y = (l) => {
      if (!b.value) return;
      _.value = { x: l.clientX, y: l.clientY };
      const d = (_.value.x - T.value.x) * e.touchRatio;
      E.value = d, v("touchMove", l);
    }, O = (l) => {
      if (!b.value) return;
      const d = _.value.x - T.value.x;
      Math.abs(d) > e.threshold && (d > 0 ? W() : z()), b.value = !1, E.value = 0, document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", O), v("touchEnd", l);
    }, ce = (l) => {
      if (!e.allowTouchMove) return;
      b.value = !0;
      const d = l.touches[0];
      T.value = { x: d.clientX, y: d.clientY }, _.value = { x: d.clientX, y: d.clientY }, v("touchStart", l);
    }, de = (l) => {
      if (!b.value) return;
      const d = l.touches[0];
      _.value = { x: d.clientX, y: d.clientY };
      const g = (_.value.x - T.value.x) * e.touchRatio;
      E.value = g, v("touchMove", l);
    }, ue = (l) => {
      if (!b.value) return;
      const d = _.value.x - T.value.x;
      Math.abs(d) > e.threshold && (d > 0 ? W() : z()), b.value = !1, E.value = 0, v("touchEnd", l);
    }, G = () => {
      if (!e.autoplay) return;
      const l = typeof e.autoplay == "object" && e.autoplay.delay || 3e3;
      I.value = setInterval(() => {
        z();
      }, l);
    }, Z = () => {
      I.value && (clearInterval(I.value), I.value = null);
    };
    return fe(() => {
      e.autoplay && G();
    }), ve(() => {
      Z(), document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", O);
    }), Q(
      () => e.autoplay,
      (l) => {
        l ? G() : Z();
      }
    ), w({
      slideTo: N,
      slideToNext: z,
      slideToPrev: W,
      currentIndex: k(() => c.value),
      isTransitioning: k(() => p.value)
    }), (l, d) => (o(), a("div", {
      class: "swiper-container",
      ref_key: "swiperContainer",
      ref: j
    }, [
      l.showNavigation ? (o(), K(ee, {
        key: 0,
        onClick: W,
        disabled: c.value === 0,
        class: S(["swiper-button-prev", {
          "swiper-button-disabled": c.value === 0,
          "swiper-button-hidden": !n.value
        }])
      }, null, 8, ["disabled", "class"])) : C("", !0),
      t("div", {
        class: "swiper-wrapper",
        ref_key: "swiperWrapper",
        ref: B,
        onMousedown: ie,
        onTouchstart: ce,
        onTouchmove: de,
        onTouchend: ue,
        style: U(R.value)
      }, [
        t("div", {
          class: "swiper-track",
          ref_key: "swiperTrack",
          ref: P,
          style: U(le.value)
        }, [
          (o(!0), a(L, null, V(l.items, (g, M) => (o(), a("div", {
            key: oe(g, M),
            class: S(["swiper-slide", {
              "swiper-slide-active": M === c.value,
              "swiper-slide-prev": M === c.value - 1,
              "swiper-slide-next": M === c.value + 1,
              ...ae()
            }]),
            style: U(re())
          }, [
            q(l.$slots, "default", {
              item: g,
              index: M,
              isActive: M === c.value
            }, () => [
              A($(g), 1)
            ], !0)
          ], 6))), 128))
        ], 4)
      ], 36),
      l.showNavigation ? (o(), K(te, {
        key: 1,
        onClick: z,
        disabled: c.value === i.value,
        class: S(["swiper-button-next", {
          "swiper-button-disabled": c.value === i.value,
          "swiper-button-hidden": !r.value
        }])
      }, null, 8, ["disabled", "class"])) : C("", !0),
      l.showPagination ? (o(), a("div", {
        key: 2,
        class: S(["swiper-pagination", ne.value])
      }, [
        (o(!0), a(L, null, V(s.value, (g, M) => (o(), a("button", {
          key: M,
          onClick: (yt) => N(M * l.slidesPerView),
          class: S(["swiper-pagination-bullet", {
            "swiper-pagination-bullet-active": M === f.value
          }])
        }, [
          q(l.$slots, "pagination-bullet", {
            index: M,
            isActive: M === f.value
          }, () => [
            d[0] || (d[0] = t("span", { class: "swiper-bullet-dot" }, null, -1))
          ], !0)
        ], 10, pt))), 128))
      ], 2)) : C("", !0),
      l.showScrollbar ? (o(), a("div", {
        key: 3,
        class: "swiper-scrollbar",
        ref_key: "scrollbar",
        ref: x
      }, [
        t("div", {
          class: "swiper-scrollbar-drag",
          style: U(se.value)
        }, null, 4)
      ], 512)) : C("", !0)
    ], 512));
  }
}), mt = /* @__PURE__ */ H(gt, [["__scopeId", "data-v-d677a610"]]), J = [De, it, vt, mt], ht = {
  install(h, w = {}) {
    J.forEach((u) => {
      const e = u.__name || u.name || "UnnamedComponent";
      h.component(e, u);
    }), w.prefix && J.forEach((u) => {
      const e = u.__name || u.name || "UnnamedComponent";
      h.component(`${w.prefix}${e}`, u);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ht);
export {
  De as AdminCreateCards,
  mt as Swiper,
  vt as TabGroup,
  it as UserCreateCards,
  ht as default
};
