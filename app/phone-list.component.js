angular.
module('phonecatApp').
component('phoneList', {
  templateUrl: "phone-list.component.html",
  styleUrls: ["/app/"],
  controller: function PhoneListController() {
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
});