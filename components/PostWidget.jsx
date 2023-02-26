import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="flex-wrap flex-col mb-4 sm:flex sm:flex-nowrap sm:flex-row sm:w-full lg:flex-wrap lg:flex-col lg:items-center 2xl:flex-nowrap 2xl:items-center 2xl:flex-row 2xl:w-full"
        >
          <div className="w-18 flex-none sm:my-auto">
            <img
              src={post.featuredImage.url}
              alt={post.tile}
              height="100px"
              width="100px"
              className="align-middle mx-auto rounded-full mb-2 sm:mb-0 lg:mb-2 2xl:mb-0"
            />
          </div>
          <div className="flex-grow ml-0 text-center sm:text-left sm:ml-4 lg:ml-0 lg:text-center 2xl:ml-4 2xl:text-left">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
