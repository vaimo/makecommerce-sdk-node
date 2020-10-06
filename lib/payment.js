"use strict";


class GatewayPayment {

  constructor(amount, reference) {
    this._amount = amount;
    this._reference = reference;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get reference() {
    return this._reference;
  }

  set locale(locale) {
    this._locale = locale;
  }

  get locale() {
    return this._locale;
  }

  set country(country) {
    this._country = country;
  }

  get country() {
    return this._country;
  }

  set returnUrl(returnUrl) {
    this._return_url = returnUrl;
  }

  set returnMethod(returnMethod) {
    this._return_method = returnMethod;
  }

  set cancelUrl(cancelUrl) {
    this._cancel_url = cancelUrl;
  }

  set cancelMethod(cancelMethod) {
    this._cancel_method = cancelMethod;
  }

  set notificationUrl(notificationUrl) {
    this._notification_url = notificationUrl;
  }

  set notificationMethod(notificationMethod) {
    this._notification_method = notificationMethod;
  }

  getUriParameters() {
    var data = this;
    return Object.keys(data).map(function(key) {
      return [key.replace(/^_/, ''), data[key]].map(encodeURIComponent).join("=");
    }).join("&");
  }
}

module.exports = GatewayPayment;