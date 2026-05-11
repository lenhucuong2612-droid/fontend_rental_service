import { useState } from 'react';
import { Search, MessageSquare, ChevronRight, Plus, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

const conversations = [
  { id: 1, title: 'Mercedes E300 Rental Extension', dept: 'Active Trip', preview: 'Your extension has been confirmed.', time: '2m ago', status: 'resolved', unread: 0 },
  { id: 2, title: 'Bluetooth Connection Guide', dept: 'Vehicle Support', preview: 'Try pressing the sync button for 3 sec.', time: '1h ago', status: 'resolved', unread: 0 },
  { id: 3, title: 'Deposit Payment Confirmation', dept: 'Billing', preview: 'Deposit of $500 received successfully.', time: 'Yesterday', status: 'resolved', unread: 0 },
  { id: 4, title: 'Roadside Support – Da Lat', dept: 'Emergency', preview: 'Team arrived. Issue resolved.', time: '3 days ago', status: 'resolved', unread: 0 },
  { id: 5, title: 'New Booking Inquiry – BMW M8', dept: 'Sales', preview: 'Vehicle is available for your dates.', time: '5 days ago', status: 'resolved', unread: 0 },
];

const deptColors = {
  'Active Trip': 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
  'Vehicle Support': 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  'Billing': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'Emergency': 'text-rose-400 border-rose-400/30 bg-rose-400/10',
  'Sales': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
};

export default function ConversationList({ activeChatId, onSelectConversation, onNewChat }) {
  const [query, setQuery] = useState('');
  const filtered = conversations.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-brand-charcoal border-r border-white/5">
      {/* Header */}
      <div className="p-6 border-b border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-black text-sm uppercase tracking-[0.2em]">Conversations</h2>
          <button
            onClick={onNewChat}
            className="w-9 h-9 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-white text-xs focus:outline-none focus:border-brand-gold/30 transition-all placeholder:text-white/20"
          />
        </div>
      </div>

      {/* Conversation Items */}
      <div className="flex-1 overflow-y-auto space-y-1 p-3">
        {filtered.map(conv => (
          <button
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`w-full text-left p-4 rounded-2xl transition-all group space-y-2 ${
              activeChatId === conv.id ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5 border border-transparent'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-white/30 shrink-0" />
                <p className="text-white text-[11px] font-bold uppercase tracking-tight leading-tight line-clamp-1">{conv.title}</p>
              </div>
              <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest shrink-0">{conv.time}</span>
            </div>
            <div className="flex items-center justify-between gap-2 pl-6">
              <p className="text-white/30 text-[10px] leading-relaxed line-clamp-1">{conv.preview}</p>
              <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border shrink-0 ${deptColors[conv.dept] || 'text-white/20 border-white/10 bg-white/5'}`}>
                {conv.dept}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
