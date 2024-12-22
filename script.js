document.addEventListener('DOMContentLoaded', function() {
    // Summary Data
    const summaryData = {
        totalShows: 2676,
        totalMovies: 6131,
        mostCommonRating: 'TV-MA'
    };

    const longestRunningTVShows = [
        "Grey's Anatomy: 17 Seasons",
        "Supernatural: 15 Seasons",
        "NCIS: 15 Seasons",
        "Heartland: 13 Seasons",
        "COMEDIANS of the world: 13 Seasons"
    ];

    // Populate summary statistics
    const summaryStats = document.getElementById('summary-stats');
    summaryStats.innerHTML = `
        <div>Total Shows: ${summaryData.totalShows}</div>
        <div>Total Movies: ${summaryData.totalMovies}</div>
        <div>Most Common Rating: ${summaryData.mostCommonRating}</div>
    `;

    // Populate top content list
    const topContentList = document.getElementById('top-content-list');
    longestRunningTVShows.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        topContentList.appendChild(li);
    });

    // Embed Power BI dashboard
    function embedPowerBIDashboard() {
        const container = document.getElementById('power-bi-container');
        container.innerHTML = `<iframe title="Netflix Dashboard" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZjZiMmQ1NDItYmFhZC00ODcyLWFkNWEtOGM2NWM2OThkMDhjIiwidCI6ImY2YjZkZDViLWYwMmYtNDQxYS05OWEwLTE2MmFjNTA2MGJkMiIsImMiOjZ9" frameborder="0" allowFullScreen="true"></iframe>`;
    }

    embedPowerBIDashboard();
});
