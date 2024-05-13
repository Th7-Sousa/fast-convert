// Componente AlertDestructive
import React, { useState, useEffect } from 'react';
import { TbAlertTriangle } from "react-icons/tb";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function AlertDestructive({ render }) {
  const [isVisible, setIsVisible] = useState(false); // Estado inicial definido como false

  useEffect(() => {
    if (render) {
      setIsVisible(true); // Definir isVisible como true quando render é true
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [render]);

  return (
    <>
      {isVisible && (
        <Alert className='w-auto border-2 relative bottom-14' variant="destructive">
          <TbAlertTriangle className="h-4 w-4" />
          <AlertTitle className='text-lg'>Inválido</AlertTitle>
          <AlertDescription className='text-base'>
            A unidade para conversão deve ser diferente da unidade de origem.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
