import { defineCommand, runMain } from "citty";
import consola from "consola";
import { hello } from "./commands/hello";
import { loadConfig } from "c12";

export { hello };

async function loadDefaultConfig() {
  const { config } = await loadConfig({
    name: "hello-unjs",
    defaults: {
      name: "UnJS",
    },
  });

  return config;
}

const main = defineCommand({
  meta: {
    name: "hello-unjs",
    description: "UnJSで始めるCLIツール",
  },
  args: {
    // オプション引数（--name）の定義
    name: {
      type: "string",
      description: "名前",
      required: false,
    },
  },
  subCommands: {
    // greetサブコマンドの定義
    greet: defineCommand({
      meta: {
        name: "greet",
        description: "挨拶を出力",
      },
      async run() {
        consola.info("Hello, UnJS!");
        return;
      },
    }),
  },
  async run({ args }) {
    const defaultConfig = await loadDefaultConfig();
    const name = args.name || defaultConfig.name;

    hello(name);
  },
});

runMain(main);
