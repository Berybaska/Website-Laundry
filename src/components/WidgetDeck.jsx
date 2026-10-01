export default function WidgetDeck({ scaleVal, onGrabWeight, onCalibrate, pcs, onAdjustPcs, perfume, onPerfumeChange, antiBac, onAntiBacChange, onNotify }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      {/* Live Weight Metric & Calibration Card */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between text-tertiary">
          <span className="font-label-md text-label-md">Timbangan Auto-Capture</span>
          <span className="material-symbols-outlined text-primary text-[20px]">monitor_weight</span>
        </div>
        <div className="my-space-sm flex items-baseline gap-space-xs">
          <span className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold">{scaleVal}</span>
          <span className="font-title-md text-title-md text-on-surface">Kilogram</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            className="flex-1 py-space-xs px-space-sm rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm text-center transition-colors"
            type="button"
            onClick={onGrabWeight}
          >
            Ambil Bobot
          </button>
          <button
            className="py-space-xs px-space-sm rounded bg-surface-container-low hover:bg-surface-container-high text-tertiary font-label-sm text-label-sm transition-colors"
            type="button"
            onClick={onCalibrate}
          >
            Kalibrasi
          </button>
        </div>
      </div>

      {/* Piece Count Inspector */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between text-tertiary">
          <span className="font-label-md text-label-md">Fisik Pakaian (Pcs)</span>
          <span className="material-symbols-outlined text-secondary text-[20px]">checkroom</span>
        </div>
        <div className="my-space-sm flex items-center justify-between">
          <button
            className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors"
            onClick={() => onAdjustPcs(-1)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">remove</span>
          </button>
          <div className="flex items-baseline gap-space-xxs">
            <span className="font-display-lg text-display-lg text-on-surface font-bold" id="pcs-count-val">{pcs}</span>
            <span className="font-label-md text-label-md text-tertiary">helai</span>
          </div>
          <button
            className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors"
            onClick={() => onAdjustPcs(1)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
        <div className="text-tertiary font-label-sm text-label-sm text-center">
          Rata-rata: ~{Math.floor((Number(scaleVal) / Math.max(pcs, 1)) * 100) / 100} kg/helai (
          {Number(scaleVal) / Math.max(pcs, 1) > 0.5 ? 'Berat' : 'Normal'})
        </div>
      </div>

      {/* Fragrance & Finishing Add-on Preset */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between text-tertiary">
          <span className="font-label-md text-label-md">Aroma Parfum Formula</span>
          <span className="material-symbols-outlined text-primary text-[20px]">local_florist</span>
        </div>
        <div className="my-space-xs space-y-space-xxs">
          <select
            className="w-full bg-surface-container-low text-on-surface px-space-sm py-space-xs rounded-lg font-label-md text-label-md focus:outline-none"
            value={perfume}
            onChange={(e) => onPerfumeChange(e.target.value)}
          >
            <option value="downy">Downy Mystique (+Rp 5.000)</option>
            <option value="ocean">Ocean Fresh (Standar Gratis)</option>
            <option value="lavender">Lavender Velvet (+Rp 3.000)</option>
            <option value="baby">Baby Blossom Hypoallergenic</option>
          </select>
          <div className="flex items-center gap-space-xs">
            <label className="flex items-center gap-space-xxs cursor-pointer">
              <input
                checked={antiBac}
                className="w-4 h-4 rounded text-primary"
                type="checkbox"
                onChange={(e) => onAntiBacChange(e.target.checked)}
              />
              <span className="font-label-sm text-label-sm text-on-surface">Anti Bakteri Silver+</span>
            </label>
          </div>
        </div>
        <button
          className="flex items-center justify-between pt-space-xs w-full text-left"
          type="button"
          onClick={() => onNotify('Tag keranjang BASKET-A12 discan ke RFID writer.')}
        >
          <span className="font-label-sm text-label-sm text-tertiary">Tag Keranjang:</span>
          <span className="font-label-md text-label-md text-primary font-bold">BASKET-A12</span>
        </button>
      </div>
    </div>
  );
}
