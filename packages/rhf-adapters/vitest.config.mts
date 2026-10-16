import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { playwrightCommands } from 'vitest-browser-commands';

export default defineConfig({
  plugins: [playwrightCommands(), react()],
  test: {
    include: ['src/**/*.spec.{ts,tsx}'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      // The default 414px viewport is narrower than desktop picker popups. Focusing a day then
      // scrolls the page between mousedown and mouseup, so the click misses the day.
      viewport: { width: 1280, height: 800 },
    },
  },
});
