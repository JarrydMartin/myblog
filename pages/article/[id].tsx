import React from 'react'
import { useArticle } from '../../lib/useArticles';
import { Article } from '../../models/Article';

export async function getServerSideProps(context) {
    const{id} = context.params; 
    
    console.log(id);

  return {
    props: {id}, // will be passed to the page component as props
  }
}

const id = ({id}) => {
    const {article} = useArticle(id);
    return (
        <pre>
          {JSON.stringify(article, null, 2)}
        </pre>
    )
}

export default id
