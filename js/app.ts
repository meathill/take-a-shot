/**
 * Created by 路佳 on 13-10-10.
 */

interface jQuery {
  closest(selector: string): jQuery;
  hammer(): jQuery;
  index(): number;
  on(eventType: string, handler: Function): jQuery;
  on(eventType: string, selector: string, handler: Function): jQuery;
}
declare var $: {
  (el: HTMLElement): jQuery;
  (selector: string): jQuery;
  (readyCallback: () => void): jQuery;
}

$(() => {
  var height: number = document.body.clientHeight;
  $('button').hammer().on('tap', function () {
    var offset = ($(this).closest('.full-container').index() + 1) * height;
    document.body.style.webkitTransform  = 'translate3d(0, -' + offset + 'px, 0)';
  });

  var style = document.createElement('style');
  style.innerHTML = '.full-container { height: ' + height + 'px;}';
  document.head.appendChild(style);
});