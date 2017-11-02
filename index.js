const debug = require('debug')('koa-session-memory');
const { EventEmitter } = require('events');

module.exports = class MemoryStore extends EventEmitter {
  constructor() {
    super();
    this.sessions = {};
    debug('::constructor', this)
  }
  get(key, maxAge, { rolling } = {}) {
    debug(`::get ${key}, ${maxAge}, ${rolling}`);
    return this.sessions[key];
  }
  set(key, session, maxAge, { rolling, changed } = {}) {
    debug(`::set ${key},`, session, `${maxAge}, ${rolling}, ${changed}`);
    if (changed) {
      this.sessions[key] = session;
      this.emit('changed', {
        key,
        session,
      });
    }
  }
  destroy(key) {
    debug(`::destroy ${key}`);
    delete this.sessions[key];
  }
}