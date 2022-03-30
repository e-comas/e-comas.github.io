module Jekyll
    class FutureList < Page
      def initialize(site, base, dir, posts)
        @site = site
        @base = base
        @dir  = dir
        @name = 'future.html'
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'future_list.html')
        self.data['posts'] = posts
      end
    end
    class FutureListGenerator < Generator
      safe true
      def generate(site)
        if site.layouts.key? 'topic_list'
          config = site.config
          config["future"] = true
          newsite = Jekyll::Site.new(site.config)
          newsite.read
          posts=Hash.new;
          newsite.posts.docs.map do |entry|
            if entry.date > Time.now
              posts[entry["date"]] = entry["title"]
            end
          end
          dir = 'snippets'
          write_future_list(site, dir, posts)
        end
      end
      def write_future_list(site, dir, topics)
        index = FutureList.new(site, site.source, dir, topics)
        index.render(site.layouts, site.site_payload)
        index.write(site.dest)
        site.pages << index
      end
    end
  end