// igRegisterScript関数を使用して、カスタムテンプレートを登録
igRegisterScript("descriptionTemplate", (context) => {
    // 行データから Description フィールドの値を取得します
    const description = context.cell.row.data.Description;
    // 新しい span 要素を作成します
    const span = document.createElement("span");
    // セルの値を span 要素のテキストコンテンツに設定します
    span.textContent = context.cell.value;
    // Description フィールドの値をツールチップとして設定します
    span.title = description;

    // span要素を返します
    return span;
}, false);