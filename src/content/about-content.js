import { msg } from "@lit/localize";
import adnaImage from "../assets/about/adna-lakisic.png";

export const getAboutSlidesContent = () => [
	{
		title: msg("Validation Valley"),
		lines: [
			msg(
				"An RPG-style talk exploring the bottlenecks AI code generation has uncovered.",
			),
			msg("Built with Lit and Web Awesome."),
		],
	},
	{
		title: msg("Hi, I'm Adna Lakisic"),
		image: adnaImage,
		lines: [msg("Solution Engineer at MetalBear.")],
	},
	{
		title: msg("Special Thanks"),
		lines: [
			msg("This project is based on Legacy's End by Jorge del Casar."),
			msg("Thank you for creating such an inspiring foundation."),
		],
		link: {
			url: "https://github.com/jorgecasar/legacys-end",
			text: msg("View Original Project"),
		},
	},
];
