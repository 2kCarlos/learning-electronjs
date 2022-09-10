import { _electron as electron } from "playwright";
import { test } from "@playwright/test";


test("An example unit test", async () => {
    const electronApp = await electron.launch();
    await electronApp.close();
});
