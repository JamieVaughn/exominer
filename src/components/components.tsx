import type { Component } from "solid-js";
import { For } from "solid-js";
import { constructed } from "../data";

export const Components: Component = () => {
  return (
    <ul>
      <h3>Components</h3>
      <For each={Object.entries(constructed)}>
        {(construct) => (
          <li>
            {construct[0]}: {construct[1].value}
          </li>
        )}
      </For>
    </ul>
  );
};
