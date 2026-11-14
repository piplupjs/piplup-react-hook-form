import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';
import { playwrightCommands } from 'vitest-browser-commands';

export default defineConfig({
  plugins: [playwrightCommands(), react()],
  test: {
    browser: {
      enabled: true,
      instances: [{ browser: 'chromium' }],
      provider: playwright(),
      // The default 414px viewport is narrower than desktop picker popups. Focusing a day then
      // scrolls the page between mousedown and mouseup, so the click misses the day.
      viewport: { height: 800, width: 1280 },
    },
    include: ['src/**/*.spec.{ts,tsx}'],
  },
});
