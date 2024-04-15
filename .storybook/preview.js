/** @type { import('@storybook/react').Preview } */
// import '../src/frontend/shared/styles/tailwind.css';

const preview = {
  features: {
    crashReports: false,
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
