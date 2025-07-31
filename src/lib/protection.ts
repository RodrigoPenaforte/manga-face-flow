// Proteções avançadas contra clonagem de landing page

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

// Proteção contra inspeção de elementos
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
  }, 500);
};

// Proteção contra cliques do mouse
export const setupMouseProtection = (): void => {
  // Clique direito
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    redirectToOriginalCheckout();
  });

  // Clique do meio
  document.addEventListener('auxclick', (e) => {
    if (e.button === 1) { // botão do meio
      e.preventDefault();
      redirectToOriginalCheckout();
    }
  });
};

// Proteção contra teclas
export const setupKeyboardProtection = (): void => {
  document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 's')
    ) {
      e.preventDefault();
      redirectToOriginalCheckout();
    }
  });
};

// Proteção contra seleção e cópia
export const setupCopyProtection = (): void => {
  // Seleção de texto
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });

  // Cópia (Ctrl+C)
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    redirectToOriginalCheckout();
  });

  // Recortar (Ctrl+X)
  document.addEventListener('cut', (e) => {
    e.preventDefault();
    redirectToOriginalCheckout();
  });
};

// Proteção contra arrastar elementos
export const setupDragProtection = (): void => {
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  // Proteção contra arrastar imagens
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  });
};

// Proteção contra console
export const setupConsoleProtection = (): void => {
  // Detecta quando o console é aberto
  window.addEventListener('devtoolschange', (e: any) => {
    if (e.detail.isOpen) {
      redirectToOriginalCheckout();
    }
  });
};

// Proteção contra iframe (se alguém tentar embedar sua página)
export const setupIframeProtection = (): void => {
  if (window.self !== window.top) {
    redirectToOriginalCheckout();
  }
};

// Função principal que ativa todas as proteções
export const activateProtection = (): void => {
  // Verifica domínio primeiro
  if (!isLegitimateDomain()) {
    redirectToOriginalCheckout();
    return;
  }

  // Ativa todas as proteções
  detectDevTools();
  setupMouseProtection();
  setupKeyboardProtection();
  setupCopyProtection();
  setupDragProtection();
  setupConsoleProtection();
  setupIframeProtection();

  // Proteção adicional: verifica periodicamente se ainda está no domínio correto
  setInterval(() => {
    if (!isLegitimateDomain()) {
      redirectToOriginalCheckout();
    }
  }, 5000);
};

// Função para lidar com cliques nos botões de checkout
export const handleCheckoutClick = (e: React.MouseEvent): void => {
  e.preventDefault();
  
  // Verificação adicional
  if (!isLegitimateDomain()) {
    redirectToOriginalCheckout();
    return;
  }
  
  // Redireciona para o checkout original
  window.location.href = ORIGINAL_CHECKOUT_URL;
}; 