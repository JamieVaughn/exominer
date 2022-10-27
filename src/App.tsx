import type { Component } from "solid-js";
import { For } from "solid-js";
import { ores, refined, constructed } from "./data";
import styles from "./App.module.css";

console.log(ores);
const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Exominer</header>
      <ul>
        <For each={Object.entries(ores)}>
          {(ore) => (
            <li>
              {ore[0]}: {ore[1].value}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
