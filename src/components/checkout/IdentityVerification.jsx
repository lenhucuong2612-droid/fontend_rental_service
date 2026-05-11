import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileCheck, AlertCircle, CheckCircle2, ShieldCheck, X } from 'lucide-react';

export default function IdentityVerification() {
  const [docs, setDocs] = useState({
    idFront: null,
    idBack: null,
    license: null
  });

  const [validation, setValidation] = useState({
    idFront: { status: 'idle', message: '' },
    idBack: { status: 'idle', message: '' },
    license: { status: 'idle', message: '' }
  });

  const onDrop = useCallback((acceptedFiles, type) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setDocs(prev => ({ ...prev, [type]: reader.result }));
      
      // Simulate intelligent validation
      setValidation(prev => ({ ...prev, [type]: { status: 'validating', message: 'Analyzing image quality...' } }));
      
      setTimeout(() => {
        // Randomly simulate different feedback for demo purposes
        const results = [
          { status: 'success', message: 'Image looks clear' },
          { status: 'warning', message: 'Please retake in better lighting' },
          { status: 'error', message: 'Document edges are not fully visible' }
        ];
        const randomResult = results[Math.floor(Math.random() * results.length)];
        setValidation(prev => ({ ...prev, [type]: randomResult }));
      }, 1500);
    };
    reader.readAsDataURL(file);
  }, []);

  const removeDoc = (type) => {
    setDocs(prev => ({ ...prev, [type]: null }));
    setValidation(prev => ({ ...prev, [type]: { status: 'idle', message: '' } }));
  };

  const UploadZone = ({ type, label, subtitle }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (files) => onDrop(files, type),
      accept: { 'image/*': [] },
      multiple: false
    });

    const v = validation[type];

    return (
      <div className="space-y-4">
        <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">{label}</label>
        <div 
          {...getRootProps()} 
          className={`relative h-48 rounded-3xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-6 overflow-hidden cursor-pointer ${
            isDragActive ? 'border-brand-gold bg-brand-gold/5' : 
            docs[type] ? 'border-white/10 bg-white/5' : 'border-white/5 bg-white/2'
          }`}
        >
          <input {...getInputProps()} />
          
          {docs[type] ? (
            <div className="absolute inset-0 group">
              <img src={docs[type]} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  {v.status === 'validating' ? (
                    <motion.div 
                      key="validating"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mb-2"></div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest">Scanning...</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="result"
                      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center text-center"
                    >
                      {v.status === 'success' && <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />}
                      {v.status === 'warning' && <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />}
                      {v.status === 'error' && <AlertCircle className="w-8 h-8 text-rose-500 mb-2" />}
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        v.status === 'success' ? 'text-emerald-500' : 
                        v.status === 'warning' ? 'text-amber-500' : 'text-rose-500'
                      }`}>
                        {v.message}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); removeDoc(type); }}
                  className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 mb-4 group-hover:text-brand-gold transition-colors">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">{subtitle}</p>
              <p className="text-white/30 text-[10px] uppercase font-medium">Click or drag & drop</p>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Verify Your Identity</h3>
          <p className="text-white/40 text-sm font-light">For security and insurance purposes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UploadZone type="idFront" label="Citizen ID Card (Front)" subtitle="Upload Front Side" />
        <UploadZone type="idBack" label="Citizen ID Card (Back)" subtitle="Upload Back Side" />
      </div>
      
      <div className="pt-4">
        <UploadZone type="license" label="Driver's License" subtitle="Upload Front of License" />
      </div>

      <div className="bg-brand-gold/5 border-l-4 border-brand-gold p-6 rounded-r-3xl flex gap-4 items-start">
        <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
        <p className="text-xs text-white/60 leading-relaxed italic">
          <strong className="text-white not-italic uppercase tracking-widest text-[9px] mr-2">Privacy Note:</strong>
          Your documents are encrypted and securely stored. We only use them to verify your eligibility for luxury vehicle insurance.
        </p>
      </div>
    </section>
  );
}
