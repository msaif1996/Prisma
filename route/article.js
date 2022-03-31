    {/* Trending Blogs */}
	 <div className="col-span-2">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Trending Blogs</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row gap-10">
                  {articlesList.slice(26, 30).map((article: ArticleType) => {
                    return <TrendingCard key={article.id} {...article} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="widget-area">
              {/* Popular */}
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Most popular</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {articlesList.slice(32, 35).map((article: ArticleType) => {
                      return <PopularCard key={article.id} {...article} />;
                    })}
                  </ul>
                </div>
              </div>

              {/* Authors */}
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Trending topics</h5>
                </div>
                <div className="post-block-list post-module-2">
                  <ul className="list-post">
                    {topicList.slice(0, 3).map((topic: TopicType) => {
                      return <AuthorCard key={topic.id} {...topic} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
		  </div>
		  
		  
		    <div className="h-auto col-span-2 ">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Trending Blogs</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row flex justify-left gap-10 ">
                  {articlesList.slice(26, 30).map((article: ArticleType) => {
                    return <TrendingCard key={article.id} {...article} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-1">
            {/* Popular */}
            <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
              <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Most popular</h5>
              </div>
              <div className="post-block-list post-module-1">
                <ul className="list-post">
                  {articlesList.slice(32, 35).map((article: ArticleType) => {
                    return <PopularCard key={article.id} {...article} />;
                  })}
                </ul>
              </div>
            </div>
            {/* Authors */}
            <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
              <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Trending topics</h5>
              </div>
              <div className="post-block-list post-module-2">
                <ul className="list-post">
                  {topicList.slice(0, 3).map((topic: TopicType) => {
                    return <AuthorCard key={topic.id} {...topic} />;
                  })}
                </ul>
              </div>
            </div>
          </div>