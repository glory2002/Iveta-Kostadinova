# Design landing page layout

Кодът е свързан с дизайна в Figma: https://www.figma.com/design/dxwf83oUzzu8oTRcqriS3I/Design-landing-page-layout

## Локално

```bash
npm install
npm run dev
```

Билд:

```bash
npm run build
```

## Git и GitHub (вече има първи commit локално)

1. Създай **ново празно repository** в GitHub (без README), например `phi-landing`.

2. В папката на проекта:

```bash
git remote add origin https://github.com/ТВОЯ-ПОТРЕБИТЕЛ/phi-landing.git
git push -u origin main
```

(Замени URL с твоя repo; при SSH ползваш `git@github.com:...`.)

## Vercel

1. Влез в [vercel.com](https://vercel.com) с GitHub.
2. **Add New → Project** → избери repo-то.
3. Остави настройките по подразбиране за **Vite**: Build `npm run build`, Output `dist`.
4. **Deploy** — получаваш линк `https://....vercel.app` за клиента.

При всяка промяна в `main`, Vercel може да деплойва автоматично.
