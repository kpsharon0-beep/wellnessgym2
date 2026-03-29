function bookNow(){
  let message = "I am interested to come to your gym";
  let phone = "918129638606";
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
