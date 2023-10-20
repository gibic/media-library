<script lang="ts">
    export let text: string
    export let icon: string

</script>
<li class="text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start text-white border-b border-slate-500/20 pb-2 mb-2 last-of-type:border-0 cursor-pointer">
    <img src={`/${icon}`} alt={text} class="md:mr-2"/>
    <span class="text-[10px] md:text-sm font">{text}</span>
</li>