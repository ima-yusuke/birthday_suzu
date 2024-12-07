import interact from 'interactjs';
import confetti from 'canvas-confetti';

let dragElements = document.querySelectorAll('.yes-drop');

// ドラッグ時の動作を定義
function dragMoveListener(event) {
    var target = event.target;
    // ドラッグ中の要素の現在の位置を計算
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // 要素の位置を更新
    if(target.id === 'radish') {
        target.style.transform = `translate(${x}px, ${y}px) rotate(-10deg)`;
    }else if(target.id === 'strawberry'){
        target.style.transform = `translate(${x}px, ${y}px) rotate(15deg)`;
    }else if(target.id === 'onion'){
        target.style.transform = `translate(${x}px, ${y}px) rotate(45deg)`;
    }else if(target.id === 'mushroom'){
        target.style.transform = `translate(${x}px, ${y}px) rotate(-35deg)`;
    }else if(target.id === 'peach'){
        target.style.transform = `translate(${x}px, ${y}px) rotate(-15deg)`;
    }
    // 新しい位置をデータ属性として保存
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// 野菜ドロップゾーンの設定
interact('.vegetable_dropzone').dropzone({
    accept: '.vegetable',
    overlap: 0.75,

    // ドラッグが開始されたとき
    // ドロップゾーンがアクティブであることを視覚的にユーザーに示す
    ondropactivate: function (event) {
        // event.target.classList.add('drop-active');
        event.relatedTarget.classList.remove('success');

    },
    // ドラッグ中の要素がドロップゾーンに入ったとき
    // ドラッグ可能な要素がドロップゾーンに到達したことを視覚的に示す
    ondragenter: function (event) {
        // var dropzoneElement = event.target;
        // dropzoneElement.classList.add('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンから離れたとき
    // ドロップゾーンを離れたことを視覚的に示す
    ondragleave: function (event) {
        // event.target.classList.remove('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンにドロップされたとき
    // ドロップが成功したことを示す
    ondrop: function (event) {
        event.relatedTarget.classList.add('success');
    },
    // ドロップ操作が完了したとき
    // ドロップゾーンのアクティブ状態を解除する
    ondropdeactivate: function (event) {
        // event.target.classList.remove('drop-active');
        // event.target.classList.remove('drop-target');

        // ドロップが成功していない場合は、元の位置に戻す
        if(!event.relatedTarget.classList.contains('success')){
            if(event.relatedTarget.id === 'radish') {
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-10deg)`;
            }else if(event.relatedTarget.id === 'strawberry'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(15deg)`;
            }else if(event.relatedTarget.id === 'onion'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(45deg)`;
            }else if(event.relatedTarget.id === 'mushroom'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-35deg)`;
            }else if(event.relatedTarget.id === 'peach'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-15deg)`;
            }            event.relatedTarget.setAttribute('data-x', 0);
            event.relatedTarget.setAttribute('data-y', 0);
        }
        CheckAmount();
    }
});

// フルーツドロップゾーンの設定
interact('.fruit_dropzone').dropzone({
    accept: '.fruit',
    overlap: 0.75,

    // ドラッグが開始されたとき
    // ドロップゾーンがアクティブであることを視覚的にユーザーに示す
    ondropactivate: function (event) {
        // event.target.classList.add('drop-active');
        event.relatedTarget.classList.remove('success');

    },
    // ドラッグ中の要素がドロップゾーンに入ったとき
    // ドラッグ可能な要素がドロップゾーンに到達したことを視覚的に示す
    ondragenter: function (event) {
        // var dropzoneElement = event.target;
        // dropzoneElement.classList.add('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンから離れたとき
    // ドロップゾーンを離れたことを視覚的に示す
    ondragleave: function (event) {
        // event.target.classList.remove('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンにドロップされたとき
    // ドロップが成功したことを示す
    ondrop: function (event) {
        event.relatedTarget.classList.add('success');
    },
    // ドロップ操作が完了したとき
    // ドロップゾーンのアクティブ状態を解除する
    ondropdeactivate: function (event) {
        // event.target.classList.remove('drop-active');
        // event.target.classList.remove('drop-target');

        // ドロップが成功していない場合は、元の位置に戻す
        if(!event.relatedTarget.classList.contains('success')){
            if(event.relatedTarget.id === 'radish') {
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-10deg)`;
            }else if(event.relatedTarget.id === 'strawberry'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(15deg)`;
            }else if(event.relatedTarget.id === 'onion'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(45deg)`;
            }else if(event.relatedTarget.id === 'mushroom'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-35deg)`;
            }else if(event.relatedTarget.id === 'peach'){
                event.relatedTarget.style.transform = `translate(0px, 0px) rotate(-15deg)`;
            }
            event.relatedTarget.setAttribute('data-x', 0);
            event.relatedTarget.setAttribute('data-y', 0);
        }
        CheckAmount();
    }
});

// ドラッグ可能な要素の設定
interact('.drag-drop').draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
        })
    ],
    autoScroll: true,
    listeners: { move: dragMoveListener }
});

function fireWork() {

        // ランダムな位置を生成
        const randomX = Math.random(); // 0 から 1 のランダム値
        const randomY = Math.random(); // 0 から 1 のランダム値

        confetti({
            particleCount: 100,
            angle: 90,
            spread: 45,
            origin: {x: randomX, y: randomY}, // ランダムな位置を指定
            colors: ['#ff0000', '#00ff00', '#0000ff'], // 使用する色
            gravity: 0.3, // 重力
            drift: 0, // 左右の揺れ
            scalar: 1, // 粒子のサイズ
        });

}

// 全ての要素がドロップゾーンにドロップされたかどうかを確認する関数
function CheckAmount(){
    for (let i = 0; i < dragElements.length; i++) {
        if(!dragElements[i].classList.contains('success')){
            return;
        }
    }
    const VideoContainer = document.getElementById('video_container');
    VideoContainer.classList.remove("hidden");
    VideoContainer.classList.add("flex");
    const MissionContainer = document.getElementById('mission_container');
    MissionContainer.classList.add("hidden");
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            fireWork();
        }, i * 1000); // 各花火を 1 秒の間隔で順次発生させる
    }
    setTimeout(() => {
        VideoContainer.classList.remove("flex");
        VideoContainer.classList.add('fade-out');
        VideoContainer.classList.add("hidden");
        const AlbumContainer = document.getElementById('album_container');
        AlbumContainer.classList.remove("hidden");
        AlbumContainer.classList.add("flex");

        const images = document.querySelectorAll(".gallery-image");
        let currentIndex = 0;
        const showImage = (index) => {
            images.forEach((img, i) => {
                if (i === index) {
                    img.style.animationDelay = "0s"; // アニメーション開始を即時
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
        };

        const interval = setInterval(() => {
            showImage(currentIndex);
            currentIndex++;

            // 最後の画像で停止
            if (currentIndex >= images.length) {
                clearInterval(interval);
                // 最後の画像を保持
                images[currentIndex - 1].classList.add("active");
            }
        }, 4000); // 各画像を2秒ごとに表示
    }, 5000);
}

