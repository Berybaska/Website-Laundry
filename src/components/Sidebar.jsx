import { useState } from 'react';
import { NAV_ITEMS } from '../data.js';

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Dm4Gn2qYAOXWpEHptFUKJPsgAksldx2tshvzXsM8tL4inplejTIr3drkGJAEbovcil4UoDnKu5v-WrhoRXj-H3HGLWwyR9dieULFRbhtilQqZb-HejLpw98Neob_HN1TaFNSKhCSK4szyF9_1AqGDVhcIg08pFxLl4sBwQWmtfFGZCpVrcjBhoCnKBBcI8-o7Qp4gwHkI8QN5YqLHrfGKD1gOBrv-ScF0_0DcJMET_iyBYMxHTg';

export default function Sidebar({ onCloseShift }) {
  const [active, setActive] = useState('kasir-pos');

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-lg flex items-center gap-space-md">
          <img alt="CleanWave OS Logo" className="h-8 w-auto object-contain" src={LOGO_SRC} />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">CleanWave OS</span>
            <span className="font-label-sm text-label-sm text-tertiary">Enterprise Multi-Cabang</span>
          </div>
        </div>
        <div className="px-space-md py-space-xs">
          <div className="bg-surface-container-lowest px-space-md py-space-sm rounded-lg flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">store</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-tertiary">Cabang Terpilih</span>
                <span className="font-label-md text-label-md text-on-surface truncate max-w-[150px]">Kebayoran Baru</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px]">expand_more</span>
          </div>
        </div>
        <nav className="flex-1 px-space-md py-space-sm space-y-space-xxs overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.path;
            return (
              <a
                key={item.path}
                className={`flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold rounded-lg'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
                data-path={item.path}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.path);
                }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label-lg text-label-lg">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="p-space-md bg-surface-container-lowest m-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] space-y-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-tertiary uppercase">Shift Pagi Aktif</span>
          <span className="inline-flex items-center px-space-xs py-space-xxs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Live</span>
        </div>
        <div className="font-metric-currency text-metric-currency text-on-surface">Rp 2.450.000</div>
        <button
          className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-error-container hover:text-on-error-container transition-colors font-label-md text-label-md"
          type="button"
          onClick={onCloseShift}
        >
          <span className="material-symbols-outlined text-[16px]">lock_clock</span>
          Tutup Shift Kasir
        </button>
        <div className="pt-space-xxs flex items-center justify-between text-tertiary font-label-sm text-label-sm">
          <span>CleanWave Enterprise</span>
          <span>v2.4</span>
        </div>
      </div>
    </aside>
  );
}
