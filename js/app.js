function login(){
  var login_password = $("#login_password").val();
  var encrypted_container = "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";
  //var encrypted_container = global_container;
  var decrypted_container = decrypt(encrypted_container, login_password);
  console.log(decrypted_container);
  if(decrypted_container.encrypted){
    $("#login").hide();
    levels = decrypted_container.level;
    global_levels = levels;
    nextLevel(levels, 0, login_password);
  }
}

function nextLevel(levels, id, password) {
  //add new content
  var decrypted_level = decrypt(levels[id], password);
  console.log("decrypted_level", decrypted_level);
  if(decrypted_level.encrypted){
      $("#questions").html(decrypted_level.content);
  }
}

function solve(id) {
  if(id == 0){
    return login();
  }
  var password = $("#solution").val().toLowerCase();
  nextLevel(levels, id, password);
}

function decrypt(cipher, password){
  var bytes  = CryptoJS.AES.decrypt(cipher, password);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function encrypt(obj, password){
  return CryptoJS.AES.encrypt(JSON.stringify(obj), password).toString();
}
