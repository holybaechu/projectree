<script lang="ts">
	import { resolve } from "$app/paths";

    let {
        name,
        description,
        img,
		slug
    }: {
        name: string;
        description: string;
        img?: string;
		slug: string;
    } = $props();
</script>

<a class="group rounded-xl border transition-all hover:bg-accent overflow-hidden" href={resolve(`/project/${slug}`)}>
    {#if img}
        <div class="aspect-video w-full overflow-hidden bg-gray-100">
            <img
                src={img}
                alt="프로젝트 미리보기"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    {/if}

    <div class="p-5 space-y-1">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
</a>