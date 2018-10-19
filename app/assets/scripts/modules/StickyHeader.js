import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__description");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    let mainThis = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction) {
        if (direction == "down") {
          mainThis.siteHeader.addClass("site-header--dark");
        } else {
          mainThis.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    let mainThis = this;
    this.pageSections.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction == "down") {
            let matchingLink = currentItem.getAttribute("data-link");
            mainThis.headerLinks.removeClass("current-link");
            $(matchingLink).addClass("current-link");
          }
        },
        offset: "20%"
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction == "up") {
            let matchingLink = currentItem.getAttribute("data-link");
            mainThis.headerLinks.removeClass("current-link");
            $(matchingLink).addClass("current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;