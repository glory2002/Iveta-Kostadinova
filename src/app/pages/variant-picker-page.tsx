import { Link } from 'react-router';

/**
 * Начален екран: избор кой вариант на лендинга да се отвори (за клиентска презентация).
 */
export function VariantPickerPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[color:var(--palette-bg)]">
      <div className="luxury-page flex flex-1 flex-col items-center justify-center py-16 md:py-24">
        <p
          className="font-source-sans-3 mb-3 text-center text-xs font-normal uppercase tracking-[0.2em] text-[color:var(--palette-p700)]/70"
          style={{ fontWeight: 500 }}
        >
          Презентация
        </p>
        <h1
          className="font-source-sans-3 mb-4 max-w-2xl text-center text-4xl tracking-tight text-[color:var(--palette-p700)] md:mb-6 md:text-5xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Избери вариант
        </h1>
        <p className="mb-12 max-w-lg text-center text-base leading-relaxed text-[color:var(--palette-p700)]/85 md:mb-16 md:text-lg">
          Два отделни линка към същата страница с различни URL адреси — удобно за сравнение и обратна връзка от клиента.
        </p>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Link
            to="/variant-a"
            className="group flex flex-col rounded-2xl border border-[color:color-mix(in_srgb,var(--palette-p700)_18%,transparent)] bg-[color:var(--palette-bg-white)] p-8 shadow-[0_8px_28px_-14px_rgba(43,32,24,0.15)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-12px_rgba(43,32,24,0.22)] md:p-10"
          >
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Вариант A
            </span>
            <span className="font-source-sans-3 mb-3 text-2xl text-[color:var(--palette-p700)] md:text-[26px]" style={{ fontWeight: 500 }}>
              Luxury full-width
            </span>
            <span className="mb-6 text-sm leading-relaxed text-[color:var(--palette-p700)]/80">
              Текущият пълен лейаут: editorial gutter, 12-колонна мрежа в услугите, пълна ширина до 1920px.
            </span>
            <span className="mt-auto text-sm font-medium uppercase tracking-[0.08em] text-primary group-hover:underline">
              Отвори →
            </span>
          </Link>

          <Link
            to="/variant-b"
            className="group flex flex-col rounded-2xl border border-[color:color-mix(in_srgb,var(--palette-p700)_18%,transparent)] bg-[color:var(--palette-bg-white)] p-8 shadow-[0_8px_28px_-14px_rgba(43,32,24,0.15)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-12px_rgba(43,32,24,0.22)] md:p-10"
          >
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Вариант B
            </span>
            <span className="font-source-sans-3 mb-3 text-2xl text-[color:var(--palette-p700)] md:text-[26px]" style={{ fontWeight: 500 }}>
              Презентационен макет
            </span>
            <span className="mb-6 text-sm leading-relaxed text-[color:var(--palette-p700)]/80">
              Центрирана навигация, hero с един бутон „Виж моите услуги“, бяла секция с четири карти в ред и линк към WhatsApp.
            </span>
            <span className="mt-auto text-sm font-medium uppercase tracking-[0.08em] text-primary group-hover:underline">
              Отвори →
            </span>
          </Link>
        </div>

        <p className="mt-14 text-center text-xs text-[color:var(--palette-p700)]/55">
          Маршрути: <span className="font-mono text-[color:var(--palette-p700)]/80">/variant-a</span>
          {' · '}
          <span className="font-mono text-[color:var(--palette-p700)]/80">/variant-b</span>
        </p>
      </div>
    </div>
  );
}
