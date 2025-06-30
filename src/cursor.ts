function initCursor(): void {
  document.addEventListener("mousemove", (event: MouseEvent) => {
    // 残像用の要素を作成
    const cursorTrail: HTMLDivElement = document.createElement("div");
    cursorTrail.classList.add("cursor-trail");
    // スクロール量を考慮せず、viewport基準で配置
    cursorTrail.style.left = `${event.clientX}px`;
    cursorTrail.style.top = `${event.clientY}px`;

    // ページに追加
    document.body.appendChild(cursorTrail);

    // 一定時間後に削除
    setTimeout((): void => {
      cursorTrail.remove();
    }, 200);
  });
}

export default initCursor;