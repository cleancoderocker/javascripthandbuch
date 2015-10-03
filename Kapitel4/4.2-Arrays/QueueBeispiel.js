var hotline = {
  phoneCalls: [],
  incomingPhoneCall: function (number) {
    this.phoneCalls.push(number);
  },
  handlePhoneCalls: function () {
    var currentPhoneCall;
    while (currentPhoneCall = this.phoneCalls.shift()) {
      console.log('Anrufer mit Nummer: ' + currentPhoneCall);
    }
  }
}

hotline.incomingPhoneCall(2345);
hotline.incomingPhoneCall(23456);
hotline.incomingPhoneCall(23457);
hotline.handlePhoneCalls();