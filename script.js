function openWindow(page) {
    var newWindow = window.open('', '_blank', 'width=800,height=600');

   
    if (page === 'team') {
        newWindow.document.write('<h1>Our Team</h1>');
        newWindow.document.write('<p>Welcome to the team page! Here is our team...</p>');
    } else if (page === 'history') {
        newWindow.document.write('<h1>History</h1>');
        newWindow.document.write('<p>Welcome to the history page! Here is our history...</p>');
    }
    newWindow.document.close();
}
