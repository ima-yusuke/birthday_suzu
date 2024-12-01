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
        <img src="{{ asset('storage/img/pic-01.png') }}" alt="radish" id="radish" class="vegetable absolute right-[3%] bottom-[2%] yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">
        <img src="{{ asset('storage/img/pic-02.png') }}" alt="strawberry" id="strawberry" class="fruit absolute left-[5%] top-[5%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-03.png') }}" alt="onion" id="onion" class="vegetable absolute left-[5%] bottom-[8%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-04.png') }}" alt="mushroom" id="mushroom" class="vegetable absolute right-[2%] top-[3%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
        <img src="{{ asset('storage/img/pic-05.png') }}" alt="peach" id="peach" class="fruit absolute left-[5%] top-[30%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">


        <div class="flex flex-col items-center justify-center gap-4">
            <div id="vegetable_dropzone" class="vegetable_dropzone dropzone flex justify-center items-center">野菜</div>
            <h2>野菜と果物に分けてみてね</h2>
            <div id="fruit-dropzone" class="fruit_dropzone dropzone  flex justify-center items-center">果物</div>
        </div>
    </section>

    {{--missionクリア動画ページ--}}
    <section id="video_container" class="hidden bg-video flex-col justify-end items-center gap-8 min-h-screen max-h-screen w-full relative">
        <article class="flex flex-col justify-center items-center gap-4">
            <h2 class="text-2xl">大正解</h2>
            <h2 class="text-2xl">おめでとう</h2>
        </article>
        <video id="video" class="w-full h-full object-cover" autoplay muted loop playsinline>
            <source src="{{ asset('storage/video/video-01.MP4') }}" type="video/mp4">
        </video>
    </section>

</x-template>
