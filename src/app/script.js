// Define algumas variáveis para armazenar informações temporárias
var t = "lp_ref" // Nome da variável para armazenar uma referência
var n = "cpid" // Nome da variável para armazenar um ID de processo
var e = "lpurl" // Nome da variável para armazenar uma URL de página de destino
var r = "https://ww.viriltonic24.com" // URL de redirecionamento
var c = "(?<domain>http(?:s?)://[^/])".concat("/cf/click") // Padrão para encontrar links de redirecionamento
var a = "(?:(?:/(?<cta>[1-9][0-9])/?)|(?:/))?" // Padrão para capturar números após a barra em links
var i = "^".concat(c).concat(a).concat("(?:$|(\\?.))") // Expressão regular para encontrar links de redirecionamento
var o = 'javascript:window.clickflare.l="(?<original_link>'
  .concat(c)
  .concat(a, '("|(\\?[^"]"))).*') // Padrão para encontrar o link original em um link de redirecionamento

// Define funções para substituir links de redirecionamento
var s = function () {
  return new RegExp(i, "")
}
var u = function () {
  return new RegExp(o, "")
}

// Função para substituir um link de redirecionamento por um novo link
function l(link) {
  var replacedLink = link.replace(s(), function (match) {
    var domain = match.groups.domain // Captura o domínio do link de redirecionamento
    return match.replace(domain, r) // Substitui o domínio pelo URL de redirecionamento
  })
  return 'javascript:window.clickflare.l="'.concat(replacedLink, '"; void 0;')
}

// Função para substituir links na página atual
function f(event, callback) {
  if (
    (callback && event && callback.apply(document, [event]),
    /loaded|interactive|complete/.test(document.readyState))
  ) {
    for (var i = 0; i < document.links.length; i++) {
      if (s().test(document.links[i].href)) {
        var link = document.links[i]
        if (!window.clickflare.links_replaced.has(link)) {
          link.href = l(link.href) // Substitui o link pelo novo link
          window.clickflare.links_replaced.add(link)
        }
      }
    }
  }
}

// Adiciona um ouvinte de evento para quando a página está carregada
document.onreadystatechange = function (event) {
  f(event, document.onreadystatechange)
}

// Define um temporizador para substituir links após um intervalo de tempo
setTimeout(function () {
  f(null, document.onreadystatechange)
}, 0)

// Código para carregar um script externo e realizar operações adicionais
(function (url, cpid) {
  // Cria uma nova URL com base na URL do redirecionamento
  var newURL = (function (url, cpid) {
    var newUrl = new URL("".concat(r).concat(url))
    var queryString = "{"
    queryString += queryString
    var newQueryString = queryString + queryString
    if (!url.startsWith(newQueryString)) {
      newUrl.searchParams.set(n, cpid) // Adiciona o ID de processo à consulta da URL
    }
    newUrl.searchParams.append(t, document.referrer) // Adiciona a referência à consulta da URL
    newUrl.searchParams.append(e, location.href) // Adiciona a URL de destino à consulta da URL
    newUrl.searchParams.append("lpt", document.title) // Adiciona o título da página à consulta da URL
    newUrl.searchParams.append("t", new Date().getTime().toString()) // Adiciona a hora atual à consulta da URL
    return newUrl.toString() // Retorna a nova URL como uma string
  })(url, cpid)

  // Cria um novo elemento de script e o adiciona à página
  var script = document.createElement("script")
  var firstScript = document.scripts[0]
  script.async = 1
  script.src = newURL
  script.onerror = function () {
    // Se houver um erro ao carregar o script, restaura os links originais
    function restoreOriginalLinks() {
      for (var i = 0; i < document.links.length; i++) {
        var link = document.links[i]
        if (u().test(link.href)) {
          setTimeout(function () {
            if (link) {
              // Restaura o link original substituindo o link modificado pelo original
              link.setAttribute(
                "href",
                (function (linkHref) {
                  var match = linkHref.match(u())
                  if (match) {
                    var originalLink = (match.groups || {}).original_link
                    return originalLink ? originalLink.slice(0, -1) : linkHref
                  }
                  return linkHref
                })(link.href)
              )
            }
          })
        }
      }
    }
    restoreOriginalLinks()
  }
  if (!(typeof firstScript === "undefined" || firstScript === null)) {
    firstScript.parentNode.insertBefore(script, firstScript) // Insere o novo script antes do primeiro script existente na página
  }
})(
  "/cf/tags/".concat(
    new URL(window.location.href).searchParams.get("cftmid") ||
      "{{_CONTAINER_ID_}}"
  ),
  new URL(window.location.href).searchParams.get(n) ||
    "6643f2e3dd7a39001247fd39"
)
