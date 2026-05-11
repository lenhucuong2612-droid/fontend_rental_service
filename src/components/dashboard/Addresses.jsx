import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Star, Trash2, CheckCircle2, Edit3, Save } from 'lucide-react';

const initialAddresses = [
  {
    id: 1, label: 'Home', address: '45 Phan Dinh Phung', city: 'Hanoi',
    district: 'Ba Dinh', ward: 'Phuc Xa', isDefault: true
  },
  {
    id: 2, label: 'Office', address: '12 Nguyen Chi Thanh', city: 'Hanoi',
    district: 'Dong Da', ward: 'Lang Ha', isDefault: false
  }
];

function AddressCard({ addr, onSetDefault, onDelete }) {
  const [editing, setEditing] = useState(false);
  return (
    <motion.div layout className={`rounded-[32px] border p-8 transition-all relative overflow-hidden ${
      addr.isDefault ? 'border-brand-gold/30 bg-brand-gold/5' : 'border-white/5 bg-brand-charcoal hover:border-white/10'
    }`}>
      {addr.isDefault && (
        <div className="absolute top-0 right-0 bg-brand-gold text-brand-black text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-2xl rounded-tr-[30px]">
          Default
        </div>
      )}
      <div className="flex items-start gap-5">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
          addr.isDefault ? 'bg-brand-gold text-brand-black' : 'bg-white/5 text-brand-gold'
        }`}>
          <MapPin className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-3">
            <p className="text-white font-black uppercase tracking-tight text-sm">{addr.label}</p>
          </div>
          <p className="text-white/60 text-[11px] font-medium leading-relaxed">{addr.address}</p>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{addr.ward}, {addr.district}, {addr.city}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pl-17">
        {!addr.isDefault && (
          <button onClick={() => onSetDefault(addr.id)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white text-[9px] font-black uppercase tracking-widest transition-all hover:bg-white/10">
            <Star className="w-3 h-3" />
            Set as Default
          </button>
        )}
        <button onClick={() => setEditing(!editing)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white text-[9px] font-black uppercase tracking-widest transition-all hover:bg-white/10">
          <Edit3 className="w-3 h-3" />
          Edit
        </button>
        <button onClick={() => onDelete(addr.id)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/5 border border-rose-500/10 text-rose-500/50 hover:text-rose-500 text-[9px] font-black uppercase tracking-widest transition-all hover:border-rose-500/30">
          <Trash2 className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Addresses() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [newAddr, setNewAddr] = useState({ label: 'New Address', address: '', city: 'Hanoi', district: '', ward: '' });

  const setDefault = (id) => setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  const deleteAddr = (id) => setAddresses(prev => prev.filter(a => a.id !== id));
  const addAddress = () => {
    if (!newAddr.address) return;
    setAddresses(prev => [...prev, { ...newAddr, id: Date.now(), isDefault: false }]);
    setShowForm(false);
    setNewAddr({ label: 'New Address', address: '', city: 'Hanoi', district: '', ward: '' });
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Delivery <span className="text-brand-gold italic">Addresses</span></h2>
          <p className="text-white/40 text-sm font-light mt-2">Save multiple addresses for faster doorstep delivery.</p>
        </div>
        <button onClick={() => setShowForm(true)}
          className="flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20">
          <Plus className="w-4 h-4" />
          Add Address
        </button>
      </div>

      {/* Info banner */}
      <div className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Your default address will be pre-filled automatically at checkout for doorstep delivery.</p>
      </div>

      {/* Add New Address Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="bg-brand-charcoal rounded-[32px] border border-brand-gold/20 p-8 overflow-hidden">
            <h4 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-6">New Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { key: 'label', label: 'Label (Home / Office / Hotel)' },
                { key: 'address', label: 'Street Address' },
                { key: 'city', label: 'City / Province' },
                { key: 'district', label: 'District' },
                { key: 'ward', label: 'Ward' }
              ].map(f => (
                <div key={f.key} className="space-y-2">
                  <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">{f.label}</label>
                  <input
                    value={newAddr[f.key]}
                    onChange={e => setNewAddr(prev => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={addAddress}
                className="flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all">
                <Save className="w-4 h-4" />
                Save Address
              </button>
              <button onClick={() => setShowForm(false)}
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Address Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {addresses.map(addr => (
            <AddressCard key={addr.id} addr={addr} onSetDefault={setDefault} onDelete={deleteAddr} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
