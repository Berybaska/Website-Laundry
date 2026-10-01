import { useEffect, useRef, useState } from 'react';

const PROFILE_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDGXrEuFve9LdNYm7PN_dzRhGz_ADXqcCqzmpZVEkpIOTI2Dh054OJQHDVrd8PRHJFFS4a9r-ZkNvyRpKZbyoiER-Igw2tFE4GIPozFqqzlLJhGTF327HOZCaHptGRY4hVkoCD7IcRVnOj6RZD7eqqmvHMtjgo32RHeXTArQFGDwhOurMnpy-Vb1s2asYACHHoYlQl26IyCcsuuFQmcPuFdXZQRdYNZx4zYWtUtCKFqC0WV2S0zllw';

export default function Header({ onSearchFocusToken }) {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (onSearchFocusToken > 0) searchRef.current?.focus();
  }, [onSearchFocusToken]);

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 px-space-xl flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-space-lg flex-1 max-w-2xl">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
          <input
            ref={searchRef}
            className="w-full pl-10 pr-space-lg py-space-xs rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all font-body-sm text-body-sm"
            placeholder="Cari No. Resi / Pelanggan [Ctrl + K]"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="absolute right-space-md top-1/2 -translate-y-1/2 font-label-sm text-label-sm bg-surface-container-highest px-space-xs py-space-xxs rounded text-on-surface-variant">⌘K</kbd>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-lg">
          <span className="material-symbols-outlined text-[16px] text-primary">sync_alt</span>
          <select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
            <option selected>Cabang Utama (Kebayoran Baru) - Active</option>
            <option>Cabang BSD Serpong</option>
            <option>Cabang Tebet</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="hidden xl:flex items-center gap-space-md px-space-md py-space-xs bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">print</span>
            <span>Printer Kasir: Online</span>
          </div>
          <span className="text-outline-variant">|</span>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">scale</span>
            <span>Timbangan: Terkoneksi</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs px-space-sm py-space-xxs rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface">
          <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
          <span>WA Gateway: Connected</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        </div>
        <button className="p-space-xs text-on-surface-variant hover:text-on-surface transition-colors relative" type="button">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="flex items-center gap-space-md pl-space-sm">
          <div className="flex flex-col text-right">
            <span className="font-label-md text-label-md text-on-surface">Siti Rahmawati</span>
            <span className="font-label-sm text-label-sm text-tertiary">Store Manager / Super Admin</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE_SRC} />
        </div>
      </div>
    </header>
  );
}
