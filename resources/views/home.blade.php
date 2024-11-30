<x-template title="happy birthday Suzu">
    <section class="min-h-screen w-full relative flex justify-center items-center">
        <div class="min-h-screen w-full bg-gray-400 absolute z-20 opacity-50"></div>
        <h1 class="text-center text-xl font-bold absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Happy Birthday SUZU</h1>
        <img src="{{ asset('storage/img/pic-02.jpeg') }}" alt="pic-02" class="object-cover min-h-screen w-full">
    </section>
    <img src="{{ asset('storage/img/pic-01.png') }}" alt="pic-01" class="vegetable yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">
    <img src="{{ asset('storage/img/pic-02.png') }}" alt="pic-02" class="fruit yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">


    <div class="flex gap-6">
        <div id="vegetable_dropzone" class="vegetable_dropzone dropzone">野菜エリア</div>
        <div id="fruit-dropzone" class="fruit_dropzone dropzone">フルーツエリア</div>
    </div>

    <section id="container" class="hidden">
        <h1>クリア後に見れるよ！</h1>
    </section>
</x-template>
