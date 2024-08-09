igRegisterScript("onRowDelete", (args) => {
    var result = window.confirm('行を削除しますか？');
    if (result) {
        console.log('OK がクリックされました');
    }
    else {
        args.detail.cancel = true;
        console.log('キャンセルがクリックされました');
    }
}, false);