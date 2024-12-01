<x-template title="happy birthday Suzu">

    <section id="top_start_container">
        {{--topページ--}}
        <x-top-page></x-top-page>

        {{--missionスタートページ--}}
        <x-mission-start-page></x-mission-start-page>
    </section>


    {{--missionページ--}}
    <section id="mission_container" class="hidden">
        <img src="{{ asset('storage/img/pic-01.png') }}" alt="pic-01" class="vegetable yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">
        <img src="{{ asset('storage/img/pic-02.png') }}" alt="pic-02" class="fruit yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">


        <div class="flex gap-6">
            <div id="vegetable_dropzone" class="vegetable_dropzone dropzone">野菜エリア</div>
            <div id="fruit-dropzone" class="fruit_dropzone dropzone">フルーツエリア</div>
        </div>

        <section id="container" class="hidden">
            <h1>クリア後に見れるよ！</h1>
        </section>
    </section>

</x-template>
