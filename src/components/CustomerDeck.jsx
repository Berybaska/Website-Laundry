import { useState } from 'react';

const AVATAR_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqDfVL7U0HG7DKrIr9UmJkXr4X2IlzyNDS4ynTZpU3_LwgZGm6dL6ulLTmzaOuVDxqLqr1NXPa_MK-G5f7BTvlndVWDCcxmUVfeT9Kxbq6i2cfQvuS3qqyMkn_P1JvTKqZk7ikJM6TV0afLFuodUxZfVh2CuLxD5bv6vliV3G6MtYwk4yMrRRnTGdHp6EfH53rDoTksC5ccQaxT3dhwRMJXCW7LY0grkkNmPTXig20zYicHCP3jQ';

export default function CustomerDeck({ onNotify }) {
  const [query, setQuery] = useState('Budi Pratama - 081288991234');

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-[20px]">person_search</span>
          <input
            className="w-full pl-10 pr-space-xl py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm"
            placeholder="Cari Pelanggan (Nama / Telp / ID)..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="absolute right-space-md top-1/2 -translate-y-1/2 text-tertiary hover:text-on-surface"
            type="button"
            onClick={() => setQuery('')}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <button
          className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container transition-all shadow-sm font-label-md text-label-md"
          type="button"
          onClick={() => onNotify('Form pelanggan baru dibuka.')}
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          + Pelanggan Baru
        </button>
      </div>
      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-full object-cover shadow-sm"
              data-alt="Portrait of an Indonesian middle-aged man smiling warmly, shot in natural clean studio lighting with soft cyan and slate undertones"
              src={AVATAR_SRC}
            />
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[9px] uppercase font-bold">Gold</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-title-md text-title-md text-on-surface">Budi Pratama</span>
              <span className="px-space-xs py-space-xxs rounded bg-surface-container-highest text-primary font-label-sm text-label-sm">VIP Tier 3</span>
            </div>
            <span className="font-body-sm text-body-sm text-tertiary">0812-8899-1234 • Jl. Gandaria Tengah II No. 14, Jaksel</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xl self-end sm:self-center">
          <div className="flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Sisa Deposit Saldo</span>
            <span className="font-title-md text-title-md text-primary font-bold">Rp 350.000</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Reward Poin</span>
            <span className="font-title-md text-title-md text-secondary font-bold">1.420 pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
