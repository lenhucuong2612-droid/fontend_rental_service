import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Upload, CheckCircle2, Clock, AlertTriangle, XCircle, ShieldCheck, Lock, RefreshCw, Trash2 } from 'lucide-react';

const docs = [
  { id: 1, name: 'Citizen ID Card (CCCD)', icon: <FileText className="w-6 h-6" />, status: 'verified', lastVerified: '10 Jan 2026', expiry: '15 Dec 2031', number: '••• ••• 7821' },
  { id: 2, name: "Driver's License", icon: <FileText className="w-6 h-6" />, status: 'verified', lastVerified: '10 Jan 2026', expiry: '01 Mar 2028', number: '••• ••• 4490' },
  { id: 3, name: 'Passport (Optional)', icon: <FileText className="w-6 h-6" />, status: 'not_uploaded', lastVerified: null, expiry: null, number: null }
];

const statusConfig = {
  verified: { label: 'Verified', icon: <CheckCircle2 className="w-4 h-4" />, classes: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
  pending: { label: 'Pending Review', icon: <Clock className="w-4 h-4" />, classes: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
  expired: { label: 'Expired', icon: <AlertTriangle className="w-4 h-4" />, classes: 'text-rose-500 bg-rose-500/10 border-rose-500/20' },
  not_uploaded: { label: 'Not Uploaded', icon: <Upload className="w-4 h-4" />, classes: 'text-white/30 bg-white/5 border-white/10' }
};

export default function SavedDocuments() {
  const [uploading, setUploading] = useState(null);

  const handleUpload = (id) => {
    setUploading(id);
    setTimeout(() => setUploading(null), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Saved <span className="text-brand-gold italic">Documents</span></h2>
        <p className="text-white/40 text-sm font-light mt-2 tracking-wide uppercase tracking-[0.2em]">Secure vault for your rental verifications</p>
      </div>

      {/* Encryption Trust Banner */}
      <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em] mb-1">End-to-End Encrypted Vault</p>
            <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest leading-relaxed">Your documents are encrypted and only used for vehicle verification. Future bookings are now much faster.</p>
          </div>
        </div>
        <div className="ml-auto flex gap-6 shrink-0">
          {[
            { icon: <Lock className="w-4 h-4" />, label: 'AES-256' },
            { icon: <ShieldCheck className="w-4 h-4" />, label: 'ISO 27001' }
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-emerald-500/60">
              {b.icon}
              <span className="text-[8px] font-black uppercase tracking-widest">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Documents List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {docs.map((doc, idx) => {
          const cfg = statusConfig[doc.status];
          const isUploading = uploading === doc.id;
          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-brand-charcoal rounded-[40px] border p-8 flex flex-col gap-8 relative overflow-hidden group transition-all ${
                doc.status === 'verified' ? 'border-emerald-500/10 hover:border-emerald-500/30' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${cfg.classes}`}>
                  {doc.icon}
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[9px] font-black uppercase tracking-widest ${cfg.classes}`}>
                  {cfg.icon}
                  {cfg.label}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">{doc.name}</h4>
                {doc.number && <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{doc.number}</p>}
              </div>

              {doc.status === 'verified' && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest mb-1">Last Verified</p>
                    <p className="text-white text-[10px] font-bold uppercase">{doc.lastVerified}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest mb-1">Expires</p>
                    <p className="text-white text-[10px] font-bold uppercase">{doc.expiry}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-white/5">
                {doc.status === 'not_uploaded' ? (
                  <button 
                    onClick={() => handleUpload(doc.id)}
                    className="flex-1 bg-brand-gold text-brand-black py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-gold-light transition-all"
                  >
                    {isUploading ? <div className="w-4 h-4 border-2 border-brand-black border-t-transparent rounded-full animate-spin" /> : <Upload className="w-4 h-4" />}
                    {isUploading ? 'Uploading...' : 'Upload Document'}
                  </button>
                ) : (
                  <>
                    <button className="flex-1 bg-white/5 border border-white/5 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                      <RefreshCw className="w-3 h-3" />
                      Replace
                    </button>
                    <button className="w-12 h-12 self-center rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-center justify-center text-rose-500/50 hover:text-rose-500 hover:border-rose-500/30 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Microcopy */}
      <div className="text-center pt-6">
        <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest leading-relaxed">
          Securely encrypted and stored for faster future reservations. <br />
          Documents are never shared without your explicit consent.
        </p>
      </div>
    </div>
  );
}
