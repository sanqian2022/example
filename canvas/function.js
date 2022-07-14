function init(id) {
  const canvas = document.querySelector(id);
  const ctx = canvas.getContext("2d");
  return ctx;
}

function drawLine(ctx, p1, p2, color, width) {
  ctx.beginPath();
  ctx.moveTo(...p1);
  ctx.lineTo(...p2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.closePath();
}
