(ns mysite.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append bind delegate data text]])
  (:use-macros [crate.macros :only [defpartial]]
               [fetch.macros
                :only [letrem]]))


(defn fmtih [stri stro idx]
  (if (empty? stri)
    stro
    (if (and (= (mod idx 3) 0) (not (empty? (rest stri))))
      (recur (rest stri) (cons \, (cons (first stri) stro)) (+ idx 1))
      (recur (rest stri) (cons (first stri) stro) (+ idx 1)))))

(defn fmti [intg]
  (apply str (fmtih (reverse (seq (str (js/parseInt intg)))) [] 1)))

(defn fmti$ [intg]
  (str "$" (fmti intg)))

(defn update-contributions [filter $content]
  (letrem [result (get-recipients filter)]
          (doseq [r result]
            (append $content (filer r)))))

(defn render []

  (defpartial filer [[filer amount count]]
    [:li.filer
     [:ul
      [:h2 filer]
      [:li.amount (fmti$ amount) " (" (fmti$ (/ amount count)) " per contribution)"]
      [:li.count (fmti count) " contributions"]]])
  
  (letrem [result (get-total-contrib "")]
          (text ($ :#total) (fmti$ (:total result)))
          (text ($ :#count) (fmti (:count result))))

  (update-contributions "" ($ :#filers))

  (bind ($ :#search) "change"
        (fn []
          (do
            (.empty ($ :#filers))
            (update-contributions (.val ($ :#search)) ($ :#filers)))))

  )

(js/jQuery render)