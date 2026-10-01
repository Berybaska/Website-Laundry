import { INSPECTION_NOTES, PHOTOS } from '../data.js';

export default function InspectionPanel({ activeNotes, onToggleNote, noteText, onNoteTextChange, onNotify }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-error text-[20px]">assignment_late</span>
          <span className="font-title-md text-title-md text-on-surface">Inspeksi Kondisi Fisik &amp; Catatan Khusus</span>
        </div>
        <span className="font-label-sm text-label-sm text-tertiary">Kondisi tercetak di label &amp; struk pelanggan</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-xs">
        {INSPECTION_NOTES.map((note) => {
          const isActive = activeNotes.includes(note.id);
          const severity = isActive && note.severity;
          return (
            <button
              key={note.id}
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md flex items-center gap-space-xxs transition-colors ${
                severity
                  ? 'bg-error-container text-on-error-container'
                  : isActive
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
              }`}
              type="button"
              onClick={() => onToggleNote(note.id)}
            >
              <span className="material-symbols-outlined text-[16px]">{note.icon}</span>
              {note.label}
            </button>
          );
        })}
        <button
          className="px-space-md py-space-xs rounded-full bg-surface-container-low text-tertiary hover:text-on-surface transition-colors font-label-md text-label-md"
          type="button"
          onClick={() => onNotify('Editor catatan manual siap diketik.')}
        >
          + Tambah Catatan Manual
        </button>
      </div>
      {/* Attachment and Photo Evidence Row */}
      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
        <div className="flex items-center gap-space-xs">
          {PHOTOS.map((photo, i) => (
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-sm" key={i}>
              <img className="w-full h-full object-cover" data-alt={photo.alt} src={photo.src} />
              <span className="absolute top-0 right-0 bg-on-surface/70 text-on-primary p-0.5 rounded-bl">
                <span className="material-symbols-outlined text-[12px]">visibility</span>
              </span>
            </div>
          ))}
        </div>
        <button
          className="h-16 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high text-primary flex items-center gap-space-xs transition-colors font-label-md text-label-md"
          type="button"
          onClick={() => onNotify('Kamera kasir siap mengambil foto bukti awal.')}
        >
          <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          Foto Bukti Awal (Kamera Kasir)
        </button>
        <div className="flex-1 min-w-[200px]">
          <input
            className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none"
            placeholder="Ketik keterangan detail jika ada instruksi khusus dari Budi..."
            type="text"
            value={noteText}
            onChange={(e) => onNoteTextChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
