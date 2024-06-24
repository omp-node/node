import EventEmitter from "events";

/**
 * @var eventEmitter
 * @type EventEmitter
 */
const eventEmiiter = __internal_omp.eventEmitter;

function addListener(name, callback) {
  if (callback && name.length) {
    eventEmiiter.addListener(name, callback);
  }
}

function removeListener(name, callback) {
  if (callback && name.length) {
    eventEmiiter.removeListener(name, callback);
  }
}

function removeAllListeners(name, callback) {
  if (callback && name.length) {
    eventEmiiter.removeAllListeners(name);
  }
}

omp.on = addListener;
omp.addListener = addListener;
omp.removeListener = removeListener;
omp.removeAllListeners = removeAllListeners;
