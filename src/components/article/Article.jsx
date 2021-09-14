import { Link, useParams, Redirect } from "react-router-dom";
import styled from 'styled-components';

// Data
import blogs from '../../data/blogs';

const Article = () => {

    let { id } = useParams();

    const article = blogs.find(b => b.id === Number(id));

    return (
        <>
            {
                article ?
                    <ArticleContainer>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleText>{article.text}</ArticleText>
                        <BackButton>
                            <Link to='/blogs'>Back to Articles</Link>
                        </BackButton>
                    </ArticleContainer>
                    :
                    <Redirect to="/" />
            }
        </>

    );
}

const ArticleContainer = styled.div`
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgb(192, 216, 220);
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const ArticleTitle = styled.h2`
    text-align: center;
`;

const ArticleText = styled.p`
    text-align: center;
`;

const BackButton = styled.div`
    padding: 20px 10px 0 0;
    text-align: right;
`;

export default Article;