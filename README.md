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

### 방법 A: GitHub Actions (권장)

대시보드에 빌드를 넣어도 로그에 `No build command specified` 가 나오면 **Cloudflare에 빌드 설정이 실제로 안 들어간 것**입니다. 이 워크플로가 `npm run build` 후 `dist`를 배포합니다.

1. [API 토큰](https://dash.cloudflare.com/profile/api-tokens) 생성 (Pages/Workers 편집 권한)
2. [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/) 복사
3. GitHub **Settings → Secrets → Actions** 에 `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` 추가
4. `main` 푸시 → Actions 탭에서 Deploy 워크플로 확인

(선택) Cloudflare **Settings → Builds** 에서 자동 Git 배포를 끄면 Actions와 중복 배포를 막을 수 있습니다.

### 방법 B: Cloudflare 대시보드 Git 연동

**Settings → Build configuration** 에서:

| 항목 | 값 |
|------|-----|
| Framework preset | **Vite** |
| Build command | `npm run build` |
| Build output directory | **`dist`** (루트 `/` 아님) |

로그에 `npm run build` / `vite build` 가 보여야 합니다. `No build command specified` 만 있으면 설정이 비어 있습니다.

#### 배포 성공인데 화면이 비어 있을 때

- 잘못됨: `<script src="/src/main.tsx">` (소스 31개 파일 그대로 업로드)
- 정상: `<script src="/assets/index-....js">`
