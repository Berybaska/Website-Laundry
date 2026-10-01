import { SERVICE_CATEGORIES, SERVICES } from '../data.js';

export default function ServiceExplorer({ activeCategory, onCategoryChange, onAddToCart }) {
  return (
    <>
      {/* Service Category Nav Tabs */}
      <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xxs">
        {SERVICE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              className={`px-space-md py-space-sm rounded-xl font-label-md text-label-md whitespace-nowrap shadow-sm flex items-center gap-space-xs transition-colors ${
                isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
              }`}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
            >
              <span className={`material-symbols-outlined text-[18px] ${isActive ? '' : cat.iconClass}`}>{cat.icon}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Service Catalog Quick Grid — kartu terpilih kategori di-highlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {SERVICES.map((service) => {
          const matched = service.category === activeCategory;
          return (
            <div
              key={service.id}
              className={`bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all ${
                matched ? 'ring-1 ring-primary/40' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className={`font-label-sm text-label-sm uppercase font-bold tracking-wider ${service.tagClass}`}>{service.tag}</span>
                  <span className="font-title-md text-title-md text-on-surface mt-space-xxs">{service.name}</span>
                </div>
                <span className="px-space-xs py-space-xxs rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">{service.sla}</span>
              </div>
              <p className="font-body-sm text-body-sm text-tertiary my-space-sm">{service.desc}</p>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-tertiary">{service.rateLabel}</span>
                  <span className={`font-headline-sm text-headline-sm font-bold ${service.featured ? 'text-primary' : 'text-on-surface'}`}>
                    Rp {service.price.toLocaleString('id-ID')}
                    <span className="font-label-sm text-label-sm text-tertiary font-normal">{service.unit}</span>
                  </span>
                </div>
                <button
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shadow-sm ${
                    service.featured
                      ? 'bg-primary-container text-on-primary-container hover:bg-primary'
                      : 'bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary'
                  }`}
                  type="button"
                  title={`Tambah ${service.name} ke keranjang`}
                  onClick={() => onAddToCart(service)}
                >
                  <span className="material-symbols-outlined text-[20px]">{service.featured ? 'add_shopping_cart' : 'add'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
