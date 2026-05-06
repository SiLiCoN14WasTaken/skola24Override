/*(text) => text.replace("</body>", `<script>
document.addEventListener('load', function() {
  if (sessionStorage.getItem('dropdownSet')) return;
  var dropdown = document.getElementById('DomainDropDown');
  if (dropdown) {
    sessionStorage.setItem('dropdownSet', '1');
    dropdown.value = 1098;
    dropdown.dispatchEvent(new Event('change'));
  }
});
</script></body>`)*/
/*(text) => text.replace("</body>", `<script>
if (!sessionStorage.getItem('dropdownSet') && window.location.href === 'https://skola24.se/Applications/Authentication/login.aspx?host=skola24.se') {
  sessionStorage.setItem('dropdownSet', '1');
  var dropdown = document.getElementById('DomainDropDown');
  dropdown.value = 1098;
  dropdown.dispatchEvent(new Event('change'));
}
</script></body>`)*/
(text) => text.replace("</body>", `<script>
window.location.href = 'https://service-sso1.novasoftware.se/saml-2.0/authenticate?customer=http%3a%2f%2ffs.lund.se%2fadfs%2fservices%2ftrust&targetsystem=Skola24';
</script></body>`)
