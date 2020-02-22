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

### Coffee contributions accepted ;)

As you may know developers fuel is coffee.

Now that Github enabled **BAT Rewards**, if you are using [Brave Browser](https://brave.com/kal004) and feel that I deserve some coffee you can send me a tip or set a monthly contribution.

If you are still not using [Brave Browser](https://brave.com/kal004), you can download it using [this link]() and I will get some BAT to buy more coffee ;)

[Brave Browser](https://brave.com/kal004) is a superfast browser based in Chrome with integrated ad blocking and anti-tracking features. [Give it a try](https://brave.com/kal004)!
