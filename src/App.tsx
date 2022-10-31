import type { Component } from "solid-js";
import { For } from "solid-js";
import { ores } from "./data";
import styles from "./App.module.css";
import { Arrays } from "./components/arrays";
import { Components } from "./components/components";
import { SvgBlob } from "./components/svgBlob";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Exominer</header>
      <SvgBlob />
      <ul>
        <h3>Ores</h3>
        <For each={Object.entries(ores)}>
          {(ore) => (
            <li>
              {ore[0]}: {ore[1].value}
            </li>
          )}
        </For>
      </ul>
      <hr />
      <Arrays />
      <hr />
      <Components />
    </div>
  );
};

export default App;
