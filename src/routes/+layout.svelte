<!-- 상단 바 -->
<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />

<div class="flex justify-between p-3">
	<div class="flex items-center">
		<!-- 버튼 -->
		<Button
			variant="ghost"
			href="/"
			class="bg-linear-to-r from-blue-300 to-green-600 bg-clip-text text-lg font-bold text-transparent"
			size="lg">ProjecTREE</Button
		>
		<Button variant="ghost" href="/project">프로젝트</Button>
		<Button variant="ghost" href="/explore">둘러보기</Button>
	</div>

	<div class="flex flex-row gap-2">
		<!-- 다크모드 -->
		<Button onclick={toggleMode} variant="ghost" size="icon">
			<SunIcon
				class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
			/>
			<MoonIcon
				class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</div>

{@render children()}
