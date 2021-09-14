import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

// Data
import blogs from '../../data/blogs';
import Controls from "../controls/Controls";

const Blogs = () => {

    let { url } = useRouteMatch();

    return (
        <BlogsContainer>
            <BlogsTitle>Available Articles</BlogsTitle>
            <BlogsArticles>
                {
                    blogs.map((b, i) => <Link key={i} to={`${url}/${b.id}`}>{b.title}</Link>)
                }
            </BlogsArticles>
            <Controls />

        </BlogsContainer>
    );
}

const BlogsContainer = styled.div`

`;

const BlogsTitle = styled.h2`
    text-align: center;
`;

const BlogsArticles = styled.div`
    text-align: center;
    margin-top: 10px;
    a{
        padding: 0 20px;
    }
`;

export default Blogs;