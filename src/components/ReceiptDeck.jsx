export default function ReceiptDeck() {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[24px]">receipt_long</span>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">Printer Kasir Ready</span>
          <span className="font-label-sm text-label-sm text-tertiary">Epson TM-T82X (Thermal 80mm)</span>
        </div>
      </div>
      <span className="px-space-xs py-space-xxs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Paper 98%</span>
    </div>
  );
}
