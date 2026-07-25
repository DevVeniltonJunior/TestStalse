# TestStalse

## Tecnologias utilizadas

### Backend
- Python
- Flask
- SQLite
- Pandas

### Frontend
- Next.js
- React
- TypeScript

### Automação
- n8n

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- Python 3.x
- Node.js e npm
- n8n

## Configuração do Backend

Antes de executar o backend, é necessário criar e configurar o ambiente virtual Python dentro da pasta `backend`.

Entre na pasta do backend:

```bash
cd backend
````

Crie o ambiente virtual:

```bash
cd backend && python3 -m venv venv && cd..
```

Ative o ambiente virtual:

### MacOS / Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Instale as dependências:

```bash
cd backend && pip install -r requirements.txt && cd..
```
Adicione esta observação no README:

## Configuração do Frontend

Antes de executar o frontend, crie um arquivo `.env` dentro da pasta `frontend` informando a URL do backend:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:<port>
````

Substitua `<port>` pela porta em que o backend Flask estiver executando.

## Executando o projeto

### Backend

Com o ambiente virtual ativado:

```bash
cd backend && python3 -m run
```

O servidor Flask será iniciado e ficará disponível para receber requisições da aplicação.

### Frontend

Em outro terminal:

```bash
cd frontend && npm run dev
```

O frontend Next.js será iniciado em modo desenvolvimento.
