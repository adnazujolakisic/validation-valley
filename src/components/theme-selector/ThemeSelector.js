import { consume } from "@lit/context";
import { SignalWatcher } from "@lit-labs/signals";
import { html, LitElement, nothing } from "lit";
import "@awesome.me/webawesome/dist/components/select/select.js";
import "@awesome.me/webawesome/dist/components/option/option.js";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { themeContext } from "../../contexts/theme-context.js";
import { ThemeModes } from "../../core/constants.js";
import { themeSelectorStyles } from "./ThemeSelector.styles.js";

/**
 * ThemeSelector - Allows switching between System, Light, and Dark themes
 * @property {import('../../services/interfaces.js').IThemeService} themeService (from context)
 */
export class ThemeSelector extends SignalWatcher(LitElement) {
	/** @override */
	static styles = themeSelectorStyles;

	@consume({ context: themeContext, subscribe: true })
	accessor themeService =
		/** @type {import('../../services/interfaces.js').IThemeService} */ (
			/** @type {unknown} */ (null)
		);

	constructor() {
		super();
		updateWhenLocaleChanges(this);
	}

	/** @override */
	render() {
		if (!this.themeService) return nothing;

		const current = this.themeService.themeMode.get();

		return html`
			<wa-select
				aria-label="${msg("Theme")}"
				.value="${current}"
				@change="${this.#handleChange}"
			>
				<wa-option value="${ThemeModes.SYSTEM}" ?selected="${current === ThemeModes.SYSTEM}">
					${msg("System")}
				</wa-option>
				<wa-option value="${ThemeModes.LIGHT}" ?selected="${current === ThemeModes.LIGHT}">
					${msg("Light")}
				</wa-option>
				<wa-option value="${ThemeModes.DARK}" ?selected="${current === ThemeModes.DARK}">
					${msg("Dark")}
				</wa-option>
			</wa-select>
		`;
	}

	/**
	 * @param {Event} e
	 */
	#handleChange(/** @type {Event} */ e) {
		const target = /** @type {HTMLSelectElement} */ (e.target);
		const mode = target?.value ?? "";
		if (this.themeService && ["light", "dark", "system"].includes(mode)) {
			this.themeService.setTheme(
				/** @type {import('../../core/constants.js').ThemeMode} */ (mode),
			);
		}
	}
}
