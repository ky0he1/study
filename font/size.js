const size = document.getElementById('test').style.fontSize;    // 初期サイズ 50px
const len = size.length;                                        // 4
const data = size.substr(0, len - 2);                           // "50px"から"50"を取り出す

function changeFontSize(fontSize) {
    var test = document.getElementById('test');
    test.style.fontSize = data * fontSize + 'px';
    console.clear();
    console.log('現在のサイズ: ' + test.style.fontSize);
    console.log('初期サイズ: ' + data + 'px');
}
