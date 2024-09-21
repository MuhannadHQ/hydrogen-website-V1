// lib/Amplitude.js
import { init, track, setUserId } from "@amplitude/analytics-browser";

class Amplitude {
  constructor() {
    this.initialized = false;
  }

  init() {
    if (!this.initialized) {
      init(process.env.AMPLITUDE_API_KEY);
      this.initialized = true;
    }
  }

  logEvent(eventName, eventProperties = {}) {
    track(eventName, eventProperties);
  }

  logCheckoutStep(step, additionalProperties = {}) {
    this.logEvent(`Checkout Step ${step}`, additionalProperties);
  }

  setUserId(userId) {
    setUserId(userId);
  }
}

export default new Amplitude();
