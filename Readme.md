# koa-session-memory

## Basic memory storage for [koa-session](https://www.npmjs.com/package/koa-session)

Install with `npm install koa-session-memory`

### Additional features

This store emits a `changed` event every time a session is changed, containing:

```javascript
{
  key,
  session,
}
```
