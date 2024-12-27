document.querySelectorAll('.donate-btn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('donationModal').style.display = 'block';
    });
  });

  document.getElementById('donationForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('donationModal').style.display = 'none';
    document.getElementById('notification').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('notification').classList.add('hidden');
    }, 3000);
  };