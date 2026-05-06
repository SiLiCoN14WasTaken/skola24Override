(text) => text.replace("</body>", `<script>
document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('dropdownSet')) return;
  var dropdown = document.getElementById('DomainDropDown');
  if (dropdown) {
    sessionStorage.setItem('dropdownSet', '1');
    dropdown.value = 1098;
    dropdown.dispatchEvent(new Event('change'));
  }
});
</script></body>`)
