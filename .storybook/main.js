module.exports = {
  stories: [
    '../components/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../modules/**/*.stories.(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
