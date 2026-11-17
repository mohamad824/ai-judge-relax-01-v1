import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `The lamp turns once, slow, across the water, and is gone again into the dark.

The keeper climbs the last stair with his kettle. He sets it down beside the chair. The brass is warm where his hand has been all evening. He trims the wick a fraction, no more, and the light steadies.

Below, the sea moves against the rock the way it always has. A gull calls once and settles. The logbook lies open on the desk, the pencil beside it, the day's last line still unfinished.

He does not finish it yet. The lamp turns again. The light goes out over the water, and comes back, and goes, and comes back, and each time it comes back the water holds it a moment longer.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
