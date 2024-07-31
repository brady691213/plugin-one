<script lang="ts">
	import type MyPlugin from "./main";
	import store from "./store";
	export let variable: number;

	let plugin: MyPlugin;
	store.plugin.subscribe((p) => (plugin = p));
</script>

<div class="number">
  <span>My number is {variable}!</span>
</div>

<html>Svelte: [96mnode_modules/.pnpm/@tsconfig+svelte@5.0.4/node_modules/@tsconfig/svelte/
tsconfig.json[0m:[93m7[0m:[93m25[0m - [91merror[0m[90m TS6046: 
[0mArgument for '--
moduleResolution' option must be: 'node', 'classic', 'node16', 'nodenext'.<br/>[7m7[
0m     &quot;moduleResolution&quot;: &quot;bundler&quot;,<br/>[7m [0m [91m                        ~~~~~~~~~[0m<br/>[96mnode_modules/.pnpm/@tsconfig+svelte@5.0.4/node_modules/@tsconfig/svelte/tsconfig.json[0m:[93m13[0m:[93m5[0m - [91merror[0m[90m TS5023: [0mUnknown compiler option 'verbatimModuleSyntax'.


<style>
  .number {
    color: red;
  }
</style>
