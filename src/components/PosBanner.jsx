export default function PosBanner({ scaleVal, taring, onTare }) {
  return (
    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]">point_of_sale</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">POS Registrasi Order Baru</span>
            <span className="px-space-xs py-space-xxs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">Antrian #042</span>
          </div>
          <span className="font-body-sm text-body-sm text-tertiary">Terminal 01 • Petugas: Siti R. • Auto-Tagging RFID Active</span>
        </div>
      </div>
      <div className="flex items-center gap-space-md flex-wrap">
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-lg shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
          <span className="font-label-sm text-label-sm text-tertiary">Timbangan Digital Port COM3:</span>
          <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold" id="scale-live-val">{scaleVal}</span>
          <span className="font-label-md text-label-md text-on-surface">kg</span>
          <button
            className="ml-space-xs px-space-xs py-space-xxs bg-surface-container-high rounded text-on-surface hover:bg-surface-container-highest transition-colors font-label-sm text-label-sm flex items-center gap-space-xxs"
            onClick={onTare}
            type="button"
          >
            <span className="material-symbols-outlined text-[14px]">scale</span>
            {taring ? 'Taring…' : 'Tare'}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-lg text-tertiary">
          <span className="material-symbols-outlined text-[18px] text-secondary">qr_code_scanner</span>
          <span className="font-label-sm text-label-sm">Scanner Siap</span>
        </div>
      </div>
    </div>
  );
}
