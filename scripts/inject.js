webpackJsonp([1],{20:function(e,t,n){n(21),e.exports=n(8)},21:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var u=n(0),r=o(u),i=n(2),l=o(i);n(32),n(8);var c=n(33),d=o(c),a=document.createElement("div");a.id="piggyWrapper",a.style.width="100%",a.style.height="100%",a.style.position="fixed",a.style.top=0,a.style.left=0,a.style.backgroundColor="none",a.style.pointerEvents="none",document.querySelector("body").appendChild(a),l.default.render(r.default.createElement(d.default,null),document.getElementById("piggyWrapper"))},32:function(e,t,n){"use strict";(function(e){var t=e(document),n=e("#execute-queue"),o=!0;n.click(function(e){e.preventDefault(),o=!o,t.queue("buttonQueue",function(e){n.prop("disabled",!0),e()}),t.queue("buttonQueue",function(e){var t=new Event("toggleModal");document.dispatchEvent(t),console.log("From DOM: toggleModal event triggered"),setTimeout(function(){e()},1e3)}),o||(t.queue("buttonQueue",function(e){var t=new Event("queued1");document.dispatchEvent(t),console.log("From DOM: queued1 event triggered"),setTimeout(function(){e()},1e3)}),t.queue("buttonQueue",function(e){var t=new Event("queued2");document.dispatchEvent(t),console.log("From DOM: queued2 event triggered"),setTimeout(function(){e()},1e3)})),t.queue("buttonQueue",function(e){n.prop("disabled",!1),e()}),t.dequeue("buttonQueue")}),document.addEventListener("toggleModal",function(){console.log("From DOM: Button clicked!")})}).call(t,n(7))},33:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(l),d=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={visible:!1,isFirstEventTriggered:!1,isSecondEventTriggered:!1},i=n,u(r,i)}return r(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;console.log("From React: Modal Mounted"),document.addEventListener("toggleModal",function(){var t=e.state,n=t.visible,o=t.isFirstEventTriggered,u=t.isSecondEventTriggered;n&&(o=!o,u=!u),e.setState({visible:!e.state.visible,isFirstEventTriggered:o,isSecondEventTriggered:u})}),document.addEventListener("queued1",function(){e.state.visible&&e.setState({isFirstEventTriggered:!0})}),document.addEventListener("queued2",function(){e.state.visible&&e.setState({isSecondEventTriggered:!0})})}},{key:"render",value:function(){var e=this.state,t=e.visible,n=e.isFirstEventTriggered,o=e.isSecondEventTriggered;return t?c.default.createElement("div",{id:"modal"},c.default.createElement("h3",null,"React Modal"),n?c.default.createElement("p",null,"Event 'queued1' received!"):null,o?c.default.createElement("p",null,"Event 'queued2' received!"):null):null}}]),t}(l.Component);t.default=d},8:function(e,t){}},[20]);