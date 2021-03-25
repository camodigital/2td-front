module.exports = {
  "stories": [
    '../src/components/**/stories.tsx',
    '../src/templates/**/stories.tsx',
    '../src/sections/**/stories.tsx'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
