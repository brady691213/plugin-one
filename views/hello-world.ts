import {ItemView, WorkspaceLeaf } from "obsidian";
import Component from "./Component.svelte";
import store from "../store";
import MyPlugin from "../main";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class HelloWorldView extends ItemView {

	plugin: MyPlugin;
	component: Component;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl("h4", { text: "Example view" });

		// TASKT: I took a guess here because we had no `.plugin` field.
		store.plugin.set(this.plugin);

		this.component = new Component({
			target: this.contentEl,
			props: {
				variable: 1
			}
		});
	}

	async onClose() {
		this.component.$destroy();
	}
}
