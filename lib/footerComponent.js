import { createElement } from "./elements.js";

export function createFooterComponent() {
  const footerElement = createElement(
    "footer",
    {
      className: "footerElement",
    },
    [
      createElement(
        "p",
        {
          className: "footerText",
        },
        ["this is the footer"]
      ),
    ]
  );

  return footerElement;
}
