import interact from 'interactjs';

let dragElements = document.querySelectorAll('.yes-drop');

// ドラッグ時の動作を定義
function dragMoveListener(event) {
    var target = event.target;
    // ドラッグ中の要素の現在の位置を計算
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // 要素の位置を更新
    target.style.transform = `translate(${x}px, ${y}px)`;

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
        event.target.classList.add('drop-active');
        event.relatedTarget.classList.remove('success');

    },
    // ドラッグ中の要素がドロップゾーンに入ったとき
    // ドラッグ可能な要素がドロップゾーンに到達したことを視覚的に示す
    ondragenter: function (event) {
        var dropzoneElement = event.target;
        dropzoneElement.classList.add('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンから離れたとき
    // ドロップゾーンを離れたことを視覚的に示す
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンにドロップされたとき
    // ドロップが成功したことを示す
    ondrop: function (event) {
        event.relatedTarget.classList.add('success');
    },
    // ドロップ操作が完了したとき
    // ドロップゾーンのアクティブ状態を解除する
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');

        // ドロップが成功していない場合は、元の位置に戻す
        if(!event.relatedTarget.classList.contains('success')){
            event.relatedTarget.style.transform = `translate(0px, 0px)`;
            event.relatedTarget.setAttribute('data-x', 0);
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
        event.target.classList.add('drop-active');
        event.relatedTarget.classList.remove('success');

    },
    // ドラッグ中の要素がドロップゾーンに入ったとき
    // ドラッグ可能な要素がドロップゾーンに到達したことを視覚的に示す
    ondragenter: function (event) {
        var dropzoneElement = event.target;
        dropzoneElement.classList.add('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンから離れたとき
    // ドロップゾーンを離れたことを視覚的に示す
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
    },
    // ドラッグ中の要素がドロップゾーンにドロップされたとき
    // ドロップが成功したことを示す
    ondrop: function (event) {
        event.relatedTarget.classList.add('success');
    },
    // ドロップ操作が完了したとき
    // ドロップゾーンのアクティブ状態を解除する
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');

        // ドロップが成功していない場合は、元の位置に戻す
        if(!event.relatedTarget.classList.contains('success')){
            event.relatedTarget.style.transform = `translate(0px, 0px)`;
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

// 全ての要素がドロップゾーンにドロップされたかどうかを確認する関数
function CheckAmount(){
    for (let i = 0; i < dragElements.length; i++) {
        if(!dragElements[i].classList.contains('success')){
            return;
        }
    }
    alert('クリアおめでとう！！！');
    const VideoContainer = document.getElementById('video_container');
    VideoContainer.classList.remove("hidden");
    VideoContainer.classList.add("flex");
    const MissionContainer = document.getElementById('mission_container');
    MissionContainer.classList.add("hidden");
}
