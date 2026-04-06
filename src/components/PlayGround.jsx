// Sandpack-based live JS editor
// Usage: <JSPlayground code={`console.log("hello")`} />

import { Sandpack } from "@codesandbox/sandpack-react";

export default function JSPlayground({ code }) {
  return (
    <Sandpack
      template="node"
      options={{
        layout: "console", // preview | tests | console
      }}
      files={{
        "/index.js": code,
      }}
    />
  );
}
