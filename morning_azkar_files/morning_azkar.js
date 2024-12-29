function download(param) {
  alert('جارٍ التحميل...')
}

function copy(param) {
  var copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);  // For mobile devices

    // نسخ النص إلى الحافظة
    document.execCommand("copy");

    // إشعار للمستخدم
    alert("تم نسخ النص: " + copyText.value);
}