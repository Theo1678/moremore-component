import { defineComponent as P, createElementBlock as s, openBlock as r, createElementVNode as t, ref as b, computed as E, Fragment as j, renderList as S, createTextVNode as $, createCommentVNode as x, toDisplayString as p, normalizeClass as h, withModifiers as V, createVNode as M, watch as R } from "vue";
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
    return (u, n) => (r(), s("svg", H, [
      t("path", {
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
    return (u, n) => (r(), s("svg", G, [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.89514 19.6483C6.51643 19.1433 6.61877 18.427 7.12371 18.0483L15.0475 12.1055L7.12371 6.16266C6.61877 5.78395 6.51643 5.06762 6.89514 4.56268C7.27385 4.05773 7.99019 3.9554 8.49513 4.3341L17.6379 11.1912C17.9257 11.407 18.095 11.7457 18.095 12.1055C18.095 12.4652 17.9257 12.8039 17.6379 13.0197L8.49513 19.8768C7.99019 20.2555 7.27385 20.1532 6.89514 19.6483Z",
        fill: u.color
      }, null, 8, O)
    ]));
  }
}), z = (c, u) => {
  const n = c.__vccOpts || c;
  for (const [f, v] of u)
    n[f] = v;
  return n;
}, Z = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start" }, F = { class: "w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col" }, q = ["onClick"], J = { class: "flex items-center gap-4 h-full" }, K = { class: "w-24 h-24 rounded-full border border-gray-300 bg-gray-50 flex-shrink-0 overflow-hidden" }, Q = ["src", "alt", "onError"], X = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-1"
}, Y = { class: "flex-1 min-w-0 text-left flex flex-col justify-center" }, ee = { class: "flex items-center justify-between gap-3 mb-2" }, te = { class: "font-pretendard text-[17px] font-bold leading-[22px] line-clamp-2" }, le = { class: "text-xs font-medium text-gray-800" }, se = {
  key: 0,
  class: "font-pretendard text-[15px] font-normal leading-[22px] text-gray-500 my-2 line-clamp-2"
}, re = {
  key: 1,
  class: "font-pretendard text-[13px] font-normal leading-[20px] text-blue-500"
}, oe = { class: "p-6 mt-auto" }, ne = { class: "relative" }, ae = ["onClick"], ie = ["onClick"], ce = ["onClick"], de = { class: "w-8 h-8 rounded-full border border-gray-300 bg-gray-50 overflow-hidden" }, ue = ["src", "alt"], fe = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, ge = { class: "font-pretendard text-[13px] font-normal leading-[20px] line-clamp-1 text-center" }, me = {
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
    const n = c, f = u, v = b(/* @__PURE__ */ new Set()), C = b(n.maxItems), y = E(() => n.shops.slice(0, C.value)), k = (e) => {
      f("shop-click", e);
    }, g = (e) => {
      f("participant-click", e);
    }, _ = (e) => {
      const l = "flex items-center gap-2 px-2 py-1 rounded-md";
      switch (e) {
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
    }, d = (e) => {
      const l = "w-2 h-2 rounded-full";
      switch (e) {
        case "yellow":
          return `${l} bg-yellow-400`;
        case "gray":
        default:
          return `${l} bg-gray-400`;
      }
    }, I = (e) => {
      v.value.add(e);
    }, A = (e) => e.image && !v.value.has(e.id), w = b({}), B = (e, l) => {
      l && (w.value[e] = l);
    }, L = (e, l) => {
      const o = w.value[e];
      if (o) {
        const N = o.scrollLeft + (l === "left" ? -80 : 80);
        o.scrollTo({
          left: N,
          behavior: "smooth"
        });
      }
    }, a = (e) => {
      const l = w.value[e];
      return l && l.scrollLeft > 0;
    }, i = (e) => {
      const l = w.value[e];
      return l && l.scrollLeft < l.scrollWidth - l.clientWidth;
    };
    return (e, l) => (r(), s("div", Z, [
      (r(!0), s(j, null, S(y.value, (o) => (r(), s("div", {
        key: o.id,
        class: "cursor-pointer transition-transform hover:scale-105 h-full"
      }, [
        t("div", F, [
          t("div", {
            class: "p-3 cursor-pointer flex-grow",
            onClick: (m) => k(o)
          }, [
            t("div", J, [
              t("div", K, [
                A(o) ? (r(), s("img", {
                  key: 0,
                  src: o.image,
                  alt: o.title,
                  onError: (m) => I(o.id),
                  class: "w-full h-full object-cover"
                }, null, 40, Q)) : (r(), s("div", X, l[1] || (l[1] = [
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
                    $(" 대표이미지"),
                    t("br"),
                    $("등록 필요 ")
                  ], -1)
                ])))
              ]),
              t("div", Y, [
                t("div", ee, [
                  t("h2", te, p(o.title), 1),
                  o.badge ? (r(), s("div", {
                    key: 0,
                    class: h([_(o.badgeColor), "flex-shrink-0"])
                  }, [
                    t("div", {
                      class: h(d(o.badgeColor))
                    }, null, 2),
                    t("span", le, p(o.badge), 1)
                  ], 2)) : x("", !0)
                ]),
                o.description ? (r(), s("p", se, p(o.description), 1)) : x("", !0),
                o.period ? (r(), s("p", re, p(o.period), 1)) : x("", !0)
              ])
            ])
          ], 8, q),
          l[4] || (l[4] = t("div", { class: "border-t border-gray-200" }, null, -1)),
          t("div", oe, [
            l[3] || (l[3] = t("h3", { class: "text-left font-pretendard text-[15px] font-bold leading-[22px] mb-2" }, " 참여작가 ", -1)),
            t("div", ne, [
              o.participants && o.participants.length >= 5 && a(o.id) ? (r(), s("button", {
                key: 0,
                onClick: V((m) => L(o.id, "left"), ["stop"]),
                class: "absolute no-background left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 -left-4"
              }, [
                M(D)
              ], 8, ae)) : x("", !0),
              o.participants && o.participants.length >= 5 && i(o.id) ? (r(), s("button", {
                key: 1,
                onClick: V((m) => L(o.id, "right"), ["stop"]),
                class: "absolute no-background right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-0 -right-4"
              }, [
                M(W)
              ], 8, ie)) : x("", !0),
              t("div", {
                ref_for: !0,
                ref: (m) => B(o.id, m),
                class: h(
                  o.participants && o.participants.length >= 5 ? "flex items-center gap-2 overflow-x-auto scrollbar-hide px-0" : "flex items-center justify-center gap-auto"
                ),
                onScroll: l[0] || (l[0] = (m) => e.$forceUpdate())
              }, [
                (r(!0), s(j, null, S(o.participants, (m) => (r(), s("div", {
                  key: m.id,
                  class: "w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0",
                  onClick: V((N) => g(m), ["stop"])
                }, [
                  t("div", de, [
                    m.avatar ? (r(), s("img", {
                      key: 0,
                      src: m.avatar,
                      alt: m.name,
                      class: "w-full h-full object-cover"
                    }, null, 8, ue)) : (r(), s("div", fe, l[2] || (l[2] = [
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
                  t("span", ge, p(m.name), 1)
                ], 8, ce))), 128))
              ], 34)
            ])
          ])
        ])
      ]))), 128))
    ]));
  }
}, pe = /* @__PURE__ */ z(me, [["__scopeId", "data-v-ecfce39f"]]), ve = { class: "w-full" }, xe = ["onClick"], _e = { class: "relative aspect-[4/3] rounded-lg border border-gray-200" }, be = ["src", "alt", "onError"], he = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center gap-2"
}, ye = { class: "p-3 text-left" }, we = {
  key: 0,
  class: "mb-2"
}, Ce = { class: "text-sm font-bold text-gray-900 mb-2 line-clamp-1" }, ke = {
  key: 1,
  class: "text-xs text-gray-600 mb-3 line-clamp-3"
}, $e = {
  key: 2,
  class: "text-xs mb-3"
}, je = {
  key: 3,
  class: "text-xs text-blue-500 mb-3 line-clamp-2"
}, Se = {
  key: 4,
  class: "flex items-center justify-center gap-2"
}, Ie = ["onClick"], Le = { class: "w-5 h-5 rounded-full border border-gray-300 bg-white overflow-hidden flex-shrink-0" }, Ve = ["src", "alt"], Ae = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
}, Be = { class: "text-xs text-black-700 truncate" }, Ee = {
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
    const n = c, f = u, v = b(!1), C = b(null), y = b(/* @__PURE__ */ new Set()), k = b(n.maxItems), g = E(() => n.shops.slice(0, k.value)), _ = (a) => {
      C.value = a, v.value = !0, f("shop-click", a);
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
    return (a, i) => (r(), s("div", ve, [
      t("div", {
        class: h(L.value)
      }, [
        (r(!0), s(j, null, S(g.value, (e) => (r(), s("div", {
          key: e.id,
          class: "bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
          onClick: (l) => _(e)
        }, [
          t("div", _e, [
            B(e) ? (r(), s("img", {
              key: 0,
              src: e.image,
              alt: e.title,
              onError: (l) => w(e.id),
              class: "w-full h-full object-cover"
            }, null, 40, be)) : (r(), s("div", he, i[0] || (i[0] = [
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
                $(" 대표이미지"),
                t("br"),
                $("등록 필요 ")
              ], -1)
            ])))
          ]),
          t("div", ye, [
            e.badge ? (r(), s("div", we, [
              t("div", {
                class: h(I(e.badgeColor))
              }, [
                t("div", {
                  class: h(A(e.badgeColor))
                }, null, 2),
                $(" " + p(e.badge), 1)
              ], 2)
            ])) : x("", !0),
            t("h3", Ce, p(e.title), 1),
            e.description ? (r(), s("p", ke, p(e.description), 1)) : x("", !0),
            e.period ? (r(), s("p", $e, p(e.period), 1)) : x("", !0),
            e.hashtags ? (r(), s("p", je, p(e.hashtags), 1)) : x("", !0),
            e.participants && e.participants.length > 0 ? (r(), s("div", Se, [
              (r(!0), s(j, null, S(e.participants, (l) => (r(), s("div", {
                key: l.id,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 rounded-full p-1.5",
                onClick: V((o) => d(l), ["stop"])
              }, [
                t("div", Le, [
                  l.avatar ? (r(), s("img", {
                    key: 0,
                    src: l.avatar,
                    alt: l.name,
                    class: "w-full h-full object-cover"
                  }, null, 8, Ve)) : (r(), s("div", Ae, i[1] || (i[1] = [
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
                t("span", Be, p(l.name), 1)
              ], 8, Ie))), 128))
            ])) : x("", !0)
          ])
        ], 8, xe))), 128))
      ], 2)
    ]));
  }
}, ze = /* @__PURE__ */ z(Ee, [["__scopeId", "data-v-d2366ce7"]]), Ne = { class: "w-full" }, Me = { class: "flex items-stretch gap-4 px-5 flex-wrap" }, Te = ["onClick"], Pe = {
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
    const n = c, f = u, v = b(n.modelValue), C = (g) => {
      v.value = g.id, f("update:modelValue", g.id), f("tab-change", g);
    }, y = (g) => {
      const _ = v.value === g.id, d = "flex items-center justify-center px-3 py-3 rounded-xl border transition-all duration-200 cursor-pointer";
      return _ ? `${d} bg-pink-100 border-pink-400 border-2` : `${d} bg-white border-gray-300 border hover:border-gray-400 hover:bg-gray-50`;
    }, k = (g) => {
      const _ = v.value === g.id, d = "text-sm font-bold text-center whitespace-nowrap";
      return _ ? `${d} text-pink-500` : `${d} text-gray-700`;
    };
    return R(
      () => n.modelValue,
      (g) => {
        v.value = g;
      }
    ), (g, _) => (r(), s("div", Ne, [
      t("div", Me, [
        (r(!0), s(j, null, S(c.tabs, (d) => (r(), s("button", {
          key: d.id,
          class: h(y(d)),
          onClick: (I) => C(d),
          type: "button"
        }, [
          t("span", {
            class: h(k(d))
          }, p(d.label), 3)
        ], 10, Te))), 128))
      ])
    ]));
  }
}, Re = /* @__PURE__ */ z(Pe, [["__scopeId", "data-v-861c3166"]]), T = [pe, ze, Re], He = {
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
typeof window < "u" && window.Vue && window.Vue.use(He);
export {
  pe as AdminCreateCards,
  Re as TabGroup,
  ze as UserCreateCards,
  He as default
};
