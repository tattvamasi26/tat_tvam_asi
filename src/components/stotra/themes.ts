import type { DevataTheme } from "@/lib/seed/devatas";

/**
 * The hues of each devata's embers. The palettes themselves live in
 * styles/stotra.css under [data-theme]; these are the same colours,
 * handed to the canvas, which cannot read custom properties cheaply.
 */
export const EMBER_HUES: Record<DevataTheme, number[]> = {
  // Dawn: gold, saffron, and the pink of the lotus she sits on.
  savitr: [44, 30, 335],
  // Sindoor and marigold.
  ganapati: [26, 10, 44],
  shiva: [205, 40, 190],
  vishnu: [215, 46, 195],
  devi: [345, 22, 44],
};
