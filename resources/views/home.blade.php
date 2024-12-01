<x-template title="happy birthday Suzu">

    {{--最初のページ--}}
    <section id="top_start_container">
        {{--topページ--}}
        <x-top-page></x-top-page>

        {{--missionスタートページ--}}
        <x-mission-start-page></x-mission-start-page>
    </section>

    {{--missionページ--}}
    <section id="mission_container" class="hidden min-h-screen max-h-screen w-full relative">
        <img src="{{ asset('storage/img/pic-01.png') }}" alt="radish" class="vegetable absolute right-[3%] bottom-[2%] yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">
        <img src="{{ asset('storage/img/pic-02.png') }}" alt="strawberry" class="fruit absolute left-[20%] top-[5%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-03.png') }}" alt="onion" class="vegetable absolute left-[5%] bottom-[8%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-04.png') }}" alt="mushroom" class="vegetable absolute left-[60%] top-[3%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-05.png') }}" alt="peach" class="fruit absolute left-[5%] top-[30%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">


        <div class="flex gap-6">
            <div id="vegetable_dropzone" class="vegetable_dropzone dropzone">野菜エリア</div>
            <div id="fruit-dropzone" class="fruit_dropzone dropzone">フルーツエリア</div>
        </div>
    </section>

    {{--missionクリア動画ページ--}}
    <section id="video_container" class="hidden min-h-screen max-h-screen w-full relative">
        <article class="flex flex-col justify-center items-center gap-4">
            <h2 class="text-2xl">大正解</h2>
            <h2 class="text-2xl">おめでとう</h2>
        </article>
        <video id="video" class="w-full h-full object-cover" autoplay muted loop>
            <source src="{{ asset('storage/video/video-01.mp4') }}" type="video/mp4">
        </video>
    </section>

</x-template>
