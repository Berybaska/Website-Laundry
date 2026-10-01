import { PAYMENT_CHANNELS } from '../data.js';

export default function PaymentSection({
  payment,
  onPaymentChange,
  payStatus,
  onPayStatusChange,
  onSave,
  onNotify,
}) {
  return (
    <>
      {/* Payment Method Selection Grid */}
      <div className="space-y-space-xs pt-space-xs">
        <label className="font-label-md text-label-md text-on-surface font-semibold block">Pilih Kanal Bayar</label>
        <div className="grid grid-cols-2 gap-space-xs">
          {PAYMENT_CHANNELS.map((channel) => {
            const isActive = payment === channel.id;
            return (
              <button
                key={channel.id}
                className={`py-space-sm px-space-xs rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xxs transition-colors ${
                  isActive
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
                type="button"
                onClick={() => onPaymentChange(channel.id)}
              >
                <span className={`material-symbols-outlined text-[18px] ${isActive ? '' : channel.iconClass}`}>{channel.icon}</span>
                {channel.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Status Bayar Toggle (Lunas vs DP) */}
      <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
          <span className="font-label-md text-label-md text-on-surface">Status Bayar Seketika</span>
        </div>
        <div className="flex items-center bg-surface-container-highest rounded-lg p-0.5">
          <button
            className={`px-space-sm py-space-xxs rounded font-label-sm text-label-sm transition-colors ${
              payStatus === 'lunas' ? 'bg-primary text-on-primary font-bold' : 'text-tertiary'
            }`}
            type="button"
            onClick={() => onPayStatusChange('lunas')}
          >
            Lunas
          </button>
          <button
            className={`px-space-sm py-space-xxs rounded font-label-sm text-label-sm transition-colors ${
              payStatus === 'dp' ? 'bg-primary text-on-primary font-bold' : 'text-tertiary'
            }`}
            type="button"
            onClick={() => onPayStatusChange('dp')}
          >
            Uang Muka (DP)
          </button>
        </div>
      </div>

      {/* Action Processing Buttons */}
      <div className="space-y-space-xs pt-space-xs">
        <button
          className="w-full py-space-md rounded-xl bg-primary-container text-on-primary-container hover:bg-primary font-title-md text-title-md font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-sm"
          type="button"
          onClick={onSave}
        >
          <span className="material-symbols-outlined text-[22px]">print</span>
          Simpan Order &amp; Cetak Struk (F12)
        </button>
        <div className="grid grid-cols-2 gap-space-xs">
          <button
            className="py-space-sm px-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xxs transition-colors"
            type="button"
            onClick={() => onNotify('Nota WhatsApp dikirim ke 0812-8899-1234.')}
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">share</span>
            Kirim WA Nota
          </button>
          <button
            className="py-space-sm px-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xxs transition-colors"
            type="button"
            onClick={() => onNotify('Barcode tag BASKET-A12 dikirim ke printer label.')}
          >
            <span className="material-symbols-outlined text-[18px]">sell</span>
            Cetak Barcode Tag
          </button>
        </div>
      </div>
    </>
  );
}
