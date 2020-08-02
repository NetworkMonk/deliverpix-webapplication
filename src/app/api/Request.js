function Request(requestData) {
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
    headers: headers,
    redirect: "follow",
    referrer: "no-referrer",
    body: data,
  })
    .then(function (response) {
      // We should always get some kind of json response, return this and the code to the success callback
      response.json().then(function (data) {
        if (typeof success === "function") {
          success(response.status, data);
        }
        if (typeof always === "function") {
          always(response.status, data);
        }
      });
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

export { Request };
