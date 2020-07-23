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
    "revision": "06c254e59c478fa2ac39e9951afbfe66"
  },
  {
    "url": "about/index.html",
    "revision": "83d722e66e475563d5a01f1cbfc3f29b"
  },
  {
    "url": "android/android/常用控件.html",
    "revision": "027731f66cf61453bdd536bef5434c3f"
  },
  {
    "url": "android/android/视图的布局.html",
    "revision": "56e71c1aeeccc6313a445e59b3cb09bf"
  },
  {
    "url": "android/android/activity的理解.html",
    "revision": "b107ca6cb40859d106e03aa2c1cbe559"
  },
  {
    "url": "android/android/androidBasics.html",
    "revision": "ee52d0b4602ec6399b3c423744c3d909"
  },
  {
    "url": "android/android/androidKnowledge.html",
    "revision": "0ee41077327aacc5529b9071b5094102"
  },
  {
    "url": "android/android/index.html",
    "revision": "45a83bb09d68e2a7b6d3ab4d5ff390f3"
  },
  {
    "url": "assets/css/0.styles.a90d73dc.css",
    "revision": "138e495ff5f77dac2ac42644504d84ae"
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
    "url": "assets/js/1.938a95ef.js",
    "revision": "f4ea7ca59da3895f55181d0824ed6f86"
  },
  {
    "url": "assets/js/10.8c754860.js",
    "revision": "8d4ffea8970ae5542d133d40c47f0d6b"
  },
  {
    "url": "assets/js/11.6164fce0.js",
    "revision": "dc8c369c804db0a0e75eee97a90c540b"
  },
  {
    "url": "assets/js/12.1b0e4442.js",
    "revision": "22d40c6d87f68dcf2271de7c9b99e879"
  },
  {
    "url": "assets/js/13.5dc033b2.js",
    "revision": "d24d2e0ad95e7fbf0ef77f42a35b94ae"
  },
  {
    "url": "assets/js/14.4261238a.js",
    "revision": "b3ce5a70721d64d316008835b0b2ff73"
  },
  {
    "url": "assets/js/15.777fa8f2.js",
    "revision": "f5c42b1c715147899e31768c6e86e05e"
  },
  {
    "url": "assets/js/16.34d113d5.js",
    "revision": "9da0657e94e9f18513f7d7aa1fa74698"
  },
  {
    "url": "assets/js/17.b3811cfc.js",
    "revision": "32592bd79f7509d36a9cc79a1e177ea9"
  },
  {
    "url": "assets/js/18.292549f4.js",
    "revision": "beb58501c5965d0e1655870e44f3ac4e"
  },
  {
    "url": "assets/js/19.f9d37764.js",
    "revision": "7c6e4b60e0e6a7e4e5b71e79633c332a"
  },
  {
    "url": "assets/js/20.f9969551.js",
    "revision": "d2c3071a6d47339731b5b48380e21633"
  },
  {
    "url": "assets/js/21.be88e609.js",
    "revision": "41b1024bcf37cb45044daf8d00e3a33a"
  },
  {
    "url": "assets/js/22.ec7c679a.js",
    "revision": "8732f3d0cfdb876920331df8191b54e7"
  },
  {
    "url": "assets/js/23.205c21dc.js",
    "revision": "dca3e6d38418022a86d526b8ff8909e7"
  },
  {
    "url": "assets/js/24.f8155035.js",
    "revision": "148072c3480f96443a1d7e0252e8a934"
  },
  {
    "url": "assets/js/25.140b84dc.js",
    "revision": "b993e1b0e87298625899e9bf15ab2ebc"
  },
  {
    "url": "assets/js/26.f782b038.js",
    "revision": "0092e45c518d105e455612c21d1ee114"
  },
  {
    "url": "assets/js/27.4619d9d7.js",
    "revision": "3b7c8e33fe802f39ad6f16bb5eaf810f"
  },
  {
    "url": "assets/js/28.ce47a1c3.js",
    "revision": "34cb216cfbd9e9c7d6dbe465802614f7"
  },
  {
    "url": "assets/js/29.96cd0b15.js",
    "revision": "541c7f6ad9b79e912ca0e08f3293fb9c"
  },
  {
    "url": "assets/js/3.1f3ca51e.js",
    "revision": "acc8e75db9a40722e82044beae2ba67a"
  },
  {
    "url": "assets/js/30.5e3d6ece.js",
    "revision": "eebecb3548638eaeede181abeea54f34"
  },
  {
    "url": "assets/js/31.4b6386cc.js",
    "revision": "f01d3caa07a78b824451569aa4df0f96"
  },
  {
    "url": "assets/js/32.a9639a28.js",
    "revision": "77faffc53b4cc171a73971cd118855ce"
  },
  {
    "url": "assets/js/33.aed76797.js",
    "revision": "6fa30b22ec0e361a9822a6e84ace3369"
  },
  {
    "url": "assets/js/34.deea9ef2.js",
    "revision": "4ddf9b4cae72214d34a33c3762704773"
  },
  {
    "url": "assets/js/35.18720202.js",
    "revision": "17b3265dee101f53368f604416900b62"
  },
  {
    "url": "assets/js/36.0a5c9913.js",
    "revision": "c22d9881b54abb71b4282cff92989b46"
  },
  {
    "url": "assets/js/37.a8b3de6e.js",
    "revision": "a5d2d1fd9b91212acdfeec044140d122"
  },
  {
    "url": "assets/js/38.5c2f43c9.js",
    "revision": "c673882f10c6434cea43bbf233061bfa"
  },
  {
    "url": "assets/js/39.e233acdd.js",
    "revision": "617e72c4dbbcd6177e1f131c24e4e982"
  },
  {
    "url": "assets/js/4.f404f6d5.js",
    "revision": "e9bbcf63227968a9db8f3617d03c7448"
  },
  {
    "url": "assets/js/40.d77287e5.js",
    "revision": "63efdd71c66beb0991dcf156b740ff94"
  },
  {
    "url": "assets/js/41.ade05c95.js",
    "revision": "f0f7b795d19e8caae5bf167c80211646"
  },
  {
    "url": "assets/js/42.2e1deff9.js",
    "revision": "edac522fbaddfe184ac450c471c98793"
  },
  {
    "url": "assets/js/43.fba0f148.js",
    "revision": "dc38b12112cadf99d4f9dc8a4800c63e"
  },
  {
    "url": "assets/js/44.9a2adf6b.js",
    "revision": "b4c496d1cf67fa58dcc43840a850b98d"
  },
  {
    "url": "assets/js/45.90e195b0.js",
    "revision": "7877cc533620a0fc1672cfdbd78ee55d"
  },
  {
    "url": "assets/js/46.24c6ed95.js",
    "revision": "78fbdf057ac29385dab502290cf673a4"
  },
  {
    "url": "assets/js/47.0e08448e.js",
    "revision": "24a1d948e0be0afd98312cfb131f82f3"
  },
  {
    "url": "assets/js/48.4168c169.js",
    "revision": "7acae783bebcd66538bc3ede27f622f0"
  },
  {
    "url": "assets/js/49.a31e456e.js",
    "revision": "1cfbe6d661caadbf2fd0b8a62ef29dba"
  },
  {
    "url": "assets/js/5.4dc95a71.js",
    "revision": "705277b3ae8d1e82e981c077b4653c56"
  },
  {
    "url": "assets/js/50.f7864e5a.js",
    "revision": "61ef3e82a870eab6d64a303fc08058f6"
  },
  {
    "url": "assets/js/51.a11f91c5.js",
    "revision": "5fddd01a81f12b6b49e1caf82aab0b62"
  },
  {
    "url": "assets/js/52.4871cd1b.js",
    "revision": "a92fea06e891bc9f293e18a8a54fd52a"
  },
  {
    "url": "assets/js/53.cfb4a82e.js",
    "revision": "2b80eb2279a9f7953e6cdc314eba9ed4"
  },
  {
    "url": "assets/js/6.e792240d.js",
    "revision": "aabde4c5ebe28c4faa029ebb78ff7beb"
  },
  {
    "url": "assets/js/7.3399c657.js",
    "revision": "ede5898aa8ac1a70ef79a93a3c1528ee"
  },
  {
    "url": "assets/js/8.37a8aa23.js",
    "revision": "0f1b0ed9dce776e6291afd5f39e83879"
  },
  {
    "url": "assets/js/9.ffa3ddd7.js",
    "revision": "4eb8ec669b5272fecdfdd58e2cf06e7a"
  },
  {
    "url": "assets/js/app.219ebc21.js",
    "revision": "88cc3fd32afcf91df289d6ac681bc354"
  },
  {
    "url": "home/BasicsList/知识点笔记.html",
    "revision": "4f070eda8b7765c92cccb8c5c17bda11"
  },
  {
    "url": "home/BasicsList/CSS笔记.html",
    "revision": "ca5e5e6b0a3ea6516943190754fe78c8"
  },
  {
    "url": "home/BasicsList/index.html",
    "revision": "f51b08a40286c613cab458c489c49601"
  },
  {
    "url": "home/BasicsList/Javascript基础笔记.html",
    "revision": "c6a140ac837c1c533d9f1fdfc5271f98"
  },
  {
    "url": "home/cesium/cesium基础.html",
    "revision": "69846028f4f133ffb523b5c0276d27df"
  },
  {
    "url": "home/cesium/CZML对象.html",
    "revision": "8ccfc3c8ae9e97490a649b18c4336037"
  },
  {
    "url": "home/cesium/index.html",
    "revision": "300bf37526d8c858a0781e600f2000ee"
  },
  {
    "url": "home/electron/index.html",
    "revision": "91188fa07163d434c4a7dc0cc42a055c"
  },
  {
    "url": "home/react/buildReactFormZero.html",
    "revision": "a0870521126206290e35744212585a18"
  },
  {
    "url": "home/react/index.html",
    "revision": "f4fc0027b9e0f2014a85924460513b17"
  },
  {
    "url": "home/react/react.html",
    "revision": "bad5071cfe1193509d7c2d396b4de240"
  },
  {
    "url": "home/vue/git提交.html",
    "revision": "d1b4aa8fb5e1e18348ac06f964300bcc"
  },
  {
    "url": "home/vue/index.html",
    "revision": "b22d7b28438db6c419c8007557322cff"
  },
  {
    "url": "home/vue/vueLog.html",
    "revision": "5fed60c9c718e8d0b84e0da05a63118c"
  },
  {
    "url": "home/vue/vueLog2.html",
    "revision": "23b61ef1b54f6374ed569405f25cd04e"
  },
  {
    "url": "home/vue/vuePress.html",
    "revision": "6f7a22a7e0ece70f6e449dfb3e08cf44"
  },
  {
    "url": "imgs/logo.png",
    "revision": "aedb62f033032357b27867431129d545"
  },
  {
    "url": "index.html",
    "revision": "d8fdb695a61395c3c3ba3ab48ff8cbcf"
  },
  {
    "url": "linux/linux/命令和快捷键(一).html",
    "revision": "7e967df6d8beb4bac4b9498a31f20088"
  },
  {
    "url": "linux/linux/文件操作.html",
    "revision": "654eb71be50edf1c78286c5129efc3b3"
  },
  {
    "url": "linux/linux/index.html",
    "revision": "d1ae9d435b66619026db6701ccc6142c"
  },
  {
    "url": "linux/linux/ssh和root账户配置(二).html",
    "revision": "cb45f0ce452af527106ab87b1855909f"
  },
  {
    "url": "linux/linux/VIM编辑器大全(三).html",
    "revision": "0a6be292034acbce52cc513a857a5484"
  },
  {
    "url": "linux/linux/VIM编辑器配置(四).html",
    "revision": "04f3746b093af45831705e4278486d5b"
  },
  {
    "url": "linux/linux/wordpress环境配置(五).html",
    "revision": "43a0de0ab71dd9bf456a22d56d311570"
  },
  {
    "url": "serve/express应用.html",
    "revision": "b8a17029b93420c9e1e2f995472a0595"
  },
  {
    "url": "serve/index.html",
    "revision": "b8f081335a0f0b28db4cc5c318bfdf6c"
  },
  {
    "url": "serve/nodejs基础.html",
    "revision": "cc5f26e16b3a7a234d7da49cd041553e"
  },
  {
    "url": "serve/nodejs知识点.html",
    "revision": "f6458062840c5fe6d316b2b74f9063a5"
  },
  {
    "url": "tags/index.html",
    "revision": "53e6e7555f9925e448e431ffaf382ba9"
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
