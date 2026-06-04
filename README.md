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

### CLI로 배포

```bash
npm install
npx wrangler login
npm run deploy
```

### GitHub 연동 (대시보드)

Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → `bobospark/japanese` 선택 후:

| 항목 | 값 |
|------|-----|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (Environment variables에 `NODE_VERSION=22` 추가) |

저장소에 `wrangler.jsonc`, `public/_redirects`가 포함되어 있어 SPA 라우팅도 동작합니다.
