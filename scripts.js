// Global function for language toggle
window.setLanguage = function(lang) {
    document.body.classList.remove('lang-en', 'lang-tr');
    document.body.classList.add('lang-' + lang);
    
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim().toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language (Default English)
    setLanguage('en');

    // Headshot görseli için stil iyileştirmeleri
    const headshot = document.querySelector('.headshot');
    if (headshot) {
        headshot.style.width = '200px';
        headshot.style.height = '200px';
        headshot.style.objectFit = 'cover';
        headshot.style.borderRadius = '50%';
        headshot.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
    }

    // Dark Mode Toggle Oluşturma ve Mantığı
    const langToggle = document.querySelector('.language-toggle');
    if (langToggle) {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'theme-toggle';
        themeBtn.innerHTML = '🌙'; // Varsayılan ikon
        themeBtn.title = 'Karanlık Modu Aç/Kapat';
        
        // Kayıtlı tercihi kontrol et
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeBtn.innerHTML = '☀️';
        }

        themeBtn.onclick = function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeBtn.innerHTML = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        };

        // Butonu dil seçeneğinin yanına (aynı ebeveyn içine) ekle
        langToggle.parentNode.insertBefore(themeBtn, langToggle);
    }

const timelineData = [
    {
        date: '2017 - 2025',
        title: {
            en: 'IT Manager, NKY Architects & Engineers, Ankara',
            tr: 'BT Yöneticisi, NKY Mimarlık & Mühendislik, Ankara'
        },
        description: {
            en: 'IT Management, Information Security Management (ISO 27001, GDPR, NATO FSC), IT Service Management, Backup & Recovery Systems, Google Workspace Management, Linux System Administration, Project Management, Agile Project Management, Windows Server System Administration, VMware Virtualization',
            tr: 'BT Yönetimi, Bilgi Güvenliği Yönetimi (ISO 27001, GDPR, NATO FSC), BT Hizmet Yönetimi, Yedekleme & Kurtarma Sistemleri, Google Workspace Yönetimi, Linux Sistem Yönetimi, Proje Yönetimi, Çevik Proje Yönetimi, Windows Sunucu Sistem Yönetimi, VMware Sanallaştırma'
        }
    },
    {
        date: '2012 - 2017',
        title: {
            en: 'DBA & Application Server Admin, Naval Forces, Ankara',
            tr: 'Veritabanı ve Uygulama Sunucusu Yöneticisi, Deniz Kuvvetleri, Ankara'
        },
        description: {
            en: 'Database (Oracle, PostgreSQL, MS SQL) Admin, Application Server (Oracle Weblogic, IIS, Glassfish) Admin, Software Development (.NET, Java, SQL, Oracle Forms/Reports)',
            tr: 'Veritabanı (Oracle, PostgreSQL, MS SQL) Yönetimi, Uygulama Sunucusu (Oracle Weblogic, IIS, Glassfish) Yönetimi, Yazılım Geliştirme (.NET, Java, SQL, Oracle Forms/Reports)'
        }
    },
    {
        date: '2014 - 2015',
        title: {
            en: 'IT Help Desk Coordinator, NATO, Kabul',
            tr: 'BT Yardım Masası Koordinatörü, NATO, Kabil'
        },
        description: {
            en: 'Afghan Mission Network Operation Center Help Desk Coordinator (ITIL Framework)',
            tr: 'Afgan Görev Ağı Operasyon Merkezi Yardım Masası Koordinatörü (ITIL Çerçevesi)'
        }
    },
    {
        date: '2008 - 2012',
        title: {
            en: 'IT System & Network & Security Administrator, Naval Forces, Yalova',
            tr: 'BT Sistem, Ağ ve Güvenlik Yöneticisi, Deniz Kuvvetleri, Yalova'
        },
        description: {
            en: 'MS Active Directory, MS Exchange Mail Server, File Server, SUN Storage, SUN Backup System, Terminal Server, Network Systems Engineering, CheckPoint Firewall, Information Systems (Include Network System) Security Audit',
            tr: 'MS Active Directory, MS Exchange Mail Sunucusu, Dosya Sunucusu, SUN Depolama, SUN Yedekleme Sistemi, Terminal Sunucusu, Ağ Sistemleri Mühendisliği, CheckPoint Güvenlik Duvarı, Bilgi Sistemleri (Ağ Sistemi Dahil) Güvenlik Denetimi'
        }
    },
    {
        date: '2001 - 2008',
        title: {
            en: 'IT System & Security Administrator, Naval Forces, Kocaeli',
            tr: 'BT Sistem ve Güvenlik Yöneticisi, Deniz Kuvvetleri, Kocaeli'
        },
        description: {
            en: '5000 Users MS Active Directory, MS Exchange Mail Server, File Server, IBM Storage, IBM Backup System, Terminal Server, CheckPoint Firewall, E-Safe Gateway, Etrust IDS (Intrusion Detection System) Administration and Configuration, Information Systems (Include Network System) Security Audit',
            tr: '5000 Kullanıcılı MS Active Directory, MS Exchange Mail Sunucusu, Dosya Sunucusu, IBM Depolama, IBM Yedekleme Sistemi, Terminal Sunucusu, CheckPoint Güvenlik Duvarı, E-Safe Ağ Geçidi, Etrust IDS (Saldırı Tespit Sistemi) Yönetimi ve Yapılandırması, Bilgi Sistemleri (Ağ Sistemi Dahil) Güvenlik Denetimi'
        }
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
        // Create spans for dual language support
        title.innerHTML = `
            <span class="lang-en">${item.title.en}</span>
            <span class="lang-tr">${item.title.tr}</span>
        `;

        let description = document.createElement('p');
        // Create spans for dual language support
        description.innerHTML = `
            <span class="lang-en">${item.description.en}</span>
            <span class="lang-tr">${item.description.tr}</span>
        `;
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
