import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import ImagePreview from './components/ImagePreview';

app.initializers.add('block-cat/image-preview', () => {
  extend(TextEditor.prototype, 'view', function(view) {
    view.children[0].children.push(<ImagePreview content={this.value}/>);
  });
});