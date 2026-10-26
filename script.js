
"use strict";

/* =========================================
   LinuxHub — Distribution Explorer
   ========================================= */

const $ = (selector) => document.querySelector(selector);

const translations = {
  ro: {
    navCatalog: "Catalog",
    navAbout: "Despre proiect",
    heroBadge: "EXPLOREAZĂ LUMEA LINUX",
    heroDescription: "Descoperă distribuții Linux, compară caracteristicile lor și găsește sistemul potrivit pentru calculatorul tău.",
    exploreButton: "Explorează catalogul",
    statDistros: "distribuții",
    statLanguages: "limbi",
    statDiscover: "de explorat",
    eyebrow: "BIBLIOTECA LINUX",
    catalogTitle: "Explorează distribuțiile",
    catalogDescription: "De la sisteme pentru începători până la distribuții avansate.",
    resultsLabel: "rezultate",
    searchPlaceholder: "Caută o distribuție...",
    categoryLabel: "Categorie",
    allCategories: "Toate categoriile",
    beginner: "Începători",
    general: "Uz general",
    advanced: "Avansați",
    security: "Securitate",
    gaming: "Gaming",
    server: "Servere",
    lightweight: "Calculatoare vechi",
    special: "Specializate",
    baseLabel: "Familie",
    allBases: "Toate familiile",
    independent: "Independentă",
    other: "Altele",
    sortLabel: "Sortare",
    sortName: "Nume A–Z",
    sortNameDesc: "Nume Z–A",
    sortBeginner: "Începători mai întâi",
    resetFilters: "Resetează",
    catalogReady: "Catalog disponibil pentru explorare",
    noResults: "Nu am găsit rezultate",
    noResultsDescription: "Încearcă alt termen sau schimbă filtrele.",
    clearSearch: "Șterge filtrele",
    aboutEyebrow: "DESPRE PROIECT",
    aboutTitle: "Bine ai venit la LinuxHub.",
    aboutText: "LinuxHub este un catalog educațional creat pentru a te ajuta să descoperi lumea Linux. Compară distribuții, află pentru ce sunt potrivite și vizitează site-urile lor oficiale.",
    aboutNote: "Cerințele diferă în funcție de versiune. Verifică documentația oficială înainte de instalare.",
    footerText: "Creat pentru curioșii lumii Linux.",
    backToTop: "Înapoi la catalog ↑",
    details: "Vezi detalii",
    website: "Site oficial ↗",
    origin: "Bază / familie",
    desktop: "Mediu desktop",
    audience: "Potrivită pentru",
    requirements: "Cerințe hardware orientative",
    minimumRAM: "Memorie RAM",
    disk: "Spațiu pe disc",
    strengths: "Avantaje",
    limitations: "De luat în considerare",
    installation: "Cum se instalează",
    installationText: "Descarcă imaginea ISO de pe site-ul oficial, creează un USB bootabil și testează sistemul în modul Live, dacă este disponibil. Fă o copie de siguranță a fișierelor înainte de instalare.",
    officialDocs: "Documentație oficială ↗",
    screenshot: "Previzualizare site oficial",
    imageUnavailable: "Imagine indisponibilă",
    beginnerUse: "Începători și utilizare zilnică",
    categoryNames: {
      beginner: "Începători",
      general: "Uz general",
      advanced: "Avansați",
      security: "Securitate",
      gaming: "Gaming",
      server: "Servere",
      lightweight: "Calculatoare vechi",
      special: "Specializate"
    }
  },
  en: {
    navCatalog: "Catalog",
    navAbout: "About project",
    heroBadge: "EXPLORE THE WORLD OF LINUX",
    heroDescription: "Discover Linux distributions, compare their features, and find a system that fits your computer.",
    exploreButton: "Explore catalog",
    statDistros: "distributions",
    statLanguages: "languages",
    statDiscover: "to explore",
    eyebrow: "LINUX LIBRARY",
    catalogTitle: "Explore distributions",
    catalogDescription: "From beginner-friendly systems to advanced distributions.",
    resultsLabel: "results",
    searchPlaceholder: "Search distributions...",
    categoryLabel: "Category",
    allCategories: "All categories",
    beginner: "Beginner",
    general: "General use",
    advanced: "Advanced",
    security: "Security",
    gaming: "Gaming",
    server: "Servers",
    lightweight: "Older computers",
    special: "Specialized",
    baseLabel: "Family",
    allBases: "All families",
    independent: "Independent",
    other: "Other",
    sortLabel: "Sort",
    sortName: "Name A–Z",
    sortNameDesc: "Name Z–A",
    sortBeginner: "Beginners first",
    resetFilters: "Reset",
    catalogReady: "Catalog ready to explore",
    noResults: "No results found",
    noResultsDescription: "Try another search term or change the filters.",
    clearSearch: "Clear filters",
    aboutEyebrow: "ABOUT THE PROJECT",
    aboutTitle: "Welcome to LinuxHub.",
    aboutText: "LinuxHub is an educational catalog designed to help you discover Linux. Compare distributions, learn what they are suited for, and visit their official websites.",
    aboutNote: "Requirements vary by release. Check official documentation before installing.",
    footerText: "Made for the curious Linux community.",
    backToTop: "Back to catalog ↑",
    details: "View details",
    website: "Official website ↗",
    origin: "Base / family",
    desktop: "Desktop environment",
    audience: "Best suited for",
    requirements: "Approximate hardware requirements",
    minimumRAM: "RAM",
    disk: "Disk space",
    strengths: "Advantages",
    limitations: "Things to consider",
    installation: "How to install",
    installationText: "Download the ISO from the official website, create a bootable USB drive, and try Live mode if available. Back up your files before installation.",
    officialDocs: "Official documentation ↗",
    screenshot: "Official website preview",
    imageUnavailable: "Image unavailable",
    beginnerUse: "Beginners and everyday use",
    categoryNames: {
      beginner: "Beginner",
      general: "General use",
      advanced: "Advanced",
      security: "Security",
      gaming: "Gaming",
      server: "Servers",
      lightweight: "Older computers",
      special: "Specialized"
    }
  },
  ru: {
    navCatalog: "Каталог",
    navAbout: "О проекте",
    heroBadge: "ИССЛЕДУЙ МИР LINUX",
    heroDescription: "Изучай дистрибутивы Linux, сравнивай их возможности и выбирай систему для своего компьютера.",
    exploreButton: "Открыть каталог",
    statDistros: "дистрибутивов",
    statLanguages: "языка",
    statDiscover: "для изучения",
    eyebrow: "БИБЛИОТЕКА LINUX",
    catalogTitle: "Исследуй дистрибутивы",
    catalogDescription: "От систем для новичков до продвинутых дистрибутивов.",
    resultsLabel: "результатов",
    searchPlaceholder: "Поиск дистрибутивов...",
    categoryLabel: "Категория",
    allCategories: "Все категории",
    beginner: "Для новичков",
    general: "Общее назначение",
    advanced: "Для опытных",
    security: "Безопасность",
    gaming: "Игры",
    server: "Серверы",
    lightweight: "Старые компьютеры",
    special: "Специальные",
    baseLabel: "Семейство",
    allBases: "Все семейства",
    independent: "Независимый",
    other: "Другие",
    sortLabel: "Сортировка",
    sortName: "Имя А–Я",
    sortNameDesc: "Имя Я–А",
    sortBeginner: "Сначала для новичков",
    resetFilters: "Сбросить",
    catalogReady: "Каталог готов к изучению",
    noResults: "Ничего не найдено",
    noResultsDescription: "Попробуй изменить запрос или фильтры.",
    clearSearch: "Сбросить фильтры",
    aboutEyebrow: "О ПРОЕКТЕ",
    aboutTitle: "Добро пожаловать в LinuxHub.",
    aboutText: "LinuxHub — образовательный каталог для знакомства с Linux. Сравнивай дистрибутивы, узнавай об их назначении и посещай официальные сайты.",
    aboutNote: "Требования зависят от версии. Перед установкой проверь официальную документацию.",
    footerText: "Для любознательных пользователей Linux.",
    backToTop: "Вернуться к каталогу ↑",
    details: "Подробнее",
    website: "Официальный сайт ↗",
    origin: "Основа / семейство",
    desktop: "Рабочее окружение",
    audience: "Для кого подходит",
    requirements: "Примерные требования",
    minimumRAM: "ОЗУ",
    disk: "Место на диске",
    strengths: "Преимущества",
    limitations: "Что учитывать",
    installation: "Как установить",
    installationText: "Скачай ISO с официального сайта, создай загрузочную USB-флешку и, если возможно, попробуй Live-режим. Перед установкой сохрани важные файлы.",
    officialDocs: "Официальная документация ↗",
    screenshot: "Предпросмотр официального сайта",
    imageUnavailable: "Изображение недоступно",
    beginnerUse: "Новички и повседневное использование",
    categoryNames: {
      beginner: "Для новичков",
      general: "Общее назначение",
      advanced: "Для опытных",
      security: "Безопасность",
      gaming: "Игры",
      server: "Серверы",
      lightweight: "Старые компьютеры",
      special: "Специальные"
    }
  }
};

/*
 * Distro data:
 * logoDomain is used to fetch the website's favicon as a logo.
 * This is a website icon, not necessarily the official desktop logo.
 * Minimum requirements are approximate and should be checked with the project.
 */

const distroSeed = [
  ["Ubuntu","Canonical","Debian","beginner","GNOME","4 GB","25 GB","Desktop, study and everyday use","Easy to use, large community and broad software support.","Some versions can feel heavy on older computers.","ubuntu.com","https://ubuntu.com"],
  ["Fedora Workstation","Fedora Project","Red Hat","general","GNOME","4 GB","20 GB","Developers and modern desktop users","Recent software, strong security defaults and good developer tools.","Updates arrive frequently; some third-party codecs need extra setup.","fedoraproject.org","https://fedoraproject.org/workstation"],
  ["Linux Mint","Linux Mint Team","Ubuntu","beginner","Cinnamon","2 GB","20 GB","Windows switchers and everyday desktop use","Familiar desktop, convenient tools and multimedia support.","Some packages may be older than on rolling-release systems.","linuxmint.com","https://linuxmint.com"],
  ["Debian","Debian Project","Debian","general","GNOME, KDE, Xfce","2 GB","10 GB","Stable desktops and servers","Strong stability, broad architecture support and a huge repository.","Some stable packages are older than upstream releases.","debian.org","https://www.debian.org"],
  ["Arch Linux","Arch community","Arch","advanced","Choose your own","2 GB","10 GB","Experienced users who want control","Highly customizable, rolling releases and excellent documentation.","Manual installation and maintenance require learning.","archlinux.org","https://archlinux.org"],
  ["Manjaro","Manjaro Team","Arch","beginner","Xfce, KDE, GNOME","4 GB","30 GB","Desktop users interested in Arch-based systems","Convenient installer and hardware tools.","Its update schedule differs from Arch; review updates carefully.","manjaro.org","https://manjaro.org"],
  ["EndeavourOS","EndeavourOS Team","Arch","advanced","Xfce and others","2 GB","15 GB","Users learning Arch","Lightweight starting point with access to Arch repositories.","Requires comfort with terminal troubleshooting.","endeavouros.com","https://endeavouros.com"],
  ["Pop!_OS","System76","Ubuntu","beginner","COSMIC / GNOME depending on release","4 GB","20 GB","Students, creators and gaming desktops","Good hardware workflow and convenient GPU options.","Hardware-specific features vary by device and release.","system76.com","https://system76.com/pop"],
  ["elementary OS","elementary","Ubuntu","beginner","Pantheon","4 GB","32 GB","Users who prefer a clean desktop","Consistent interface and polished default apps.","App selection and customization differ from other desktops.","elementary.io","https://elementary.io"],
  ["Zorin OS","Zorin Group","Ubuntu","beginner","Zorin Desktop","2 GB","15 GB","New Linux users and Windows switchers","Familiar layouts and a guided desktop experience.","Some optional editions or features may be paid.","zorin.com","https://zorin.com/os"],
  ["Kubuntu","Kubuntu community","Ubuntu","beginner","KDE Plasma","2 GB","25 GB","Users who like a customizable desktop","Feature-rich desktop and many personalization options.","Many settings may overwhelm first-time users.","kubuntu.org","https://kubuntu.org"],
  ["Xubuntu","Xubuntu community","Ubuntu","beginner","Xfce","2 GB","20 GB","Everyday use on modest hardware","Lightweight desktop and familiar Ubuntu base.","Visual effects and some modern desktop conveniences are simpler.","xubuntu.org","https://xubuntu.org"],
  ["Lubuntu","Lubuntu community","Ubuntu","lightweight","LXQt","2 GB","20 GB","Older or low-resource computers","Light desktop and modest resource use.","A lighter desktop may have fewer integrated conveniences.","lubuntu.me","https://lubuntu.me"],
  ["Ubuntu MATE","Ubuntu MATE community","Ubuntu","beginner","MATE","2 GB","20 GB","Traditional desktop users","Classic desktop layout and approachable tools.","Interface is less focused on modern visual effects.","ubuntu-mate.org","https://ubuntu-mate.org"],
  ["Ubuntu Budgie","Ubuntu Budgie community","Ubuntu","beginner","Budgie","4 GB","25 GB","Desktop users wanting a modern interface","Clean panel and useful desktop applets.","May use more resources than very lightweight desktops.","ubuntubudgie.org","https://ubuntubudgie.org"],
  ["Ubuntu Studio","Ubuntu Studio team","Ubuntu","special","KDE Plasma","4 GB","32 GB","Audio, video and creative work","Creative software and multimedia workflow tools.","Large installation and specialist configuration may be needed.","ubuntustudio.org","https://ubuntustudio.org"],
  ["Ubuntu Unity","Ubuntu Unity community","Ubuntu","general","Unity","4 GB","25 GB","Users who prefer the Unity interface","Distinctive desktop layout and Ubuntu package base.","Smaller community than some mainstream Ubuntu flavours.","ubuntuunity.org","https://ubuntuunity.org"],
  ["KDE neon","KDE community","Ubuntu","general","KDE Plasma","4 GB","25 GB","KDE fans and desktop customization","New KDE Plasma releases on an Ubuntu LTS base.","The newest desktop components may need occasional troubleshooting.","neon.kde.org","https://neon.kde.org"],
  ["Linux Lite","Linux Lite team","Ubuntu","lightweight","Xfce","2 GB","20 GB","Older PCs and new Linux users","Simple tools and a familiar desktop.","Availability and system requirements depend on release.","linuxliteos.com","https://www.linuxliteos.com"],
  ["MX Linux","MX Linux team","Debian","general","Xfce, KDE, Fluxbox","2 GB","20 GB","Everyday desktop and older computers","Useful MX tools and a flexible Debian base.","The collection of tools can take time to learn.","mxlinux.org","https://mxlinux.org"],
  ["antiX","antiX team","Debian","lightweight","IceWM and other window managers","512 MB","7 GB","Very low-resource and older computers","Very light and works well on modest hardware.","Its interface is less familiar to many beginners.","antixlinux.com","https://antixlinux.com"],
  ["Q4OS","Q4OS team","Debian","lightweight","Trinity, KDE Plasma","1 GB","10 GB","Older computers and traditional desktop fans","Lightweight options and classic layouts.","The Trinity desktop looks different from modern defaults.","q4os.org","https://q4os.org"],
  ["Puppy Linux","Puppy Linux community","Independent","lightweight","JWM and others","512 MB","1 GB","Portable live systems and old hardware","Small images and a fast live environment.","Its workflow and package choices differ from mainstream systems.","puppylinux-woof-ce.github.io","https://puppylinux-woof-ce.github.io"],
  ["Bodhi Linux","Bodhi Linux team","Ubuntu","lightweight","Moksha","512 MB","10 GB","Lightweight and customizable desktops","Small footprint and a distinctive desktop.","Some users may need to configure extra applications.","bodhilinux.com","https://www.bodhilinux.com"],
  ["Peppermint OS","Peppermint team","Debian","lightweight","Xfce","2 GB","20 GB","Lightweight everyday computing","Simple setup and a flexible desktop.","The experience depends on the chosen base and edition.","peppermintos.com","https://peppermintos.com"],
  ["SparkyLinux","SparkyLinux team","Debian","general","LXQt, Xfce and others","2 GB","20 GB","Flexible desktop and specialist editions","Multiple editions and access to Debian packages.","Edition choices can be confusing for new users.","sparkylinux.org","https://sparkylinux.org"],
  ["Devuan","Devuan community","Debian","advanced","Xfce and others","2 GB","15 GB","Users who prefer init-system alternatives","Debian-derived system without systemd as its default init.","Some software integrations differ from mainstream Debian.","devuan.org","https://www.devuan.org"],
  ["Kali Linux","Offensive Security","Debian","security","Xfce and others","2 GB","20 GB","Authorized security testing and education","Large collection of security tools.","Not recommended as the default daily desktop for most beginners.","kali.org","https://www.kali.org"],
  ["Parrot Security","Parrot Project","Debian","security","MATE","4 GB","20 GB","Security learning, privacy and development","Security-oriented tools and a general-purpose option.","Security tools should only be used with permission.","parrotsec.org","https://parrotsec.org"],
  ["Tails","Tails Project","Debian","security","GNOME","2 GB","8 GB USB","Privacy-focused live sessions","Designed to reduce local traces and route connections through Tor.","Not intended as a regular installed desktop; limitations remain.","tails.net","https://tails.net"],
  ["Qubes OS","Qubes OS Project","Fedora","security","Xfce","16 GB","128 GB","Isolation-focused security workflows","Separates activities into security domains.","Requires compatible hardware and more memory than many desktops.","qubes-os.org","https://www.qubes-os.org"],
  ["BlackArch","BlackArch team","Arch","security","Multiple","4 GB","20 GB","Advanced security research","Large collection of security tools based on Arch.","Advanced setup; use tools only in authorized environments.","blackarch.org","https://blackarch.org"],
  ["Garuda Linux","Garuda team","Arch","gaming","KDE Plasma and others","8 GB","30 GB","Gaming and visual customization","Gaming-oriented tooling and attractive desktop presets.","Some editions are resource-heavy.","garudalinux.org","https://garudalinux.org"],
  ["CachyOS","CachyOS team","Arch","advanced","KDE Plasma and others","4 GB","20 GB","Performance-focused desktop users","Performance-oriented configuration and recent packages.","Performance varies by hardware and workload.","cachyos.org","https://cachyos.org"],
  ["Artix Linux","Artix community","Arch","advanced","Choose your own","2 GB","10 GB","Advanced users wanting init alternatives","Arch-like flexibility with several init choices.","More manual configuration and compatibility checks may be needed.","artixlinux.org","https://artixlinux.org"],
  ["Void Linux","Void Linux team","Independent","advanced","Choose your own","2 GB","10 GB","Experienced users and minimal systems","Independent rolling release and runit init.","Smaller ecosystem than the largest distributions.","voidlinux.org","https://voidlinux.org"],
  ["Alpine Linux","Alpine Linux team","Independent","server","No default desktop","512 MB","2 GB","Containers, servers and minimal installations","Small base system and security-focused design.","Not a drop-in desktop replacement; uses musl and BusyBox.","alpinelinux.org","https://alpinelinux.org"],
  ["Gentoo","Gentoo community","Independent","advanced","Choose your own","2 GB","20 GB","Users who want fine-grained build control","Highly configurable packages and compilation options.","Installation and maintenance require significant learning.","gentoo.org","https://www.gentoo.org"],
  ["NixOS","NixOS community","Independent","advanced","GNOME, KDE and others","4 GB","20 GB","Reproducible system configuration","Declarative configuration and reproducible builds.","The Nix model has a learning curve.","nixos.org","https://nixos.org"],
  ["openSUSE Tumbleweed","openSUSE community","Independent","general","KDE Plasma, GNOME","4 GB","40 GB","Desktop users who want rolling releases","Rolling updates and useful system administration tools.","Frequent updates require good maintenance habits.","get.opensuse.org","https://get.opensuse.org/tumbleweed"],
  ["openSUSE Leap","openSUSE community","Independent","general","KDE Plasma, GNOME","4 GB","40 GB","Stable desktops and development","Traditional release model and administration tools.","Package versions depend on the release lifecycle.","get.opensuse.org","https://get.opensuse.org/leap"],
  ["Mageia","Mageia community","Independent","general","KDE Plasma, GNOME","2 GB","20 GB","Traditional desktop Linux","Graphical administration tools and a community release model.","Smaller ecosystem than Ubuntu or Fedora.","mageia.org","https://www.mageia.org"],
  ["PCLinuxOS","PCLinuxOS community","Independent","general","KDE Plasma and others","2 GB","15 GB","Desktop users seeking a traditional system","Live environment and desktop-focused setup.","Release cadence and package availability differ from mainstream choices.","pclinuxos.com","https://www.pclinuxos.com"],
  ["Solus","Solus team","Independent","general","Budgie, GNOME, KDE","4 GB","20 GB","Desktop users who prefer a curated system","Desktop-focused project with a curated package set.","Smaller repositories than the largest distributions.","getsol.us","https://getsol.us"],
  ["Rocky Linux","Rocky Enterprise Software Foundation","Red Hat","server","GNOME optional; server-focused","2 GB","20 GB","Enterprise-compatible servers","Enterprise-oriented lifecycle and compatibility goals.","Desktop users may prefer a desktop-focused distribution.","rockylinux.org","https://rockylinux.org"],
  ["AlmaLinux","AlmaLinux OS Foundation","Red Hat","server","GNOME optional; server-focused","2 GB","20 GB","Servers and enterprise workloads","Community-governed enterprise Linux option.","Desktop experience is not its main focus.","almalinux.org","https://almalinux.org"],
  ["Oracle Linux","Oracle","Red Hat","server","GNOME optional; server-focused","2 GB","20 GB","Enterprise servers and Oracle environments","Enterprise support options and server tooling.","Check licensing and support terms for your intended use.","oracle.com","https://www.oracle.com/linux/"],
  ["CentOS Stream","CentOS Project","Red Hat","server","GNOME optional","2 GB","20 GB","Developers and enterprise Linux contributors","Tracks development ahead of future RHEL releases.","Its role differs from the former CentOS Linux stable rebuild.","centos.org","https://www.centos.org"],
  ["Fedora Silverblue","Fedora Project","Red Hat","advanced","GNOME","4 GB","20 GB","Developers and users who want an immutable desktop","Atomic updates and rollback-friendly system design.","Traditional package installation workflows may differ.","fedoraproject.org","https://fedoraproject.org/atomic-desktops/silverblue"],
  ["Fedora Kinoite","Fedora Project","Red Hat","advanced","KDE Plasma","4 GB","20 GB","KDE users who want an immutable desktop","Atomic system design with KDE Plasma.","Some customization uses different workflows from traditional Fedora.","fedoraproject.org","https://fedoraproject.org/atomic-desktops/kinoite"],
  ["Fedora Sway Atomic","Fedora Project","Red Hat","advanced","Sway","4 GB","20 GB","Keyboard-driven desktop users","Atomic base and a tiling Wayland workflow.","Sway takes time to learn if you expect a conventional desktop.","fedoraproject.org","https://fedoraproject.org/atomic-desktops"],
  ["Fedora IoT","Fedora Project","Red Hat","server","No standard desktop","1 GB","4 GB","IoT and edge devices","Designed for edge and device workloads.","Not a normal desktop edition.","fedoraproject.org","https://fedoraproject.org/iot"],
  ["Ubuntu Server","Canonical","Ubuntu","server","No desktop by default","1 GB","5 GB","Home labs, web servers and services","Large documentation ecosystem and broad package support.","Command-line administration is commonly required.","ubuntu.com","https://ubuntu.com/server"],
  ["Raspberry Pi OS","Raspberry Pi","Debian","special","PIXEL / LXDE-derived","1 GB","8 GB","Raspberry Pi boards and education","Hardware-specific tools and educational resources.","Designed primarily for supported Raspberry Pi hardware.","raspberrypi.com","https://www.raspberrypi.com/software/"],
  ["DietPi","DietPi community","Debian","special","Optional","512 MB","2 GB","Small servers and single-board computers","Lightweight setup and software installation helpers.","Hardware support and features vary by device.","dietpi.com","https://dietpi.com"],
  ["Armbian","Armbian community","Debian","special","Optional","1 GB","8 GB","Supported ARM single-board computers","Images and configuration for many supported boards.","Check the exact board support status before installing.","armbian.com","https://www.armbian.com"],
  ["Bazzite","Universal Blue community","Fedora","gaming","KDE Plasma, GNOME","8 GB","40 GB","Gaming desktops and handheld PCs","Gaming-oriented image with an atomic update model.","Hardware, launchers and game compatibility vary.","bazzite.gg","https://bazzite.gg"],
  ["Nobara Linux","Nobara Project","Fedora","gaming","KDE Plasma, GNOME","8 GB","40 GB","Gaming and multimedia desktops","Gaming-focused tweaks and convenience tools.","Community project; updates may require attention.","nobaraproject.org","https://nobaraproject.org"],
  ["ChimeraOS","ChimeraOS team","Arch","gaming","Console-like interface","4 GB","20 GB","Living-room gaming PCs","Designed for controller-first gaming.","Hardware compatibility and supported configurations matter.","chimeraos.org","https://chimeraos.org"],
  ["SteamOS","Valve","Arch","gaming","Gaming Mode / KDE desktop","4 GB","20 GB","Supported Steam gaming hardware","Console-like Steam interface and gaming integration.","Official support is focused on supported Valve hardware; generic PC support varies.","steampowered.com","https://store.steampowered.com/steamos"],
  ["Batocera.linux","Batocera team","Independent","gaming","EmulationStation interface","2 GB","8 GB","Retro gaming systems","Convenient emulation-focused live system.","Game files and firmware must be legally obtained.","batocera.org","https://batocera.org"],
  ["Lakka","Lakka team","Independent","gaming","RetroArch interface","1 GB","4 GB","Retro gaming devices","Console-like RetroArch experience.","Device support and emulator performance vary.","lakka.tv","https://www.lakka.tv"],
  ["Recalbox","Recalbox team","Independent","gaming","EmulationStation interface","2 GB","8 GB","Retro gaming and arcade setups","Retro gaming-oriented interface and configuration.","Hardware compatibility varies by release.","recalbox.com","https://www.recalbox.com"],
  ["LibreELEC","LibreELEC team","Independent","special","Kodi","1 GB","4 GB","Dedicated media center PCs","Minimal Kodi-focused system.","Designed for media playback rather than general desktop use.","libreelec.tv","https://libreelec.tv"],
  ["OSMC","OSMC team","Debian","special","Kodi","1 GB","4 GB","Home media centers","Media-center experience with update tools.","Not intended as a full productivity desktop.","osmc.tv","https://osmc.tv"],
  ["OpenWrt","OpenWrt community","Independent","special","Web administration","128 MB","256 MB","Routers and network devices","Flexible networking, firewall and router features.","Requires compatible hardware and careful network configuration.","openwrt.org","https://openwrt.org"],
  ["VyOS","VyOS project","Debian","special","CLI / web tools vary","1 GB","4 GB","Routing, firewall and network labs","Network-focused system with configuration management.","Not a general-purpose desktop OS.","vyos.io","https://vyos.io"],
  ["Proxmox VE","Proxmox Server Solutions","Debian","server","Web management interface","2 GB","32 GB","Virtualization servers and home labs","Convenient VM and container management.","Dedicated hardware and storage planning are important.","proxmox.com","https://www.proxmox.com/en/proxmox-virtual-environment/overview"],
  ["TrueNAS SCALE","TrueNAS / iXsystems","Debian-derived","server","Web management interface","8 GB","16 GB","NAS and storage servers","Storage management, sharing and application features.","Requires compatible hardware and careful disk planning.","truenas.com","https://www.truenas.com"],
  ["Univention Corporate Server","Univention","Debian","server","Web management interface","4 GB","20 GB","Organization identity and IT services","Integrated administration for organizational services.","More specialized than a home desktop distribution.","univention.com","https://www.univention.com/products/ucs/"],
  ["Zentyal","Zentyal team","Ubuntu","server","Web management interface","2 GB","20 GB","Small-business network services","Web administration for common network roles.","Check current edition, feature and support availability.","zentyal.com","https://zentyal.com"],
  ["Endless OS","Endless OS Foundation","Debian","beginner","GNOME-derived","4 GB","32 GB","Education and offline-friendly computing","Curated applications and educational content.","The immutable design changes some traditional administration workflows.","endlessos.org","https://endlessos.org"],
  ["Vanilla OS","Vanilla OS team","Independent","advanced","GNOME","4 GB","25 GB","Users interested in immutable and transactional systems","Modern system design and controlled base-system changes.","Some workflows differ from traditional Ubuntu-like systems.","vanillaos.org","https://vanillaos.org"],
  ["blendOS","blendOS project","Independent","advanced","GNOME","4 GB","25 GB","Experimenters and advanced desktop users","Immutable approach with multiple software ecosystems.","Project design and feature availability can change between releases.","blendos.co","https://blendos.co"],
  ["Deepin","Deepin community","Independent","beginner","DDE","4 GB","30 GB","Desktop users who value visual polish","Distinctive desktop design and integrated applications.","Resource use and package freshness vary by release.","deepin.org","https://www.deepin.org"],
  ["BigLinux","BigLinux community","Independent","beginner","KDE Plasma","4 GB","25 GB","Desktop users and customization fans","Customized desktop with convenience tools.","Smaller user community than the largest distributions.","biglinux.com.br","https://www.biglinux.com.br"],
  ["Feren OS","Feren OS team","Ubuntu","beginner","KDE Plasma","4 GB","25 GB","Desktop users seeking a familiar layout","Desktop customization and familiar workflow.","Check the project's current release and maintenance status.","ferenos.weebly.com","https://ferenos.weebly.com"],
  ["Calculate Linux","Calculate Linux team","Gentoo","advanced","KDE, Cinnamon, Xfce","2 GB","20 GB","Advanced users and managed desktop deployments","Gentoo-based system with prebuilt editions and management tools.","Gentoo family knowledge is useful for advanced troubleshooting.","calculate-linux.org","https://www.calculate-linux.org"],
  ["Redcore Linux","Redcore team","Gentoo","advanced","KDE Plasma","4 GB","20 GB","Users interested in a Gentoo-based desktop","Offers a more accessible route into Gentoo-derived systems.","Check current release status and documentation before choosing.","redcorelinux.org","https://redcorelinux.org"],
  ["Archcraft","Archcraft team","Arch","advanced","Openbox, window managers","2 GB","10 GB","Minimal desktop and window-manager fans","Lightweight, stylish presets and a minimal base.","Some workflows need manual configuration.","archcraft.io","https://archcraft.io"],
  ["Clear Linux","Clear Linux Project","Independent","advanced","GNOME editions","4 GB","20 GB","Performance experiments and developers","Performance-oriented design and tooling.","Project maintenance and support status should be checked before adoption.","clearlinux.org","https://clearlinux.org"],
  ["ChromeOS Flex","Google","Other","special","ChromeOS interface","4 GB","16 GB","Web-focused use on supported PCs and Macs","Simple web-first interface and cloud integration.","Not a conventional Linux desktop; hardware support is certified and limited.","google.com","https://support.google.com/chromeosflex"],
  ["Nitrux","Nitrux team","Independent","advanced","NX Desktop / KDE-derived","4 GB","25 GB","Desktop experimenters","Distinctive desktop design and modern system concepts.","Check the current release model and supported installation method.","nxos.org","https://nxos.org"],
  ["Porteus","Porteus team","Independent","lightweight","Xfce, LXQt and others","512 MB","1 GB","Portable live USB systems","Small, portable and designed for removable media.","Package management and persistence work differently from mainstream distros.","porteus.org","https://porteus.org"],
  ["Slax","Slax team","Debian","lightweight","Fluxbox","512 MB","1 GB","Portable USB-based computing","Compact live system and a simple portable workflow.","Not designed to provide every feature of a full desktop system.","slax.org","https://www.slax.org"],
  ["KNOPPIX","KNOPPIX team","Debian","special","LXDE and others","1 GB","5 GB","Live demonstrations and system recovery","Long-running live Linux project with hardware detection.","Release availability may be less frequent than mainstream distributions.","knopper.net","https://www.knopper.net/knoppix/"],
  ["Rescuezilla","Rescuezilla team","Ubuntu-based","special","LXDE-derived","2 GB","1 GB USB","Backup, restore and disk recovery","Graphical backup and cloning workflows.","Use carefully and verify backups before modifying disks.","rescuezilla.com","https://rescuezilla.com"]
];

/* Turn the compact records into objects used by the interface. */

const distros = distroSeed.map((row, index) => {
  const [
    name, maintainer, base, category, desktop, ram, disk,
    audience, pros, cons, domain, website
  ] = row;

  return {
    id: index + 1,
    name,
    maintainer,
    base,
    category,
    desktop,
    ram,
    disk,
    audience,
    pros,
    cons,
    domain,
    website,
    docs: website,
    logo: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
    screenshot: `https://image.thum.io/get/width/1000/crop/650/noanimate/${website}`,
    description: `${name} este un sistem din familia ${base}, dezvoltat de ${maintainer}. Este orientat spre: ${audience.toLowerCase()}.`,
    searchText: `${name} ${maintainer} ${base} ${category} ${desktop} ${audience}`.toLowerCase()
  };
});

const categoryLabels = {
  beginner: "beginner",
  general: "general",
  advanced: "advanced",
  security: "security",
  gaming: "gaming",
  server: "server",
  lightweight: "lightweight",
  special: "special"
};

let currentLanguage = "ro";

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.ro[key] ?? key;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function safeURL(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function categoryLabel(category) {
  return t("categoryNames")?.[category] ?? category;
}

function getFilteredDistros() {
  const search = ($("#search")?.value ?? "").trim().toLocaleLowerCase();
  const category = $("#categoryFilter")?.value ?? "all";
  const base = $("#baseFilter")?.value ?? "all";
  const sort = $("#sortFilter")?.value ?? "name";

  let results = distros.filter((distro) => {
    const matchesSearch = !search || (
      `${distro.searchText} ${distro.description}`.toLocaleLowerCase().includes(search)
    );

    const matchesCategory = category === "all" || distro.category === category;

    let matchesBase = base === "all";
    if (base === "Debian") {
      matchesBase = ["Debian", "Ubuntu", "Ubuntu-based", "Debian-derived"].includes(distro.base);
    } else if (base === "Ubuntu") {
      matchesBase = ["Ubuntu", "Ubuntu-based"].includes(distro.base);
    } else if (base === "Arch") {
      matchesBase = distro.base === "Arch";
    } else if (base === "Fedora") {
      matchesBase = ["Fedora", "Red Hat"].includes(distro.base);
    } else if (base === "Red Hat") {
      matchesBase = distro.base === "Red Hat";
    } else if (base === "Independent") {
      matchesBase = distro.base === "Independent";
    } else if (base === "Other") {
      matchesBase = ![
        "Debian", "Ubuntu", "Ubuntu-based", "Debian-derived",
        "Arch", "Fedora", "Red Hat", "Independent"
      ].includes(distro.base);
    }

    return matchesSearch && matchesCategory && matchesBase;
  });

  if (sort === "name-desc") {
    results.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "beginner") {
    results.sort((a, b) => {
      const beginnerOrder = (d) => d.category === "beginner" ? 0 : 1;
      return beginnerOrder(a) - beginnerOrder(b) || a.name.localeCompare(b.name);
    });
  } else {
    results.sort((a, b) => a.name.localeCompare(b.name));
  }

  return results;
}

function renderCards() {
  const grid = $("#distroGrid");
  const empty = $("#emptyState");
  if (!grid || !empty) return;

  const results = getFilteredDistros();

  grid.innerHTML = results.map((distro) => `
    <article class="distro-card">
      <div class="card-top">
        <div class="distro-logo">
          <img
            src="${escapeHTML(distro.logo)}"
            alt="${escapeHTML(distro.name)} logo"
            loading="lazy"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null;this.src='https://www.google.com/s2/favicons?domain=linux.org&sz=128';"
          >
        </div>
        <div class="card-title-area">
          <h3>${escapeHTML(distro.name)}</h3>
          <div class="card-subtitle">${escapeHTML(distro.maintainer)}</div>
          <span class="category-tag">${escapeHTML(categoryLabel(distro.category))}</span>
        </div>
      </div>

      <p class="card-description">${escapeHTML(distro.description)}</p>

      <div class="card-meta">
        <span class="meta-chip">${escapeHTML(distro.base)}</span>
        <span class="meta-chip">${escapeHTML(distro.desktop)}</span>
      </div>

      <div class="card-actions">
        <button class="details-button" type="button" data-details="${distro.id}">
          ${escapeHTML(t("details"))} →
        </button>
        <a class="website-button"
          href="${escapeHTML(safeURL(distro.website))}"
          target="_blank" rel="noopener noreferrer">
          ↗
        </a>
      </div>
    </article>
  `).join("");

  $("#visibleCount").textContent = String(results.length);
  $("#totalCount").textContent = String(distros.length);
  empty.hidden = results.length > 0;
}

function renderDetails(id) {
  const distro = distros.find((item) => item.id === Number(id));
  if (!distro) return;

  const dialog = $("#detailsDialog");
  const content = $("#detailsContent");
  if (!dialog || !content) return;

  content.innerHTML = `
    <div class="details-hero">
      <img
        src="${escapeHTML(distro.logo)}"
        alt="${escapeHTML(distro.name)} logo"
        onerror="this.style.visibility='hidden'"
      >
      <div>
        <span class="category-tag">${escapeHTML(categoryLabel(distro.category))}</span>
        <h2>${escapeHTML(distro.name)}</h2>
        <p>${escapeHTML(distro.maintainer)}</p>
      </div>
    </div>

    <p class="details-description">${escapeHTML(distro.description)}</p>

    <img
      class="details-screenshot"
      src="${escapeHTML(distro.screenshot)}"
      alt="${escapeHTML(t("screenshot"))}: ${escapeHTML(distro.name)}"
      loading="lazy"
      onerror="this.style.display='none'"
    >

    <div class="details-section">
      <h3>${escapeHTML(t("requirements"))}</h3>
      <div class="details-grid">
        <div class="detail-item">
          <span>${escapeHTML(t("origin"))}</span>
          <strong>${escapeHTML(distro.base)}</strong>
        </div>
        <div class="detail-item">
          <span>${escapeHTML(t("desktop"))}</span>
          <strong>${escapeHTML(distro.desktop)}</strong>
        </div>
        <div class="detail-item">
          <span>${escapeHTML(t("minimumRAM"))}</span>
          <strong>${escapeHTML(distro.ram)}</strong>
        </div>
        <div class="detail-item">
          <span>${escapeHTML(t("disk"))}</span>
          <strong>${escapeHTML(distro.disk)}</strong>
        </div>
      </div>
      <p>${escapeHTML(t("audience"))}: ${escapeHTML(distro.audience)}.</p>
      <p><small>${escapeHTML(t("aboutNote"))}</small></p>
    </div>

    <div class="details-section">
      <h3>${escapeHTML(t("strengths"))}</h3>
      <p>${escapeHTML(distro.pros)}</p>
    </div>

    <div class="details-section">
      <h3>${escapeHTML(t("limitations"))}</h3>
      <p>${escapeHTML(distro.cons)}</p>
    </div>

    <div class="details-section">
      <h3>${escapeHTML(t("installation"))}</h3>
      <p>${escapeHTML(t("installationText"))}</p>
    </div>

    <div class="details-links">
      <a href="${escapeHTML(safeURL(distro.website))}"
        target="_blank" rel="noopener noreferrer">
        ${escapeHTML(t("website"))}
      </a>
      <a href="${escapeHTML(safeURL(distro.docs))}"
        target="_blank" rel="noopener noreferrer">
        ${escapeHTML(t("officialDocs"))}
      </a>
    </div>
  `;

  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDetails() {
  const dialog = $("#detailsDialog");
  if (dialog?.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "ro";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t(key);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = t(key);
    if (typeof value === "string") element.placeholder = value;
  });

  document.title = "LinuxHub — Linux Distribution Explorer";
  renderCards();

  if ($("#detailsDialog")?.open) {
    const selectedId = $("#detailsContent [data-distro-id]")?.dataset.distroId;
    if (selectedId) renderDetails(selectedId);
  }
}

function resetFilters() {
  $("#search").value = "";
  $("#categoryFilter").value = "all";
  $("#baseFilter").value = "all";
  $("#sortFilter").value = "name";
  renderCards();
}

/* Events */

$("#search")?.addEventListener("input", renderCards);
$("#categoryFilter")?.addEventListener("change", renderCards);
$("#baseFilter")?.addEventListener("change", renderCards);
$("#sortFilter")?.addEventListener("change", renderCards);

$("#resetFilters")?.addEventListener("click", resetFilters);
$("#clearSearch")?.addEventListener("click", resetFilters);

$("#languageSelect")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

$("#distroGrid")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (button) renderDetails(button.dataset.details);
});

$("#closeDialog")?.addEventListener("click", closeDetails);

$("#detailsDialog")?.addEventListener("click", (event) => {
  if (event.target === $("#detailsDialog")) closeDetails();
});

$("#detailsDialog")?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    $("#search")?.focus();
  }

  if (event.key === "Escape") {
    document.body.classList.remove("dialog-open");
  }
});

/* Initial render */

applyLanguage($("#languageSelect")?.value || "ro");
