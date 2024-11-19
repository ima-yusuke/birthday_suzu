<!DOCTYPE html>
<html lang="ja">
<x-head :title="$title">
    @if(isset($description))
        <meta name="description" content="{{ $description }}"/>
    @endif
    @vite(['resources/css/app.css','resources/css/interact.scss','resources/js/app.js','resources/js/interact.js'])
</x-head>
<body class="h-full md:overflow-hidden xl:overflow-auto">
<main class="flex-1 h-full flex flex-col md:gap-10">
    {{ $slot }}
</main>
</body>
</html>


