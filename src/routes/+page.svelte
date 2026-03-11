<script>
	import Button from "$lib/components/ui/button/button.svelte";

    let count = 0;

    function onClick() {
        count++;
    }
</script>


<!-- 반응형 웹 -->
<Button onclick={onClick}>{count}</Button>