import Layout from "../components/Layout";
import { contentfulClient } from "../services/Contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import SEO from "../components/SEO";
import BannerLanding from "../components/BannerLanding";
import React from "react";
import { registerServiceWorker } from "../services/helpers";

class Post extends React.Component {
  componentDidMount() {
    registerServiceWorker()
  }
  
  render(){
    const {post, postId} = this.props;

    return (
      <Layout>
        <SEO
          seoConfig={{
            title: post.title,
            description: post.summary,
            url: postId
          }}
        />
        <BannerLanding
          imageUrl={post.imagesUrls[0]}
          summary={post.summary}
          title={post.title}
        />
  
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <span className="image main">
                <img src={post.imagesUrls[0]} alt="" />
              </span>
              <div
                className="markdown-post"
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(post.content)
                }}
              />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

Post.getInitialProps = async request => {
  const getId = request => {
    if (request.req) {
      return request.req.params.postId;
    } else {
      return request.query.postId;
    }
  };

  const postId = getId(request);

  const id = postId.split("_")[1];

  const data = await contentfulClient.getEntry(id);

  return {
    post: data.fields,
    postId
  };
};

export default Post;
