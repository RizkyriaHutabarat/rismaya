import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url = "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/healhero";
  let tokenkey = "token";
  let tokenvalue = "3e3b57339e2facffcc101ebcbce0b30679da214e7612d621c4e1ea2b4bc657e9";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  // setInner("pesan", result.message);
  if (result.message == "Selamat Datang") {
    setCookieWithExpireHour("token", result.token, 2);
    alert("Login Successfully" + result.message);
    window.location.href = "dashboard.html";
  } else {
    alert("Login Failed" + "Username or Password Wrong");
    console.log(result.message);
  }

  // setCookieWithExpireHour("token", result.token, 2);
  // alert("Selamat Datang")
  // window.location.href = "dashboard.html";
}
