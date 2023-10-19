<script>
  import "../app.css";
</script>
<div class="flex bg-black">
  <aside class="p-5 border border-r border-gray-900">
    <div class="sticky top-4">
      <h1 class="font-bold text-white">Spektakel Media Library</h1>
      <input type="text" placeholder="Search..." class="my-4 border p-1"/>
    </div>
  </aside>
  <div class="container mx-auto p-5">
      <slot />
  </div>
</div>
