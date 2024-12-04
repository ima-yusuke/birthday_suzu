<x-template title="happy birthday Suzu">
    <style>
        #top_start_container::before {
            content: "";
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100vh;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('{{ asset('storage/img/flower.JPG') }}');
            background-size: cover;
        }
    </style>
    {{--最初のページ--}}
    <section id="top_start_container" class="relative bg-cover bg-center bg-fixed">
        {{--topページ--}}
        <x-top-page></x-top-page>

        {{--missionスタートページ--}}
        <x-mission-start-page></x-mission-start-page>
    </section>

    {{--missionページ--}}
    <section id="mission_container" class="hidden bg-video">
        <video id="video" class="w-full object-cover" autoplay muted loop playsinline>
            <source src="{{ asset('storage/video/video-01.MP4') }}" type="video/mp4">
        </video>
        <h2 class="text-center text-video-green font-bold text-xl pb-10">野菜と果物に分けてみてね</h2>
        <article class="relative min-h-s max-h-screen w-full">
            <img src="{{ asset('storage/img/pic-01.png') }}" alt="radish" id="radish" class="vegetable absolute right-[3%] bottom-[2%] yes-drop drag-drop object-cover w-[30dvw] h-[30dvw]">
            <img src="{{ asset('storage/img/pic-02.png') }}" alt="strawberry" id="strawberry" class="fruit absolute left-[5%] top-[5%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
            <img src="{{ asset('storage/img/pic-03.png') }}" alt="onion" id="onion" class="vegetable absolute left-[5%] bottom-[8%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
            <img src="{{ asset('storage/img/pic-04.png') }}" alt="mushroom" id="mushroom" class="vegetable absolute right-[2%] top-[3%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
            <img src="{{ asset('storage/img/pic-05.png') }}" alt="peach" id="peach" class="fruit absolute left-[5%] top-[30%] yes-drop drag-drop object-cover w-[20dvw] h-[20dvw]">
            <div class="flex flex-col items-center justify-center gap-4">
                <div id="vegetable_dropzone" class="vegetable_dropzone dropzone flex justify-center items-center text-white font-bold">野菜</div>
                <div id="fruit-dropzone" class="fruit_dropzone dropzone  flex justify-center items-center text-white font-bold">果物</div>
            </div>
        </article>


    </section>

    {{--missionクリア動画ページ--}}
    <section id="video_container" class="hidden bg-video min-h-screen max-h-screen w-full relative">
        <article class="absolute top-[30%] left-16 transform rotate-[25deg] flex flex-col justify-center items-center gap-4">
            <h2 class="text-2xl font-bold text-video-green">大正解!!!</h2>
            <h2 class="text-2xl font-bold text-video-green">おめでとうー!</h2>
        </article>
        <img src="{{ asset('storage/img/pic-07.png') }}" alt="pic07" class="absolute bottom-0 right-2 object-cover w-full h-full">
    </section>


    {{--画像ページ--}}
    <section id="album_container" class="hidden min-h-screen max-h-screen w-full relative">
        <img src="{{ asset('storage/img/album-00.JPG') }}" alt="album01" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-02.JPG') }}" alt="album02" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-03.JPG') }}" alt="album03" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-04.JPG') }}" alt="album04" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-05.JPG') }}" alt="album05" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-06.JPG') }}" alt="album06" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-07.JPG') }}" alt="album07" class="object-cover w-full h-full gallery-image">
        <img src="{{ asset('storage/img/album-08.JPG') }}" alt="album08" class="object-cover w-full h-full gallery-image">

    </section>

</x-template>
