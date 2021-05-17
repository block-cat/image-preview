import Component from 'flarum/Component';

export default class ImagePreview extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.regExp = /(?<=\[upl-image-preview url=)([\w\d:\.&\?\/\-_]*)(?=\])/g;
        this.index = 0;
    }
    view() {
        this.images = this.attrs.content.match(this.regExp);
        const fullScreen = $('#composer > div').hasClass("fullScreen");
        
        return (
            (this.images && fullScreen) ? 
            m('.ComposerBody-imagePreview',
                m('.ImagePreview', 
                    m('.ImagePreview-currentImage', {onmouseup: finish, onmousemove: moveView}, 
                        m('img#img_view', {src: this.images[this.index], onload: init, onmousewheel: zoom, ondragstart: stop, onmousedown: start}),
                        m('.zoomButtons', 
                            m('button', {onclick: zoomIn, onmouseup: stopPropagation},
                                m('i.fas.fa-search-minus')
                            ),
                            m('button', {onclick: zoomInit, onmouseup: stopPropagation},
                                m('i.fas.fa-search')
                            ),
                            m('button', {onclick: zoomOut, onmouseup: stopPropagation},
                                m('i.fas.fa-search-plus')
                            )
                        ),
                        m('button.Left', {onclick: this.changeIndexPrev.bind(this), onmouseup: stopPropagation},
                            m('i.fas.fa-chevron-left')
                        ),
                        m('button.Right', {onclick: this.changeIndexNext.bind(this), onmouseup: stopPropagation},
                            m('i.fas.fa-chevron-right')
                        ),
                    ),
                    m('.ImagePreview-listImage',
                        this.images.map((image, index,) => {
                            return m('img.ImageListItem#PreviewItem-' + index, {src: image, onclick: this.imageSelectHandler.bind(this)})
                        }),
                    ),
                )
            ) : ''
        );
    }
    imageSelectHandler(e) {
        document.querySelector('#img_view').removeAttribute('style');
        this.index = e.path[0].id.split('-')[1];
        scale = 1;
        m.redraw();
    }
    changeIndexPrev(e) {
        document.querySelector('#img_view').removeAttribute('style');
        this.index = this.index == 0 ? this.images.length - 1 : this.index - 1;
        scale = 1;
        m.redraw();
    }
    changeIndexNext(e) {
        document.querySelector('#img_view').removeAttribute('style');
        this.index = (this.index + 1) % this.images.length;
        scale = 1;
        m.redraw();
    }
}

var scale = 1;
var target = null;
var x_prev = 0, y_prev = 0, currentX = 0, currentY = 0, width = 0, height = 0;

function init(e) {
    e.preventDefault();
    app.forum.data.attributes['block-cat-image-preview.imgWidth'] = e.currentTarget.width;
    app.forum.data.attributes['block-cat-image-preview.imgHeight'] = e.currentTarget.height;
}

function zoom(e) {
    e.preventDefault();

    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(1, scale), 3);

    let x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
    let y_target = app.forum.attribute('block-cat-image-preview.imgHeight');

    if (scale * x_target !== 0) {
        e.currentTarget.style.width = (scale * x_target) + 'px';
        e.currentTarget.style.height = (scale * y_target) + 'px';
    }

    width = scale * x_target;
    height = scale * y_target;
    let w = e.target.parentNode.offsetWidth;
    let h = e.target.parentNode.offsetHeight;

    currentX = e.currentTarget.style.left.slice(0,-2);
    currentY = e.currentTarget.style.top.slice(0,-2);

    currentX = Math.min(Math.max(w - width, currentX), 0);
    currentY = Math.min(Math.max(h - height, currentY), 0);
    e.currentTarget.style.left = currentX + 'px';
    e.currentTarget.style.top = currentY + 'px';
}

function zoomIn(e) {
    scale -= 1;
    scale = Math.min(Math.max(1, scale), 3);
  
    let x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
    let y_target = app.forum.attribute('block-cat-image-preview.imgHeight');
  
    if (scale * x_target !== 0) {
        e.currentTarget.parentNode.parentNode.children[0].style.width = (scale * x_target) + 'px';
        e.currentTarget.parentNode.parentNode.children[0].style.height = (scale * y_target) + 'px';
    }
  
    e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function zoomInit(e) {
    scale = 1;
  
    let x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
    let y_target = app.forum.attribute('block-cat-image-preview.imgHeight');
  
    if (scale * x_target !== 0) {
        e.currentTarget.parentNode.parentNode.children[0].style.width = (scale * x_target) + 'px';
        e.currentTarget.parentNode.parentNode.children[0].style.height = (scale * y_target) + 'px';
    }
  
    e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function zoomOut(e) {
    scale += 1;
    scale = Math.min(Math.max(1, scale), 3);
  
    let x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
    let y_target = app.forum.attribute('block-cat-image-preview.imgHeight');
  
    if (scale * x_target !== 0) {
        e.currentTarget.parentNode.parentNode.children[0].style.width = (scale * x_target) + 'px';
        e.currentTarget.parentNode.parentNode.children[0].style.height = (scale * y_target) + 'px';
    }
  
    e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function start(e) {
    target = e.currentTarget;
    x_prev = e.clientX - target.offsetLeft;
    y_prev = e.clientY - target.offsetTop;
    width = target.offsetWidth;
    height = target.offsetHeight;
    target.style.transition = 'none';
    target.style.transition = 'none';
}
  
function moveView(e) {
    e.preventDefault();
    if (target !== null) {
        target.style.cursor = 'grabbing';

        currentX += e.clientX - x_prev - target.offsetLeft;
        currentY += e.clientY - y_prev - target.offsetTop;

        target.style.left = currentX + 'px';
        target.style.top = currentY + 'px';
    }
}
  
function finish(e) {
    e.preventDefault();
    let w = e.currentTarget.offsetWidth;
    let h = e.currentTarget.offsetHeight;

    try {
        currentX = target.style.left.slice(0,-2);
        currentY = target.style.top.slice(0,-2);
    
        currentX = Math.min(Math.max(w - width, currentX), 0);
        currentY = Math.min(Math.max(h - height, currentY), 0);
      
        target.style.transition = 'top 100ms';
        target.style.transition = 'left 100ms';
        target.style.left = currentX + 'px';
        target.style.top = currentY + 'px';
      
        target.style.cursor = 'grab';
    } catch {}

    target = null;
    e.stopPropagation();
}
  
function stop() {
    return false;
}
  
function stopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
}