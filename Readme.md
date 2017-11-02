# koa-session-memory

## Basic memory storage for [koa-session](https://www.npmjs.com/package/koa-session)

### Installation

Install with `npm install koa-session-memory`

### Additional features

This store emits a `changed` event every time a session is changed, containing:

```javascript
{
  key,
  session,
}
```

### Usage

```javascript
const Koa = require('koa');
const MemoryStore = require('koa-session-memory');
const session = require('koa-session');

const app = new Koa();
const store = new MemoryStore();

app.keys = [ 'put your session secret here' ];
app.use(session({
  store,
  key: 'koa:sess',
  maxAge: 86400000,
}), app);
```
