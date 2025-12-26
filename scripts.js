document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: '2017 - 2025',
        title: 'IT Manager, NKY Arhictects & Engineers, Ankara',
        description: 'IT Managament, Information Security Management (ISO 27001, GDPR, NATO FSC), IT Service Management, Backup & Recovery Systems, Google Workspace Management, Linux System Administration, Project Management, Agile Project Management, Windows Server System Administration, VMware Virtualization'
    },
    {
        date: '2012 - 2017',
        title: 'DBA & Application Server Admin, Naval Forces, Ankara',
        description: 'Database (Oracle, PostgreSQL, MS SQL) Admin, Application Server (Oracle Weblogic, IIS, Glassfish) Admin, Software Development (.NET, Java, SQL, Oracle Forms/Reports)'
    },
    {
        date: '2014 - 2015',
        title: 'IT Help Desk Coordinator, NATO, Kabul',
        description: 'Afghan Mission Network Operation Center Help Desk Coordinator (ITIL Framework)'
    },
    {
        date: '2008 - 2012',
        title: 'IT System & Network & Security Administrator, Naval Forces, Yalova',
        description: 'MS Active Directory, MS Exchange Mail Server, File Server, SUN Storage, SUN Backup System, Terminal Server, Network Systems Engineering, CheckPoint Firewall, Information Systems (Include Network System) Security Audit'
    },
    {
        date: '2001 - 2008',
        title: 'IT System & Security Administrator, Naval Forces, Kocaeli',
        description: '5000 Users MS Active Directory, MS Exchange Mail Server, File Server, IBM Storage, IBM Backup System, Terminal Server, CheckPoint Firewall, E-Safe Gateway, Etrust IDS (Intrusion Detection System) Administration and Configuration, Information Systems (Include Network System) Security Audit'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'block'; // Initially show the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });

    // Tüm bölümleri açılır/kapanır yap (Timeline içindekiler hariç)
    const sectionHeaders = document.querySelectorAll('h1, h2, h3');
    sectionHeaders.forEach(header => {
        if (!timeline.contains(header)) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                if (content) {
                    content.style.display = content.style.display === 'none' ? '' : 'none';
                }
            });
        }
    });
});
