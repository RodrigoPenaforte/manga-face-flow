# 🛡️ Proteções Contra Clonagem - Manga Face Flow

## O que foi implementado

### 1. **Proteção de Domínio**
- Verifica se o site está rodando em domínios autorizados
- Se detectar domínio não autorizado, redireciona automaticamente para o checkout original

### 2. **Proteção contra DevTools**
- Detecta quando alguém abre as ferramentas de desenvolvedor (F12)
- Redireciona automaticamente para o checkout original

### 3. **Proteção contra Cliques**
- Clique direito → Redireciona para checkout
- Clique do meio → Redireciona para checkout

### 4. **Proteção contra Teclas**
- F12 → Redireciona para checkout
- Ctrl+Shift+I → Redireciona para checkout
- Ctrl+U (ver código fonte) → Redireciona para checkout
- Ctrl+S (salvar página) → Redireciona para checkout

### 5. **Proteção contra Cópia**
- Seleção de texto → Bloqueada
- Ctrl+C → Redireciona para checkout
- Ctrl+X → Redireciona para checkout

### 6. **Proteção contra Arrastar**
- Arrastar imagens → Bloqueado
- Arrastar elementos → Bloqueado

### 7. **Proteção contra Iframe**
- Se alguém tentar embedar sua página em iframe → Redireciona para checkout

## Como configurar

### 1. **Atualizar domínios autorizados**
No arquivo `src/lib/protection.ts`, linha 6-11:

```typescript
const ALLOWED_DOMAINS = [
  'localhost',
  '127.0.0.1',
  'SEU-DOMINIO-REAL.com', // ← Adicione seu domínio aqui
  'SEU-DOMINIO-REAL.vercel.app',
  'SEU-DOMINIO-REAL.netlify.app',
];
```

### 2. **Atualizar URL do checkout**
No arquivo `src/lib/protection.ts`, linha 3:

```typescript
export const ORIGINAL_CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI";
```

## Como funciona

1. **Detecção automática**: O sistema verifica constantemente se o site está sendo acessado de forma legítima
2. **Redirecionamento inteligente**: Se detectar qualquer tentativa de clonagem, redireciona automaticamente para seu checkout
3. **Proteção contínua**: Verifica a cada 5 segundos se ainda está no domínio correto

## Limitações

⚠️ **Importante**: Essas proteções não são 100% infalíveis, mas dificultam muito a clonagem:

- **Usuários avançados** podem contornar algumas proteções
- **Ferramentas especializadas** podem burlar algumas verificações
- **Screenshots** ainda são possíveis

## Recomendações adicionais

### 1. **Marca d'água dinâmica**
Considere adicionar marca d'água com o nome do usuário/domínio

### 2. **Monitoramento**
- Configure alertas no Google Analytics
- Monitore tráfego de domínios suspeitos

### 3. **Backup legal**
- Registre sua marca
- Tenha termos de uso claros
- Considere proteção de direitos autorais

### 4. **Proteção de imagens**
- Use imagens com marca d'água
- Considere lazy loading com verificação de domínio

## Testando as proteções

Para testar se as proteções estão funcionando:

1. Abra o DevTools (F12) → Deve redirecionar
2. Clique direito → Deve redirecionar
3. Tente selecionar texto → Deve ser bloqueado
4. Tente arrastar imagens → Deve ser bloqueado

## Suporte

Se precisar de ajuda para configurar ou tiver dúvidas sobre as proteções, entre em contato! 