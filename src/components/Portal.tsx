import {useEffect, useState} from 'react';
import { createPortal } from 'react-dom';


const Portal = ({children , portalId = 'portal-root'} : {
    children : React.ReactNode,
    portalId : string
}) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);
   
    useEffect(()=>{
        let portalContainer = document.getElementById(portalId);
        if(portalContainer === null){
            portalContainer = document.createElement('div');
            portalContainer.id = portalId;
            document.body.appendChild(portalContainer);
        }
        setContainer(portalContainer);
        
        return () => {
            if(portalContainer && portalContainer.children.length ===0){
                document.body.removeChild(portalContainer);
            }
        };
    },[portalId]);
    
    if(!container)return null;
    
    return createPortal(children, container);

}

export default Portal;