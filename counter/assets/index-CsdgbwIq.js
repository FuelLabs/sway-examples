const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CbM5dx4U.js","assets/index-C6gm4sOT.js","assets/index-Cfq29TkX.css"])))=>i.map(i=>d[i]);
import { p as proxy, l as subscribe, w as snapshot, _ as __vitePreload } from "./index-C6gm4sOT.js";
const o = proxy({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), T = { state: o, subscribe(e) {
  return subscribe(o, () => e(o));
}, push(e, t) {
  e !== o.view && (o.view = e, t && (o.data = t), o.history.push(e));
}, reset(e) {
  o.view = e, o.history = [e];
}, replace(e) {
  o.history.length > 1 && (o.history[o.history.length - 1] = e, o.view = e);
}, goBack() {
  if (o.history.length > 1) {
    o.history.pop();
    const [e] = o.history.slice(-1);
    o.view = e;
  }
}, setData(e) {
  o.data = e;
} }, a = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
}, isAndroid() {
  return a.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return a.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, s) {
  if (a.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
  let n = e;
  n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(e, t, s) {
  if (!a.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
  let n = e;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
}, async wait(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}, openHref(e, t) {
  window.open(e, t, "noreferrer noopener");
}, setWalletConnectDeepLink(e, t) {
  try {
    localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(a.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = T.state.data) == null ? void 0 : e.Wallet;
  if (!t) throw new Error('Missing "Wallet" view data');
  return t;
} }, _ = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), r = proxy({ enabled: _, userSessionId: "", events: [], connectedWalletId: void 0 }), R = { state: r, subscribe(e) {
  return subscribe(r.events, () => e(snapshot(r.events[r.events.length - 1])));
}, initialize() {
  r.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (r.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(e) {
  r.connectedWalletId = e;
}, click(e) {
  if (r.enabled) {
    const t = { type: "CLICK", name: e.name, userSessionId: r.userSessionId, timestamp: Date.now(), data: e };
    r.events.push(t);
  }
}, track(e) {
  if (r.enabled) {
    const t = { type: "TRACK", name: e.name, userSessionId: r.userSessionId, timestamp: Date.now(), data: e };
    r.events.push(t);
  }
}, view(e) {
  if (r.enabled) {
    const t = { type: "VIEW", name: e.name, userSessionId: r.userSessionId, timestamp: Date.now(), data: e };
    r.events.push(t);
  }
} }, c = proxy({ chains: void 0, walletConnectUri: void 0, isAuth: false, isCustomDesktop: false, isCustomMobile: false, isDataLoaded: false, isUiLoaded: false }), p = { state: c, subscribe(e) {
  return subscribe(c, () => e(c));
}, setChains(e) {
  c.chains = e;
}, setWalletConnectUri(e) {
  c.walletConnectUri = e;
}, setIsCustomDesktop(e) {
  c.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  c.isCustomMobile = e;
}, setIsDataLoaded(e) {
  c.isDataLoaded = e;
}, setIsUiLoaded(e) {
  c.isUiLoaded = e;
}, setIsAuth(e) {
  c.isAuth = e;
} }, W = proxy({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: false, enableExplorer: true, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), y = { state: W, subscribe(e) {
  return subscribe(W, () => e(W));
}, setConfig(e) {
  var t, s;
  R.initialize(), p.setChains(e.chains), p.setIsAuth(Boolean(e.enableAuthMode)), p.setIsCustomMobile(Boolean((t = e.mobileWallets) == null ? void 0 : t.length)), p.setIsCustomDesktop(Boolean((s = e.desktopWallets) == null ? void 0 : s.length)), a.setModalVersionInStorage(), Object.assign(W, e);
} };
var V = Object.defineProperty, D = Object.getOwnPropertySymbols, H = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable, M = (e, t, s) => t in e ? V(e, t, { enumerable: true, configurable: true, writable: true, value: s }) : e[t] = s, K = (e, t) => {
  for (var s in t || (t = {})) H.call(t, s) && M(e, s, t[s]);
  if (D) for (var s of D(t)) B.call(t, s) && M(e, s, t[s]);
  return e;
};
const L = "https://explorer-api.walletconnect.com", E = "wcm", O = "js-2.6.2";
async function w(e, t) {
  const s = K({ sdkType: E, sdkVersion: O }, t), n = new URL(e, L);
  return n.searchParams.append("projectId", y.state.projectId), Object.entries(s).forEach(([i, l]) => {
    l && n.searchParams.append(i, String(l));
  }), (await fetch(n)).json();
}
const m = { async getDesktopListings(e) {
  return w("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return w("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return w("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return w("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${L}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
}, getAssetImageUrl(e) {
  return `${L}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
} };
var z = Object.defineProperty, j = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable, k = (e, t, s) => t in e ? z(e, t, { enumerable: true, configurable: true, writable: true, value: s }) : e[t] = s, F = (e, t) => {
  for (var s in t || (t = {})) J.call(t, s) && k(e, s, t[s]);
  if (j) for (var s of j(t)) q.call(t, s) && k(e, s, t[s]);
  return e;
};
const N = a.isMobile(), d$1 = proxy({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), te = { state: d$1, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = y.state;
  if (e === "NONE" || t === "ALL" && !e) return d$1.recomendedWallets;
  if (a.isArray(e)) {
    const s = { recommendedIds: e.join(",") }, { listings: n } = await m.getAllListings(s), i = Object.values(n);
    i.sort((l, v) => {
      const b = e.indexOf(l.id), f = e.indexOf(v.id);
      return b - f;
    }), d$1.recomendedWallets = i;
  } else {
    const { chains: s, isAuth: n } = p.state, i = s == null ? void 0 : s.join(","), l = a.isArray(t), v = { page: 1, sdks: n ? "auth_v1" : void 0, entries: a.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: l ? t.join(",") : void 0 }, { listings: b } = N ? await m.getMobileListings(v) : await m.getDesktopListings(v);
    d$1.recomendedWallets = Object.values(b);
  }
  return d$1.recomendedWallets;
}, async getWallets(e) {
  const t = F({}, e), { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } = y.state, { recomendedWallets: i } = d$1;
  if (n === "ALL") return d$1.wallets;
  i.length ? t.excludedIds = i.map((x) => x.id).join(",") : a.isArray(s) && (t.excludedIds = s.join(",")), a.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), p.state.isAuth && (t.sdks = "auth_v1");
  const { page: l, search: v } = e, { listings: b, total: f } = N ? await m.getMobileListings(t) : await m.getDesktopListings(t), A = Object.values(b), U = v ? "search" : "wallets";
  return d$1[U] = { listings: [...d$1[U].listings, ...A], total: f, page: l ?? 1 }, { listings: A, total: f };
}, getWalletImageUrl(e) {
  return m.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return m.getAssetImageUrl(e);
}, resetSearch() {
  d$1.search = { listings: [], total: 0, page: 1 };
} }, I = proxy({ open: false }), se = { state: I, subscribe(e) {
  return subscribe(I, () => e(I));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: s, isDataLoaded: n } = p.state;
    if (a.removeWalletConnectDeepLink(), p.setWalletConnectUri(e == null ? void 0 : e.uri), p.setChains(e == null ? void 0 : e.chains), T.reset("ConnectWallet"), s && n) I.open = true, t();
    else {
      const i = setInterval(() => {
        const l = p.state;
        l.isUiLoaded && l.isDataLoaded && (clearInterval(i), I.open = true, t());
      }, 200);
    }
  });
}, close() {
  I.open = false;
} };
var G = Object.defineProperty, $ = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, S = (e, t, s) => t in e ? G(e, t, { enumerable: true, configurable: true, writable: true, value: s }) : e[t] = s, Y = (e, t) => {
  for (var s in t || (t = {})) Q.call(t, s) && S(e, s, t[s]);
  if ($) for (var s of $(t)) X.call(t, s) && S(e, s, t[s]);
  return e;
};
function Z() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const C = proxy({ themeMode: Z() ? "dark" : "light" }), ne = { state: C, subscribe(e) {
  return subscribe(C, () => e(C));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: s } = e;
  t && (C.themeMode = t), s && (C.themeVariables = Y({}, s));
} }, g = proxy({ open: false, message: "", variant: "success" }), oe = { state: g, subscribe(e) {
  return subscribe(g, () => e(g));
}, openToast(e, t) {
  g.open = true, g.message = e, g.variant = t;
}, closeToast() {
  g.open = false;
} };
class d {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await __vitePreload(() => import("./index-CbM5dx4U.js"), true ? __vite__mapDeps([0,1,2]) : void 0);
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WalletConnectModal: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  R,
  T,
  a,
  index as i,
  ne as n,
  oe as o,
  p,
  se as s,
  te as t,
  y
};
