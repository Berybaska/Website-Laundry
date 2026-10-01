import { rupiah } from '../data.js';
import PaymentSection from './PaymentSection.jsx';

export default function CartPanel(props) {
  const { cart, orderNo, onRemoveItem, onClearCart } = props;
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount;

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
      {/* Cart Ticket Header */}
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-surface">Keranjang Cuci</span>
          <span className="font-label-sm text-label-sm text-primary font-bold">No. Order: {orderNo}</span>
        </div>
        <button
          className="text-tertiary hover:text-error transition-colors p-space-xxs"
          title="Bersihkan Keranjang"
          type="button"
          onClick={onClearCart}
        >
          <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
        </button>
      </div>

      {/* Selected Item List */}
      <div className="space-y-space-sm max-h-[280px] overflow-y-auto pr-space-xxs">
        {cart.length === 0 && (
          <div className="p-space-md rounded-lg bg-surface-container-low text-center font-body-sm text-body-sm text-tertiary">
            Keranjang kosong — pilih layanan dari katalog untuk mulai order.
          </div>
        )}
        {cart.map((item) => (
          <CartRow item={item} key={item.id} onRemoveItem={onRemoveItem} />
        ))}
      </div>

      {/* Voucher Member Apply Box */}
      <div className="p-space-sm rounded-lg bg-surface-container-high flex items-center justify-between gap-space-xs">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[20px]">loyalty</span>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-bold">MEMBER-GOLD10</span>
            <span className="font-label-sm text-label-sm text-tertiary">Potongan otomatis 10% terpasang</span>
          </div>
        </div>
        <span className="px-space-xs py-space-xxs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">-{rupiah(discount)}</span>
      </div>

      {/* Cost Calculation Ledger */}
      <div className="space-y-space-xxs pt-space-xs font-body-sm text-body-sm">
        <LedgerRow label={`Subtotal Bruto (${cart.length} Item)`} value={rupiah(subtotal)} valueClass="text-on-surface font-medium" />
        <LedgerRow label="Diskon Member Gold (-10%)" value={`-${rupiah(discount)}`} valueClass="text-secondary font-semibold" />
        <LedgerRow label="Biaya Layanan & Silver+" value="Rp 0 (Promo)" valueClass="text-on-surface font-medium" />
        <LedgerRow label="Pajak Restitusi PB1 (0%)" value="Rp 0" valueClass="text-on-surface font-medium" />
        {/* Net Total Final Callout */}
        <div className="pt-space-sm mt-space-sm flex items-baseline justify-between bg-primary-fixed p-space-md rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-primary-fixed uppercase tracking-wider font-bold">Total Pembayaran</span>
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant">Estimasi Siap: 28 Mei 2025, 17:00</span>
          </div>
          <span className="font-display-lg text-display-lg text-primary font-black">{rupiah(total)}</span>
        </div>
      </div>

      <PaymentSection {...props} />
    </div>
  );
}

function LedgerRow({ label, value, valueClass }) {
  return (
    <div className="flex items-center justify-between text-tertiary">
      <span>{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

function CartRow({ item, onRemoveItem }) {
  return (
    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-title-md text-title-md text-on-surface leading-tight">{item.name}</span>
          <span className="font-label-sm text-label-sm text-tertiary">{item.qtyLabel}</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">{rupiah(item.total)}</span>
      </div>
      <div className="flex items-center justify-between text-tertiary pt-space-xxs">
        {item.meta ? (
          <span className="font-label-sm text-label-sm flex items-center gap-space-xxs">
            <span className="material-symbols-outlined text-[14px] text-primary">local_florist</span>
            {item.meta.label}
          </span>
        ) : item.warning ? (
          <span className="font-label-sm text-label-sm text-error flex items-center gap-space-xxs">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            {item.warning}
          </span>
        ) : (
          <span />
        )}
        {item.badge ? (
          <span className="font-label-sm text-label-sm bg-surface-container-highest px-space-xs rounded text-primary font-semibold">{item.badge}</span>
        ) : (
          <button className="text-error hover:text-on-surface text-label-sm font-label-sm" type="button" onClick={() => onRemoveItem(item.id)}>
            Hapus
          </button>
        )}
      </div>
    </div>
  );
}
