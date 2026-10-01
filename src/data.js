export const rupiah = (n) => `Rp ${Math.round(n).toLocaleString('id-ID')}`;

export const NAV_ITEMS = [
  { path: 'kasir-pos', icon: 'point_of_sale', label: 'Kasir & POS' },
  { path: 'workshop-produksi', icon: 'local_laundry_service', label: 'Workshop & Produksi' },
  { path: 'kurir-delivery', icon: 'local_shipping', label: 'Kurir & Delivery' },
  { path: 'laporan-finansial', icon: 'account_balance_wallet', label: 'Laporan & Finansial' },
  { path: 'inventaris-bahan', icon: 'inventory_2', label: 'Inventaris & Bahan' },
  { path: 'pelanggan-crm', icon: 'group', label: 'Pelanggan & CRM' },
  { path: 'portal-publik-cek-resi', icon: 'open_in_new', label: 'Portal Cek Resi' },
];

export const SERVICE_CATEGORIES = [
  { id: 'kiloan', label: 'Cuci Kiloan Reguler (2 Hari)', icon: 'wash', iconClass: '' },
  { id: 'express', label: 'Express (6 Jam)', icon: 'bolt', iconClass: 'text-error' },
  { id: 'satuan', label: 'Satuan & Dry Clean', icon: 'diamond', iconClass: 'text-secondary' },
  { id: 'sepatu', label: 'Sepatu & Tas', icon: 'roller_skating', iconClass: 'text-tertiary' },
  { id: 'bedcover', label: 'Bedcover & Gordyn', icon: 'bed', iconClass: '' },
];

export const SERVICES = [
  {
    id: 'kiloan-prioritas',
    category: 'kiloan',
    tag: 'Kiloan Prioritas',
    tagClass: 'text-primary',
    name: 'Cuci Komplit + Setrika',
    sla: '48 Jam',
    desc: 'Pencucian higienis terpisah, deterjen enzim premium & steam press rapi beraroma.',
    rateLabel: 'Tarif Unit',
    price: 12000,
    unit: '/kg',
    pricing: 'kg',
    featured: true,
  },
  {
    id: 'kiloan-hemat',
    category: 'kiloan',
    tag: 'Kiloan Hemat',
    tagClass: 'text-tertiary',
    name: 'Cuci Kering Saja (Lipat)',
    sla: '24 Jam',
    desc: 'Pencucian otomatis, pengeringan mesin tumble dryer 100% matang dan lipat rapi.',
    rateLabel: 'Tarif Unit',
    price: 8000,
    unit: '/kg',
    pricing: 'kg',
  },
  {
    id: 'jas-wool',
    category: 'satuan',
    tag: 'Satuan Premium',
    tagClass: 'text-secondary',
    name: 'Jas / Blazer Wool',
    sla: '3 Hari',
    desc: 'Dry clean non-aqueous solvent, pelindung kancing eksklusif, gantung hanger cover.',
    rateLabel: 'Tarif Satuan',
    price: 45000,
    unit: '/pcs',
    pricing: 'pcs',
  },
  {
    id: 'kemeja-sutra',
    category: 'satuan',
    tag: 'Satuan Delicates',
    tagClass: 'text-secondary',
    name: 'Kemeja Sutra & Batik Tulis',
    sla: '2 Hari',
    desc: 'Perawatan khusus serat alami, lerak natural shampoo anti luntur, hand-pressed.',
    rateLabel: 'Tarif Satuan',
    price: 25000,
    unit: '/pcs',
    pricing: 'pcs',
  },
  {
    id: 'sepatu-sneakers',
    category: 'sepatu',
    tag: 'Sepatu & Sneakers',
    tagClass: 'text-tertiary',
    name: 'Deep Clean Sneakers Care',
    sla: '3 Hari',
    desc: 'Pencucian midsole, upper, insole, unyellowing treatment plus silica gel.',
    rateLabel: 'Tarif Satuan',
    price: 50000,
    unit: '/psg',
    pricing: 'pcs',
  },
  {
    id: 'bedcover-king',
    category: 'bedcover',
    tag: 'Perlengkapan',
    tagClass: 'text-tertiary',
    name: 'Bedcover King / Selimut',
    sla: '2 Hari',
    desc: 'Mesin kapasitas 20kg washer extractor khusus sprei tebal dan vakum press.',
    rateLabel: 'Tarif Satuan',
    price: 35000,
    unit: '/pcs',
    pricing: 'pcs',
  },
];

export const INSPECTION_NOTES = [
  { id: 'luntur', label: 'Luntur / Pisahkan Cucian', icon: 'priority_high', severity: true },
  { id: 'kancing', label: 'Kancing Lepas (1 pcs)', icon: 'circle', severity: false },
  { id: 'noda', label: 'Noda Minyak di Kerah', icon: 'water_drop', severity: false },
  { id: 'sobek', label: 'Sobek Kecil di Saku Kanan', icon: 'content_cut', severity: false },
];

export const PAYMENT_CHANNELS = [
  { id: 'tunai', label: 'Tunai / Kasir', icon: 'payments', iconClass: '' },
  { id: 'qris', label: 'QRIS Dinamis', icon: 'qr_code_2', iconClass: 'text-secondary' },
  { id: 'deposit', label: 'Potong Deposit', icon: 'account_balance_wallet', iconClass: 'text-primary' },
  { id: 'bayar-ambil', label: 'Bayar Saat Ambil', icon: 'schedule', iconClass: 'text-tertiary' },
];

export const INITIAL_CART = [
  {
    id: 'cart-1',
    name: 'Cuci Komplit Reguler',
    qtyLabel: '4.85 kg x Rp 12.000',
    total: 58200,
    meta: { type: 'florist', label: 'Downy Mystique' },
    badge: '18 Pcs Dihitung',
  },
  {
    id: 'cart-2',
    name: 'Kemeja Sutra (Dry Clean)',
    qtyLabel: '1 pcs x Rp 25.000',
    total: 25000,
    warning: 'Luntur / Dipisah',
  },
  {
    id: 'cart-3',
    name: 'Biaya Parfum Premium Ekstra',
    qtyLabel: '1 order bundle',
    total: 5000,
  },
];

export const PHOTOS = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgYC900KaKK12ytd1hjY4VenO9XecLBA896C2VQdmJB56FWYY8DmqmYv0IHlPf7CpX2Ue-cbW3Wtc5__JhI_2v7jKpRsTRPkmew5gTrOGir0HCkfRwxkN4pRaT4ElvbE7OQQgbGnTYt9IBZFMBkLfmT-qqvtR3xTuAIlDiF6TizHCtHz1k8eyjSc2d3cplf7KuSbE5vIRwbxRylWfV4ff45wi-spIhku6sTgUWLl8LXbb0C9ka6aE',
    alt: 'Close-up macro photo of a minor fabric flaw with grease mark on the collar of a white cotton dress shirt under bright inspection lamp',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClwvLl28o1ZKdKJ6evoyS9tPVP2gL13iTzb60my6kk6WjZtbEAdB7gvxQi107cS5k6wtjCfFEyiFSi1YqNGnZ7cwqntbAhGjwC1wLXAHnqRfjl3FkhpJ6j4BM1J9HvIR8HI1SCfVfuQp9Y9C74OF9njUO3Nk6LlRcbVdNbsMzEaVKnm8ORbw62w1HGrilleXEFtKMik6gpODyTzjyNkIS0nGPyUPTcCpi0scrlLcR8oBhj4Kklrb0',
    alt: 'Macro photo showing a torn stitch seam on the back pocket of blue denim jeans highlighted for laundry intake inspection record',
  },
];
