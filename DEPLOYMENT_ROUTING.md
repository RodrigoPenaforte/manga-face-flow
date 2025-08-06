# Solução para Problemas de Roteamento em Produção

## Problema
Quando você acessa `https://artnexoficial.com.br/obrigado` diretamente, aparece "This Page Does Not Exist".

## Causa
O servidor não sabe como lidar com rotas do React Router. Ele tenta encontrar um arquivo físico `/obrigado` no servidor, mas não existe.

## Soluções

### 1. Arquivo .htaccess (Apache)
Se você usa Apache, o arquivo `.htaccess` já foi criado na pasta `public/`. Ele redireciona todas as rotas para `index.html`.

### 2. Arquivo _redirects (Netlify)
Se você usa Netlify, o arquivo `_redirects` já foi criado na pasta `public/`.

### 3. Arquivo vercel.json (Vercel)
Se você usa Vercel, o arquivo `vercel.json` já foi criado na raiz.

## Passos para Resolver

### Para Apache (mais comum):
1. **Faça o build do projeto:**
   ```bash
   npm run build
   ```

2. **Faça upload dos arquivos da pasta `dist/` para seu servidor**

3. **Certifique-se que o arquivo `.htaccess` está na raiz do seu site**

4. **Teste acessando:**
   ```
   https://artnexoficial.com.br/obrigado
   ```

### Para outros servidores:

#### Netlify:
- O arquivo `_redirects` já está configurado
- Faça deploy normalmente

#### Vercel:
- O arquivo `vercel.json` já está configurado
- Faça deploy normalmente

#### Nginx:
Crie um arquivo de configuração:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Verificação

Após fazer o deploy, teste:

1. **Página inicial:** `https://artnexoficial.com.br/`
2. **Página de agradecimento:** `https://artnexoficial.com.br/obrigado`
3. **Com parâmetros:** `https://artnexoficial.com.br/obrigado?email=teste@exemplo.com`

## Se ainda não funcionar:

1. **Verifique se o .htaccess está sendo lido:**
   - Adicione um comentário no .htaccess e veja se aparece erro

2. **Teste com um arquivo de teste:**
   - Crie um arquivo `teste.html` na raiz
   - Acesse `https://artnexoficial.com.br/teste.html`
   - Se funcionar, o problema é só com as rotas

3. **Contate o suporte do seu hosting:**
   - Pergunte se eles suportam arquivos .htaccess
   - Peça para habilitar mod_rewrite

## Comandos úteis:

```bash
# Build para produção
npm run build

# Teste local da build
npm run preview
```

## Estrutura final no servidor:
```
public_html/
├── index.html
├── .htaccess
├── _redirects
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── outros arquivos...
```
