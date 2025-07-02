import { h, defineComponent } from "vue";
import type { Component } from "vue";

export function withMoremoreWrapper(WrappedComponent: Component) {
  return defineComponent({
    name: `Wrapped${WrappedComponent.name || "Component"}`,
    setup(props, { attrs, slots }) {
      return () =>
        h(
          "div",
          {
            class: "moremore-component",
          },
          [
            h(
              WrappedComponent,
              {
                ...props,
                ...attrs,
              },
              slots
            ),
          ]
        );
    },
  });
}
