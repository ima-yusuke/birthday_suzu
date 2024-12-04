const TopStartContainer = document.getElementById('top_start_container');
const MissionStartBtn = document.getElementById('mission_start_btn');
const MissionContainer = document.getElementById('mission_container');

let triangles = document.getElementsByClassName('triangle');

// トップ画面の三角形の色を変更するための非同期関数
async function changeColor(triangles, index) {
    // changeColor関数がPromiseを返し、そのPromiseがresolve()されるまでawaitは待機する。
    // つまり、1つのchangeColorが完了した後で次のchangeColorが呼び出される
    return new Promise((resolve) => {
        setTimeout(() => {
            triangles[index].classList.remove('text-white');
            if (index === 0) {
                triangles[2].classList.add('text-white');
            } else {
                triangles[index - 1].classList.add('text-white');
            }
            resolve();// この部分が呼ばれたとき、Promiseが解決される
        }, 300);
    });
}

async function infiniteLoop(triangles) {
    // trueは常にtrueなので、このループは無限に実行される
    while (true) {
        for (let i = 0; i < triangles.length; i++) {
            // awaitを使用し、changeColor関数が非同期関数として完了するまでforループが次の反復に進むことを防ぐ
            await changeColor(triangles, i);
        }
    }
}

// `triangles`が適切に定義されていることを確認した後に関数を呼び出す
infiniteLoop(triangles);


// ミッション画面に切り替え
MissionStartBtn.addEventListener('click', () => {
    TopStartContainer.style.display = 'none';
    MissionContainer.classList.remove('hidden');
    // 全体のスクロールを一番上に設定
    window.scrollTo({
        top: 0,
        behavior: 'instant',
    });
});



