# Gerador de QR Code

Este é um projeto simples de **React + Next.js** que gera QR Codes a partir de uma URL informada pelo usuário. A aplicação exibe o QR Code em um canvas, insere o logo do SENAI no centro e permite baixar a imagem gerada em formato PNG.

---

## 📦 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [qrcode](https://www.npmjs.com/package/qrcode)
- [lucide-react](https://github.com/lucide-icons/lucide) (ícones)
- [Material UI](https://mui.com/) (componente de botão)
- Tailwind CSS

---

## 🏁 Como rodar localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador e comece a usar!

---

## 📂 Estrutura do projeto

```
/
├─ public/
│  └─ logo-senai.png       # Logo que é sobreposto ao QR Code
├─ src/
│  └─ app/
│     └─ page.tsx          # Página única do gerador
├─ styles/
│  └─ globals.css          # Configuração do Tailwind
├─ package.json
└─ README.md
```

---

## ⚙️ Funcionalidades

- **Input de URL**: o usuário cola uma URL qualquer.
- **Geração de QR Code**: o canvas desenha o código e sobrepõe o logo.
- **Animação de clique**: efeito "ripple" no botão de gerar.
- **Download**: baixa o QR Code final em PNG.
- **Limpar**: reseta o estado e o canvas.

---

## 🤝 Como contribuir

1. Fork este repositório
2. Crie uma branch com sua feature:
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```
3. Faça commit das suas alterações
4. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Feito com ❤️ por Prof. Arthur Giangiarulo. Contribuições são muito bem-vindas!

