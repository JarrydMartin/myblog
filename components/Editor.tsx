import { useContext } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../lib/constants';
import { BlogContext } from '../lib/contexts';

const Editor = () => {
    const {blog, setBlog} = useContext(BlogContext);
   
    return (
        <EditorJs data={blog.data} tools={EDITOR_JS_TOOLS}/>
    )
}

export default Editor
