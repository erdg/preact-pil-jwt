(load "http.l" "json.l")

(de respondJson (Lst)
   (let Json (json~encode Lst)
      (http1 "application/json" 0)
      (prinl "Access-Control-Allow-Origin: *^M")
      (prinl "Content-Length: " (size Json) "^M^J^M")
      (prin Json) ) )

(de getRequestJWT ()
   (out 2 (prinl "JWT: " *JWT))
   (out 2 (prinl "Host: " *Host))
   (out 2 (prinl "Referer: " *Referer))
   (respondJson (list (cons 'status "OK"))) )

(de go () (server 4040)) 
