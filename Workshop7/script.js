function loadAndParseXML() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "famous-quotes.xml", true);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            const xml = xmlhttp.responseXML;

            if (!xml) {
                alert("XML-tiedoston parsiminen epäonnistui!");
                return;
            }

            const quotes = xml.getElementsByTagName("quote");
            let tableHTML = `
                <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 10px; width: 100%;">
                    <tr style="background: #f0f0f0;">
                        <th>Quote</th>
                        <th>Author</th>
                    </tr>
            `;

            for (let i = 0; i < quotes.length; i++) {
                const text = quotes[i].getElementsByTagName("text")[0]?.textContent || "N/A";
                const author = quotes[i].getElementsByTagName("author")[0]?.textContent || "Unknown";

                tableHTML += `
                    <tr>
                        <td>${text}</td>
                        <td>${author}</td>
                    </tr>
                `;
            }

            tableHTML += `</table>`;
            document.getElementById("table").innerHTML = tableHTML;

        } else if (xmlhttp.readyState === 4) {
            document.getElementById("table").innerText = "XML lataaminen epäonnistui!";
        }
    };

    xmlhttp.send();
}
