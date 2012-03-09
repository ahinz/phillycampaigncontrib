(ns mysite.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "mysite"]
               (include-css "/css/reset.css")
               (include-css "/css/base.css")
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
               (include-js "/cljs/bootstrap.js")]
              [:body
               [:div#top-bar
                [:div#about.tab "About"]
                [:div#more.tab "More"]
                [:div#source.tab "Source"]
                [:div.clear]]
               [:div#header
                [:div.content
                 [:div.left
                  [:h1 "Campaign Funding"]
                  [:h2 "Who's really paying your Philadelphia Politicians?"]]
                 [:div.right
                  [:input { :type "text" :placeholder "Search Contributors and Politicians"}]
                  ]]]
               [:div#subheader
                [:div.content
                 "In 2011 " [:span#count.number ""] " organizations gave over " [:span#total.number ""] " to our local politicans"]]
               [:div#wrapper
                content]]))
