/**
 * @method 加载图片后根据指定尺寸实现图片压缩
 * @param {String} src 图片路径
 * @returns {Object} {canvas, ctx, image, width, height, wh_ratio, hw_ratio, src, compressByWidth: Function, compressByHeight: Function, drawBorderRadius: Function}
 * @example
 * let img = await loadImage('https://pub-cdn-test.2haohr.com/24d3391f856b4198893953aa442a3587')
 * // 根据指定宽度压缩图片
 * let dataUrl = await img.compressByWidth(100, 'image/png')
 */
const loadImage = ({ src, fillStyle = '#fff' } = {}) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      const { width } = image;
      const { height } = image;
      const wh_ratio = image.width / image.height;
      const hw_ratio = image.height / image.width;
      const imageToDataUrl = (width, height, mimeType, quality) => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(mimeType, quality);
        canvas = undefined;
        return dataUrl;
      };
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fillRect(0, 0, image.width, image.height);
      }
      resolve({
        /**
         * 画布
         */
        canvas,
        /**
         * 画布上下文
         */
        ctx,
        /**
         * 图片的Image对象
         */
        image,
        /**
         * 图片宽度
         */
        width,
        /**
         * 图片高度
         */
        height,
        /**
         * 宽高比
         */
        wh_ratio,
        /**
         * 高宽比
         */
        hw_ratio,
        /**
         * 图片链接
         */
        src,
        /**
         * 等比压缩图片到指定宽度
         * @param {*} w 图片最终宽度
         * @param {*} mimeType 内容类型，默认image/jpeg
         * @param {*} quality 图片质量0~1，mimeType = image/jpeg 时有效
         * @returns DataURL
         */
        async compressByWidth(w, mimeType = 'image/jpeg', quality = 0.92) {
          if (!w) {
            return;
          }
          const props = {
            width: w,
            height: Math.ceil(w / wh_ratio),
          };
          const dataUrl = await imageToDataUrl(
            props.width,
            props.height,
            mimeType,
            quality
          );
          return dataUrl;
        },
        /**
         * 等比压缩图片到指定高度
         * @param {*} h 图片最终高度
         * @param {*} mimeType 内容类型，默认image/jpeg
         * @param {*} quality 图片质量0~1，mimeType = image/jpeg 时有效
         * @returns DataURL
         */
        async compressByHeight(h, mimeType = 'image/jpeg', quality = 0.92) {
          if (!h) {
            return;
          }
          const props = {
            width: Math.ceil(h / hw_ratio),
            height: h,
          };
          const dataUrl = await imageToDataUrl(
            props.width,
            props.height,
            mimeType,
            quality
          );
          return dataUrl;
        },
        /**
         * 将图片处理成圆角
         */
        drawBorderRadius({
          x = 0,
          y = 0,
          w = width,
          h = height,
          r = 0,
          fillStyle = '',
        } = {}) {
          ctx.save(); // 保存当前 Canvas 画布状态
          ctx.beginPath();
          // 左上角
          ctx.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI);
          ctx.moveTo(x + r, y);
          ctx.lineTo(x + w - r, y);
          ctx.lineTo(x + w, y + r);
          // 右上角
          ctx.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI);
          ctx.lineTo(x + w, y + h - r);
          ctx.lineTo(x + w - r, y + h);
          // 右下角
          ctx.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI);
          ctx.lineTo(x + r, y + h);
          ctx.lineTo(x, y + h - r);
          // 左下角
          ctx.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI);
          ctx.lineTo(x, y + r);
          ctx.lineTo(x + r, y);

          if (fillStyle) {
            ctx.fillStyle = fillStyle;
          }
          ctx.fill();
          ctx.closePath();

          ctx.clip();
          ctx.drawImage(image, x, y, w, h);
        },
      });
    };
    image.onerror = () => {
      reject();
    };
    image.src = src;
  });

/**
 * 将Logo图像画到指定画布上
 * @param {Object} ctx 画布上下文
 * @param {*} img logo图像
 * @param {*} x 横坐标
 * @param {*} y 纵坐标
 * @param {*} r 半径
 */
const drawLogo = (ctx, img, x, y, r) => {
  ctx.save();
  const d = r * 2;
  const cx = x + r;
  const cy = y + r;
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  // 设置绘制圆形边框的颜色
  ctx.strokeStyle = '#fff';
  // 绘制出圆形，默认为黑色，可通过 ctx.strokeStyle = '#FFFFFF' 控制颜色
  ctx.stroke();
  ctx.clip();
  ctx.drawImage(img, x, y, d, d);
  // ctx.restore() // 恢复到保存时的状态
};

/**
 * 得到白色背景图片
 * @param {Number} width 宽度
 * @param {Number} height 高度
 * @returns 返回Image
 */
const getWhiteBgImage = async (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  return loadImage({ src: canvas.toDataURL('image/png') });
};

/**
 * 合成带logo的小程序码
 * @param {Object} option 选项
 * @param {String} option.src 小程序码链接，可以是DataURL
 * @param {String} option.logoSrc logo链接，可以是DataURL
 * @returns 合成logo后的小程序码DataURL
 */
const composeLogo = async ({ src, logoSrc } = {}) => {
  if (!src) {
    return src;
  }
  if (!logoSrc) {
    return src;
  }
  // logo位置从图片的27.5%处开始
  // logo的宽度是图片的45%
  let [qrcode, logo] = await Promise.all([
    loadImage({ src }),
    loadImage({ src: logoSrc }),
  ]);
  const logoX = qrcode.width * 0.275;
  const logoW = qrcode.width * 0.45;
  const logoR = logoW / 2;

  // 画小程序码
  qrcode.ctx.drawImage(
    qrcode.image,
    0,
    0,
    qrcode.image.width,
    qrcode.image.height
  );

  if (logoSrc) {
    // 获取白底图像
    let whiteLogo = await getWhiteBgImage(logoW, logoW);
    // 等比压缩logo
    const logoDataUrl =
      logo.width >= logo.height
        ? await logo.compressByWidth(logoW, 'image/png')
        : await logo.compressByHeight(logoW, 'image/png');
    // 重新生成logo image
    logo = await loadImage({ src: logoDataUrl });
    // 将logo画到白底图像上
    whiteLogo.ctx.drawImage(
      logo.image,
      (logoW - logo.width) / 2,
      (logoW - logo.height) / 2,
      logo.width,
      logo.height
    );
    // 重新加载白底logo
    whiteLogo = await loadImage({
      src: whiteLogo.canvas.toDataURL('image/png'),
    });
    // 将白底logo合成到小程序码图像上
    drawLogo(qrcode.ctx, whiteLogo.image, logoX, logoX, logoR);
  }

  return qrcode.canvas.toDataURL('image/png');
};
