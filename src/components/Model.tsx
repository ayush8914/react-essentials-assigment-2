import { useRef,useEffect, use } from "react";
import Portal from "./Portal";

function Model({isOpen, onClose, title, children, showCloseButton=true} : {
    isOpen: boolean,
    onClose: () => void,
    title : string,
    children : React.ReactNode,
    showCloseButton : boolean
}) {
    const overlayRef = useRef(null);
    const modelRef = useRef(null);
    const lastFocusRef = useRef<any>(null);
    
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e : KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    
    return () => document.removeEventListener('keydown', handleEsc);
    
  }, [isOpen, onClose]);

  useEffect(() => {
    if(isOpen){
      lastFocusRef.current = document.activeElement;
      if(modelRef.current){
        modelRef
      }
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      if(lastFocusRef.current){
            lastFocusRef.current.focus();
        }
    }

  },[isOpen])

  useEffect(()=>{
    if(isOpen && modelRef.current){
        modelRef.current.focus();
    }
  },[isOpen])


  const handleOverLayClick = (e: any) => {
    if(e.target === overlayRef.current) onClose();
  }

  if (!isOpen) return null;
  
  return (
    <Portal>
    <div ref={overlayRef} onClick={handleOverLayClick} className="fixed inset-0 flex items-center justify-center p-40 bg-black/20 backdrop-blur-xs z-50" role="dialog" aria-modal="true" aria-labelledby="model-title">
      <div ref={modelRef} className="bg-white rounded-md shadow-xl  w-full min-w-sm md:max-w-lg md:min-w-lg max-h-[90vh] overflow-y-auto p-6 relative focus:outline-none" tabIndex={-1}>
          <div className="flex justify-between mb-3">
            <div className="text-xl font-semibold text-gray-900">
                {title}
            </div>
            <div>
              <button   onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" // Tailwind: Hover effects
          aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
            </button>
            </div>
          </div>
          <div className="space-y-4">
              {children}      
          </div>
      </div>
    </div>
    </Portal>
  )
}

export default Model