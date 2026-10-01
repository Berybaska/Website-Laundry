import { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import PosBanner from './components/PosBanner.jsx';
import CustomerDeck from './components/CustomerDeck.jsx';
import WidgetDeck from './components/WidgetDeck.jsx';
import ServiceExplorer from './components/ServiceExplorer.jsx';
import InspectionPanel from './components/InspectionPanel.jsx';
import CartPanel from './components/CartPanel.jsx';
import ReceiptDeck from './components/ReceiptDeck.jsx';
import { INITIAL_CART, rupiah } from './data.js';

const ORDER_NO = '#CW-202505-0891';
const PERFUME_OPTIONS = {
  downy: { label: 'Downy Mystique', surcharge: 5000 },
  ocean: { label: 'Ocean Fresh', surcharge: 0 },
  lavender: { label: 'Lavender Velvet', surcharge: 3000 },
  baby: { label: 'Baby Blossom Hypoallergenic', surcharge: 0 },
};

export default function App() {
  const [scaleWeight] = useState('4.85');
  const [taring, setTaring] = useState(false);
  const [pcs, setPcs] = useState(18);
  const [perfume, setPerfume] = useState('downy');
  const [antiBac, setAntiBac] = useState(true);
  const [activeCategory, setActiveCategory] = useState('kiloan');
  const [cart, setCart] = useState(INITIAL_CART);
  const [activeNotes, setActiveNotes] = useState(['luntur']);
  const [noteText, setNoteText] = useState('');
  const [payment, setPayment] = useState('tunai');
  const [payStatus, setPayStatus] = useState('lunas');
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const notify = useCallback((message) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  const displayScale = taring ? '0.00' : scaleWeight;

  const handleTare = () => {
    if (taring) return;
    setTaring(true);
    setTimeout(() => setTaring(false), 1200);
  };

  const adjustPcs = (delta) => setPcs((prev) => Math.max(1, prev + delta));

  const addToCart = (service) => {
    const weight = Number(scaleWeight);
    const isKg = service.pricing === 'kg';
    const qty = isKg ? weight : 1;
    const total = Math.round(qty * service.price);
    const qtyLabel = isKg
      ? `${weight.toFixed(2)} kg x ${rupiah(service.price)}`
      : `1 ${service.unit.replace('/', '')} x ${rupiah(service.price)}`;
    setCart((prev) => [
      ...prev,
      {
        id: `${service.id}-${Date.now()}`,
        name: service.name,
        qtyLabel,
        total,
        ...(isKg ? { meta: { label: PERFUME_OPTIONS[perfume].label } } : {}),
      },
    ]);
    notify(`${service.name} ditambahkan ke keranjang (${rupiah(total)}).`);
  };

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => {
    setCart([]);
    notify('Keranjang dikosongkan.');
  };

  const toggleNote = (id) =>
    setActiveNotes((prev) => (prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]));

  const handleSave = useCallback(() => {
    notify(`Order ${ORDER_NO} disimpan — struk dikirim ke Epson TM-T82X.`);
  }, [notify]);

  // F12 shortcut: Simpan Order & Cetak Struk
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleSave]);

  const cartProps = {
    cart,
    orderNo: ORDER_NO,
    onRemoveItem: removeItem,
    onClearCart: clearCart,
    payment,
    onPaymentChange: setPayment,
    payStatus,
    onPayStatusChange: setPayStatus,
    onSave: handleSave,
    onNotify: notify,
  };

  return (
    <div>
      <Sidebar onCloseShift={() => notify('Konfirmasi tutup shift pagi ditampilkan.')} />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 px-gutter-desktop py-space-xl bg-background min-h-screen">
          <div className="flex flex-col w-full gap-space-lg">
            <PosBanner scaleVal={displayScale} taring={taring} onTare={handleTare} />
            {/* Main POS Workspace: Split 12-Column Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* LEFT 8 COLUMNS: Order Builder, Weight Inspector & Catalog */}
              <div className="xl:col-span-8 flex flex-col gap-space-lg">
                <CustomerDeck onNotify={notify} />
                <WidgetDeck
                  scaleVal={displayScale}
                  onGrabWeight={() => notify(`Bobot ${scaleWeight} kg diambil dari timbangan Port COM3.`)}
                  onCalibrate={() => notify('Kalibrasi nol timbangan dijalankan.')}
                  pcs={pcs}
                  onAdjustPcs={adjustPcs}
                  perfume={perfume}
                  onPerfumeChange={setPerfume}
                  antiBac={antiBac}
                  onAntiBacChange={setAntiBac}
                  onNotify={notify}
                />
                <ServiceExplorer
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onAddToCart={addToCart}
                />
                <InspectionPanel
                  activeNotes={activeNotes}
                  onToggleNote={toggleNote}
                  noteText={noteText}
                  onNoteTextChange={setNoteText}
                  onNotify={notify}
                />
              </div>
              {/* RIGHT 4 COLUMNS: Order Summary, Cart Ticket & Instant Payment Drawer */}
              <div className="xl:col-span-4 flex flex-col gap-space-lg">
                <CartPanel {...cartProps} />
                <ReceiptDeck />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-space-xl right-space-xl z-50 bg-on-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-lg font-label-md text-label-md max-w-sm">
          {toast}
        </div>
      )}
    </div>
  );
}

