document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('transferStaffForm');
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const staffNumber = document.getElementById('staffNumber').value;
        const department = document.getElementById('department').value;
        const token = localStorage.getItem('token');

        const data = {
            staffNumber,
            department
        };

        try {
            const response = await fetch('/staff/transferStaff', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Staff transfer successful!');
            } else {
                const error = await response.json();
                alert(error.message || 'Staff transfer failed.');
            }
        } catch (err) {
            alert('Network error: ' + err.message);
        }
    });
});