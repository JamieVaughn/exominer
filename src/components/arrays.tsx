import { Component, onMount } from "solid-js";
import { For } from "solid-js";
import { refined } from "../data";
import * as d3 from "d3";
import { min, max, bin } from "d3-array";

export const Arrays: Component = () => {
  let svg,
    width = 600;
  let arr = Object.values(refined);
  let extent = max(arr, (d) => d.value);
  let x = d3.scaleLinear().domain([0, extent]).range([0, width]);
  onMount(() => {
    svg?.call(d3.axisBottom(x));
  });
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
      <p>{min(Object.values(refined), (d) => d.value)}</p>
      <p>{max(Object.values(refined), (d) => d.value)}</p>
      <svg ref={svg} viewBox={`0 0 600 400`} width={width}>
        <g>
          <circle cx={10} cy={10} r={3} fill="black" />
          <For each={Object.values(refined)}>
            {(value, index) => (
              <circle
                cx={(index() * 400) / 15}
                cy={value.value / 200_00}
                r={3}
              />
            )}
          </For>
        </g>
      </svg>
    </ul>
  );
};
