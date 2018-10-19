import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = elements;
    this.offset = offset;
    this.hideAtPageLoad();
    this.createWaypoints();
  }
  hideAtPageLoad() {
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoints() {
    let mainThis = this;
    this.itemsToReveal.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--visible");
        },
        offset: mainThis.offset
      });
    });
  }
}

export default RevealOnScroll;