import { defineComponent as P, createElementBlock as r, openBlock as o, createElementVNode as e, ref as b, computed as E, Fragment as j, renderList as S, createTextVNode as $, createCommentVNode as v, toDisplayString as p, normalizeClass as h, withModifiers as V, createVNode as M, watch as R } from "vue";
const H = {
  width: "24",
  height: "25",
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, U = ["fill"], D = /* @__PURE__ */ P({
  __name: "IcArrowLeft",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(c) {
    return (u, n) => (o(), r("svg", H, [
      e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.7714 4.56268C17.1501 5.06762 17.0477 5.78396 16.5428 6.16266L8.61905 12.1055L16.5428 18.0483C17.0477 18.427 17.1501 19.1433 16.7714 19.6483C16.3927 20.1532 15.6763 20.2555 15.1714 19.8768L6.0286 13.0197C5.74082 12.8039 5.57146 12.4652 5.57146 12.1055C5.57146 11.7458 5.74082 11.407 6.0286 11.1912L15.1714 4.33411C15.6763 3.9554 16.3927 4.05773 16.7714 4.56268Z",
        fill: u.color
      }, null, 8, U)
    ]));
  }
}), G = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, O = ["fill"], W = /* @__PURE__ */ P({
  __name: "IcArrowRight",
  props: {
    color: { default: () => "#5C6476" }
  },
  setup(c) {
    return (u, n) => (o(), r("svg", G, [
      e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.89514 19.6483C6.51643 19.1433 6.61877 18.427 7.12371 18.0483L15.0475 12.1055L7.12371 6.16266C6.61877 5.78395 6.51643 5.06762 6.89514 4.56268C7.27385 4.05773 7.99019 3.9554 8.49513 4.3341L17.6379 11.1912C17.9257 11.407 18.095 11.7457 18.095 12.1055C18.095 12.4652 17.9257 12.8039 17.6379 13.0197L8.49513 19.8768C7.99019 20.2555 7.27385 20.1532 6.89514 19.6483Z",
        fill: u.color
      }, null, 8, O)
    ]));
  }
}), z = (c, u) => {
  const n = c.__vccOpts || c;
  for (const [f, x] of u)
    n[f] = x;
  return n;
}, Z = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start" }, F = { class: "w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col" }, q = ["onClick"], J = { class: "flex items-center gap-4 h-full" }, K = { class: "w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden" }, Q = ["src", "alt", "onError"], X = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-1"
}, Y = { class: "flex-1 min-w-0 text-left flex flex-col justify-center" }, ee = { class: "flex items-center justify-between gap-3 mb-2" }, te = { class: "font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2" }, le = { class: "text-xs font-medium text-gray-800" }, se = {
  key: 0,
  class: "font-pretendard text-[15px] font-normal leading-[22px] text-gray-500 my-2 line-clamp-2"
}, re = {
  key: 1,
  class: "break-words whitespace-normal font-pretendard text-[13px] font-normal leading-[20px] text-blue-500"
}, oe = { class: "py-6 px-5 mt-auto" }, ne = { class: "relative flex items-center justify-center" }, ae = ["onClick"], ie = { class: "w-[calc(100%-52px)]" }, ce = { class: "flex items-center justify-center" }, de = ["onClick"], ue = { class: "w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden" }, fe = ["src", "alt"], ge = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, me = { class: "font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center" }, pe = ["onClick"], xe = {
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
  setup(c, { emit: u }) {
    const n = c, f = u, x = b(/* @__PURE__ */ new Set()), C = b(n.maxItems), y = E(() => n.shops.slice(0, C.value)), k = (t) => {
      f("shop-click", t);
    }, g = (t) => {
      f("participant-click", t);
    }, _ = (t) => {
      const l = "flex items-center gap-2 px-2 py-1 rounded-md";
      switch (t) {
        case "blue":
          return `${l}`;
        case "green":
          return `${l}`;
        case "yellow":
          return `${l}`;
        case "gray":
        default:
          return `${l}`;
      }
    }, d = (t) => {
      const l = "w-2 h-2 rounded-full";
      switch (t) {
        case "yellow":
          return `${l} bg-yellow-400`;
        case "gray":
        default:
          return `${l} bg-gray-400`;
      }
    }, I = (t) => {
      x.value.add(t);
    }, A = (t) => t.image && !x.value.has(t.id), w = b({}), B = (t, l) => {
      l && (w.value[t] = l);
    }, L = (t, l) => {
      const s = w.value[t];
      if (s) {
        const N = s.scrollLeft + (l === "left" ? -74 : 74);
        s.scrollTo({
          left: N,
          behavior: "smooth"
        });
      }
    }, a = (t) => {
      const l = w.value[t];
      return l && l.scrollLeft > 0;
    }, i = (t) => {
      const l = w.value[t];
      return l ? l && l.scrollLeft < l.scrollWidth - l.clientWidth - 1 : !1;
    };
    return (t, l) => (o(), r("div", Z, [
      (o(!0), r(j, null, S(y.value, (s) => (o(), r("div", {
        key: s.id,
        class: "cursor-pointer transition-transform hover:scale-105 h-full max-w-[380px]"
      }, [
        e("div", F, [
          e("div", {
            class: "p-3 cursor-pointer flex-grow",
            onClick: (m) => k(s)
          }, [
            e("div", J, [
              e("div", K, [
                A(s) ? (o(), r("img", {
                  key: 0,
                  src: s.image,
                  alt: s.title,
                  onError: (m) => I(s.id),
                  class: "w-full h-full object-cover"
                }, null, 40, Q)) : (o(), r("div", X, l[1] || (l[1] = [
                  e("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                    e("svg", {
                      class: "w-4 h-4 text-gray-500",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      e("path", {
                        "fill-rule": "evenodd",
                        d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                        "clip-rule": "evenodd"
                      })
                    ])
                  ], -1),
                  e("span", { class: "text-xs text-gray-500 text-center leading-tight" }, [
                    $(" 대표이미지"),
                    e("br"),
                    $("등록 필요 ")
                  ], -1)
                ])))
              ]),
              e("div", Y, [
                e("div", ee, [
                  e("h2", te, p(s.title), 1),
                  s.badge ? (o(), r("div", {
                    key: 0,
                    class: h([_(s.badgeColor), "flex-shrink-0"])
                  }, [
                    e("div", {
                      class: h(d(s.badgeColor))
                    }, null, 2),
                    e("span", le, p(s.badge), 1)
                  ], 2)) : v("", !0)
                ]),
                s.description ? (o(), r("p", se, p(s.description), 1)) : v("", !0),
                s.period ? (o(), r("p", re, p(s.period), 1)) : v("", !0)
              ])
            ])
          ], 8, q),
          l[4] || (l[4] = e("div", { class: "border-t border-gray-200" }, null, -1)),
          e("div", oe, [
            l[3] || (l[3] = e("h3", { class: "text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2" }, " 참여작가 ", -1)),
            e("div", ne, [
              s.participants && s.participants.length >= 5 && a(s.id) ? (o(), r("button", {
                key: 0,
                onClick: V((m) => L(s.id, "left"), ["stop"]),
                class: "absolute no-background left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 focus:outline-none hover:border-none focus:ring-0"
              }, [
                M(D)
              ], 8, ae)) : v("", !0),
              e("div", ie, [
                e("div", ce, [
                  e("div", {
                    ref_for: !0,
                    ref: (m) => B(s.id, m),
                    class: h(
                      s.participants && s.participants.length >= 5 ? "flex items-center  gap-2 overflow-x-auto scrollbar-hide px-0" : "flex items-center justify-center gap-auto"
                    ),
                    onScroll: l[0] || (l[0] = (m) => t.$forceUpdate())
                  }, [
                    (o(!0), r(j, null, S(s.participants, (m) => (o(), r("div", {
                      key: m.id,
                      class: "w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0",
                      onClick: V((N) => g(m), ["stop"])
                    }, [
                      e("div", ue, [
                        m.avatar ? (o(), r("img", {
                          key: 0,
                          src: m.avatar,
                          alt: m.name,
                          class: "w-full h-full object-cover"
                        }, null, 8, fe)) : (o(), r("div", ge, l[2] || (l[2] = [
                          e("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20"
                          }, [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                              "clip-rule": "evenodd"
                            })
                          ], -1)
                        ])))
                      ]),
                      e("span", me, p(m.name), 1)
                    ], 8, de))), 128))
                  ], 34)
                ])
              ]),
              s.participants && s.participants.length >= 5 && i(s.id) ? (o(), r("button", {
                key: 1,
                onClick: V((m) => L(s.id, "right"), ["stop"]),
                class: "absolute no-background right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 -right-5 focus:outline-none hover:border-none focus:ring-0"
              }, [
                M(W)
              ], 8, pe)) : v("", !0)
            ])
          ])
        ])
      ]))), 128))
    ]));
  }
}, ve = /* @__PURE__ */ z(xe, [["__scopeId", "data-v-e838146b"]]), _e = { class: "w-full" }, be = ["onClick"], he = { class: "relative aspect-[4/3] rounded-lg border border-gray-200" }, ye = ["src", "alt", "onError"], we = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-2"
}, Ce = { class: "p-3 text-left" }, ke = {
  key: 0,
  class: "mb-2"
}, $e = { class: "text-sm font-bold text-gray-900 mb-2 line-clamp-1" }, je = {
  key: 1,
  class: "text-xs text-gray-600 mb-3 line-clamp-3"
}, Se = {
  key: 2,
  class: "text-xs mb-3"
}, Ie = {
  key: 3,
  class: "text-xs text-blue-500 mb-3 line-clamp-2"
}, Le = {
  key: 4,
  class: "flex items-center justify-center gap-2"
}, Ve = ["onClick"], Ae = { class: "w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0" }, Be = ["src", "alt"], Ee = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, ze = { class: "text-xs text-black-700 truncate" }, Ne = {
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
  setup(c, { emit: u }) {
    const n = c, f = u, x = b(!1), C = b(null), y = b(/* @__PURE__ */ new Set()), k = b(n.maxItems), g = E(() => n.shops.slice(0, k.value)), _ = (a) => {
      C.value = a, x.value = !0, f("shop-click", a);
    }, d = (a) => {
      f("participant-click", a);
    }, I = (a) => {
      const i = "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium";
      switch (a) {
        case "blue":
          return `${i} bg-blue-100 text-blue-800`;
        case "yellow":
          return `${i} bg-yellow-100 text-yellow-800`;
        case "gray":
        default:
          return `${i} bg-gray-100 text-gray-800`;
      }
    }, A = (a) => {
      const i = "w-1.5 h-1.5 rounded-full";
      switch (a) {
        case "blue":
          return `${i} bg-blue-400`;
        case "yellow":
          return `${i} bg-yellow-400`;
        case "gray":
        default:
          return `${i} bg-gray-400`;
      }
    }, w = (a) => {
      y.value.add(a);
    }, B = (a) => a.image && !y.value.has(a.id), L = E(() => {
      const a = n.itemsPerRow;
      let i = "grid grid-cols-1";
      return a >= 2 && (i += " md:grid-cols-2"), a >= 3 && (i += " lg:grid-cols-3"), a >= 4 && (i += " xl:grid-cols-4"), a >= 5 && (i += " 2xl:grid-cols-5"), a >= 6 && (i += " 2xl:grid-cols-6"), `${i} gap-8`;
    });
    return (a, i) => (o(), r("div", _e, [
      e("div", {
        class: h(L.value)
      }, [
        (o(!0), r(j, null, S(g.value, (t) => (o(), r("div", {
          key: t.id,
          class: "bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
          onClick: (l) => _(t)
        }, [
          e("div", he, [
            B(t) ? (o(), r("img", {
              key: 0,
              src: t.image,
              alt: t.title,
              onError: (l) => w(t.id),
              class: "w-full h-full object-cover"
            }, null, 40, ye)) : (o(), r("div", we, i[0] || (i[0] = [
              e("div", { class: "w-8 h-8 bg-gray-300 rounded flex items-center justify-center" }, [
                e("svg", {
                  class: "w-4 h-4 text-gray-500",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  e("path", {
                    "fill-rule": "evenodd",
                    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    "clip-rule": "evenodd"
                  })
                ])
              ], -1),
              e("span", { class: "text-xs text-gray-500 text-center" }, [
                $(" 대표이미지"),
                e("br"),
                $("등록 필요 ")
              ], -1)
            ])))
          ]),
          e("div", Ce, [
            t.badge ? (o(), r("div", ke, [
              e("div", {
                class: h(I(t.badgeColor))
              }, [
                e("div", {
                  class: h(A(t.badgeColor))
                }, null, 2),
                $(" " + p(t.badge), 1)
              ], 2)
            ])) : v("", !0),
            e("h3", $e, p(t.title), 1),
            t.description ? (o(), r("p", je, p(t.description), 1)) : v("", !0),
            t.period ? (o(), r("p", Se, p(t.period), 1)) : v("", !0),
            t.hashtags ? (o(), r("p", Ie, p(t.hashtags), 1)) : v("", !0),
            t.participants && t.participants.length > 0 ? (o(), r("div", Le, [
              (o(!0), r(j, null, S(t.participants, (l) => (o(), r("div", {
                key: l.id,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5",
                onClick: V((s) => d(l), ["stop"])
              }, [
                e("div", Ae, [
                  l.avatar ? (o(), r("img", {
                    key: 0,
                    src: l.avatar,
                    alt: l.name,
                    class: "w-full h-full object-cover"
                  }, null, 8, Be)) : (o(), r("div", Ee, i[1] || (i[1] = [
                    e("svg", {
                      class: "w-2.5 h-2.5 text-gray-400",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      e("path", {
                        "fill-rule": "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])))
                ]),
                e("span", ze, p(l.name), 1)
              ], 8, Ve))), 128))
            ])) : v("", !0)
          ])
        ], 8, be))), 128))
      ], 2)
    ]));
  }
}, Me = /* @__PURE__ */ z(Ne, [["__scopeId", "data-v-d2366ce7"]]), Te = { class: "w-full" }, Pe = { class: "flex items-stretch gap-4 px-5 flex-wrap" }, Re = ["onClick"], He = {
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
      validator: (c) => ["default", "compact"].includes(c)
    }
  },
  emits: ["update:modelValue", "tab-change"],
  setup(c, { emit: u }) {
    const n = c, f = u, x = b(n.modelValue), C = (g) => {
      x.value = g.id, f("update:modelValue", g.id), f("tab-change", g);
    }, y = (g) => {
      const _ = x.value === g.id, d = "flex items-center justify-center px-3 py-3 rounded-xl border transition-all duration-200 cursor-pointer";
      return _ ? `${d} bg-pink-100 border-pink-400 border-2` : `${d} bg-white border-gray-300 border hover:border-gray-400 hover:bg-gray-50`;
    }, k = (g) => {
      const _ = x.value === g.id, d = "text-sm font-bold text-center whitespace-nowrap";
      return _ ? `${d} text-pink-500` : `${d} text-gray-700`;
    };
    return R(
      () => n.modelValue,
      (g) => {
        x.value = g;
      }
    ), (g, _) => (o(), r("div", Te, [
      e("div", Pe, [
        (o(!0), r(j, null, S(c.tabs, (d) => (o(), r("button", {
          key: d.id,
          class: h(y(d)),
          onClick: (I) => C(d),
          type: "button"
        }, [
          e("span", {
            class: h(k(d))
          }, p(d.label), 3)
        ], 10, Re))), 128))
      ])
    ]));
  }
}, Ue = /* @__PURE__ */ z(He, [["__scopeId", "data-v-861c3166"]]), T = [ve, Me, Ue], De = {
  install(c, u = {}) {
    T.forEach((n) => {
      const f = n.name || n.__name || "UnnamedComponent";
      c.component(f, n);
    }), u.prefix && T.forEach((n) => {
      const f = n.name || n.__name || "UnnamedComponent";
      c.component(`${u.prefix}${f}`, n);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(De);
export {
  ve as AdminCreateCards,
  Ue as TabGroup,
  Me as UserCreateCards,
  De as default
};
