import { useContext, useRef } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../lib/constants';
import { BlogContext } from '../lib/contexts';

const Editor = () => {
    const {blog, setBlog} = useContext(BlogContext);
    const editorInstance = useRef(null);

    const handleChange = async () => {
        const savedData = await  editorInstance.current.save();
        setBlog({...blog, data:savedData})
    }
   
    return (
        <EditorJs 
            data={blog.data} 
            tools={EDITOR_JS_TOOLS}
            instanceRef={instance => editorInstance.current = instance}
            onChange={handleChange}
        />
    )
}

export default Editor
