(load "preact-pil-jwt/http.l" "lib/json.l")

(de respondJson (Data)
   (let Json (in (pipe (printJson Data)) (line T))
      (ht:Out NIL
         (prinl "HTTP/1.0 200 OK^M")
         (prinl "access-control-allow-origin: *^M")
         (prinl "access-control-allow-headers: accept, content-type^M")
         (prinl "Content-Type: application/json^M")
         (prinl "Content-Length: " (+ 1 (length Json)) "^M")
         (prinl "^M")
         (prinl Json) ) ) )

(de getRequestJWT ()
   (out 2 (prinl "JWT: " *JWT))
   (out 2 (prinl "Host: " *Host))
   (out 2 (prinl "Referer: " *Referer))
   (respondJson (list (cons 'status "OK"))) )

(de go () (server 4040)) 
