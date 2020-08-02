function CorsRequest(requestData) {
  let { path, method, data, success, error, always } = requestData;

  var serialize = function (obj) {
    var queryParts = [];
    Object.keys(obj).forEach(function (key) {
      if (Array.isArray(obj[key])) {
        for (var i = 0; i < obj[key].length; i++) {
          queryParts.push(key + "=" + encodeURIComponent(obj[key][i]));
        }
      } else {
        queryParts.push(key + "=" + encodeURIComponent(obj[key]));
      }
    });
    return queryParts.join("&");
  };

  if (method === "GET" || method === "DELETE") {
    path += "?" + serialize(data);
    data = undefined;
  } else {
    data = JSON.stringify(data);
  }

  let headers = { "Content-Type": "application/json" };

  fetch(path, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: headers,
    redirect: "follow",
    referrer: "no-referrer",
    body: data,
  })
    .then(function (response) {
      if (response.status === 200) {
        if (typeof success === "function") {
          response
            .json()
            .then(function (data) {
              success(data);
              if (typeof always === "function") {
                always();
              }
            })
            .catch(function () {
              if (typeof error === "function") {
                error();
              }
            });
        } else {
          if (typeof always === "function") {
            always();
          }
        }
      } else {
        if (typeof error === "function") {
          error();
        }
        if (typeof always === "function") {
          always();
        }
      }
    })
    .catch(function () {
      if (typeof error === "function") {
        error();
      }
      if (typeof always === "function") {
        always();
      }
    });
}

export { CorsRequest };
