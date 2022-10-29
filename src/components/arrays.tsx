import type { Component } from "solid-js";
import { For } from "solid-js";
import { refined } from "../data";

export const Arrays: Component = () => {
  return (
    <ul>
      <h3>Refined Materials</h3>
      <For each={Object.entries(refined)}>
        {(refine) => (
          <li>
            {refine[0]}: {refine[1].value}
          </li>
        )}
      </For>
    </ul>
  );
};
