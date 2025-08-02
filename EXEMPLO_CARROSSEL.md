# Como Implementar o Carrossel de Rostos de Mangá

## 📸 Substituindo as Imagens Placeholder

### 1. Importe suas imagens no topo do arquivo:

```tsx
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Book, Video, Gift, Clock, Shield, MessageCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/manga-ebook-hero.jpg";
import expressionsImage from "@/assets/manga-expression-ebook.png";

// 👇 ADICIONE SEUS IMPORTS AQUI
import face1 from "@/assets/rostos/face1.jpg";
import face2 from "@/assets/rostos/face2.jpg";
import face3 from "@/assets/rostos/face3.jpg";
import face4 from "@/assets/rostos/face4.jpg";
import face5 from "@/assets/rostos/face5.jpg";
import face6 from "@/assets/rostos/face6.jpg";
import face7 from "@/assets/rostos/face7.jpg";
import face8 from "@/assets/rostos/face8.jpg";
import face9 from "@/assets/rostos/face9.jpg";

import { useState, useEffect, useRef } from "react";
import { activateProtection, handleCheckoutClick } from "@/lib/protection";
```

### 2. Substitua o array mangaFaces:

```tsx
const mangaFaces = [
  {
    id: 1,
    name: "Rosto Feminino - Alegre",
    image: face1, // 👈 Use o import aqui
    description: "Expressão alegre e confiante",
    bgColor: "bg-pink-200"
  },
  {
    id: 2,
    name: "Rosto Masculino - Sério", 
    image: face2, // 👈 Use o import aqui
    description: "Expressão séria e determinada",
    bgColor: "bg-blue-200"
  },
  {
    id: 3,
    name: "Rosto Feminino - Surpresa",
    image: face3, // 👈 Use o import aqui
    description: "Expressão de surpresa",
    bgColor: "bg-yellow-200"
  },
  {
    id: 4,
    name: "Rosto Masculino - Pensativo",
    image: face4, // 👈 Use o import aqui
    description: "Expressão pensativa",
    bgColor: "bg-green-200"
  },
  {
    id: 5,
    name: "Rosto Feminino - Triste",
    image: face5, // 👈 Use o import aqui
    description: "Expressão triste",
    bgColor: "bg-purple-200"
  },
  {
    id: 6,
    name: "Rosto Masculino - Raiva",
    image: face6, // 👈 Use o import aqui
    description: "Expressão de raiva",
    bgColor: "bg-orange-200"
  },
  {
    id: 7,
    name: "Rosto Feminino - Confiante",
    image: face7, // 👈 Use o import aqui
    description: "Expressão confiante",
    bgColor: "bg-teal-200"
  },
  {
    id: 8,
    name: "Rosto Masculino - Misterioso",
    image: face8, // 👈 Use o import aqui
    description: "Expressão misteriosa",
    bgColor: "bg-indigo-200"
  },
  {
    id: 9,
    name: "Rosto Feminino - Inocente",
    image: face9, // 👈 Use o import aqui
    description: "Expressão inocente",
    bgColor: "bg-red-200"
  }
];
```

## 🎨 Personalizações Possíveis

### 1. Ajustar cores de fundo:
```tsx
bgColor: "bg-pink-200" // Rosa claro
bgColor: "bg-blue-200" // Azul claro
bgColor: "bg-yellow-200" // Amarelo claro
bgColor: "bg-green-200" // Verde claro
bgColor: "bg-purple-200" // Roxo claro
bgColor: "bg-orange-200" // Laranja claro
bgColor: "bg-teal-200" // Verde-azulado claro
bgColor: "bg-indigo-200" // Índigo claro
bgColor: "bg-red-200" // Vermelho claro
```

### 2. Ajustar velocidade do carrossel:
```tsx
// No useEffect do carrossel automático
faceAutoInterval.current = setInterval(() => {
  setCurrentFace((prev) => (prev + 1) % 2);
}, 4000); // 👈 Mude este valor (em milissegundos)
```

### 3. Ajustar tamanho do grid:
```tsx
// Para mostrar mais rostos por página, mude o slice:
{mangaFaces.slice(0, 6).map((face) => ( // 👈 Mude o 6 para 9 para mostrar todos
```

## 📁 Estrutura de Pastas Recomendada

```
src/
├── assets/
│   ├── rostos/
│   │   ├── face1.jpg
│   │   ├── face2.jpg
│   │   ├── face3.jpg
│   │   ├── face4.jpg
│   │   ├── face5.jpg
│   │   ├── face6.jpg
│   │   ├── face7.jpg
│   │   ├── face8.jpg
│   │   └── face9.jpg
│   ├── manga-ebook-hero.jpg
│   └── manga-expression-ebook.png
```

## ✨ Funcionalidades do Carrossel

- ✅ **Autoplay**: Muda automaticamente a cada 4 segundos
- ✅ **Navegação manual**: Botões de seta e indicadores
- ✅ **Touch/Swipe**: Funciona em dispositivos móveis
- ✅ **Responsivo**: Adapta-se a diferentes tamanhos de tela
- ✅ **Hover effects**: Efeitos visuais ao passar o mouse
- ✅ **Transições suaves**: Animações fluidas entre slides

## 🎯 Dicas para as Fotos

1. **Tamanho**: Use imagens quadradas ou com proporção similar (ex: 300x300px)
2. **Qualidade**: Imagens de alta resolução (mas otimizadas para web)
3. **Estilo**: Mantenha consistência visual entre as fotos
4. **Expressões**: Variedade de expressões faciais para mostrar o que se aprende
5. **Cores**: Fotos que combinem com as cores de fundo escolhidas 