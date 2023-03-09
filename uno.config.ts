import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetUno,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
const colors = require("tailwindcss/colors");

export default defineConfig({
  rules: [
    [/^custom-rules-m-(\d+)$/, ([, d]) => ({ margin: `${ Number(d) / 4}rem` })],
    // To consume the theme in rules:
    // [
    //   /^text-(.*)$/,
    //   ([, c], { theme }) => {
    //     if (theme.colors[c]) return { color: theme.colors[c] };
    //   },
    // ],
  ],
  shortcuts: [
    [
      "shortcuts-card-utilities",
      "text-pink bg-pink-100 text-center my-2 rounded-lg",
      { layer: "utilities" },
    ],
    [
      "shortcuts-card-my-layer",
      "text-blue bg-blue-100 text-center my-2 rounded-lg custom-rules-m-8",
      { layer: "my-layer" },
    ],
    // dynamic shortcuts
    [
      /^dynamic-shortcuts-(.*)$/,
      ([, c]) => `bg-${c}-4 text-${c}-1 py-2 px-4 rounded-lg`,
    ],
  ],
  preflights: [
    {
      getCSS: () => `
        .el-button {
          background-color: var(--el-button-bg-color, var(--el-color-white));
        }
      `,
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom ones
        lobster: "Lobster",
        lato: [
          {
            name: "Lato",
            weights: ["400", "700"],
            italic: true,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
    presetIcons({ /* options */ }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      sm: "325px",
      md: "645px",
      lg: "725px",
    },
    colors: {
      purple: colors.blue,
      "sx-theme-color-test": "blue",
    },
  },
  layers: {
    components: -1,
    default: 1,
    utilities: 2,
    "my-layer": 5,
    "element-layer": 6,
  },
});
