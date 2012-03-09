(defproject mysite "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [jayq "0.1.0-SNAPSHOT"]
                 [crate "0.1.0-SNAPSHOT"]
                 [fetch "0.1.0-SNAPSHOT"]
                 [noir "1.3.0-alpha10"]
                 [org.clojure/java.jdbc "0.1.3"]
                 [sqlitejdbc "0.5.6"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :cljsbuild {:source-path "src"
              :compiler
              {:output-dir "resources/public/cljs/"
               :output-to "resources/public/cljs/bootstrap.js"
               :optimizations :simple
               :pretty-print true}}
    :main mysite.server)
