/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5ad81597d7c07740de1fc854a037f0e"
  },
  {
    "url": "about/index.html",
    "revision": "5f48ef4e3469c89b6280cb660cb12048"
  },
  {
    "url": "android/android/常用控件.html",
    "revision": "f51c319d54902d24dafde0916fa3a437"
  },
  {
    "url": "android/android/视图的布局.html",
    "revision": "57bca1c90f9cafda4c666da61ba13f0a"
  },
  {
    "url": "android/android/activity的理解.html",
    "revision": "2185c329c9957f92445a161f2a4f4242"
  },
  {
    "url": "android/android/androidBasics.html",
    "revision": "ca7c1b48fdfda59eebbea89f2391befc"
  },
  {
    "url": "android/android/androidKnowledge.html",
    "revision": "c238716f1ed805e5c78b1e45b61d1e27"
  },
  {
    "url": "android/android/index.html",
    "revision": "a74ddd402888765ad6282d7dac93d3b7"
  },
  {
    "url": "assets/css/0.styles.7a4a9328.css",
    "revision": "e7263ecaeafffc06d4485eb390b51dc4"
  },
  {
    "url": "assets/img/1.6fe041c6.jpg",
    "revision": "6fe041c6320b5532cd31b62396795d56"
  },
  {
    "url": "assets/img/11.1cf4c61c.png",
    "revision": "1cf4c61c4c8c0ba5d4e45161135cbeb8"
  },
  {
    "url": "assets/img/22.2c5a265c.jpg",
    "revision": "2c5a265ce24e387a2024f2b9ec72a15a"
  },
  {
    "url": "assets/img/3.a34e5b81.jpg",
    "revision": "a34e5b81094f8085549e5b62c3791b9f"
  },
  {
    "url": "assets/img/4.ce08ac56.jpg",
    "revision": "ce08ac568395cfaf361bf47ca19bffa0"
  },
  {
    "url": "assets/img/5.9fa72469.jpg",
    "revision": "9fa72469d3b72de4b6e65675b02116ae"
  },
  {
    "url": "assets/img/8.1c51639c.png",
    "revision": "1c51639cb9913a02111c9af4b41317d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.54796307.js",
    "revision": "e1798877d5e59f9b32f9f16a535c8b8a"
  },
  {
    "url": "assets/js/10.9e0b0d87.js",
    "revision": "8153e826262d9845286e9af5d1ab4453"
  },
  {
    "url": "assets/js/11.66db152c.js",
    "revision": "c2470668c7b601503fc54ca29121314e"
  },
  {
    "url": "assets/js/12.8eff5435.js",
    "revision": "8a731899880c84a719f02f3f72131a2d"
  },
  {
    "url": "assets/js/13.de6eabb4.js",
    "revision": "6e4540d07c536766039816a3f1fb31b3"
  },
  {
    "url": "assets/js/14.27e08f0a.js",
    "revision": "66cea6d26178189467e348b3778fe67b"
  },
  {
    "url": "assets/js/15.1d0a3e8f.js",
    "revision": "a22550a6afc83b59f67f3ac875dd7de1"
  },
  {
    "url": "assets/js/16.32375800.js",
    "revision": "265795daf2fa759c6a30c1618b269b8d"
  },
  {
    "url": "assets/js/17.3c7685ff.js",
    "revision": "6f1216ce00b5682dab35f3d7c6352ff9"
  },
  {
    "url": "assets/js/18.1a012608.js",
    "revision": "31d302b64c253dbf7e8dc483b82f5b1c"
  },
  {
    "url": "assets/js/19.5bf40a9c.js",
    "revision": "65c5fde612fc160abd734c69f23be1c0"
  },
  {
    "url": "assets/js/20.5c85a8bf.js",
    "revision": "a053881c5be9578877cc0c96d3dfc7b8"
  },
  {
    "url": "assets/js/21.6484ecd7.js",
    "revision": "0efb898a87fb23093fa1b71fe20eb50a"
  },
  {
    "url": "assets/js/22.d9d383b2.js",
    "revision": "742cac4a3bcbd4459470b7643375559b"
  },
  {
    "url": "assets/js/23.0a4456ce.js",
    "revision": "bc1d8ffcdba86cc57a19ad1870b7051c"
  },
  {
    "url": "assets/js/24.c811af30.js",
    "revision": "551767c850a33b23e9b9fa08d8bda68b"
  },
  {
    "url": "assets/js/25.f491616e.js",
    "revision": "757207cb2358bdb188c4948cb011a8ba"
  },
  {
    "url": "assets/js/26.b6e53053.js",
    "revision": "1149d0fae9d510c0f00e12e195a857c8"
  },
  {
    "url": "assets/js/27.fdca15bb.js",
    "revision": "b05d241949ee90a1625026946362a38f"
  },
  {
    "url": "assets/js/28.883b50f6.js",
    "revision": "c740a377fb55d1c490ccab24207e521b"
  },
  {
    "url": "assets/js/29.4117af63.js",
    "revision": "a3e77623b77fee56e2670f91205c4013"
  },
  {
    "url": "assets/js/3.c1569343.js",
    "revision": "396cc8ccc6878458f1c8b7da1420b05b"
  },
  {
    "url": "assets/js/30.99165a14.js",
    "revision": "d6b41633932ce991243a4efb630856ba"
  },
  {
    "url": "assets/js/31.682682c1.js",
    "revision": "0e506e80e6650ad5c2c7c68651699c64"
  },
  {
    "url": "assets/js/32.9af1c170.js",
    "revision": "6af248fe7a75d27f861e5ccc67add53d"
  },
  {
    "url": "assets/js/33.3fc0aa49.js",
    "revision": "d75efe6eaf0180e70fbe08de3de7c1ea"
  },
  {
    "url": "assets/js/34.571472ef.js",
    "revision": "3f99f580573a239cd1a956ee9473f812"
  },
  {
    "url": "assets/js/35.fc681ec2.js",
    "revision": "344291dd9cbcf30c3fd2ca104fefd405"
  },
  {
    "url": "assets/js/36.94b412fa.js",
    "revision": "aff3c5f016a6088993eff3e9ba95cfd7"
  },
  {
    "url": "assets/js/37.a0354b16.js",
    "revision": "c65d2629f33e7f6988e6c42d14b8d07b"
  },
  {
    "url": "assets/js/38.32824c0b.js",
    "revision": "e470751ac7d73df3f88957cd1d0fa036"
  },
  {
    "url": "assets/js/39.75c34c54.js",
    "revision": "d1bc164f840f78194fad6d719af3baa7"
  },
  {
    "url": "assets/js/4.877e64cf.js",
    "revision": "b453145fca196631d772623302fe49ed"
  },
  {
    "url": "assets/js/40.e2d272ae.js",
    "revision": "5cdaf745b477715d18ba4df579ecf1eb"
  },
  {
    "url": "assets/js/41.afd0f196.js",
    "revision": "230e4f404d7d6943f73c199dbfe05947"
  },
  {
    "url": "assets/js/42.1b2b2481.js",
    "revision": "52d227aa31e58e737bd266cc2b775b16"
  },
  {
    "url": "assets/js/43.0aebc648.js",
    "revision": "332db76d0c28dc84b6bae3d0c44ed79a"
  },
  {
    "url": "assets/js/44.14dfec88.js",
    "revision": "edbb8db807d539733dddfaf5066ff3c4"
  },
  {
    "url": "assets/js/45.c5951582.js",
    "revision": "ed151edbb8b8cb2a926cddce7adabc8f"
  },
  {
    "url": "assets/js/46.c11de141.js",
    "revision": "999f6a588cc4af5a4227f8423e67081e"
  },
  {
    "url": "assets/js/47.72593fb5.js",
    "revision": "06d0f5be31481622643c0ecf93c972cc"
  },
  {
    "url": "assets/js/48.bc774c0e.js",
    "revision": "d7a23fb71282bd1ba893b3ddd5adada5"
  },
  {
    "url": "assets/js/49.33d551f0.js",
    "revision": "396850b2e24db43fc06a3c281c97fdaf"
  },
  {
    "url": "assets/js/5.4d0864da.js",
    "revision": "c1eff6dec7cbafa3495ed560eb1653d7"
  },
  {
    "url": "assets/js/6.df095d9e.js",
    "revision": "3775923fa8b3ca26ef4cd28eec2c8b11"
  },
  {
    "url": "assets/js/7.8a652065.js",
    "revision": "b92b0a5f974ecf16f6aa3b625cf7f590"
  },
  {
    "url": "assets/js/8.92e5c5df.js",
    "revision": "5eef9a92b9a3de4e88a1d2355f83146e"
  },
  {
    "url": "assets/js/9.12cfba67.js",
    "revision": "cfa28426bf95687f4fd50d8f4d4e8ee8"
  },
  {
    "url": "assets/js/app.df20760c.js",
    "revision": "c1202774ede716a6fb6d42d5246dabd6"
  },
  {
    "url": "home/cesium/cesium基础.html",
    "revision": "49c505e0e6730b68a998546a7d975492"
  },
  {
    "url": "home/cesium/CZML对象.html",
    "revision": "9ffe8dcba0527ddc2e1b37644ae70209"
  },
  {
    "url": "home/cesium/index.html",
    "revision": "e2bdb1e18deaefe5d0a694fd072a83f6"
  },
  {
    "url": "home/electron/index.html",
    "revision": "0e634d2cf219ac1291268466af580dda"
  },
  {
    "url": "home/javaScript/知识点笔记.html",
    "revision": "267791a082024ab17d9cc083c56a07da"
  },
  {
    "url": "home/javaScript/index.html",
    "revision": "c97d6d6ccc8ec64a42fbdb1a6a490b28"
  },
  {
    "url": "home/react/buildReactFormZero.html",
    "revision": "6e94b97e86488c9d233ca5bc1f21915f"
  },
  {
    "url": "home/react/index.html",
    "revision": "ec8ef9ec320d266bb3386b72af0d6e4b"
  },
  {
    "url": "home/react/react.html",
    "revision": "b7f49846716a7309f0d97c22d990f59d"
  },
  {
    "url": "home/vue/git提交.html",
    "revision": "98bd31cb59389aca7ad2a8adb4126359"
  },
  {
    "url": "home/vue/index.html",
    "revision": "a52975719d99507e7aab39a2ef6ab846"
  },
  {
    "url": "home/vue/vueLog.html",
    "revision": "6d7c5c110c29205af3a7fc4a0774881a"
  },
  {
    "url": "home/vue/vuePress.html",
    "revision": "cf066cfb7d425f7350d07d3ccff7bb40"
  },
  {
    "url": "imgs/logo.png",
    "revision": "aedb62f033032357b27867431129d545"
  },
  {
    "url": "index.html",
    "revision": "0b1a1f506c02d7ce46f0ecf30bd41f1d"
  },
  {
    "url": "linux/linux/命令和快捷键(一).html",
    "revision": "38fbc2b165542a2057817be1d88bc00f"
  },
  {
    "url": "linux/linux/文件操作.html",
    "revision": "789f92388e709796c584dca9d3c7f9ac"
  },
  {
    "url": "linux/linux/index.html",
    "revision": "e579e5c4ad9dc41badce0ac41cdcb6f3"
  },
  {
    "url": "linux/linux/ssh和root账户配置(二).html",
    "revision": "2eb627b1bdb7b2c0a4789e9e545c8397"
  },
  {
    "url": "linux/linux/VIM编辑器大全(三).html",
    "revision": "020ed97c2f62f72a53d15c51de3f961c"
  },
  {
    "url": "linux/linux/VIM编辑器配置(四).html",
    "revision": "2f341145a1e2033df0eab83002a2292a"
  },
  {
    "url": "linux/linux/wordpress环境配置(五).html",
    "revision": "66ee259ef668634fa342a92ee0e15cf4"
  },
  {
    "url": "serve/express应用.html",
    "revision": "8f4a1bb2ebc2ccd429cb1e80182383f2"
  },
  {
    "url": "serve/index.html",
    "revision": "ad9361f10190bc6d440d6a18b36f364e"
  },
  {
    "url": "serve/nodejs基础.html",
    "revision": "abfa24e07880ddb5866b436216e86e5f"
  },
  {
    "url": "serve/nodejs知识点.html",
    "revision": "c34507d0569af0f1bbbf947ee4bd47ea"
  },
  {
    "url": "tags/index.html",
    "revision": "f5abb6120b8baa2e6a1c680da2bbd389"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
