const puppeteer = require("puppeteer");

exports.snapshot = async function(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  const clip = {
    x: dimensions.width * 0.1,
    y: 96,
    width: dimensions.width * 0.8,
    height: dimensions.height * 0.78
  };
  await page.screenshot({path, clip});
  await browser.close();
};
