(ns mysite.views.welcome
  (:require [mysite.views.common :as common]
            [noir.content.getting-started]
            [clojure.java.jdbc :as sql])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
        [noir.fetch.remotes :only [defremote]]
        [clojure.java.jdbc :only (with-connection with-query-results transaction)]))

(defpage "/" []
  (common/layout
   [:div#content
    [:ul#filers.filers]]))

(defn- db-with-path [path]
  {:classname "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname path
   :create true})

(def db (db-with-path "db/contrib.sqlite3"))

(defremote get-total-contrib []
    (with-connection db
      (with-query-results results ["select sum(CAST(Amount as Int)) as total, count(*) as count from campaign"]
        (first results))))

(defn str-or [s s2]
  (if (empty? s) s2 s))

(defremote get-recipients []
  (with-connection db
   (with-query-results results ["select FilerName, sum(CAST(Amount as Int)) as total, count(*) as count from campaign group by FilerName order by FilerName"]
     (doall (map (fn [r] [(str-or (:filername r) "(Not Identified)") (:total r) (:count r)] ) results)))))

