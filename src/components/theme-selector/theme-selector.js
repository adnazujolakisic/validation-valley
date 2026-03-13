import { ThemeSelector } from "./ThemeSelector.js";

if (!customElements.get("theme-selector")) {
	customElements.define("theme-selector", ThemeSelector);
}
