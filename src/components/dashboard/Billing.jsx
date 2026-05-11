import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Receipt, CreditCard, Mail, MapPin, Plus, Save, CheckCircle2, Trash2 } from 'lucide-react';

function FormField({ label, placeholder, defaultValue = '', type = 'text', required }) {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="space-y-2">
      <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">
        {label}{required && <span className="text-brand-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10"
      />
    </div>
  );
}

const savedCards = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '08/27', isDefault: true },
  { id: 2, type: 'Mastercard', last4: '5678', expiry: '12/26', isDefault: false },
];

export default function Billing() {
  const [cards, setCards] = useState(savedCards);
  const [showCardForm, setShowCardForm] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Billing <span className="text-brand-gold italic">Information</span>
          </h2>
          <p className="text-white/40 text-sm font-light mt-2">Required for invoice generation and business customers.</p>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <AnimatePresence>
        {saved && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-4 flex items-center gap-3 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4" />
            Billing information saved successfully.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invoice Details */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-8">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Invoice Details
          <div className="h-px flex-1 bg-white/5" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Invoice Name" defaultValue="Alex Harrison" required />
          <FormField label="Tax Code / VAT ID" placeholder="e.g. 0123456789" />
          <FormField label="Company Name" placeholder="Optional — for business invoices" />
          <FormField label="Billing Email" type="email" defaultValue="billing@alexco.com" required />
          <div className="md:col-span-2">
            <FormField label="Billing Address" defaultValue="45 Phan Dinh Phung, Ba Dinh, Hanoi" />
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 flex items-start gap-3">
          <Building2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
            Business customers: invoices will be automatically emailed after each completed rental. Please ensure your tax code and billing email are accurate.
          </p>
        </div>
      </div>

      {/* Saved Payment Methods */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
            Saved Payment Methods
            <div className="h-px w-24 bg-white/5" />
          </h3>
          <button onClick={() => setShowCardForm(!showCardForm)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            <Plus className="w-3 h-3" />
            Add Card
          </button>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <motion.div key={card.id} layout
              className={`relative rounded-[28px] p-7 border overflow-hidden ${
                card.isDefault ? 'bg-brand-gold/10 border-brand-gold/30' : 'bg-white/5 border-white/5'
              }`}
            >
              {card.isDefault && (
                <span className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest bg-brand-gold text-brand-black px-3 py-1 rounded-lg">Default</span>
              )}
              <div className="flex items-center justify-between mb-5">
                <div className={`text-xs font-black uppercase tracking-widest ${card.isDefault ? 'text-brand-gold' : 'text-white/40'}`}>
                  {card.type}
                </div>
                <CreditCard className={`w-5 h-5 ${card.isDefault ? 'text-brand-gold' : 'text-white/20'}`} />
              </div>
              <p className="text-white font-black text-lg tracking-[0.3em]">•••• •••• •••• {card.last4}</p>
              <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-2">Expires {card.expiry}</p>
              <div className="flex gap-3 mt-5">
                {!card.isDefault && (
                  <button onClick={() => setCards(prev => prev.map(c => ({ ...c, isDefault: c.id === card.id })))}
                    className="text-[9px] text-white/30 hover:text-brand-gold font-black uppercase tracking-widest transition-colors">
                    Set Default
                  </button>
                )}
                <button onClick={() => setCards(prev => prev.filter(c => c.id !== card.id))}
                  className="ml-auto text-rose-500/40 hover:text-rose-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Card Form */}
        <AnimatePresence>
          {showCardForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/5 pt-8 space-y-6">
              <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Add New Card</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Card Number</label>
                  <input placeholder="•••• •••• •••• ••••"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Expiry Date</label>
                  <input placeholder="MM / YY"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setCards(prev => [...prev, { id: Date.now(), type: 'Visa', last4: '0000', expiry: '12/29', isDefault: false }]); setShowCardForm(false); }}
                  className="bg-brand-gold text-brand-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all">
                  Save Card
                </button>
                <button onClick={() => setShowCardForm(false)}
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
