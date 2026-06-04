# japanese

일본어 학습 웹앱 — 히라가나·가타카나 차트, 단어·문장 퀴즈

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## Cloudflare Pages 배포

### CLI로 배포 (선택)

대시보드 Git 배포와 별개로, 로컬에서 올릴 때만 `wrangler login` 이 필요합니다.

```bash
npm install
npx wrangler login   # 브라우저 OAuth — Cloudflare 대시보드 로그인과 다름
npm run deploy
```

### GitHub 연동 (대시보드) — **이 방법이면 `wrangler login` 불필요**

Cloudflare 웹 로그인만으로 됩니다. `wrangler login`은 **내 PC 터미널에서 CLI로 올릴 때만** 필요합니다.

**Workers & Pages** → 프로젝트 `japanese-29l` → **Settings** → **Build** 에서:

| 항목 | 값 |
|------|-----|
| Framework preset | **Vite** (또는 None + 아래 수동 설정) |
| Build command | `npm run build` |
| Build output directory | **`dist`** ← 반드시 `dist` (루트 `/` 아님) |
| Node version | `22` (Environment variables: `NODE_VERSION=22`) |

저장 후 **Retry deployment** 합니다.

#### 화면이 비어 있을 때 (배포는 됐는데 앱이 안 뜸)

배포된 HTML에 `<script src="/src/main.tsx">` 가 보이면 **빌드 결과가 아닌 소스**가 올라간 것입니다. Build output을 **`dist`** 로 바꾸세요.  
빌드가 맞으면 `<script src="/assets/index-....js">` 형태입니다.
