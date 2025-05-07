document.getElementById('voteForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const boyVote = document.getElementById('boyVote').value;
  const girlVote = document.getElementById('girlVote').value;

  if (!boyVote || !girlVote) {
    alert('Please select one boy and one girl candidate.');
    return;
  }

  try {
    const response = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, boyVote, girlVote })
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || 'Something went wrong.');
      return;
    }

    alert(result.message);
    document.getElementById('voteForm').reset();
  } catch (err) {
    console.error('Vote error:', err);
    alert('Something went wrong while submitting your vote.');
  }
});
