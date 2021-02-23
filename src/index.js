export default class Notilert {
  // ---- static count per corner ----

    static n = {
      'top-left': 0,
      'top-right': 0,
      'bottom-left': 0,
      'bottom-right': 0,
    }

    constructor(opt = {}) {
      // ---- initializing parameters ----

      this.content = opt.content ?? 'test';
      this.position = opt.position ?? 'bottom-right';
      this.color = opt.color ?? '#0a0a0a';
      this.bgColor = opt.bgColor ?? '#e3e3e3';
      this.width = opt.width ?? '250px';
      this.height = opt.height ?? null;
      this.size = opt.size ?? '1rem';
      this.font = opt.font ?? 'system-ui';
      this.timeout = opt.timeout * 1000 ?? null;
      this.closeable = opt.closeable ?? true;
      this.type = opt.type ?? null;
      this.class = opt.class ?? null;
      this.link = opt.link ?? null;

      Notilert.n[this.position] += 1;
      this.index = Notilert.n[this.position];
      this.id = `_${this.position}_${new Date().getTime()}_${this.index}`;
      document.body.style.overflowX = 'hidden';
      // ---- setting types ----

      if (this.type) this.color = '#fff';
      switch (this.type) {
        case 'success':
          this.bgColor = '#68CD86';
          break;
        case 'alert':
          this.bgColor = '#FDB64A';
          break;
        case 'danger':
          this.bgColor = '#E54D42';
          break;
        case 'default':
          this.bgColor = '#ededed';
          this.color = '#000';
          break;
        default:
          break;
      }
      // ---- creating the html element ----
      window[`el${this.id}`] = document.createElement('div');
      window[`elIdAtt${this.id}`] = document.createAttribute('id');
      window[`elIdAtt${this.id}`].value = `Notilert${this.id}`;
      window[`el${this.id}`].setAttributeNode(window[`elIdAtt${this.id}`]);
      // -- testing for html-content and parsing it to cnt element
      if (/<(?=.*? .*?\/ ?>|br|h?|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(this.content)) {
        window[`el${this.id}`].innerHTML = this.content;
        if (window[`el${this.id}`].children.length > 1) {
          window[`el${this.id}`].innerHTML = '';
          window[`cnt${this.id}`] = document.createElement('div');
          window[`cnt${this.id}`].innerHTML = this.content;
          window[`el${this.id}`].appendChild(window[`cnt${this.id}`]);
        }
      } else {
        window[`cnt${this.id}`] = document.createElement('div');
        window[`cnt${this.id}`].innerText = this.content;
        window[`el${this.id}`].appendChild(window[`cnt${this.id}`]);
      }
      window[`el${this.id}`].children[0].id = `cnt${this.id}`;
      if (this.closeable) {
        window[`cl${this.id}`] = document.createElement('div');
        window[`cl${this.id}`].innerHTML = ' &#10006; ';
        window[`clStyleAtt${this.id}`] = document.createAttribute('style');
        window[`clStyleAtt${this.id}`].value = `font-weight:500;cursor:pointer;font-size : ${this.size} ; padding : 0.2rem; flex-shrink : 0; 
                                                width:calc(${this.size}*1.5);height:calc(${this.size}*1.5);margin:0 1rem 0 0 ;display :flex; justify-content:center; align-item:center;align-self:start;
                                                border-radius:100% ; background-color : ${this.color} ;font-family : ${this.font} ,sans-serif ; color : ${this.bgColor}`;
        window[`clIdAtt${this.id}`] = document.createAttribute('id');
        window[`clIdAtt${this.id}`].value = `close${this.id}`;
        window[`cl${this.id}`].setAttributeNode(window[`clIdAtt${this.id}`]);
        window[`cl${this.id}`].setAttributeNode(window[`clStyleAtt${this.id}`]);

        window[`el${this.id}`].appendChild(window[`cl${this.id}`]);
      }

      document.body.appendChild(window[`el${this.id}`]);

      // ---- grabbing the notif element ----

      window[`notif${this.id}`] = document.getElementById(`Notilert${this.id}`);
      window[`close${this.id}`] = document.getElementById(`close${this.id}`);
      window[`notifStyleAtt${this.id}`] = document.createAttribute('style');
      window[`close${this.id}`].style.opacity = '0.5';

      window[`notifStyleAtt${this.id}`].value = `padding : 1rem ; display: flex ; max-width: 40%;
                                                justify-content : space-between ; align-items : center ; font-size : ${this.size} ;
                                                color : ${this.color} ; border-radius : 5px ; font-family : ${this.font} ,sans-serif ;
                                                box-shadow : 1px 1px 3px 1px ${this.bgColor} ;
                                                background-color : ${this.bgColor} ; width : ${this.width} ; 
                                                height : ${this.height} ; position : absolute ; z-index : 9999999999 ; opacity : 0.8`;

      window[`notif${this.id}`].setAttributeNode(window[`notifStyleAtt${this.id}`]);

      // ---- positioning ----
      if (this.position.includes('bottom')) {
        (window[`notif${this.id}`].style.bottom = `calc( 5% + calc(10px + ${this.height ?? `${window[`notif${this.id}`].offsetHeight}px`}) * ${this.index - 1}) `);
      } else {
        (window[`notif${this.id}`].style.top = `calc( 2% + calc(10px + ${this.height ?? `${window[`notif${this.id}`].offsetHeight}px`}) * ${this.index - 1}) `);
      }

      if (this.position.includes('right')) {
        window[`notif${this.id}`].style.right = '2%';
        window[`notif${this.id}`].style.flexDirection = 'row-reverse';
        window[`notif${this.id}`].style.transform = 'translateX(150%)';
      } else {
        window[`notif${this.id}`].style.left = '2%';
        window[`notif${this.id}`].style.transform = 'translateX(-150%)';
      }

      //  ---- showing ----
      setTimeout(() => {
        this.show();
      }, 500);
      // closing
      if (this.timeout) {
        // on this.timeout
        setTimeout(() => {
          this.hide();
        }, this.timeout + 500);
        setTimeout(() => {
          this.close();
        }, this.timeout + 1000);
      } else if (this.closeable) {
        // manually
        window[`close${this.id}`].addEventListener('click', () => {
          this.hide();
          setTimeout(() => {
            this.close();
          }, 500);
        });
      }
      // ---- click event ----
      if (this.link) {
        window[`notif${this.id}`].style.cursor = 'pointer';
        window[`notif${this.id}`].addEventListener('click', (e) => {
          if (e.target !== window[`cl${this.id}`]) {
            window[`notif${this.id}`].style.opacity = '0.8';
            if (Array.isArray(this.link)) {
              const l = this.link[0];
              if (this.link[1]) window.open(l, '_blank');
              else window.location.href = l;
            } else {
              window.location.href = this.link;
            }
            this.close();
          }
        });
      }

      window[`notif${this.id}`].addEventListener('mouseenter', () => {
        window[`notif${this.id}`].style.opacity = '1';
      });
      window[`notif${this.id}`].addEventListener('mouseleave', () => {
        window[`notif${this.id}`].style.opacity = '0.7';
      });
      window[`close${this.id}`].addEventListener('mouseenter', () => {
        window[`close${this.id}`].style.opacity = '1';
      });
      window[`close${this.id}`].addEventListener('mouseleave', () => {
        window[`close${this.id}`].style.opacity = '0.7';
      });
    }

    hide() {
      window[`notif${this.id}`].style.transform = `translateX(${this.position.includes('left') ? '-' : ''}150%)`;
      window[`notif${this.id}`].style.opacity = '0.2';
      window[`notif${this.id}`].style.transition = 'all 0.5s ease-in';
    }

    show() {
      window[`notif${this.id}`].style.transform = 'translateX(0)';
      window[`notif${this.id}`].style.opacity = '0.8';
      window[`notif${this.id}`].style.transition = 'all 0.3s ease-in';
    }

    close() {
      document.body.querySelectorAll(`[id^='Notilert_${this.position}_']`).forEach((e) => {
        const id = parseInt(e.id.split('_')[3], 10);
        if (id > this.index) {
          if (this.position.includes('top')) {
            e.style.top = `calc(${e.style.top} - ${e.offsetHeight + 10}px )`;
          } else {
            e.style.bottom = `calc(${e.style.bottom} - ${e.offsetHeight + 10}px )`;
          }
        }
      });
      Notilert.n[this.position] -= 1;
      window[`notif${this.id}`].parentNode.removeChild(window[`notif${this.id}`]);
      document.body.style.overflowX = 'scroll';
    }

    update(opt = {}) {
      this.content = opt.content ?? this.content;
      this.position = opt.position ?? this.position;
      this.color = opt.color ?? this.color;
      this.bgColor = opt.bgColor ?? this.bgColor;
      this.width = opt.width ?? this.width;
      this.height = opt.height ?? this.height;
      this.size = opt.size ?? this.size;
      this.font = opt.font ?? this.font;
      this.timeout = opt.timeout ?? this.timeout;
    }
}
