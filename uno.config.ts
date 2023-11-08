import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetUno,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  transformerAttributifyJsx
} from "unocss";
import { extractorSplit } from '@unocss/core'
import extractorPug from '@unocss/extractor-pug'
import colors from "tailwindcss/colors";

export default defineConfig({
  rules: [
    [/^custom-rules-m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })],
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
    presetAttributify({
      // 如果属性名称与元素或组件的属性名称发生冲突，您可以在属性名称前添加 un- 前缀以指定为 UnoCSS 的属性模式
      prefix: 'un-',
      //强制前缀
      // prefixedOnly: true,
      // ignoreAttributes: [
      //   'text'
      // ]
    }),
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
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(), //  Windi CSS 的 变体组特性
    transformerAttributifyJsx(), // Support valueless attributify in JSX/TSX
  ],
  // 提取器用于从源代码中提取工具的使用情况。
  extractors: [extractorPug(), extractorSplit],
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
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith('hover:'))
        return matcher
      return {
        // matcher 控制变体何时启用。如果返回值是字符串，则将其用作匹配规则的选择器。
        // 去掉前缀并将其传递给下一个变体和规则
        matcher: matcher.slice(6),
        //  提供了自定义生成的 CSS 选择器的可用性
        selector: s => {
          return `${s}:hover`
        },
      }
    },
    //yh:
    (matcher) => {
      if (!matcher.startsWith('yh:'))
        return matcher
      return {
        matcher: matcher.slice(3),
        //  提供了自定义生成的 CSS 选择器的可用性
        selector: s => {
          // console.log("🚀 ~ file: uno.config.ts:130 ~ s:", s)
          return `${s}:hover`
        },
      }
    },
  ],
});
