import '../src/styles/global.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0D0F19',
        },
      ],
    },
  },
};

export default preview;
