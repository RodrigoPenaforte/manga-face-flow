// Proteções avançadas contra clonagem de landing page - VERSÃO INTELIGENTE

export const ORIGINAL_CHECKOUT_URL = "https://pay.kiwify.com.br/i4D9YlE";

// Lista de domínios autorizados
const ALLOWED_DOMAINS = [
  'localhost',
  '127.0.0.1',
  'manga-face-flow.vercel.app',
  'manga-face-flow.netlify.app',
  // Adicione seu domínio real aqui
];

// Verifica se o domínio atual é legítimo
export const isLegitimateDomain = (): boolean => {
  const currentDomain = window.location.hostname;
  return ALLOWED_DOMAINS.includes(currentDomain);
};

// Redireciona para o checkout original
export const redirectToOriginalCheckout = (): void => {
  window.location.href = ORIGINAL_CHECKOUT_URL;
};

// Proteção contra inspeção de elementos (bloqueia completamente)
export const detectDevTools = (): void => {
  let devtools = { open: false, orientation: null as string | null };
  const threshold = 160;

  const emitEvent = (isOpen: boolean, orientation?: string) => {
    window.dispatchEvent(new CustomEvent('devtoolschange', {
      detail: { isOpen, orientation }
    }));
  };

  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    const orientation = widthThreshold ? 'vertical' : 'horizontal';

    if (
      !(heightThreshold && widthThreshold) &&
      (widthThreshold || heightThreshold)
    ) {
      if ((!devtools.open) || (devtools.orientation !== orientation)) {
        emitEvent(true, orientation);
        // Detecta mas não redireciona, apenas registra
        console.log('DevTools detectado - Proteção ativa');
      }
      devtools.open = true;
      devtools.orientation = orientation;
    } else {
      if (devtools.open) {
        emitEvent(false, undefined);
      }
      devtools.open = false;
      devtools.orientation = null;
    }
  }, 1000);
};

// Proteção contra cliques do mouse (bloqueia completamente)
export const setupMouseProtection = (): void => {
  // Bloqueia clique direito
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia clique do meio
  document.addEventListener('auxclick', (e) => {
    if (e.button === 1) { // botão do meio
      e.preventDefault();
      return false;
    }
  });
};

// Proteção contra teclas (bloqueia completamente)
export const setupKeyboardProtection = (): void => {
  document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 's') ||
      (e.ctrlKey && e.key === 'a')
    ) {
      e.preventDefault();
      return false;
    }
  });
};

// Proteção contra seleção e cópia (bloqueia completamente)
export const setupCopyProtection = (): void => {
  // Bloqueia seleção de texto
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia cópia (Ctrl+C)
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia recortar (Ctrl+X)
  document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia colar (Ctrl+V) - opcional
  document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia clique direito (menu de contexto)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia teclas de atalho de cópia
  document.addEventListener('keydown', (e) => {
    // Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A
    if (
      (e.ctrlKey && e.key === 'c') ||
      (e.ctrlKey && e.key === 'x') ||
      (e.ctrlKey && e.key === 'v') ||
      (e.ctrlKey && e.key === 'a')
    ) {
      e.preventDefault();
      return false;
    }
  });
};

// Proteção contra arrastar elementos (bloqueia completamente)
export const setupDragProtection = (): void => {
  // Bloqueia arrastar qualquer elemento
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Bloqueia arrastar imagens especificamente
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });
    
    // Remove atributo draggable se existir
    img.setAttribute('draggable', 'false');
  });

  // Bloqueia arrastar textos
  document.addEventListener('mousedown', (e) => {
    if (e.target instanceof HTMLElement) {
      e.target.style.userSelect = 'none';
      e.target.style.webkitUserSelect = 'none';
    }
  });
};

// Proteção contra console (bloqueia completamente)
export const setupConsoleProtection = (): void => {
  // Detecta quando o console é aberto e mostra aviso
  window.addEventListener('devtoolschange', (e: any) => {
    if (e.detail.isOpen) {
      // Pode mostrar um aviso ou fazer alguma ação, mas não redireciona
      console.log('Acesso ao console detectado - Proteção ativa');
    }
  });
};

// Proteção contra iframe (só ativa se detectar tentativa real de embed)
export const setupIframeProtection = (): void => {
  if (window.self !== window.top) {
    // Verifica se é uma tentativa suspeita de embed
    const referrer = document.referrer;
    const isSuspiciousEmbed = referrer && (
      referrer.includes('archive.org') ||
      referrer.includes('web.archive.org') ||
      referrer.includes('waybackmachine') ||
      referrer.includes('clone')
    );
    
    if (isSuspiciousEmbed) {
      redirectToOriginalCheckout();
    }
  }
};

// Função principal que ativa todas as proteções (versão bloqueadora)
export const activateProtection = (): void => {
  // Verifica domínio primeiro - só redireciona se for claramente suspeito
  if (!isLegitimateDomain()) {
    const currentDomain = window.location.hostname;
    const suspiciousDomains = ['clone', 'copy', 'fake', 'scam', 'phishing'];
    const isSuspicious = suspiciousDomains.some(term => 
      currentDomain.toLowerCase().includes(term)
    );
    
    if (isSuspicious) {
      redirectToOriginalCheckout();
      return;
    }
  }

  // Ativa todas as proteções de bloqueio
  detectDevTools();
  setupMouseProtection();
  setupKeyboardProtection();
  setupCopyProtection();
  setupDragProtection();
  setupConsoleProtection();
  setupIframeProtection();

  // Verificação periódica de domínio suspeito
  setInterval(() => {
    if (!isLegitimateDomain()) {
      const currentDomain = window.location.hostname;
      const suspiciousDomains = ['clone', 'copy', 'fake', 'scam', 'phishing'];
      const isSuspicious = suspiciousDomains.some(term => 
        currentDomain.toLowerCase().includes(term)
      );
      
      if (isSuspicious) {
        redirectToOriginalCheckout();
      }
    }
  }, 10000);
};

// Função para lidar com cliques nos botões de checkout
export const handleCheckoutClick = (e: React.MouseEvent): void => {
  e.preventDefault();
  
  // Verificação adicional mais inteligente
  if (!isLegitimateDomain()) {
    const currentDomain = window.location.hostname;
    const suspiciousDomains = ['clone', 'copy', 'fake', 'scam', 'phishing'];
    const isSuspicious = suspiciousDomains.some(term => 
      currentDomain.toLowerCase().includes(term)
    );
    
    if (isSuspicious) {
      redirectToOriginalCheckout();
      return;
    }
  }
  
  // Redireciona para o checkout original
  window.location.href = ORIGINAL_CHECKOUT_URL;
}; 