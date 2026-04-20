import { Link } from 'react-router';

import { SiteButton } from '../components/site-button';

const cardClass =
  'flex flex-col items-center justify-center gap-6 rounded-2xl border border-[color:color-mix(in_srgb,var(--palette-p700)_18%,transparent)] bg-[color:var(--palette-bg-white)] p-8 text-center shadow-[0_8px_28px_-14px_rgba(43,32,24,0.15)] md:p-10';

/**
 * Начален екран: избор кой вариант на лендинга да се отвори (за клиентска презентация).
 */
export function VariantPickerPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[color:var(--palette-bg)]">
      <div className="luxury-page flex flex-1 flex-col items-center justify-center py-16 md:py-24">
        <div className="grid w-full max-w-md grid-cols-1 gap-6 sm:max-w-2xl sm:grid-cols-2 sm:gap-8">
          <div className={cardClass}>
            <h2
              className="font-source-sans-3 text-2xl text-[color:var(--palette-p700)] md:text-3xl"
              style={{ fontWeight: 500 }}
            >
              Вариант А
            </h2>
            <SiteButton asChild variant="outlineChocolate">
              <Link to="/variant-a" className="inline-flex min-w-[8.5rem] justify-center uppercase tracking-wide">
                Отвори
              </Link>
            </SiteButton>
          </div>

          <div className={cardClass}>
            <h2
              className="font-source-sans-3 text-2xl text-[color:var(--palette-p700)] md:text-3xl"
              style={{ fontWeight: 500 }}
            >
              Вариант Б
            </h2>
            <SiteButton asChild variant="outlineChocolate">
              <Link to="/variant-b" className="inline-flex min-w-[8.5rem] justify-center uppercase tracking-wide">
                Отвори
              </Link>
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
