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

// Proteção contra inspeção de elementos (só ativa se detectar tentativa real)
export const detectDevTools = (): void => {
  let devtools = { open: false, orientation: null as string | null };
  const threshold = 160;
  let warningCount = 0;

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
        warningCount++;
        
        // Só redireciona após 3 tentativas de abrir devtools
        if (warningCount >= 3) {
          redirectToOriginalCheckout();
        }
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
  }, 1000); // Verificação mais lenta
};

// Proteção contra cliques do mouse (só ativa em tentativas suspeitas)
export const setupMouseProtection = (): void => {
  let rightClickCount = 0;
  let lastRightClick = 0;

  // Clique direito
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastRightClick < 2000) { // Se clicou direito muito rápido
      rightClickCount++;
      if (rightClickCount >= 3) {
        redirectToOriginalCheckout();
      }
    } else {
      rightClickCount = 1;
    }
    lastRightClick = now;
  });

  // Clique do meio (só ativa se for muito frequente)
  let middleClickCount = 0;
  let lastMiddleClick = 0;

  document.addEventListener('auxclick', (e) => {
    if (e.button === 1) { // botão do meio
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastMiddleClick < 1000) {
        middleClickCount++;
        if (middleClickCount >= 2) {
          redirectToOriginalCheckout();
        }
      } else {
        middleClickCount = 1;
      }
      lastMiddleClick = now;
    }
  });
};

// Proteção contra teclas (só ativa em combinações suspeitas)
export const setupKeyboardProtection = (): void => {
  let suspiciousKeyCount = 0;
  let lastKeyPress = 0;

  document.addEventListener('keydown', (e) => {
    const now = Date.now();
    
    // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 's')
    ) {
      e.preventDefault();
      
      if (now - lastKeyPress < 3000) { // Se pressionou muito rápido
        suspiciousKeyCount++;
        if (suspiciousKeyCount >= 2) {
          redirectToOriginalCheckout();
        }
      } else {
        suspiciousKeyCount = 1;
      }
      lastKeyPress = now;
    }
  });
};

// Proteção contra seleção e cópia (mais suave)
export const setupCopyProtection = (): void => {
  let copyAttempts = 0;
  let lastCopyAttempt = 0;

  // Seleção de texto (permite seleção, mas monitora)
  document.addEventListener('selectstart', (e) => {
    // Permite seleção, mas monitora
  });

  // Cópia (Ctrl+C) - só ativa se for muito frequente
  document.addEventListener('copy', (e) => {
    const now = Date.now();
    if (now - lastCopyAttempt < 2000) {
      copyAttempts++;
      if (copyAttempts >= 3) {
        e.preventDefault();
        redirectToOriginalCheckout();
      }
    } else {
      copyAttempts = 1;
    }
    lastCopyAttempt = now;
  });

  // Recortar (Ctrl+X) - mais tolerante
  document.addEventListener('cut', (e) => {
    const now = Date.now();
    if (now - lastCopyAttempt < 1000) {
      copyAttempts++;
      if (copyAttempts >= 2) {
        e.preventDefault();
        redirectToOriginalCheckout();
      }
    } else {
      copyAttempts = 1;
    }
    lastCopyAttempt = now;
  });
};

// Proteção contra arrastar elementos (mais suave)
export const setupDragProtection = (): void => {
  let dragAttempts = 0;
  let lastDragAttempt = 0;

  document.addEventListener('dragstart', (e) => {
    const now = Date.now();
    if (now - lastDragAttempt < 1000) {
      dragAttempts++;
      if (dragAttempts >= 3) {
        e.preventDefault();
        redirectToOriginalCheckout();
      }
    } else {
      dragAttempts = 1;
    }
    lastDragAttempt = now;
  });

  // Proteção contra arrastar imagens (mais tolerante)
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', (e) => {
      const now = Date.now();
      if (now - lastDragAttempt < 500) {
        dragAttempts++;
        if (dragAttempts >= 5) {
          e.preventDefault();
          redirectToOriginalCheckout();
        }
      } else {
        dragAttempts = 1;
      }
      lastDragAttempt = now;
    });
  });
};

// Proteção contra console (mais inteligente)
export const setupConsoleProtection = (): void => {
  let consoleOpenCount = 0;
  
  window.addEventListener('devtoolschange', (e: any) => {
    if (e.detail.isOpen) {
      consoleOpenCount++;
      if (consoleOpenCount >= 2) {
        redirectToOriginalCheckout();
      }
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

// Função principal que ativa todas as proteções (versão inteligente)
export const activateProtection = (): void => {
  // Verifica domínio primeiro
  if (!isLegitimateDomain()) {
    // Só redireciona se for claramente um domínio suspeito
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

  // Ativa proteções de forma mais inteligente
  detectDevTools();
  setupMouseProtection();
  setupKeyboardProtection();
  setupCopyProtection();
  setupDragProtection();
  setupConsoleProtection();
  setupIframeProtection();

  // Verificação periódica mais suave
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
  }, 10000); // Verificação a cada 10 segundos
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