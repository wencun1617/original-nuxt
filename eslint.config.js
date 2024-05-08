import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['*.css', '**/*.css/**', '*.png', '**/*.png/**', '*.ico', '**/*.ico/**', '*.toml', '**/*.toml/**', '*.patch', '**/*.patch/**', '*.txt', '**/*.txt/**', 'public/', '**/public/**/'],
  unocss: true,
  vue: true,
}, {

})
