import type { Component } from "solid-js";
import { For } from "solid-js";
import { ores, refined, constructed } from "../data";

export const Arrays: Component = () => {
  return (
    <ul>
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
