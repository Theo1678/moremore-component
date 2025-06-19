import { defineComponent as J, createElementBlock as o, openBlock as n, createElementVNode as t, ref as h, computed as k, Fragment as P, renderList as L, createTextVNode as A, createCommentVNode as C, toDisplayString as $, normalizeClass as S, withModifiers as U, createVNode as Z, watch as Q, onMounted as fe, onUnmounted as ve, createBlock as F, normalizeStyle as W, renderSlot as K } from "vue";
const pe = {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, me = ["fill"], ee = /* @__PURE__ */ J({
  __name: "IcArrowLeft",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(d) {
    return (x, f) => (n(), o("svg", pe, [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.7714 4.56268C17.1501 5.06762 17.0477 5.78396 16.5428 6.16266L8.61905 12.1055L16.5428 18.0483C17.0477 18.427 17.1501 19.1433 16.7714 19.6483C16.3927 20.1532 15.6763 20.2555 15.1714 19.8768L6.0286 13.0197C5.74082 12.8039 5.57146 12.4652 5.57146 12.1055C5.57146 11.7458 5.74082 11.407 6.0286 11.1912L15.1714 4.33411C15.6763 3.9554 16.3927 4.05773 16.7714 4.56268Z",
        fill: x.color
      }, null, 8, me)
    ]));
  }
}), ge = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, he = ["fill"], te = /* @__PURE__ */ J({
  __name: "IcArrowRight",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(d) {
    return (x, f) => (n(), o("svg", ge, [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.89514 19.6483C6.51643 19.1433 6.61877 18.427 7.12371 18.0483L15.0475 12.1055L7.12371 6.16266C6.61877 5.78395 6.51643 5.06762 6.89514 4.56268C7.27385 4.05773 7.99019 3.9554 8.49513 4.3341L17.6379 11.1912C17.9257 11.407 18.095 11.7457 18.095 12.1055C18.095 12.4652 17.9257 12.8039 17.6379 13.0197L8.49513 19.8768C7.99019 20.2555 7.27385 20.1532 6.89514 19.6483Z",
        fill: x.color
      }, null, 8, he)
    ]));
  }
}), D = (d, x) => {
  const f = d.__vccOpts || d;
  for (const [e, p] of x)
    f[e] = p;
  return f;
}, ye = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start" }, xe = { class: "w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col" }, be = ["onClick"], we = { class: "flex items-center gap-4 h-full" }, _e = { class: "w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden" }, ke = ["src", "alt", "onError"], Ce = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-1"
}, $e = { class: "flex-1 min-w-0 text-left flex flex-col justify-center" }, Se = { class: "flex items-center justify-between gap-3 mb-2" }, Me = { class: "font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2" }, Be = { class: "text-xs font-medium text-gray-800" }, Te = {
  key: 0,
  class: "font-pretendard text-[15px] font-normal leading-[22px] text-gray-500 my-2 line-clamp-2"
}, Ee = {
  key: 1,
  class: "break-words whitespace-normal font-pretendard text-[13px] font-normal leading-[20px] text-blue-500"
}, Ne = { class: "py-6 px-5 mt-auto" }, je = { class: "relative flex items-center justify-center" }, Ie = ["onClick"], Pe = { class: "w-[calc(100%-52px)]" }, Le = { class: "flex items-center justify-center" }, Ve = ["onClick"], Ae = { class: "w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden" }, ze = ["src", "alt"], Xe = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, Re = { class: "font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center" }, We = ["onClick"], Ue = {
  __name: "AdminCreateCards",
  props: {
    shops: {
      type: Array,
      default: () => []
    },
    itemsPerRow: {
      type: Number,
      default: 3
    },
    maxItems: {
      type: Number,
      default: 6
    }
  },
  emits: ["shop-click", "participant-click"],
  setup(d, { emit: x }) {
    const f = d, e = x, p = h(/* @__PURE__ */ new Set()), j = h(f.maxItems), B = k(() => f.shops.slice(0, j.value)), I = (l) => {
      e("shop-click", l);
    }, b = (l) => {
      e("participant-click", l);
    }, c = (l) => {
      const s = "flex items-center gap-2 px-2 py-1 rounded-md";
      switch (l) {
        case "blue":
          return `${s}`;
        case "green":
          return `${s}`;
        case "yellow":
          return `${s}`;
        case "gray":
        default:
          return `${s}`;
      }
    }, m = (l) => {
      const s = "w-2 h-2 rounded-full";
      switch (l) {
        case "yellow":
          return `${s} bg-yellow-400`;
        case "gray":
        default:
          return `${s} bg-gray-400`;
      }
    }, w = (l) => {
      p.value.add(l);
    }, T = (l) => l.image && !p.value.has(l.id), _ = h({}), E = (l, s) => {
      s && (_.value[l] = s);
    }, N = (l, s) => {
      const r = _.value[l];
      if (r) {
        const X = r.scrollLeft + (s === "left" ? -74 : 74);
        r.scrollTo({
          left: X,
          behavior: "smooth"
        });
      }
    }, i = (l) => {
      const s = _.value[l];
      return s && s.scrollLeft > 0;
    }, v = (l) => {
      const s = _.value[l];
      return s ? s && s.scrollLeft < s.scrollWidth - s.clientWidth - 1 : !1;
    };
    return (l, s) => (n(), o("div", ye, [
      (n(!0), o(P, null, L(B.value, (r) => (n(), o("div", {
        key: r.id,
        class: "cursor-pointer transition-transform hover:scale-105 h-full max-w-[380px]"
      }, [
        t("div", xe, [
          t("div", {
            class: "p-3 cursor-pointer flex-grow",
            onClick: (y) => I(r)
          }, [
            t("div", we, [
              t("div", _e, [
                T(r) ? (n(), o("img", {
                  key: 0,
                  src: r.image,
                  alt: r.title,
                  onError: (y) => w(r.id),
                  class: "w-full h-full object-cover"
                }, null, 40, ke)) : (n(), o("div", Ce, s[1] || (s[1] = [
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
                  r.badge ? (n(), o("div", {
                    key: 0,
                    class: S([c(r.badgeColor), "flex-shrink-0"])
                  }, [
                    t("div", {
                      class: S(m(r.badgeColor))
                    }, null, 2),
                    t("span", Be, $(r.badge), 1)
                  ], 2)) : C("", !0)
                ]),
                r.description ? (n(), o("p", Te, $(r.description), 1)) : C("", !0),
                r.period ? (n(), o("p", Ee, $(r.period), 1)) : C("", !0)
              ])
            ])
          ], 8, be),
          s[4] || (s[4] = t("div", { class: "border-t border-gray-200" }, null, -1)),
          t("div", Ne, [
            s[3] || (s[3] = t("h3", { class: "text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2" }, " 참여작가 ", -1)),
            t("div", je, [
              r.participants && r.participants.length >= 5 && i(r.id) ? (n(), o("button", {
                key: 0,
                onClick: U((y) => N(r.id, "left"), ["stop"]),
                class: "absolute no-background left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 focus:outline-none hover:border-none focus:ring-0"
              }, [
                Z(ee)
              ], 8, Ie)) : C("", !0),
              t("div", Pe, [
                t("div", Le, [
                  t("div", {
                    ref_for: !0,
                    ref: (y) => E(r.id, y),
                    class: S(
                      r.participants && r.participants.length >= 5 ? "flex items-center  gap-2 overflow-x-auto scrollbar-hide px-0" : "flex items-center justify-center gap-auto"
                    ),
                    onScroll: s[0] || (s[0] = (y) => l.$forceUpdate())
                  }, [
                    (n(!0), o(P, null, L(r.participants, (y) => (n(), o("div", {
                      key: y.id,
                      class: "w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0",
                      onClick: U((X) => b(y), ["stop"])
                    }, [
                      t("div", Ae, [
                        y.avatar ? (n(), o("img", {
                          key: 0,
                          src: y.avatar,
                          alt: y.name,
                          class: "w-full h-full object-cover"
                        }, null, 8, ze)) : (n(), o("div", Xe, s[2] || (s[2] = [
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
                    ], 8, Ve))), 128))
                  ], 34)
                ])
              ]),
              r.participants && r.participants.length >= 5 && v(r.id) ? (n(), o("button", {
                key: 1,
                onClick: U((y) => N(r.id, "right"), ["stop"]),
                class: "absolute no-background right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 -right-5 focus:outline-none hover:border-none focus:ring-0"
              }, [
                Z(te)
              ], 8, We)) : C("", !0)
            ])
          ])
        ])
      ]))), 128))
    ]));
  }
}, De = /* @__PURE__ */ D(Ue, [["__scopeId", "data-v-e838146b"]]), He = { class: "w-full" }, Ye = ["onClick"], Oe = { class: "relative aspect-[4/3] rounded-lg border border-gray-200" }, Ge = ["src", "alt", "onError"], Ze = {
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
}, lt = ["onClick"], st = { class: "w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0" }, nt = ["src", "alt"], at = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, ot = { class: "text-xs text-black-700 truncate" }, rt = {
  __name: "UserCreateCards",
  props: {
    shops: {
      type: Array,
      default: () => []
    },
    itemsPerRow: {
      type: Number,
      default: 4
    },
    maxItems: {
      type: Number,
      default: 8
    }
  },
  emits: ["shop-click", "participant-click"],
  setup(d, { emit: x }) {
    const f = d, e = x, p = h(!1), j = h(null), B = h(/* @__PURE__ */ new Set()), I = h(f.maxItems), b = k(() => f.shops.slice(0, I.value)), c = (i) => {
      j.value = i, p.value = !0, e("shop-click", i);
    }, m = (i) => {
      e("participant-click", i);
    }, w = (i) => {
      const v = "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium";
      switch (i) {
        case "blue":
          return `${v} bg-blue-100 text-blue-800`;
        case "yellow":
          return `${v} bg-yellow-100 text-yellow-800`;
        case "gray":
        default:
          return `${v} bg-gray-100 text-gray-800`;
      }
    }, T = (i) => {
      const v = "w-1.5 h-1.5 rounded-full";
      switch (i) {
        case "blue":
          return `${v} bg-blue-400`;
        case "yellow":
          return `${v} bg-yellow-400`;
        case "gray":
        default:
          return `${v} bg-gray-400`;
      }
    }, _ = (i) => {
      B.value.add(i);
    }, E = (i) => i.image && !B.value.has(i.id), N = k(() => {
      const i = f.itemsPerRow;
      let v = "grid grid-cols-1";
      return i >= 2 && (v += " md:grid-cols-2"), i >= 3 && (v += " lg:grid-cols-3"), i >= 4 && (v += " xl:grid-cols-4"), i >= 5 && (v += " 2xl:grid-cols-5"), i >= 6 && (v += " 2xl:grid-cols-6"), `${v} gap-8`;
    });
    return (i, v) => (n(), o("div", He, [
      t("div", {
        class: S(N.value)
      }, [
        (n(!0), o(P, null, L(b.value, (l) => (n(), o("div", {
          key: l.id,
          class: "bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
          onClick: (s) => c(l)
        }, [
          t("div", Oe, [
            E(l) ? (n(), o("img", {
              key: 0,
              src: l.image,
              alt: l.title,
              onError: (s) => _(l.id),
              class: "w-full h-full object-cover"
            }, null, 40, Ge)) : (n(), o("div", Ze, v[0] || (v[0] = [
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
            l.badge ? (n(), o("div", Ke, [
              t("div", {
                class: S(w(l.badgeColor))
              }, [
                t("div", {
                  class: S(T(l.badgeColor))
                }, null, 2),
                A(" " + $(l.badge), 1)
              ], 2)
            ])) : C("", !0),
            t("h3", qe, $(l.title), 1),
            l.description ? (n(), o("p", Je, $(l.description), 1)) : C("", !0),
            l.period ? (n(), o("p", Qe, $(l.period), 1)) : C("", !0),
            l.hashtags ? (n(), o("p", et, $(l.hashtags), 1)) : C("", !0),
            l.participants && l.participants.length > 0 ? (n(), o("div", tt, [
              (n(!0), o(P, null, L(l.participants, (s) => (n(), o("div", {
                key: s.id,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5",
                onClick: U((r) => m(s), ["stop"])
              }, [
                t("div", st, [
                  s.avatar ? (n(), o("img", {
                    key: 0,
                    src: s.avatar,
                    alt: s.name,
                    class: "w-full h-full object-cover"
                  }, null, 8, nt)) : (n(), o("div", at, v[1] || (v[1] = [
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
                t("span", ot, $(s.name), 1)
              ], 8, lt))), 128))
            ])) : C("", !0)
          ])
        ], 8, Ye))), 128))
      ], 2)
    ]));
  }
}, it = /* @__PURE__ */ D(rt, [["__scopeId", "data-v-d2366ce7"]]), ct = { class: "w-full" }, ut = { class: "flex items-stretch gap-4 px-5 flex-wrap" }, dt = ["onClick"], ft = {
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
      validator: (d) => ["default", "compact"].includes(d)
    }
  },
  emits: ["update:modelValue", "tab-change"],
  setup(d, { emit: x }) {
    const f = d, e = x, p = h(f.modelValue), j = (b) => {
      p.value = b.id, e("update:modelValue", b.id), e("tab-change", b);
    }, B = (b) => {
      const c = p.value === b.id, m = "flex items-center justify-center px-3 py-3 rounded-xl border transition-all duration-200 cursor-pointer";
      return c ? `${m} bg-pink-100 border-pink-400 border-2` : `${m} bg-white border-gray-300 border hover:border-gray-400 hover:bg-gray-50`;
    }, I = (b) => {
      const c = p.value === b.id, m = "text-sm font-bold text-center whitespace-nowrap";
      return c ? `${m} text-pink-500` : `${m} text-gray-700`;
    };
    return Q(
      () => f.modelValue,
      (b) => {
        p.value = b;
      }
    ), (b, c) => (n(), o("div", ct, [
      t("div", ut, [
        (n(!0), o(P, null, L(d.tabs, (m) => (n(), o("button", {
          key: m.id,
          class: S(B(m)),
          onClick: (w) => j(m),
          type: "button"
        }, [
          t("span", {
            class: S(I(m))
          }, $(m.label), 3)
        ], 10, dt))), 128))
      ])
    ]));
  }
}, vt = /* @__PURE__ */ D(ft, [["__scopeId", "data-v-861c3166"]]), pt = ["onClick"], mt = {
  __name: "Swiper",
  props: {
    // 데이터
    items: {
      type: Array,
      default: () => []
    },
    // 슬라이드 설정
    slidesPerView: {
      type: [Number, String],
      default: 1
    },
    spaceBetween: {
      type: Number,
      default: 0
    },
    centeredSlides: {
      type: Boolean,
      default: !1
    },
    loop: {
      type: Boolean,
      default: !1
    },
    // 네비게이션
    showNavigation: {
      type: Boolean,
      default: !0
    },
    showPagination: {
      type: Boolean,
      default: !0
    },
    showScrollbar: {
      type: Boolean,
      default: !1
    },
    // 자동재생
    autoplay: {
      type: [Boolean, Object],
      default: !1
    },
    // 터치/드래그
    allowTouchMove: {
      type: Boolean,
      default: !0
    },
    touchRatio: {
      type: Number,
      default: 1
    },
    threshold: {
      type: Number,
      default: 10
    },
    // 애니메이션
    speed: {
      type: Number,
      default: 300
    },
    easing: {
      type: String,
      default: "ease-out"
    },
    // 기타
    initialSlide: {
      type: Number,
      default: 0
    },
    keyName: {
      type: String,
      default: null
    },
    // 반응형
    breakpoints: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    "slideChange",
    "reachBeginning",
    "reachEnd",
    "touchStart",
    "touchMove",
    "touchEnd",
    "transitionStart",
    "transitionEnd"
  ],
  setup(d, { expose: x, emit: f }) {
    const e = d, p = f, j = h(null), B = h(null), I = h(null), b = h(null), c = h(e.initialSlide), m = h(!1), w = h(!1), T = h({ x: 0, y: 0 }), _ = h({ x: 0, y: 0 }), E = h(0), N = h(null), i = k(() => e.loop ? e.items.length - 1 : Math.max(0, e.items.length - e.slidesPerView)), v = k(() => Math.floor(c.value / e.slidesPerView)), l = k(() => {
      const a = Math.ceil(e.items.length / e.slidesPerView);
      return Array.from({ length: a }, (u, g) => g);
    }), s = k(() => e.loop || c.value > 0), r = k(() => e.loop || c.value < i.value), y = k(() => B.value ? (B.value.clientWidth - (e.slidesPerView - 1) * e.spaceBetween) / e.slidesPerView : 0), X = k(() => ({
      overflow: "hidden",
      position: "relative"
    })), le = k(() => {
      const a = -(c.value * (y.value + e.spaceBetween)) + E.value;
      return {
        display: "flex",
        transition: m.value && !w.value ? `transform ${e.speed}ms ${e.easing}` : "none",
        transform: `translateX(${a}px)`,
        gap: `${e.spaceBetween}px`
      };
    }), se = k(() => {
      if (!e.items.length) return { width: "0%", left: "0%" };
      const a = c.value / i.value, u = e.slidesPerView / e.items.length * 100, g = a * (100 - u);
      return {
        width: `${u}%`,
        left: `${g}%`,
        transition: m.value ? `all ${e.speed}ms ${e.easing}` : "none"
      };
    }), ne = k(() => ({
      "swiper-pagination-horizontal": !0,
      "swiper-pagination-bullets": !0
    })), ae = (a, u) => e.keyName && a[e.keyName] ? a[e.keyName] : u, oe = (a) => ({}), re = (a) => ({
      width: `${y.value}px`,
      flexShrink: 0
    }), V = (a, u = e.speed) => {
      if (m.value && !w.value) return;
      const g = Math.max(0, Math.min(a, i.value));
      g !== c.value && (m.value = !0, p("transitionStart", g, c.value), c.value = g, setTimeout(() => {
        m.value = !1, p("transitionEnd", g), p("slideChange", g), g === 0 && p("reachBeginning"), g === i.value && p("reachEnd");
      }, u));
    }, z = () => {
      e.loop && c.value === i.value ? V(0) : V(c.value + 1);
    }, R = () => {
      e.loop && c.value === 0 ? V(i.value) : V(c.value - 1);
    }, ie = (a) => {
      e.allowTouchMove && (w.value = !0, T.value = { x: a.clientX, y: a.clientY }, _.value = { x: a.clientX, y: a.clientY }, document.addEventListener("mousemove", H), document.addEventListener("mouseup", Y), p("touchStart", a));
    }, H = (a) => {
      if (!w.value) return;
      _.value = { x: a.clientX, y: a.clientY };
      const u = (_.value.x - T.value.x) * e.touchRatio;
      E.value = u, p("touchMove", a);
    }, Y = (a) => {
      if (!w.value) return;
      const u = _.value.x - T.value.x;
      Math.abs(u) > e.threshold && (u > 0 ? R() : z()), w.value = !1, E.value = 0, document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", Y), p("touchEnd", a);
    }, ce = (a) => {
      if (!e.allowTouchMove) return;
      w.value = !0;
      const u = a.touches[0];
      T.value = { x: u.clientX, y: u.clientY }, _.value = { x: u.clientX, y: u.clientY }, p("touchStart", a);
    }, ue = (a) => {
      if (!w.value) return;
      const u = a.touches[0];
      _.value = { x: u.clientX, y: u.clientY };
      const g = (_.value.x - T.value.x) * e.touchRatio;
      E.value = g, p("touchMove", a);
    }, de = (a) => {
      if (!w.value) return;
      const u = _.value.x - T.value.x;
      Math.abs(u) > e.threshold && (u > 0 ? R() : z()), w.value = !1, E.value = 0, p("touchEnd", a);
    }, O = () => {
      if (!e.autoplay) return;
      const a = typeof e.autoplay == "object" && e.autoplay.delay || 3e3;
      N.value = setInterval(() => {
        z();
      }, a);
    }, G = () => {
      N.value && (clearInterval(N.value), N.value = null);
    };
    return fe(() => {
      e.autoplay && O();
    }), ve(() => {
      G(), document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", Y);
    }), Q(
      () => e.autoplay,
      (a) => {
        a ? O() : G();
      }
    ), x({
      slideTo: V,
      slideToNext: z,
      slideToPrev: R,
      currentIndex: k(() => c.value),
      isTransitioning: k(() => m.value)
    }), (a, u) => (n(), o("div", {
      class: "swiper-container",
      ref_key: "swiperContainer",
      ref: j
    }, [
      d.showNavigation ? (n(), F(ee, {
        key: 0,
        onClick: R,
        disabled: c.value === 0,
        class: S(["swiper-button-prev", {
          "swiper-button-disabled": c.value === 0,
          "swiper-button-hidden": !s.value
        }])
      }, null, 8, ["disabled", "class"])) : C("", !0),
      t("div", {
        class: "swiper-wrapper",
        ref_key: "swiperWrapper",
        ref: B,
        onMousedown: ie,
        onTouchstart: ce,
        onTouchmove: ue,
        onTouchend: de,
        style: W(X.value)
      }, [
        t("div", {
          class: "swiper-track",
          ref_key: "swiperTrack",
          ref: I,
          style: W(le.value)
        }, [
          (n(!0), o(P, null, L(d.items, (g, M) => (n(), o("div", {
            key: ae(g, M),
            class: S(["swiper-slide", {
              "swiper-slide-active": M === c.value,
              "swiper-slide-prev": M === c.value - 1,
              "swiper-slide-next": M === c.value + 1,
              ...oe()
            }]),
            style: W(re())
          }, [
            K(a.$slots, "default", {
              item: g,
              index: M,
              isActive: M === c.value
            }, () => [
              A($(g), 1)
            ], !0)
          ], 6))), 128))
        ], 4)
      ], 36),
      d.showNavigation ? (n(), F(te, {
        key: 1,
        onClick: z,
        disabled: c.value === i.value,
        class: S(["swiper-button-next", {
          "swiper-button-disabled": c.value === i.value,
          "swiper-button-hidden": !r.value
        }])
      }, null, 8, ["disabled", "class"])) : C("", !0),
      d.showPagination ? (n(), o("div", {
        key: 2,
        class: S(["swiper-pagination", ne.value])
      }, [
        (n(!0), o(P, null, L(l.value, (g, M) => (n(), o("button", {
          key: M,
          onClick: (yt) => V(M * d.slidesPerView),
          class: S(["swiper-pagination-bullet", {
            "swiper-pagination-bullet-active": M === v.value
          }])
        }, [
          K(a.$slots, "pagination-bullet", {
            index: M,
            isActive: M === v.value
          }, () => [
            u[0] || (u[0] = t("span", { class: "swiper-bullet-dot" }, null, -1))
          ], !0)
        ], 10, pt))), 128))
      ], 2)) : C("", !0),
      d.showScrollbar ? (n(), o("div", {
        key: 3,
        class: "swiper-scrollbar",
        ref_key: "scrollbar",
        ref: b
      }, [
        t("div", {
          class: "swiper-scrollbar-drag",
          style: W(se.value)
        }, null, 4)
      ], 512)) : C("", !0)
    ], 512));
  }
}, gt = /* @__PURE__ */ D(mt, [["__scopeId", "data-v-c15b0ed7"]]), q = [De, it, vt, gt], ht = {
  install(d, x = {}) {
    q.forEach((f) => {
      const e = f.__name || f.name || "UnnamedComponent";
      d.component(e, f);
    }), x.prefix && q.forEach((f) => {
      const e = f.__name || f.name || "UnnamedComponent";
      d.component(`${x.prefix}${e}`, f);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ht);
export {
  De as AdminCreateCards,
  gt as Swiper,
  vt as TabGroup,
  it as UserCreateCards,
  ht as default
};
